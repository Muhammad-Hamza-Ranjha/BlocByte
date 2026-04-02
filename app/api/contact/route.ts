import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validServices = new Set([
  'web-app-development',
  'mobile-development',
  'ai-ml',
  'blockchain-web3',
  'gis',
  'staff-augmentation',
  'amazon-ecommerce',
  'trading-platform',
  'other',
]);

type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  submittedAt: string;
};

function normalizeString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function validatePayload(payload: unknown) {
  if (!payload || typeof payload !== 'object') {
    return { ok: false as const, error: 'Invalid contact form submission.' };
  }

  const entry = payload as Record<string, unknown>;
  const name = normalizeString(entry.name);
  const email = normalizeString(entry.email).toLowerCase();
  const company = normalizeString(entry.company);
  const service = normalizeString(entry.service);
  const message = normalizeString(entry.message);

  if (name.length < 2 || name.length > 120) {
    return {
      ok: false as const,
      error: 'Please enter your full name.',
    };
  }

  if (!emailPattern.test(email) || email.length > 160) {
    return {
      ok: false as const,
      error: 'Please enter a valid email address.',
    };
  }

  if (company.length > 160) {
    return {
      ok: false as const,
      error: 'Company name is too long.',
    };
  }

  if (service && !validServices.has(service)) {
    return {
      ok: false as const,
      error: 'Please choose a valid service option.',
    };
  }

  if (message.length < 20 || message.length > 5000) {
    return {
      ok: false as const,
      error: 'Please enter a message between 20 and 5000 characters.',
    };
  }

  return {
    ok: true as const,
    data: {
      name,
      email,
      company,
      service,
      message,
      submittedAt: new Date().toISOString(),
    } satisfies ContactSubmission,
  };
}

function buildSubmissionText(submission: ContactSubmission) {
  return [
    `New contact form submission`,
    '',
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company || 'Not provided'}`,
    `Service: ${submission.service || 'Not selected'}`,
    `Submitted at: ${submission.submittedAt}`,
    '',
    'Message:',
    submission.message,
  ].join('\n');
}

async function sendWithResend(submission: ContactSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return false;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: submission.email,
      subject: `New contact request from ${submission.name}`,
      text: buildSubmissionText(submission),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend delivery failed: ${response.status} ${errorBody}`);
  }

  return true;
}

async function sendToWebhook(submission: ContactSubmission) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const bearerToken = process.env.CONTACT_WEBHOOK_BEARER_TOKEN;
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (bearerToken) {
    headers.set('Authorization', `Bearer ${bearerToken}`);
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Webhook delivery failed: ${response.status} ${errorBody}`);
  }

  return true;
}

async function storeLocally(submission: ContactSubmission) {
  const dataDirectory = path.join(process.cwd(), 'data');
  const targetFile = path.join(dataDirectory, 'contact-submissions.ndjson');

  await mkdir(dataDirectory, { recursive: true });
  await appendFile(targetFile, `${JSON.stringify(submission)}\n`, 'utf8');
}

async function deliverSubmission(submission: ContactSubmission) {
  if (await sendWithResend(submission)) {
    return {
      message: 'Thanks for reaching out. Your message has been emailed to our team.',
    };
  }

  if (await sendToWebhook(submission)) {
    return {
      message: 'Thanks for reaching out. Your message has been forwarded to our team.',
    };
  }

  await storeLocally(submission);

  return {
    message:
      'Thanks for reaching out. Your message has been saved for review and we will follow up soon.',
  };
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { error: 'We could not read your submission. Please try again.' },
      { status: 400 }
    );
  }

  const validation = validatePayload(payload);

  if (!validation.ok) {
    return Response.json({ error: validation.error }, { status: 400 });
  }

  try {
    const result = await deliverSubmission(validation.data);
    return Response.json(result, { status: 200 });
  } catch (error) {
    console.error('Contact form delivery failed:', error);

    return Response.json(
      {
        error:
          'We could not send your message right now. Please try again or email hello@blocbytes.com.',
      },
      { status: 500 }
    );
  }
}

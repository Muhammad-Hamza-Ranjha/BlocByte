import { Resend } from 'resend';

export const runtime = 'nodejs';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeValue(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function validatePayload(payload) {
  if (!payload || typeof payload !== 'object') {
    return { error: 'Invalid request body.' };
  }

  const name = normalizeValue(payload.name);
  const email = normalizeValue(payload.email).toLowerCase();
  const subject = normalizeValue(payload.subject);
  const message = normalizeValue(payload.message);

  if (!name || !email || !message) {
    return { error: 'Name, email, and message are required.' };
  }

  if (!emailPattern.test(email)) {
    return { error: 'A valid email address is required.' };
  }

  return {
    data: {
      name,
      email,
      subject,
      message,
    },
  };
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { success: false, error: 'Invalid JSON payload.' },
      { status: 400 }
    );
  }

  const validation = validatePayload(payload);

  if (!validation.data) {
    return Response.json(
      { success: false, error: validation.error },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { success: false, error: 'Resend API key is not configured.' },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = validation.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject || 'Not provided');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ranjhah03@gmail.com'],
      replyTo: email,
      subject: subject || `New contact form message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject || 'Not provided'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend email error:', error);

      return Response.json(
        { success: false, error: 'Failed to send email.' },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: 'Email sent successfully.',
      data,
    });
  } catch (error) {
    console.error('Contact form email error:', error);

    return Response.json(
      { success: false, error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}

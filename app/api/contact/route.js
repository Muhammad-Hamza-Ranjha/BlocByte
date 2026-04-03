import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const MAX_REQUEST_BYTES = 10 * 1024;
const MAX_REQUESTS_PER_WINDOW = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const namePattern = /^[\p{L}\s]+$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resend = new Resend(process.env.RESEND_API_KEY);

const globalStore = globalThis;

if (!globalStore.__contactFormMemoryRateLimitStore) {
  globalStore.__contactFormMemoryRateLimitStore = new Map();
}

function normalizeSingleLineValue(value) {
  return typeof value === 'string'
    ? value.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim()
    : '';
}

function normalizeMultilineValue(value) {
  return typeof value === 'string' ? value.replace(/\r\n/g, '\n').trim() : '';
}

function stripHtmlTags(value) {
  return value.replace(/<[^>]*>/g, '');
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return (
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('fly-client-ip') ||
    'unknown'
  );
}

function getUpstashCredentials() {
  return {
    url:
      process.env.UPSTASH_REDIS_REST_URL ||
      process.env.KV_REST_API_URL ||
      '',
    token:
      process.env.UPSTASH_REDIS_REST_TOKEN ||
      process.env.KV_REST_API_TOKEN ||
      '',
  };
}

function getUpstashRateLimiter() {
  const { url, token } = getUpstashCredentials();

  if (!url || !token) {
    return null;
  }

  if (!globalStore.__contactFormUpstashRateLimiter) {
    globalStore.__contactFormUpstashRateLimiter = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.fixedWindow(MAX_REQUESTS_PER_WINDOW, '1 h'),
      prefix: 'ratelimit:contact-form',
      analytics: true,
    });
  }

  return globalStore.__contactFormUpstashRateLimiter;
}

function runMemoryRateLimit(identifier) {
  const store = globalStore.__contactFormMemoryRateLimitStore;
  const now = Date.now();

  for (const [key, entry] of store.entries()) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }

  const currentEntry = store.get(identifier);

  if (!currentEntry || currentEntry.resetAt <= now) {
    const resetAt = now + RATE_LIMIT_WINDOW_MS;
    store.set(identifier, {
      count: 1,
      resetAt,
    });

    return {
      success: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      reset: resetAt,
    };
  }

  if (currentEntry.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      success: false,
      remaining: 0,
      reset: currentEntry.resetAt,
    };
  }

  currentEntry.count += 1;

  return {
    success: true,
    remaining: MAX_REQUESTS_PER_WINDOW - currentEntry.count,
    reset: currentEntry.resetAt,
  };
}

async function rateLimitByIp(identifier) {
  const upstashRateLimiter = getUpstashRateLimiter();

  if (upstashRateLimiter) {
    return upstashRateLimiter.limit(identifier);
  }

  return runMemoryRateLimit(identifier);
}

function validatePayload(payload) {
  if (!payload || typeof payload !== 'object') {
    return { error: 'Invalid request body.' };
  }

  const rawName = normalizeSingleLineValue(payload.name);
  const name = stripHtmlTags(rawName);
  const email = normalizeSingleLineValue(payload.email).toLowerCase();
  const subject = normalizeSingleLineValue(payload.subject);
  const message = normalizeMultilineValue(payload.message);
  const honeypot = normalizeSingleLineValue(payload.honeypot);

  if (!name) {
    return { error: 'Name is required.' };
  }

  if (name.length < 2 || name.length > 100) {
    return { error: 'Name must be between 2 and 100 characters.' };
  }

  if (!namePattern.test(name)) {
    return { error: 'Name may only contain letters and spaces.' };
  }

  if (!email) {
    return { error: 'Email is required.' };
  }

  if (email.length > 254 || !emailPattern.test(email)) {
    return { error: 'A valid email address is required.' };
  }

  if (subject.length > 150) {
    return { error: 'Subject must be 150 characters or fewer.' };
  }

  if (!message) {
    return { error: 'Message is required.' };
  }

  if (message.length < 10 || message.length > 2000) {
    return { error: 'Message must be between 10 and 2000 characters.' };
  }

  return {
    data: {
      name,
      email,
      subject,
      message,
      honeypot,
    },
  };
}

export async function POST(request) {
  const contentLength = Number(request.headers.get('content-length') || '0');

  if (contentLength > MAX_REQUEST_BYTES) {
    return Response.json(
      { success: false, error: 'Request body is too large.' },
      { status: 413 }
    );
  }

  let rawBody;

  try {
    rawBody = await request.text();
  } catch {
    return Response.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  if (new TextEncoder().encode(rawBody).length > MAX_REQUEST_BYTES) {
    return Response.json(
      { success: false, error: 'Request body is too large.' },
      { status: 413 }
    );
  }

  let payload;

  try {
    payload = JSON.parse(rawBody);
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

  if (validation.data.honeypot) {
    return Response.json({
      success: true,
      message: 'Your message has been sent!',
    });
  }

  const ipAddress = getClientIp(request);
  const rateLimitResult = await rateLimitByIp(ipAddress);

  if (!rateLimitResult.success) {
    return Response.json(
      {
        success: false,
        error: 'Too many requests. Please try again later.',
      },
      {
        status: 429,
        headers: {
          'Retry-After': `${Math.max(
            1,
            Math.ceil((rateLimitResult.reset - Date.now()) / 1000)
          )}`,
        },
      }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { success: false, error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const safeName = escapeHtml(validation.data.name);
  const safeEmail = escapeHtml(validation.data.email);
  const safeSubject = escapeHtml(validation.data.subject || 'Not provided');
  const safeMessage = escapeHtml(validation.data.message).replace(/\n/g, '<br />');

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ranjhah03@gmail.com'],
      replyTo: validation.data.email,
      subject:
        validation.data.subject || `New contact form message from ${validation.data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      text: [
        `Name: ${validation.data.name}`,
        `Email: ${validation.data.email}`,
        `Subject: ${validation.data.subject || 'Not provided'}`,
        '',
        'Message:',
        validation.data.message,
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
      message: 'Your message has been sent!',
    });
  } catch (error) {
    console.error('Contact form email error:', error);

    return Response.json(
      { success: false, error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}

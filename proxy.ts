import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const THEME_SCRIPT_HASH = "'sha256-T8WMknLI6LYfJYng2YrJvuIXelApFdgjaoJYUsY1A6g='";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(randomUUID()).toString('base64');
  const isDev = process.env.NODE_ENV === 'development';
  const cspHeader = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' ${THEME_SCRIPT_HASH}${isDev ? " 'unsafe-eval'" : ''} https://www.google.com https://www.gstatic.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.google.com https://www.gstatic.com https://images.unsplash.com",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://www.google.com https://www.gstatic.com https://vitals.vercel-insights.com",
    "form-action 'self' https://www.google.com",
    "frame-src 'self' https://www.google.com https://www.gstatic.com",
    "frame-ancestors 'none'",
  ].join('; ');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

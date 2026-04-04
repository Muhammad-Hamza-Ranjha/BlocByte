import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isDev = process.env.NODE_ENV === 'development';

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(randomUUID()).toString('base64');
  const cspHeader = (
    isDev
      ? [
          "default-src 'self'",
          "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.gstatic.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https://www.google.com https://www.gstatic.com",
          "font-src 'self' data: https://fonts.gstatic.com",
          "connect-src 'self' https://www.google.com https://www.gstatic.com",
          "frame-src 'self' https://www.google.com https://www.gstatic.com",
          "object-src 'none'",
          "base-uri 'self'",
          "frame-ancestors 'none'",
          "form-action 'self' https://www.google.com",
        ]
      : [
          "default-src 'self'",
          `script-src 'self' 'nonce-${nonce}' https://www.google.com https://www.gstatic.com`,
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https://www.google.com https://www.gstatic.com",
          "font-src 'self' data: https://fonts.gstatic.com",
          "connect-src 'self' https://www.google.com https://www.gstatic.com",
          "frame-src 'self' https://www.google.com https://www.gstatic.com",
          "object-src 'none'",
          "base-uri 'self'",
          "frame-ancestors 'none'",
          "form-action 'self' https://www.google.com",
        ]
  ).join('; ');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
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

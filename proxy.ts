import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const THEME_SCRIPT_HASH = "'sha256-T8WMknLI6LYfJYng2YrJvuIXelApFdgjaoJYUsY1A6g='";
const NEXT_INLINE_SCRIPT_HASHES = [
  "'sha256-OBTN3RiyCV4Bq7dFqZ5a2pAXjnCcCYeTJMO2I/LYKeo='",
  "'sha256-MS5RcgjuPQsYU5ITGOhCPEM7zOD0NIWFjk0beJl8ZiI='",
  "'sha256-hpcCcxQrDyfZ92xFPKP5qKiwoekmgF3liLXKCTsFin8='",
  "'sha256-iOAbHpmTjcHFhnkrew0CXQ9OLf5a0jrnzdXeLr7KMSc='",
  "'sha256-/V0yJxXzkV0R2+cKdyjsylXx8SKu+Fv+W5F2nEk/Wa8='",
  "'sha256-xfjz5tAbG/F7PBFAOuPPnz1V6XbMFAqS4FfB1ANdJ1k='",
  "'sha256-FItOL9CQtAy6QsZJ1JU8SrtYu2VH0sY7iW7g1Y2/uD4='",
  "'sha256-8rTkSSMGoQaRO0Z0B6JShy7Jn0GyE769bPoG7CFftDY='",
  "'sha256-phhKG508pTF7brKvlCtnfAlOSGx7tCQic09Requv9ko='",
  "'sha256-7Pio7oQ78BBabji689SatWrfXAHU8kRJ059Rt/pdAEE='",
  "'sha256-PV17r3iwKmwXEDaq6UN324VoLMfSjA6fkbM4otyTw/U='",
  "'sha256-vfAEkGv6Cql0ObHZZJT4cGWMaMx0LPqRrkqvIs+1zvM='",
  "'sha256-RiKiuU0CuzZz+ubF2IsHScb5ss8wvGQBdiW9BMfJ7Ws='",
  "'sha256-TkOevqLlyI2qaS5ZbXRMJTwvGDxDKKaKMRXpg09tD3Q='",
  "'sha256-0Qer7wjCRuuFel5j5IPEnEoTeeAsvQtiPjMqw9n8Vos='",
  "'sha256-gi0rwFWnYB6iJ/vuKWObtTNlqcoMHKVJKgIkwjKJ2GE='",
  "'sha256-xKgNADMDR4gNSLYlkWkGdM6bzvInwFXivnITGwoHkio='",
].join(' ');

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(randomUUID()).toString('base64');
  const cspHeader = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' ${THEME_SCRIPT_HASH} ${NEXT_INLINE_SCRIPT_HASHES} https://www.google.com https://www.gstatic.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.google.com https://www.gstatic.com",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://www.google.com https://www.gstatic.com",
    "frame-src 'self' https://www.google.com https://www.gstatic.com",
    "frame-ancestors 'none'",
    "form-action 'self'",
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

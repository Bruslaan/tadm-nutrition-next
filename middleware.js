import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en-US', 'de-DE'];
const defaultLocale = 'en-US';

function getLocale(request) {
  const headers = { 'accept-language': request.headers.get('accept-language') || 'en-US,en;q=0.5' };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Exclude static files, public assets, and Next.js internal routes
  const staticFileRegex = /\.(jpg|jpeg|png|gif|svg|ico|css|js|json)$/i;
  const excludePathRegex = /^\/(_next|static|favicon\.ico)/;

  if (staticFileRegex.test(pathname) || excludePathRegex.test(pathname)) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has a locale, continue without modification
  if (pathnameHasLocale) return NextResponse.next();

  // Get the preferred locale
  const locale = getLocale(request);

  // Redirect to localized path
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Exclude _next/static, _next/image, and static files
    '/((?!_next/static|_next/image|favicon.ico).*)'
  ]
};

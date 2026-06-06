import { NextResponse, NextRequest } from 'next/server';
import { defaultLocale, getLocaleFromPathname, locales } from './lib/i18n';

function getLocale(request: NextRequest): string {
  return getLocaleFromPathname(request.nextUrl.pathname) || defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclude static files, public assets, Next.js internal routes, and SEO files
  const staticFileRegex = /\.(jpg|jpeg|png|gif|svg|ico|css|js|json)$/i;
  const excludePathRegex = /^\/(_next|static|favicon\.ico|sitemap\.xml|robots\.txt|api)/;

  if (staticFileRegex.test(pathname) || excludePathRegex.test(pathname)) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has a locale, continue without modification
  if (pathnameHasLocale) return NextResponse.next();

  // Prevent redirecting root-level SEO files to localized paths
  if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
    return NextResponse.next();
  }

  // Get the preferred locale
  const locale = getLocale(request);

  // Redirect to localized path (without /site/)
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)'
  ]
};

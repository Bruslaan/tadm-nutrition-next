export const locales = ['en', 'de', 'ru', 'uk'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  return pathLocale ?? defaultLocale;
}

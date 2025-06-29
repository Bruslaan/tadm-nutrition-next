import { ReactNode } from 'react';
import ShopifyAnalytics from '../lib/shopify/shopify-analytics';
import { cookies } from 'next/headers';
import { getCart } from '../lib/shopify';
import { getDictionary } from './[lang]/site/dictionaries';
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export default async function Layout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: 'en' | 'de' }>;
}) {
  const cartId = (await cookies()).get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  const { lang } = await params;
  const dict = await getDictionary(lang ?? 'en');

  return (
    <html lang={lang} dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${baseUrl}/${lang}/site/`} />
        <link rel="alternate" href={`${baseUrl}/en/site/`} hrefLang="en" />
        <link rel="alternate" href={`${baseUrl}/de/site/`} hrefLang="de" />
        <link rel="alternate" href={`${baseUrl}/en/site/`} hrefLang="x-default" />
        <ShopifyAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}

import { CartProvider } from '../../components/cart/cart-context';
import { Navbar } from '../../components/layout/navbar';
import { getCart } from '../../lib/shopify';
import { ensureStartsWith } from '../../lib/utils';
import { Urbanist } from 'next/font/google';
import { cookies } from 'next/headers';
import { ReactNode, Suspense } from 'react';
import '../globals.css';
import { DictionaryProvider } from '../DictProvider';
import { getDictionary } from './site/dictionaries';
import ShopifyAnalytics from '../../lib/shopify/shopify-analytics';
import RealTimeAnalytics from '../../components/RealTimeAnalytics';
import CookieConsent from '../../components/CookieConsent';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) {
  const { lang } = await params;
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: SITE_NAME!,
      template: `%s | ${SITE_NAME}`
    },
    robots: {
      follow: true,
      index: true
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/site/`,
      languages: {
        'en': `${baseUrl}/en/site/`,
        'de': `${baseUrl}/de/site/`,
        'x-default': `${baseUrl}/en/site/`
      }
    },
    other: {
      'google-site-verification': 'your-verification-code-here'
    },
    ...(twitterCreator &&
      twitterSite && {
        twitter: {
          card: 'summary_large_image',
          creator: twitterCreator,
          site: twitterSite
        }
      })
  };
}

const urbanist = Urbanist({ subsets: ['latin'] });

function generateAlternateLanguages(currentLang: 'en' | 'de', pathname: string) {
  const languages = ['en', 'de'];
  const alternates: { [key: string]: string } = {};

  languages.forEach((lang) => {
    if (lang !== currentLang) {
      alternates[lang] = `${baseUrl}/${lang}/site${pathname}`;
    }
  });

  return alternates;
}

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
    <>
      <CookieConsent />
      <ShopifyAnalytics />
      <RealTimeAnalytics />
      <DictionaryProvider dictionary={dict} lang={lang}>
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main className={urbanist.className}>{children}</main>
        </CartProvider>
      </DictionaryProvider>
    </>
  );
}

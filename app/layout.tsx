import { ReactNode } from 'react';
import Script from 'next/script';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = 'https://www.tadm-nutrition.com';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME || 'tadm Nutrition',
    template: `%s | ${SITE_NAME || 'tadm Nutrition'}`
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION
  }
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-black dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        {children}
        <Script
          defer
          src="https://analyticsvibe-production.up.railway.app/tracker.js"
          data-website-id="3c2515d0-6388-4428-b7f3-22c58db8c563"
          data-domain="https://www.tadm-nutrition.com/"
        />
      </body>
    </html>
  );
}

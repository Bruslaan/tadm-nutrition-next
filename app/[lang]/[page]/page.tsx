import type { Metadata } from 'next';

import Prose from '../../../components/prose';
import { getPage } from '../../../lib/shopify';
import { notFound } from 'next/navigation';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata(props: {
  params: Promise<{ lang: 'en' | 'de'; page: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { lang, page: pageHandle } = params;
  const page = await getPage(pageHandle);

  if (!page) return notFound();

  const title = page.seo?.title || page.title;
  const description = page.seo?.description || page.bodySummary;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}/${pageHandle}`,
      languages: {
        en: `${baseUrl}/en/${pageHandle}`,
        de: `${baseUrl}/de/${pageHandle}`,
        'x-default': `${baseUrl}/de/${pageHandle}`
      }
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${lang}/${pageHandle}`,
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) return notFound();

  return (
    <section className="mx-auto mt-14 max-w-7xl p-5 py-5">
      <h1 className="mb-8 text-center text-xl font-bold md:text-5xl">{page.title}</h1>
      <Prose className="mb-8" html={page.body as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
      </p>
    </section>
  );
}

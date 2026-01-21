import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { cache } from 'react';
import { notionClient, getBlogDatabaseId } from '@/lib/notion';
import { isArticle } from '@/lib/notion/types';
import { NotionRenderer } from '@/components/blog/NotionRenderer';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

const baseUrl = 'https://www.tadm-nutrition.com';

function isValidSlug(slug: string[] | undefined): slug is [string, string] {
  return Array.isArray(slug) && slug.length === 2 && slug.every((s) => typeof s === 'string');
}

const getArticle = cache(async (date: string, slug: string, lang: 'en' | 'de') => {
  try {
    return await notionClient.getPageContent(getBlogDatabaseId(lang), {
      and: [
        { property: 'published', date: { equals: date } },
        { property: 'slug', rich_text: { equals: slug } }
      ]
    });
  } catch {
    return null;
  }
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: 'en' | 'de'; slug: string[] }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isValidSlug(slug)) {
    return { title: 'Article Not Found' };
  }

  const [date, articleSlug] = slug;
  const articleData = await getArticle(date, articleSlug, lang);

  if (!articleData) {
    return { title: 'Article Not Found' };
  }

  return {
    title: articleData.title,
    openGraph: {
      title: articleData.title,
      type: 'article',
      url: `${baseUrl}/${lang}/blog/${date}/${articleSlug}`,
      images: articleData.coverImage ? [{ url: articleData.coverImage }] : []
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/blog/${date}/${articleSlug}`,
      languages: {
        en: `${baseUrl}/en/blog/${date}/${articleSlug}`,
        de: `${baseUrl}/de/blog/${date}/${articleSlug}`,
        'x-default': `${baseUrl}/de/blog/${date}/${articleSlug}`
      }
    }
  };
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ lang: 'en' | 'de'; slug: string[] }>;
}) {
  const { lang, slug } = await params;

  if (!isValidSlug(slug)) {
    notFound();
  }

  const [date, articleSlug] = slug;
  const articleData = await getArticle(date, articleSlug, lang);

  if (!articleData) {
    notFound();
  }

  const { article, coverImage, title } = articleData;

  return (
    <article className="mx-auto mb-8 mt-24 max-w-[768px] p-4">
      <h1 className="mb-6 text-3xl font-bold md:text-5xl">{title}</h1>
      {coverImage && (
        <div className="mb-8 h-[400px] overflow-hidden rounded-xl">
          <Image
            loading="eager"
            className="h-full w-full object-cover"
            src={coverImage}
            alt={title}
            width={768}
            height={400}
          />
        </div>
      )}
      <NotionRenderer recordMap={article} />
    </article>
  );
}

export async function generateStaticParams() {
  const languages: ('en' | 'de')[] = ['en', 'de'];
  const params: { lang: string; slug: string[] }[] = [];

  for (const lang of languages) {
    try {
      const articles = await notionClient.getDatabaseEntries(getBlogDatabaseId(lang), isArticle);

      articles.forEach(({ published, slug }) => {
        params.push({
          lang,
          slug: [published, slug]
        });
      });
    } catch (e) {
      console.error(`Error fetching articles for ${lang}:`, e);
    }
  }

  return params;
}

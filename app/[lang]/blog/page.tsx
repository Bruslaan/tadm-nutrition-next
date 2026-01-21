import { Metadata } from 'next';
import { notionClient, getBlogDatabaseId } from '@/lib/notion';
import { isArticle } from '@/lib/notion/types';
import { BlogCard } from '@/components/blog/BlogCard';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: 'en' | 'de' }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: 'Knowledge Hub - Blog',
    description:
      lang === 'de'
        ? 'Entdecken Sie unsere Artikel über Ernährung und Gesundheit'
        : 'Discover our articles about nutrition and health',
    alternates: {
      canonical: `${baseUrl}/${lang}/blog`,
      languages: {
        en: `${baseUrl}/en/blog`,
        de: `${baseUrl}/de/blog`,
        'x-default': `${baseUrl}/de/blog`
      }
    }
  };
}

export default async function BlogPage({
  params
}: {
  params: Promise<{ lang: 'en' | 'de' }>;
}) {
  const { lang } = await params;
  const articles = await notionClient.getDatabaseEntries(getBlogDatabaseId(lang), isArticle);

  return (
    <main className="pb-16 pt-24">
      <h1 className="mx-auto mb-12 max-w-xl text-center text-xl md:text-6xl">
        {lang === 'de' ? 'WILLKOMMEN IM KNOWLEDGE HUB' : 'WELCOME TO OUR KNOWLEDGE HUB'}
      </h1>
      <div className="mx-auto grid max-w-[900px] grid-cols-12 gap-y-5 p-4 md:gap-14">
        {articles.map((article, index) => (
          <BlogCard key={article.id} article={article} spotlight={index === 0} lang={lang} />
        ))}
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }];
}

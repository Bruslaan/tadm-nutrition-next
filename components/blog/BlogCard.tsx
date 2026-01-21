import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/lib/notion/types';

interface BlogCardProps {
  article: Article;
  spotlight?: boolean;
  lang: 'en' | 'de';
}

export function BlogCard({ article, spotlight, lang }: BlogCardProps) {
  const formattedDate = article.published.replace(/\//g, '-');
  const articleSlug = `/${lang}/blog/${formattedDate}/${article.slug}`;

  const columns = spotlight ? 'col-span-12' : 'md:col-span-6 col-span-12';

  return (
    <Link
      href={articleSlug}
      className={`relative h-[15rem] w-full overflow-hidden rounded-xl bg-neutral-200 md:h-[23rem] ${columns}`}
    >
      <Image
        loading="eager"
        className="h-full w-full object-cover"
        src={article.coverImage}
        alt={article.title}
        width={600}
        height={600}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4 text-white">
        <h2 className="mb-2 text-xl md:text-3xl">{article.title}</h2>
        <p>{article.tags?.[0]?.name || 'Insights'}</p>
        <div className="flex justify-end">
          <p className="uppercase">{lang === 'de' ? 'Weiterlesen' : 'Read Full'}</p>
        </div>
      </div>
    </Link>
  );
}

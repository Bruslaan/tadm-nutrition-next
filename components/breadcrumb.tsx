import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  lang: 'en' | 'de';
}

export default function Breadcrumb({ items, lang }: BreadcrumbProps) {
  const homeText = lang === 'de' ? 'Startseite' : 'Home';
  
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeText,
        item: `/${lang}/site/`
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.href
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd)
        }}
      />
      <nav aria-label="Breadcrumb" className="flex py-4">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href={`/${lang}/site/`}
              className="text-gray-500 hover:text-gray-700"
            >
              {homeText}
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
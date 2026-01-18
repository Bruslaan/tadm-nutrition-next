import { getCollection, getCollectionProducts } from '../../../../../lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from '../../../../../components/grid';
import ProductGridItems from '../../../../../components/layout/product-grid-items';
import { defaultSort, sorting } from '../../../../../lib/constants';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata(props: {
  params: Promise<{ collection: string; lang: 'en' | 'de' }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { collection: collectionHandle, lang } = params;
  const collection = await getCollection(collectionHandle);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/site/search/${collectionHandle}`,
      languages: {
        en: `${baseUrl}/en/site/search/${collectionHandle}`,
        de: `${baseUrl}/de/site/search/${collectionHandle}`,
        'x-default': `${baseUrl}/en/site/search/${collectionHandle}`
      }
    },
    openGraph: {
      title: collection.seo?.title || collection.title,
      description:
        collection.seo?.description || collection.description || `${collection.title} products`,
      type: 'website',
      url: `${baseUrl}/${lang}/site/search/${collectionHandle}`,
      siteName: 'tadm Nutrition'
    }
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}

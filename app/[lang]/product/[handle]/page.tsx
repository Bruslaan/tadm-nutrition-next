import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductProvider } from '../../../../components/product/product-context';
import { HIDDEN_PRODUCT_TAG } from '../../../../lib/constants';
import { getProduct, getProductRecommendations } from '../../../../lib/shopify';
import DynamicProductPage from '../../../../components/dynamicProductPage';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata(props: {
  params: Promise<{ handle: string; lang: 'en' | 'de' }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { handle, lang } = params;
  const product = await getProduct(handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/product/${handle}`,
      languages: {
        en: `${baseUrl}/en/product/${handle}`,
        de: `${baseUrl}/de/product/${handle}`,
        'x-default': `${baseUrl}/de/product/${handle}`
      }
    },
    openGraph: url
      ? {
          title: product.seo.title || product.title,
          description: product.seo.description || product.description,
          type: 'website',
          url: `${baseUrl}/${lang}/product/${handle}`,
          siteName: 'tadm Nutrition',
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string; lang: 'en' | 'de' }>;
}) {
  const params = await props.params;
  const { handle, lang } = params;
  const product = await getProduct(handle);
  if (!product) return notFound();

  const relatedProducts = await getProductRecommendations(product.id);

  const allProducts = [product, ...relatedProducts];
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage?.url,
    brand: {
      '@type': 'Brand',
      name: 'tadm Nutrition'
    },
    category: 'Health & Wellness > Dietary Supplements',
    manufacturer: {
      '@type': 'Organization',
      name: 'tadm Nutrition',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'DE'
      }
    },
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
      url: `${baseUrl}/${lang}/product/${handle}`,
      seller: {
        '@type': 'Organization',
        name: 'tadm Nutrition'
      }
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/${lang}`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${baseUrl}/${lang}/search`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.title,
        item: `${baseUrl}/${lang}/product/${handle}`
      }
    ]
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd)
        }}
      />
      <DynamicProductPage allProducts={allProducts} />
    </ProductProvider>
  );
}

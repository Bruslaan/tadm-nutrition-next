import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductProvider } from '../../../../../components/product/product-context';
import { HIDDEN_PRODUCT_TAG } from '../../../../../lib/constants';
import { getProduct, getProductRecommendations } from '../../../../../lib/shopify';
import DynamicProductPage from '../../../../../components/dynamicProductPage';

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

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
        'max-snippet': -1,
      }
    },
    alternates: {
      canonical: `https://tadm-nutrition.com/product/${product.handle}`
    },
    openGraph: url
      ? {
          title: product.seo.title || product.title,
          description: product.seo.description || product.description,
          type: 'website',
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

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
  const params = await props.params;
  const product = await getProduct(params.handle);
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
      name: 'TADM Nutrition'
    },
    category: 'Health & Wellness > Dietary Supplements',
    manufacturer: {
      '@type': 'Organization',
      name: 'TADM Nutrition',
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
      url: `https://tadm-nutrition.com/product/${product.handle}`,
      seller: {
        '@type': 'Organization',
        name: 'TADM Nutrition'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
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
        item: 'https://tadm-nutrition.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://tadm-nutrition.com/search'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.title,
        item: `https://tadm-nutrition.com/product/${product.handle}`
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

import { getCollections, getPages, getProducts } from '../lib/shopify';
import { validateEnvironmentVariables } from '../lib/utils';
import { MetadataRoute } from 'next';

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = 'https://www.tadm-nutrition.com';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Basic static routes that don't require Shopify API
  const routesMap = [
    // Main pages for both languages
    { url: `${baseUrl}/en/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/`, lastModified: new Date().toISOString() },
    // Product pages
    { url: `${baseUrl}/en/algae/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/algae/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/cannabis/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/cannabis/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/cumin/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/cumin/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/mix/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/mix/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/nature/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/nature/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/softgel/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/softgel/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/walnut/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/walnut/`, lastModified: new Date().toISOString() }
  ];

  const collectionsPromise = getCollections().then((collections) =>
    collections.flatMap((collection) => [
      {
        url: `${baseUrl}/en${collection.path}`,
        lastModified: collection.updatedAt
      },
      {
        url: `${baseUrl}/de${collection.path}`,
        lastModified: collection.updatedAt
      }
    ])
  );

  const productsPromise = getProducts({}).then((products) =>
    products.flatMap((product) => [
      {
        url: `${baseUrl}/en/product/${product.handle}`,
        lastModified: product.updatedAt
      },
      {
        url: `${baseUrl}/de/product/${product.handle}`,
        lastModified: product.updatedAt
      }
    ])
  );

  const pagesPromise = getPages().then((pages) =>
    pages.flatMap((page) => [
      {
        url: `${baseUrl}/en/${page.handle}`,
        lastModified: page.updatedAt
      },
      {
        url: `${baseUrl}/de/${page.handle}`,
        lastModified: page.updatedAt
      }
    ])
  );

  let fetchedRoutes: Route[] = [];

  // Only try to fetch Shopify data if environment variables are available
  try {
    validateEnvironmentVariables();
    fetchedRoutes = (await Promise.all([collectionsPromise, productsPromise, pagesPromise])).flat();
  } catch (error) {
    // Log error but don't fail - return static routes only
    console.warn('Shopify API not available for sitemap generation:', error);
    fetchedRoutes = [];
  }

  return [...routesMap, ...fetchedRoutes];
}

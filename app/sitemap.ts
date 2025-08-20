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
  validateEnvironmentVariables();

  const routesMap = [
    // Main pages for both languages
    { url: `${baseUrl}/en/site/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/site/`, lastModified: new Date().toISOString() },
    // Product pages
    { url: `${baseUrl}/en/site/algae/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/site/algae/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/site/cannabis/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/site/cannabis/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/site/cumin/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/site/cumin/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/site/mix/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/site/mix/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/site/nature/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/site/nature/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/site/softgel/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/site/softgel/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/en/site/walnut/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/de/site/walnut/`, lastModified: new Date().toISOString() }
  ];

  const collectionsPromise = getCollections().then((collections) =>
    collections.flatMap((collection) => [
      {
        url: `${baseUrl}/en/site${collection.path}`,
        lastModified: collection.updatedAt
      },
      {
        url: `${baseUrl}/de/site${collection.path}`,
        lastModified: collection.updatedAt
      }
    ])
  );

  const productsPromise = getProducts({}).then((products) =>
    products.flatMap((product) => [
      {
        url: `${baseUrl}/en/site/product/${product.handle}`,
        lastModified: product.updatedAt
      },
      {
        url: `${baseUrl}/de/site/product/${product.handle}`,
        lastModified: product.updatedAt
      }
    ])
  );

  const pagesPromise = getPages().then((pages) =>
    pages.flatMap((page) => [
      {
        url: `${baseUrl}/en/site/${page.handle}`,
        lastModified: page.updatedAt
      },
      {
        url: `${baseUrl}/de/site/${page.handle}`,
        lastModified: page.updatedAt
      }
    ])
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (await Promise.all([collectionsPromise, productsPromise, pagesPromise])).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchedRoutes];
}

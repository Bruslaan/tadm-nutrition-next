import { getCollections, getPages, getProducts } from '../lib/shopify';
import { validateEnvironmentVariables } from '../lib/utils';
import { notionClient, getBlogDatabaseId } from '../lib/notion';
import { isArticle } from '../lib/notion/types';
import { MetadataRoute } from 'next';
import { locales, type Locale } from '../lib/i18n';

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = 'https://www.tadm-nutrition.com';

// Known problematic articles to exclude from sitemap
const EXCLUDED_SLUGS = [
  'moeglichkeiten-und-grenzen-der-schlafueberwachung-mit-Smartwaches'
];

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Basic static routes that don't require Shopify API
  const now = new Date().toISOString();
  const staticPages = ['', 'blog', 'algae', 'cannabis', 'cumin', 'mix', 'nature', 'softgel', 'walnut'];
  const routesMap = locales.flatMap((lang) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${lang}/${page ? `${page}/` : ''}`,
      lastModified: now
    }))
  );

  const collectionsPromise = getCollections().then((collections) =>
    collections.flatMap((collection) =>
      locales.map((lang) => ({
        url: `${baseUrl}/${lang}${collection.path}`,
        lastModified: collection.updatedAt
      }))
    )
  );

  const productsPromise = getProducts({}).then((products) =>
    products.flatMap((product) =>
      locales.map((lang) => ({
        url: `${baseUrl}/${lang}/product/${product.handle}`,
        lastModified: product.updatedAt
      }))
    )
  );

  const pagesPromise = getPages().then((pages) =>
    pages.flatMap((page) =>
      locales.map((lang) => ({
        url: `${baseUrl}/${lang}/${page.handle}`,
        lastModified: page.updatedAt
      }))
    )
  );

  // Fetch blog articles from Notion
  const blogPromise = (async (): Promise<Route[]> => {
    const routes: Route[] = [];
    const languages: Locale[] = [...locales];

    for (const lang of languages) {
      try {
        const articles = await notionClient.getDatabaseEntries(getBlogDatabaseId(lang), isArticle);

        for (const article of articles) {
          // Skip known problematic articles
          if (EXCLUDED_SLUGS.includes(article.slug)) {
            continue;
          }

          routes.push({
            url: `${baseUrl}/${lang}/blog/${article.published}/${article.slug}`,
            lastModified: new Date().toISOString()
          });
        }
      } catch (error) {
        console.warn(`Error fetching blog articles for ${lang}:`, error);
      }
    }

    return routes;
  })();

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

  // Fetch blog routes separately (doesn't depend on Shopify env vars)
  let blogRoutes: Route[] = [];
  try {
    blogRoutes = await blogPromise;
  } catch (error) {
    console.warn('Error fetching blog routes for sitemap:', error);
    blogRoutes = [];
  }

  return [...routesMap, ...fetchedRoutes, ...blogRoutes];
}

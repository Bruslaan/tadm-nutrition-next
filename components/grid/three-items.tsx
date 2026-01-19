import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority,
  oldPrice
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
  oldPrice?: number;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="block aspect-square h-full w-full overflow-hidden"
        href={`site/product/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode,
            description: item.description,
            oldPrice
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid({ title }: { title: string }) {
  let homepageItems: Product[] = [];

  try {
    // Collections that start with `hidden-*` are hidden from the search page.
    homepageItems = await getCollectionProducts({
      collection: 'tadm-products'
    });

    console.log('Fetched homepage products:', homepageItems);
  } catch (error) {
    console.warn('Failed to fetch homepage products:', error);
    // Return empty grid or fallback content when Shopify API is unavailable
  }

  // Hardcoded old prices for special offer display
  const oldPrices = [39, 99, 74];

  return (
    <section
      id="products"
      className="relative mx-auto h-full min-h-[80vh] max-w-7xl overflow-hidden p-4"
    >
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <h2 className="mb-4 max-w-2xl text-3xl leading-none font-bold tracking-tight md:text-4xl xl:text-5xl dark:text-white">
        {title}
      </h2>
      {homepageItems.length > 0 ? (
        <div className="mx-auto mt-10 grid gap-4 pb-4 md:grid-cols-6">
          {homepageItems.map((item, index) => (
            <ThreeItemGridItem
              key={index}
              size="half"
              item={item}
              priority={true}
              oldPrice={oldPrices[index]}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-10 text-center text-gray-500">
          <p>Products will be displayed when the store is connected.</p>
        </div>
      )}
    </section>
  );
}

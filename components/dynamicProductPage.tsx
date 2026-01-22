'use client';
import clsx from 'clsx';
import { Product } from 'lib/shopify/types';
import { startTransition } from 'react';
import { useDictionary } from '../app/DictProvider';
import { AddToCart } from './cart/add-to-cart';
import { DynamicImage } from './dynamicImage';
import { ProductDescription } from './product-description';
import { useProduct, useUpdateURL } from './product/product-context';

const oldPrices: Record<string, number> = {
  'gid://shopify/Product/10152999780686': 39,
  'gid://shopify/Product/10152989032782': 74,
  'gid://shopify/Product/10066795561294': 99
};

export default function DynamicProductPage({ allProducts }: { allProducts: Product[] }) {
  const context = useProduct();
  const { dictionary } = useDictionary();
  const currentProduct = context.state.product
    ? allProducts.find((p) => p.id === context.state.product)
    : allProducts[0];
  const initialImage = currentProduct?.images[0] ?? allProducts[0]?.images[0];
  const rightSideImage = currentProduct?.title.toLowerCase();
  const updateURL = useUpdateURL();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 pt-24 md:px-8 md:py-16 md:pt-28">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Image Section */}
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 p-6 md:p-10 lg:sticky lg:top-28">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            {initialImage && <DynamicImage image={initialImage} customImage={rightSideImage} />}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="relative z-0 flex flex-col">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">
            {(dictionary as any).products.title as string}
          </h1>

          {/* Product Variant List */}
          <div className="mt-6 flex flex-col gap-2">
            {allProducts.map((product) => {
              const isSelected = currentProduct?.id === product.id;
              const oldPrice = oldPrices[product.id];
              const currentPrice = parseFloat(product.priceRange.maxVariantPrice.amount);
              const discountPercent = oldPrice
                ? Math.round(((oldPrice - currentPrice) / oldPrice) * 100)
                : 0;

              return (
                <button
                  key={product.id}
                  onClick={() => {
                    startTransition(() => {
                      const newState = context.updateProduct(product.id);
                      updateURL(newState);
                    });
                  }}
                  className={clsx(
                    'flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-left transition-all',
                    isSelected
                      ? 'border-orange-400 bg-orange-50'
                      : 'border-gray-200 bg-white hover:border-orange-400 hover:bg-orange-50/50'
                  )}
                >
                  <div>
                    <span className="font-medium">{product.title}</span>
                    <p className="text-sm font-medium text-gray-900">{product.description}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {discountPercent > 0 && (
                      <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                        -{discountPercent}%
                      </span>
                    )}
                    <span className="font-semibold">{currentPrice}€</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 w-full">
            <AddToCart product={currentProduct as Product} />
          </div>

          {/* Product Description Section */}
          <ProductDescription />
        </div>
      </div>
    </div>
  );
}

'use client';
import { DynamicImage } from './dynamicImage';
import { ReviewStars } from './reviewStars';
import { ProductCard } from './productCard';
import { AddToCart } from './cart/add-to-cart';
import { Product } from 'lib/shopify/types';
import { useProduct, useUpdateURL } from './product/product-context';
import { startTransition } from 'react';
import { useDictionary } from '../app/DictProvider';

export default function DynamicProductPage({ allProducts }: { allProducts: Product[] }) {
  const context = useProduct();
  const { dictionary } = useDictionary();
  const currentProduct = context.state.product
    ? allProducts.find((p) => p.id === context.state.product)
    : allProducts[0];
  const initialImage = currentProduct?.images[0] ?? allProducts[0]?.images[0];
  const rightSideImage = currentProduct?.title.toLowerCase();
  const updateURL = useUpdateURL();

  // @ts-ignore
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 pt-24 md:px-8 md:py-16 md:pt-28">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Image Section */}
        <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 md:p-10">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            {initialImage && <DynamicImage image={initialImage} customImage={rightSideImage} />}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            {(dictionary as any).products.title as string}
          </h1>
          <ReviewStars />

          <div className="mt-8 flex flex-col gap-4">
            {allProducts.map((product) => (
              <button
                key={product.id}
                className="w-full"
                onClick={() => {
                  startTransition(() => {
                    const newState = context.updateProduct(product.id);
                    updateURL(newState);
                  });
                }}
              >
                <ProductCard selected={currentProduct?.id === product.id} product={product} />
              </button>
            ))}

            <div className="mt-6 w-full">
              <AddToCart product={currentProduct as Product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

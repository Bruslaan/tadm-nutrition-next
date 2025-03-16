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
    <div className="grild-cols-1 grid w-full overflow-hidden md:grid-cols-2">
      <div className="hidden h-screen items-center justify-center bg-linear-to-b from-orange-100 to-orange-200 object-cover md:flex">
        {initialImage && <DynamicImage image={initialImage} customImage={rightSideImage} />}
      </div>
      <div className="mx-auto flex h-full w-full max-w-xl flex-col items-center justify-center p-10 pt-32">
        <h2 className="font-manrope mb-2 bg-clip-text text-center text-4xl leading-10 font-bold">
          {(dictionary as any).products.title as string}
        </h2>
        <ReviewStars />
        <br />

        <div className="flex w-full flex-col items-center justify-center gap-5">
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

          <div className="mt-10 w-full">
            <AddToCart product={currentProduct as Product} />
          </div>
        </div>
      </div>
    </div>
  );
}

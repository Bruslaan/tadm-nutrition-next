'use client';
import { DynamicImage } from './dynamicImage';
import { ReviewStars } from './reviewStars';
import { ProductCard } from './productCard';
import { AddToCart } from './cart/add-to-cart';
import { Product } from 'lib/shopify/types';
import { useProduct, useUpdateURL } from './product/product-context';
import { startTransition } from 'react';

export default function DynamicProductPage({ allProducts }: { allProducts: Product[] }) {
  const context = useProduct();
  const currentProduct = context.state.product
    ? allProducts.find((p) => p.id === context.state.product)
    : allProducts[0];
  const initialImage = currentProduct?.images[0] ?? allProducts[0]?.images[0];
  const updateURL = useUpdateURL();
  console.log('Current Product', currentProduct);

  return (
    <div className="grild-cols-1 grid w-full overflow-hidden md:grid-cols-2">
      <div className="hidden h-screen object-cover md:block">
        {initialImage && <DynamicImage image={initialImage} />}
      </div>
      <div className="mx-auto flex h-full w-full max-w-xl flex-col items-center justify-center p-10 py-20">
        <h2 className="font-manrope mb-2 bg-clip-text text-center text-4xl font-bold capitalize leading-10">
          Hol dir dein TADM
        </h2>
        <ReviewStars />
        <br />

        <div className="flex w-full flex-col items-center justify-center gap-5">
          {allProducts.map((product) => (
            <div
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
            </div>
          ))}

          <div className="mt-10 w-full">
            <AddToCart product={currentProduct as Product} />
          </div>
        </div>
      </div>
    </div>
  );
}

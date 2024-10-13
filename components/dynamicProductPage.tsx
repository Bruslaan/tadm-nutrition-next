'use client';
import { Suspense, useState } from 'react';
import { DynamicImage } from './dynamicImage';
import { ReviewStars } from './reviewStars';
import { ProductCard } from './productCard';
import { AddToCart } from './cart/add-to-cart';
import { Product } from 'lib/shopify/types';

export default async function DynamicProductPage({ allProducts }: { product: Product }) {
  const [selectedProduct, setSelectedProduct] = useState(allProducts[0]);

  return (
    <div className="grild-cols-1 grid w-full overflow-hidden md:grid-cols-2">
      <div className="hidden object-cover md:block">
        <Suspense fallback={<div className="" />}>
          <DynamicImage image={selectedProduct.images[0]} />
        </Suspense>
      </div>
      <div className="mx-auto flex h-full w-full max-w-xl flex-col items-center justify-center p-10 py-20">
        <h2 className="font-manrope mb-2 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-center text-4xl font-bold capitalize leading-10 text-gray-900 text-transparent">
          Hol dir dein TADM
        </h2>
        <ReviewStars />
        <br />
        <br />

        <div className="flex w-full flex-col items-center justify-center gap-5">
          {allProducts.map((product) => (
            <div key={product.id} className="w-full" onClick={() => setSelectedProduct(product)}>
              <ProductCard selected={selectedProduct.id === product.id} product={product} />
            </div>
          ))}

          <div className="mt-10 w-full">
            <AddToCart product={selectedProduct as Product} />
          </div>
        </div>
      </div>
    </div>
  );
}

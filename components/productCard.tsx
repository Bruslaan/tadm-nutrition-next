'use client';
import { Product } from '../lib/shopify/types';
import clsx from 'clsx';
import { ProductDescription } from './product/product-description';
import Image from 'next/image';

export const ProductCard = ({ product, selected }: { product: Product; selected: boolean }) => {
  return (
    <div
      className={clsx(
        'relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border',
        selected && 'border-black shadow-lg'
      )}
    >
      <div className="h-full md:hidden">
        <Image
          className="max-w-28 object-cover"
          fill
          alt={product.images[0]?.altText as string}
          src={product.images[0]?.url as string}
          priority={true}
        />
      </div>

      <div className="ml-28 w-full flex-1 p-4 md:ml-0">
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

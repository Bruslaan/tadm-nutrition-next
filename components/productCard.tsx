import { Product } from '../lib/shopify/types';
import clsx from 'clsx';
import { ProductDescription } from './product/product-description';
import Image from 'next/image';
import { useDictionary } from '../app/DictProvider';

export const ProductCard = ({ product, selected }: { product: Product; selected: boolean }) => {
  return (
    <div
      className={clsx(
        'hover relative flex w-full transform cursor-pointer items-center justify-center overflow-hidden rounded-2xl border transition-shadow duration-300 hover:border-gray-700 hover:bg-orange-50',
        selected && 'border-2 border-gray-800'
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

import { Product } from '../lib/shopify/types';
import clsx from 'clsx';
import { ProductDescription } from './product/product-description';
import Image from 'next/image';
import { useDictionary } from '../app/DictProvider';

export const ProductCard = ({ product, selected }: { product: Product; selected: boolean }) => {
  return (
    <div
      data-goal="product_click"
      data-goal-product={product.handle}
      className={clsx(
        'relative flex h-[100px] w-full cursor-pointer items-center overflow-hidden rounded-2xl border-2 transition-colors duration-200 hover:border-gray-400 hover:bg-orange-50',
        selected ? 'border-gray-800 bg-orange-50' : 'border-gray-200'
      )}
    >
      <div className="relative h-full w-28 shrink-0 md:hidden">
        <Image
          className="object-cover"
          fill
          alt={product.images[0]?.altText as string}
          src={product.images[0]?.url as string}
          priority={true}
        />
      </div>

      <div className="flex-1 p-4">
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

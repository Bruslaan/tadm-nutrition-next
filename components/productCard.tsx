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
        'relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 transition-all duration-200 hover:border-gray-400 hover:bg-orange-50',
        selected ? 'border-gray-800 bg-orange-50' : 'border-gray-200'
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

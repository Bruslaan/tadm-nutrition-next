import clsx from 'clsx';
import { Product } from '../lib/shopify/types';

const oldPrices: Record<string, number> = {
  'gid://shopify/Product/10152999780686': 39,
  'gid://shopify/Product/10152989032782': 74,
  'gid://shopify/Product/10066795561294': 99
};

export const ProductCard = ({ product, selected }: { product: Product; selected: boolean }) => {
  const oldPrice = oldPrices[product.id];
  const currencyCode = product.priceRange.maxVariantPrice.currencyCode;

  return (
    <div
      data-goal="product_click"
      data-goal-product={product.handle}
      className={clsx(
        'flex w-full cursor-pointer items-center justify-between rounded-xl border-2 px-4 py-3 transition-all',
        selected
          ? 'border-orange-400 bg-orange-50'
          : 'border-gray-200 bg-white hover:border-orange-200 hover:bg-orange-50/50'
      )}
    >
      <div>
        <span className="font-medium">{product.title}</span>
        <p className="text-sm text-gray-500">{product.description}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {oldPrice && <span className="text-sm text-gray-400 line-through">{oldPrice}€</span>}
        <span className="font-semibold">
          {product.priceRange.maxVariantPrice.amount} {currencyCode}
        </span>
      </div>
    </div>
  );
};

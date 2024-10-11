import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-2 text-start">
      <h1 className="text-3xl font-medium">{product.title}</h1>
      {/*<VariantSelector options={product.options} variants={product.variants} />*/}
      {product.descriptionHtml ? (
        <p className="text-sm leading-tight text-gray-500 dark:text-white/[60%]">
          {product.description}
        </p>
      ) : null}
      <Price
        amount={product.priceRange.maxVariantPrice.amount}
        currencyCode={product.priceRange.maxVariantPrice.currencyCode}
      />

      <AddToCart product={product} />
    </div>
  );
}

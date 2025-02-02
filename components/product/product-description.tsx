import Price from 'components/price';
import { Product } from 'lib/shopify/types';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-2 text-start">
      <h2 className="text-2xl font-medium">{product.title}</h2>
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

      {/*<AddToCart product={product} />*/}
    </div>
  );
}

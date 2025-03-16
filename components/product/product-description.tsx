'use client';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import { useDictionary } from '../../app/DictProvider';

const descriptionTranslations: Record<string, string> = {
  'gid://shopify/Product/10152999780686': '120 vegane Softgels, inkl. tadm Glasflasche',
  'gid://shopify/Product/10152989032782': '240 vegane Softgels (ohne Glasflasche)',
  'gid://shopify/Product/10066795561294': '360 vegane Softgels, inkl. tadm Glasflasche'
};

export function ProductDescription({ product }: { product: Product }) {
  const { lang } = useDictionary();

  return (
    <div className="flex flex-col gap-2 text-start">
      <h2 className="text-2xl font-medium">{product.title}</h2>
      {/*<VariantSelector options={product.options} variants={product.variants} />*/}
      {product.descriptionHtml ? (
        <p className="text-sm leading-tight text-gray-700 dark:text-white/[60%]">
          {lang === 'de' ? descriptionTranslations[product.id] : product.description}
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

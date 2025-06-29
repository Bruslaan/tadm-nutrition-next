'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import { useProduct } from 'components/product/product-context';
import { Product, ProductVariant } from 'lib/shopify/types';
import { useCart } from './cart-context';
import { useActionState } from 'react';
import { useDictionary } from '../../app/DictProvider';
import { useShopifyAnalytics } from '../../lib/shopify/useShopifyPixel';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const { dictionary } = useDictionary();
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-xl bg-black p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4 cursor-pointer">
          <PlusIcon className="h-5" />
        </div>
        {dictionary.addToCart as string}
      </button>
    );
  }

  return (
    <button
      aria-label="Add to cart"
      className={clsx(buttonClasses, {
        'hover:opacity-90': true
      })}
    >
      <div className="absolute left-0 ml-4">
        <PlusIcon className="h-5" />
      </div>
      {dictionary.addToCart as string}
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);
  const { sendAddToCart, sendCustomEvent } = useShopifyAnalytics();

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every((option) => option.value === state[option.name.toLowerCase()])
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const finalVariant = variants.find((variant) => variant.id === selectedVariantId)!;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  return (
    <form
      action={async () => {
        // Add to cart locally
        console.log('Adding to cart:', finalVariant, product);
        addCartItem(finalVariant, product);

        // Track the add to cart event
        sendCustomEvent('add_to_cart_attempt', {
          productId: product.id,
          productTitle: product.title,
          variantId: selectedVariantId,
          price: finalVariant?.price?.amount,
          currency: finalVariant?.price?.currencyCode,
          timestamp: new Date().toISOString()
        });

        sendAddToCart({
          cartId: 'tadm_id',
          totalValue: parseFloat(finalVariant?.price?.amount || '0'),
          products: [
            {
              productGid: product.id,
              variantGid: selectedVariantId!,
              name: product.title,
              brand: 'TADM',
              category: 'supplement',
              price: finalVariant?.price?.amount || '0',
              quantity: 1
            }
          ]
        });

        await actionWithVariant();
      }}
    >
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <p aria-live="polite" className="sr-only" role="status">
        {message?.message ?? ''}
      </p>
    </form>
  );
}

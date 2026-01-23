'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { addItem } from 'components/cart/actions';
import { Product } from 'lib/shopify/types';
import { useActionState } from 'react';
import { useDictionary } from '../../app/DictProvider';
import { useCart } from './cart-context';

export function InlineAddToCart({ product }: { product: Product }) {
  const { addCartItem } = useCart();
  const { dictionary } = useDictionary();
  const [, formAction] = useActionState(addItem, null);
  const variant = product.variants[0]!;
  const actionWithVariant = formAction.bind(null, variant.id);

  return (
    <form
      action={() => {
        addCartItem(variant, product);
        actionWithVariant();
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="submit"
        className="flex items-center gap-1.5 rounded-lg bg-black px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
        aria-label="Add to cart"
      >
        <PlusIcon className="h-4 w-4" />
        {(dictionary as Record<string, string>).addToCart}
      </button>
    </form>
  );
}

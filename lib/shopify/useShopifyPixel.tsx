// ./lib/shopify/hooks/use-shopify-analytics.ts

import { usePathname } from 'next/navigation';
import {
  AnalyticsEventName,
  getClientBrowserParameters,
  sendShopifyAnalytics,
  ShopifyAnalyticsProduct,
  ShopifyPageViewPayload,
  ShopifySalesChannel,
  useShopifyCookies
} from '@shopify/hydrogen-react';

const currency = 'EUR';
const defaultLanguage = 'DE';
const SHOP_ID = '88760648014';

type SendPageViewPayload = {
  pageType?: string;
  products?: ShopifyAnalyticsProduct[];
  collectionHandle?: string;
  searchString?: string;
  totalValue?: number;
  cartId?: string;
};

type SendAddToCartPayload = {
  cartId: string;
  products?: ShopifyAnalyticsProduct[];
  totalValue?: ShopifyPageViewPayload['totalValue'];
};

export function useShopifyAnalytics() {
  const pathname = usePathname();
  console.log('Sending shop analytics for pathname: ', SHOP_ID);
  // Send page view event
  const sendPageView = (
    eventName: keyof typeof AnalyticsEventName,
    payload?: SendPageViewPayload
  ) => {
    return sendShopifyAnalytics({
      eventName,
      payload: {
        ...getClientBrowserParameters(),
        hasUserConsent: true,
        shopifySalesChannel: ShopifySalesChannel.headless,
        shopId: `gid://shopify/Shop/${SHOP_ID}`,
        currency,
        acceptedLanguage: defaultLanguage,
        ...payload
      }
    });
  };

  // Send add to cart event
  const sendAddToCart = ({ cartId, totalValue, products }: SendAddToCartPayload) =>
    sendPageView(AnalyticsEventName.ADD_TO_CART, {
      cartId,
      totalValue,
      products
    });

  // Set up cookies for Shopify analytics & enable user consent
  useShopifyCookies({
    hasUserConsent: true
  });

  return {
    sendPageView,
    sendAddToCart,
    pathname
  };
}

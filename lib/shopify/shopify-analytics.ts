'use client';

import { useEffect } from 'react';
import { AnalyticsEventName } from '@shopify/hydrogen-react';
import { useShopifyAnalytics } from 'lib/shopify/useShopifyPixel';

export default function ShopifyAnalytics() {
  const { sendPageView, pathname } = useShopifyAnalytics();
  useEffect(() => {
    sendPageView(AnalyticsEventName.PAGE_VIEW);
  }, [pathname, sendPageView]);
  return null;
}

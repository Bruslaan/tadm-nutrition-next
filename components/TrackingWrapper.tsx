'use client';

import { useShopifyAnalytics } from '../lib/shopify/useShopifyPixel';

interface TrackingWrapperProps {
  children: React.ReactNode;
  eventType?: 'button_click' | 'form_submit' | 'product_view' | 'custom';
  eventData?: any;
  className?: string;
}

export default function TrackingWrapper({
  children,
  eventType = 'custom',
  eventData = {},
  className,
  ...props
}: TrackingWrapperProps & React.HTMLAttributes<HTMLDivElement>) {
  const { sendCustomEvent } = useShopifyAnalytics();

  const handleClick = (e: React.MouseEvent) => {
    // Send tracking event
    sendCustomEvent('user_interaction', {
      type: eventType,
      element: e.currentTarget.tagName,
      timestamp: new Date().toISOString(),
      ...eventData
    });

    // Call original onClick if it exists
    if (props.onClick) {
      props.onClick(e as React.MouseEvent<HTMLDivElement>);
    }
  };

  return (
    <div {...props} className={className} onClick={handleClick}>
      {children}
    </div>
  );
}

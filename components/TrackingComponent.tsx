// components/ShopifyAnalyticsTracker.tsx (or src/components/...)

'use client'; // <--- This component MUST be a Client Component

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

const shopifyDomain = '4q0vj1-0d.myshopify.com';

declare global {
  interface Window {
    // Define the structure of ShopifyAnalytics you expect to use
    ShopifyAnalytics?: {
      lib: {
        // Define the track method signature
        track: (eventName: string, payload?: Record<string, any>) => void;
        // Add other methods/properties if you use them (e.g., init)
        init: (config?: Record<string, any>) => void;
      };
      // Add other top-level properties if needed
      meta?: {
        page?: {
          shopId?: number;
          pageType?: string;
        };
        currency?: string;
      };
    };
    // Optional: if you create a helper function like trackShopifyEvent
    // trackShopifyEvent?: (eventName: string, payload?: Record<string, any>) => void;
  }
}

// --- Helper function to trigger page view ---
const trackShopifyPageView = () => {
  // Check if window and the necessary Shopify objects/methods exist
  if (typeof window !== 'undefined' && window.ShopifyAnalytics?.lib?.track) {
    // <-- Type safe access
    console.log('Tracking Shopify Page View (navigation)');
    window.ShopifyAnalytics.lib.track('Page View');
    // Or: window.ShopifyAnalytics.lib.track('page_viewed');
  } else {
    console.warn('Shopify Analytics script not ready for Page View tracking.');
  }
};

export default function ShopifyAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- Load Script and Track Initial View ---
  // This useEffect runs once on component mount.
  useEffect(() => {
    if (!shopifyDomain) {
      console.warn('Missing NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN for analytics.');
      return; // Don't load script if domain is missing
    }

    // Check if script already exists (e.g., due to fast refresh / HMR)
    if (document.getElementById('shopify-pixel-script')) {
      // Assume already initialized, potentially track initial page view if needed again
      // trackShopifyPageView(); // Usually the script handles initial itself
      return;
    }

    const scriptElement = document.createElement('script');
    scriptElement.id = 'shopify-pixel-script';
    scriptElement.async = true;
    scriptElement.innerHTML = `
        // --- PASTE THE SCRIPT FROM YOUR SHOPIFY ADMIN HERE ---
        // Example structure (VERIFY IN YOUR ADMIN):
        (function() {
          var __shopify_shop_domain = "${shopifyDomain}";
          var __shopify_script_src = "https://cdn.shopify.com/s/analytics/analytics.js"; // Verify URL

          function loadShopifyAnalytics() {
            var script = document.createElement('script');
            script.async = true;
            script.src = __shopify_script_src;
            script.onload = function() {
               // Type check after load
               if (typeof window.ShopifyAnalytics?.lib?.init !== 'function') {
                 console.warn('ShopifyAnalytics.lib.init not found after script load.');
                 return;
               }
               try {
                 // Initialize analytics - check Shopify Admin for correct snippet
                 window.ShopifyAnalytics.lib.init({ /* config */ });
                 console.log('Shopify Analytics Initialized.');
                 // Optional: Explicitly track initial page view if script doesn't
                 // It's generally better if the script handles this on init.
                 // trackShopifyPageView();
               } catch (error) {
                 console.error('Error initializing Shopify Analytics:', error);
               }
            };
            script.onerror = function() { console.error('Failed to load Shopify Analytics script.'); };
            document.head.appendChild(script);
          }
          loadShopifyAnalytics();
        })();
    `;

    document.head.appendChild(scriptElement);

    // Cleanup function to remove script if component unmounts (optional)
    // return () => {
    //   const existingScript = document.getElementById('shopify-pixel-script');
    //   if (existingScript) {
    //     existingScript.remove();
    //   }
    // };
  }, []); // Empty dependency array: runs only once on mount

  // --- Track Page Views on Navigation ---
  // This useEffect runs when pathname or searchParams change.
  useEffect(() => {
    console.log(`App Router Navigated to: ${pathname}?${searchParams}`);
    // Trigger page view tracking when the path or query params change
    // Add a slight delay to allow the script to potentially initialize if navigation is very fast
    const timer = setTimeout(() => {
      trackShopifyPageView();
    }, 50); // 50ms delay, adjust if needed

    return () => clearTimeout(timer); // Cleanup timeout
  }, [pathname, searchParams]); // Re-run effect when URL changes

  // This component doesn't render anything itself
  return null;
}

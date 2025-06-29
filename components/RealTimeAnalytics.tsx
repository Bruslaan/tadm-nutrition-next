'use client';

import { useShopifyAnalytics } from '../lib/shopify/useShopifyPixel';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function RealTimeAnalytics() {
  const { sendCustomEvent, sendPageView } = useShopifyAnalytics();
  const pathname = usePathname();
  const initialized = useRef(false);
  const startTime = useRef(Date.now());
  
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      
      // Track page performance
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          sendCustomEvent('page_performance', {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            ttfb: navigation.responseStart - navigation.requestStart,
            pathname
          });
        });

        // Track Core Web Vitals if available
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                sendCustomEvent('web_vitals', {
                  metric: 'LCP',
                  value: entry.startTime,
                  pathname
                });
              }
            }
          });
          
          try {
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            // PerformanceObserver not supported
          }
        }
      }

      // Track user engagement events
      let isEngaged = true;
      let engagementStart = Date.now();

      const trackEngagement = () => {
        if (isEngaged) {
          const engagementTime = Date.now() - engagementStart;
          sendCustomEvent('user_engagement', {
            duration: engagementTime,
            pathname,
            timestamp: new Date().toISOString()
          });
        }
      };

      const handleVisibilityChange = () => {
        if (document.hidden) {
          isEngaged = false;
          trackEngagement();
        } else {
          isEngaged = true;
          engagementStart = Date.now();
        }
      };

      const handleBeforeUnload = () => {
        trackEngagement();
        
        // Send final session data
        const sessionDuration = Date.now() - startTime.current;
        sendCustomEvent('session_end', {
          duration: sessionDuration,
          pathname,
          timestamp: new Date().toISOString()
        });
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('beforeunload', handleBeforeUnload);

      // Cleanup
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [pathname, sendCustomEvent]);

  // Track route changes
  useEffect(() => {
    startTime.current = Date.now();
    
    // Send enhanced page view for each route change
    const pageData = {
      pageType: getPageType(pathname),
      timestamp: new Date().toISOString()
    };

    sendCustomEvent('route_change', {
      pathname,
      ...pageData
    });
  }, [pathname, sendCustomEvent]);

  return null; // This component doesn't render anything
}

function getPageType(pathname: string): string {
  if (pathname.includes('/product/')) return 'product';
  if (pathname.includes('/search/')) return 'collection';
  if (pathname.includes('/algae')) return 'product_algae';
  if (pathname.includes('/cannabis')) return 'product_cannabis';
  if (pathname.includes('/cumin')) return 'product_cumin';
  if (pathname.includes('/mix')) return 'product_mix';
  if (pathname.includes('/nature')) return 'product_nature';
  if (pathname.includes('/softgel')) return 'product_softgel';
  if (pathname.includes('/walnut')) return 'product_walnut';
  if (pathname.endsWith('/site/') || pathname.endsWith('/site')) return 'homepage';
  return 'other';
}
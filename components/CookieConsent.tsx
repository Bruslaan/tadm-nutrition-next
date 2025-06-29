'use client';

import { useEffect } from 'react';

export default function CookieConsent() {
  useEffect(() => {
    // Set all tracking cookies as accepted by default
    const setCookieConsent = () => {
      // Shopify tracking cookies
      localStorage.setItem('shopify_consent', JSON.stringify({
        analytics: true,
        marketing: true,
        preferences: true,
        necessary: true,
        timestamp: new Date().toISOString()
      }));

      // Set additional tracking permissions
      localStorage.setItem('tadm_tracking_consent', 'true');
      localStorage.setItem('tadm_analytics_consent', 'true');
      localStorage.setItem('tadm_marketing_consent', 'true');
      
      // Set cookie for Google Analytics, Facebook Pixel, etc.
      document.cookie = 'consent=all; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax';
      document.cookie = 'analytics=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax';
      document.cookie = 'marketing=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax';
      
      // Set Shopify-specific tracking cookies
      document.cookie = '_shopify_y=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax';
      document.cookie = '_shopify_s=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax';
      document.cookie = '_shopify_sa_p=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax';
      document.cookie = '_shopify_sa_t=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax';
      
      // Enable third-party cookies for social media tracking
      document.cookie = '_fbp=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax';
      document.cookie = '_fbc=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax';
      document.cookie = '_ttp=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax'; // TikTok
      document.cookie = '_gcl_au=true; path=/; max-age=' + (365 * 24 * 60 * 60) + '; SameSite=Lax'; // Google
    };

    // Set consent immediately on load
    setCookieConsent();

    // Also set consent when the page becomes visible (for better tracking)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setCookieConsent();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Initialize global consent objects for third-party scripts
  useEffect(() => {
    // For Google Analytics/Google Ads
    (window as any).gtag = (window as any).gtag || function() {
      ((window as any).dataLayer = (window as any).dataLayer || []).push(arguments);
    };
    (window as any).gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted'
    });

    // For Facebook Pixel
    (window as any).fbq = (window as any).fbq || function() {
      ((window as any).fbq.queue = (window as any).fbq.queue || []).push(arguments);
    };
    if ((window as any).fbq) {
      (window as any).fbq('consent', 'grant');
    }

    // For TikTok Pixel
    (window as any).ttq = (window as any).ttq || function() {
      ((window as any).ttq.queue = (window as any).ttq.queue || []).push(arguments);
    };
  }, []);

  return null; // This component doesn't render anything visible
}
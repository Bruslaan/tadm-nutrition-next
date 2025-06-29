// ./lib/shopify/hooks/use-shopify-analytics.ts

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  AnalyticsEventName,
  getClientBrowserParameters,
  sendShopifyAnalytics,
  ShopifyAnalyticsProduct,
  ShopifyPageViewPayload,
  ShopifySalesChannel,
  useShopifyCookies
} from '@shopify/hydrogen-react';
import {
  CurrencyCode,
  LanguageCode
} from '@shopify/hydrogen-react/dist/types/storefront-api-types';

const currency: CurrencyCode = 'EUR';
const defaultLanguage: LanguageCode = 'DE';
const SHOP_ID = '88760648014';

// Enhanced analytics helpers
function getVisitorInfo() {
  if (typeof window === 'undefined') return {};

  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    screen: {
      width: screen.width,
      height: screen.height,
      colorDepth: screen.colorDepth
    },
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timestamp: new Date().toISOString()
  };
}

function getReferralInfo() {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  const referrer = document.referrer;

  // Detect traffic source
  let source = 'direct';
  let medium = 'none';
  let campaign = urlParams.get('utm_campaign') || '';

  if (referrer) {
    const referrerDomain = new URL(referrer).hostname;

    // Social media detection (enhanced)
    if (referrerDomain.includes('facebook.com') || referrerDomain.includes('fb.com') || referrerDomain.includes('m.facebook.com')) {
      source = 'facebook';
      medium = 'social';
    } else if (referrerDomain.includes('instagram.com') || referrerDomain.includes('ig.me')) {
      source = 'instagram';
      medium = 'social';
    } else if (referrerDomain.includes('tiktok.com') || referrerDomain.includes('vm.tiktok.com')) {
      source = 'tiktok';
      medium = 'social';
    } else if (referrerDomain.includes('twitter.com') || referrerDomain.includes('t.co') || referrerDomain.includes('x.com')) {
      source = 'twitter';
      medium = 'social';
    } else if (referrerDomain.includes('linkedin.com') || referrerDomain.includes('lnkd.in')) {
      source = 'linkedin';
      medium = 'social';
    } else if (referrerDomain.includes('youtube.com') || referrerDomain.includes('youtu.be')) {
      source = 'youtube';
      medium = 'social';
    } else if (referrerDomain.includes('snapchat.com')) {
      source = 'snapchat';
      medium = 'social';
    } else if (referrerDomain.includes('pinterest.com') || referrerDomain.includes('pin.it')) {
      source = 'pinterest';
      medium = 'social';
    } else if (referrerDomain.includes('reddit.com') || referrerDomain.includes('redd.it')) {
      source = 'reddit';
      medium = 'social';
    } else if (referrerDomain.includes('whatsapp.com') || referrerDomain.includes('wa.me')) {
      source = 'whatsapp';
      medium = 'social';
    } else if (referrerDomain.includes('telegram.org') || referrerDomain.includes('t.me')) {
      source = 'telegram';
      medium = 'social';
    }
    // Search engines
    else if (referrerDomain.includes('google.')) {
      source = 'google';
      medium = 'organic';
    } else if (referrerDomain.includes('bing.com')) {
      source = 'bing';
      medium = 'organic';
    } else if (referrerDomain.includes('yahoo.com')) {
      source = 'yahoo';
      medium = 'organic';
    }
    // Other referrals
    else {
      source = referrerDomain;
      medium = 'referral';
    }
  }

  // UTM parameters override detection
  if (urlParams.get('utm_source')) source = urlParams.get('utm_source')!;
  if (urlParams.get('utm_medium')) medium = urlParams.get('utm_medium')!;

  // Detect social media app referrals (when apps don't send referrer)
  const socialAppDetection = () => {
    if (source === 'direct' && campaign === '') {
      // Check for social media app indicators in user agent
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes('instagram') || urlParams.get('igshid')) {
        return { source: 'instagram', medium: 'social_app' };
      }
      if (userAgent.includes('tiktok') || urlParams.get('_t')) {
        return { source: 'tiktok', medium: 'social_app' };
      }
      if (userAgent.includes('facebook') || userAgent.includes('fban')) {
        return { source: 'facebook', medium: 'social_app' };
      }
    }
    return { source, medium };
  };

  const { source: finalSource, medium: finalMedium } = socialAppDetection();

  return {
    referrer,
    source: finalSource,
    medium: finalMedium,
    campaign,
    term: urlParams.get('utm_term') || '',
    content: urlParams.get('utm_content') || '',
    gclid: urlParams.get('gclid') || '', // Google Ads
    fbclid: urlParams.get('fbclid') || '', // Facebook Ads
    ttclid: urlParams.get('ttclid') || '', // TikTok Ads
    igshid: urlParams.get('igshid') || '', // Instagram share ID
    socialAppReferral: finalMedium === 'social_app'
  };
}

function getSessionInfo() {
  if (typeof window === 'undefined') return {};

  const sessionId =
    sessionStorage.getItem('tadm_session_id') ||
    `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  if (!sessionStorage.getItem('tadm_session_id')) {
    sessionStorage.setItem('tadm_session_id', sessionId);
    sessionStorage.setItem('tadm_session_start', new Date().toISOString());
  }

  const visitCount = parseInt(localStorage.getItem('tadm_visit_count') || '0') + 1;
  localStorage.setItem('tadm_visit_count', visitCount.toString());

  const firstVisit = localStorage.getItem('tadm_first_visit') || new Date().toISOString();
  if (!localStorage.getItem('tadm_first_visit')) {
    localStorage.setItem('tadm_first_visit', firstVisit);
  }

  return {
    sessionId,
    sessionStart: sessionStorage.getItem('tadm_session_start'),
    visitCount,
    firstVisit,
    isNewVisitor: visitCount === 1
  };
}

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
  const [initialized, setInitialized] = useState(false);

  // Enhanced page view with complete tracking data
  const sendPageView = (
    eventName: keyof typeof AnalyticsEventName,
    payload?: SendPageViewPayload
  ) => {
    const visitorInfo = getVisitorInfo();
    const referralInfo = getReferralInfo();
    const sessionInfo = getSessionInfo();

    const enhancedPayload = {
      ...getClientBrowserParameters(),
      hasUserConsent: true,
      shopifySalesChannel: ShopifySalesChannel.headless,
      shopId: `gid://shopify/Shop/${SHOP_ID}`,
      currency,
      acceptedLanguage: defaultLanguage,
      // Custom tracking data
      customData: {
        visitor: visitorInfo,
        referral: referralInfo,
        session: sessionInfo,
        page: {
          path: pathname,
          title: typeof document !== 'undefined' ? document.title : '',
          url: typeof window !== 'undefined' ? window.location.href : ''
        }
      },
      ...payload
    };

    return sendShopifyAnalytics({
      eventName,
      payload: enhancedPayload
    });
  };

  // Enhanced add to cart with conversion tracking
  const sendAddToCart = ({ cartId, totalValue, products }: SendAddToCartPayload) => {
    const conversionData = {
      cartId,
      totalValue,
      products,
      conversionTime: new Date().toISOString(),
      pageType: 'cart_action'
    };

    return sendPageView(AnalyticsEventName.ADD_TO_CART, conversionData);
  };

  // Track custom events (for additional insights)
  const sendCustomEvent = (eventName: string, customData: any) => {
    return sendShopifyAnalytics({
      eventName: 'custom_pixel' as any,
      payload: {
        ...getClientBrowserParameters(),
        hasUserConsent: true,
        shopifySalesChannel: ShopifySalesChannel.headless,
        shopId: `gid://shopify/Shop/${SHOP_ID}`,
        cartId: 'custom',
        currency: 'EUR'
      }
    });
  };

  // Initialize enhanced tracking on first load
  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized) {
      setInitialized(true);

      // Send initial visitor data
      sendCustomEvent('visitor_init', {
        visitor: getVisitorInfo(),
        referral: getReferralInfo(),
        session: getSessionInfo()
      });

      // Track scroll depth
      let maxScrollPercent = 0;
      const trackScrollDepth = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );

        if (scrollPercent > maxScrollPercent && scrollPercent % 25 === 0) {
          maxScrollPercent = scrollPercent;
          sendCustomEvent('scroll_depth', { percent: scrollPercent });
        }
      };

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        sendCustomEvent('time_on_page', { seconds: timeSpent });
      };

      window.addEventListener('scroll', trackScrollDepth);
      window.addEventListener('beforeunload', trackTimeOnPage);

      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    }
  }, [initialized]);

  // Set up cookies for Shopify analytics & enable user consent
  useShopifyCookies({
    hasUserConsent: true
  });

  return {
    sendPageView,
    sendAddToCart,
    sendCustomEvent,
    pathname
  };
}

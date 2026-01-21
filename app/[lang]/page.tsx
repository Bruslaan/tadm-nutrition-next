import ExpertsCarusell, { Testimonial } from '@/components/ui/experts-carusell';
import Image from 'next/image';
import TrustItem from '../../components/TrustItem';
import CallToActionBanner from '../../components/call-to-action-banner';
import FaqPage from '../../components/faq-page';
import FeatureSection, { FeatureSection2 } from '../../components/feature-section';
import { ThreeItemGrid } from '../../components/grid/three-items';
import HeroSection from '../../components/hero-section';
import Footer from '../../components/layout/footer';
import MixHighlightSection from '../../components/mix-highlight-section';
import { MarqueeDemo } from '../../components/testimonals';
import { TextRevealDemo } from '../../components/text-reveal';
import VideoScrollSection, { InsideTadm } from '../../components/video-scroll-section';
import { getDictionary } from './dictionaries';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) {
  const { lang } = await params;

  return {
    title: 'tadm Nutrition - Premium Brain Health Supplements | Vegan & Natural',
    description:
      "Discover tadm Nutrition's premium brain health supplements. 100% vegan, natural ingredients including algae, cumin, and walnut for optimal cognitive function. Made in Germany.",
    keywords:
      'brain health supplements, nootropics, vegan supplements, cognitive enhancement, natural brain nutrition, algae supplements, cumin extract, walnut oil, German quality supplements',
    openGraph: {
      type: 'website',
      url: `https://tadm-nutrition.com/${lang}`,
      siteName: 'tadm Nutrition',
      title: 'tadm Nutrition - Premium Brain Health Supplements',
      description:
        'Premium vegan brain health supplements made in Germany. Natural ingredients for optimal cognitive function.',
      locale: lang === 'de' ? 'de_DE' : 'en_US',
      images: [
        {
          url: 'https://tadm-nutrition.com/static/combo.jpg',
          width: 1200,
          height: 630,
          alt: 'tadm Nutrition Premium Brain Health Supplements',
          type: 'image/jpeg'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@tadm_nutrition',
      creator: '@tadm_nutrition',
      title: 'tadm Nutrition - Premium Brain Health Supplements',
      description:
        'Premium vegan brain health supplements made in Germany. Natural ingredients for optimal cognitive function.',
      images: ['https://tadm-nutrition.com/static/combo.jpg']
    },
    authors: [{ name: 'tadm Nutrition' }],
    publisher: 'tadm Nutrition',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates: {
      canonical: `https://tadm-nutrition.com/${lang}`,
      languages: {
        en: 'https://tadm-nutrition.com/en',
        de: 'https://tadm-nutrition.com/de'
      }
    }
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang)) ?? 'en';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'tadm Nutrition',
    url: 'https://tadm-nutrition.com',
    logo: 'https://tadm-nutrition.com/static/tadm-logo.png',
    description:
      'Premium vegan brain health supplements made in Germany with natural ingredients for optimal cognitive function.',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE'
    },
    sameAs: ['https://www.instagram.com/tadm_nutrition', 'https://www.facebook.com/tadmnutrition']
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'tadm Nutrition',
    url: 'https://tadm-nutrition.com',
    description: 'Premium vegan brain health supplements made in Germany',
    inLanguage: [lang],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://tadm-nutrition.com/${lang}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://tadm-nutrition.com/${lang}/`
      }
    ]
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.faq.list.map((item: { question: string; answer: string }) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd)
        }}
      />
      <HeroSection title={dict.hero.title} subtitle={dict.hero.subtitle} />
      <section className="mt-14 flex flex-col items-center justify-evenly gap-9 px-4">
        <Image
          className="h-10 w-auto object-contain"
          src={'/static/madeingermany.svg'}
          width={200}
          height={80}
          alt="Made in Germany - Premium quality supplement manufacturing"
          loading="lazy"
        />

        <div className="flex w-full justify-center rounded-lg bg-gray-100 md:w-auto md:rounded-full">
          <div className="flex shrink-0 flex-col flex-wrap items-start gap-4 rounded-lg bg-gray-100 p-4 px-10 text-nowrap md:w-auto md:flex-row md:gap-6 md:rounded-full md:py-3">
            <TrustItem iconName="/static/vegan-icon.svg" text={'100% Vegan'} />
            <TrustItem iconName="/static/earth-icon.svg" text={'non-Gmo, 100% Natural'} />
            <TrustItem iconName="/static/noanimals-icon.svg" text={'No animals harmed'} />
          </div>
        </div>
      </section>
      <TextRevealDemo text={dict.textReveal} />
      <ThreeItemGrid title={dict.products.title} lang={lang} />

      <FeatureSection
        sectionTitle={dict.bulletPoints.title}
        items={dict.bulletPoints.list}
        imageUrl="/static/Hand.jpg"
      />
      <VideoScrollSection title={dict.insideTadm.title} items={dict.insideTadm as InsideTadm} />
      <MixHighlightSection
        title={dict.mix.title}
        description={dict.mix.items[0]?.content || ''}
        linkText={dict.mix.linkTitle}
        linkHref={`/${lang}/mix`}
        lang={lang}
      />

      <br />
      <br />
      <FeatureSection2
        title={dict.facility.title}
        accordionContent={dict.facility.list}
        imageUrl="/static/doctor.png"
      />

      <ExpertsCarusell
        title={dict.experts.title}
        testimonials={dict.experts.list as Testimonial[]}
      />
      <MarqueeDemo title={'Rezensionen'} />
      <FaqPage title={dict.faq.title} items={dict.faq.list} />
      <CallToActionBanner />
      <Footer />
    </main>
  );
}

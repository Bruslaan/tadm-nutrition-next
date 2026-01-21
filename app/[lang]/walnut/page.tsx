import { Metadata } from 'next';
import Footer from '../../../components/layout/footer';
import { getDictionary } from '../dictionaries';
import CuminHeroSection from './hero-section';
import { FeatureSectionNoImage } from '../../../components/feature-section';
import CallToActionBanner from '../../../components/call-to-action-banner';
import LinkToMix from '../../../components/LinkToMix';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: 'en' | 'de' }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title = dict.walnut.sectionTitle;
  const description = dict.walnut.items[0]?.content?.slice(0, 160) || 'Premium walnut oil rich in omega-3 fatty acids and vitamin E for brain and heart health.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | tadm Nutrition`,
      description,
      type: 'website',
      url: `${baseUrl}/${lang}/walnut`,
      siteName: 'tadm Nutrition',
      images: [
        {
          url: `${baseUrl}/static/walnut.jpg`,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | tadm Nutrition`,
      description
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/walnut`,
      languages: {
        en: `${baseUrl}/en/walnut`,
        de: `${baseUrl}/de/walnut`,
        'x-default': `${baseUrl}/en/walnut`
      }
    }
  };
}

const CuminPage = async ({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) => {
  const { lang } = await params;
  const dict = (await getDictionary(lang)) ?? 'en';
  return (
    <>
      <CuminHeroSection />
      <section id="walnut-section">
        <FeatureSectionNoImage sectionTitle={dict.walnut.sectionTitle} items={dict.walnut.items} />
      </section>
      <LinkToMix title={dict.mix.linkTitle} />

      <CallToActionBanner />
      <Footer></Footer>
    </>
  );
};

export default CuminPage;

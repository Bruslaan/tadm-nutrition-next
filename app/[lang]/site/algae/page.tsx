import { Metadata } from 'next';
import CallToActionBanner from '../../../../components/call-to-action-banner';
import Footer from '../../../../components/layout/footer';
import CuminHeroSection from './algae-hero-section';
import { FeatureSectionNoImage } from '../../../../components/feature-section';
import { getDictionary } from '../dictionaries';
import LinkToMix from '../../../../components/LinkToMix';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: 'en' | 'de' }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title = dict.algenoel.sectionTitle;
  const description = dict.algenoel.items[0]?.content?.slice(0, 160) || 'Premium vegan algae oil rich in DHA & EPA omega-3 fatty acids for brain health.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | tadm Nutrition`,
      description,
      type: 'website',
      url: `${baseUrl}/${lang}/site/algae`,
      siteName: 'tadm Nutrition',
      images: [
        {
          url: `${baseUrl}/static/algae.jpg`,
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
      canonical: `${baseUrl}/${lang}/site/algae`,
      languages: {
        en: `${baseUrl}/en/site/algae`,
        de: `${baseUrl}/de/site/algae`,
        'x-default': `${baseUrl}/en/site/algae`
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
      <section id="algae-section">
        <FeatureSectionNoImage
          sectionTitle={dict.algenoel.sectionTitle}
          items={dict.algenoel.items}
        />
      </section>

      <LinkToMix title={dict.mix.title} />

      <CallToActionBanner />
      <Footer></Footer>
    </>
  );
};

export default CuminPage;

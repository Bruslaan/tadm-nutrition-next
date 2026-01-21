import { Metadata } from 'next';
import CallToActionBanner from '../../../components/call-to-action-banner';
import Footer from '../../../components/layout/footer';
import CuminHeroSection from './cumin-hero-section';
import { FeatureSectionNoImage } from '../../../components/feature-section';
import { getDictionary } from '../dictionaries';
import LinkToMix from '../../../components/LinkToMix';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: 'en' | 'de' }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title = dict.cumin.sectionTitle;
  const description = dict.cumin.items[0]?.content?.slice(0, 160) || 'Premium black cumin oil with thymoquinone for immune support and brain health.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | tadm Nutrition`,
      description,
      type: 'website',
      url: `${baseUrl}/${lang}/cumin`,
      siteName: 'tadm Nutrition',
      images: [
        {
          url: `${baseUrl}/static/cumin.jpg`,
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
      canonical: `${baseUrl}/${lang}/cumin`,
      languages: {
        en: `${baseUrl}/en/cumin`,
        de: `${baseUrl}/de/cumin`,
        'x-default': `${baseUrl}/en/cumin`
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
      <section id="cumin-section">
        <FeatureSectionNoImage sectionTitle={dict.cumin.sectionTitle} items={dict.cumin.items} />
      </section>
      <LinkToMix title={dict.mix.linkTitle} />

      <CallToActionBanner />
      <Footer></Footer>
    </>
  );
};

export default CuminPage;

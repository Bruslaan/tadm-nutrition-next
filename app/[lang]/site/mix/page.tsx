import { Metadata } from 'next';
import CallToActionBanner from '../../../../components/call-to-action-banner';
import Footer from '../../../../components/layout/footer';
import CuminHeroSection from './cumin-hero-section';
import { FeatureSectionNoImage } from '../../../../components/feature-section';
import { getDictionary } from '../dictionaries';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: 'en' | 'de' }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title = dict.mix.title;
  const description = dict.mix.items[0]?.content?.slice(0, 160) || 'Unique blend of premium oils for optimal brain nutrition and cognitive performance.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | tadm Nutrition`,
      description,
      type: 'website',
      url: `${baseUrl}/${lang}/site/mix`,
      siteName: 'tadm Nutrition',
      images: [
        {
          url: `${baseUrl}/static/mix.jpg`,
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
      canonical: `${baseUrl}/${lang}/site/mix`,
      languages: {
        en: `${baseUrl}/en/site/mix`,
        de: `${baseUrl}/de/site/mix`,
        'x-default': `${baseUrl}/en/site/mix`
      }
    }
  };
}

const CuminPage = async ({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) => {
  const { lang } = await params;
  const dict = (await getDictionary(lang)) ?? 'en';
  return (
    <>
      <br />
      <br />
      <FeatureSectionNoImage sectionTitle={dict.mix.title} items={dict.mix.items} />
      <CallToActionBanner />
      <Footer></Footer>
    </>
  );
};

export default CuminPage;

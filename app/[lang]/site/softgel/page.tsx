import { Metadata } from 'next';
import CallToActionBanner from '../../../../components/call-to-action-banner';
import Footer from '../../../../components/layout/footer';
import CuminHeroSection from './cumin-hero-section';
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

  const title = dict.softgel.title;
  const description = dict.softgel.items[0]?.content?.slice(0, 160) || '100% vegan softgels manufactured in GMP-certified facilities for maximum bioavailability.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | tadm Nutrition`,
      description,
      type: 'website',
      url: `${baseUrl}/${lang}/site/softgel`,
      siteName: 'tadm Nutrition',
      images: [
        {
          url: `${baseUrl}/static/softgel.jpg`,
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
      canonical: `${baseUrl}/${lang}/site/softgel`,
      languages: {
        en: `${baseUrl}/en/site/softgel`,
        de: `${baseUrl}/de/site/softgel`,
        'x-default': `${baseUrl}/en/site/softgel`
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
      <FeatureSectionNoImage sectionTitle={dict.softgel.title} items={dict.softgel.items} />
      <LinkToMix title={dict.mix.linkTitle} />

      <CallToActionBanner />

      <Footer></Footer>
    </>
  );
};

export default CuminPage;

import { Metadata } from 'next';
import CallToActionBanner from '../../../components/call-to-action-banner';
import Footer from '../../../components/layout/footer';
import { getDictionary } from '../dictionaries';
import CuminHeroSection from './hero-section';
import { FeatureSectionNoImage } from '../../../components/feature-section';
import LinkToMix from '../../../components/LinkToMix';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: 'en' | 'de' }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title = dict.hemp.sectionTitle;
  const description = dict.hemp.items[0]?.content?.slice(0, 160) || 'Premium hemp oil with omega-3 and omega-6 fatty acids for brain function and immune support.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | tadm Nutrition`,
      description,
      type: 'website',
      url: `${baseUrl}/${lang}/cannabis`,
      siteName: 'tadm Nutrition',
      images: [
        {
          url: `${baseUrl}/static/hemp.jpg`,
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
      canonical: `${baseUrl}/${lang}/cannabis`,
      languages: {
        en: `${baseUrl}/en/cannabis`,
        de: `${baseUrl}/de/cannabis`,
        'x-default': `${baseUrl}/en/cannabis`
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
      <section id="cannabis-section">
        <FeatureSectionNoImage sectionTitle={dict.hemp.sectionTitle} items={dict.hemp.items} />
      </section>

      <LinkToMix title={dict.mix.linkTitle} />

      <CallToActionBanner />
      <Footer></Footer>
    </>
  );
};

export default CuminPage;

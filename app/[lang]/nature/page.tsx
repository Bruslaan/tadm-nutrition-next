import { Metadata } from 'next';
import CallToActionBanner from '../../../components/call-to-action-banner';
import ImageLeftSection from '../../../components/feature-section-image-left';
import Footer from '../../../components/layout/footer';
import NatureHeroSection from './nature-hero-section';
import RecycleSection from './recycle-section';
import TableSection from './table-section';

const baseUrl = 'https://www.tadm-nutrition.com';

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: 'en' | 'de' }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const title =
    lang === 'de'
      ? 'Nachhaltigkeit & Umwelt | tadm Nutrition'
      : 'Sustainability & Environment | tadm Nutrition';
  const description =
    lang === 'de'
      ? 'Erfahren Sie mehr über unsere nachhaltigen Produktionsprozesse, Recycling-Initiativen und unser Engagement für die Umwelt.'
      : 'Learn about our sustainable production processes, recycling initiatives, and commitment to the environment.';

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}/nature`,
      languages: {
        en: `${baseUrl}/en/nature`,
        de: `${baseUrl}/de/nature`,
        'x-default': `${baseUrl}/de/nature`
      }
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${lang}/nature`,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/static/footprint.png`,
          width: 1200,
          height: 630,
          alt: lang === 'de' ? 'Nachhaltigkeit bei tadm' : 'Sustainability at tadm'
        }
      ]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

const NaturePage = () => {
  return (
    <>
      <NatureHeroSection />
      <br />
      <br />
      <div className="mx-auto max-w-(--breakpoint-xl) p-5">
        <h2 className="text-4xl font-bold text-gray-200 md:text-9xl">Production</h2>
      </div>
      <ImageLeftSection imageURL="/static/footprint.png" />
      <div className="mx-auto max-w-(--breakpoint-xl) p-5">
        <h2 className="text-4xl font-bold text-gray-200 md:text-9xl">Recycle</h2>
      </div>
      <RecycleSection />
      <br />
      <TableSection />
      <br />
      <br />
      <CallToActionBanner />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default NaturePage;

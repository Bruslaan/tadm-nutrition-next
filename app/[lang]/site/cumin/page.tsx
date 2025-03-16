import CallToActionBanner from '../../../../components/call-to-action-banner';
import Footer from '../../../../components/layout/footer';
import CuminHeroSection from './cumin-hero-section';
import { FeatureSectionNoImage } from '../../../../components/feature-section';
import { getDictionary } from '../dictionaries';
import Link from 'next/link';
import LinkToMix from '../../../../components/LinkToMix';

const CuminPage = async ({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) => {
  const { lang } = await params;
  const dict = (await getDictionary(lang)) ?? 'en';
  return (
    <>
      <CuminHeroSection />
      <FeatureSectionNoImage sectionTitle={dict.cumin.sectionTitle} items={dict.cumin.items} />
      <LinkToMix title={dict.mix.linkTitle} />

      <CallToActionBanner />
      <Footer></Footer>
    </>
  );
};

export default CuminPage;

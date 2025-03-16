import Footer from '../../../../components/layout/footer';
import { getDictionary } from '../dictionaries';
import CuminHeroSection from './hero-section';
import { FeatureSectionNoImage } from '../../../../components/feature-section';
import CallToActionBanner from '../../../../components/call-to-action-banner';
import LinkToMix from '../../../../components/LinkToMix';

const CuminPage = async ({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) => {
  const { lang } = await params;
  const dict = (await getDictionary(lang)) ?? 'en';
  return (
    <>
      <CuminHeroSection />
      <FeatureSectionNoImage sectionTitle={dict.walnut.sectionTitle} items={dict.walnut.items} />
      <LinkToMix title={dict.mix.linkTitle} />

      <CallToActionBanner />
      <Footer></Footer>
    </>
  );
};

export default CuminPage;

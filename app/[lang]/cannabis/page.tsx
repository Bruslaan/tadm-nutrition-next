import CallToActionBanner from '../../../components/call-to-action-banner';
import Footer from '../../../components/layout/footer';
import { getDictionary } from '../dictionaries';
import CuminHeroSection from './hero-section';
import { FeatureSectionNoImage } from '../../../components/feature-section';

const CuminPage = async ({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) => {
  const { lang } = await params;
  const dict = (await getDictionary(lang)) ?? 'en';
  return (
    <>
      <CuminHeroSection />
      <FeatureSectionNoImage sectionTitle={dict.hemp.sectionTitle} items={dict.hemp.items} />
      <CallToActionBanner />
      <Footer></Footer>
    </>
  );
};

export default CuminPage;

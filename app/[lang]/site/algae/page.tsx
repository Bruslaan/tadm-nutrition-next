import CallToActionBanner from '../../../../components/call-to-action-banner';
import Footer from '../../../../components/layout/footer';
import CuminHeroSection from './algae-hero-section';
import { FeatureSectionNoImage } from '../../../../components/feature-section';
import { getDictionary } from '../dictionaries';
import LinkToMix from '../../../../components/LinkToMix';

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

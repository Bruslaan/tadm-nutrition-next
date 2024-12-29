import CallToActionBanner from 'components/call-to-action-banner';
import FaqPage from 'components/faq-page';
import FeatureSection, { FeatureSection2 } from 'components/feature-section';
import { ThreeItemGrid } from 'components/grid/three-items';
import HeroSection from 'components/hero-section';
import Footer from 'components/layout/footer';
import { MarqueeDemo } from 'components/testimonals';
import { TextRevealDemo } from 'components/text-reveal';
import VideoScrollSection from 'components/video-scroll-section';

export const metadata = {
  description: 'healthy brain nutrition supplement',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TextRevealDemo />
      <ThreeItemGrid />
      <FeatureSection imageUrl="/static/section1.png" />
      <VideoScrollSection />
      <br />
      <br />
      <FeatureSection2 imageUrl="/static/doctor.png" />
      <MarqueeDemo />
      <CallToActionBanner />
      <br />
      <FaqPage />
      <Footer />
    </>
  );
}

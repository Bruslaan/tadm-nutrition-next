import CallToActionBanner from 'components/call-to-action-banner';
import FaqPage from 'components/faq-page';
import FeatureSection from 'components/feature-section';
import { ThreeItemGrid } from 'components/grid/three-items';
import HeroSection from 'components/hero-section';
import Footer from 'components/layout/footer';
import { MarqueeDemo } from 'components/testimonals';
import VideoScrollSection from 'components/video-scroll-section';
import { TextRevealDemo } from 'components/text-reveal';

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
      <FeatureSection imageUrl="/static/doctor.png" />
      <MarqueeDemo />
      <CallToActionBanner />
      <FaqPage />
      <Footer />
    </>
  );
}

import FaqPage from 'components/faq-page';
import FeatureSection from 'components/feature-section';
import ImageLeftSection from 'components/feature-section-image-left';
import { ThreeItemGrid } from 'components/grid/three-items';
import HeroSection from 'components/hero-section';
import Footer from 'components/layout/footer';
import { MarqueeDemo } from 'components/testimonals';
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
      <ThreeItemGrid />
      <ImageLeftSection />
      <VideoScrollSection />
      <FeatureSection />
      <MarqueeDemo />
      <FaqPage />
      <Footer />
    </>
  );
}

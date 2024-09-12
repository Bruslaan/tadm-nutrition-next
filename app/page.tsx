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
      <VideoScrollSection />
      <MarqueeDemo />
      <Footer />
    </>
  );
}

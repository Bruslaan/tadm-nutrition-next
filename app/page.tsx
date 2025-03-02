import FaqPage from 'components/faq-page';
import FeatureSection, { FeatureSection2 } from 'components/feature-section';
import { ThreeItemGrid } from 'components/grid/three-items';
import HeroSection from 'components/hero-section';
import Footer from 'components/layout/footer';
import { MarqueeDemo } from 'components/testimonals';
import { TextRevealDemo } from 'components/text-reveal';
import VideoScrollSection from 'components/video-scroll-section';
import { AnimatedTestimonialsDemo } from '../components/AnimatedTestimonials';
export const metadata = {
  description: 'healthy brain nutrition supplement',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TextRevealDemo />
      <div>
        <ThreeItemGrid />
      </div>

      <FeatureSection imageUrl="/static/Hand.jpg" />
      <VideoScrollSection />
      <br />
      <br />
      <FeatureSection2 imageUrl="/static/doctor.png" />
      <AnimatedTestimonialsDemo />
      <MarqueeDemo />
      <FaqPage />
      <Footer />
    </main>
  );
}

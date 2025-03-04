import FaqPage from '../../components/faq-page';
import FeatureSection, { FeatureSection2 } from '../../components/feature-section';
import { ThreeItemGrid } from '../../components/grid/three-items';
import HeroSection from '../../components/hero-section';
import Footer from '../../components/layout/footer';
import { MarqueeDemo } from '../../components/testimonals';
import { TextRevealDemo } from '../../components/text-reveal';
import VideoScrollSection from '../../components/video-scroll-section';
import ExpertsCarusell from '@/components/ui/experts-carusell';
export const metadata = {
  description: 'healthy brain nutrition supplement',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) {
  const { lang } = await params;
  return (
    <main>
      <HeroSection langauge={lang} />
      <TextRevealDemo />
      <div>
        <ThreeItemGrid />
      </div>

      <FeatureSection imageUrl="/static/Hand.jpg" />
      <VideoScrollSection />
      <br />
      <br />
      <FeatureSection2 imageUrl="/static/doctor.png" />
      <ExpertsCarusell />
      <MarqueeDemo />
      <FaqPage />
      <Footer />
    </main>
  );
}

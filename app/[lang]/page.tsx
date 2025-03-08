import FaqPage from '../../components/faq-page';
import FeatureSection, { FeatureSection2 } from '../../components/feature-section';
import { ThreeItemGrid } from '../../components/grid/three-items';
import HeroSection from '../../components/hero-section';
import Footer from '../../components/layout/footer';
import { MarqueeDemo } from '../../components/testimonals';
import { TextRevealDemo } from '../../components/text-reveal';
import VideoScrollSection, { InsideTadm } from '../../components/video-scroll-section';
import ExpertsCarusell, { Testimonial } from '@/components/ui/experts-carusell';
import { getDictionary } from './dictionaries';
export const metadata = {
  description: 'healthy brain nutrition supplement',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang)) ?? 'en';
  return (
    <main>
      <HeroSection title={dict.hero.title} subtitle={dict.hero.subtitle} />
      <TextRevealDemo text={dict.textReveal} />
      <ThreeItemGrid title={dict.products.title} />

      <FeatureSection
        sectionTitle={dict.bulletPoints.title}
        items={dict.bulletPoints.list}
        imageUrl="/static/Hand.jpg"
      />
      <VideoScrollSection title={dict.insideTadm.title} items={dict.insideTadm as InsideTadm} />
      <FeatureSection2
        title={dict.facility.title}
        accordionContent={dict.facility.list}
        imageUrl="/static/doctor.png"
      />
      <ExpertsCarusell
        title={dict.experts.title}
        testimonials={dict.experts.list as Testimonial[]}
      />
      <MarqueeDemo title={'Rezensionen'} />
      <FaqPage title={dict.faq.title} items={dict.faq.list} />
      <Footer />
    </main>
  );
}

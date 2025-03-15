import FaqPage from '../../../components/faq-page';
import FeatureSection, { FeatureSection2 } from '../../../components/feature-section';
import { ThreeItemGrid } from '../../../components/grid/three-items';
import HeroSection from '../../../components/hero-section';
import Footer from '../../../components/layout/footer';
import { MarqueeDemo } from '../../../components/testimonals';
import { TextRevealDemo } from '../../../components/text-reveal';
import VideoScrollSection, { InsideTadm } from '../../../components/video-scroll-section';
import ExpertsCarusell, { Testimonial } from '@/components/ui/experts-carusell';
import { getDictionary } from './dictionaries';
import CallToActionBanner from '../../../components/call-to-action-banner';
import Image from 'next/image';

export const metadata = {
  description: 'healthy brain nutrition supplement',
  openGraph: {
    type: 'website'
  }
};

const TrustItem = ({ iconName, text }: { iconName: string; text: string }) => (
  <div className="flex items-center justify-center gap-4 text-xs font-semibold text-neutral-800 uppercase md:text-base">
    <Image
      className="h-auto w-6 object-contain md:h-8"
      src={iconName}
      width={50}
      height={50}
      alt="vegan icon"
    />
    <p>{text}</p>
  </div>
);

export default async function HomePage({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang)) ?? 'en';
  return (
    <main>
      <HeroSection title={dict.hero.title} subtitle={dict.hero.subtitle} />
      <section className="mt-14 flex flex-col items-center justify-evenly gap-9">
        <Image
          className="h-8 w-auto object-contain"
          src={'/static/madeingermany.svg'}
          width={150}
          height={50}
          alt="vegan icon"
        />

        <div className="flex shrink-0 flex-col flex-wrap items-start gap-4 rounded-md bg-gray-100 p-3 px-12 text-nowrap md:flex-row md:gap-6 md:rounded-full md:py-6">
          <TrustItem iconName="/static/vegan-icon.svg" text={'100% Vegan'} />
          <TrustItem iconName="/static/earth-icon.svg" text={'non-Gmo, 100% Natural'} />
          <TrustItem iconName="/static/noanimals-icon.svg" text={'No animals harmed'} />
        </div>
      </section>
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
      {/*<MarqueeDemo title={'Rezensionen'} />*/}
      <FaqPage title={dict.faq.title} items={dict.faq.list} />
      <CallToActionBanner />
      <Footer />
    </main>
  );
}

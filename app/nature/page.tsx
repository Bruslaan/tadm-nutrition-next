import CallToActionBanner from 'components/call-to-action-banner';
import ImageLeftSection from 'components/feature-section-image-left';
import NatureHeroSection from './nature-hero-section';
import RecycleSection from './recycle-section';

export const metadata = {
  title: 'Nature Page',
  description: 'Page where we show our recycling'
};

const NaturePage = () => {
  return (
    <>
      <NatureHeroSection />
      <ImageLeftSection imageURL="/static/footprint.png" />
      <RecycleSection />
      <br />
      <CallToActionBanner />
      <br />
    </>
  );
};

export default NaturePage;

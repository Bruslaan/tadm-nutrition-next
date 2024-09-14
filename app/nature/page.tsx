import ImageLeftSection from 'components/feature-section-image-left';
import NatureHeroSection from './nature-hero-section';

export const metadata = {
  title: 'Nature Page',
  description: 'Page where we show our recycling'
};

const NaturePage = () => {
  return (
    <>
      <NatureHeroSection />
      <ImageLeftSection imageURL="/static/footprint.png" />
    </>
  );
};

export default NaturePage;

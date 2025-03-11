import CallToActionBanner from '../../../../components/call-to-action-banner';
import ImageLeftSection from '../../../../components/feature-section-image-left';
import Footer from '../../../../components/layout/footer';
import NatureHeroSection from './nature-hero-section';
import RecycleSection from './recycle-section';
import TableSection from './table-section';

export const metadata = {
  title: 'Nature Page',
  description: 'Page where we show our recycling'
};

const NaturePage = () => {
  return (
    <>
      <NatureHeroSection />
      <br />
      <br />
      <div className="mx-auto max-w-(--breakpoint-xl) p-5">
        <h2 className="text-4xl font-bold text-gray-200 md:text-9xl">Production</h2>
      </div>
      <ImageLeftSection imageURL="/static/footprint.png" />
      <div className="mx-auto max-w-(--breakpoint-xl) p-5">
        <h2 className="text-4xl font-bold text-gray-200 md:text-9xl">Recycle</h2>
      </div>
      <RecycleSection />
      <br />
      <TableSection />
      <br />
      <br />
      <CallToActionBanner />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default NaturePage;

import CallToActionBanner from 'components/call-to-action-banner';
import ImageLeftSection from 'components/feature-section-image-left';
import Footer from 'components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import AlgaeHeroSection from './algae-hero-section';

const CuminPage = () => {
  return (
    <>
      <AlgaeHeroSection />
      <div className="mx-auto max-w-screen-xl p-5 lg:min-h-screen">
        <h2 className="text-6xl font-bold text-gray-300 md:max-w-[50%] md:text-9xl">
          <span className="font-normal">What is</span> Algae?
        </h2>
        <br />
        <br />
        <p className="text-3xl md:max-w-[70%] lg:text-5xl">
          Nature's <span className="text-green-500">Omega-3</span> Factory from the Sea. Green
          powerhouse of sustainable nutrition.
        </p>
      </div>
      <br />
      <br />

      <div className="relative lg:min-h-screen">
        <div className="-top-32 left-0 lg:absolute">
          <Image
            className="custom-breath"
            src="/static/algae-left.png"
            alt="cumin flower"
            width={600}
            height={600}
          ></Image>
        </div>

        <div className="mx-auto w-full max-w-screen-xl p-5 text-right">
          <h2 className="ml-auto text-6xl font-bold text-gray-300 md:max-w-[50%] lg:text-9xl">
            <span className="font-normal">What it</span> Does?
          </h2>
          <br />
          <br />
          <p className="ml-auto text-3xl md:max-w-[70%] lg:text-5xl">
            Sharpen <span className="text-green-500">Memory and Focus</span> Courtesy of the Sea's
            Richest Brain Food.
          </p>
        </div>
      </div>

      <ImageLeftSection imageURL="/static/footprint.png" />

      <div className="mx-auto max-w-screen-xl p-5 lg:min-h-screen">
        <h2 className="text-6xl font-bold text-gray-300 md:max-w-[50%] md:text-9xl">
          <span className="font-normal">In unique</span> Mix
        </h2>
        <br />
        <br />

        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <div className="flex flex-col items-center justify-between text-center">
            <h2 className="text-4xl font-bold text-orange-200">Walnut</h2>
            <Image src="/static/wallnut-icon.png" alt="walnut" width={300} height={300}></Image>

            <Link href="/walnut" className="rounded-full bg-black px-4 py-2 text-white">
              <button>Learn More →</button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between text-center">
            <h2 className="text-4xl font-bold text-green-300">Cannabis</h2>
            <Image
              src="/static/cannabis.png"
              alt="cannabis flower"
              width={300}
              height={300}
            ></Image>

            <Link href="/cannabis" className="rounded-full bg-black px-4 py-2 text-white">
              <button>Learn More →</button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between text-center">
            <h2 className="text-4xl font-bold text-blue-200">Black Cumin</h2>
            <Image
              src="/static/CuminFlower.png"
              alt="cumin flower"
              width={300}
              height={300}
            ></Image>

            <Link href="/cumin" className="rounded-full bg-black px-4 py-2 text-white">
              <button>Learn More →</button>
            </Link>
          </div>
        </div>
      </div>

      <br />

      <CallToActionBanner />
      <Footer></Footer>
    </>
  );
};

export default CuminPage;

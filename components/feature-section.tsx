import Image from 'next/image';
import { FAQItem } from './faq-page';
const FeatureSection = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <section id="feature" style={{ background: '#F6F6F6' }}>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:py-20">
        {/* Component */}
        <h2 className="mb-6 inline-block text-4xl font-bold text-neutral-900 md:mb-10 md:text-6xl lg:mb-12">
          Most important bullet points
        </h2>
        <br />
        <br />
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <ul className="grid max-w-2xl grid-cols-1 text-xl sm:gap-6 lg:max-w-none">
            <li className="flex flex-col rounded-2xl bg-white p-4">
              {/*<img*/}
              {/*  src="static/capsule.png"*/}
              {/*  alt=""*/}
              {/*  className="mb-4 inline-block h-10 w-10 object-contain"*/}
              {/*/>*/}
              <h2 className="mb-4 text-2xl font-semibold">Enhancement of Cognitive Abilities</h2>
              <p className="text-xl text-gray-500">
                Our synergistic formula provides your brain with essential fatty acids that are
                crucial for mental clarity and focus.
              </p>
            </li>
            <li className="flex flex-col rounded-2xl bg-white p-4">
              {/*<img*/}
              {/*  src="static/capsule.png"*/}
              {/*  alt=""*/}
              {/*  className="mb-4 inline-block h-10 w-10 object-contain"*/}
              {/*/>*/}
              <h2 className="mb-4 text-2xl font-semibold">Support for Holistic Health</h2>
              <p className="text-xl text-gray-500">
                tadm Brain not only supports your brain but also strengthens your overall health.
                Body and mind work hand in hand – only in harmony can you reach your full potential.
              </p>
            </li>
            <li className="flex flex-col rounded-2xl bg-white p-4">
              {/*<img*/}
              {/*  src="static/capsule.png"*/}
              {/*  alt=""*/}
              {/*  className="mb-4 inline-block h-10 w-10 object-contain"*/}
              {/*/>*/}
              <h2 className="mb-4 text-2xl font-semibold">Easy Integration into Daily Life</h2>
              <p className="text-xl text-gray-500">
                Consistent success is built on a reliable routine. With its easy-to-take, vegan
                capsules, tadm Brain seamlessly fits into your daily life, providing sustainable
                support for body and mind every day.
              </p>
            </li>
          </ul>

          <div className="h-full w-full max-w-xl overflow-hidden rounded-3xl">
            <Image
              width={500}
              height={500}
              src={imageUrl}
              alt=""
              className="mx-auto inline-block h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

export const FeatureSection2 = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-20">
        <h2 className="mb-6 inline-block text-4xl font-bold text-neutral-900 md:mb-10 md:text-6xl lg:mb-12">
          Production with the highest standards in German certified fascilities
        </h2>
        <br />
        {/* Component */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Item */}
          <div className="">
            <p className="px-3 text-xl text-gray-700">
              Our production was done in specialized areas because we are so good and cool at
              developing nutrition products
            </p>

            <br />
            <br />
            <FAQItem
              key={1}
              question="Professional fascilities and laboratories"
              answer="asdasdasd"
            />
            <FAQItem key={2} question="Laboratory analysis and tests" answer="asdasdasd" />
            <FAQItem key={3} question="Research-based production" answer="asdasdasd" />
            <FAQItem key={4} question="High-quality procurement & sourcing" answer="asdasdasd" />
            <br />
            <Image
              className="object-contain"
              src="/static/vegan.png"
              width={150}
              height={20}
              alt="vegan icon"
            />
          </div>
          {/* Item */}
          <div className="h-full max-h-[50vh] w-full max-w-xl overflow-hidden rounded-3xl">
            <Image
              width={500}
              height={500}
              src={imageUrl}
              alt=""
              className="mx-auto inline-block h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

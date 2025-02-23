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
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <ul className="grid max-w-2xl grid-cols-1 text-xl sm:gap-2 lg:max-w-none">
            <li className="mb-3 flex flex-col">
              <img
                src="static/package_mini.png"
                alt=""
                className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
              />
              <h2 className="mb-4 text-2xl font-semibold">Your brain enhancer</h2>
              <p className="text-xl text-gray-500">
                Rich in omega-3 it powers up your brain with most integral nutrition. keep your
                brain healthy.
              </p>
            </li>
            <li className="flex flex-col">
              <img
                src="static/package_mini.png"
                alt=""
                className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
              />
              <h2 className="mb-4 text-2xl font-semibold">Immune booster</h2>
              <p className="text-xl text-gray-500">
                Rich in omega-3 it powers up your brain with most integral nutrition. keep your
                brain healthy.
              </p>
            </li>
            <li className="flex flex-col py-5">
              <img
                src="static/package_mini.png"
                alt=""
                className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
              />
              <h2 className="mb-4 text-2xl font-semibold">Focus macher</h2>
              <p className="text-xl text-gray-500">
                Rich in omega-3 it powers up your brain with most integral nutrition. keep your
                brain healthy. Healthy brain is a guarantee to a stable and healthy life.
              </p>
            </li>
          </ul>

          <div className="h-full w-full max-w-xl overflow-hidden rounded-xl">
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
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
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
          <div className="h-full max-h-[70vh] w-full max-w-xl overflow-hidden rounded-xl">
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

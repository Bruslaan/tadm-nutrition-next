import Image from 'next/image';
import { AccordionContent, Accordions, FAQItem } from './faq-page';
import TrustItem from './TrustItem';
const FeatureSection = ({
  sectionTitle,
  items,
  imageUrl
}: {
  sectionTitle: string;
  items: { title: string; content: string }[];
  imageUrl?: string;
}) => {
  const ImportantPoint = ({ title, text }: { title: string; text: string }) => {
    return (
      <li className="flex-col py-4">
        {/*<img*/}
        {/*  src="static/capsule.png"*/}
        {/*  alt=""*/}
        {/*  className="mb-4 inline-block h-10 w-10 object-contain"*/}
        {/*/>*/}
        <h2 className="mb-4 inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-lg font-semibold md:text-xl">
          {title}
        </h2>

        <p className="pl-2 text-xl text-gray-700">{text}</p>
      </li>
    );
  };
  return (
    <section id="feature" className="relative">
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      {/* Container */}
      <div className="z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-2 md:py-20">
        {/* Component */}
        <h2 className="mb-6 inline-block text-4xl font-bold text-neutral-900 md:mb-10 md:text-6xl lg:mb-12">
          {sectionTitle}
        </h2>
        <br />
        <br />
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <ul className="text-md grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none">
            {items.map((item, index) => (
              <ImportantPoint key={index} title={item.title} text={item.content} />
            ))}
          </ul>

          <div className="h-full w-full max-w-xl overflow-hidden rounded-3xl">
            {imageUrl && (
              <Image
                width={550}
                height={500}
                src={imageUrl}
                alt=""
                className="mx-auto inline-block aspect-video h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureSectionNoImage = ({
  sectionTitle,
  items
}: {
  sectionTitle: string;
  items: { title: string; content: string }[];
}) => {
  const ImportantPoint = ({ title, text }: { title: string; text: string }) => {
    return (
      <li className="flex-col py-4">
        {/*<img*/}
        {/*  src="static/capsule.png"*/}
        {/*  alt=""*/}
        {/*  className="mb-4 inline-block h-10 w-10 object-contain"*/}
        {/*/>*/}
        <h2 className="mb-4 inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-lg font-semibold md:text-xl">
          {title}
        </h2>

        <p className="pl-2 text-xl text-gray-700">{text}</p>
      </li>
    );
  };
  return (
    <section id="feature" className="relative mx-auto max-w-7xl">
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      {/* Container */}
      <div className="z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-2 md:py-20">
        {/* Component */}
        <h2 className="mb-6 inline-block text-4xl font-bold text-neutral-900 md:mb-10 md:text-6xl lg:mb-12">
          {sectionTitle}
        </h2>
        <br />
        <br />
        <ul className="grid max-w-2xl grid-cols-1 gap-6 text-xl lg:max-w-none">
          {items.map((item, index) => (
            <ImportantPoint key={index} title={item.title} text={item.content} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureSection;

export const FeatureSection2 = ({
  title,
  accordionContent,
  imageUrl
}: {
  title: string;
  accordionContent: AccordionContent[];
  imageUrl: string;
}) => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-12 md:px-10 md:pb-20">
        <h2 className="mb-6 inline-block text-4xl font-bold text-neutral-900 md:mb-10 md:text-6xl lg:mb-12">
          {title}
        </h2>
        <br />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <Accordions accordionContent={accordionContent} />
          </div>
          {/* Item */}
          <div className="h-[50vh] w-full max-w-xl overflow-hidden rounded-3xl">
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

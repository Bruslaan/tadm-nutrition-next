import Image from 'next/image';
import { AccordionContent, Accordions, FAQItem } from './faq-page';
const FeatureSection = ({
  sectionTitle,
  items,
  imageUrl
}: {
  sectionTitle: string;
  items: { title: string; content: string }[];
  imageUrl: string;
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
          <ul className="grid max-w-2xl grid-cols-1 gap-6 text-xl lg:max-w-none">
            {items.map((item, index) => (
              <ImportantPoint key={index} title={item.title} text={item.content} />
            ))}
          </ul>

          <div className="h-full w-full max-w-xl overflow-hidden rounded-3xl">
            <Image
              width={550}
              height={500}
              src={imageUrl}
              alt=""
              className="mx-auto inline-block aspect-video h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const accordionData: AccordionContent[] = [
  {
    questions: 'Quality and Precision – Made in Germany',
    content: (
      <>
        <p>
          Our production takes place under the highest quality assurance standards in a
          GMP-certified facility in Germany.
        </p>
        <p>
          In addition to meeting EU and US regulations, our production also complies with DIN EN ISO
          9001 and HACCP quality standards and is carefully monitored and controlled by skilled
          personnel.
        </p>
        <p>
          We use state-of-the-art technology and machinery to meet the highest quality standards and
          fulfill the expectations of our customers.
        </p>
      </>
    )
  },
  {
    questions: 'Careful Selection of Premium Raw Materials',
    content: (
      <>
        <p>
          Our raw materials are carefully selected and sourced exclusively from trusted suppliers to
          ensure the highest quality and purity of our products.
        </p>
        <p>All oils used are cold-pressed to retain their nutrients as effectively as possible.</p>
        <p>
          By using high-quality raw materials and ideal blending ratios, we ensure that our products
          provide optimal bioavailability of active ingredients for maximum effectiveness.
        </p>
      </>
    )
  },
  {
    questions: 'Research-Based Production',
    content: (
      <>
        <p>
          In collaboration with leading laboratories and scientists in Munich, we have developed a
          combination of premium essential fatty acids with ingredients that support each other
          synergistically.
        </p>
        <p>
          Our 100% vegan softgels feature a controlled release profile that allows optimal
          absorption of the active ingredients.
        </p>
        <p>
          Our team of experts and scientists stays at the forefront of research while also relying
          on proven, scientifically validated ingredients.
        </p>
      </>
    )
  },
  {
    questions: 'Sustainability',
    content: (
      <>
        <p>Our products are 100% vegan – out of responsibility for people and the planet.</p>
        <p>We use glass and recyclable materials for our packaging to conserve resources.</p>
        <p>
          We promote sustainable production processes and responsibly source our raw materials to
          keep our ecological footprint as small as possible.
        </p>
      </>
    )
  }
];

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
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-20">
        <h2 className="mb-6 inline-block text-4xl font-bold text-neutral-900 md:mb-10 md:text-6xl lg:mb-12">
          {title}
        </h2>
        <br />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div className="">
            <Accordions accordionContent={accordionContent} />
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

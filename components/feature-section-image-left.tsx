import Image from 'next/image';
import Link from 'next/link';
const ImageLeftSection = ({ imageURL, linkTo }: { imageURL: string; linkTo?: string }) => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto mb-10 w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Item */}
          <div className="h-full w-full max-w-xl items-center overflow-hidden rounded-xl">
            <Image
              width={500}
              height={500}
              src={imageURL}
              alt=""
              className="mx-auto inline-block h-full w-full object-cover object-center"
            />
          </div>
          <div className="py-20">
            <h2 className="mb-6 inline-block text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12">
              We care
            </h2>

            <p className="text-xl text-neutral-700">
              Recycling is a crucial component in our quest for a sustainable future. By repurposing
              materials, we dramatically reduce the need for raw resource extraction, thereby
              conserving natural habitats and diminishing our carbon footprint. Each time we
              recycle, we participate in a cycle of renewal that decreases pollution, saves energy,
              and lessens the burden on landfills.
            </p>
            <p className="mt-5 text-xl text-neutral-700">
              Here we have the most powerful brian liquid oil that revolutionizes your memory. Here
              we have the most powerful brian liquid oil that revolutionizes your memory. Here we
              have the most powerful brian liquid oil that revolutionizes your memory.{' '}
            </p>
            {linkTo && (
              <div className="mt-10">
                <Link href={linkTo} className="text-lg text-blue-500">
                  Learn More →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageLeftSection;

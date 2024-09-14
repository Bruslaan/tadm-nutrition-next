import Image from 'next/image';
import Link from 'next/link';
const ImageLeftSection = ({ imageURL }: { imageURL: string }) => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-20">
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
              Only cool People use it
            </h2>

            <p className="text-xl text-neutral-700">
              Schaffst du es immer dich gesund zu ernähren, besonders wenn die Zeit mal knapp ist?
              In solchen Momenten greifen viele von uns oft zu Fast Food oder essen gar nichts –
              nicht die beste Option. Genau hier ist yfood die perfekte Lösung: ausgewogen, schnell,
              einfach und super lecker. Probiers mal!
            </p>
            <p className="mt-5 text-xl text-neutral-700">
              Here we have the most powerful brian liquid oil that revolutionizes your memory. Here
              we have the most powerful brian liquid oil that revolutionizes your memory. Here we
              have the most powerful brian liquid oil that revolutionizes your memory.{' '}
            </p>

            <div className="mt-10">
              <Link href="#" className="text-lg text-blue-500">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageLeftSection;

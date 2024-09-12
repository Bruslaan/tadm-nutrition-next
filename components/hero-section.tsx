import Image from 'next/image';
import FloatingIcon from './floating-icon';

const HeroSection = () => {
  return (
    <section className="flex min-h-[90vh] flex-col overflow-hidden dark:bg-gray-900">
      <div className="m-auto flex h-full w-full max-w-screen-xl flex-col-reverse gap-4 p-5 lg:flex-row">
        <div className="mr-auto flex-1 place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Healthy, Organic Brain Nutrition
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            tadm is a supplement that supports your ability to focus, mental speed & memory.
          </p>

          <a
            href="#"
            className="hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 mt-5 inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Shop Now
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Was ist tadm?
          </a>

          <Image
            className="object-contain"
            src="/static/vegan.png"
            width={150}
            height={20}
            alt="vegan icon"
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="relative p-10">
            <FloatingIcon className="right-0 top-0 w-14 blur-sm" size={70} />
            <FloatingIcon className="bottom-0 left-0 z-10 blur-sm" size={150} />
            <FloatingIcon className="left-0" size={50} />
            <FloatingIcon className="-right-32 top-20 -rotate-45" size={80} />
            <FloatingIcon
              imageURL="/static/cumin.png"
              className="-left-32 top-20 -rotate-45"
              size={120}
            />
            <FloatingIcon
              imageURL="/static/wallnut.png"
              className="-left-32 bottom-20"
              size={120}
            />

            <Image
              className="custom-float absolute -top-12 right-0 h-20 w-auto object-cover lg:h-32"
              src="/static/cap.png"
              width={100}
              height={100}
              alt="cap image"
            />

            <Image
              className="h-52 w-auto object-cover lg:h-96"
              src="/static/hero-rotated.png"
              width={200}
              height={200}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

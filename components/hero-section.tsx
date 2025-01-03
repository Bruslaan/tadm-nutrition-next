import Image from 'next/image';
import FloatingIcon from './floating-icon';

const HeroSection = () => {
  return (
    <section
      className="flex min-h-screen flex-col overflow-hidden dark:bg-gray-900"
      style={{ background: '#F2F9FF' }}
    >
      <div className="m-auto flex h-full w-full max-w-screen-xl flex-col-reverse gap-4 p-5 lg:flex-row">
        <div className="mr-auto flex-1 place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-6xl">
            Healthy, Organic Brain Nutrition
          </h1>
          <p className="mb-6 max-w-2xl text-2xl font-light text-gray-500 dark:text-gray-400 lg:mb-8">
            tadm is a supplement that supports your ability to focus, mental speed & memory.
          </p>

          <a
            href="/product/tadm-black"
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
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#inside-tadm"
            className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Was ist tadm?
          </a>
          <br />
          <br />
          <br />

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
            <FloatingIcon className="right-0 top-0 w-14 blur-sm" size={60} />
            <FloatingIcon className="bottom-0 left-0 z-10 blur-sm" size={130} />
            <FloatingIcon className="left-0" size={30} />
            <FloatingIcon className="-right-32 top-20 -rotate-45" size={70} />
            <FloatingIcon className="-left-32 top-32 -rotate-45" size={90} />

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

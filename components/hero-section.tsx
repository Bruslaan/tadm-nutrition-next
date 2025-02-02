import Image from 'next/image';
import FloatingIcon from './floating-icon';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden dark:bg-gray-900"
      style={{
        background: "url('/static/line1.svg'), url('/static/line2.svg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' // or "contain" depending on your desired scaling
      }}
    >
      <div className="m-auto flex h-full w-full max-w-screen-xl flex-col-reverse gap-4 p-5 lg:flex-row">
        <div className="mr-auto flex-1 place-self-center lg:col-span-7">
          <h2 className="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight dark:text-white md:text-7xl">
            Healthy, Organic Brain Nutrition
          </h2>
          <br />
          <p className="mb-6 max-w-2xl text-2xl font-light text-gray-500 dark:text-gray-400 lg:mb-8">
            tadm is a supplement that supports your ability to focus, mental speed & memory.
          </p>
          <br />

          <Link
            href="/product/first-product"
            className="focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 mt-5 inline-flex min-w-36 items-center justify-center rounded-lg border bg-black px-5 py-3 text-center text-base font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black focus:ring-4"
          >
            Shop Now
            {/* <svg
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
            </svg> */}
          </Link>
          <a
            href="#inside-tadm"
            className="inline-flex items-center justify-center rounded-lg border border-gray-900 bg-white px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
              className="custom-float bottom-0 h-52 w-auto object-cover lg:h-96"
              src="/static/products-with-shadow.webp"
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

import Image from 'next/image';
import FloatingIcon from './floating-icon';
import Link from 'next/link';

const HeroIcon = ({ title, subtitle, icon }: { title: string; subtitle: string; icon: string }) => {
  return (
    <div className="flex w-32 flex-col items-center justify-center gap-1 text-center text-xs font-bold uppercase">
      <Image
        style={{ height: '30px' }}
        className="w-auto object-contain"
        src={icon}
        width={30}
        height={30}
        alt="vegan icon"
      />
      <div>
        <p> {title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden pt-10 dark:bg-gray-900"
      style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }}
    >
      <div className="mt-14 block p-5">
        <h2 className="mb-4 text-center text-4xl leading-none font-bold tracking-tight md:text-7xl dark:text-white">
          Healthy, Organic Brain Nutrition
        </h2>
        <p className="text-md mb-6 text-center font-light text-gray-500 md:text-2xl lg:mb-8 dark:text-gray-400">
          tadm is a supplement that supports your ability to focus, mental speed & memory.
        </p>
      </div>

      <Image
        src="/static/herobg.webp"
        width={1200}
        height={1200}
        style={{ zIndex: '-10' }}
        alt="hero image"
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        priority
      />
      <FloatingIcon className="top-0 right-0 w-14 blur-xs" size={60} />
      <FloatingIcon className="bottom-0 left-0 z-10 blur-xs" size={130} />
      <FloatingIcon className="left-0" size={30} />
      <FloatingIcon className="right-0 bottom-0 -rotate-45" size={70} />
      <FloatingIcon className="top-32 left-32 -rotate-45" size={90} />
    </section>
  );
};

export default HeroSection;

import Image from 'next/image';
import FloatingIcon from './floating-icon';
import Discoverbutton from './Discoverbutton';

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

const HeroSection = async ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-10 dark:bg-gray-900">
      <div className="mx-auto mt-12 flex h-[35vh] flex-col items-center justify-center p-5">
        <h2 className="mb-4 text-center text-4xl leading-none font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white">
          {title}
        </h2>
        <p className="text-md mb-6 text-center font-light text-gray-800 md:text-xl lg:mb-8 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
      <Discoverbutton href={'#text-reveal'} />

      <Image
        src="/static/herobg.webp"
        width={2200}
        height={2200}
        style={{ zIndex: '-10' }}
        alt="hero image"
        className="absolute inset-0 h-full w-full object-cover object-[50%_75%]"
        priority
      />
      <div className="hidden md:flex">
        <FloatingIcon className="right-0 bottom-4 z-10 rotate-45 blur-xs" size={130} />
        <FloatingIcon className="top-1/2 left-1/6 rotate-45" size={90} />
        <FloatingIcon className="bottom-10 left-1/4 -rotate-45" size={90} />
        <FloatingIcon className="bottom-1/4 left-0 blur-xs" size={30} />
        <FloatingIcon className="-right-10 bottom-1/4" size={80} />
        <FloatingIcon className="top-1/2 right-32 -rotate-45" size={90} />
      </div>
    </section>
  );
};

export default HeroSection;

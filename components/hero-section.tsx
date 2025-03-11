import Image from 'next/image';
import FloatingIcon from './floating-icon';
import Link from 'next/link';
import { getDictionary } from '../app/[lang]/site/dictionaries';

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
      <div className="mx-auto mt-12 block p-5 md:mt-20">
        <h2 className="mb-4 text-center text-4xl leading-none font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white">
          {title}
        </h2>
        <p className="text-md mb-6 text-center font-light text-gray-800 md:text-xl lg:mb-8 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center justify-center gap-3 text-black">
        <span className="uppercase">Discover</span>
        <Link
          href="#text-reveal"
          className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-black text-xl text-white"
        >
          ↓
        </Link>
      </div>

      <Image
        src="/static/herobg.webp"
        width={1200}
        height={1200}
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

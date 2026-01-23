import Image from 'next/image';
import FloatingIcon from './floating-icon';

const TrustBadge = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-gray-700 sm:text-sm">
      <Image
        className="h-5 w-5 object-contain sm:h-6 sm:w-6"
        src={icon}
        width={24}
        height={24}
        alt={text}
      />
      <span>{text}</span>
    </div>
  );
};

const HeroSection = async ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-10 dark:bg-gray-900">
      <div className="mx-auto mt-12 flex h-[35vh] flex-col items-center justify-center p-5">
        <h1 className="mb-4 text-center text-4xl leading-none font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="text-md mb-6 text-center font-light text-gray-800 md:text-xl lg:mb-8 dark:text-gray-400">
          {subtitle}
        </p>
      </div>

      {/* Trust badges at bottom */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3 px-4">
        <Image
          className="h-8 w-auto object-contain"
          src="/static/madeingermany.svg"
          width={160}
          height={40}
          alt="Made in Germany"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-full bg-white/80 px-5 py-2 backdrop-blur-sm sm:gap-6">
          <TrustBadge icon="/static/vegan-icon.svg" text="100% Vegan" />
          <TrustBadge icon="/static/earth-icon.svg" text="Non-GMO" />
          <TrustBadge icon="/static/noanimals-icon.svg" text="Cruelty Free" />
        </div>
      </div>

      <Image
        src="/static/herobg.webp"
        width={2200}
        height={2200}
        style={{ zIndex: '-10' }}
        alt="tadm Nutrition premium brain health supplements hero background"
        className="absolute inset-0 h-full w-full object-cover object-[50%_75%]"
        priority
      />

      {/* Bottom fade transition */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-32 bg-gradient-to-b from-transparent to-white" />
      <div className="hidden md:flex">
        <FloatingIcon className="right-0 bottom-4 z-10 rotate-45 blur-xs" size={130} />
        <FloatingIcon className="top-1/2 left-1/6 rotate-45 blur-md" size={90} />
        <FloatingIcon className="bottom-10 left-1/4 -rotate-45" size={90} />
        <FloatingIcon className="bottom-1/4 left-0 blur-xs" size={30} />
        <FloatingIcon className="-right-10 bottom-1/4" size={80} />
        <FloatingIcon className="top-1/2 right-32 -rotate-45" size={90} />
      </div>
    </section>
  );
};

export default HeroSection;

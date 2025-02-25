import FloatingIcon from 'components/floating-icon';
import Image from 'next/image';
const AlgaeHeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center">
      <h2 className="max-w-5xl text-5xl font-bold uppercase text-green-200 lg:text-9xl">
        ALGAE OIL
      </h2>
      <div className="relative -mt-20">
        {/* svg */}

        <div className="relative">
          <Image
            src="/static/algae-icon.png"
            alt="cumin flower"
            height={500}
            width={500}
            className="w-60 lg:w-96"
          ></Image>
          <FloatingIcon className="right-0 top-0 w-14 blur-xs" size={70} />
          <FloatingIcon className="bottom-0 left-0 z-10 blur-xs" size={150} />
          <FloatingIcon className="left-0" size={50} />
          <FloatingIcon className="-right-32 top-20 -rotate-45" size={80} />
        </div>
      </div>
      <div className="absolute bottom-10 z-10 flex flex-col items-center justify-center gap-3 text-black">
        <span className="uppercase">Discover</span>
        <span className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-black text-xl text-white">
          ↓
        </span>
      </div>
    </div>
  );
};

export default AlgaeHeroSection;

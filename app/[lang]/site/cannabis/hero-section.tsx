import FloatingIcon from '../../../../components/floating-icon';
import Image from 'next/image';
import Discoverbutton from '../../../../components/Discoverbutton';
const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center">
      <h2 className="max-w-5xl text-5xl font-bold text-green-200 uppercase lg:text-9xl">
        Cannabis Oil
      </h2>
      <div className="relative -mt-20">
        <div className="relative">
          <Image
            src="/static/cannabis.png"
            alt="cannabis flower"
            height={300}
            width={300}
            className="w-60 lg:w-96"
          ></Image>
          <FloatingIcon className="top-0 right-0 w-14 blur-xs" size={70} />
          <FloatingIcon className="bottom-0 left-0 z-10 blur-xs" size={150} />
          <FloatingIcon className="left-0" size={50} />
          <FloatingIcon className="top-20 -right-32 -rotate-45" size={80} />
        </div>
      </div>
      <Discoverbutton href={'#cannabis-section'} />
    </div>
  );
};

export default HeroSection;

import FloatingIcon from '../../../../components/floating-icon';
import Image from 'next/image';
const CuminHeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center">
      <h2 className="max-w-5xl text-5xl font-bold text-blue-200 uppercase lg:text-9xl">Mix</h2>

      <div className="absolute bottom-10 z-10 flex flex-col items-center justify-center gap-3 text-black">
        <span className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-black text-xl text-white">
          ↓
        </span>
      </div>
    </div>
  );
};

export default CuminHeroSection;

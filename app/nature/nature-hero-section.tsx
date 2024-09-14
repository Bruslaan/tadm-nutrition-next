import Image from 'next/image';
const NatureHeroSection = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-green-100">
      <div className="absolute z-10 p-5 text-center">
        <h1 className="text-4xl text-white lg:text-8xl">With nature in mind</h1>
      </div>

      <Image
        className="h-full max-h-screen min-h-screen w-full object-cover"
        src="/static/nature-image.webp"
        alt="nature image"
        width={1200}
        height={1200}
      ></Image>

      <div className="absolute bottom-10 z-10 flex flex-col items-center justify-center gap-3 text-white">
        <span className="font-thin uppercase">LEARN More</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-black">
          ↓
        </span>
      </div>
    </section>
  );
};

export default NatureHeroSection;

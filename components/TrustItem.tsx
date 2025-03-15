import Image from 'next/image';

const TrustItem = ({ iconName, text }: { iconName: string; text: string }) => (
  <div className="flex items-center justify-center gap-4 text-sm font-semibold text-neutral-800 uppercase md:text-base">
    <Image
      className="h-auto w-8 object-contain text-black md:h-8"
      src={iconName}
      width={50}
      height={50}
      alt="vegan icon"
    />
    <p>{text}</p>
  </div>
);

export default TrustItem;

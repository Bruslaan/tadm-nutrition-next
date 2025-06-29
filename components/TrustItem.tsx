import Image from 'next/image';

const TrustItem = ({ iconName, text }: { iconName: string; text: string }) => {
  const getAltText = (icon: string, text: string) => {
    if (icon.includes('vegan')) return 'Vegan certified - 100% plant-based ingredients';
    if (icon.includes('earth')) return 'Earth-friendly - Non-GMO and 100% natural ingredients';
    if (icon.includes('noanimals')) return 'Cruelty-free - No animals harmed in production';
    return `${text} certification icon`;
  };

  return (
    <div className="flex items-center justify-center gap-4 text-sm font-semibold text-neutral-800 uppercase md:text-base">
      <Image
        className="h-auto w-8 object-contain text-black md:h-8"
        src={iconName}
        width={50}
        height={50}
        alt={getAltText(iconName, text)}
        loading="lazy"
      />
      <p>{text}</p>
    </div>
  );
};

export default TrustItem;

import Image from 'next/image';
import { Image as ImageType } from 'lib/shopify/types';
export function DynamicImage({ image, customImage }: { image: ImageType; customImage?: string }) {
  return (
    <Image
      className="h-full w-full object-cover"
      height={2000}
      width={20000}
      alt={image?.altText as string}
      src={customImage ? `/static/${customImage.split(' ')[0]}.jpg` : (image?.url as string)}
      priority={true}
      blurDataURL={image?.url as string}
    />
  );
}

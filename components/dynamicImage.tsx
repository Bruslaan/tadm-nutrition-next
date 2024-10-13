import Image from 'next/image';
import { Image as ImageType } from 'lib/shopify/types';
export function DynamicImage({ image }: { image: ImageType }) {
  console.log('Current Image', image.altText);
  return (
    <Image
      className="h-full w-full object-cover"
      height={500}
      width={500}
      alt={image?.altText as string}
      src={image?.url as string}
      priority={true}
    />
  );
}

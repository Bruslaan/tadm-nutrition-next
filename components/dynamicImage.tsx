import Image from 'next/image';
import { Image as ImageType } from 'lib/shopify/types';
export function DynamicImage({ image }: { image: ImageType }) {
  return (
    <Image
      className="h-full w-full object-cover"
      height={1200}
      width={1200}
      alt={image?.altText as string}
      src={image?.url as string}
      priority={true}
    />
  );
}

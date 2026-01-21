import Image from 'next/image';
import { Image as ImageType } from 'lib/shopify/types';

export function DynamicImage({ image, customImage }: { image: ImageType; customImage?: string }) {
  return (
    <Image
      className="h-full w-full object-cover"
      height={500}
      width={500}
      alt={image?.altText || 'Product image'}
      src={customImage ? `/static/${customImage.split(' ')[0]}.jpg` : (image?.url as string)}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
      priority
    />
  );
}

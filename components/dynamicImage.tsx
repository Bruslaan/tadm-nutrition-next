'use client';

import { Image as ImageType } from 'lib/shopify/types';
import Image from 'next/image';
import { useState } from 'react';

const productImageMap: Record<string, string> = {
  base: '/static/tadm.jpeg',
  'combo pack': '/static/combo.jpg',
  'refill pack': '/static/refill.jpeg'
};

export function DynamicImage({ image, customImage }: { image: ImageType; customImage?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageSrc = image?.url as string;

  return (
    <>
      <Image
        className="h-full w-full object-cover"
        height={500}
        width={500}
        alt={image?.altText || 'Product image'}
        src={imageSrc}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
        priority
      />
    </>
  );
}

'use client';

import { Image as ImageType } from 'lib/shopify/types';
import Image from 'next/image';
import { useState } from 'react';

const productImageMap: Record<string, string> = {
  base: '/static/tadm.jpeg',
  'combo pack': '/static/combo.jpg',
  'refill pack': '/static/refill.jpeg'
};

export function DynamicImage({
  image,
  customImage
}: {
  image: ImageType;
  customImage?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultImageSrc = image?.url as string;
  const alternateImageSrc = customImage ? productImageMap[customImage] : null;

  return (
    <div
      className="group relative h-full w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="h-full w-full object-cover"
        height={500}
        width={500}
        alt={image?.altText || 'Product image'}
        src={defaultImageSrc}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
        priority
      />
      {alternateImageSrc && (
        <>
          <Image
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            height={500}
            width={500}
            alt={image?.altText || 'Product image'}
            src={alternateImageSrc}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
          />
          <div
            className={`absolute bottom-3 right-3 rounded-full bg-black/50 p-2 transition-opacity ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

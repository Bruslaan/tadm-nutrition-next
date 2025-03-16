'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useDictionary } from '../app/DictProvider';
import Link from 'next/link';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  const { lang } = useDictionary();
  return (
    <Link
      href={`/${lang}/site`}
      prefetch={true}
      className="ml-10 flex w-full items-center justify-center md:ml-0 md:w-auto"
    >
      <div
        className={clsx('flex flex-none items-center justify-center', {
          'h-[90px] w-[90px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        })}
      >
        <Image
          src="/static/logo-hd.webp"
          alt="logo"
          width={300}
          height={300}
          style={{ clipPath: 'inset(-2px)' }}
        ></Image>
      </div>
    </Link>
  );
}

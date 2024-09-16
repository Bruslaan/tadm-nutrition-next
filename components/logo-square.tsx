import clsx from 'clsx';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx('flex flex-none items-center justify-center', {
        'h-[60px] w-[60px] rounded-xl': !size,
        'h-[30px] w-[30px] rounded-lg': size === 'sm'
      })}
    >
      <Image
        src="/static/logo-hd.webp"
        alt="logo"
        width={200}
        height={200}
        style={{ clipPath: 'inset(0px)' }}
      ></Image>
    </div>
  );
}

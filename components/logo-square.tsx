import clsx from 'clsx';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
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
  );
}

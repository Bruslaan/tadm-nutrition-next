import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

const VideoScrollCard = ({
  title,
  color,
  urlTo,
  ref,
  text
}: {
  title: string;
  color: string;
  urlTo?: string;
  ref?: any;
  text?: string | ReactNode;
}) => {
  return (
    <div
      ref={ref}
      className={clsx('sticky flex flex-col gap-3 overflow-hidden rounded-[50px]', color)}
      style={{
        marginBlock: '30vh'
      }}
    >
      <Link prefetch={true} className="group overflow-hidden p-8" href={urlTo ?? '/nature'}>
        <h2 className={clsx('text-3xl font-semibold')}>{title}</h2>
        <br />
        <div className="p-1 text-xl text-gray-700 dark:text-neutral-300">{text}</div>

        {urlTo && (
          <div className="absolute top-2 right-2 overflow-hidden">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white pt-1 text-3xl text-gray-400 transition-transform duration-300 group-hover:-rotate-45 group-hover:text-gray-900">
              ➜
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default VideoScrollCard;

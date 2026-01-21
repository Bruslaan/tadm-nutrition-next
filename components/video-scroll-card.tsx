import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useDictionary } from '../app/DictProvider';

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
  const { lang } = useDictionary();
  return (
    <div
      ref={ref}
      className={clsx(
        'sticky flex h-[60vh] flex-col overflow-hidden rounded-3xl border shadow-xl shadow-gray-100 md:h-96',
        color
      )}
      style={{
        marginBlock: '30vh'
      }}
    >
      <Link
        rel="preload"
        prefetch={true}
        className="group h-full overflow-hidden p-7"
        href={`/${lang}${urlTo ?? '/nature'}`}
      >
        <h2 className={clsx('text-3xl font-semibold')}>{title}</h2>
        <br />
        <div className="p-1 text-base text-gray-700 xl:text-xl 2xl:text-2xl dark:text-neutral-300">
          {text}
        </div>

        {urlTo && (
          <div className="absolute top-3 right-3 overflow-hidden">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white pt-1 text-3xl text-gray-600 group-hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default VideoScrollCard;

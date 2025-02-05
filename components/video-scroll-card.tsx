import clsx from 'clsx';
import Link from 'next/link';

const VideoScrollCard = ({
  title,
  color,
  urlTo,
  ref
}: {
  title: string;
  color: string;
  urlTo?: string;
  ref?: any;
}) => {
  return (
    <div
      ref={ref}
      className={clsx('sticky flex flex-col gap-3 rounded-[50px]', color)}
      style={{
        marginBlock: '30vh'
      }}
    >
      <Link className="group block p-10" href={urlTo ?? '/nature'}>
        <h2 className={clsx('text-3xl font-semibold md:mt-10')}>{title}</h2>
        <br />
        <p className="text-xl font-light">
          Here we have the most powerful brian liquid oil that revolutionizes your memory. Here we
          have the most powerful brian liquid oil that revolutionizes your memory. Here we have the
          most powerful brian liquid oil that revolutionizes your memory.{' '}
        </p>

        <div className="mt-10">
          <span className="rounded-3xl bg-white p-2 px-5 text-2xl text-gray-700">Omega-3</span>
        </div>

        {urlTo && (
          <div className="absolute right-2 top-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white pt-1 text-3xl text-gray-400 transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-125 group-hover:text-gray-900">
              ➜
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default VideoScrollCard;

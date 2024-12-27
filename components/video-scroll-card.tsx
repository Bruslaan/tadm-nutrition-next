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
      className={clsx('sticky flex flex-col gap-3 rounded-[50px] p-10', color)}
      style={{
        marginBlock: '30vh'
      }}
    >
      {urlTo && (
        <div className="absolute right-2 top-2">
          <Link href={urlTo} className="">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white pt-1 text-3xl">
              ↗
            </div>
          </Link>
        </div>
      )}
      <h1 className={clsx('text-3xl md:mt-20')}>{title}</h1>
      <p className="text-xl font-light text-neutral-700">
        Here we have the most powerful brian liquid oil that revolutionizes your memory. Here we
        have the most powerful brian liquid oil that revolutionizes your memory. Here we have the
        most powerful brian liquid oil that revolutionizes your memory.{' '}
      </p>

      <div className="mt-10">
        <span className="rounded-3xl bg-white p-2 px-5 text-2xl"> Omega-3</span>
      </div>
    </div>
  );
};

export default VideoScrollCard;

import clsx from 'clsx';
import Link from 'next/link';

const VideoScrollCard = ({
  title,
  color,
  urlTo
}: {
  title: string;
  color: string;
  urlTo?: string;
}) => {
  return (
    <div
      className="relative flex flex-col gap-3 rounded-lg bg-white p-4"
      style={{
        marginBlock: '30vh'
      }}
    >
      <h1
        className={clsx(
          'inline-block bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent',
          color
        )}
      >
        {title}
      </h1>
      <p className="text-xl text-neutral-700">
        Here we have the most powerful brian liquid oil that revolutionizes your memory. Here we
        have the most powerful brian liquid oil that revolutionizes your memory. Here we have the
        most powerful brian liquid oil that revolutionizes your memory.{' '}
      </p>
      <div className="mt-5 flex gap-4">
        <span className="inline-flex items-center gap-x-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-500">
          Power brain
        </span>
        <span className="inline-flex items-center gap-x-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-500">
          Eye sight
        </span>
      </div>
      {urlTo && (
        <div className="mt-5">
          <Link href={urlTo} className="text-blue-500">
            Learn More →
          </Link>
        </div>
      )}
    </div>
  );
};

export default VideoScrollCard;

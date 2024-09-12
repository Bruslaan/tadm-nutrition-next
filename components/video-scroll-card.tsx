import clsx from 'clsx';
import Link from 'next/link';

const VideoScrollCard = ({ title, color }: { title: string; color: string }) => {
  return (
    <div
      className="flex flex-col gap-3 rounded-lg bg-white p-4"
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
        <span className="inline-flex items-center gap-x-1.5 rounded-full border border-green-600 px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-500">
          Badge
        </span>
        <span className="inline-flex items-center gap-x-1.5 rounded-full border border-green-600 px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-500">
          Badge
        </span>
        <span className="inline-flex items-center gap-x-1.5 rounded-full border border-green-600 px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-500">
          Badge
        </span>
      </div>
      <div className="mt-5">
        <Link href="#" className="text-blue-500">
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default VideoScrollCard;

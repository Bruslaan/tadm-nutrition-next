import Link from 'next/link';

const VideoScrollCard = () => {
  return (
    <div
      className="flex flex-col gap-3 bg-white p-4"
      style={{
        marginBlock: '40vh'
      }}
    >
      <h1 className="text-4xl font-bold">Black Seed Oil</h1>
      <p className="text-neutral-700">
        Here we have the most powerful brian liquid oil that revolutionizes your memory. Here we
        have the most powerful brian liquid oil that revolutionizes your memory. Here we have the
        most powerful brian liquid oil that revolutionizes your memory.{' '}
      </p>
      <div className="flex gap-4">
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

      <Link href="#" className="">
        Learn More
      </Link>
    </div>
  );
};

export default VideoScrollCard;

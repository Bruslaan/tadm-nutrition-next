import clsx from 'clsx';
import Image from 'next/image';

const RecyclingCard = ({ imageURL, className }: { imageURL: string; className?: string }) => {
  return (
    <div className="relative h-60 w-full rounded-2xl bg-white text-center">
      <Image
        alt="tadm refill bag"
        src={imageURL}
        className={clsx(
          'absolute -top-20 left-1/2 -translate-x-1/2 transform md:-top-28',
          className
        )}
        width={150}
        height={150}
      />

      <p className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-xl font-semibold">
        Glass bottle
      </p>
    </div>
  );
};

export default RecyclingCard;

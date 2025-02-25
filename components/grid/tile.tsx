import clsx from 'clsx';
import Image from 'next/image';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-orange-200',
        {
          relative: label,
          'border-2 border-gray-500': active,
          'border-neutral-200 dark:border-neutral-800': !active
        }
      )}
    >
      {props.src ? (
        <Image
          className={clsx('relative h-full w-full object-cover', {
            'transition duration-300 ease-in-out hover:scale-105': isInteractive
          })}
          {...props}
          alt={props.title || ''}
        />
      ) : null}
      {label ? (
        <>
          <div className="absolute left-4 top-4 rounded-2xl bg-white bg-opacity-70 p-2 text-xl font-bold text-gray-800">
            <h2>{label.title}</h2>
          </div>
          <div className="absolute bottom-10 right-2 inline-flex transform">
            <div className="relative flex items-center rounded-full bg-white px-3 py-1 font-bold text-gray-900 shadow-md">
              <div className="absolute -left-2 rounded-full bg-white p-1">
                <div className="h-2 w-2 rounded-full bg-black"></div>
              </div>
              <span className="text-lg">
                {label.amount.split('.')[0]} {label.currencyCode}
              </span>
            </div>
          </div>
        </>
      ) : // <Label
      //   title={label.title}
      //   amount={label.amount}
      //   currencyCode={label.currencyCode}
      //   position={label.position}
      // />
      null}
    </div>
  );
}

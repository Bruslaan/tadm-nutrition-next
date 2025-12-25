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
    description?: string;
    oldPrice?: number;
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'group relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-orange-200',
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
          <div className="absolute top-4 left-4 rounded-xl bg-orange-50 px-4 py-2 text-xl font-bold text-gray-800 transition duration-300">
            <h2>{label.title}</h2>
          </div>

          <div className="absolute inset-x-0 bottom-0 translate-y-20 transform bg-orange-200/90 px-4 py-4 text-xl font-bold text-neutral-800 transition duration-300 group-hover:translate-y-0">
            <p className="text-center text-sm">{label.description}</p>
          </div>

          <div className="absolute right-4 bottom-8 inline-flex transform flex-col items-end gap-1">
            {label.oldPrice && (
              <div className="relative flex items-center rounded-full bg-red-500 px-3 py-0.5 text-white shadow-md">
                <span className="text-sm line-through">
                  {label.oldPrice} {label.currencyCode}
                </span>
              </div>
            )}
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
      ) : null}
    </div>
  );
}

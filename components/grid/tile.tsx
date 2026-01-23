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
    recommended?: boolean;
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
          <div className="absolute top-4 left-4 max-w-[60%] rounded-xl bg-orange-50 px-4 py-2 text-gray-800 transition duration-300">
            <h2 className="text-xl font-bold">{label.title}</h2>
            {label.description && (
              <p className="text-sm font-medium">{label.description}</p>
            )}
          </div>

          <div className="absolute right-4 bottom-4 flex justify-center">
            <div className="flex flex-col items-end gap-1">
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
          </div>
        </>
      ) : null}
    </div>
  );
}

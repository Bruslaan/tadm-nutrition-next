import { clsx } from 'clsx';
import Image from 'next/image';

const FloatingIcon = ({
  className,
  size,
  imageURL
}: {
  className: string;
  size: number;
  imageURL?: string;
}) => {
  return (
    <div className={clsx('absolute', className)}>
      <Image
        className={'custom-float object-contain'}
        src={imageURL ?? '/static/capsule.png'}
        width={size}
        height={size}
        alt="Softgel Capsule image"
      />
    </div>
  );
};

export default FloatingIcon;

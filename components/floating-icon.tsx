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
        src={imageURL ?? '/static/capsule-bright-0.png'}
        width={size}
        height={size}
        alt="Softgel Capsule image"
        style={{ clipPath: 'inset(-2px)' }}
      />
    </div>
  );
};

export default FloatingIcon;

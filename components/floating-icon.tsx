import { clsx } from 'clsx';
import Image from 'next/image';

const FloatingIcon = ({ className, size }: { className: string; size: number }) => {
  return (
    <div className={clsx('absolute', className)}>
      <Image
        className="object-contain"
        src="/static/capsule.png"
        width={size}
        height={size}
        alt="Softgel Capsule image"
      />
    </div>
  );
};

export default FloatingIcon;

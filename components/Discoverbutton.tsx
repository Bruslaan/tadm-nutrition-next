import Link from 'next/link';

const Discoverbutton = ({ href }: { href: string }) => (
  <div className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center justify-center gap-3 text-black">
    <Link
      href={href}
      className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-black text-xl text-white"
    >
      ↓
    </Link>
  </div>
);
export default Discoverbutton;

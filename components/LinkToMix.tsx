import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const LinkToMix = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center p-7">
    <Link className="flex gap-2 rounded-lg bg-gray-100 p-2 px-4" href="mix">
      {title} <ArrowRight size={24} />
    </Link>
  </div>
);

export default LinkToMix;

import { ReactNode } from 'react';
import Footer from '@/components/layout/footer';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

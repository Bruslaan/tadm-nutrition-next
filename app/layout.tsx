import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return <html lang="en">{children}</html>;
}

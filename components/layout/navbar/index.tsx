import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  const mockedMenu = [
    {
      path: '/#feature',
      title: 'Inside the tadm'
    },
    // {
    //   path: '/nature',
    //   title: 'Nature'
    // },
    {
      path: '/#faq',
      title: 'Faq'
    },
    {
      path: 'https://blog.tadm-nutrition.com/de/blog',
      title: 'Knowledge Hub'
    }
  ];

  return (
    <nav className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-4">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={mockedMenu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-full justify-between md:max-w-3xl">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
          </Link>
          {mockedMenu.length ? (
            <ul className="hidden justify-between gap-6 text-sm md:flex md:items-center">
              {mockedMenu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="font-semibold uppercase text-black underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}

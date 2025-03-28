import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import LanguageSwitcher from '../../LanguageSwitcher';

export async function Navbar() {
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
    <nav className="absolute top-0 right-0 left-0 z-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={mockedMenu} />
          </Suspense>
        </div>

        <div className="hidden md:block">
          <LogoSquare />
        </div>

        {mockedMenu.length ? (
          <ul className="hidden justify-between gap-6 text-sm md:flex md:items-center">
            {mockedMenu.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch={true}
                  className="font-semibold text-black uppercase underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        ) : null}

        <CartModal />
      </div>
    </nav>
  );
}

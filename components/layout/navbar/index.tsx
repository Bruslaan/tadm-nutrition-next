'use client';

import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import LanguageSwitcher from '../../LanguageSwitcher';
import MobileMenu from './mobile-menu';

export function Navbar() {
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mockedMenu = [
    { path: '/', title: 'Home' },
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

  const ingredientsMenu = [
    { path: '/algae', title: 'Algae Oil' },
    { path: '/cannabis', title: 'Hemp Oil' },
    { path: '/cumin', title: 'Black Cumin' },
    { path: '/walnut', title: 'Walnut Oil' }
  ];

  return (
    <nav
      className={`top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'fixed bg-white/10 shadow-md backdrop-blur-md dark:bg-black/90' : 'absolute'
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 ${isScrolled ? 'py-4' : 'py-1'}`}>
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={mockedMenu} />
          </Suspense>
        </div>

        <div className="hidden md:block">
          <LogoSquare size={isScrolled ? 'md' : undefined} />
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

            {/* Ingredients Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsIngredientsOpen(true)}
              onMouseLeave={() => setIsIngredientsOpen(false)}
            >
              <button className="font-semibold text-black uppercase underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                Ingredients
              </button>

              {isIngredientsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-48 overflow-hidden rounded-md bg-white shadow-lg dark:bg-neutral-900">
                    <ul className="py-2">
                      {ingredientsMenu.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.path}
                            className="block px-4 py-2 text-sm text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>

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

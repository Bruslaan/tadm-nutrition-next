'use client';

import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import LanguageSwitcher from '../../LanguageSwitcher';
import MobileMenu from './mobile-menu';

export function Navbar() {
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const lang = pathname.startsWith('/de') ? 'de' : 'en';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const mockedMenu = [
    { path: `/${lang}`, title: 'Home' },
    {
      path: `/${lang}#inside-tadm`,
      title: 'Inside the tadm'
    },
    {
      path: `/${lang}#faq`,
      title: 'Faq'
    },
    {
      path: `/${lang}/blog`,
      title: 'Knowledge Hub'
    }
  ];

  const ingredientsMenu = [
    { path: `/${lang}/algae`, title: 'Algae Oil' },
    { path: `/${lang}/cannabis`, title: 'Hemp Oil' },
    { path: `/${lang}/cumin`, title: 'Black Cumin' },
    { path: `/${lang}/walnut`, title: 'Walnut Oil' }
  ];

  return (
    <nav
      className={`top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'fixed bg-white/10 shadow-md backdrop-blur-md dark:bg-black/90' : 'absolute'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
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

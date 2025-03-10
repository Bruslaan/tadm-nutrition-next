'use client';
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Function to switch language while preserving the current path
  const switchLanguage = (locale: string) => {
    let newPath = pathname;
    const pathSegments = pathname.split('/').filter(Boolean);

    // If the first segment is a locale, remove it
    if (pathSegments.length > 0 && ['en', 'de'].includes(pathSegments[0]!)) {
      newPath = '/' + pathSegments.slice(1).join('/');
    }

    if (newPath === '') newPath = '/';

    router.push(`/${locale}${newPath}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Button that toggles the dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex cursor-pointer items-center space-x-2 rounded-xl p-2 hover:bg-gray-100/30"
      >
        <Globe />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} className="fixed inset-0"></div>
          <div className="absolute left-0 mt-2 w-40 rounded-lg bg-white p-2 shadow-lg">
            <ul>
              <li>
                <button
                  onClick={() => switchLanguage('de')}
                  className="block w-full rounded-md px-4 py-2 text-left hover:bg-gray-100"
                >
                  Deutsch
                </button>
              </li>
              <li>
                <button
                  onClick={() => switchLanguage('en')}
                  className="block w-full rounded-md px-4 py-2 text-left hover:bg-gray-100"
                >
                  English
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;

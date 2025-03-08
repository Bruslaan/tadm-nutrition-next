'use client';
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
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
                <Link href="/de" className="block rounded-md px-4 py-2 hover:bg-gray-100">
                  Deutsch
                </Link>
              </li>
              <li>
                <Link href="/en" className="block rounded-md px-4 py-2 hover:bg-gray-100">
                  English
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;

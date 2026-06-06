// src/context/DictionaryContext.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { Locale } from '../lib/i18n';

// Define the dictionary type (adjust according to your actual structure)
type Dictionary = Record<string, unknown>;

interface DictionaryContextType {
  dictionary: Dictionary;
  lang: Locale;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(undefined);

export function DictionaryProvider({
  children,
  dictionary,
  lang
}: {
  children: ReactNode;
  dictionary: Dictionary;
  lang: Locale;
}) {
  return (
    <DictionaryContext.Provider value={{ dictionary, lang }}>{children}</DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context;
}

// src/context/DictionaryContext.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';

// Define the dictionary type (adjust according to your actual structure)
type Dictionary = Record<string, unknown>;

interface DictionaryContextType {
  dictionary: Dictionary;
  lang: 'en' | 'de';
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(undefined);

export function DictionaryProvider({
  children,
  dictionary,
  lang
}: {
  children: ReactNode;
  dictionary: Dictionary;
  lang: 'en' | 'de';
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

'use client';

import { createContext, useContext, type ReactNode } from 'react';

const AvailableImagesContext = createContext<Set<string>>(new Set());

export function MediaProvider({
  available,
  children,
}: {
  available: string[];
  children: ReactNode;
}) {
  return (
    <AvailableImagesContext.Provider value={new Set(available)}>
      {children}
    </AvailableImagesContext.Provider>
  );
}

export function useImageAvailable(src: string) {
  return useContext(AvailableImagesContext).has(src);
}

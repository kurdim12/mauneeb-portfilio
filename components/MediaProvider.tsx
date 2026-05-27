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

/**
 * All real photos for a project, sorted. Matches both a single
 * /images/projects/<id>.jpg and a folder /images/projects/<id>/*.jpg.
 */
/** All real photos under a folder (e.g. "/images/store/"), naturally sorted. */
export function useFolderPhotos(dir: string): string[] {
  const set = useContext(AvailableImagesContext);
  const base = dir.endsWith('/') ? dir : `${dir}/`;
  return [...set]
    .filter((p) => p.startsWith(base))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );
}

export function useProjectPhotos(id: string): string[] {
  const set = useContext(AvailableImagesContext);
  const single = `/images/projects/${id}`;
  const folder = `/images/projects/${id}/`;
  return [...set]
    .filter((p) => p.startsWith(folder) || p.startsWith(`${single}.`))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );
}

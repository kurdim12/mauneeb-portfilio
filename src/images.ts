import 'server-only';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

async function walk(dir: string, base: string): Promise<string[]> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const out: string[] = [];
  for (const entry of entries) {
    const abs = join(dir, entry.name);
    const rel = `${base}/${entry.name}`;
    if (entry.isDirectory()) {
      out.push(...(await walk(abs, rel)));
    } else if (IMAGE_RE.test(entry.name)) {
      out.push(rel);
    }
  }
  return out;
}

/**
 * Returns the public paths of every real image present under /public/images.
 * Drop real photos in and they light up automatically — no code change needed.
 */
export async function getAvailableImages(): Promise<string[]> {
  const root = join(process.cwd(), 'public', 'images');
  return walk(root, '/images');
}

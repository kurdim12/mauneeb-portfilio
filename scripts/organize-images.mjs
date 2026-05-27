import sharp from 'sharp';
import { mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'public', 'images');

// source (repo root) -> destination (under public/images)
const jobs = [
  ['_O7U1171 (1).png', 'hero.jpg', 1600],
  ['_O7U1171 (1).png', 'about.jpg', 1400],
  ['2025-02-26.webp', 'store-1.jpg', 1200],

  ['caption.jpg', 'projects/barista/1.jpg', 1600],
  ['caption (1).jpg', 'projects/barista/2.jpg', 1600],
  ['hcmp446825_3233091.jpeg', 'projects/barista/3.jpg', 1600],

  ['melange-coffee-house.jpg', 'projects/melange/1.jpg', 1600],
  ['import-1265.webp', 'projects/maria/1.jpg', 1600],
  ['2025-11-27.webp', 'projects/pure/1.jpg', 1600],
  ['unnamed (7).webp', 'projects/raw-smith/1.jpg', 1600],

  ['unnamed (9).webp', 'projects/te-ra/1.jpg', 1600],
  ['unnamed (10).webp', 'projects/te-ra/2.jpg', 1600],

  ['unnamed (2).jpg', 'projects/ajda/1.jpg', 1600],
  ['unnamed (11).webp', 'projects/ajda/2.jpg', 1600],
];

for (const [src, dest, width] of jobs) {
  const inPath = join(ROOT, src);
  const outPath = join(OUT, dest);
  await mkdir(join(outPath, '..'), { recursive: true });
  await sharp(inPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(outPath);
  console.log(`✓ ${dest}`);
}

console.log('done');

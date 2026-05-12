// Generate .avif sibling for every .webp in public/images, using the
// untouched original from images-original/ so we recompress once, not twice.
// AVIF q50 effort 4 ≈ 35-50% smaller than webp q78 at similar visual quality.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, 'public', 'images');
const ORIG = path.join(__dirname, 'images-original');
const MAX_W = 1600;
const QUALITY = 50;

const webps = fs.readdirSync(SRC).filter((f) => /\.webp$/i.test(f));
const rows = [];
let totalAvif = 0;
let totalWebp = 0;

for (const f of webps) {
  const baseName = f.replace(/\.webp$/i, '');
  const avifPath = path.join(SRC, baseName + '.avif');
  const webpPath = path.join(SRC, f);
  const sourcePath = fs.existsSync(path.join(ORIG, f))
    ? path.join(ORIG, f)
    : webpPath; // fall back to current webp if original not backed up

  const webpSize = fs.statSync(webpPath).size;
  totalWebp += webpSize;

  const buf = fs.readFileSync(sourcePath);
  const meta = await sharp(buf).metadata();
  let pipeline = sharp(buf);
  if ((meta.width ?? 0) > MAX_W) {
    pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
  }
  pipeline = pipeline.avif({ quality: QUALITY, effort: 4 });

  const out = await pipeline.toBuffer();
  fs.writeFileSync(avifPath, out);
  totalAvif += out.length;

  rows.push({ name: f, webp: webpSize, avif: out.length });
}

rows.sort((a, b) => b.webp - a.webp);
console.log('Top by webp→avif savings:');
console.log('  ' + 'name'.padEnd(48) + ' ' + 'webp'.padStart(8) + ' ' + 'avif'.padStart(8) + ' saved');
for (const r of rows.slice(0, 12)) {
  const webpKB = (r.webp / 1024).toFixed(0);
  const avifKB = (r.avif / 1024).toFixed(0);
  const saved = ((1 - r.avif / r.webp) * 100).toFixed(0) + '%';
  console.log(`  ${r.name.padEnd(48)} ${webpKB.padStart(6)} KB ${avifKB.padStart(6)} KB  ${saved}`);
}
console.log(
  `\nTotal: ${(totalWebp / 1024 / 1024).toFixed(2)} MB webp → ${(totalAvif / 1024 / 1024).toFixed(2)} MB avif ` +
    `(saved ${((1 - totalAvif / totalWebp) * 100).toFixed(0)}%)`,
);

// Generate mobile/tablet-sized variants of critical hero & img-tag images.
// Run when source images change. Output filenames: foo-<w>w.{avif,webp}.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, 'public', 'images');
const ORIG = path.join(__dirname, 'images-original');

const PLAN = [
  // [filename, widths to generate]
  ['Fistikli-ozel-sobiyet-baklava.webp', [768]],
  ['FistikliBaklavaMainpage.webp', [768]],
  ['Fistikli-ozel-sobiyet-baklava-2.webp', [600, 1200]], // Featured component
  ['P1010992.webp', [600, 1200]], // About component
  ['Beyaz-Cikolatali-Soguk-Baklava.webp', [768, 1200]], // GiftBanner
];

let totalAvif = 0;
let totalWebp = 0;
const rows = [];

for (const [file, widths] of PLAN) {
  const sourcePath = fs.existsSync(path.join(ORIG, file))
    ? path.join(ORIG, file)
    : path.join(SRC, file);
  if (!fs.existsSync(sourcePath)) {
    console.warn(`  skip ${file} (not found)`);
    continue;
  }
  const baseName = file.replace(/\.webp$/i, '');
  const buf = fs.readFileSync(sourcePath);
  for (const w of widths) {
    const avifOut = path.join(SRC, `${baseName}-${w}w.avif`);
    const webpOut = path.join(SRC, `${baseName}-${w}w.webp`);

    const avifBuf = await sharp(buf)
      .resize({ width: w, withoutEnlargement: true })
      .avif({ quality: 50, effort: 4 })
      .toBuffer();
    fs.writeFileSync(avifOut, avifBuf);

    const webpBuf = await sharp(buf)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toBuffer();
    fs.writeFileSync(webpOut, webpBuf);

    totalAvif += avifBuf.length;
    totalWebp += webpBuf.length;
    rows.push({
      file: `${baseName}-${w}w`,
      w,
      avifKB: (avifBuf.length / 1024).toFixed(0),
      webpKB: (webpBuf.length / 1024).toFixed(0),
    });
  }
}

console.log('Generated:');
console.log('  ' + 'file'.padEnd(50) + ' width   avif    webp');
for (const r of rows) {
  console.log(`  ${r.file.padEnd(50)} ${String(r.w).padStart(5)}w ${r.avifKB.padStart(4)} KB ${r.webpKB.padStart(4)} KB`);
}
console.log(
  `\nTotal extra bytes: ${(totalAvif / 1024).toFixed(0)} KB avif + ${(totalWebp / 1024).toFixed(0)} KB webp`,
);

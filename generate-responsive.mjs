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
  ['Fistikli-ozel-sobiyet-baklava.webp', [600, 768]], // hero (768w) + menu (600w)
  ['FistikliBaklavaMainpage.webp', [600, 768]], // Categories + products listing hero
  ['Fistikli-ozel-sobiyet-baklava-2.webp', [600, 1200]], // Featured component
  ['P1010992.webp', [600, 1200]], // About component
  ['Beyaz-Cikolatali-Soguk-Baklava.webp', [600, 768, 1200]], // GiftBanner + menu
  // Categories + all menu item product images
  ['Hasir_Kadayif.webp', [600]],
  ['Soguk_Baklava_Main_Page.webp', [600]],
  ['Fistikli-Midye-Baklava.webp', [600]],
  ['Cevizli-Vegan-Baklava.webp', [600]],
  ['Peynirli_Su_Boregi.webp', [600]],
  ['katmer.webp', [600]],
  // Remaining product images (used in ProductMenu + ProductsListing tiles)
  ['Cevizli_Baklava.webp', [600]],
  ['fistikli-kuru-baklava.webp', [600]],
  ['Havuc-dilim-baklava.webp', [600]],
  ['Fistikli-Dolama-Fistik-Sarma.webp', [600]],
  ['Ozel-kare-baklava.webp', [600]],
  ['Fistikli-sobiyet-Baklava.webp', [600]],
  ['Fistikli-Baklava-Prens.webp', [600]],
  ['SaraySarma.webp', [600]],
  ['Cevizli-Vegan-Baklava-2.webp', [600]],
  ['CevizliDilberDudagi.webp', [600]],
  ['Fistikli-Duz-Kadayif.webp', [600]],
  ['Cevizli-Duz-Kadayif.webp', [600]],
  ['Fistikli-Burma-Kadayif.webp', [600]],
  ['Frambuazli-Soguk-Baklava.webp', [600]],
  ['Soguk-Baklava-Main-Page-2.webp', [600]],
  ['Sutlu-Nuriye-Baklava.webp', [600]],
  ['Fistikli-Vegan-Burma-Kadayif.webp', [600]],
  ['Fistikli-Vegan-Prens-Baklava.webp', [600]],
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

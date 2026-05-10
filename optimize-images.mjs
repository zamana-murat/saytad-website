// Bulk image optimizer for Saytad public/images folder.
// - Resizes any image >1600px wide down to 1600px (preserves aspect ratio)
// - Re-encodes WebP at quality 78
// - Writes a dimensions.json so the blog patcher can use the new dims
// - Backs up originals to images-original/ once (idempotent)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, 'public', 'images');
const BACKUP = path.join(__dirname, 'images-original');
const DIMS_OUT = path.join(__dirname, 'src', 'data', 'image-dims.json');

const MAX_W = 1600;
const QUALITY = 78;

if (!fs.existsSync(BACKUP)) fs.mkdirSync(BACKUP, { recursive: true });

const files = fs.readdirSync(SRC).filter((f) => /\.(webp|png|jpg|jpeg)$/i.test(f));
const dims = {};
let totalBefore = 0;
let totalAfter = 0;
const rows = [];

for (const f of files) {
  const inPath = path.join(SRC, f);
  const backupPath = path.join(BACKUP, f);
  const sizeBefore = fs.statSync(inPath).size;
  totalBefore += sizeBefore;

  // Backup once
  if (!fs.existsSync(backupPath)) fs.copyFileSync(inPath, backupPath);

  // Always work from the original to make script idempotent
  const buf = fs.readFileSync(backupPath);
  const meta = await sharp(buf).metadata();
  const origW = meta.width ?? 0;
  const origH = meta.height ?? 0;

  let pipeline = sharp(buf);
  if (origW > MAX_W) {
    pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
  }
  pipeline = pipeline.webp({ quality: QUALITY, effort: 6 });

  const out = await pipeline.toBuffer();
  const finalMeta = await sharp(out).metadata();
  const finalW = finalMeta.width ?? origW;
  const finalH = finalMeta.height ?? origH;

  fs.writeFileSync(inPath, out);
  const sizeAfter = out.length;
  totalAfter += sizeAfter;

  dims[`/images/${f}`] = { width: finalW, height: finalH };
  rows.push({ name: f, before: sizeBefore, after: sizeAfter, w: finalW, h: finalH });
}

// Sort by savings desc
rows.sort((a, b) => (b.before - b.after) - (a.before - a.after));

console.log('Optimized images (top savings):');
console.log('  ' + 'name'.padEnd(50) + ' ' + 'before'.padStart(8) + ' ' + 'after'.padStart(8) + ' ' + 'saved'.padStart(8) + '  dims');
for (const r of rows.slice(0, 15)) {
  const beforeKB = (r.before / 1024).toFixed(0);
  const afterKB = (r.after / 1024).toFixed(0);
  const saved = ((1 - r.after / r.before) * 100).toFixed(0) + '%';
  console.log(`  ${r.name.padEnd(50)} ${beforeKB.padStart(6)} KB ${afterKB.padStart(6)} KB ${saved.padStart(8)}  ${r.w}×${r.h}`);
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB ` +
  `(saved ${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`);

// Add favicon entries (skip them — favicons aren't images we layout-shift)
fs.writeFileSync(DIMS_OUT, JSON.stringify(dims, null, 2));
console.log(`\n✓ Wrote ${DIMS_OUT} (${Object.keys(dims).length} entries)`);

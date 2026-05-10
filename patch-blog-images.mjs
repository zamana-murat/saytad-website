// One-shot patcher: adds width/height attributes to <img> tags inside the
// `body` string literals in src/data/blog.ts, using dimensions from
// src/data/image-dims.json (produced by optimize-images.mjs).
//
// Idempotent — re-running won't duplicate attributes.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_TS = path.join(__dirname, 'src', 'data', 'blog.ts');
const DIMS_JSON = path.join(__dirname, 'src', 'data', 'image-dims.json');

const dims = JSON.parse(fs.readFileSync(DIMS_JSON, 'utf8'));
let src = fs.readFileSync(BLOG_TS, 'utf8');

let patched = 0;
let skipped = 0;
let unknownSrc = 0;

// Match every <img ...> in the file
src = src.replace(/<img\s+([^>]+?)\/?>/g, (full, attrs) => {
  // Already has both width and height?
  const hasW = /\bwidth\s*=/.test(attrs);
  const hasH = /\bheight\s*=/.test(attrs);
  if (hasW && hasH) {
    skipped++;
    return full;
  }

  const srcMatch = attrs.match(/\bsrc\s*=\s*["']([^"']+)["']/);
  if (!srcMatch) return full;
  const imgSrc = srcMatch[1];
  const dim = dims[imgSrc];
  if (!dim) {
    unknownSrc++;
    return full;
  }

  // Insert width/height right after src=
  let newAttrs = attrs;
  if (!hasW) newAttrs = newAttrs.replace(/(\bsrc\s*=\s*["'][^"']+["'])/, `$1 width="${dim.width}"`);
  if (!hasH) newAttrs = newAttrs.replace(/(\bsrc\s*=\s*["'][^"']+["'])/, `$1 height="${dim.height}"`);
  patched++;
  return `<img ${newAttrs.trim()}>`;
});

fs.writeFileSync(BLOG_TS, src);

console.log(`✓ Patched ${patched} <img> tags with width/height`);
console.log(`  Skipped ${skipped} that already had dimensions`);
if (unknownSrc) console.log(`  ⚠ ${unknownSrc} <img> with unknown src (no entry in image-dims.json)`);

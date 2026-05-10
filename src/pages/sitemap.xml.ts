import type { APIRoute } from 'astro';
import { PRODUCTS } from '@data/products';
import { BLOG_POSTS } from '@data/blog';
import { SITE } from '@data/site';

interface UrlEntry {
  loc: string;
  altTR: string;
  altEN: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  lastmod?: string;
}

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];
  const base = SITE.url;

  const entries: UrlEntry[] = [
    // Home pages
    { loc: `${base}/`, altTR: `${base}/`, altEN: `${base}/en`, priority: 1.0, changefreq: 'weekly', lastmod: today },
    { loc: `${base}/en`, altTR: `${base}/`, altEN: `${base}/en`, priority: 0.9, changefreq: 'weekly', lastmod: today },

    // Products listing
    { loc: `${base}/urunler`, altTR: `${base}/urunler`, altEN: `${base}/en/products`, priority: 0.85, changefreq: 'weekly', lastmod: today },
    { loc: `${base}/en/products`, altTR: `${base}/urunler`, altEN: `${base}/en/products`, priority: 0.85, changefreq: 'weekly', lastmod: today },

    // Blog listing
    { loc: `${base}/blog`, altTR: `${base}/blog`, altEN: `${base}/en/blog`, priority: 0.7, changefreq: 'weekly', lastmod: today },
    { loc: `${base}/en/blog`, altTR: `${base}/blog`, altEN: `${base}/en/blog`, priority: 0.7, changefreq: 'weekly', lastmod: today },

    // Contact
    { loc: `${base}/iletisim`, altTR: `${base}/iletisim`, altEN: `${base}/en/contact`, priority: 0.5, changefreq: 'yearly' },
    { loc: `${base}/en/contact`, altTR: `${base}/iletisim`, altEN: `${base}/en/contact`, priority: 0.5, changefreq: 'yearly' },

    // FAQ
    { loc: `${base}/sss`, altTR: `${base}/sss`, altEN: `${base}/en/faq`, priority: 0.4, changefreq: 'monthly' },
    { loc: `${base}/en/faq`, altTR: `${base}/sss`, altEN: `${base}/en/faq`, priority: 0.4, changefreq: 'monthly' },

    // Legal
    { loc: `${base}/gizlilik`, altTR: `${base}/gizlilik`, altEN: `${base}/en/privacy`, priority: 0.3, changefreq: 'yearly' },
    { loc: `${base}/en/privacy`, altTR: `${base}/gizlilik`, altEN: `${base}/en/privacy`, priority: 0.3, changefreq: 'yearly' },
    { loc: `${base}/kargo`, altTR: `${base}/kargo`, altEN: `${base}/en/shipping`, priority: 0.3, changefreq: 'yearly' },
    { loc: `${base}/en/shipping`, altTR: `${base}/kargo`, altEN: `${base}/en/shipping`, priority: 0.3, changefreq: 'yearly' },
  ];

  // Product detail pages
  for (const p of PRODUCTS) {
    const trUrl = `${base}/urunler/${p.slugTR}`;
    const enUrl = `${base}/en/products/${p.slugEN}`;
    entries.push({ loc: trUrl, altTR: trUrl, altEN: enUrl, priority: 0.7, changefreq: 'monthly' });
    entries.push({ loc: enUrl, altTR: trUrl, altEN: enUrl, priority: 0.7, changefreq: 'monthly' });
  }

  // Blog post pages
  for (const post of BLOG_POSTS) {
    const trUrl = `${base}/blog/${post.slugTR}`;
    const enUrl = `${base}/en/blog/${post.slugEN}`;
    entries.push({ loc: trUrl, altTR: trUrl, altEN: enUrl, priority: 0.6, changefreq: 'monthly', lastmod: post.isoDate });
    entries.push({ loc: enUrl, altTR: trUrl, altEN: enUrl, priority: 0.6, changefreq: 'monthly', lastmod: post.isoDate });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <xhtml:link rel="alternate" hreflang="tr" href="${e.altTR}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${e.altEN}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${e.altTR}"/>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(2)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

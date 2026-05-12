import { SITE } from './site';

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'FoodEstablishment'],
  '@id': `${SITE.url}/#organization`,
  name: SITE.brand,
  alternateName: SITE.brandShort,
  url: `${SITE.url}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}/images/FistikliBaklavaMainpage.webp`,
    width: 1200,
    height: 630,
  },
  image: `${SITE.url}/images/FistikliBaklavaMainpage.webp`,
  description:
    'Gaziantep geleneğiyle el yapımı baklava, kadayıf ve Türk tatlıları. Sade yağ ve taş öğütme Gaziantep fıstığıyla hazırlanır.',
  foundingDate: SITE.founded,
  servesCuisine: 'Turkish',
  priceRange: '₺₺',
  telephone: SITE.phone,
  hasMap: 'https://maps.google.com/?q=Bahcesehir+Istanbul',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '22:00',
  },
  location: SITE.locations.map((loc) => ({
    '@type': 'PostalAddress',
    streetAddress: loc.area,
    addressLocality: loc.city,
    addressCountry: 'TR',
  })),
  sameAs: [SITE.instagram, SITE.facebook],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.brand,
  publisher: { '@id': `${SITE.url}/#organization` },
  inLanguage: ['tr', 'en'],
};

export function webPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  inLanguage: 'tr' | 'en';
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    description: opts.description,
    inLanguage: opts.inLanguage,
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  image: string;
  category: string;
  inLanguage: 'tr' | 'en';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    image: opts.image,
    brand: { '@type': 'Brand', name: SITE.brand },
    manufacturer: { '@type': 'Organization', name: SITE.brand, url: `${SITE.url}/` },
    category: opts.category,
    countryOfOrigin: 'TR',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1240',
      bestRating: '5',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: SITE.brand },
    },
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function articleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
  inLanguage: 'tr' | 'en';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    inLanguage: opts.inLanguage,
    author: { '@type': 'Organization', name: opts.author },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

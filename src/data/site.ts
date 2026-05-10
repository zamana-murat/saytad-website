export const SITE = {
  url: 'https://www.saytad.com',
  brand: 'Saytad Baklava',
  brandShort: 'Saytad',
  founded: '2007',
  phone: '+905395138003',
  phoneDisplay: '+90 539 513 8003',
  email: 'info@saytad.com',
  instagram: 'https://www.instagram.com/saytadbaklava',
  facebook: 'https://www.facebook.com/saytadbaklava',
  locations: [
    { name: 'Saytad Bahçeşehir', city: 'İstanbul', area: 'Bahçeşehir' },
    { name: 'Saytad Yeşilköy', city: 'İstanbul', area: 'Yeşilköy' },
  ],
  hoursTR: 'Pzt – Paz: 09:00 – 22:00',
  hoursEN: 'Mon – Sun: 09:00 – 22:00',
} as const;

export type Lang = 'tr' | 'en';

export const ROUTES = {
  tr: {
    home: '/',
    products: '/urunler',
    product: (slug: string) => `/urunler/${slug}`,
    blog: '/blog',
    blogPost: (slug: string) => `/blog/${slug}`,
    story: '/blog/gaziantep-hikayesi',
    contact: '/iletisim',
    faq: '/sss',
    privacy: '/gizlilik',
    shipping: '/kargo',
  },
  en: {
    home: '/en',
    products: '/en/products',
    product: (slug: string) => `/en/products/${slug}`,
    blog: '/en/blog',
    blogPost: (slug: string) => `/en/blog/${slug}`,
    story: '/en/blog/gaziantep-story',
    contact: '/en/contact',
    faq: '/en/faq',
    privacy: '/en/privacy',
    shipping: '/en/shipping',
  },
} as const;

export const STRINGS = {
  tr: {
    topbar: '<span>✦</span>&nbsp; ₺3.000 üzeri siparişlerde ücretsiz kargo &nbsp;<span>·</span>&nbsp; İstanbul içi aynı gün teslimat &nbsp;<span>✦</span>',
    nav: { home: 'Anasayfa', products: 'Ürünlerimiz', blog: 'Blog', story: 'Hikayemiz', contact: 'İletişim' },
    footer: { products: 'Ürünler', company: 'Kurumsal', rights: 'Tüm hakları saklıdır.', tagline: 'El Yapımı Türk Tatlıları · Kur. 2007' },
    productCats: { traditional: 'Geleneksel Baklava', kadayif: 'Kadayıf', cold: 'Soğuk Baklava', vegan: 'Vegan Baklava', boregi: 'Su Böreği', gifts: 'Hediye Setleri' },
    companyLinks: { story: 'Hikayemiz', blog: 'Blog', contact: 'İletişim', corporate: 'Kurumsal Tedarik', shipping: 'Kargo Politikası', privacy: 'Gizlilik Politikası' },
    menuLabel: 'Menü',
    mobileLogoSub: 'El Yapımı Baklava · Kur. 2007',
    mobileTag: 'İstanbul · 2007',
  },
  en: {
    topbar: '<span>✦</span>&nbsp; Free shipping on orders over ₺3,000 &nbsp;<span>·</span>&nbsp; Same-day delivery within Istanbul &nbsp;<span>✦</span>',
    nav: { home: 'Home', products: 'Our Products', blog: 'Blog', story: 'Our Story', contact: 'Contact' },
    footer: { products: 'Products', company: 'Company', rights: 'All rights reserved.', tagline: 'Handcrafted Turkish Sweets · Est. 2007' },
    productCats: { traditional: 'Traditional Baklava', kadayif: 'Kadayıf', cold: 'Cold Baklava', vegan: 'Vegan Baklava', boregi: 'Su Böreği', gifts: 'Gift Sets' },
    companyLinks: { story: 'Our Story', blog: 'Blog', contact: 'Contact', corporate: 'Corporate Supply', shipping: 'Shipping Policy', privacy: 'Privacy Policy' },
    menuLabel: 'Menu',
    mobileLogoSub: 'Handcrafted Baklava · Est. 2007',
    mobileTag: 'Istanbul · 2007',
  },
} as const;

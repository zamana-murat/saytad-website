export type ProductCategory = 'baklava' | 'kadayif' | 'cold' | 'vegan';

export interface Product {
  /** TR slug → /urunler/<slug> */
  slugTR: string;
  /** EN slug → /en/products/<slug> */
  slugEN: string;
  category: ProductCategory;
  nameTR: string;
  nameEN: string;
  descTR: string;
  descEN: string;
  priceTR: string;
  priceEN: string;
  image: string;
  imagePos?: string;
}

export const PRODUCTS: Product[] = [
  // ─── BAKLAVA ───
  {
    slugTR: 'fistikli-baklava', slugEN: 'pistachio-baklava', category: 'baklava',
    nameTR: 'Fıstıklı Baklava', nameEN: 'Pistachio Baklava',
    descTR: 'İnce el açması katlar, Gaziantep fıstığı ve sade yağ şerbetiyle',
    descEN: 'Thin hand-rolled layers filled with Gaziantep pistachios, pure butter syrup',
    priceTR: '₺1.800/kg', priceEN: '₺1,800/kg',
    image: '/images/FistikliBaklavaMainpage.webp', imagePos: 'center 55%',
  },
  {
    slugTR: 'cevizli-baklava', slugEN: 'walnut-baklava', category: 'baklava',
    nameTR: 'Cevizli Baklava', nameEN: 'Walnut Baklava',
    descTR: 'Çıtır yufka, taze çekilmiş ceviz ve aromatik şerbetle',
    descEN: 'Crispy phyllo with freshly crushed walnuts and aromatic sherbet',
    priceTR: '₺1.200/kg', priceEN: '₺1,200/kg',
    image: '/images/Cevizli_Baklava.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'fistikli-kuru-baklava', slugEN: 'pistachio-dry-baklava', category: 'baklava',
    nameTR: 'Fıstıklı Kuru Baklava', nameEN: 'Pistachio Dry Baklava',
    descTR: 'Daha hafif şuruplu, ekstra çıtır katlar — kurusunu sevenlerin favorisi',
    descEN: 'Lighter syrup, extra-crisp layers — beloved by those who like it dry',
    priceTR: '₺1.900/kg', priceEN: '₺1,900/kg',
    image: '/images/fistikli-kuru-baklava.webp', imagePos: 'center 70%',
  },
  {
    slugTR: 'ozel-sobiyet', slugEN: 'special-sobiyet', category: 'baklava',
    nameTR: 'Özel Şöbiyet', nameEN: 'Special Şöbiyet',
    descTR: 'Kaymak ve fıstıkla dolu katlanmış üçgenler — imza yaratımımız',
    descEN: 'Folded triangles with cream & pistachio — our signature creation',
    priceTR: '₺2.500/kg', priceEN: '₺2,500/kg',
    image: '/images/Fistikli-ozel-sobiyet-baklava.webp', imagePos: 'center 30%',
  },
  {
    slugTR: 'havuc-dilim-baklava', slugEN: 'carrot-slice-baklava', category: 'baklava',
    nameTR: 'Havuç Dilim Baklava', nameEN: 'Carrot Slice Baklava',
    descTR: 'Klasik havuç şekilli baklava, fıstıklı — Gaziantep\'in vazgeçilmezi',
    descEN: 'Classic carrot-shaped baklava with pistachio, a Gaziantep staple',
    priceTR: '₺2.000/kg', priceEN: '₺2,000/kg',
    image: '/images/Havuc-dilim-baklava.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'fistikli-dolama', slugEN: 'pistachio-roll', category: 'baklava',
    nameTR: 'Fıstıklı Dolama', nameEN: 'Pistachio Roll',
    descTR: 'Fıstıkla dolu sarılmış yufka — çıtır, zengin ve zarif',
    descEN: 'Rolled phyllo packed with pistachio — crispy, rich, and elegant',
    priceTR: '₺2.500/kg', priceEN: '₺2,500/kg',
    image: '/images/Fistikli-Dolama-Fistik-Sarma.webp', imagePos: 'center 70%',
  },
  {
    slugTR: 'fistikli-midye', slugEN: 'pistachio-mussel', category: 'baklava',
    nameTR: 'Fıstıklı Midye', nameEN: 'Pistachio Mussel',
    descTR: 'Modern bir dokunuş — midye şekilli baklava, cevizli ve ahududulu',
    descEN: 'A modern twist — mussel-shaped baklava with walnut and raspberry',
    priceTR: '₺2.100/kg', priceEN: '₺2,100/kg',
    image: '/images/Fistikli-Midye-Baklava.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'ozel-kare-fistikli-baklava', slugEN: 'special-square-pistachio', category: 'baklava',
    nameTR: 'Özel Kare Fıstıklı Baklava', nameEN: 'Special Square Pistachio Baklava',
    descTR: 'Narin kare kesim fıstıklı baklava — Gaziantep fıstığıyla zengin ev spesyalitesi',
    descEN: 'Delicate square-cut pistachio baklava — a house specialty, rich with Gaziantep pistachios',
    priceTR: '₺2.100/kg', priceEN: '₺2,100/kg',
    image: '/images/Ozel-kare-baklava.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'fistikli-kaymakli-sobiyet', slugEN: 'pistachio-cream-sobiyet', category: 'baklava',
    nameTR: 'Fıstıklı Kaymakla Şöbiyet', nameEN: 'Pistachio Clotted Cream Şöbiyet',
    descTR: 'Kaymak ve fıstıkla dolu klasik üçgen şöbiyet — ipeksi ve lezzetli',
    descEN: 'Classic triangle şöbiyet filled with clotted cream and pistachios — silky and indulgent',
    priceTR: '₺1.925/kg', priceEN: '₺1,925/kg',
    image: '/images/Fistikli-sobiyet-Baklava.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'fistikli-prens-baklava', slugEN: 'pistachio-prince-baklava', category: 'baklava',
    nameTR: 'Fıstıklı Prens Baklava', nameEN: 'Pistachio Prince Baklava',
    descTR: 'Bol fıstıklı prens kesim baklava — zengin katlar, güçlü fıstık aroması',
    descEN: 'Generously filled prince-cut pistachio baklava — rich layers, bold pistachio flavour',
    priceTR: '₺2.100/kg', priceEN: '₺2,100/kg',
    image: '/images/Fistikli-Baklava-Prens.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'saray-sarma', slugEN: 'palace-roll', category: 'baklava',
    nameTR: 'Saray Sarma — Ekstra Fıstıklı', nameEN: 'Palace Roll — Extra Pistachio',
    descTR: 'Her katında ekstra fıstıklı saray sarması — gerçek bir Gaziantep klasiği',
    descEN: 'Opulently filled palace rolls with extra pistachio in every layer — a true Gaziantep classic',
    priceTR: '₺1.800/kg', priceEN: '₺1,800/kg',
    image: '/images/SaraySarma.webp', imagePos: 'center 45%',
  },
  {
    slugTR: 'cevizli-ev-usulu-baklava', slugEN: 'walnut-home-style', category: 'baklava',
    nameTR: 'Cevizli Ev Usulü Baklava', nameEN: 'Walnut Home-Style Baklava',
    descTR: 'Geleneksel ev tarifi cevizli baklava — rustik, doyurucu katlar ve aromatik ceviz dolgusu',
    descEN: 'Traditional home-recipe walnut baklava — rustic, hearty layers with aromatic walnut filling',
    priceTR: '₺1.250/kg', priceEN: '₺1,250/kg',
    image: '/images/Cevizli-Vegan-Baklava-2.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'cevizli-dilber-dudagi', slugEN: 'walnut-dilber-lip', category: 'baklava',
    nameTR: 'Cevizli Dilber Dudağı', nameEN: 'Walnut Dilber Lip',
    descTR: 'Dudak şekilli cevizli hamur — narin görünüm, güçlü lezzet',
    descEN: 'Lip-shaped walnut pastry — delicate shape, bold flavour',
    priceTR: '₺1.400/kg', priceEN: '₺1,400/kg',
    image: '/images/CevizliDilberDudagi.webp', imagePos: 'center 65%',
  },

  // ─── KADAYIF ───
  {
    slugTR: 'fistikli-duz-kadayif', slugEN: 'pistachio-plain-kadayif', category: 'kadayif',
    nameTR: 'Fıstıklı Düz Kadayıf', nameEN: 'Pistachio Plain Kadayıf',
    descTR: 'Bakır tavada pişirilmiş tel kadayıf, Gaziantep fıstığıyla',
    descEN: 'Shredded wheat cooked on copper stoves with Gaziantep pistachios',
    priceTR: '₺1.500/kg', priceEN: '₺1,500/kg',
    image: '/images/Fistikli-Duz-Kadayif.webp', imagePos: '40% 60%',
  },
  {
    slugTR: 'cevizli-duz-kadayif', slugEN: 'walnut-plain-kadayif', category: 'kadayif',
    nameTR: 'Cevizli Düz Kadayıf', nameEN: 'Walnut Plain Kadayıf',
    descTR: 'Altın renkli tel hamur, cevizli, taş fırında pişirilmiş',
    descEN: 'Golden shredded pastry with walnuts, baked in a stone oven',
    priceTR: '₺1.200/kg', priceEN: '₺1,200/kg',
    image: '/images/Cevizli-Duz-Kadayif.webp', imagePos: 'center 60%',
  },
  {
    slugTR: 'fistikli-hasir-kadayif', slugEN: 'pistachio-hasir-kadayif', category: 'kadayif',
    nameTR: 'Fıstıklı Hasır Kadayıf', nameEN: 'Pistachio Hasır Kadayıf',
    descTR: 'Ekstra ince örgülü kadayıf, bol fıstık dolgulu — çok çıtır',
    descEN: 'Extra-thin woven kadayıf with a generous pistachio core — very crispy',
    priceTR: '₺1.900/kg', priceEN: '₺1,900/kg',
    image: '/images/Hasir_Kadayif.webp', imagePos: 'center center',
  },
  {
    slugTR: 'burma-kadayif', slugEN: 'burma-kadayif', category: 'kadayif',
    nameTR: 'Burma Kadayıf', nameEN: 'Burma Kadayıf',
    descTR: 'Fıstık dolgulu bükülmüş tel kadayıf hamuru',
    descEN: 'Twisted shredded pastry rolled with pistachio filling',
    priceTR: '₺1.900/kg', priceEN: '₺1,900/kg',
    image: '/images/Fistikli-Burma-Kadayif.webp', imagePos: 'center 55%',
  },
  {
    slugTR: 'bohca-kadayif', slugEN: 'bohca-kadayif', category: 'kadayif',
    nameTR: 'Bohça Kadayıf', nameEN: 'Packed Kadayıf (Bohça)',
    descTR: 'Taze sütten yapılmış fıstıklı kaymakla sarılmış kadayıf',
    descEN: 'Wrapped kadayıf with pistachio cream made from fresh milk',
    priceTR: '₺1.900/kg', priceEN: '₺1,900/kg',
    image: '',
  },

  // ─── COLD BAKLAVA ───
  {
    slugTR: 'fistikli-soguk-baklava', slugEN: 'pistachio-cold-baklava', category: 'cold',
    nameTR: 'Fıstıklı Soğuk Baklava', nameEN: 'Pistachio Cold Baklava',
    descTR: 'Fıstıklı soğutulmuş baklava — mükemmel yaz lezzeti',
    descEN: 'Chilled baklava with pistachio — the perfect summer indulgence',
    priceTR: '₺1.600/kg', priceEN: '₺1,600/kg',
    image: '/images/Soguk_Baklava_Main_Page.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'beyaz-cikolatali-soguk-baklava', slugEN: 'white-chocolate-cold-baklava', category: 'cold',
    nameTR: 'Beyaz Çikolatalı Soğuk Baklava', nameEN: 'Pistachio White Chocolate Cold Baklava',
    descTR: 'Beyaz çikolata kaplı fıstıklı soğuk baklava',
    descEN: 'Cold baklava with white chocolate glaze and pistachio',
    priceTR: '₺1.600/kg', priceEN: '₺1,600/kg',
    image: '/images/Beyaz-Cikolatali-Soguk-Baklava.webp', imagePos: 'center center',
  },
  {
    slugTR: 'kirmizi-meyveli-soguk-baklava', slugEN: 'red-berry-cold-baklava', category: 'cold',
    nameTR: 'Kırmızı Meyveli Soğuk Baklava', nameEN: 'Redberry Cold Baklava',
    descTR: 'Meyvelisi — kırmızı meyve soslu soğuk baklava',
    descEN: 'A fruity twist — cold baklava with redberry topping',
    priceTR: '₺1.600/kg', priceEN: '₺1,600/kg',
    image: '/images/Frambuazli-Soguk-Baklava.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'dag-meyveli-soguk-baklava', slugEN: 'wild-berry-cold-baklava', category: 'cold',
    nameTR: 'Dağ Meyveli Soğuk Baklava', nameEN: 'Mountain-Berry Cold Baklava',
    descTR: 'Yaban mersini ile klasik baklava soğutulmuş şaheser',
    descEN: 'Wild mountain berry meets classic baklava in a chilled masterpiece',
    priceTR: '₺1.600/kg', priceEN: '₺1,600/kg',
    image: '/images/Soguk-Baklava-Main-Page-2.webp', imagePos: 'center 65%',
  },
  {
    slugTR: 'sutlu-nuriye', slugEN: 'sutlu-nuriye', category: 'cold',
    nameTR: 'Sütlü Nuriye', nameEN: 'Milky Nuriye',
    descTR: 'Hafif, sütlü baklava — tatlısını yumuşak ve kremsi sevenler için',
    descEN: 'Light, milky baklava — for those who love their dessert soft and silky',
    priceTR: '₺1.500/kg', priceEN: '₺1,500/kg',
    image: '/images/Sutlu-Nuriye-Baklava.webp', imagePos: 'center 65%',
  },

  // ─── VEGAN ───
  {
    slugTR: 'vegan-cevizli-baklava', slugEN: 'vegan-walnut-baklava', category: 'vegan',
    nameTR: 'Vegan Cevizli Baklava', nameEN: 'Vegan Walnut Baklava',
    descTR: '%100 bitkisel, cevizli, bitkisel yağ ve hurma şerbetiyle yapılmış',
    descEN: '100% plant-based with walnut, made with vegetable oil and date sherbet',
    priceTR: '₺1.300/kg', priceEN: '₺1,300/kg',
    image: '/images/Cevizli-Vegan-Baklava.webp', imagePos: 'center 70%',
  },
  {
    slugTR: 'vegan-fistikli-burma-kadayif', slugEN: 'vegan-pistachio-burma-kadayif', category: 'vegan',
    nameTR: 'Vegan Fıstıklı Burma Kadayıf', nameEN: 'Vegan Pistachio Burma Kadayıf',
    descTR: 'Fıstıklı tel kadayıf, bitkisel yağla pişirilmiş',
    descEN: 'Shredded kadayıf with pistachio, cooked with vegetable oil',
    priceTR: '₺1.900/kg', priceEN: '₺1,900/kg',
    image: '/images/Fistikli-Vegan-Burma-Kadayif.webp', imagePos: 'center 60%',
  },
  {
    slugTR: 'vegan-hurmali-prens-baklava', slugEN: 'vegan-date-prince-baklava', category: 'vegan',
    nameTR: 'Vegan Hurmalı Prens Baklava', nameEN: 'Vegan Date Juicy Prince Baklava',
    descTR: 'Hurma suyu şerbetiyle tatlandırılmış — katkısız, doğal lezzet',
    descEN: 'Sweetened with date juice sherbet — additive-free, naturally indulgent',
    priceTR: '₺2.200/kg', priceEN: '₺2,200/kg',
    image: '/images/Fistikli-Vegan-Prens-Baklava.webp', imagePos: 'center center',
  },
];

export const productsByCategory = (cat: ProductCategory): Product[] =>
  PRODUCTS.filter((p) => p.category === cat);

export const productBySlug = (
  slug: string,
  lang: 'tr' | 'en'
): Product | undefined =>
  PRODUCTS.find((p) => (lang === 'tr' ? p.slugTR : p.slugEN) === slug);

/**
 * Auto-generated from /Products/*.html. Do not hand-edit; rerun the extractor instead.
 * Per-product structured content for product detail pages.
 */

export interface BiText { tr: string; en: string }
export interface BiList { tr: string[]; en: string[] }

export interface ProductMetaRow { key: BiText; val: BiText }
export interface ProductIngredient { name: BiText; detail: BiText }
export interface ProductFeature { icon: string; title: BiText; desc: BiText }
export interface ProductStorage { icon: string; title: BiText; val: BiText; note: BiText }

export interface ProductContent {
  heroTag: BiText;
  heroSubItalic: BiText;
  heroSub: BiText;
  longDesc: BiText;
  badges: BiList;
  meta: ProductMetaRow[];
  ingredients: ProductIngredient[];
  ingredientsNote: BiText;
  allergensContains: BiList;
  allergensFree: BiList;
  allergensCrossNote: BiText;
  featuresEyebrow: BiText;
  featuresTitle: BiText;
  featuresTitleEm: BiText;
  features: ProductFeature[];
  storyEyebrow: BiText;
  storyTitle: BiText;
  storyTitleEm: BiText;
  story: BiList;
  storage: ProductStorage[];
  ctaEyebrow: BiText;
  ctaTitle: BiText;
  ctaTitleEm: BiText;
  ctaSub: BiText;
}

export const PRODUCT_CONTENT: Record<string, ProductContent> = {
  "pistachio-baklava": {
    heroTag: { tr: `Geleneksel Koleksiyon`, en: `Traditional Collection` },
    heroSubItalic: { tr: `Gaziantep'in en iyisi — İstanbul'da yapılır`, en: `Gaziantep's finest — made in Istanbul` },
    heroSub: { tr: `El yapımı. Kırk kat el açması yufka. Taş öğütme Gaziantep fıstığı.

Saf sade yağ. Kestirme yok. Taviz yok.`, en: `Handcrafted. Forty layers of hand-stretched dough. Stone-ground pistachios from Gaziantep.

Pure ghee butter. No shortcuts. No compromises.` },
    longDesc: { tr: `İmza fıstıklı baklavamız, Gaziantep kökenli üç kuşaklık bir tarifle yapılmaktadır.
El açması kırk yufka katı, taş öğütme yeşil Gaziantep fıstığıyla doldurulur ve
bitkisel yağ değil, saf sade yağla birbirine bağlanır. Hafif, berrak bir şerbetle
tamamlanan her dilim; çıtırlık, zenginlik ve ölçülü bir tatlılığın mükemmel
dengesini sunar.`, en: `Our signature pistachio baklava is made using a three-generation recipe from Gaziantep.
Forty tissue-thin layers of hand-stretched dough are filled with stone-ground green
pistachios and bound together with pure, clarified ghee butter — never vegetable oil.
Finished with a light, clear sugar syrup, each piece delivers a perfect balance of
crunch, richness and restrained sweetness.` },
    badges: { tr: [`🌿 Katkı maddesi yok`, `🧈 Saf sade yağ`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifi`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş öğütme Gaziantep (Antep) fıstığı`, en: `Stone-ground Gaziantep (Antep) pistachios` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sade yağ (tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Yufka katı`, en: `Dough layers` }, val: { tr: `Tepsi başına 40 kat el açması yufka`, en: `40 hand-stretched layers per tray` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar (not: soğutma tazeliği korur ancak lezzeti köreltir — oda sıcaklığı kesinlikle tercih edilir)`, en: `3 days at room temp · Up to 10 days refrigerated (note: refrigeration preserves freshness but dulls flavour — room temperature is strongly preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt içi kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için az miktarda nişasta`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sade yağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, ilave yağ kullanılmaz`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted` } },
      { name: { tr: `Şeker şerbeti`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
      { name: { tr: `Fıstık serpmesi`, en: `Pistachio topping` }, detail: { tr: `Pişirme sonrası üzerine serpilen ek ince öğütülmüş Gaziantep fıstığı`, en: `Additional finely ground Gaziantep pistachios applied after baking` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Hiçbir Saytad ürününde yapay aroma, renklendirici veya
koruyucu madde kullanılmaz. Fıstıklar her sezon doğrudan Gaziantep'ten taze temin edilir.
Sade yağ sertifikalı süt tedarikçilerinden alınır. Tüm bileşenler izlenebilir yapıdadır.`, en: `Note on sourcing: No artificial flavourings, colourings or
preservatives are used in any Saytad product. Pistachios are sourced fresh each
season directly from Gaziantep. Ghee is sourced from certified dairy suppliers.
All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Sert kabuklu yemiş (fıstık)`, `⚠ Süt ürünü (sade yağ)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında ceviz, fındık ve diğer
sert kabuklu yemişler içeren ürünler de üretilmektedir. Üretim süreçleri arasında titiz
temizlik protokolleri uygulanmakla birlikte, mutfaklarımız alerjen içermez sertifikasına
sahip tesisler değildir. Şiddetli kuruyemiş alerjisi olan müşterilerimizin sipariş
vermeden önce bu durumu göz önünde bulundurması önerilir.`, en: `Cross-contamination advisory: Saytad kitchens also produce products
containing walnuts, hazelnuts and other tree nuts. While we maintain strict cleaning
protocols between production runs, our kitchens are not certified allergen-free
facilities. Customers with severe nut allergies should take this into account before
ordering.` },
    featuresEyebrow: { tr: `Tadı Neden Farklı`, en: `Why It Tastes Different` },
    featuresTitle: { tr: `Taviz Verilmeyen Üç`, en: `Three Uncompromising` },
    featuresTitleEm: { tr: `Malzeme`, en: `Ingredients` },
    features: [
      { icon: `🌿`, title: { tr: `Gaziantep Fıstığı`, en: `Gaziantep Pistachios` }, desc: { tr: `Yalnızca taş öğütme, erken hasat Gaziantep fıstığı kullanıyoruz — AB tarafından coğrafi
işaret tesciliyle korunan, hakiki Antep baklavasının lezzetini tanımlayan bu özgün çeşit.
Canlı yeşil rengi ve yoğun, hafif reçineli aroması dünyada başka hiçbir fıstıkla taklit
edilemez. Tazeliği korumak ve her katın dokusunu tam kontrol edebilmek için fıstıkları
kendimiz öğütüyoruz.`, en: `We source only stone-ground, early-harvest Gaziantep pistachios — the same EU-protected
variety that defines the flavour of authentic Antep baklava. Their vibrant green colour
and intensely nutty, slightly resinous taste cannot be replicated by any other pistachio
in the world. We grind them ourselves to preserve freshness and control the exact texture
of each layer.` } },
      { icon: `🧈`, title: { tr: `Saf Sade Yağ`, en: `Pure Ghee Butter` }, desc: { tr: `Her baklavamız yalnızca saf, arıtılmış sade yağ ile yapılır — margarin ya da bitkisel yağ
kesinlikle kullanılmaz. Sade yağ, hamura karakteristik altın rengini, katlar arasındaki
narin çıtırlığı ve fıstık aromasını tüm yapıya taşıyan derinliği kazandırır. Daha pahalı
ve daha yavaş işlenen bir yağdır. Kullanmamızın nedeni basit: yerini tutabilecek başka bir
şey yok.`, en: `Every tray of our baklava is made exclusively with pure, clarified ghee butter — never
margarine, never vegetable shortening. Ghee gives the dough its characteristic golden
sheen, creates the delicate shattering crunch between layers, and carries the pistachio
aroma throughout. It is a more expensive fat, and a slower one to work with. We use it
because there is simply no substitute.` } },
      { icon: `🤲`, title: { tr: `El Açması Yufka`, en: `Hand-Stretched Dough` }, desc: { tr: `Her yufka yaprağı elle oklavaya vurularak ışığa tutulduğunda neredeyse saydam görünecek
inceliğe ulaşana dek açılır. Bu, yıllar içinde kazanılan ve makinenin asla
kopyalayamayacağı bir beceridir. Kırk yaprak üst üste yığılır, her biri sade yağla
fırçalanır, doldurulur ve pişirmeden önce kesilir. Ortaya çıkan yapı günlerce
çıtırlığını korur.`, en: `Each sheet of yufka dough is hand-rolled and stretched to translucent thinness — thick
enough to hold, thin enough to be almost transparent when held to light. This is a skill
that takes years to develop and cannot be replicated by machine. Forty sheets are stacked,
brushed with ghee, filled, and scored before baking. The result is a structure that holds
its crunch for days.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Nesiller Boyu Taşınan`, en: `A Recipe Carried` },
    storyTitleEm: { tr: `Bir Tarif`, en: `Across Generations` },
    story: { tr: [`Fıstıklı baklava yalnızca bir tatlı değildir — Gaziantep'te bir kültürel kurumdur.
Şehir, baklavası için AB Coğrafi İşaret Tescili statüsüne sahiptir; bu Şampanya ve Parma
jambon'unu koruyan hukuki güvencenin aynısıdır. Bu geleneğin zirvesinde ise fıstıklı
baklava yer alır: en kaliteli malzemeleri, en deneyimli elleri ve en titiz tekniği talep
eden ürün.`, `Saytad tarifi ticari bir mutfakta geliştirilmedi. Evde öğrenildi, tekrar ve gözlem yoluyla
kuşaktan kuşağa aktarıldı. Fıstık ile hamur oranları, şerbetin döküleceği andaki sıcaklığı,
her yağ katının kalınlığı — bunlar yazıya dökülmüş şeyler değil. Hissedilerek öğrenilir.
Ve Saytad Baklava'nın 2007'de İstanbul'da kapılarını açmasından çok önce, Gaziantep'te
şekillendiği günden bu yana değişmeden kaldı.`, `Bugün her tepsi, Bahçeşehir ve Yeşilköy'deki İstanbul mutfaklarımızda aynı tedarik
standartları ve aynı tekniklerle hâlâ elle üretiliyor. Her gün taze pişiriyoruz. Dondurma
yapmıyoruz. Koruyucu kullanmıyoruz. Gün içinde satılmayan bir tepsi artık satılmaz. Bu,
bize tepsiye mal olan bir tazelik taahhüdüdür. Bizim için vazgeçilmezdir.`], en: [`Pistachio baklava is not simply a confection — in Gaziantep, it is a cultural institution.
The city holds EU Protected Geographical Indication status for its baklava, the same legal
designation that protects Champagne and Parma ham. Within that tradition, pistachio baklava
stands at the pinnacle: the product that demands the finest ingredients, the most skilled
hands, and the most exacting technique.`, `The Saytad recipe was not developed in a commercial kitchen. It was learned at home, passed
from one generation to the next through repetition and observation. The ratios of pistachio
to dough, the temperature of the syrup at the moment of pouring, the thickness of each
butter application — these are not written down. They are felt. And they have remained
unchanged since the recipe first took shape in Gaziantep, decades before Saytad Baklava
opened its doors in Istanbul in 2007.`, `Today, every tray is still made by hand in our Istanbul kitchens — Bahçeşehir and Yeşilköy —
using the same sourcing standards and the same techniques. We bake fresh every day. We do
not freeze. We do not use preservatives. If a tray is not sold the same day, it is not sold.
This is a commitment to freshness that costs us trays. We consider it non-negotiable.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Serin ve kuru bir yerde, doğrudan güneş ışığından uzak saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Raf ömrünü uzatır ancak lezzeti köreltir ve çıtırlığı bozar — yalnızca gerektiğinde kullanın; servis etmeden 30 dakika önce oda sıcaklığına çıkarın`, en: `Extends life but dulls flavour and softens the crunch — use only when necessary, and always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, yufka katlarının dokusunu bozar`, en: `Freezing compromises the texture of the dough layers` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Tazelik, üretim günü en yüksek noktasındadır`, en: `Freshness is at its peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Bugün Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Yurt genelinde kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "walnut-baklava": {
    heroTag: { tr: `Geleneksel Koleksiyon`, en: `Traditional Collection` },
    heroSubItalic: { tr: `Güçlü, derin ve aromatik`, en: `Bold, earthy, deeply aromatic` },
    heroSub: { tr: `El yapımı. Kırk kat el açması yufka. Taze çekilmiş ceviz.

Saf sade yağ. Hiç iyileştirmeye ihtiyaç duymamış bir tarif.`, en: `Handcrafted. Forty layers of hand-stretched dough. Freshly crushed walnuts.

Pure ghee butter. A recipe that has never needed improving.` },
    longDesc: { tr: `Cevizli baklavamız, fıstıklı çeşidimizle aynı titizlikte hazırlanır: kırk kat el
açması yufka, her biri saf sade yağla fırçalanır, taze çekilmiş cevizle doldurulur
ve sıcak, hafif baharatlı bir şerbetle tamamlanır. Fıstıklı baklava parlaklığıyla
göz alırken, cevizli derinliğiyle büyüler: pek çok kişinin zanaat için daha dürüst
bir ifade olarak gördüğü yuvarlak, toprak tonlarında bir zenginlik.`, en: `Our walnut baklava is built on the same exacting standards as our pistachio — forty
sheets of hand-stretched phyllo, each brushed with pure ghee butter, filled with
freshly crushed walnuts and finished with a warm, lightly spiced sherbet. Where
pistachio baklava dazzles with brightness, walnut delivers depth: a rounder, earthier
richness that many consider the more honest expression of the craft.` },
    badges: { tr: [`🌿 Katkı maddesi yok`, `🧈 Saf sade yağ`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, geleneksel Anadolu tarifi`, en: `Made in Istanbul, traditional Anatolian recipe` } },
      { key: { tr: `Ceviz`, en: `Walnut` }, val: { tr: `Taze çekilmiş, özenle seçilmiş Türk cevizi`, en: `Freshly crushed, hand-selected Turkish walnuts` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sade yağ (tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Yufka katı`, en: `Dough layers` }, val: { tr: `Tepsi başına 40 kat el açması yufka`, en: `40 hand-stretched layers per tray` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar (not: soğutma tazeliği korur ancak lezzeti köreltir — oda sıcaklığı kesinlikle tercih edilir)`, en: `3 days at room temp · Up to 10 days refrigerated (note: refrigeration preserves freshness but dulls flavour — room temperature is strongly preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt içi kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için az miktarda nişasta`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sade yağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, ilave yağ kullanılmaz`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Türk cevizi`, en: `Turkish walnuts` }, detail: { tr: `Taze çekilmiş, özenle seçilmiş ceviz (Juglans regia), tuzsuz ve kavurmasız`, en: `Freshly crushed, hand-selected walnuts (Juglans regia), unsalted and unroasted` } },
      { name: { tr: `Şeker şerbeti`, en: `Sugar sherbet` }, detail: { tr: `Türkiye'de üretilen yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
      { name: { tr: `Ceviz serpmesi`, en: `Walnut topping` }, detail: { tr: `Pişirme sonrası üzerine serpilen ek ince kıyılmış ceviz`, en: `Additional finely crushed walnuts applied after baking` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Hiçbir Saytad ürününde yapay aroma, renklendirici veya
koruyucu madde kullanılmaz. Cevizler her sezon güvenilir Türk tedarikçilerden taze
temin edilir. Sade yağ sertifikalı süt tedarikçilerinden alınır. Tüm bileşenler
izlenebilir yapıdadır.`, en: `Note on sourcing: No artificial flavourings, colourings or
preservatives are used in any Saytad product. Walnuts are sourced fresh each
season from trusted Turkish suppliers. Ghee is sourced from certified dairy suppliers.
All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Sert kabuklu yemiş (ceviz)`, `⚠ Süt ürünü (sade yağ)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (walnut)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında fıstık, fındık ve diğer
sert kabuklu yemişler içeren ürünler de üretilmektedir. Üretim süreçleri arasında titiz
temizlik protokolleri uygulanmakla birlikte, mutfaklarımız alerjen içermez sertifikasına
sahip tesisler değildir. Şiddetli kuruyemiş alerjisi olan müşterilerimizin sipariş
vermeden önce bu durumu göz önünde bulundurması önerilir.`, en: `Cross-contamination advisory: Saytad kitchens also produce products
containing pistachios, hazelnuts and other tree nuts. While we maintain strict cleaning
protocols between production runs, our kitchens are not certified allergen-free
facilities. Customers with severe nut allergies should take this into account before
ordering.` },
    featuresEyebrow: { tr: `Tadı Neden Farklı`, en: `Why It Tastes Different` },
    featuresTitle: { tr: `Taviz Verilmeyen Üç`, en: `Three Uncompromising` },
    featuresTitleEm: { tr: `Malzeme`, en: `Ingredients` },
    features: [
      { icon: `🌰`, title: { tr: `Taze Türk Cevizi`, en: `Fresh Turkish Walnuts` }, desc: { tr: `Yalnızca özenle seçilmiş Türk cevizi kullanıyoruz; her tepsi için taze çekiliyor —
bir gün önce değil, toplu olarak değil. Taze çekilmiş bir cevizin temiz, hafif acı
bir kenarı ve derin, yağlı bir zenginliği vardır; pişerken tüm pastayı aromayla
doldurur. Önceden öğütülmüş ceviz, işlendikten saatler içinde bunu yitirir.
Biz bu konuda taviz vermiyoruz.`, en: `We source only hand-selected Turkish walnuts, crushed fresh for each tray — never
pre-ground, never stored once opened. A freshly crushed walnut has a clean, slightly
bitter edge and a deep, oily richness that fills the entire pastry with aroma as it
bakes. Pre-ground walnut loses this within hours of processing. We do not compromise
on this.` } },
      { icon: `🧈`, title: { tr: `Saf Sade Yağ`, en: `Pure Ghee Butter` }, desc: { tr: `Her baklavamız yalnızca saf, arıtılmış sade yağ ile yapılır — margarin ya da bitkisel
yağ kesinlikle kullanılmaz. Sade yağ, hamura karakteristik altın rengini, katlar
arasındaki narin çıtırlığı ve ceviz aromasını tüm yapıya taşıyan derinliği kazandırır.
Daha pahalı ve daha yavaş işlenen bir yağdır. Kullanmamızın nedeni basit: yerini
tutabilecek başka bir şey yok.`, en: `Every tray of our baklava is made exclusively with pure, clarified ghee butter — never
margarine, never vegetable shortening. Ghee gives the dough its characteristic golden
sheen, creates the delicate shattering crunch between layers, and carries the walnut
aroma throughout. It is a more expensive fat, and a slower one to work with. We use it
because there is simply no substitute.` } },
      { icon: `🤲`, title: { tr: `El Açması Yufka`, en: `Hand-Stretched Dough` }, desc: { tr: `Her yufka yaprağı elle oklavaya vurularak ışığa tutulduğunda neredeyse saydam
görünecek inceliğe ulaşana dek açılır. Bu, yıllar içinde kazanılan ve makinenin asla
kopyalayamayacağı bir beceridir. Kırk yaprak üst üste yığılır, her biri sade yağla
fırçalanır, doldurulur ve pişirmeden önce kesilir. Ortaya çıkan yapı günlerce
çıtırlığını korur.`, en: `Each sheet of yufka dough is hand-rolled and stretched to translucent thinness — thick
enough to hold, thin enough to be almost transparent when held to light. This is a skill
that takes years to develop and cannot be replicated by machine. Forty sheets are stacked,
brushed with ghee, filled, and scored before baking. The result is a structure that holds
its crunch for days.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Daha Eski Tarif,`, en: `The Older Recipe,` },
    storyTitleEm: { tr: `Dürüstçe Yapılmış`, en: `Honestly Made` },
    story: { tr: [`Fıstıklı baklava Gaziantep'in tatlı geleneğinin prestijli ürünü hâline gelmeden önce,
cevizli baklava Anadolu genelinde olağan standarttı. Pek çok Türk ailesinin büyüdüğü
çeşit bu; dini bayramlarda evde pişirilen, düğünler için büyük tepsilerle hazırlanan,
mahallelerde törensize paylaşılan. Baklavanın en dürüst, en yalın hâlidir.`, `Saytad'da cevizli baklavamıza, ürün yelpazemizin her çeşidine uyguladığımız aynı
uzlaşmaz standartları uygularız. Hamur elle açılır. Yağ saf sadedir. Cevizler her
üretim serisi için taze çekilir — bir gün önce değil, toplu olarak değil. Şerbet
içeride yapılır, doğru şeker konsantrasyonu için ayarlanır ve doğru sıcaklıkta
dökülür. Bu detaylar bitmiş üründe görünmez. Yalnızca yenirken anlaşılır.`, `Cevizli baklava tam da tanıdık olduğu için çoğunlukla hafife alınır. O tanışıklık
kazanılmıştır. Doğru ellerde gerçekten mükemmel olduğu için yüzyıllar boyunca
ayakta kalan bir üründür. Bizim hedefimiz yalnızca o eller olmak — her gün, istisnasız,
Bahçeşehir ve Yeşilköy'deki İstanbul mutfaklarımızda.`], en: [`Before pistachio baklava became the prestige product of Gaziantep's confectionery
tradition, walnut baklava was the everyday standard across Anatolia. It is the version
most Turkish families grew up with — baked at home for religious holidays, prepared in
large trays for weddings, and shared without ceremony across neighbourhoods. It is
baklava in its most honest, most direct form.`, `At Saytad, we apply the same uncompromising standards to our walnut baklava as we do to
every product in our range. The dough is hand-stretched. The butter is pure ghee. The
walnuts are crushed fresh for each production run — not the day before, not in bulk. The
sherbet is made in-house, calibrated for the right sugar concentration and poured at the
right temperature. These details are not visible in the final product. They are only
apparent in the eating.`, `Walnut baklava is often underestimated precisely because it is familiar. That familiarity
is earned. It is a product that has survived centuries because it is, in the right hands,
genuinely excellent. Our aim is simply to be those hands — every day, without exception,
in our Istanbul kitchens at Bahçeşehir and Yeşilköy.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Serin ve kuru bir yerde, doğrudan güneş ışığından uzak saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Raf ömrünü uzatır ancak lezzeti köreltir ve çıtırlığı bozar — yalnızca gerektiğinde kullanın; servis etmeden 30 dakika önce oda sıcaklığına çıkarın`, en: `Extends life but dulls flavour and softens the crunch — use only when necessary, and always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, yufka katlarının dokusunu bozar`, en: `Freezing compromises the texture of the dough layers` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Tazelik, üretim günü en yüksek noktasındadır`, en: `Freshness is at its peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Bugün Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Yurt genelinde kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "pistachio-dry-baklava": {
    heroTag: { tr: `Geleneksel Koleksiyon`, en: `Traditional Collection` },
    heroSubItalic: { tr: `Hafif şerbet, maksimum çıtırlık`, en: `Light syrup, maximum crunch` },
    heroSub: { tr: `El yapımı. Kırk kat. Az şerbet. Tam çıtırlık.

Saf Gaziantep fıstığı — taviz verilmeden.`, en: `Forty layers. Less syrup. All the crunch.

Pure Gaziantep pistachio — nothing held back.` },
    longDesc: { tr: `Fıstıklı Kuru Baklavamız, klasik tarifi özüne indirger. Aynı taş öğütme Gaziantep
fıstığı, aynı saf sade yağ, aynı 40 kat el açması yufka — ancak her katı ilk ısırıktan
sonuncusuna dek duyulur biçimde çıtır tutan daha hafif, azaltılmış bir şerbetle.
Yumuşaklık yerine çıtırlığı, tatlılık yerine fıstık yoğunluğunu önde tutan bu baklava;
ne istediğini tam bilen müşteriler için yapılmıştır. Daha hafif, daha yoğun lezzetli.
Bu ürün tamamen şerbetli olarak hazırlanır.`, en: `Our Pistachio Dry Baklava strips the classic recipe back to its essence. The same
stone-ground Gaziantep pistachios, the same pure ghee butter, the same 40
hand-stretched layers — but with a lighter, reduced syrup that lets each sheet stay
audibly crisp from the first bite to the last. This is baklava for those who prize
snap over softness; those who want the full intensity of pistachio and clarified
butter without the sweetness taking over. Lighter to eat, bolder in flavour.` },
    badges: { tr: [`🌿 Katkı maddesi yok`, `🧈 Saf sade yağ`, `🫙 Her gün taze`, `💧 Hafif şerbet`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `💧 Light syrup`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifi`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş öğütme Gaziantep (Antep) fıstığı`, en: `Stone-ground Gaziantep (Antep) pistachios` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sade yağ (tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Şerbet`, en: `Syrup` }, val: { tr: `Azaltılmış — klasik baklavamızdan yaklaşık %30 daha az`, en: `Reduced — approximately 30% less than our classic baklava` } },
      { key: { tr: `Yufka katı`, en: `Dough layers` }, val: { tr: `Tepsi başına 40 kat el açması yufka`, en: `40 hand-stretched layers per tray` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar`, en: `3 days at room temperature · Up to 10 days refrigerated` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt içi kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için az miktarda nişasta`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sade yağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, ilave yağ kullanılmaz`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted` } },
      { name: { tr: `Hafif şeker şerbeti`, en: `Light sugar syrup` }, detail: { tr: `Yerel pancar şekeri, su, birkaç damla limon suyu — kuru doku için miktarı bilinçli olarak azaltılmış`, en: `Local beet sugar, water, a few drops of lemon juice — quantity intentionally reduced for dry texture` } },
      { name: { tr: `Fıstık serpmesi`, en: `Pistachio topping` }, detail: { tr: `Pişirme sonrası üzerine serpilen ek ince öğütülmüş Gaziantep fıstığı`, en: `Additional finely ground Gaziantep pistachios applied after baking` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Hiçbir Saytad ürününde yapay aroma, renklendirici veya
koruyucu madde kullanılmaz. Fıstıklar her sezon doğrudan Gaziantep'ten taze temin edilir.
Sade yağ sertifikalı süt tedarikçilerinden alınır.`, en: `Note on sourcing: No artificial flavourings, colourings or
preservatives are used in any Saytad product. Pistachios are sourced fresh each
season directly from Gaziantep. Ghee is sourced from certified dairy suppliers.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Sert kabuklu yemiş (fıstık)`, `⚠ Süt ürünü (sade yağ)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında ceviz, fındık ve diğer
sert kabuklu yemişler içeren ürünler de üretilmektedir. Üretim süreçleri arasında titiz
temizlik protokolleri uygulanmakla birlikte, mutfaklarımız alerjen içermez sertifikasına
sahip tesisler değildir. Şiddetli kuruyemiş alerjisi olan müşterilerimizin bunu göz
önünde bulundurması önerilir.`, en: `Cross-contamination advisory: Saytad kitchens also produce products
containing walnuts, hazelnuts and other tree nuts. While we maintain strict cleaning
protocols between production runs, our kitchens are not certified allergen-free
facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Tadı Neden Farklı`, en: `Why It Tastes Different` },
    featuresTitle: { tr: `Baklavaseverin`, en: `The Purist's` },
    featuresTitleEm: { tr: `Üç İlkesi`, en: `Three Principles` },
    features: [
      { icon: `🌿`, title: { tr: `Gaziantep Fıstığı`, en: `Gaziantep Pistachios` }, desc: { tr: `Yalnızca taş öğütme, erken hasat Gaziantep fıstığı kullanıyoruz — hakiki Antep
baklavasının lezzetini tanımlayan AB coğrafi işaret tescilli bu özgün çeşit. Kuru
formatta azaltılmış şerbet, fıstık aromasının tam anlamıyla öne çıkmasını sağlar.
Canlı yeşil rengi ve yoğun, hafif reçineli karakteri rakipsiz biçimde öne çıkar.`, en: `We source only stone-ground, early-harvest Gaziantep pistachios — the EU-protected
variety that defines authentic Antep baklava. In the dry format, the reduced syrup
allows the pistachio flavour to speak fully without competition. Their vibrant green
colour and intensely nutty, slightly resinous character are front and centre,
undiluted by excessive sweetness.` } },
      { icon: `💧`, title: { tr: `Az Şerbetin Sanatı`, en: `The Art of Less Syrup` }, desc: { tr: `Baklavada şerbeti azaltmak, artırmaktan daha zordur. Az dökülürse katlar tutmaz —
ilk ısırıkta hamur dağılır. Fazla dökülürse çıtırlık saatler içinde yok olur.
Kuru baklavamız, her yaprağın çıtırlığını korurken katları birbirine bağlamak için
tam doğru sıcaklıkta uygulanan, hassas kalibrasyonlu azaltılmış şerbet kullanır.`, en: `Reducing syrup in baklava is harder than adding it. Too little and the layers won't
adhere — the pastry crumbles on the first bite. Too much and the crunch disappears
within hours. Our dry baklava uses a precisely calibrated reduced syrup applied at
the exact right temperature to bind the layers while preserving each sheet's
crispness indefinitely.` } },
      { icon: `🤲`, title: { tr: `El Açması Yufka`, en: `Hand-Stretched Dough` }, desc: { tr: `Her yufka yaprağı elle neredeyse saydam inceliğe açılır — yapıyı koruyacak kadar
kalın, fıstık ve sade yağın her katı sarmasına izin verecek kadar ince. Kuru
formatta, katları zamanla yumuşatacak nem azaldığından, hamur kalitesi nihai
sonuç üzerinde daha da belirleyici bir rol oynar.`, en: `Each sheet of yufka is hand-rolled to near-translucency — thick enough to hold
structure, thin enough to allow pistachio and ghee to perfume every layer. In the
dry format, where there is less moisture to soften the sheets over time, the quality
of the dough work has an even greater influence on the final result.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Bir Felsefesi`, en: `A Philosophy of` },
    storyTitleEm: { tr: `Sadelik`, en: `Restraint` },
    story: { tr: [`Kuru baklava, Türk tatlı kültüründe farklı bir felsefeyi temsil eder. Klasik versiyon
tatlı şerbet ile zengin dolgunun etkileşimini kutlarken, kuru versiyon sadeleşmeyi
kutlar. Daha az, bilinçli olarak daha fazladır — ve bu tercih farklı bir değer
setini ortaya koyar: yumuşaklık yerine çıtırlık, tatlılık yerine fıstık yoğunluğu,
yumuşaklık yerine doku.`, `Saytad'da kuru format, tam olarak ne istediğini bilen belirli bir müşteri tipine yanıt
olarak doğdu. Klasik fıstıklı baklavamızı sipariş edip, neredeyse özür dileyek, daha
az şerbet olup olamayacağını sorarlardı. Zamanla bu istekler ciddi bir örüntü oluşturdu.
Farklı parti büyüklüklerinde ve fırın sıcaklıklarında şerbet azaltımını kalibre ettik
ve adımızı koymaktan gurur duyduğumuz bir versiyona ulaştık.`, `Sonuç daha uzun süre çıtır kalır, yapısını daha sağlam korur ve seyahate daha dayanıklıdır.
Sade Türk çayıyla — çayın hafif burukluğu sade yağın zenginliğini keserek — ya da küçük bir
fincan siyah kahveyle mükemmel uyum sağlar. Kendinizi baklava sevdalısı olarak görüyor ancak
çoğu versiyonu çok tatlı buluyorsanız, bu baklava tam sizin için yapılmıştır.`], en: [`Dry baklava represents a distinct philosophy within Turkish pastry culture. Where the
classic version celebrates the interplay of sweet syrup and rich filling, the dry version
celebrates restraint. Less is deliberately more — and the choice reveals a different set
of values: crispness over softness, pistachio intensity over sweetness, texture over
tenderness.`, `At Saytad, the dry format emerged as a response to a particular kind of customer — one
who knew exactly what they wanted. They would order our classic pistachio baklava and ask,
almost apologetically, whether it might be possible to have it with less syrup. Over time,
these requests formed a pattern we took seriously. We calibrated the syrup reduction across
different batch sizes and oven temperatures, and arrived at a version we were proud to put
our name on.`, `The result ages well, stays crisp for longer, and travels better than the classic. It pairs
beautifully with unsweetened Turkish tea — the slight bitterness cutting through the ghee
richness — or with a small cup of black coffee. If you have always considered yourself a
baklava person but found most versions too sweet, this is the version made specifically
for you.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Serin ve kuru bir yerde, doğrudan güneş ışığından uzak saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Raf ömrünü uzatır ancak lezzeti köreltir — servis etmeden 30 dakika önce oda sıcaklığına çıkarın`, en: `Extends life but dulls flavour — always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, yufka katlarının dokusunu bozar`, en: `Freezing compromises the texture of the dough layers` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Tazelik, üretim günü en yüksek noktasındadır`, en: `Freshness is at its peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Bugün Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Yurt genelinde kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "special-sobiyet": {
    heroTag: { tr: `İmza Yaratım`, en: `Signature Creation` },
    heroSubItalic: { tr: `Kaymak & fıstık — mükemmel katlama`, en: `Clotted cream & pistachio — perfectly folded` },
    heroSub: { tr: `Üçgen hamur. İçinde kaymak. Her katında fıstık.

En çok beğenilen yaratımımız — 2007'den beri her gün talep görüyor.`, en: `Triangular pastry. Cream inside. Pistachio throughout.

Our most celebrated creation — requested daily since 2007.` },
    longDesc: { tr: `Özel Şöbiyet, Saytad yelpazesinin tacıdır. İnce yufka yaprakları elle üçgen biçiminde
katlanır ve içine bol taze kaymak ile taş öğütme Gaziantep fıstığı yerleştirilir; ardından
derin bir altın rengi kazanana dek pişirilir. Kaymak, pişirme sırasında içten katları
yumuşatır — çıtır, karamelize dış katlarla güzel bir kontrast oluşturan ipeksi bir iç
yaratır. Ağır olmadan zengin. Boğmadan lezzetli. On yıllardır en çok talep gören ürünümüz.
Bu ürün tamamen fıstıklı olarak hazırlanır.`, en: `Special Şöbiyet is the crown of the Saytad range. Thin phyllo sheets are hand-folded
into triangles and filled with a generous layer of fresh clotted cream (kaymak) and
stone-ground Gaziantep pistachios, then baked until deeply golden. The cream soaks
into the layers from within during baking, creating a silky, yielding centre that
contrasts beautifully with the crisp, caramelised exterior. Rich without being heavy.
Indulgent without being cloying. This has been our most requested item for decades.` },
    badges: { tr: [`🌿 Katkı maddesi yok`, `🧈 Saf sade yağ`, `🫙 Her gün taze`, `🥛 Taze kaymak`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `🥛 Fresh clotted cream`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep geleneği`, en: `Made in Istanbul, Gaziantep tradition` } },
      { key: { tr: `Dolgu`, en: `Filling` }, val: { tr: `Taze kaymak ve Gaziantep fıstığı`, en: `Fresh clotted cream (kaymak) and Gaziantep pistachios` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sade yağ (tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Şekil`, en: `Shape` }, val: { tr: `El katlama üçgen`, en: `Hand-folded triangle` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar (kaymak dolgu)`, en: `2 days at room temperature · Up to 7 days refrigerated (cream filling)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt içi kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için az miktarda nişasta`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sade yağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, ilave yağ kullanılmaz`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Taze kaymak`, en: `Fresh clotted cream (kaymak)` }, detail: { tr: `Tam yağlı Türk sütünden elde edilen kalın krema — katkısız, her gün taze temin edilir`, en: `Full-fat Turkish milk cream, skimmed and thickened — no stabilisers or additives, sourced fresh daily` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted` } },
      { name: { tr: `Şeker şerbeti`, en: `Sugar syrup` }, detail: { tr: `Yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar, water, a few drops of lemon juice to prevent crystallisation` } },
      { name: { tr: `Fıstık serpmesi`, en: `Pistachio topping` }, detail: { tr: `Pişirme sonrası üzerine serpilen ek ince öğütülmüş Gaziantep fıstığı`, en: `Additional finely ground Gaziantep pistachios applied after baking` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Hiçbir Saytad ürününde yapay aroma, renklendirici veya
koruyucu madde kullanılmaz. Taze kaymak yerel Türk süt tedarikçilerinden her gün taze
temin edilir. Fıstıklar her sezon doğrudan Gaziantep'ten alınır.`, en: `Note on sourcing: No artificial flavourings, colourings or
preservatives are used in any Saytad product. Fresh clotted cream is sourced daily
from local Turkish dairy suppliers. Pistachios arrive directly from Gaziantep each season.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Sert kabuklu yemiş (fıstık)`, `⚠ Süt ürünü (sade yağ ve kaymak)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter & clotted cream)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında ceviz, fındık ve diğer
sert kabuklu yemişler içeren ürünler de üretilmektedir. Üretim süreçleri arasında titiz
temizlik protokolleri uygulanmakla birlikte, mutfaklarımız alerjen içermez sertifikasına
sahip tesisler değildir. Şiddetli kuruyemiş veya süt alerjisi olan müşterilerimizin
sipariş vermeden önce bunu göz önünde bulundurması önerilir.`, en: `Cross-contamination advisory: Saytad kitchens also produce products
containing walnuts, hazelnuts and other tree nuts. While we maintain strict cleaning
protocols between production runs, our kitchens are not certified allergen-free
facilities. Customers with severe nut or dairy allergies should take this into account.` },
    featuresEyebrow: { tr: `Onu Özel Yapan Nedir`, en: `What Makes It Special` },
    featuresTitle: { tr: `Sanatı`, en: `The Art of the` },
    featuresTitleEm: { tr: `Üçgenin`, en: `Triangle` },
    features: [
      { icon: `🥛`, title: { tr: `Taze Kaymak`, en: `Fresh Clotted Cream` }, desc: { tr: `Özel Şöbiyet'imizde kullanılan kaymak, yerel Türk mandıralarından her sabah taze
temin edilen, tam yağlı, kalın kremadır. Katlanmadan önce cömertçe sürülür; pişme
sırasında hamura işler ve çıtır, karamelize dış katlarla güzel bir kontrast oluşturan
ipeksi, yumuşak bir iç yaratır. Müşterileri tekrar tekrar getiren bileşim bu.`, en: `The kaymak used in our Special Şöbiyet is thick, full-fat clotted cream sourced fresh
each morning from local Turkish dairies. Applied generously before folding, it soaks
into the dough during baking — creating a silky, yielding interior that contrasts
beautifully with the crisp, caramelised exterior. This is the combination that keeps
customers coming back.` } },
      { icon: `🌿`, title: { tr: `Gaziantep Fıstığı`, en: `Gaziantep Pistachios` }, desc: { tr: `Taş öğütme Antep fıstığı hem her üçgenin içine hem de pişirme sonrası üstüne cömertçe
eklenir; kaymaklı zenginliğe canlı yeşil, kokulu bir denge katar. Fıstık ve kaymak
eşleşmesi, Türk tatlı kültürünün en köklü ve sevilen kombinasyonlarından biridir —
derinden geleneksel, her zaman tatmin edici.`, en: `Stone-ground Antep pistachios are layered generously both inside every triangle and
across the top after baking, providing an intensely green, fragrant counterpoint to
the cream's richness. The pairing of pistachio and kaymak is one of the oldest and
most beloved combinations in Turkish confectionery — deeply traditional yet endlessly
satisfying.` } },
      { icon: `✂️`, title: { tr: `El Katlama Üçgen`, en: `Hand-Folded Triangle` }, desc: { tr: `Her şöbiyet, kaymak pişirme sırasında dışarı çıkmadan hassas bir üçgen haline
getirilir — deneyim gerektiren bir teknik. Katlama her köşede birden fazla yufka katı
oluşturur; kenarlarda tatmin edici bir çıtırlık, ortada ise ilk ısırıkta açılan
yumuşak, kaymaklı bir iç sağlar.`, en: `Each şöbiyet is folded by hand into a precise triangle — a technique that requires
skill to execute without the cream escaping during the heat of baking. The fold
creates multiple dough layers at each point, producing an especially satisfying
crunch at the edges and a soft, cream-rich centre that opens up on the first bite.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Kaymakla Fıstığın`, en: `Where Cream Meets` },
    storyTitleEm: { tr: `Buluşması`, en: `Pistachio` },
    story: { tr: [`Şöbiyet, dolgulu baklavanın en eski biçimlerinden biridir — günümüz Türk tatlıcı
dükkânlarını dolduran şekilli çeşitlerden çok daha eskiye dayanır. Geleneksel haliyle
kaymak ve fıstığı ince yufkadan katlanmış basit bir üçgene yerleştirir. İyi bir şöbiyeti
sıradandan ayıran şey orandır: ne kadar kaymak, ne kadar fıstık ve hamurun pişirme
sonrası yapısını ne ölçüde koruduğu.`, `Özel Şöbiyet'imiz, çoğu ticari versiyondan çok daha yüksek bir kaymak-hamur oranı
kullanır. Sonuç yapmayı daha güçleştirir — kaymak fırında fazla incelmemesi için dikkatle
işlenmeli — ancak lezzet deneyimi çok daha zengindir. Her üçgen ortada yumuşamalı, kaymak
ve fıstıkla bezenmiş bir iç ortaya çıkarırken dış katlar derin altın rengi ve çıtır
kalmalıdır.`, `Bu ürün, Bahçeşehir şubesinin ilk yıllarından bu yana Saytad'ın imzası olmuştur. Özel
günler, hediye siparişleri ve düğün tatlı masaları için sürekli talep görür. Her sabah
sınırlı sayıda taze yapılır. Tükenince — ve tükenir — tükenir. Özel bir etkinlik için
sipariş veriyorsanız, müsaitliği garantilemek adına bir gün önceden sipariş vermenizi
öneririz.`], en: [`Şöbiyet is one of the oldest forms of filled baklava — predating many of the shaped
varieties that now populate Turkish pastry shops. In its traditional form it pairs clotted
cream with pistachio inside a simple folded triangle of thin phyllo dough. What distinguishes
a great şöbiyet from an ordinary one is the ratio: how much cream, how much pistachio, and
how well the pastry holds its structure after baking.`, `Our Special Şöbiyet uses a considerably higher cream-to-dough ratio than most commercial
versions. The result is more demanding to make — the cream must be handled carefully to
prevent it thinning too much in the oven — but the eating experience is far richer. Each
triangle should yield at the centre, revealing a creamy, pistachio-flecked interior while
the outer layers remain deeply golden and crisp.`, `This has been Saytad's signature item since the early years of the Bahçeşehir shop,
consistently requested for special occasions, gift orders and wedding dessert tables. We
make it fresh every morning in limited quantities. When it sells out — and it does — it
sells out. If you are ordering for a specific occasion, we recommend placing your order
a day in advance to ensure availability.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Gün`, en: `2 Days` }, note: { tr: `Taze kaymak içerir — en iyi kalite için 2 gün içinde tüketin`, en: `Contains fresh cream — consume within 2 days for best quality` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Kaymak dolgu nedeniyle tavsiye edilir — en iyi lezzet için servis etmeden 30 dakika önce oda sıcaklığına çıkarın`, en: `Recommended due to cream filling — bring to room temperature 30 min before serving for best flavour` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma kaymak dolgusunu ayırır ve yufka dokusunu bozar`, en: `Freezing separates the cream filling and compromises dough texture` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Tazelik ve kaymak kalitesi üretim günü en yüksek noktasındadır`, en: `Freshness and cream quality are at their peak on production day` } },
    ],
    ctaEyebrow: { tr: `Bugün Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Yurt genelinde kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "carrot-slice-baklava": {
    heroTag: { tr: `Geleneksel Koleksiyon`, en: `Traditional Collection` },
    heroSubItalic: { tr: `Gaziantep'in en ikonik formu`, en: `The most iconic shape in Gaziantep` },
    heroSub: { tr: `El yapımı. El kesimi kama şekilli yufka. Taş öğütme Gaziantep fıstığı.

Saf sade yağ. Hafif şerbet. Hiçbir kestirme yok.`, en: `Handcrafted. Hand-cut wedge-shaped phyllo. Stone-ground Gaziantep pistachios.

Pure ghee butter. Light syrup. Nothing hidden.` },
    longDesc: { tr: `Havuç dilim, Gaziantep baklavasının en tanınan formudur — bir ucu geniş, diğeri sivri
kama şekli. El açması yufka katları bol Gaziantep fıstığıyla doldurulur ve saf sade yağda
derin altın rengine kadar pişirilir. Hafif berrak şerbetle tamamlanan her dilim; çıtır,
katlı bir mükemmelliği ve güçlü fıstık aromasını bir arada sunar.
Bu ürün tamamen fıstıklı olarak hazırlanır.`, en: `The carrot slice is the most recognisable shape in Gaziantep baklava — a tapered wedge wide
at one end, pointed at the other. Layers of hand-stretched phyllo are filled with generous
Gaziantep pistachios and baked in pure ghee until deeply golden. Finished with a light clear
syrup, every piece delivers crisp, layered perfection with bold pistachio flavour.` },
    badges: { tr: [`🌿 Katkı maddesi yok`, `🧈 Saf sade yağ`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifi`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş öğütme Gaziantep (Antep) fıstığı`, en: `Stone-ground Gaziantep (Antep) pistachios` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sade yağ (tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Kesim şekli`, en: `Shape` }, val: { tr: `El kesimi kama (havuç dilim) — Gaziantep geleneğinin en geniş kesimi`, en: `Hand-cut wedge (havuç dilim) — widest cut in Gaziantep tradition` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar (en iyi lezzet için oda sıcaklığı önerilir)`, en: `3 days at room temp · Up to 10 days refrigerated (room temperature strongly preferred for best flavour)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt içi kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için nişasta izi`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sade yağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek yağı, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavrulmamış`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted` } },
      { name: { tr: `Şeker şerbeti`, en: `Sugar syrup` }, detail: { tr: `Türkiye üretimi yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
      { name: { tr: `Fıstık serpme`, en: `Pistachio topping` }, detail: { tr: `Pişirme sonrası eklenen ince öğütülmüş Gaziantep fıstığı`, en: `Additional finely ground Gaziantep pistachios applied after baking` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Saytad ürünlerinde yapay aroma, renk maddesi veya
koruyucu kullanılmaz. Fıstıklar her sezon doğrudan Gaziantep'ten temin edilir.
Sade yağ sertifikalı süt tedarikçilerinden alınır. Tüm bileşenler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or
preservatives are used in any Saytad product. Pistachios are sourced fresh each
season directly from Gaziantep. Ghee is sourced from certified dairy suppliers.
All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Sert kabuklu meyve (fıstık)`, `⚠ Süt (sade yağ)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer sert
kabuklu meyveleri içeren ürünler de üretmektedir. Üretim süreçleri arasında sıkı temizlik
protokollerimiz olsa da mutfaklarımız alerjen-serbest sertifikalı tesisler değildir.
Ciddi kuruyemiş alerjisi olan müşteriler sipariş vermeden önce bunu göz önünde bulundurmalıdır.`, en: `Cross-contamination advisory: Saytad kitchens also produce products
containing walnuts, hazelnuts and other tree nuts. While we maintain strict cleaning
protocols between production runs, our kitchens are not certified allergen-free
facilities. Customers with severe nut allergies should take this into account before
ordering.` },
    featuresEyebrow: { tr: `Neden Farklı Tatlar`, en: `Why It Tastes Different` },
    featuresTitle: { tr: `Üç Taviz Verilmez`, en: `Three Uncompromising` },
    featuresTitleEm: { tr: `Malzeme`, en: `Ingredients` },
    features: [
      { icon: `🌿`, title: { tr: `Gaziantep Fıstığı`, en: `Gaziantep Pistachios` }, desc: { tr: `Yalnızca taş öğütme, erken hasat Gaziantep fıstığı kullanıyoruz — otantik Antep
baklavasının lezzetini tanımlayan, AB korumalı aynı çeşit. Canlı yeşil rengi ve
yoğun fındıksı tadı dünyadaki hiçbir fıstıkla kopyalanamaz.`, en: `We source only stone-ground, early-harvest Gaziantep pistachios — the same EU-protected
variety that defines authentic Antep baklava. Their vibrant green colour and intensely
nutty taste cannot be replicated by any other pistachio in the world.` } },
      { icon: `✂️`, title: { tr: `Kesim Sanatı`, en: `The Art of the Cut` }, desc: { tr: `Her tepsi, pişirmeden önce havuç dilimin imza kama şekline elle kesilir — yüzyıllar
önce her parçanın maksimum dolguyu tutacak ve servis etmenin son derece kolay
olacağı biçimde tasarlanmış bir kesim tekniği.`, en: `Each tray is hand-cut into the carrot slice's signature tapered wedge before baking —
a shape designed centuries ago to maximise filling in every piece while keeping it
perfectly easy to serve and eat.` } },
      { icon: `🧈`, title: { tr: `Saf Sade Yağ`, en: `Pure Ghee Butter` }, desc: { tr: `Her tepsi yalnızca saf arıtılmış sade yağ ile yapılır — asla margarin, asla bitkisel
yağ. Sade yağ, yufkaya altın rengini, katlar arasındaki narin çıtırlığı ve fıstık
aromasını tüm ürüne yayan karakteristik dokuyu kazandırır.`, en: `Every tray is made exclusively with pure clarified ghee — never margarine, never
vegetable shortening. Ghee gives the phyllo its characteristic golden sheen, its
delicate shattering crunch between layers, and carries the pistachio aroma throughout.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Yüzyıllar Boyunca`, en: `A Shape Carried` },
    storyTitleEm: { tr: `Taşınan Bir Form`, en: `Across Centuries` },
    story: { tr: [`Havuç dilim, Gaziantep'in baklava geleneğinin belki de en ikonik şeklidir. Kama formunun,
her parçanın maksimum dolgu tutacak ve servis edilmesinin zarif olacağı şekilde yüzyıllar
önce mükemmelleştirildiği söylenir. Gaziantep'in eski çarşılarındaki en köklü baklava
dükkanlarında en sık karşılaşılan kesimdir ve şehrin coğrafi işaret statüsüyle en çok
özdeşleşen formdur.`, `Saytad'da bu geleneği, her tepsiyi fırına sürmeden önce elle keserek yaşatıyoruz.
Yufka el açması ile neredeyse saydam bir inceliğe getirilir, taze öğütülmüş Gaziantep
fıstığıyla katlanır; pişirmeden sonra saf su, şeker ve bir damla limondan oluşan şerbete
yatırılır — başka hiçbir şey eklenmez. Sonuç; hafif, çıtır ve her ısırmada doyurucu
bir baklavadır.`, `Baklavayı yeni tanıyorsanız da ömür boyu tutkunuysanız da Havuç Dilim, Gaziantep ustalığını
en klasik, en köklü ifadesiyle deneyimlemek için mükemmel noktadır. En karmaşık ürünümüz
değil. Sadece en dürüst olanı.`], en: [`The carrot slice — havuç dilim in Turkish — is perhaps the most iconic shape in
Gaziantep's baklava tradition. Its tapered wedge form is said to have been perfected
centuries ago so that every piece holds the maximum amount of filling while remaining
elegant and easy to serve. It is the shape most often found in the finest baklava shops
of Gaziantep's old bazaars, and the one most associated with the city's protected GI status.`, `At Saytad, we honour this tradition by hand-cutting every tray before it enters the oven.
The phyllo is stretched by hand to near-translucency, layered with freshly ground Gaziantep
pistachios, and soaked after baking in a syrup made from pure water, sugar, and a squeeze of
lemon — nothing more. The result is a baklava that is light, crispy, and deeply satisfying
with every bite.`, `Whether you are new to baklava or a lifelong devotee, the Carrot Slice is the ideal place
to experience Gaziantep's finest craftsmanship in its most classic, most celebrated expression.
It is not our most complex product. It is simply our most honest one.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Doğrudan güneş ışığından uzak, serin ve kuru bir ortamda saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Ömrü uzatır ancak lezzeti köreltir ve çıtırlığı yumuşatır — servis etmeden 30 dk önce oda sıcaklığına getirin`, en: `Extends life but dulls flavour and softens the crunch — always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, yufka katlarının dokusunu bozar`, en: `Freezing compromises the texture of the dough layers` } },
      { icon: `🕘`, title: { tr: `En İyi`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Tazelik, üretim günü en üst seviyededir`, en: `Freshness is at its peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Bugün Sipariş Verin`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Yurt içi kargo mevcuttur.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "pistachio-roll": {
    heroTag: { tr: `Premium Seçki`, en: `Premium Selection` },
    heroSubItalic: { tr: `İnce sarılmış, bol fıstıklı`, en: `Rolled thin, packed thick with pistachio` },
    heroSub: { tr: `El yapımı. Elle sarılmış yufka ruloları. Taş öğütme Gaziantep fıstığı.

Saf sade yağ. İlk ısırmada kırılan çıtırlık. Özüne kadar zengin.`, en: `Handcrafted. Hand-rolled phyllo cylinders. Stone-ground Gaziantep pistachios.

Pure ghee butter. A shattering crunch. Rich to the core.` },
    longDesc: { tr: `Fıstıklı Dolama — Gaziantep'te dolama ya da sarma olarak da bilinir — tekniğin bolluğa
kavuştuğu noktadır. Ultra ince yufka, taş öğütme Gaziantep fıstığının etrafına sıkıca
sarılır, ardından saf sade yağda pişirilir; dışı ilk ısırmada kırılacak şekilde çıtırır,
içi ise zengin fıstık aromasıyla dolu ve doyurucudur. Her rulon tamamen el ile şekillendirilir.`, en: `The Pistachio Roll — known as dolama or sarma in Gaziantep — is where
technique meets abundance. Ultra-thin phyllo sheets are rolled tightly around a generous
core of stone-ground Gaziantep pistachio, then baked in pure ghee until the outside
shatters at the first bite while the interior remains richly nutty and satisfying.
Each roll is shaped entirely by hand.` },
    badges: { tr: [`🌿 Katkı maddesi yok`, `🧈 Saf sade yağ`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifi`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş öğütme Gaziantep (Antep) fıstığı`, en: `Stone-ground Gaziantep (Antep) pistachios` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sade yağ (tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Elle sarılmış silindir (dolama / sarma) — her parça tek tek şekillendirilir`, en: `Hand-rolled cylinder (dolama / sarma) — each piece shaped individually` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar (en iyi lezzet için oda sıcaklığı önerilir)`, en: `3 days at room temp · Up to 10 days refrigerated (room temperature strongly preferred for best flavour)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt içi kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için nişasta izi`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sade yağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek yağı, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavrulmamış`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted` } },
      { name: { tr: `Şeker şerbeti`, en: `Sugar syrup` }, detail: { tr: `Türkiye üretimi yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Saytad ürünlerinde yapay aroma, renk maddesi veya koruyucu kullanılmaz. Fıstıklar her sezon doğrudan Gaziantep'ten temin edilir. Tüm bileşenler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used in any Saytad product. Pistachios are sourced fresh each season directly from Gaziantep. All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Sert kabuklu meyve (fıstık)`, `⚠ Süt (sade yağ)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer sert kabuklu meyveleri içeren ürünler de üretmektedir. Mutfaklarımız alerjen-serbest sertifikalı tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens also produce products containing walnuts, hazelnuts and other tree nuts. While we maintain strict cleaning protocols between production runs, our kitchens are not certified allergen-free facilities.` },
    featuresEyebrow: { tr: `Neden Farklı Tatlar`, en: `Why It Tastes Different` },
    featuresTitle: { tr: `Dolamayı`, en: `Three Things That` },
    featuresTitleEm: { tr: `Yapan Üç Unsur`, en: `Make the Roll` },
    features: [
      { icon: `🥜`, title: { tr: `Bol Fıstık Dolgu`, en: `Generous Pistachio Fill` }, desc: { tr: `Her ruloyu standart tariflerin çok üzerinde fıstıkla dolduruyoruz — yufkadan daha fazla fıstık aroması öne çıkacak şekilde. Her ısırmada kuruyemişin doğal zenginliği hissedilir.`, en: `We pack each roll with significantly more pistachio than standard recipes, creating a filling-to-pastry ratio that puts the nut's natural richness front and centre in every bite.` } },
      { icon: `🌀`, title: { tr: `Elle Sarılmış Form`, en: `Hand-Rolled Form` }, desc: { tr: `Her rulonun şekli tek tek elle verilir — yufka dolgunun etrafına sıkıca ve eşit şekilde sarılır. Hiçbir ikisi birbirinin aynısı değildir ve bu, asıl meseleyi oluşturmaktadır.`, en: `Every roll is shaped individually by hand — phyllo wrapped tightly and evenly around the filling, then sealed at each end. No two are identical, and that is exactly the point.` } },
      { icon: `✨`, title: { tr: `İki Doku Deneyimi`, en: `Two-Texture Bite` }, desc: { tr: `Kırılgan çıtır dış kabuk ile yoğun, nemli fıstıklı iç arasındaki zıtlık; bu formu Gaziantep'in en sevilen çeşitlerinden biri yapan şeydir. Düz baklavayla kopyalanamayacak bir tatmin sunar.`, en: `The contrast between the shattering crispy shell and the dense, moist pistachio interior is what makes this one of Gaziantep's most beloved forms — satisfying in a way that flat baklava simply cannot replicate.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Sarmanın`, en: `The Art of` },
    storyTitleEm: { tr: `Sanatı`, en: `the Roll` },
    story: { tr: [`Dolama ve sarma, yufka marifetini düz katlı baklavalardan tamamen farklı bir biçimde
sergileyen sarılmış hamur işleridir. Yatay katlar oluşturmak yerine yufka, dolgunun
etrafına dikey olarak sarılır — bu da uçtan uca eşit pişim sağlamak için dengeli bir
baskı ve güçlü, deneyimli bir el istemektedir.`, `Saytad'da ekibimiz her parçayı, bakır tepsilere yerleştirmeden önce tamamen elle sarar.
Pişirmeden önce bol miktarda sade yağ dökülür. Fırından çıktıktan sonra her tepsi, imza
hafif şerbetimizle sulanır — fıstığın kavrulmuş karakterini bastırmayacak kadar az, ancak
tatlılık ve nem katmaya yetecek kadar. Denge her şeydir.`, `Fıstıklı Dolama, her ısırmada güçlü, konsantre fıstık aroması isteyenler ve pişirildikten
saatler sonra bile güzelce korunan doyurucu çıtırlık arayanlar için biçilmiş kaftandır.
Ustanın sabrını ve müşterinin gerçek zanaata duyduğu takdiri ödüllendiren bir üründür.`], en: [`The dolama and sarma are rolled pastries that showcase the baklava maker's skill in a
fundamentally different way from flat-layered forms. Instead of building up horizontal
layers, the phyllo is wrapped vertically around its filling — requiring a steady hand,
an eye for even tension throughout the sheet, and enough practice to ensure the roll
bakes uniformly from its centre to its edge.`, `At Saytad, our pastry team rolls each piece entirely by hand before placing it in copper
trays. Generous amounts of ghee are applied before baking. After leaving the oven, each
tray receives a measured pour of our signature light syrup — enough to add sweetness
and moisture without overwhelming the roasted character of the pistachio. The balance
is everything.`, `The Pistachio Roll appeals to those who want bold, concentrated pistachio flavour in
every bite — with a satisfying crunch that holds up beautifully even hours after baking.
It is a product that rewards the maker's patience and the customer's appreciation for
genuine craft.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Doğrudan güneş ışığından uzak, serin ve kuru bir ortamda saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Ömrü uzatır ancak lezzeti köreltir — servis etmeden 30 dk önce oda sıcaklığına getirin`, en: `Extends life but dulls flavour — always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, sarılmış yufka katlarının dokusunu bozar`, en: `Freezing compromises the texture of the rolled phyllo layers` } },
      { icon: `🕘`, title: { tr: `En İyi`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Tazelik ve çıtırlık, üretim günü en üst seviyededir`, en: `Freshness and crunch are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Bugün Sipariş Verin`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Yurt içi kargo mevcuttur.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "pistachio-mussel": {
    heroTag: { tr: `Zanaat Koleksiyonu`, en: `Artisan Collection` },
    heroSubItalic: { tr: `Formu kadar özgün bir tat`, en: `A shape as distinctive as its flavour` },
    heroSub: { tr: `El yapımı midye şekilli yufka. Taş öğütme Gaziantep fıstığı.

Saf sade yağ. Güçlü aroma. Zarif sunum.`, en: `Handcrafted. Hand-pressed mussel-shaped phyllo. Stone-ground Gaziantep pistachios.

Pure ghee butter. Bold flavour. Elegant presentation.` },
    longDesc: { tr: `Fıstıklı Midye, çağrıştırıcı adını zarif kavisli şeklinden alır — bir midye kabuğunu
andıran bu form. El açması yufka katları bu özgün biçimde katlanır ve preslenir, ardından
bol Gaziantep fıstığıyla doldurulup saf sade yağda derin altın rengine kadar pişirilir.
Klasik baklava lezzetinin görsel açıdan en çarpıcı ifadesidir.
Bu ürün tamamen zanaatı olarak hazırlanır.`, en: `The Pistachio Mussel takes its evocative name from its graceful curved shape, recalling
the shell of a mussel. Layers of hand-stretched phyllo are folded and pressed into this
distinctive form, then filled generously with Gaziantep pistachios and baked in pure
ghee until deep golden. The result is classic baklava flavour in a visually dramatic
form — a favourite for gift trays and special occasions.` },
    badges: { tr: [`🌿 Katkı maddesi yok`, `🧈 Saf sade yağ`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifi`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş öğütme Gaziantep (Antep) fıstığı`, en: `Stone-ground Gaziantep (Antep) pistachios` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sade yağ (tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `El yapımı midye şekli — her parça tek tek şekillendirilir`, en: `Hand-pressed mussel shape (midye) — each piece individually formed` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar (en iyi lezzet için oda sıcaklığı önerilir)`, en: `3 days at room temp · Up to 10 days refrigerated (room temperature strongly preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt içi kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için nişasta izi`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sade yağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek yağı, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavrulmamış`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted` } },
      { name: { tr: `Şeker şerbeti`, en: `Sugar syrup` }, detail: { tr: `Türkiye üretimi yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Saytad ürünlerinde yapay aroma, renk maddesi veya koruyucu kullanılmaz. Fıstıklar her sezon doğrudan Gaziantep'ten temin edilir. Tüm bileşenler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used in any Saytad product. Pistachios are sourced fresh each season directly from Gaziantep. All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Sert kabuklu meyve (fıstık)`, `⚠ Süt (sade yağ)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer sert kabuklu meyveleri içeren ürünler de üretmektedir. Mutfaklarımız alerjen-serbest sertifikalı tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens also produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Neden Öne Çıkar`, en: `Why It Stands Out` },
    featuresTitle: { tr: `Form, Lezzet`, en: `Form, Flavour` },
    featuresTitleEm: { tr: `& Zanaat`, en: `& Craftsmanship` },
    features: [
      { icon: `🐚`, title: { tr: `Özgün Kabuk Formu`, en: `Distinctive Shell Shape` }, desc: { tr: `Her parça, karakteristik kavisli midye formuna elle preslenir — narin yufkayı yırtmadan bu şekli elde etmek yıllar gerektiren bir beceridir ve baklavaya her tatlı masasında öne çıkan bir görsel zarafet katar.`, en: `Each piece is hand-pressed into its characteristic curved mussel form — a shape that takes skill to achieve without tearing the delicate phyllo, and gives the baklava a visual elegance that stands out on any dessert spread.` } },
      { icon: `🥜`, title: { tr: `Premium Fıstık Dolgusu`, en: `Premium Pistachio Fill` }, desc: { tr: `Sertifikalı Gaziantep fıstıkları taş öğütmeyle taze işlenir ve her parçaya bol bol doldurulur — ilk ısırmadan sona kadar tanımlayıcı, yoğun ve hoş kokulu bir fıstık aroması sunar.`, en: `Certified Gaziantep pistachios are stone-ground fresh and packed generously into every piece — delivering a bold, fragrant pistachio flavour that defines the product from the first bite to the last.` } },
      { icon: `🎁`, title: { tr: `Hediye İçin Mükemmel`, en: `Perfect for Gifts` }, desc: { tr: `Çarpıcı midye formu ve zengin fıstık aroması, bu ürünü kutlama kutuları, kurumsal hediye tepsileri ve sunumun lezzet kadar önem taşıdığı özel günler için favori seçim haline getirir.`, en: `The striking mussel shape and rich pistachio flavour make this a favourite choice for celebration boxes, corporate gift trays, and special occasions where presentation matters as much as taste.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Formun`, en: `Where Form` },
    storyTitleEm: { tr: `Lezzetle Buluşması`, en: `Meets Flavour` },
    story: { tr: [`Gaziantep'in baklava kültüründe bir hamur işinin şekli hiçbir zaman yalnızca dekoratif
değildir — ustanın ustalığının bir ifadesidir. Midye formu, narin yufkayı yırtmadan
dikkatli bir katlama ve presleme gerektirir; bu beceri yıllar içinde gelişir. Sonuç;
pek çok diğer formdan daha yoğun dolgu temasına sahip, kompakt ve sıkı bir baklava
parçasıdır — her ısırmada fıstık aromasını yoğunlaştırır.`, `Saytad'da Midye Baklavayı, tüm ürünlerimizde kullandığımız Gaziantep fıstığı ve saf
sade yağla yapıyoruz. Hafif şerbet, pişirmeden sonra dikkatle uygulanır; her kıvrıma
sızacak kadar ince, ancak hamuru ağırlaştırmayacak kadar hesaplı. Bu denge, harika
baklavayı tanımlar ve her tepsimizde koruruz.`, `İster hediye olarak sunulsun ister evde tadılsın, Fıstıklı Midye hem göze hem damağa
hitap eden bir baklavadır. En çok fotoğraflanan ürünlerimizden biridir — ve ilk
tatanların en çok tekrar sipariş ettiği ürünlerden biri.`], en: [`In Gaziantep's baklava culture, the shape of a pastry is never merely decorative — it is
an expression of the maker's mastery. The mussel form demands careful folding and pressing
of the phyllo without tearing the delicate sheets, a skill that takes years to develop.
The result is a compact, dense piece of baklava with more filling contact than many other
forms, intensifying the pistachio flavour in every bite.`, `At Saytad, we make our Mussel Baklava with the same Gaziantep pistachios and pure ghee
we use in all our products. The light syrup is applied carefully after baking, allowing
it to seep into every fold without making the pastry heavy — a balance that defines great
baklava and that we protect in every tray.`, `Whether presented as a gift or enjoyed at home, the Pistachio Mussel is a baklava that
rewards both the eye and the palate. It is one of our most photographed products — and
one of our most ordered once people taste it for the first time.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Doğrudan güneş ışığından uzak, serin ve kuru bir ortamda saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Ömrü uzatır ancak lezzeti köreltir — servis etmeden 30 dk önce oda sıcaklığına getirin`, en: `Extends life but dulls flavour — always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, şekilli yufkanın dokusunu bozar`, en: `Freezing compromises the texture of the shaped phyllo` } },
      { icon: `🕘`, title: { tr: `En İyi`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Tazelik ve çıtırlık, üretim günü en üst seviyededir`, en: `Freshness and crunch are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Bugün Sipariş Verin`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Yurt içi kargo mevcuttur.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "special-square-pistachio": {
    heroTag: { tr: `İmza Koleksiyonu`, en: `Signature Collection` },
    heroSubItalic: { tr: `Her kesimde bereket`, en: `Abundance in every cut` },
    heroSub: { tr: `El yapımı. Klasik kare form — ama daha bol fıstıkla. Saf sadeyağ,

Gaziantep tarifinin eşsiz derinliğiyle buluşuyor.`, en: `The classic square form — elevated. Extra pistachio, pure ghee butter,

and the unmistakable depth of a Gaziantep recipe.` },
    longDesc: { tr: `Özel Kare, geleneği cömertlikle buluşturduğumuz ürünümüzdür. Gaziantep baklavasının
sevilen kare kesim formu, burada bir adım öteye taşınır — standart bir kesimden çok
daha yüksek oranda taş değirmende öğütülmüş antep fıstığıyla doldurulur, saf sadeyağda
kızartılır ve hafif şerbetimizle tamamlanır. Sonuç; daha zengin, daha yeşil ve daha
yoğun fıstık aromalı bir baklava dilimidir.
Bu ürün tamamen dolgulu olarak hazırlanır.`, en: `Our Special Square is where tradition meets generosity. The familiar square-cut form
of Gaziantep baklava is here taken a step further — packed with a noticeably higher
proportion of stone-ground pistachios than a standard cut, baked in pure ghee until
deep golden, and finished with our light, balanced syrup. The result is a richer,
greener, more intensely pistachio-forward piece of baklava that has earned its place
as a favourite in our premium gift trays.` },
    badges: { tr: [`🌿 Katkısız`, `🧈 Saf sadeyağ`, `🫙 Günlük taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifine göre`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş değirmende öğütülmüş, bol miktarda Gaziantep (Antep) fıstığı`, en: `Extra-generous stone-ground Gaziantep (Antep) pistachios` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sadeyağ (arıtılmış tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Kare kesim — yüksek fıstık oranıyla klasik Gaziantep sunumu`, en: `Square cut — classic Gaziantep presentation with elevated pistachio ratio` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar (oda sıcaklığı önerilir)`, en: `3 days at room temp · Up to 10 days refrigerated (room temperature strongly preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Türkiye geneli kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için az miktarda nişasta`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sadeyağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Bol miktarda taş değirmende öğütülmüş, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız`, en: `Extra portion of stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted` } },
      { name: { tr: `Şeker şurubu`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Tedarik notu: Saytad ürünlerinin hiçbirinde yapay aroma, renklendirici veya koruyucu kullanılmaz. Fıstıklar her sezon doğrudan Gaziantep'ten temin edilir. Tüm bileşenler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used in any Saytad product. Pistachios are sourced fresh each season directly from Gaziantep. All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu yemiş (fıstık)`, `⚠ Süt (sadeyağ)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında ceviz, fındık ve diğer sert kabuklu yemişler içeren ürünler de üretilmektedir. Mutfaklarımız sertifikalı alerjen-free tesisler değildir. Ağır fındık alerjisi olan müşterilerimiz bu durumu göz önünde bulundurmalıdır.`, en: `Cross-contamination advisory: Saytad kitchens also produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Neden Özel?`, en: `Why It's Special` },
    featuresTitle: { tr: `Klasik Form,`, en: `Classic Form,` },
    featuresTitleEm: { tr: `Fazladan Cömertlik`, en: `Extra Generosity` },
    features: [
      { icon: `🥜`, title: { tr: `Yüksek Fıstık Oranı`, en: `Elevated Pistachio Ratio` }, desc: { tr: `Standart kare baklava ölçülü bir fıstık porsiyonu kullanırken, Özel Karemiz bir adım
öteye gider — daha fazla dolgu, daha yeşil renk ve ilk ısırıktan itibaren hissedilen
yoğun fıstık aroması.`, en: `Where a standard square baklava uses a measured pistachio portion, our Special Square
goes further — more filling, greener colour, and a bolder pistachio flavour that is
immediately apparent from the first bite.` } },
      { icon: `🧈`, title: { tr: `Her Katta Saf Sadeyağ`, en: `Pure Ghee, Every Layer` }, desc: { tr: `Her yufka yaprağı %100 saf arıtılmış tereyağıyla fırçalanır — hiçbir karışım,
hiçbir kısayol. Sonuç; bitkisel yağ alternatifleriyle elde edilemeyen bir lezzet
zenginliği ve uzun süren bir gevreklik.`, en: `Every sheet of phyllo is brushed with 100% pure clarified butter — no blends, no
shortcuts. The result is a richness of flavour that vegetable oil alternatives simply
cannot replicate, and a crispness that endures.` } },
      { icon: `🏆`, title: { tr: `Prestijli Hediye Seçeneği`, en: `Premium Gift Choice` }, desc: { tr: `Özel Kare, en çok tercih edilen hediye kutularımızın vazgeçilmez ürünüdür. Cömert
görünümü ve yoğun lezzeti güçlü bir izlenim bırakır — kurumsal hediyeler, özel
günler veya kendinize bir ödül için mükemmel bir seçim.`, en: `The Special Square is a staple in our most sought-after gift boxes. Its generous
appearance and bold flavour make a strong impression — whether for corporate gifting,
celebrations, or a personal indulgence worth savouring.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Kare Kesim,`, en: `The Square Cut,` },
    storyTitleEm: { tr: `Yeniden Yorumlandı`, en: `Reimagined` },
    story: { tr: [`Kare kesim baklava, Gaziantep geleneğinin en tanınan formudur — yufka katlarını ve içini
gösteren temiz, cömert bir dilim. Saytad'da "standart"ın yeterli olmadığına karar verdik.
Özel Karemiz, taş değirmende öğütülmüş fıstığı gözle görülür biçimde daha yüksek oranda
kullanır; her dilime canlı yeşil bir iç ve onu sıradan olandan ayıran bir lezzet derinliği
kazandırır.`, `Süreç, el açması yufka hamurumuyla başlar — her yaprak makinenin değil, usta ellerin
açtığı şekilde inceltilir; bu düzensiz doku şerbeti güzel tutar. Kat kat yufka, saf
sadeyağ ve bol fıstık dolgusu birlikte dizilerek kontrollü bir sıcaklıkta, her yerde
eşit derin altın rengi elde edilene kadar yavaşça pişirilir.`, `Pişirmenin ardından hafif şerbetimiz sıcak baklavanın üzerine dökülür; her katmana
işler ama pastayı ağırlaştırmaz. Tatlılık, tereyağı zenginliği ve fıstık aroması
arasındaki denge, her partide koruduğumuz şeydir — ve Özel Kareyi adımızı koymaktan
gurur duyduğumuz bir ürün yapan şeydir.`], en: [`The square-cut baklava is the most recognised form in the Gaziantep tradition — a clean,
generous piece that showcases the layers of phyllo and the filling within. At Saytad,
we decided that "standard" was not enough. Our Special Square uses a visibly higher
proportion of stone-ground pistachios, giving each piece a vivid green interior and a
depth of flavour that distinguishes it from the everyday.`, `The process begins with our hand-stretched phyllo dough — each sheet pulled thin by
skilled hands rather than machine, maintaining the irregular texture that holds the syrup
beautifully. Layers of dough are interleaved with pure ghee and the extra pistachio
filling, then baked slowly at a controlled temperature until a deep, even golden colour
is achieved throughout.`, `After baking, our light syrup is poured over the hot baklava, allowing it to penetrate
every layer without pooling or making the pastry heavy. The balance between sweetness,
butter richness, and pistachio flavour is what we protect in every batch — and what
makes the Special Square a product we are proud to put our name on.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Serin, kuru ve güneş almayan bir yerde saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Raf ömrünü uzatır ancak lezzeti zayıflatır — servis etmeden önce 30 dakika oda sıcaklığında bekletin`, en: `Extends life but dulls flavour — always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, yufka katlarının ve fıstık dolgusunun dokusunu bozar`, en: `Freezing alters the texture of the phyllo layers and the pistachio filling` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Tazelik ve gevreklik üretim günü en yüksek noktasındadır`, en: `Freshness and crunch are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Tatmaya`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Türkiye geneli kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "pistachio-cream-sobiyet": {
    heroTag: { tr: `Usta Koleksiyonu`, en: `Artisan Collection` },
    heroSubItalic: { tr: `İpek ile fıstığın buluşması`, en: `Where silk meets pistachio` },
    heroSub: { tr: `El yapımı üçgen yufkalar. Taze kaymak dolgusu.

Taş değirmende öğütülmüş Gaziantep fıstığı. Gerçek bir lezzet.`, en: `Hand-folded triangles of phyllo. Fresh kaymak clotted cream.

Stone-ground Gaziantep pistachios. A truly indulgent combination.` },
    longDesc: { tr: `Şöbiyet, Türk tatlı kültürünün en sevilen formlarından biridir — el yapımı üçgen bir
yufkanın içine lüks bir dolgu gizlenir. Versiyonumuz, taş değirmende öğütülmüş Gaziantep
fıstığını taze kaymakla buluşturur; aynı anda zengin ve narin olan bu kombinasyon,
pişmiş yufkanın içinde inanılmaz bir ipeksilik yaratır. Gerçekten özel bir şey arayan
misafirlerimiz için vazgeçilmez bir üründür.`, en: `Şöbiyet is one of the most beloved forms of Turkish baklava — a triangle of hand-folded
phyllo enclosing a luxurious filling. Our version pairs stone-ground Gaziantep pistachios
with fresh kaymak (Turkish clotted cream), creating a combination that is simultaneously
rich and delicate. The kaymak melts into the warm pastry to produce a silky interior that
contrasts beautifully with the crisp, golden outer layers. A product for those who want
something genuinely special.` },
    badges: { tr: [`🌿 Katkısız`, `🧈 Saf sadeyağ`, `🥛 Taze kaymak`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🥛 Fresh kaymak`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifine göre`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş değirmende öğütülmüş Gaziantep (Antep) fıstığı`, en: `Stone-ground Gaziantep (Antep) pistachios` } },
      { key: { tr: `Kaymak`, en: `Cream` }, val: { tr: `Günlük taze Türk kaymağı — her gün eklenir, katkısız`, en: `Fresh Turkish kaymak (clotted cream) — added fresh daily` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sadeyağ (arıtılmış tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `El yapımı üçgen (şöbiyet) — fıstık ve kaymak dolgulu`, en: `Hand-folded triangle (şöbiyet) — filled with pistachio and clotted cream` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar (taze kaymak içerir)`, en: `2 days at room temp · Up to 7 days refrigerated (contains fresh cream)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Türkiye geneli kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için az miktarda nişasta`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sadeyağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş değirmende öğütülmüş, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted` } },
      { name: { tr: `Kaymak`, en: `Kaymak (clotted cream)` }, detail: { tr: `Günlük taze Türk kaymağı — tam yağlı süt ürünü, katkı maddesi yok`, en: `Fresh Turkish clotted cream — added daily, full-fat dairy, no preservatives` } },
      { name: { tr: `Şeker şurubu`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Tedarik notu: Yapay aroma, renklendirici veya koruyucu kullanılmaz. Taze kaymak her gün temin edilip eklenir. Taze kaymak içeriği nedeniyle raf ömrü diğer ürünlerden kısadır — oda sıcaklığında 2 gün, buzdolabında 7 gün içinde tüketilmelidir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used. Fresh kaymak is sourced and added daily. Due to the fresh cream content, shelf life is shorter than other products — consume within 2 days at room temperature or 7 days refrigerated.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu yemiş (fıstık)`, `⚠ Süt (sadeyağ & kaymak)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter & kaymak)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında ceviz, fındık ve diğer sert kabuklu yemişler içeren ürünler de üretilmektedir. Mutfaklarımız sertifikalı alerjen-free tesisler değildir. Ağır fındık veya süt alerjisi olan müşterilerimiz bu durumu göz önünde bulundurmalıdır.`, en: `Cross-contamination advisory: Saytad kitchens also produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut or dairy allergies should take this into account.` },
    featuresEyebrow: { tr: `Neden Büyüler?`, en: `Why It Captivates` },
    featuresTitle: { tr: `Kaymak, Fıstık`, en: `Cream, Pistachio` },
    featuresTitleEm: { tr: `& Ustalık`, en: `& Craft` },
    features: [
      { icon: `🥛`, title: { tr: `Her Gün Taze Kaymak`, en: `Fresh Kaymak Every Day` }, desc: { tr: `Gerçek Türk kaymağı kullanıyoruz — her sabah taze eklenen, yoğun ve zengin kaymaklı
krem. Şöbiyet dolgusunu kuru değil ipeksi yapan şey budur; ve sıradan bir versiyonu
gerçek bir ustanın elinden çıkmış şöbiyetten ayıran da bu farktır.`, en: `We use genuine Turkish kaymak — thick, rich clotted cream — added fresh each morning.
It is what makes the şöbiyet filling silky rather than dry, and what distinguishes a
truly great version from an ordinary one.` } },
      { icon: `🔺`, title: { tr: `El Yapımı Üçgen Form`, en: `Hand-Folded Triangle Form` }, desc: { tr: `Her parça, narin yufkayı yırtmadan dolguyu içine alacak biçimde elle kıvrılarak
karakteristik üçgen şeklini alır. Sonuç, dolguyu mükemmel biçimde saran kompakt
ve güzel bir tatlı parçasıdır.`, en: `Each piece is folded by hand into its characteristic triangular shape — a technique
that requires care to enclose the filling cleanly without tearing the delicate phyllo.
The result is a compact, beautiful piece that holds the filling perfectly.` } },
      { icon: `🥜`, title: { tr: `Güçlü Fıstık Kontrastı`, en: `Bold Pistachio Contrast` }, desc: { tr: `Kaymağın zenginliği, taş değirmende öğütülmüş Gaziantep fıstığının keskin ve
toprak aromasıyla dengelenir — her iki malzemenin tek başına sunabileceğinden
çok daha karmaşık ve tatmin edici bir lezzet deneyimi ortaya çıkar.`, en: `The richness of the kaymak is counterbalanced by the sharp, earthy flavour of
stone-ground Gaziantep pistachios — creating a layered taste experience that is
more complex and more satisfying than either ingredient alone.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Geleneğe Dolu`, en: `A Triangle Full` },
    storyTitleEm: { tr: `Bir Üçgen`, en: `of Tradition` },
    story: { tr: [`Şöbiyet, Türk tatlı kültüründe uzun bir geçmişe sahiptir — adı bile "doyumsuzluk" anlamına
gelen eski bir kelimeden türemiştir; bu da içinin zenginliği hakkında size bir şeyler anlatır.
Fıstık ve kaymağın klasik kombinasyonu kuşaklar boyu Gaziantep'te yapılmıştır ve kaliteli
malzemelerin özenle işlendiğinde Türk baklavasının neler başarabileceğinin en özgün
ifadelerinden biri olmaya devam etmektedir.`, `Saytad'da her şöbiyeti elle kıvırıyoruz — yufkayı açıp ortasına fıstık ve kaymak dolgusunu
koyuyor, köşeleri içe doğru katlarken pişirme ve şerbetleme sürecinde şeklini koruyacak
sıkı, düzgün bir üçgen elde ediyoruz. Kullandığımız taze kaymak günlük temin edilip her
partiye üretimden kısa süre önce eklenir; bu sayede ürünü tanımlayan kremsilik hiçbir
zaman tehlikeye girmez.`, `Fırından çıkan şöbiyetler derin altın rengi dış yüzeyleriyle masaya gelir; içi ise
yumuşak ve ipeksidir — kaymak sıcak yufkaya işlemiş, fıstıklar doku ve derinlik
katmıştır. Her lokmada çok şey olup biter; ve bunların hepsi fark edilmeye değerdir.`], en: [`Şöbiyet has a long history in Turkish pastry culture — its name derived from an old
word for "satiety," which tells you something about the richness of its filling. The
classic combination of pistachio and clotted cream has been made in Gaziantep for
generations, and it remains one of the most distinctive expressions of what Turkish
baklava can achieve when quality ingredients are treated with care.`, `At Saytad, we fold each şöbiyet by hand — laying out the phyllo, placing the pistachio
and kaymak filling at the centre, and folding the corners inward to create a tight,
neat triangle that will hold its shape through baking and syrup application. The fresh
kaymak we use is sourced daily and added to each batch shortly before production,
ensuring the creaminess that defines the product is never compromised.`, `The finished şöbiyet emerge from the oven with a deep golden exterior that gives way
to a soft, silky interior — the kaymak melting into the warm pastry, the pistachios
providing texture and depth. It is a product that rewards attention: there is a
lot happening in each bite, and all of it is worth noticing.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Gün`, en: `2 Days` }, note: { tr: `Taze kaymak nedeniyle raf ömrü kısadır — serin, kuru yerde saklayın`, en: `Shorter shelf life due to fresh kaymak — store in a cool, dry place` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Servis etmeden önce 30 dakika oda sıcaklığında bekletilerek dokusu yeniden canlandırılmalıdır`, en: `Always bring to room temperature for 30 min before serving to restore texture` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma kaymak dolgusu ve yufka dokusunu bozar`, en: `Freezing compromises the kaymak filling and phyllo texture` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Taze kaymak, üretim günü en ipeksi hâlindedir`, en: `The fresh kaymak is at its silkiest on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Tatmaya`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Türkiye geneli kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "pistachio-prince-baklava": {
    heroTag: { tr: `Asil Koleksiyon`, en: `Royal Collection` },
    heroSubItalic: { tr: `Zengin katlarda asalet`, en: `Layers of regal richness` },
    heroSub: { tr: `Prens kesim katlar. Bol Gaziantep fıstığı dolgusu.

Saf sadeyağ. Seçkin bir damak zevkine yakışır baklava.`, en: `Handcrafted. Prince-cut layers. Generous Gaziantep pistachio filling.

Pure ghee butter. A baklava fit for distinguished taste.` },
    longDesc: { tr: `Prens Baklava, adını güvenle taşır. Klasik Gaziantep baklava geleneği üzerine kurulan
bu prens kesim varyasyon, el açması yufka katları arasına özellikle bol fıstık dolgusu
yerleştirir — her katman saf sadeyağla fırçalanır ve derin, eşit bir altın rengine
ulaşana kadar pişirilir. Güçlü, zengin, yoğun fıstık aromalı bir baklavadır; ne
istediğini bilen ve en iyisini isteyen misafirler için tercihimizdir.`, en: `The Prince Baklava carries its name with confidence. Built on the classic Gaziantep
baklava tradition, this prince-cut variation features a particularly generous pistachio
filling between layers of hand-stretched phyllo, each brushed with pure ghee and baked
to a deep, even golden. It is a bold, rich, intensely pistachio-forward baklava — the
choice of those who know what they want and want the best version of it.` },
    badges: { tr: [`🌿 Katkısız`, `🧈 Saf sadeyağ`, `🫙 Günlük taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifine göre`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş değirmende öğütülmüş Gaziantep (Antep) fıstığı — bol dolgu`, en: `Stone-ground Gaziantep (Antep) pistachios — generous filling` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sadeyağ (arıtılmış tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Prens kesim — güçlü fıstık varlığıyla kalın, katlı dilimler`, en: `Prince cut — thick, layered pieces with bold pistachio presence` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar (oda sıcaklığı önerilir)`, en: `3 days at room temp · Up to 10 days refrigerated (room temperature strongly preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Türkiye geneli kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için az miktarda nişasta`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sadeyağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş değirmende öğütülmüş, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız — bol miktar`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted — generous portion` } },
      { name: { tr: `Şeker şurubu`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Tedarik notu: Saytad ürünlerinin hiçbirinde yapay aroma, renklendirici veya koruyucu kullanılmaz. Fıstıklar her sezon doğrudan Gaziantep'ten temin edilir. Tüm bileşenler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used in any Saytad product. Pistachios are sourced fresh each season directly from Gaziantep. All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu yemiş (fıstık)`, `⚠ Süt (sadeyağ)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında ceviz, fındık ve diğer sert kabuklu yemişler içeren ürünler de üretilmektedir. Mutfaklarımız sertifikalı alerjen-free tesisler değildir. Ağır fındık alerjisi olan müşterilerimiz bu durumu göz önünde bulundurmalıdır.`, en: `Cross-contamination advisory: Saytad kitchens also produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Neden Öne Çıkıyor?`, en: `Why It Reigns` },
    featuresTitle: { tr: `Zengin Katlar,`, en: `Rich Layers,` },
    featuresTitleEm: { tr: `Güçlü Aroma`, en: `Bold Flavour` },
    features: [
      { icon: `👑`, title: { tr: `Prens Kesim Kalınlığı`, en: `Prince-Cut Thickness` }, desc: { tr: `Prens kesim, yufka katmanlarını ve dolgunun derinliğini ön plana çıkaran daha kalın,
daha hacimli bir dilimdir. Her ısırık tam deneyimi sunar — çıtır dış yüzey, bol
fıstık iç kısım ve saf sadeyağın eşsiz zenginliği.`, en: `The prince cut is a thicker, more substantial portion that emphasises the layering
of the phyllo and the depth of the filling. Every bite delivers the full experience —
crisp exterior, generous pistachio centre, and the unmistakable richness of pure ghee.` } },
      { icon: `🥜`, title: { tr: `Bol Fıstık Dolgusu`, en: `Generous Pistachio Fill` }, desc: { tr: `Sertifikalı Gaziantep fıstıkları taze öğütülüp her dilime cömertçe eklenir. Canlı
yeşil renk ve yoğun aromatik lezzet, gereği gibi yapılmış ve gereği gibi doldurulmuş
bir Gaziantep baklavasının işaretidir.`, en: `Certified Gaziantep pistachios are stone-ground fresh and layered generously into
every piece. The bold green colour and intensely aromatic flavour are the mark of
a properly made, properly filled Gaziantep baklava.` } },
      { icon: `🧈`, title: { tr: `Saf Sadeyağ, Taviz Yok`, en: `Pure Ghee, No Compromise` }, desc: { tr: `Her yufka katmanı %100 arıtılmış tereyağıyla fırçalanır — bitkisel yağ
alternatiflerinin bir türlü yakalayamadığı bir lezzet derinliği ve gevreklik
sağlar. Bu, Saytad'da pazarlık konusu değildir.`, en: `Every layer of phyllo is brushed with 100% clarified butter — contributing a depth
of flavour and a level of crispness that vegetable oil alternatives simply cannot
match. This is non-negotiable at Saytad.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Dikkati Hak Eden`, en: `A Baklava That` },
    storyTitleEm: { tr: `Bir Baklava`, en: `Commands Attention` },
    story: { tr: [`Gaziantep baklavası hiyerarşisinde Prens, onurlu bir konum işgal eder — her malzemeden
daha fazlasını talep eden ve karşılığında daha fazlasını sunan kalın bir kesimdir. Ad
dekoratif değildir; daha ince kesimlerin sunamadığı biçimde tatmin eden, daha hacimli
ve daha lezzetli bir dilime olan bağlılığı yansıtır.`, `El açması yufka hamurumuyla başlıyoruz — her yaprak, lezzet ve şerbeti güzel tutan
düzensiz dokuyu korumak için usta ellerce inceltilir. Bol miktarda taş değirmende
öğütülmüş Gaziantep fıstığı, saf sadeyağla fırçalanmış katmanların arasına yerleştirilir
ve hazırlanmış tepsi, her yerde derin ve eşit bir altın rengi elde edilene kadar
yavaşça pişirilir. Kısayol yok, karışık yağ yok, dondurulmuş hamur yok.`, `Tamamlanmış Prens Baklava, bir ifade taşıyan bir üründür — tatlı sofrasında, hediye
kutusunda ya da evde tabakta. Saytad'ı ilk kez tadacak ve neyin savunucusu olduğumuzu
hemen anlamak isteyen misafirlerimize önerdiğimiz versiyondur.`], en: [`In the hierarchy of Gaziantep baklava, the Prince occupies a position of honour — a
thicker cut that demands more of every ingredient and delivers more in return. The name
is not decorative; it reflects a commitment to a more substantial, more flavourful piece
that satisfies in a way that thinner cuts cannot.`, `We begin with our hand-stretched phyllo dough — pulled thin by skilled hands to maintain
the irregular texture that holds flavour and syrup beautifully. Generous layers of
stone-ground Gaziantep pistachio are placed between sheets brushed with pure ghee, and
the assembled tray is baked slowly until an even, deep golden colour is achieved throughout.
No shortcuts, no blended oils, no frozen dough.`, `The finished Prince Baklava is a product that makes a statement — on a dessert spread,
in a gift box, or simply on a plate at home. It is the version we recommend to customers
who are tasting Saytad for the first time and want to understand immediately what we
stand for.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Serin, kuru ve güneş almayan bir yerde saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Raf ömrünü uzatır ancak lezzeti zayıflatır — servis etmeden önce 30 dakika oda sıcaklığında bekletin`, en: `Extends life but dulls flavour — always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, yufka katlarının ve fıstık dolgusunun dokusunu bozar`, en: `Freezing alters the texture of the phyllo layers and pistachio filling` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Tazelik ve gevreklik üretim günü en yüksek noktasındadır`, en: `Freshness and crunch are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Tatmaya`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Türkiye geneli kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "palace-roll": {
    heroTag: { tr: `Saray Koleksiyonu`, en: `Palace Collection` },
    heroSubItalic: { tr: `Her katta ekstra fıstık`, en: `Extra pistachio in every layer` },
    heroSub: { tr: `Bol fıstıklı sarma yufka. Saf sadeyağ.

Her dilimde Gaziantep geleneğinin ihtişamı.`, en: `El yapımı. Rolled phyllo with an opulent pistachio fill. Pure ghee butter.

The grandeur of Gaziantep tradition in every piece.` },
    longDesc: { tr: `Saray Sarma, sarma baklava formunu görkemli bir seviyeye taşır. El açması yufka yaprakları
saf sadeyağla bol bol fırçalanır, her katmana taş değirmende öğütülmüş Gaziantep fıstığı
yerleştirilir ve pişirmeden önce sıkıca sarılır. Ortaya çıkan şey, uçtan uca fıstık
varlığıyla kompakt ve zarif bir silindirdir — premium hediye koleksiyonlarımızın gözde
ürünü ve her tatlı sofrasının en çarpıcı görsellerinden biri.
Bu ürün tamamen dolgulu olarak hazırlanır.`, en: `The Palace Roll takes the rolled baklava form and elevates it to something regal.
Sheets of hand-stretched phyllo are brushed generously with pure ghee, layered with
an extra-generous portion of stone-ground Gaziantep pistachios, and rolled tightly
before baking. The result is a compact, elegant cylinder of baklava with pistachio
presence from edge to edge — a favourite in our premium gift collections and one
of the most visually striking pieces on any dessert spread.` },
    badges: { tr: [`🌿 Katkısız`, `🧈 Saf sadeyağ`, `🫙 Günlük taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifine göre`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Her katmanda ekstra miktarda taş değirmende öğütülmüş Gaziantep (Antep) fıstığı`, en: `Extra-generous stone-ground Gaziantep (Antep) pistachios in every layer` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sadeyağ (arıtılmış tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Sıkı sarılmış silindir — baştanbaşa ekstra fıstıklı`, en: `Tight-rolled cylinder — extra pistachio from end to end` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar (oda sıcaklığı önerilir)`, en: `3 days at room temp · Up to 10 days refrigerated (room temperature strongly preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Türkiye geneli kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için az miktarda nişasta`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Saf sadeyağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Her katmanda ekstra miktarda taş değirmende öğütülmüş, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız`, en: `Extra portion of stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted — layered throughout` } },
      { name: { tr: `Şeker şurubu`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Tedarik notu: Saytad ürünlerinin hiçbirinde yapay aroma, renklendirici veya koruyucu kullanılmaz. Fıstıklar her sezon doğrudan Gaziantep'ten temin edilir. Tüm bileşenler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used in any Saytad product. Pistachios are sourced fresh each season directly from Gaziantep. All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu yemiş (fıstık)`, `⚠ Süt (sadeyağ)`, `⚠ Yumurta (hamurdaki yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Sülfit yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No sulphites`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında ceviz, fındık ve diğer sert kabuklu yemişler içeren ürünler de üretilmektedir. Mutfaklarımız sertifikalı alerjen-free tesisler değildir. Ağır fındık alerjisi olan müşterilerimiz bu durumu göz önünde bulundurmalıdır.`, en: `Cross-contamination advisory: Saytad kitchens also produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Neden Etkileyici?`, en: `Why It Impresses` },
    featuresTitle: { tr: `Bol Dolgu,`, en: `Opulent Filling,` },
    featuresTitleEm: { tr: `Asil Form`, en: `Regal Form` },
    features: [
      { icon: `🏰`, title: { tr: `Her Katta Ekstra Fıstık`, en: `Extra Pistachio Throughout` }, desc: { tr: `Standart sarma baklava ölçülü bir fıstık katmanı kullanırken, Saray Sarma daha da
ileri gider — rulonun her bölümünde ekstra dolgu ile dış kenardan iç merkeze kadar
fıstık varlığı hissedilir.`, en: `Where a standard rolled baklava uses a measured pistachio layer, the Palace Roll
goes further — extra filling in every section of the roll, so that pistachio is
present from the outermost edge to the very centre of each piece.` } },
      { icon: `🌀`, title: { tr: `Sıkı Sarım Tekniği`, en: `Tight-Rolled Form` }, desc: { tr: `Her rulo, pişirme ve şerbetleme sürecinde şeklini koruyacak sıkı bir silindir
oluşturmak için elle sarılır. Sonuç; görünür katmanlamasıyla şık, kesit yüzeyiyle
tutarlı zarif bir parçadır — tepsiye veya kutuya güzel dizilir.`, en: `Each roll is formed tightly by hand to create a compact cylinder that holds its
shape through baking and syrup application. The result is an elegant piece with
visible layering and a consistent cross-section — striking on a platter or in a box.` } },
      { icon: `🎁`, title: { tr: `Hediye Koleksiyonunun Gözde Ürünü`, en: `Gift Collection Favourite` }, desc: { tr: `Saray Sarma'nın görsel zarafeti ve bol dolgusu, onu hediye kutularımızın en çok
talep edilen parçalarından biri yapar. Silindirik formu güzel istiflenir; güçlü
fıstık lezzeti ise kutu bittikten sonra da akıllarda kalır.`, en: `The Palace Roll's visual elegance and opulent filling make it one of the most
requested pieces in our gift boxes. Its cylindrical form stacks beautifully, and
the bold pistachio flavour makes it memorable long after the box is finished.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Sarmanın`, en: `The Art of` },
    storyTitleEm: { tr: `Sanatı`, en: `the Roll` },
    story: { tr: [`Sarma baklava, baklavacının repertuarında farklı bir teknik zorluk temsil eder. Düz
kesim formların aksine, bir sarmanın yapısını koruyacak kadar sıkı, ancak narin yufka
yapraklarını yırtmayacak ve fıstık dolgusunu sıkıştırmayacak kadar nazik oluşturulması
gerekir. Saray Sarma, her rulonun boyunca uzanan ekstra bol fıstık katmanıyla bunu
bir adım öteye taşır.`, `Saytad'da el açması yufkamızla başlıyoruz — makine yapımı alternatiflere kıyasla daha
ince ve daha düzensiz hamur yaprakları, her parçayı eşsiz kılan hafif doku farklarını
yaratır. Bu yapraklar saf sadeyağla fırçalanır, taş değirmende öğütülmüş Gaziantep
fıstığıyla katlanır, ardından fırın tepsisine yerleştirilip derin ve eşit bir altın
rengine ulaşana kadar pişirilmeden önce elle sıkı silindirlere sarılır.`, `Pişirme sonrasında uygulanan hafif şerbet, rulonun katmanları arasına sızarak fıstığı
bastırmadan sadece gereken tatlılığı katar. Ortaya çıkan şey; görsel anlamda çarpıcı,
lezzet açısından yoğun ve Saray adını hakkıyla taşıyan bir baklavadır.`], en: [`Rolled baklava — sarma in Turkish — represents a distinct technical challenge in the
baklava maker's repertoire. Unlike flat-cut forms, a roll must be formed tightly enough
to hold its structure, yet gently enough not to compress the pistachio filling or tear
the delicate phyllo sheets. The Palace Roll takes this further by incorporating an
extra-generous pistachio layer that runs the full length of each roll.`, `At Saytad, we begin with our hand-stretched yufka — sheets of dough that are thinner
and more irregular than machine-rolled alternatives, creating the slight variations in
texture that make each piece unique. These sheets are brushed with pure ghee, layered
with stone-ground Gaziantep pistachios, and then rolled by hand into tight cylinders
before being placed in the baking tray and cooked to a deep, even gold.`, `The light syrup applied after baking seeps between the layers of the roll, adding
just enough sweetness to complement the pistachio without masking it. What emerges
is a baklava of considerable character — visually commanding, intensely flavourful,
and worthy of the Palace name.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Serin, kuru ve güneş almayan bir yerde saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Raf ömrünü uzatır ancak lezzeti zayıflatır — servis etmeden önce 30 dakika oda sıcaklığında bekletin`, en: `Extends life but dulls flavour — always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, sarma yufkanın ve fıstık dolgusunun dokusunu bozar`, en: `Freezing alters the texture of the rolled phyllo and the pistachio filling` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Tazelik ve gevreklik üretim günü en yüksek noktasındadır`, en: `Freshness and crunch are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Tatmaya`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Türkiye geneli kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "walnut-home-style": {
    heroTag: { tr: `Miras Tarifi`, en: `Heritage Recipe` },
    heroSubItalic: { tr: `Anadolu geleneğinin tadı`, en: `The taste of Anatolian tradition` },
    heroSub: { tr: `Rustik, doyurucu yufka katları. Aromatik ceviz dolgusu.

Anadolu ev mutfağına dayanan sıcak bir klasik.`, en: `El yapımı. Rustic, hearty phyllo layers. Aromatic walnut filling.

A comforting classic rooted in Anatolian home cooking.` },
    longDesc: { tr: `Gaziantep fıstığı baklavası dünya genelinde tanınmadan çok önce, ceviz Anadolu'nun tercih
ettiği baklava dolgusuydu — ve haklı nedenlerle. Cevizli Ev Usulü Baklavamız geleneksel
bir ev tarifini izler: bol yufka katları, tarçınla basitçe çeşnilendirilmiş derin
aromatik ceviz dolgusu ve ceviz aromasını ön plana çıkaran hafif şerbet. Rustik, doyurucu
ve gerçekten tatmin edici — insanlara aile sofralarını ve ev mutfaklarını hatırlatan
bir baklava.`, en: `Before Gaziantep pistachios became synonymous with baklava, walnut was the filling of
choice across Anatolia — and for good reason. Our Walnut Home-Style Baklava follows a
traditional home recipe: generous layers of phyllo, a deeply aromatic walnut filling
spiced simply with cinnamon, and a light syrup that lets the walnut flavour carry the
piece. Rustic, hearty, and genuinely satisfying — the kind of baklava that reminds
people of family tables and home kitchens.` },
    badges: { tr: [`🌿 Katkısız`, `🍯 Sade yağ`, `🫙 Günlük taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🍯 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, geleneksel Anadolu ev tarifine göre`, en: `Made in Istanbul, traditional Anatolian home recipe` } },
      { key: { tr: `Dolgu`, en: `Filling` }, val: { tr: `İri çekilmiş taze ceviz, az miktarda tarçınla çeşnilendirilmiş`, en: `Coarsely chopped fresh walnuts with a touch of cinnamon` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Sade yağ — her yufka katına uygulanır, zenginlik ve çıtırlık sağlar`, en: `Pure ghee butter (sade yağ) — applied to every layer of phyllo` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Ev usulü kare kesim — Gaziantep stilinden daha kalın ve daha rustik katlar`, en: `Square-cut home style — thicker, more rustic layers than Gaziantep-style` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 3 gün · Buzdolabında 10 güne kadar (oda sıcaklığı önerilir)`, en: `3 days at room temp · Up to 10 days refrigerated (room temperature strongly preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Türkiye geneli kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka hamuru`, en: `Yufka dough` }, detail: { tr: `Buğday unu, su, tuz, yumurta akı, açma için az miktarda nişasta`, en: `Wheat flour, water, salt, egg whites, trace of starch for dusting` } },
      { name: { tr: `Sade yağ (tereyağı)`, en: `Pure ghee butter (sade yağ)` }, detail: { tr: `Her yufka katına cömertçe sürülen arıtılmış tereyağı — altın rengi, zengin lezzet ve çıtırlığın kaynağı`, en: `Clarified butter applied generously to every phyllo layer — the source of the golden colour and rich flavour` } },
      { name: { tr: `Ceviz`, en: `Walnuts` }, detail: { tr: `İri çekilmiş taze ceviz (Juglans regia), tuzsuz — Türkiye kaynaklı`, en: `Fresh coarsely chopped walnuts (Juglans regia), unsalted — sourced from Turkey` } },
      { name: { tr: `Tarçın`, en: `Cinnamon` }, detail: { tr: `Ceviz dolgusuna sıcaklık ve derinlik katan az miktarda öğütülmüş tarçın`, en: `A touch of ground cinnamon in the walnut filling for warmth and depth` } },
      { name: { tr: `Şeker şurubu`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Tedarik notu: Yapay aroma, renklendirici veya koruyucu kullanılmaz. Tüm bileşenler kaliteli ve bilinen kaynaklara izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used. All ingredients are traceable to known, quality sources.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu yemiş (ceviz)`, `⚠ Süt (sade yağ)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (walnut)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında fıstık, fındık ve diğer sert kabuklu yemişler içeren ürünler de üretilmektedir. Mutfaklarımız sertifikalı alerjen-free tesisler değildir. Ağır fındık alerjisi olan müşterilerimiz bu durumu göz önünde bulundurmalıdır.`, en: `Cross-contamination advisory: Saytad kitchens also produce products containing pistachios, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Neden Kalıcı?`, en: `Why It Endures` },
    featuresTitle: { tr: `Gelenek, Sadelik`, en: `Tradition, Simplicity` },
    featuresTitleEm: { tr: `& Sıcaklık`, en: `& Warmth` },
    features: [
      { icon: `🌰`, title: { tr: `Aromatik Ceviz Dolgusu`, en: `Aromatic Walnut Filling` }, desc: { tr: `Dokusunu korumak için iri çekilen taze cevizler, tarçınla sade biçimde çeşnilendirilir
— kuşaklar boyu ev usulü Türk baklavasını tanımlayan bir kombinasyon. Sonuç; toprak
kokusu, ısı ve pistachio versiyonlarından oldukça farklı, derin bir doyumsuzluktur.`, en: `Fresh walnuts, coarsely chopped to preserve their texture, are seasoned simply with
cinnamon — a combination that has defined home-style Turkish baklava for generations.
The result is earthy, warm, and deeply satisfying in a way that is quite different
from the pistachio versions.` } },
      { icon: `🏡`, title: { tr: `Ev Tarifi Kökleri`, en: `Home Recipe Roots` }, desc: { tr: `Bu baklava, Anadolu ev mutfaklarının stilini izler — daha kalın katlar, daha rustik
bir sunum ve zarafetten çok geleneği konuşan ceviz ağırlıklı bir lezzet. Türk
ailelerinin kutlamalar ve gündelik buluşmalar için yaptığı baklavadır.`, en: `This baklava follows the style of Anatolian home kitchens — thicker layers, a
more rustic presentation, and a walnut-forward flavour that speaks of tradition
rather than refinement. It is the baklava that generations of Turkish families
made for celebrations and everyday gatherings.` } },
      { icon: `🍯`, title: { tr: `Sade Yağ`, en: `Pure Ghee Butter` }, desc: { tr: `Tüm Saytad baklavaları gibi bu ürün de sade yağ ile yapılır — her yufka katına
cömertçe sürülerek altın rengi, zengin lezzet ve düzgün yapılmış geleneksel bir
baklavayı tanımlayan tatmin edici çıtırlık elde edilir.`, en: `Like all Saytad baklavas, this product is made with pure ghee butter (sade yağ)
— generously applied to every phyllo layer to achieve the golden colour, rich
flavour, and satisfying crunch that define a properly made traditional baklava.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Anadolu Evlerinden`, en: `A Recipe From` },
    storyTitleEm: { tr: `Bir Tarif`, en: `Anatolian Homes` },
    story: { tr: [`Gaziantep baklavası uluslararası üne kavuşmadan çok önce, ceviz Anadolu'nun geniş
topraklarında tatlının tercih edilen dolgusu oldu. Ev mutfaklarında mevcut malzemelerle
hazırlanan bu baklava — yerel ceviz, köy buğday unu, hafif şerbet — içe aktarılan lükslere
gerek duymayan bir kutlama yiyeceğiydi. Ortaya çıkardığı lezzet, fıstıklı versiyonlardan
farklıydı: daha toprak kokusu, daha fındıksı, tarçının güzel biçimde pekiştirdiği bir
sıcaklıkla yüklüydü.`, `Saytad'da, Cevizli Ev Usulü Baklavamızı özenli bir Anadolu evinde yapıldığı biçimde
hazırlayarak bu geleneği onurlandırıyoruz — kalın yufka katları, taze cevizler, sade
bir baharat, her şeyi cevizi bastırmadan bir araya getiren yeterince tatlı bir şerbet.
Gaziantep baklavası olmaya çalışmıyor. Farklı bir şey: farklı türde bir lezzet.`, `Bu aynı zamanda fiyat olarak en erişilebilir ürünümüzdür — kalitesiz olduğu için değil,
ceviz tarifi cömertlik ve sadelik geleneğini yansıttığı için. Her gün diğer ürünlerimize
gösterdiğimiz aynı özen ve dürüstlükle taze yapılır. Cevizli baklavasıyla büyüyenler
onu hemen tanır. İlk kez tadanlar ise çoğunlukla sunduğumuz her şeyin en sıcak karşılayan
olanını bulmaktadır.`], en: [`Long before Gaziantep baklava became internationally renowned, walnut baklava was the
sweet of choice across the Anatolian heartland. Made in home kitchens with whatever
ingredients were available — local walnuts, village wheat flour, a light syrup — it was
a celebration food that did not require imported luxuries. The flavour it produced was
different from the pistachio versions: earthier, nuttier, with a warmth that cinnamon
amplified beautifully.`, `At Saytad, we honour this tradition by making our Walnut Home-Style Baklava the way
it would have been made in a careful Anatolian home — thick layers of phyllo, fresh
walnuts, a simple spicing, and a syrup that is just sweet enough to bring everything
together without overwhelming the walnut. It is not trying to be a Gaziantep baklava.
It is something else: a different kind of delicious.`, `This is also our most accessible product by price — not because it is lesser in quality,
but because the walnut recipe reflects a tradition of generosity and simplicity. We make
it fresh daily with the same care and integrity we bring to all our products. Those who
grew up with walnut baklava will recognise it immediately. Those tasting it for the first
time often find it the most immediately comforting of everything we offer.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `3 Gün`, en: `3 Days` }, note: { tr: `Serin, kuru ve güneş almayan bir yerde saklayın`, en: `Store in a cool, dry place away from direct sunlight` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `10 Güne Kadar`, en: `Up to 10 Days` }, note: { tr: `Raf ömrünü uzatır ancak lezzeti zayıflatır — servis etmeden önce 30 dakika oda sıcaklığında bekletin`, en: `Extends life but dulls flavour — always bring to room temperature 30 min before serving` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, yufka katlarının ve ceviz dolgusunun dokusunu bozar`, en: `Freezing alters the texture of the phyllo layers and the walnut filling` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Tazelik ve gevreklik üretim günü en yüksek noktasındadır`, en: `Freshness and crunch are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Tatmaya`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Türkiye geneli kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "walnut-dilber-lip": {
    heroTag: { tr: `Baklava Koleksiyonu`, en: `Baklava Collection` },
    heroSubItalic: { tr: `Narin görünüm, güçlü lezzet`, en: `Delicate shape, bold flavour` },
    heroSub: { tr: `El yapımı. Kendine özgü dudak formunda geleneksel bir Türk baklavası.

Taze çekilmiş ceviz. Sade yağ. Güçlü, tatmin edici karakter.`, en: `El yapımı. A traditional Turkish baklava with a distinctive lip form.

Freshly crushed walnut. Pure ghee butter. Bold, satisfying character.` },
    longDesc: { tr: `Dilber Dudağı, Türk tatlı geleneğinin en şiirsel adlı tatlılarından biridir
ve en belirgin formlularından biri. Yufka hamuru, ortasında ceviz dolgusu
görünür biçimde kalacak şekilde bir çift dudağı andıran hafif bir eğriyle
katlanıp şekillendirilir. Sonuç, görsel olarak zarif ama lezzette hiç gösterişsiz
bir tatlıdır: ceviz güçlü ve belirgin, hamur çıtır, şerbet ise her şeyi bir
arada tutan tam dozda tatlılık sağlar. Sade yağ ve taze çekilmiş cevizle
hazırlanan geleneksel Saytad tarifi.`, en: `Dilber Dudağı — "beautiful lady's lips" in Turkish — is one of the more
poetically named sweets in Turkish confectionery, and one of the more
distinctive in form. Phyllo pastry is folded and shaped into a gentle curve
that resembles a pair of lips, with the walnut filling visible at the centre.
The result is a pastry that is visually elegant but entirely unpretentious in
flavour: the walnut is robust, the pastry crisp, and the syrup provides just
enough sweetness to hold everything together. Made with pure ghee butter and
freshly crushed walnut — a traditional Saytad recipe.` },
    badges: { tr: [`🍯 Sade yağ`, `💋 Kendine özgü dudak formu`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`🍯 Pure ghee butter`, `💋 Distinctive lip form`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `Geleneksel Türk tatlı formu — klasik Saytad tarifi`, en: `A traditional Turkish pastry form — classic Saytad recipe` } },
      { key: { tr: `Kuru yemiş`, en: `Nut filling` }, val: { tr: `Taze çekilmiş ceviz, tuzsuz — dolgu ve görünür özek`, en: `Freshly crushed walnuts — filling and visible centre` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Sade yağ — her yufka katına uygulanır, geleneksel zenginlik ve çıtırlık sağlar`, en: `Pure ghee butter (sade yağ) — applied to every layer of phyllo` } },
      { key: { tr: `Şerbet`, en: `Sherbet` }, val: { tr: `Klasik şeker şerbeti — pişirme sonrası dökülür, ideal emilim için`, en: `Classic sugar syrup — poured after baking for proper absorption` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar`, en: `2 days at room temperature · Up to 7 days refrigerated` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt genelinde kargo mevcut`, en: `Same-day within Istanbul · Nationwide shipping available` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka (phyllo hamuru)`, en: `Phyllo dough (yufka)` }, detail: { tr: `İnce katman hamur (buğday unu, su, tuz, yumurta akı, az miktarda nişasta)`, en: `Paper-thin sheets (wheat flour, water, salt, egg whites, a small amount of starch)` } },
      { name: { tr: `Sade yağ (tereyağı)`, en: `Pure ghee butter (sade yağ)` }, detail: { tr: `Her yufka katına uygulanan saflaştırılmış tereyağı — tatlıya karakteristik zenginliğini ve çıtırlığını kazandırır`, en: `Clarified butter applied to every layer of phyllo — gives the pastry its characteristic richness and crispness` } },
      { name: { tr: `Taze çekilmiş ceviz`, en: `Freshly crushed walnuts` }, detail: { tr: `Tuzsuz ceviz, taze çekilmiş — dolgu ve görünür özek`, en: `Unsalted walnuts, freshly crushed — filling and visible centre` } },
      { name: { tr: `Şeker şerbeti`, en: `Sugar syrup` }, detail: { tr: `Pancar şekeri, su, limon suyu — pişirme sonrası dökülür, ideal emilim için`, en: `Beet sugar, water, lemon juice — poured after baking for proper absorption` } },
    ],
    ingredientsNote: { tr: ``, en: `` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Kabuklu yemiş (ceviz)`, `⚠ Süt (sade yağ)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (walnut)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Fıstık yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No pistachio`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları fıstık, fındık ve diğer kabuklu yemişler içeren ürünler üretmektedir. Mutfaklarımız alerjen sertifikalı tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing pistachios, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities.` },
    featuresEyebrow: { tr: `Farkını Yaratan Özellikler`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Narin Form.`, en: `Delicate Form.` },
    featuresTitleEm: { tr: `Güçlü Karakter.`, en: `Bold Character.` },
    features: [
      { icon: `💋`, title: { tr: `Dudak Formu`, en: `The Lip Form` }, desc: { tr: `Dilber Dudağı, adını şeklinden alır: yufka hamuru, bir çift dudağı andıran
hafif ve simetrik bir eğriyle katlanır. Bu kendine özgü form yalnızca dekoratif
değildir — tatlının nasıl deneyimlendiğini belirler. Katlanan kenarlar fırında
çıtırlaşırken ortadaki ceviz dolgusu nemli ve yoğun kalır. Form, tek bir
parça içinde farklı dokular arasında doğal bir kontrast yaratır.`, en: `Dilber Dudağı takes its name from its shape: phyllo pastry folded into
a gentle, symmetrical curve that echoes the form of a pair of lips. This
distinctive shape is not merely decorative — it determines how the pastry
is experienced. The folded edges crisp up in the oven while the central
walnut filling remains moist and dense. The form creates a natural contrast
between the different textures within a single piece.` } },
      { icon: `🫘`, title: { tr: `Güçlü Ceviz Lezzeti`, en: `Bold Walnut Flavour` }, desc: { tr: `Dilber Dudağı'ndaki ceviz bir arka plan malzemesi değil — asıl yıldızdır.
Her sabah taze çekildiği için cevizler doğal yağlarını ve tatlı şerbete
karşı tatmin edici bir denge sağlayan hafif buruk, toprak tonlu özelliğini
korur. Fıstık bazlı tatlılar lezzette çoğunlukla narin olurken, Dilber
Dudağı iddialı ve güçlüdür.`, en: `The walnut in Dilber Dudağı is not a background ingredient — it is the
centrepiece. Freshly crushed each morning, the walnuts retain their natural
oils and the slightly bitter, earthy quality that makes walnut such a
satisfying counterpoint to sweet syrup. Where pistachio-based pastries
are often delicate in flavour, Dilber Dudağı is assertive and robust.` } },
      { icon: `🍯`, title: { tr: `Sade Yağ`, en: `Pure Ghee Butter` }, desc: { tr: `Dilber Dudağı, Saytad'ın klasik geleneğiyle sade yağ (tereyağı) kullanılarak
hazırlanan eski geleneksel Türk tatlı formlarından biridir. El açması yufkanın
her katına sade yağ uygulanır. Sade yağ, tatlıya derin zenginliğini ve
karakteristik altın çıtırlığını kazandırır — Türk tatlı geleneğinde nesiller
boyu bu formu tanımlayan nitelikler.`, en: `Dilber Dudağı is one of the older traditional forms of Turkish pastry,
made in the classic Saytad tradition with pure ghee butter (sade yağ)
applied to every layer of hand-stretched phyllo. The ghee gives the pastry
its characteristic deep richness and clean, golden crispness — qualities
that have defined this form for generations in Turkish confectionery.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Cevizli Dilber Dudağı:`, en: `Walnut Dilber Lip:` },
    storyTitleEm: { tr: `Zamansız Bir Türk Formu`, en: `A Timeless Turkish Form` },
    story: { tr: [`Türk tatlı formları arasında Dilber Dudağı, en tanınabilir olanlardan biridir —
ve kültürel çağrışım açısından en zenginlerinden biri. Adı kabaca "güzel hanımın
dudakları" anlamına gelir; eğrili, simetrik formuna yapılan bir göndermedir.
Ciddi bir ürün için neşeli bir isimdir: her şeyden önce güçlü ceviz lezzetini
ve doku kontrastını ön plana çıkaran bir tatlı.`, `Saytad'da Cevizli Dilber Dudağı, el açması yufkadan yapılır; taze çekilmiş ceviz
dolgusu etrafında karakteristik dudak formuna getirilir. Her yufka katına sade yağ
uygulanır. Altın rengi alana kadar pişirildikten sonra şeker şerbeti parçaların
üzerine dökülerek her parçaya karakteristik tatlılığını ve nemini verir.`, `Sonuç, Türk tatlı geleneğini tümüyle onurlandıran bir ürüntür: güçlü ceviz lezzeti,
narin dudak formu ve yalnızca sade yağın sağlayabileceği zenginlik. Standart baklava
yelpazesinin dışında farklı bir şey arayanlar için Cevizli Dilber Dudağı, Türk
tatlı geleneğinin genişliğine mükemmel bir giriştir.`], en: [`Of all the shapes in Turkish pastry, Dilber Dudağı is among the most immediately
recognisable — and among the most loaded with cultural association. The name
translates roughly as "beautiful lady's lips," a reference to its curved, symmetrical
form. It is a playful name for a serious product: a pastry that prioritises bold
walnut flavour and textural contrast above all else.`, `At Saytad, the Walnut Dilber Lip is made from hand-stretched phyllo, shaped into
the characteristic lip form around a freshly crushed walnut filling. Pure ghee butter
(sade yağ) is applied to every layer before baking. After baking to a golden colour,
sugar syrup is poured over the pieces and allowed to soak through, giving each piece
its characteristic sweetness and moisture.`, `The result is a product that honours the full tradition of Turkish pastry-making:
bold walnut flavour, delicate lip form, and the richness that only pure ghee butter
can bring. For those looking for something different from the standard baklava range,
the Walnut Dilber Lip is an excellent introduction to the breadth of Turkish pastry tradition.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Güne Kadar`, en: `Up to 2 Days` }, note: { tr: `Doğrudan güneş ışığından uzak, serin ve kuru bir yerde saklayın. Oda sıcaklığında en fazla 2 gün içinde tüketin`, en: `Store in a cool, dry place away from direct sunlight. Best consumed within 2 days at room temperature` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Buzdolabı raf ömrünü uzatır — en iyi çıtırlık için servis öncesi oda sıcaklığına gelmesini bekleyin`, en: `Refrigeration extends shelf life — allow to come to room temperature before serving for best crunch` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, narin yufka hamurunun dokusunu etkiler ve şerbetin kıvamını bozar`, en: `Freezing affects the texture of the delicate phyllo pastry and alters the consistency of the syrup` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Hamur çıtırlığı ve ceviz tazeliği üretim günü en yüksek düzeydedir`, en: `Pastry crispness and walnut freshness are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat · Yurt genelinde kargo mevcut.

Büyüleyici ve özgün bir hediye — kurumsal ve toplu siparişler memnuniyetle karşılanır.`, en: `Same-day delivery within Istanbul · Nationwide shipping available.

A charming, distinctive gift — corporate and bulk orders welcome.` },
  },
  "pistachio-plain-kadayif": {
    heroTag: { tr: `Kadayıf Koleksiyonu`, en: `Kadayıf Collection` },
    heroSubItalic: { tr: `Altın teller, canlı fıstıklar`, en: `Golden threads, vivid pistachios` },
    heroSub: { tr: `Geleneksel bakır tavada pişirilmiş tel kadayıf.

Taş değirmende öğütülmüş Gaziantep fıstığı. Saf sadeyağ. Bir Gaziantep klasiği.`, en: `Shredded wheat strands cooked on traditional copper pans.

Stone-ground Gaziantep pistachios. Pure ghee butter. A Gaziantep staple.` },
    longDesc: { tr: `Kadayıf, Gaziantep'in tatlı geleneğinde baklava kadar köklü bir yere sahiptir. Düz
Kadayıf, bu geleneğin en saf ifadesidir: ince tel kadayıf geleneksel bakır tavalara
yayılır, taş değirmende öğütülmüş Gaziantep fıstığı ve saf sadeyağıyla bol bol
katlanır, altı derin altın rengine ve çıtır kıvamına kavuşana kadar yavaşça pişirilir.
Hafif şerbetle tamamlanıp üstü taze fıstıkla süslenerek sunulan bu ürün, dürüst
ustalığın ve eşsiz lezzetin ifadesidir.`, en: `Kadayıf — the world of shredded wheat pastry — is as central to Gaziantep's sweet
tradition as baklava itself. The Plain Kadayıf is its purest expression: fine strands
of shredded wheat are spread across traditional copper pans, layered generously with
stone-ground Gaziantep pistachios and pure ghee butter, and cooked slowly until the
bottom layer achieves a deep golden crispness while the top remains softer. Finished
with a light syrup and topped with more vibrant green pistachios, it is a product of
honest craftsmanship and exceptional flavour.
Every piece is style.` },
    badges: { tr: [`🌿 Katkısız`, `🧈 Saf sadeyağ`, `🫙 Günlük taze`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, Gaziantep tarifine göre`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş değirmende öğütülmüş Gaziantep (Antep) fıstığı — dolgu ve üst süsleme`, en: `Stone-ground Gaziantep (Antep) pistachios — in filling and topping` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf sadeyağ (arıtılmış tereyağı), bitkisel yağ kullanılmaz`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Düz kadayıf — bakır tavada pişirilmiş, çıtır alt kat, yumuşak üst kat`, en: `Flat layered kadayıf (düz) — cooked on copper pan, crispy base, softer top` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar (oda sıcaklığı önerilir)`, en: `2 days at room temp · Up to 7 days refrigerated (room temperature preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Türkiye geneli kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Tel kadayıf`, en: `Tel kadayıf (shredded wheat)` }, detail: { tr: `İnce tel kadayıf hamuru (buğday unu, su, tuz, yumurta akı)`, en: `Fine shredded wheat strands (wheat flour, water, salt, egg whites)` } },
      { name: { tr: `Saf sadeyağ`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş değirmende öğütülmüş, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız — dolgu ve süsleme`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted — used in filling and as topping` } },
      { name: { tr: `Şeker şurubu`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen yerel pancar şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Tedarik notu: Saytad ürünlerinin hiçbirinde yapay aroma, renklendirici veya koruyucu kullanılmaz. Fıstıklar her sezon doğrudan Gaziantep'ten temin edilir. Tüm bileşenler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used. Pistachios are sourced fresh each season directly from Gaziantep. All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu yemiş (fıstık)`, `⚠ Süt (sadeyağ)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Yapay katkı yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfaklarında ceviz, fındık ve diğer sert kabuklu yemişler içeren ürünler de üretilmektedir. Mutfaklarımız sertifikalı alerjen-free tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Neden Fark Yaratıyor?`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Bakır Tavanın`, en: `The Copper Pan` },
    featuresTitleEm: { tr: `Farkı`, en: `Difference` },
    features: [
      { icon: `🍳`, title: { tr: `Geleneksel Bakır Tava Pişirimi`, en: `Traditional Copper Pan Cooking` }, desc: { tr: `Bakır tava, otantik kadayıf yapımının merkezindedir — homojen ısı dağılımı, üst kısmı
daha yumuşak kalırken karakteristik çıtır alt katı oluşturur. Bu, modern ekipmanlarla
yeniden üretilemeyen ve bu ürünü tanımlayan bir tekniktir.`, en: `The copper pan is central to authentic kadayıf preparation — its even heat
distribution creates the characteristic crispy base layer while the top
remains softer, producing the textural contrast that defines this product.
It is a technique that cannot be replicated with modern equipment.` } },
      { icon: `🥜`, title: { tr: `İçinde ve Üstünde Fıstık`, en: `Pistachios Inside and Out` }, desc: { tr: `Taş değirmende öğütülmüş Gaziantep fıstığı her dilimde iki kez karşınıza çıkar —
kadayıf katları arasında bol dolgu olarak ve ürünü anında tanımlayan canlı yeşil
bir süsleme olarak. Bu çift varlık, her ısırıkta fıstık aromasını garanti eder.`, en: `Stone-ground Gaziantep pistachios appear twice in every piece — as a generous
filling between the kadayıf layers, and as a vivid green topping that identifies
the product immediately. The double presence ensures pistachio flavour in
every single bite.` } },
      { icon: `✨`, title: { tr: `Çift Doku Deneyimi`, en: `Dual Texture Experience` }, desc: { tr: `Her yerde eşit çıtırlığa sahip baklavaların aksine, Düz Kadayıf benzersiz bir doku
kontrastı sunar: alt kısmı doğrudan tava temasından derin çıtır bir hal alırken
üst katlar yumuşak ve elastiktir — her ısırık tam bir doku deneyimidir.`, en: `Unlike baklava which has uniform crispness throughout, Plain Kadayıf offers
a unique textural contrast: the base is deeply crunchy from direct pan contact,
while the upper layers are yielding and tender — making each bite a complete
textural experience.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Kadayıf:`, en: `Kadayıf:` },
    storyTitleEm: { tr: `Gaziantep'in Diğer Yüzü`, en: `The Other Side of Gaziantep` },
    story: { tr: [`Baklava Gaziantep'in tatlı kültürünün uluslararası tanınan yüzü haline gelirken, kadayıf
şehrin evde yediği şeydir. Kurutulup şeritlenmiş ince buğday hamur ipliklerinden yapılan
ve ürüne kendine has dokusunu kazandıran kadayıf, baklava ile karşılaştırıldığında
farklı bir beceri seti gerektirir. Baklava kâğıt inceliğinde yufka katlamada sabır
gerektirirken, kadayıf tavada hassasiyet ister — tabanın doğru renk ve çıtırlığa
ne zaman ulaştığını bilmek.`, `Saytad'da taze tel kadayıfı geleneksel bakır tavalarımıza yayıyor, taş değirmende
öğütülmüş Gaziantep fıstığı ve bol saf sadeyağıyla katıyor, taban derin altın
rengine kavuşana kadar kontrollü ateşte pişiriyoruz. Tepsi daha sonra çevriliyor —
karamelize alt yüzeyi ortaya çıkaran ustaca bir manevra — ve şerbet, teller ağır ya
da ıslak kalmadan eşit emilim sağlayacak biçimde dikkatlice uygulanıyor.`, `Sonuç, renk, çıtırlık ve aroma sağlayan taze fıstık tacıyla sunulur — usulüne uygun
yapılmış bir Fıstıklı Kadayıf'ın görsel imzası. Gaziantep tatlısıyla büyüyen
müşterilerimiz arasında en sevilen ürünlerimizden biridir ve kadayıfla ilk kez
tanışanları da sürekli şaşırtmaktadır.`], en: [`While baklava has become the internationally recognised face of Gaziantep's sweet culture,
kadayıf is what the city eats at home. Made from fine strands of wheat dough that are
dried and shredded — giving the product its distinctive texture — kadayıf requires a
different set of skills from baklava. Where baklava demands patience in layering paper-thin
phyllo, kadayıf demands precision in the pan — knowing when the base has achieved the
right colour and crunch without burning.`, `At Saytad, we spread fresh tel kadayıf across our traditional copper pans, layer it with
stone-ground Gaziantep pistachios and generous pure ghee, and cook it at controlled heat
until the base is deeply golden. The tray is then flipped — a skilled manoeuvre that
reveals the caramelised underside — and the syrup is applied carefully to allow even
absorption without making the strands heavy or soggy.`, `The result is finished with a crown of fresh pistachios that provide colour, crunch,
and flavour — the visual signature of a properly made Pistachio Kadayıf. It is one of
our most beloved products among customers who grew up with Gaziantep sweets, and
consistently surprises those encountering kadayıf for the first time.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Gün`, en: `2 Days` }, note: { tr: `Serin, kuru yerde saklayın — kadayıf baklavadan daha çabuk yumuşar`, en: `Store in a cool, dry place — kadayıf softens faster than baklava` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Servis etmeden önce dokuyu yeniden canlandırmak için 30 dakika oda sıcaklığında bekletin`, en: `Bring to room temperature 30 min before serving to restore texture` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, tel kadayıf dokusunu belirgin biçimde bozar`, en: `Freezing compromises the shredded wheat texture significantly` } },
      { icon: `🕘`, title: { tr: `En İyi Hali`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Alt kısmın çıtırlığı üretim günü en yüksek noktasındadır`, en: `The base crispness is at its finest on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Ver`, en: `Order Today` },
    ctaTitle: { tr: `Tatmaya`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Türkiye geneli kargo mevcut.

Kurumsal ve toplu siparişler için bizimle iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "walnut-plain-kadayif": {
    heroTag: { tr: `Kadayıf Koleksiyonu`, en: `Kadayıf Collection` },
    heroSubItalic: { tr: `Altın teller, derin ceviz lezzeti`, en: `Golden threads, earthy walnut depth` },
    heroSub: { tr: `El yapımı. Geleneksel bakır tavada pişirilmiş tel kadayıf.

Taze çekilmiş Türk cevizi. Saf tereyağı. Tatmin edici, toprak kokusu taşıyan bir tatlı.`, en: `El yapımı. Shredded wheat strands cooked on traditional copper pans.

Freshly chopped Turkish walnuts. Pure ghee butter. Rich, grounding sweetness.` },
    longDesc: { tr: `Cevizli Kadayıf, Gaziantep'in tel hamur geleneğinin daha toprak kokusu taşıyan,
daha sade ifadesidir. Bakır tavada pişirilen tel kadayıf strands, taze çekilmiş
Türk cevizi ve saf tereyağıyla bolca katmanlanır; derin altın renkli bir kıvama
ulaşana dek kısık ateşte bırakılır. Ardından dikkatlice uygulanan şerbetle
buluşur. Sonuç; syrup'ın tatlılığıyla cevizin hafif acımsı dokusu arasında
mükemmel bir denge kuran, her lokmada tatmin eden bir lezzettir.
Taş fırın geleneğiyle pişirilir.`, en: `Walnut Kadayıf is the earthier, more rustic expression of Gaziantep's shredded wheat
tradition. Where pistachio kadayıf dazzles with bright colour, the walnut version
rewards with depth — fine tel kadayıf strands cooked on copper pans until deeply
golden, filled generously with freshly chopped Turkish walnuts and pure ghee butter,
then finished with a balanced syrup. The result is a product with a rounder, more
complex sweetness and a satisfying, grounding flavour that has endured in Turkish
sweet culture for centuries.
Every piece is oven, stone, baked.` },
    badges: { tr: [`🌿 Koruyucu yok`, `🧈 Saf tereyağı`, `🫙 Her gün taze üretim`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilmektedir, geleneksel Gaziantep tarifi`, en: `Made in Istanbul, traditional Gaziantep recipe` } },
      { key: { tr: `Ceviz`, en: `Walnut` }, val: { tr: `Taze çekilmiş Türk cevizi — bol miktarda iç dolgu`, en: `Freshly chopped Turkish walnuts — generous filling throughout` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf tereyağı (sadeyağ), bitkisel yağ yok`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Düz katmanlı kadayıf — bakır tavada pişirilmiş, çıtır taban, yumuşak üst`, en: `Flat layered kadayıf (düz) — cooked on copper pan, crispy base, softer top` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar (oda sıcaklığı tercih edilir)`, en: `2 days at room temp · Up to 7 days refrigerated (room temperature preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Tüm Türkiye'ye kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Tel kadayıf`, en: `Tel kadayıf (shredded wheat)` }, detail: { tr: `İnce tel hamur (buğday unu, su, tuz, yumurta akı)`, en: `Fine shredded wheat strands (wheat flour, water, salt, egg whites)` } },
      { name: { tr: `Saf tereyağı`, en: `Pure ghee butter` }, detail: { tr: `%100 sadeyağ, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Türk cevizi`, en: `Turkish walnuts` }, detail: { tr: `Taze çekilmiş, tuzsuz — kadayıf katmanları arasında bol dolgu`, en: `Freshly chopped, unsalted — generous filling between kadayıf layers` } },
      { name: { tr: `Şeker şerbet`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen şeker pancarı şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Yapay aroma, renklendirici veya koruyucu madde kullanılmamaktadır. Cevizler her sezon taze temin edilmektedir. Tüm malzemeler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used. Walnuts are sourced fresh each season. All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu meyve (ceviz)`, `⚠ Süt ürünü (tereyağı)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (walnut)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları fıstık, fındık ve diğer sert kabuklu meyvelerin kullanıldığı ürünler de üretmektedir. Mutfaklarımız sertifikalı alerjen-serbest tesis değildir. Ağır sert kabuklu meyve alerjisi olan müşterilerimizin bunu göz önünde bulundurması gerekmektedir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing pistachios, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Farkı Yaratan`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Cevizli Kadayıfın`, en: `Walnut Kadayıf's` },
    featuresTitleEm: { tr: `Derin Sesi`, en: `Quiet Depth` },
    features: [
      { icon: `🍳`, title: { tr: `Bakır Tava Ustalığı`, en: `Copper Pan Craftsmanship` }, desc: { tr: `Tüm kadayıf ürünlerimizde olduğu gibi bu versiyonu da geleneksel bakır
tavalarda pişirilmektedir. Bakırın eşit ısı dağılımı, karakteristik çıtır
tabanı ve yumuşak üst katmanı oluşturur; modern ekipmanlarla elde
edilemeyen hafif bir karamelizasyon sağlar.`, en: `Like all great kadayıf, this version is cooked on traditional copper pans that
distribute heat evenly, creating the characteristic crispy base and tender upper
layer. The copper surface imparts a gentle caramelisation that cannot be
reproduced with modern bakeware.` } },
      { icon: `🌰`, title: { tr: `Bol Ceviz Dolgusu`, en: `Generous Walnut Filling` }, desc: { tr: `Taze çekilmiş Türk cevizleri, kadayıf telleri arasına bolca katmanlanır.
Her lokmada belirgin olan hafif acımsı, toprak kokusu; şerbetin tatlılığı
ve tereyağının zenginliği ile mükemmel bir denge kurar.`, en: `Freshly chopped Turkish walnuts are layered generously between the kadayıf strands,
ensuring that every bite carries their distinctive earthy, slightly bitter edge —
a perfect counterpoint to the sweetness of the syrup and the richness of the ghee.` } },
      { icon: `✨`, title: { tr: `Daha Derin, Yuvarlak Bir Tatlılık`, en: `Deeper, Rounder Sweetness` }, desc: { tr: `Ceviz, şerbetle fıstıktan farklı etkileşir — daha fazla emerek bir sıcaklık
ve derinlik ortaya koyar. Bu özellik Cevizli Kadayıfı gösteriş yerine
karakter arayanların tercihi haline getirir; tatlandırıcı değil, doyurucu
bir tatlıdır.`, en: `Walnuts interact with syrup differently from pistachios — they absorb more,
releasing a warmth and depth that makes Walnut Kadayıf a more grounding,
comforting product. It is the choice of those who prefer their sweets with
character and substance over spectacle.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Cevizin Geleneği:`, en: `The Walnut Tradition:` },
    storyTitleEm: { tr: `Her Telde Sıcaklık`, en: `Comfort in Every Strand` },
    story: { tr: [`Fıstık, Gaziantep tatlı kültürünün uluslararası sembolü haline gelmeden önce ceviz,
Anadolu'daki evlerde ve küçük dükkânlarda tercih edilen dolgu malzemesiydi.
Cevizli Kadayıf bu daha eski, daha sessiz geleneği taşır — törenden çok günlük
yaşama ait, sevilirliğini erişilebilirliğinden ve dürüstlüğünden alan bir ürün.`, `Saytad'da Cevizli Kadayıfı, tüm tel hamur ürünlerimizde kullandığımız yöntemle
hazırlıyoruz: Taze tel kadayıf bakır tavalara serilir, taze çekilmiş Türk cevizi
ve saf tereyağıyla katmanlanır; taban derin ve eşit altın rengini alana kadar
pişirilir. Ardından tepsi çevrilir ve şerbet dikkatle uygulanır — telleri
birbirine bağlayacak ve ceviz dolgusunu tamamlayacak kadar, ama bastırmayacak
kadar.`, `Ortaya çıkan ürün sessiz bir özgüvene sahiptir: süslü değil, karmaşık değil,
ama derinden tatmin edicidir. Cevizli Kadayıf'la büyüyen müşterilerimiz çoğu
zaman onu bir Türk büyükannesinin mutfağının tadı olarak tanımlar — sıcak,
tanıdık ve gizli bir şey olmadan yapılmış.`], en: [`Before pistachios became the internationally celebrated symbol of Gaziantep's sweet
culture, walnuts were the filling of choice in homes and small shops across Anatolia.
Walnut Kadayıf carries that older, quieter tradition — a product rooted in the everyday
rather than the ceremonial, and beloved precisely for its accessibility and honesty.`, `At Saytad, we prepare Walnut Kadayıf the same way we do all of our shredded wheat
products: fresh tel kadayıf is spread across copper pans, layered with freshly chopped
Turkish walnuts and pure ghee, and cooked until the base achieves a deep, even golden
colour. The tray is then flipped and syrup is applied with care — just enough to bind
the strands and complement the walnut filling without overwhelming it.`, `The result is a product of quiet confidence: not decorated, not elaborate, but deeply
satisfying. Customers who grew up with Walnut Kadayıf often describe it as the taste
of a Turkish grandmother's kitchen — warm, familiar, and made with nothing hidden.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Gün`, en: `2 Days` }, note: { tr: `Serin ve kuru ortamda saklayın — kadayıf baklavadan daha hızlı yumuşar`, en: `Store in a cool, dry place — kadayıf softens faster than baklava` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Servis etmeden 30 dakika önce oda sıcaklığına getirin`, en: `Bring to room temperature 30 min before serving to restore texture` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Tavsiye edilmez`, en: `Not advised` }, note: { tr: `Dondurma tel hamur dokusunu önemli ölçüde bozar`, en: `Freezing compromises the shredded wheat texture significantly` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Taban çıtırlığı üretim günü en üst düzeydedir`, en: `The base crispness is at its finest on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Verin`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Tüm Türkiye'ye kargo imkânı.

Kurumsal ve toplu siparişler için iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "pistachio-hasir-kadayif": {
    heroTag: { tr: `Kadayıf Koleksiyonu`, en: `Kadayıf Collection` },
    heroSubItalic: { tr: `Örgülü teller, fıstık dolu lezzet`, en: `Wicker-woven, pistachio-filled` },
    heroSub: { tr: `El yapımı. Gaziantep fıstığıyla doldurulmuş hasır örgü biçiminde tel kadayıf.

Saf tereyağı. Kadayıf geleneğinin nadir ve görsel açıdan etkileyici bir ifadesi.`, en: `Shredded wheat strands woven into a lattice form and filled with Gaziantep pistachios.

Pure ghee butter. A rarer, more visually intricate expression of the kadayıf tradition.` },
    longDesc: { tr: `Hasır, Türkçede saz veya hasırdan örülmüş geleneksel dokuma malzemeyi ifade eder.
Kadayıfa uygulandığında, ince tel hamur şeritlerinin düz bir tabakaya değil;
yapılandırılmış, örgülü bir forma dönüştürüldüğü bir hazırlığı tanımlar.
Taş öğütme Gaziantep fıstığıyla bolca doldurulmuş bu kadayıf; her lokmada daha
karmaşık çıtırlık, daha fazla doku çeşitliliği ve yenirken olduğu kadar bakarken
de hoş bir görsellik sunar.`, en: `Hasır — meaning wicker or lattice — describes a more elaborate preparation of kadayıf
in which the shredded wheat strands are woven or layered to create a structured,
patterned surface rather than the flat, uniform base of düz kadayıf. Filled generously
with stone-ground Gaziantep pistachios and pure ghee butter, Hasır Kadayıf offers
a more complex crunch in every bite — more surface area, more texture variation,
and a visual elegance that makes it as compelling to look at as it is to eat.` },
    badges: { tr: [`🌿 Koruyucu yok`, `🧈 Saf tereyağı`, `🫙 Her gün taze üretim`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilmektedir, Gaziantep tarifi`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş öğütme, erken hasat Antep fıstığı — bol dolgu ve süsleme`, en: `Stone-ground Gaziantep (Antep) pistachios — generous filling and topping` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf tereyağı (sadeyağ), bitkisel yağ yok`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Hasır örgü — düz kadayıfa kıyasla daha dokulu yüzey ve çıtırlık`, en: `Hasır (lattice/wicker weave) — more textured surface and crunch than flat düz style` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar (oda sıcaklığı tercih edilir)`, en: `2 days at room temp · Up to 7 days refrigerated (room temperature preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Tüm Türkiye'ye kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Tel kadayıf`, en: `Tel kadayıf (shredded wheat)` }, detail: { tr: `İnce tel hamur (buğday unu, su, tuz, yumurta akı)`, en: `Fine shredded wheat strands (wheat flour, water, salt, egg whites)` } },
      { name: { tr: `Saf tereyağı`, en: `Pure ghee butter` }, detail: { tr: `%100 sadeyağ, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız — dolgu ve süslemede kullanılır`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted — used in filling and as topping` } },
      { name: { tr: `Şeker şerbet`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen şeker pancarı şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Yapay aroma, renklendirici veya koruyucu madde kullanılmamaktadır. Fıstıklar her sezon doğrudan Gaziantep'ten taze temin edilmektedir. Tüm malzemeler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used. Pistachios are sourced fresh each season directly from Gaziantep. All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu meyve (fıstık)`, `⚠ Süt ürünü (tereyağı)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer sert kabuklu meyvelerin kullanıldığı ürünler de üretmektedir. Mutfaklarımız sertifikalı alerjen-serbest tesis değildir. Ağır sert kabuklu meyve alerjisi olan müşterilerimizin bunu göz önünde bulundurması gerekmektedir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Farkı Yaratan`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Hasır'ın`, en: `Hasır's` },
    featuresTitleEm: { tr: `Özgün Örgüsü`, en: `Distinctive Weave` },
    features: [
      { icon: `🧺`, title: { tr: `Hasır Örgü Yapısı`, en: `Lattice Weave Structure` }, desc: { tr: `Düz kadayıfın aksine hasır formunda tel hamur şeritleri yapılandırılmış bir
kafes biçiminde örülür ya da katmanlanır. Bu, ısıya maruz kalan yüzey alanını
artırır — sonuç; daha eşit, daha belirgin bir çıtırlık ve görsel açıdan
çarpıcı bir görünümdür.`, en: `Unlike flat düz kadayıf, the hasır form involves weaving or layering the shredded
wheat strands into a structured lattice. This creates more surface area exposed
to heat — resulting in a more even, more pronounced crunch throughout, and a
visually striking cross-hatch appearance.` } },
      { icon: `🥜`, title: { tr: `Her Katmanda Fıstık`, en: `Pistachio at Every Level` }, desc: { tr: `Taş öğütme Gaziantep fıstıkları, dolgu olarak hasır katmanlarına işlenir ve
üzerine taze canlı yeşil fıstık süsleme olarak eklenir. Örgü yapısı sayesinde
fıstıklar dokulardan görünür hâle gelir; bu da dolgunun görsel kimliğin
ayrılmaz bir parçası olmasını sağlar.`, en: `Stone-ground Gaziantep pistachios are integrated throughout the hasır layers as
filling, and applied fresh as a vivid green topping. The lattice structure means
pistachio peeks through the weave, making the filling visible and integral
to the product's visual identity.` } },
      { icon: `✨`, title: { tr: `Maksimum Doku Karmaşıklığı`, en: `Maximum Texture Complexity` }, desc: { tr: `Hasır örgü, şerbetin düz bir yüzeye kıyasla farklı şekilde tutulduğu cep ve
sırtlar oluşturur. Bazı bölgeler daha çıtır kalırken diğerleri daha şerbetli
olur. Bu değişkenlik, her lokmada farklı keşfeden ve dikkati ödüllendiren
daha karmaşık bir yeme deneyimi yaratır.`, en: `The wicker weave creates pockets and ridges that hold syrup differently from a
flat surface — some areas remain crisper, others more syrup-rich. This variation
produces a more complex, layered eating experience that rewards attention
with each successive bite.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Hasır:`, en: `Hasır:` },
    storyTitleEm: { tr: `Örgünün Sanatı`, en: `The Art of the Wicker Weave` },
    story: { tr: [`Türkçede hasır, sazdan ya da saptan örülmüş geleneksel dokuma malzemeyi ifade eder.
Kadayıfa uygulandığında, ince tel hamur şeritlerinin basit bir düz tabakadan
yapılandırılmış, örgülü bir forma dönüştürüldüğü bir hazırlığı tanımlar. Teknik,
standart düz kadayıfa kıyasla daha fazla beceri ve sabır gerektirir; sonuç hem
görsel hem de dokusal açıdan daha karmaşıktır.`, `Saytad'da Hasır Kadayıfımızı, tel kadayıf şeritlerini pişirmeden önce
dikkatle karakteristik örgü biçimine getirerek hazırlıyoruz. Bu süreç, eşit ısı
dağılımını ve tüm yüzeyde tutarlı çıtırlığı sağlamak için hassasiyetle uygulanmalıdır.
Bol Gaziantep fıstığı dolguya işlenerek saf tereyağıyla derin altın rengini alana
kadar pişirilir.`, `Şerbetin titizlikle uygulanması ve parlak fıstık süslemesiyle tamamlanan Hasır Kadayıf;
düz muadilinden hem daha rustik hem de daha rafine bir görünüme sahiptir. Görür görmez
içinde özenli bir emeğin bulunduğunu hissettiren; meraklı damakları ödüllendiren
bir üründür.`], en: [`The word hasır in Turkish refers to wicker or matting — the traditional woven material
made from reeds or straw. Applied to kadayıf, it describes a preparation that transforms
the fine shredded wheat strands from a simple flat layer into a structured, woven form.
The technique requires more skill and patience than standard düz kadayıf, and the result
is both visually and texturally more complex.`, `At Saytad, our Hasır Kadayıf is made by carefully arranging the tel kadayıf strands
into their characteristic lattice form before cooking — a process that must be done
with precision to ensure even heat distribution and a consistent crunch throughout.
Generous Gaziantep pistachios are worked into the filling, and the whole piece is
cooked in pure ghee until deeply golden.`, `Finished with a precise application of syrup and a bright pistachio topping, Hasır
Kadayıf is at once more rustic and more refined than its flat counterpart. It is a
product that rewards the curious palate — one that signals, from the moment you see
it, that something more considered has been made.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Gün`, en: `2 Days` }, note: { tr: `Serin ve kuru ortamda saklayın — kadayıf baklavadan daha hızlı yumuşar`, en: `Store in a cool, dry place — kadayıf softens faster than baklava` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Servis etmeden 30 dakika önce oda sıcaklığına getirin`, en: `Bring to room temperature 30 min before serving to restore texture` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Tavsiye edilmez`, en: `Not advised` }, note: { tr: `Dondurma tel hamur dokusunu önemli ölçüde bozar`, en: `Freezing compromises the shredded wheat texture significantly` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Örgü çıtırlığı üretim günü en üst düzeydedir`, en: `The lattice crispness is at its finest on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Verin`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Tüm Türkiye'ye kargo imkânı.

Kurumsal ve toplu siparişler için iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "burma-kadayif": {
    heroTag: { tr: `Kadayıf Koleksiyonu`, en: `Kadayıf Collection` },
    heroSubItalic: { tr: `Bükülmüş, sarılmış, fıstıkla dolu`, en: `Twisted, rolled, pistachio-filled` },
    heroSub: { tr: `El yapımı. Fıstık çekirdeğinin etrafına sıkıca sarılmış tel kadayıf.

Saf tereyağı. Eşit çıtırlık. Yapısal olarak cesur bir kadayıf formu.`, en: `El yapımı. Shredded wheat twisted and rolled around a pistachio core.

Pure ghee butter. Uniform crunch. A bold, structured kadayıf form.` },
    longDesc: { tr: `Burma, Türkçede bükülmüş veya burulmuş anlamına gelir — ve bu kelime kadayıf
ailesinin en görsel açıdan etkileyici üyesini tam olarak tanımlar. Taze tel kadayıf
şeritleri, taş öğütme Gaziantep fıstığıyla bolca doldurulduktan sonra sıkıca sarılıp
bükülerek saf tereyağında pişirilir. Bu teknik, her parçanın tüm yüzeyinde eşit
çıtırlık sağlar. Büyük bir tepsiye sıra sıra dizilmiş Burma Kadayıf, tatmak
kadar bakmak için de ilgi çekicidir.`, en: `Burma — meaning twisted or wrung in Turkish — describes one of the most visually
striking forms of kadayıf. Fresh tel kadayıf strands are spread, filled generously
with stone-ground Gaziantep pistachios, and then tightly twisted and rolled into
compact cylinders before being cooked in pure ghee. The rolling creates a uniform
crunch throughout the entire piece — no soft centre, no gradation — and the tightly
packed pistachio core ensures that every bite delivers a concentrated hit of flavour.
Served in rows, Burma Kadayıf is as arresting to look at as it is to eat.` },
    badges: { tr: [`🌿 Koruyucu yok`, `🧈 Saf tereyağı`, `🫙 Her gün taze üretim`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilmektedir, geleneksel Gaziantep tarifi`, en: `Made in Istanbul, traditional Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş öğütme Antep fıstığı — her sarmanın içine yoğun dolgu olarak yerleştirilmiş`, en: `Stone-ground Gaziantep (Antep) pistachios — packed as core filling inside every roll` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf tereyağı (sadeyağ), bitkisel yağ yok`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Burma (bükülmüş sarma) — silindirik, eşit çıtırlık, her iki uçta görünür fıstık dolgu`, en: `Burma (twisted roll) — cylindrical, uniform crunch, pistachio core visible at both ends` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar (oda sıcaklığı tercih edilir)`, en: `2 days at room temp · Up to 7 days refrigerated (room temperature preferred)` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Tüm Türkiye'ye kargo`, en: `Same-day within Istanbul · Nationwide shipping` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Tel kadayıf`, en: `Tel kadayıf (shredded wheat)` }, detail: { tr: `İnce tel hamur (buğday unu, su, tuz, yumurta akı)`, en: `Fine shredded wheat strands (wheat flour, water, salt, egg whites)` } },
      { name: { tr: `Saf tereyağı`, en: `Pure ghee butter` }, detail: { tr: `%100 sadeyağ, ilave yağ yok`, en: `100% clarified cow's butter, no added oils` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı (Pistacia vera), tuzsuz ve kavurmasız — her sarmanın içine yoğun dolgu olarak yerleştirilmiş`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted and unroasted — tightly packed as core filling inside every roll` } },
      { name: { tr: `Şeker şerbet`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen şeker pancarı şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Kaynak notu: Yapay aroma, renklendirici veya koruyucu madde kullanılmamaktadır. Fıstıklar her sezon doğrudan Gaziantep'ten taze temin edilmektedir. Tüm malzemeler izlenebilirdir.`, en: `Note on sourcing: No artificial flavourings, colourings or preservatives are used. Pistachios are sourced fresh each season directly from Gaziantep. All ingredients are traceable.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu meyve (fıstık)`, `⚠ Süt ürünü (tereyağı)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer sert kabuklu meyvelerin kullanıldığı ürünler de üretmektedir. Mutfaklarımız sertifikalı alerjen-serbest tesis değildir. Ağır sert kabuklu meyve alerjisi olan müşterilerimizin bunu göz önünde bulundurması gerekmektedir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Farkı Yaratan`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Burma'nın`, en: `Burma's` },
    featuresTitleEm: { tr: `Cesur Mimarisi`, en: `Bold Architecture` },
    features: [
      { icon: `🌀`, title: { tr: `Bükme Tekniği`, en: `The Twist Technique` }, desc: { tr: `Burma Kadayıfın tanımlayıcı özelliği, pişirmeden önce kadayıf tellerinin
fıstık dolgunun etrafına sarılıp bükülmesidir. Bu teknik dolguyu içeride
kilitler ve eşit pişen düzgün bir silindir oluşturur; düz kadayıf stillerinde
görülen yumuşak üst yerine tüm yüzeyde tutarlı bir çıtırlık sağlar.`, en: `The defining characteristic of Burma Kadayıf is the rolling and twisting of
the kadayıf strands around the pistachio filling before cooking. This technique
seals the filling inside and creates a uniform cylinder that cooks evenly,
producing a consistent, all-over crunch rather than the softer top typical
of flat kadayıf styles.` } },
      { icon: `🥜`, title: { tr: `Yoğunlaştırılmış Fıstık Çekirdeği`, en: `Concentrated Pistachio Core` }, desc: { tr: `Fıstıklar katmanlar arasına dağıtılmak yerine Burma Kadayıfta her sarmanın
merkezine yoğun biçimde yerleştirilir. Bu yoğunlaşma, parçanın ortasından
alınan her lokmanın daha güçlü bir fıstık lezzeti vermesi anlamına gelir —
kadayıf kabuğu çıtırlık, çekirdek ise derinlik sağlar.`, en: `Rather than being distributed across layers, the pistachios in Burma Kadayıf
are packed tightly into the centre of each roll. This concentration means every
bite from the middle of the piece delivers a more intense pistachio flavour —
the kadayıf shell provides crunch, the core provides depth.` } },
      { icon: `✨`, title: { tr: `Baştan Sona Eşit Çıtırlık`, en: `Uniform Crunch Throughout` }, desc: { tr: `Sarmanın tüm yüzeyi pişirme sırasında ısıya maruz kaldığından Burma Kadayıf,
ilk lokmadan sonuna kadar dikkat çekici biçimde eşit bir çıtırlık elde eder.
Yumuşak üst yok, doku değişimi yok — yalnızca şerbet uygulamasından sonra
bile korunan tutarlı, tatmin edici bir çıtırlık.`, en: `Because the entire surface of the roll is exposed to heat during cooking, Burma
Kadayıf achieves a remarkably even crunch from first bite to last. There is no
soft top, no variation in texture — just a consistent, satisfying crispness
that holds well even after syrup application.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Burma:`, en: `Burma:` },
    storyTitleEm: { tr: `Yapı, Lezzetin Kendisidir`, en: `Structure as Flavour` },
    story: { tr: [`Düz ve hasır gibi düz kadayıf formları büyük bir levha olarak pişirilip ardından
porsiyonlanırken, Burma Kadayıf parça parça inşa edilir. Her sarma ayrı ayrı
şekillendirilir: bir miktar tel kadayıf düz bir yüzeye serilir, uzunluğu boyunca
bol fıstık yerleştirilir ve tüm parça dolguyu içine kilitlemek için sıkıca sarılıp
bükülür. Sarma işlemi hem beceri hem de hız gerektiren bir işlemdir — tel hamur,
pişirmenin telleri sertleştirmesinden önce hâlâ işlenebilir durumdayken şekillendirilmelidir.`, `Sarılmış parçalar tavaya sıkışık biçimde yerleştirilir ve saf tereyağında pişirilir.
Yağ, dış yüzeyin her teliyle eşit şekilde buluşur. Derin altın rengi ve çıtırlığa
ulaşınca çıkarılır; şerbet uygulanır — silindirik form, şerbetin havuzlanmadan eşit
dağılması için dikkatli bir uygulama gerektirdiğinden bu aşama da titizlik ister.`, `Ortaya çıkan sonuç, kadayıf ailesinin yapısal olarak en tatmin edici parçalarından
biridir — kompakt, güvenli ve ne olduğu konusunda hiçbir belirsizlik bırakmayan.
Her sarmanın iki ucundaki görünür fıstık hem görsel bir imza hem de her seferinde
gerçekleşen bir lezzet vaadidir.`], en: [`While flat kadayıf forms — düz and hasır — cook as a large sheet that is then
portioned, Burma Kadayıf is built piece by piece. Each roll is formed individually:
a portion of tel kadayıf is spread on a flat surface, a generous line of pistachio
is placed along its length, and the whole thing is tightly rolled, then twisted to
lock the filling inside. The rolling process is a matter of both skill and speed —
the shredded wheat must be worked while still pliable before cooking firms the strands.`, `The rolled pieces are placed tightly together in the pan and cooked in pure ghee,
absorbing the fat evenly across every strand of the outer surface. Once deeply golden
and crisp, they are removed and syrup is applied — a process that requires careful
judgement, as the cylindrical form means syrup must be applied to achieve even
penetration without pooling.`, `The result is one of the most structurally satisfying pieces in the kadayıf family —
compact, confident, and unambiguous about what it is. The exposed pistachio at both
ends of each roll is both a visual signature and a flavour promise that is always
delivered on.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Gün`, en: `2 Days` }, note: { tr: `Serin ve kuru ortamda saklayın — kadayıf baklavadan daha hızlı yumuşar`, en: `Store in a cool, dry place — kadayıf softens faster than baklava` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Servis etmeden 30 dakika önce oda sıcaklığına getirin`, en: `Bring to room temperature 30 min before serving to restore texture` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Tavsiye edilmez`, en: `Not advised` }, note: { tr: `Dondurma tel hamur dokusunu önemli ölçüde bozar`, en: `Freezing compromises the shredded wheat texture significantly` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Sarma çıtırlığı üretim günü en üst düzeydedir`, en: `The roll crispness is at its finest on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Verin`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Tüm Türkiye'ye kargo imkânı.

Kurumsal ve toplu siparişler için iletişime geçin.`, en: `Same-day delivery within Istanbul. Nationwide shipping available.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "bohca-kadayif": {
    heroTag: { tr: `Kadayıf Koleksiyonu`, en: `Kadayıf Collection` },
    heroSubItalic: { tr: `Sarılı, kremsi, fıstıkla dolu`, en: `Wrapped, creamy, pistachio-filled` },
    heroSub: { tr: `El yapımı. Taze sütten yapılmış fıstıklı kaymakla bohça biçiminde sarılmış tel kadayıf.

Saf tereyağı. Çıtır dış, kremsi iç. Saytad mutfağından lüks bir bohça.`, en: `El yapımı. Shredded wheat wrapped around a rich pistachio cream made from fresh milk.

Pure ghee butter. A luxurious parcel from the Saytad kitchen.` },
    longDesc: { tr: `Bohça; kıymetli şeyleri sarmak ve taşımak için kullanılan kumaş bohçayı
ifade eder. Bu kadayıfa verilen isim son derece yerindedir: her parça dikkatle
küçük bir bohça biçiminde hazırlanmış, içinde sürprizi saklayan bir hediye
gibidir. Saytad'ın Bohça Kadayıfı, her sabah taze hazırlanan fıstıklı kaymakla
doldurulur. Tel kadayıf bu dolgunun etrafına sarılır ve saf tereyağında derin
altın rengini alana kadar pişirilir. Çıtır dış yüzey ile içerideki yumuşak,
ipeksi kremanın kontrastı bu ürünün özünü oluşturur.
Bu ürün tamamen sarması olarak hazırlanır.`, en: `Bohça — the Turkish word for a bundle or parcel — describes a kadayıf preparation
in which shredded wheat is wrapped around a filling rather than layered beneath it.
At Saytad, the filling inside our Bohça Kadayıf is pistachio cream made from fresh
milk: a rich, smooth mixture of stone-ground Gaziantep pistachios and freshly
prepared cream that transforms the product from a crunchy pastry into something
closer to a petit dessert. The tel kadayıf parcel is cooked in pure ghee until
golden, then finished with syrup — the exterior crispy, the interior creamy.` },
    badges: { tr: [`🌿 Koruyucu yok`, `🧈 Saf tereyağı`, `🫙 Her gün taze üretim`, `📦 Hediye ambalajı`], en: [`🌿 No preservatives`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilmektedir, Gaziantep tarifi`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Dolgu`, en: `Filling` }, val: { tr: `Taze sütten yapılmış fıstıklı kaymak — taş öğütme Gaziantep fıstığı ve taze kaymak`, en: `Pistachio cream made from fresh milk — stone-ground Gaziantep pistachios with freshly prepared kaymak` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Pişirmek için %100 saf tereyağı; dolgu için taze süt kaymağı`, en: `100% pure ghee (clarified butter) for cooking; fresh milk cream in filling` } },
      { key: { tr: `Form`, en: `Form` }, val: { tr: `Bohça (sarılı paket) — kremsi fıstık dolgunun etrafına sarılmış tel kadayıf`, en: `Bohça (parcel/bundle) — shredded wheat wrapped around creamy pistachio filling` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Buzdolabında 1–2 gün (taze krema dolgu) · Satın alındıktan sonra mümkün olan en kısa sürede tüketin`, en: `1–2 days refrigerated (fresh cream filling) · Consume promptly after purchase` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Bu ürün için soğutmalı ambalaj kullanılır`, en: `Same-day within Istanbul · Refrigerated packaging used` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Tel kadayıf`, en: `Tel kadayıf (shredded wheat)` }, detail: { tr: `İnce tel hamur (buğday unu, su, tuz, yumurta akı)`, en: `Fine shredded wheat strands (wheat flour, water, salt, egg whites)` } },
      { name: { tr: `Saf tereyağı`, en: `Pure ghee butter` }, detail: { tr: `%100 sadeyağ, bohçanın pişirilmesinde kullanılır`, en: `100% clarified cow's butter, used for cooking the parcel` } },
      { name: { tr: `Fıstıklı kaymak (taze süt dolgusu)`, en: `Pistachio cream (fresh milk filling)` }, detail: { tr: `Taş öğütme Gaziantep fıstığının taze kaymakla (tam yağlı sütten hazırlanan kaymaklı krema) birleşimi — kaymak her gün taze hazırlanır`, en: `Stone-ground Gaziantep pistachios blended with freshly prepared kaymak (clotted cream from whole milk) — the cream is made fresh daily` } },
      { name: { tr: `Şeker şerbet`, en: `Sugar syrup` }, detail: { tr: `Türkiye'de üretilen şeker pancarı şekeri, su, kristalleşmeyi önlemek için birkaç damla limon suyu`, en: `Local beet sugar produced in Turkey, water, a few drops of lemon juice to prevent crystallisation` } },
    ],
    ingredientsNote: { tr: `Önemli — taze krema dolgu: Fıstıklı kaymak dolgusu taze süt ve kaymak içermektedir. Bu ürün diğer kadayıf ürünlerimize kıyasla önemli ölçüde daha kısa raf ömrüne sahiptir. Satın aldıktan sonra hemen buzdolabına kaldırın ve 1–2 gün içinde tüketin.`, en: `Important — fresh cream filling: The pistachio cream filling contains fresh milk and kaymak. This product has a significantly shorter shelf life than our other kadayıf products. Refrigerate immediately and consume within 1–2 days.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu meyve (fıstık)`, `⚠ Süt ürünü (tereyağı + taze kaymak dolgu)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter + fresh cream filling)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer sert kabuklu meyvelerin kullanıldığı ürünler de üretmektedir. Mutfaklarımız sertifikalı alerjen-serbest tesis değildir. Ağır sert kabuklu meyve alerjisi olan müşterilerimizin bunu göz önünde bulundurması gerekmektedir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Farkı Yaratan`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Her Şeyi Değiştiren`, en: `The Cream` },
    featuresTitleEm: { tr: `Kaymak`, en: `That Changes Everything` },
    features: [
      { icon: `🎁`, title: { tr: `Bohça Formu`, en: `The Parcel Form` }, desc: { tr: `Bohça Türkçede paket ya da sarma anlamına gelir — ve bu ürün tam olarak budur:
içinde sürpriz saklayan, düzenli biçimde sarılmış bir tel kadayıf bohçası.
Sarma tekniği, çıtır dış kabuklu ve yumuşak kremsi iç kısımlı, katmanlı
bir parça oluşturur; diğer tüm kadayıf çeşitlerinden ayrışan kendine özgü
bir yeme deneyimi sunar.`, en: `Bohça means bundle in Turkish, and that is precisely what this product is —
a neatly wrapped parcel of tel kadayıf with a surprise inside. The wrapping
technique creates a contained, layered piece with a crispy exterior shell
and a soft, creamy interior, making it a distinct eating experience from
any other kadayıf variety.` } },
      { icon: `🥛`, title: { tr: `Taze Fıstıklı Kaymak Dolgusu`, en: `Fresh Pistachio Cream Filling` }, desc: { tr: `Dolgu, her sabah tam yağlı süt ve taş öğütme Gaziantep fıstığından taze
hazırlanan bir kaymaktır. Sade bir kuruyemiş dolgusundan farklı olarak bu
kaymak düzgün, zengin ve akıcıdır — kadayıf dışının çıtırlığı ve şerbetin
tatlılığıyla mükemmel uyum içinde süt derinliği katar.`, en: `The filling is a pistachio cream made fresh daily from whole milk and
stone-ground Gaziantep pistachios. Unlike a simple nut filling, this cream
is smooth, rich, and yielding — bringing a dairy depth that plays beautifully
against the crunch of the kadayıf exterior and the sweetness of the syrup.` } },
      { icon: `✨`, title: { tr: `Her Lokmada Kontrast`, en: `Contrast in Every Bite` }, desc: { tr: `Bohça Kadayıf kontrast üzerine kuruludur: dış yüzey tereyağında pişirilmiş
derin çıtırlıktayken iç kısım yumuşak ve kremsidir. Sıcak dışa karşı serin iç,
çıtıra karşı akıcı. Bu yalnızca bir kadayıf değil — tek bir bohça içinde
eksiksiz, küçük bir tatlı deneyimidir.`, en: `Bohça Kadayıf is built around contrast: the exterior is deeply crunchy from
ghee-cooking, while the interior is soft and creamy. Hot meets cool, crisp
meets yielding. This is not simply a kadayıf — it is a complete small dessert
experience in a single parcel.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Bohça:`, en: `Bohça:` },
    storyTitleEm: { tr: `Hediye Formu`, en: `The Gift Form` },
    story: { tr: [`Türk kültüründe bohça; değerli şeyleri, hediyeleri, hatta çeyizi sarmak ve taşımak
için kullanılan kumaş parçasıdır. Bu kadayıfa verilen isim son derece yerindedir:
her parça dikkatle bir bohça gibi hazırlanır — ısırıldığında gerçek doğasını
açığa çıkaran, mutfağımızdan küçük bir hediye.`, `Saytad'da Bohça Kadayıfımız, her sabah tam yağlı süt ve taş öğütme Gaziantep
fıstığından hazırlanan fıstıklı kaymakla doldurulur. Tel kadayıf bu dolgunun
etrafına sarılır, kapatılır; ardından dış yüzey derin altın rengini alana kadar
saf tereyağında pişirilir. Çıtır kabuk ile içerideki serin, ipeksi kaymak
arasındaki kontrast bu ürünün tanımlayıcı özelliğidir.`, `Dolgunun taze süt kaymağı içermesi nedeniyle Bohça Kadayıfın raf ömrü diğer
ürünlerimize kıyasla daha kısadır. Bu bir kısıtlama değil, bir dürüstlük beyanıdır.
Taze kaymak, katkı maddesi kullanılmadan stabilize edilemez; biz ise hiç kullanmayız.
Satın alın, hemen buzdolabına kaldırın ve bir-iki gün içinde en taze hâliyle tadın.`], en: [`In Turkish culture, a bohça is a bundle of fabric used to wrap and carry precious
things — gifts, belongings, even a bride's dowry. The name given to this kadayıf
is fitting: each piece is carefully assembled as a parcel, a small gift from
our kitchen that reveals its full nature only when you bite into it.`, `At Saytad, our Bohça Kadayıf is filled with a pistachio cream prepared fresh each
morning from whole milk and stone-ground Gaziantep pistachios. The tel kadayıf is
wrapped around this filling, sealed, and then cooked in pure ghee until the exterior
achieves a deep golden crispness. The contrast between the crunchy shell and the
cool, silky cream inside is the defining characteristic of this product.`, `Because the filling contains fresh milk cream, Bohça Kadayıf has a shorter shelf
life than our other products. This is not a limitation — it is a statement of
integrity. Fresh cream cannot be stabilised without additives, and we use none.
Purchase it, refrigerate it immediately, and enjoy it at its best within a day or two.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `Tavsiye edilmez`, en: `Not advised` }, note: { tr: `Taze krema dolgu buzdolabı gerektiriyor — oda sıcaklığında bırakmayın`, en: `Fresh cream filling requires refrigeration — do not leave at room temperature` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `1–2 Gün`, en: `1–2 Days` }, note: { tr: `Satın aldıktan sonra hemen buzdolabına kaldırın — taze kaymak dolgu çabuk bozulur`, en: `Refrigerate immediately after purchase — the fresh cream filling is perishable` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Tavsiye edilmez`, en: `Not advised` }, note: { tr: `Dondurma hem kaymak dolgusunu hem de tel hamur dokusunu bozar`, en: `Freezing destroys both the cream filling and the shredded wheat texture` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Kaymak en taze ve kadayıf en çıtır hâliyle üretim günündedir`, en: `The cream is at its freshest and the kadayıf at its crispest on day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Verin`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat. Bu ürün için soğutmalı ambalaj kullanılır.

Kurumsal ve toplu siparişler için iletişime geçin.`, en: `Same-day delivery within Istanbul. Refrigerated packaging used for this product.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "pistachio-cold-baklava": {
    heroTag: { tr: `Soğuk Koleksiyon`, en: `Cold Collection` },
    heroSubItalic: { tr: `Soğutulmuş, ipeksi, ferahlatıcı`, en: `Chilled, silky, refreshingly light` },
    heroSub: { tr: `El yapımı. Soğuk usülde hazırlanmış klasik Saytad fıstıklı baklava.

Taş öğütme Gaziantep fıstığı. Saf tereyağı. Soğuk servis — damakta daha hafif.`, en: `The classic Saytad pistachio baklava, prepared in the cold tradition.

Stone-ground Gaziantep pistachios. Pure ghee. Served chilled — lighter on the palate.` },
    longDesc: { tr: `Soğuk Baklava, yufka ve şerbetin klasik sıcak yöntemden farklı biçimde işlendiği
özgün bir hazırlık usülüdür. Sonuç; belirgin biçimde daha hafif ve daha ipeksi
dokulu bir baklavadır: katmanlar çıtır değil yumuşak ve akıcıdır, tatlılık daha
ölçülü ve zariftir; genel izlenim yoğun bir zenginlik yerine rafine ve ferahlatıcı
bir tatlıdır. Saytad'ın Fıstıklı Soğuk Baklavası, klasik fıstıklı baklavamızdaki
aynı taş öğütme Gaziantep fıstığını ve saf tereyağını kullanır — fark tamamen
hazırlık yöntemi ve servis sıcaklığındadır.`, en: `Cold Baklava — soğuk baklava — is a distinct preparation where the phyllo is handled
and the syrup applied differently from the classic hot method. The result is a baklava
with a noticeably lighter, silkier texture: the layers are tender rather than crisp,
the sweetness is more delicate, and the overall impression is of a refined, refreshing
dessert rather than an intensely rich one. At Saytad, our Pistachio Cold Baklava uses
the same stone-ground Gaziantep pistachios and pure ghee as our standard pistachio
baklava — the difference is entirely in the preparation and serving temperature.
Every piece is perfection.` },
    badges: { tr: [`❄️ Soğuk servis`, `🧈 Saf tereyağı`, `🫙 Her gün taze üretim`, `📦 Hediye ambalajı`], en: [`❄️ Served chilled`, `🧈 Pure ghee butter`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilmektedir, Gaziantep tarifi`, en: `Made in Istanbul, Gaziantep recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş öğütme Gaziantep (Antep) fıstığı — dolgu ve süsleme`, en: `Stone-ground Gaziantep (Antep) pistachios — filling and topping` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `%100 saf tereyağı (sadeyağ), bitkisel yağ yok`, en: `100% pure ghee (clarified butter), no vegetable oils` } },
      { key: { tr: `Stil`, en: `Style` }, val: { tr: `Soğuk hazırlık — sıcak şerbetli baklavaya kıyasla daha hafif, daha ipeksi doku · Soğuk servis edilmeli`, en: `Cold preparation — lighter, silkier texture than hot-syrup baklava · Must be served chilled` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Buzdolabında 3 güne kadar · Oda sıcaklığında saklamayın`, en: `Up to 3 days refrigerated · Do not store at room temperature` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Soğutmalı ambalaj kullanılır`, en: `Same-day within Istanbul · Refrigerated packaging used` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka (baklavalık)`, en: `Phyllo dough (yufka)` }, detail: { tr: `İnce kağıt gibi yufka (buğday unu, su, tuz, yumurta akı, az miktarda nişasta)`, en: `Paper-thin sheets (wheat flour, water, salt, egg whites, a small amount of starch)` } },
      { name: { tr: `Saf tereyağı`, en: `Pure ghee butter` }, detail: { tr: `%100 sadeyağ, her yufka katmanına sürülür`, en: `100% clarified cow's butter, brushed between every phyllo layer` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı (Pistacia vera), tuzsuz — dolgu ve süslemede kullanılır`, en: `Stone-ground, early-harvest Antep pistachios (Pistacia vera), unsalted — filling and topping` } },
      { name: { tr: `Şeker şerbet (soğuk uygulama)`, en: `Sugar syrup (cold application)` }, detail: { tr: `Türkiye'de üretilen şeker pancarı şekeri, su, limon suyu — karakteristik hafif dokuyu elde etmek için soğuk uygulanır`, en: `Local beet sugar, water, lemon juice — applied cold to achieve the characteristic lighter texture` } },
    ],
    ingredientsNote: { tr: `Hazırlık notu: Soğuk baklava, klasik baklavamızla aynı kaliteli malzemeleri kullanır. Fark yöntemde ve sıcaklıktadır — şerbet soğuk uygulanarak daha hafif bir emilim ve daha yumuşak doku elde edilir. Ek süt ürünü veya krema eklenmez.`, en: `Note on preparation: Cold baklava uses the same premium ingredients as our classic baklava. The difference is in method and temperature — the syrup is applied cold, resulting in a lighter, more delicate texture. No additional dairy or cream is added.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu meyve (fıstık)`, `⚠ Süt ürünü (tereyağı)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee butter)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer sert kabuklu meyvelerin kullanıldığı ürünler de üretmektedir. Mutfaklarımız sertifikalı alerjen-serbest tesis değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities. Customers with severe nut allergies should take this into account.` },
    featuresEyebrow: { tr: `Farkı Yaratan`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Soğuk`, en: `Why Cold` },
    featuresTitleEm: { tr: `Her Şeyi Değiştirir`, en: `Changes Everything` },
    features: [
      { icon: `❄️`, title: { tr: `Farklı Bir Baklava`, en: `A Different Kind of Baklava` }, desc: { tr: `Soğuk baklava, soğuk servis edilen sıradan bir baklava değildir — özgün bir
hazırlık usülüdür. Soğuk uygulama yöntemi; çıtır değil yumuşak ve akıcı
yufka katmanları ile daha ölçülü ve zarif bir tatlılık üretir. Klasik baklavayı
çok zengin ya da çok tatlı bulanlar için soğuk baklava bir keşiftir.`, en: `Cold baklava is not simply regular baklava served cold — it is a distinct
preparation. The cold-application method produces phyllo layers that are
tender and yielding rather than crisp, and a sweetness that is more restrained
and elegant. For those who find classic baklava too rich or too sweet, cold
baklava is a revelation.` } },
      { icon: `🥜`, title: { tr: `Aynı Kaliteli Fıstıklar`, en: `Same Premium Pistachios` }, desc: { tr: `Klasik baklavamızda kullandığımız taş öğütme Gaziantep fıstıkları burada da
karşınıza çıkar — canlı yeşil, erken hasat, tuzsuz. Soğuk hazırlıkta fıstığın
lezzeti farklı okunur: baklavanın azaltılmış tatlılığı, fıstığın doğal
ceviz aromasının ve hafif acılığının daha belirgin şekilde öne çıkmasını sağlar.`, en: `The same stone-ground Gaziantep pistachios used in our classic baklava appear
here — vibrant green, early-harvest, unsalted. In the cold preparation, their
flavour reads differently: the reduced sweetness of the baklava allows the
natural nuttiness and slight bitterness of the pistachio to come forward
more clearly.` } },
      { icon: `✨`, title: { tr: `Mükemmel Yaz Tatlısı`, en: `The Perfect Summer Sweet` }, desc: { tr: `Soğuk baklava sıcak havalar için yaratılmıştır — sıcak şerbetli baklavanın
zenginliğine karşı daha hafif, ferahlatıcı bir alternatif. Buzdolabından
çıkar çıkmaz servis edilen ürün, ağırlık hissettirmeden tatmin eden temiz
ve serin bir tatlılık sunar.`, en: `Cold baklava was created for warm weather — a lighter, refreshing alternative
to the richness of hot-syrup baklava. Served straight from the refrigerator,
it offers a clean, cool sweetness that satisfies without heaviness. It has become
one of the most requested items at Saytad during the summer months.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Soğuk Baklava:`, en: `Cold Baklava:` },
    storyTitleEm: { tr: `Yaz Geleneği`, en: `The Summer Tradition` },
    story: { tr: [`Soğuk baklava, Türk tatlı kültürünün sıcak iklime verdiği pratik bir yanıttan
doğmuştur. Klasik baklava sıcak şerbet uygulaması ve oda sıcaklığında servisiyle
yaz sıcağında ağır gelebilir. Gaziantep'teki ustalar, aynı ikonik lezzet profilini
yaz sofrasına daha uygun bir formda sunmanın yolunu soğuk yöntemde bulmuşlardır.`, `Saytad'da Soğuk Baklavamızı, klasik serimizle aynı malzemeler ve aynı özenle
hazırlıyoruz. Yufka katmanları saf tereyağı ve fıstık dolgusuyla hazırlanır;
ancak şerbet süreci farklı işlenir — daha hafif emilim ve daha yumuşak doku
oluşturacak biçimde soğuk uygulanır. Bitmiş ürün soğutulur; bu işlem katmanları
nazikçe pekiştirir ve tatlının ferahlatıcı niteliğini güçlendirir.`, `Sonuç olarak hem tanıdık hem de yeni hissettiren bir ürün ortaya çıkar:
Saytad'ın fıstıklı baklavasının vazgeçilmez karakteri — canlı yeşil fıstıklar,
saf tereyağı zenginliği, Gaziantep mirası — ama hava sıcak olduğunda bile ikinci
bir dilime davet eden bir hafiflikle ifade edilmiş.`], en: [`Cold baklava emerged from the practical needs of Turkish pastry culture in warm
climates. Classical baklava, with its hot syrup application and room-temperature
serving, can feel heavy in the heat. Bakers in Gaziantep developed the cold method
as a way to offer the same iconic flavour profile in a form better suited to the
summer table.`, `At Saytad, we make our Cold Baklava with the same ingredients and the same care
as our classic range. The phyllo is layered with pure ghee and pistachio filling,
but the syrup process is handled differently — applied in a way that creates a
lighter absorption and a softer, more yielding texture. The finished product is
then chilled, which sets the layers gently and amplifies the refreshing quality
of the dessert.`, `The result is something that feels simultaneously familiar and new: the unmistakable
character of Saytad's pistachio baklava — the vivid green pistachios, the pure ghee
richness, the Gaziantep heritage — but expressed with a lightness that invites
a second piece even when the weather is warm.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `Tavsiye edilmez`, en: `Not advised` }, note: { tr: `Soğuk baklava buzdolabında saklanmalıdır — oda sıcaklığı için tasarlanmamıştır`, en: `Cold baklava must be kept refrigerated — it is not designed for room-temperature storage` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `3 Güne Kadar`, en: `Up to 3 Days` }, note: { tr: `Her zaman buzdolabında saklayın ve doğrudan soğuk olarak servis edin`, en: `Keep refrigerated at all times and serve directly from the fridge` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Tavsiye edilmez`, en: `Not advised` }, note: { tr: `Dondurma, soğuk hazırlık dokusuna önemli zarar verir`, en: `Freezing damages the delicate cold-preparation texture significantly` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Doku ve tazelik üretim günü en üst düzeydedir`, en: `The texture and freshness are at their finest on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Verin`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi soğutmalı ambalajla aynı gün teslimat.

Kurumsal ve toplu siparişler için iletişime geçin.`, en: `Same-day delivery within Istanbul with refrigerated packaging.

Corporate and bulk orders welcome — contact us to discuss your needs.` },
  },
  "white-chocolate-cold-baklava": {
    heroTag: { tr: `Soğuk Koleksiyon`, en: `Cold Collection` },
    heroSubItalic: { tr: `Soğutulmuş fıstıklı, beyaz çikolata kaplı`, en: `Chilled pistachio, white chocolate shell` },
    heroSub: { tr: `Beyaz çikolataya batırılmış fıstıklı soğuk baklava.

Saf tereyağı. Taş öğütme Gaziantep fıstığı. Çağdaş bir füzyon tatlısı.`, en: `Pistachio cold baklava coated in smooth white chocolate.

Pure ghee. Stone-ground Gaziantep pistachios. A contemporary fusion dessert.` },
    longDesc: { tr: `Bu ürün, Fıstıklı Soğuk Baklavamızla başlar — fıstık dolgulu, hafif ve ipeksi —
ve ardından soğutmanın ardından üzerine uygulanan düzgün bir beyaz çikolata
kaplamayla çağdaş şekerleme sanatına bir adım atar. Beyaz çikolata
buzdolabında sertleşerek altındaki yumuşak baklavanın üzerinde ince, kıtır bir
kabuk oluşturur. Beyaz çikolatanın kremsi tatlılığı, Gaziantep fıstığının ceviz
aroması ve soğuk hazırlıklı yufkanın hafifliği bir arada; gerçek bir zarafetle
geleneği ve modernliği köprüleyen bir lezzet profili oluşturur.`, en: `This product begins as our Pistachio Cold Baklava — pistachio-filled, light,
and silky — and then takes a step further into contemporary confectionery with
a smooth white chocolate coating applied after chilling. The white chocolate
sets firm in the refrigerator, creating a thin, snapping shell over the soft
baklava beneath. The combination of white chocolate's creamy sweetness, the
nuttiness of Gaziantep pistachios, and the lightness of the cold-prepared phyllo
produces something that bridges tradition and modernity with genuine elegance.
Every piece is premium.` },
    badges: { tr: [`❄️ Soğuk servis`, `🍫 Beyaz çikolata kaplama`, `🫙 Her gün taze üretim`, `📦 Hediye ambalajı`], en: [`❄️ Served chilled`, `🍫 White chocolate coating`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Menşei`, en: `Origin` }, val: { tr: `İstanbul'da üretilmektedir, çağdaş Saytad tarifi`, en: `Made in Istanbul, contemporary Saytad recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş öğütme Gaziantep (Antep) fıstığı — dolgu ve süsleme`, en: `Stone-ground Gaziantep (Antep) pistachios — filling and topping` } },
      { key: { tr: `Kaplama`, en: `Coating` }, val: { tr: `Soğuk hazırlıktan sonra uygulanan düzgün beyaz çikolata — soğutulunca sertleşir`, en: `Smooth white chocolate applied after cold preparation — sets firm when chilled` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Baklava için saf tereyağı; beyaz çikolata süt yağı içerir`, en: `Pure ghee (clarified butter) for baklava; white chocolate contains milk fats` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Buzdolabında 3 güne kadar · Her zaman soğuk muhafaza edilmeli`, en: `Up to 3 days refrigerated · Must be kept chilled at all times` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Soğutmalı ambalaj kullanılır`, en: `Same-day within Istanbul · Refrigerated packaging used` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka (baklavalık)`, en: `Phyllo dough (yufka)` }, detail: { tr: `İnce kağıt gibi yufka (buğday unu, su, tuz, yumurta akı, az miktarda nişasta)`, en: `Paper-thin sheets (wheat flour, water, salt, egg whites, a small amount of starch)` } },
      { name: { tr: `Saf tereyağı`, en: `Pure ghee butter` }, detail: { tr: `%100 sadeyağ, her yufka katmanına sürülür`, en: `100% clarified cow's butter, brushed between every phyllo layer` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş öğütme, erken hasat Antep fıstığı, tuzsuz — dolgu ve süslemede kullanılır`, en: `Stone-ground, early-harvest Antep pistachios, unsalted — filling and topping` } },
      { name: { tr: `Şeker şerbet (soğuk uygulama)`, en: `Sugar syrup (cold application)` }, detail: { tr: `Şeker pancarı şekeri, su, limon suyu — daha hafif doku için soğuk uygulanır`, en: `Beet sugar, water, lemon juice — applied cold for lighter texture` } },
      { name: { tr: `Beyaz çikolata kaplama`, en: `White chocolate coating` }, detail: { tr: `Beyaz çikolata (kakao yağı, şeker, tam yağlı süt tozu, vanilya) — soğutmanın ardından ince dış kabuk olarak uygulanır`, en: `White chocolate (cocoa butter, sugar, whole milk powder, vanilla) — applied as a thin outer shell after chilling` } },
    ],
    ingredientsNote: { tr: `Beyaz çikolata notu: Beyaz çikolata kaplaması, tereyağı sütüne ek olarak süt katıları içermektedir. Beyaz çikolata genellikle emülsifikatör olarak soya lesitini içerir — soya hassasiyeti olan müşterilerimizin bunu göz önünde bulundurması gerekmektedir.`, en: `Note on white chocolate: The white chocolate coating contains milk solids in addition to the milk from ghee butter. White chocolate typically contains soya lecithin as an emulsifier — customers with soya sensitivity should take this into account.` },
    allergensContains: { tr: [`⚠ Glüten (buğday)`, `⚠ Sert kabuklu meyve (fıstık)`, `⚠ Süt ürünü (tereyağı + beyaz çikolata)`, `⚠ Soya (beyaz çikolata emülsifikatörü)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee + white chocolate)`, `⚠ Soya (white chocolate emulsifier)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Baklava içinde yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No artificial additives in baklava`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer sert kabuklu meyvelerin kullanıldığı ürünler de üretmektedir. Mutfaklarımız sertifikalı alerjen-serbest tesis değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities.` },
    featuresEyebrow: { tr: `Farkı Yaratan`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Gelenek ile`, en: `Tradition Meets` },
    featuresTitleEm: { tr: `Çağdaş Zanaat`, en: `Contemporary Craft` },
    features: [
      { icon: `🍫`, title: { tr: `Beyaz Çikolata Kabuğu`, en: `The White Chocolate Shell` }, desc: { tr: `Soğuk baklava hazırlanıp soğutulduktan sonra üzerine düzgün beyaz çikolata
ince bir dış kaplama olarak uygulanır. Buzdolabında bu kaplama sertleşerek
kıtır bir kabuk oluşturur — altındaki yumuşak ve akıcı yufkayla güzel bir
kontrast sağlar. Çikolatayı kırmanın anı deneyimin bir parçasıdır.`, en: `After the cold baklava is prepared and chilled, smooth white chocolate is
applied as a thin outer coating. In the refrigerator, this sets into a firm,
snapping shell — providing a new textural dimension that contrasts beautifully
with the soft, yielding phyllo beneath. The moment of breaking through the
chocolate is part of the experience.` } },
      { icon: `🥜`, title: { tr: `Fıstık ve Beyaz Çikolata Buluşması`, en: `Pistachio Meets White Chocolate` }, desc: { tr: `Gaziantep fıstığı ile beyaz çikolatanın eşleşmesi bilinçli bir tercihtir:
fıstığın ceviz aroması ve hafif acılığı beyaz çikolatanın tatlılığını dengeler;
çikolata ise soğuk hazırlıklı baklavadaki kremsilik hissini güçlendirir.
Birlikte her iki unsurun tek başına sunduğundan daha zengin ve karmaşık
bir lezzet profili yaratırlar.`, en: `The pairing of Gaziantep pistachio and white chocolate is a considered one:
the nuttiness and gentle bitterness of the pistachio cut through the sweetness
of white chocolate, while the chocolate amplifies the creaminess already present
in the cold-prepared baklava. Together they create a flavour profile that is
richer and more complex than either element alone.` } },
      { icon: `✨`, title: { tr: `Hediye İçin Mükemmel`, en: `A Gift-Ready Centrepiece` }, desc: { tr: `Beyaz çikolata kaplama bu ürüne anında göz alıcı, zarif bir görünüm katar;
Saytad'da hediye için en çok tercih edilen ürünlerden biri haline getirir.
Beyaz çikolata dış yüzey ile yeşil fıstık detayının kontrastı hem çarpıcı
hem de ürüne gösterilen özenin açık bir ifadesidir.`, en: `The white chocolate coating gives this product an immediately visual, elegant
appearance that makes it one of the most popular choices for gifting at Saytad.
The contrast of white chocolate exterior and green pistachio detail is striking
and immediately communicates the care that has gone into the product.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Zanaat`, en: `The Craft Behind It` },
    storyTitle: { tr: `Beyaz Çikolatalı Soğuk Baklava:`, en: `White Chocolate Cold Baklava:` },
    storyTitleEm: { tr: `Yeni Bir Klasik`, en: `A New Classic` },
    story: { tr: [`Türk tatlı kültürü köklü bir geleneğe sahiptir; ama hiçbir zaman evrimi dışlamaz.
Soğuk baklava geleneğine beyaz çikolatanın katılması, özgün olanı koruyan —
baklavanın kendisi Gaziantep tekniğine sadık kalır — ama daha geniş, uluslararası
bir damak zevkine seslenen çağdaş bir gelişmeyi temsil eder.`, `Saytad'da standart soğuk baklava hazırlığımızla başlıyoruz: Gaziantep fıstığı,
saf tereyağı, kağıt inceliğinde yufka ve soğuk şerbet uygulaması. Soğutmanın
ardından parçalar düzgün beyaz çikolatayla kaplanır ve ambalajlanmadan önce
buzdolabında tamamen sertleşmesi beklenir. Sonuç; üç ayrı deneyim katmanına
sahip bir üründür: çikolata kabuğunun kıtırdaması, soğuk yufkanın yumuşaklığı
ve fıstık dolgunun ceviz aroması.`, `Bu ürün Saytad'da en çok talep gören ürünlerden biri haline geldi — özellikle
hediye tercihlerinde. Görsel zarafeti ile tanıdık-ama-yükseltilmiş lezzet profili,
onu Türk tatlılarıyla ilk kez karşılaşanlar için olduğu kadar yeni bir şey
arayan köklü baklava tutkunları için de uygun kılar.`], en: [`Turkish pastry culture is deeply traditional, but it has never been closed to
evolution. The introduction of white chocolate into the cold baklava tradition
represents a contemporary development that respects the original — the baklava
itself remains faithful to Gaziantep technique — while adding a new dimension
that speaks to a broader, more internationally-influenced palette.`, `At Saytad, we begin with our standard cold baklava preparation: Gaziantep pistachios,
pure ghee, paper-thin phyllo, and cold syrup application. After chilling, the pieces
are coated in smooth white chocolate, which is allowed to set fully in the refrigerator
before packaging. The result is a product with three distinct layers of experience:
the snap of the chocolate shell, the softness of the cold phyllo, and the nuttiness
of the pistachio filling.`, `This product has become one of the most requested at Saytad — particularly for
gifting occasions. Its visual elegance, combined with the familiar-but-elevated
flavour profile, makes it as appropriate for a first-time encounter with Turkish
sweets as for a long-standing baklava enthusiast looking for something new.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `Tavsiye edilmez`, en: `Not advised` }, note: { tr: `Beyaz çikolata kaplama yumuşar ve baklava buzdolabı dışında bozulur`, en: `The white chocolate coating will soften and the baklava deteriorate outside the fridge` } },
      { icon: `❄️`, title: { tr: `Buzdolabı`, en: `Refrigerated` }, val: { tr: `3 Güne Kadar`, en: `Up to 3 Days` }, note: { tr: `Her zaman buzdolabında saklayın — çikolata soğukken en iyi şekilde sertleşir`, en: `Keep refrigerated at all times — the chocolate sets and holds best when cold` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Tavsiye edilmez`, en: `Not advised` }, note: { tr: `Dondurma çikolata kaplamasına ve soğuk baklava dokusuna zarar verir`, en: `Freezing damages the chocolate coating and the cold baklava texture` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı gün`, en: `Same day` }, note: { tr: `Çikolata kıtırdaması ve baklava tazeliği üretim günü en üst düzeydedir`, en: `The chocolate snap and baklava freshness are finest on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş Verin`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi soğutmalı ambalajla aynı gün teslimat.

Popüler bir hediye tercihi — kurumsal ve toplu siparişler için iletişime geçin.`, en: `Same-day delivery within Istanbul with refrigerated packaging.

A popular gift choice — corporate and bulk orders welcome.` },
  },
  "red-berry-cold-baklava": {
    heroTag: { tr: `Soğuk Koleksiyon`, en: `Cold Collection` },
    heroSubItalic: { tr: `Soğutulmuş fıstıklı, kırmızı meyve sosu`, en: `Chilled pistachio, red berry coulis` },
    heroSub: { tr: `El yapımı. Fıstıklı soğuk baklava, canlı kırmızı meyve sosuyla tamamlanmış.

Saf tereyağı. Taş baskı Gaziantep fıstığı. Taze frambuazın ferahlığı.`, en: `Handcrafted. Pistachio cold baklava finished with a vibrant red berry coulis.

Pure ghee. Stone-ground Gaziantep pistachios. The brightness of fresh raspberry.` },
    longDesc: { tr: `Kırmızı Meyveli Soğuk Baklava, Fıstıklı Soğuk Baklava'mızla aynı hafif ve
ipeksi temelden başlar: taş baskı Gaziantep fıstığı, saf tereyağı, ince yufka
ve soğuk şerbet uygulaması. Bu ürünü farklı kılan ise son dokunuş: frambuaz
ağırlıklı, canlı kırmızı meyvelerden hazırlanan ve soğutulmuş baklavanın üzerine
dökülen taze meyve sosudur. Kırmızı meyvelerin ekşimsi notaları, şerbetin
tatlılığını ve fıstığın dolgunluğunu dengeler; sonuç olarak ortaya hem zengin
hem de ferahlatıcı bir tatlı çıkar.`, en: `Our Red Berry Cold Baklava begins with the same light, silky foundation as
our Pistachio Cold Baklava — stone-ground Gaziantep pistachios, pure ghee,
paper-thin phyllo, and cold syrup application. What distinguishes it is the
finishing touch: a vivid red berry coulis, rich with raspberry, that is
spooned over the chilled baklava before serving. The tartness of the red
berries cuts through the sweetness of the syrup and the richness of the
pistachio, creating a dessert that feels both indulgent and refreshingly
bright.` },
    badges: { tr: [`❄️ Soğuk servis`, `🍓 Kırmızı meyve sosu`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`❄️ Served chilled`, `🍓 Red berry coulis`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, çağdaş Saytad tarifi`, en: `Made in Istanbul, contemporary Saytad recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — iç ve üst dolgu`, en: `Stone-ground Gaziantep (Antep) pistachios — filling and topping` } },
      { key: { tr: `Üst Sos`, en: `Topping` }, val: { tr: `Kırmızı meyve sosu (frambuaz) — soğuk hazırlık sonrası taze olarak eklenir`, en: `Red berry coulis (raspberry) — applied fresh after cold preparation` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Her yufka katmanına sürülen saf tereyağı (sadeyağ)`, en: `Pure ghee (clarified butter) brushed between every phyllo layer` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Buzdolabında en fazla 3 gün · Her zaman soğukta muhafaza edilmelidir`, en: `Up to 3 days refrigerated · Must be kept chilled at all times` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Soğutmalı ambalaj kullanılır`, en: `Same-day within Istanbul · Refrigerated packaging used` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka (phyllo hamuru)`, en: `Phyllo dough (yufka)` }, detail: { tr: `İnce katman hamur (buğday unu, su, tuz, yumurta akı, az miktarda nişasta)`, en: `Paper-thin sheets (wheat flour, water, salt, egg whites, a small amount of starch)` } },
      { name: { tr: `Saf tereyağı (sadeyağ)`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, her yufka katmanına sürülür`, en: `100% clarified cow's butter, brushed between every phyllo layer` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — iç ve üst dolgu`, en: `Stone-ground, early-harvest Antep pistachios, unsalted — filling and topping` } },
      { name: { tr: `Şeker şerbeti (soğuk uygulama)`, en: `Sugar syrup (cold application)` }, detail: { tr: `Pancar şekeri, su, limon suyu — hafif doku için soğuk olarak uygulanır`, en: `Beet sugar, water, lemon juice — applied cold for lighter texture` } },
      { name: { tr: `Kırmızı meyve sosu`, en: `Red berry coulis` }, detail: { tr: `Taze frambuaz ve kırmızı meyvelerden hazırlanan sos — soğutulmuş baklavanın üzerine taze olarak eklenir`, en: `Fresh raspberry and red berry reduction — spooned over the chilled baklava as a finishing layer` } },
    ],
    ingredientsNote: { tr: ``, en: `` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Kabuklu yemiş (fıstık)`, `⚠ Süt (tereyağı)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Baklavada yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives in baklava`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer kabuklu yemişler içeren ürünler üretmektedir. Mutfaklarımız alerjen sertifikalı tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities.` },
    featuresEyebrow: { tr: `Farkını Yaratan Özellikler`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Gelenek ile Buluşması`, en: `Tradition Meets` },
    featuresTitleEm: { tr: `Meyve Tazeliğinin`, en: `Fruit & Freshness` },
    features: [
      { icon: `🍓`, title: { tr: `Kırmızı Meyve Sosu`, en: `The Red Berry Coulis` }, desc: { tr: `Frambuaz ve kırmızı meyvelerden hazırlanan canlı sos, bu ürünün belirleyici
unsurudur. Sos, soğutulmuş baklavaya hem ekşilik hem de renk katar; şerbetin
tatlılığını dengeleyerek her bir dilimi ferah ve diri hissettirir. Bu bir
süsleme değil, lezzet mimarisinin ayrılmaz bir parçasıdır.`, en: `A vibrant reduction of raspberry and red berries is the defining element of
this product. The coulis brings tartness and colour to the chilled baklava —
cutting through the sweetness of the syrup and providing a contrast that makes
each piece feel alive. This is not a garnish; it is an integral part of the
flavour architecture.` } },
      { icon: `⚖️`, title: { tr: `Tatlının Dengesi`, en: `Sweet Meets Tart` }, desc: { tr: `Soğuk baklava zaten geleneksel baklavadan daha hafiftir; ancak kırmızı meyve
sosunun eklenmesi bu hafifliği bir adım öteye taşır. Frambuazın ekşimsi tadı,
fıstığın dolgunluğunu ve şerbetin tatlılığını dengeler; sonuç olarak karmaşık
ama hiçbir zaman ağır ya da bunaltıcı olmayan bir lezzet profili ortaya çıkar.`, en: `Cold baklava is already lighter than its traditional counterpart, but the
addition of the red berry coulis takes that lightness further. The tartness
of raspberry balances the richness of the pistachio and the sweetness of the
syrup, producing a dessert that is complex and satisfying without ever feeling
heavy or cloying.` } },
      { icon: `🎨`, title: { tr: `Göze Çarpan Sunum`, en: `Visual Impact` }, desc: { tr: `Kırmızı meyve sosunun koyu kızıl rengi ile Gaziantep fıstığının açık yeşilinin
kontrastı, son derece çarpıcı ve iştah açıcı bir görünüm yaratır. Bu, Saytad
ürün yelpazesinin en görsel olarak belirgin ürünlerinden birini oluşturur ve
sunumun lezzet kadar önem taşıdığı hediye tercihlerinde popüler bir seçimdir.`, en: `The deep crimson of the red berry coulis against the pale green of Gaziantep
pistachio creates a striking visual that is immediately appealing. This makes
the Red Berry Cold Baklava one of the most visually distinctive products in
the Saytad range — and a popular choice for gifting occasions where presentation
matters as much as taste.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Kırmızı Meyveli Soğuk Baklava:`, en: `Red Berry Cold Baklava:` },
    storyTitleEm: { tr: `Doğu ile Batının Buluşması`, en: `Where East Meets West` },
    story: { tr: [`Baklava ile taze meyvenin bir araya gelmesi, Türk şekerciliğinde görece modern
bir gelişmedir; ancak bir kez tadıldığında bu birliktelik son derece doğal
hissettirir. Geleneksel sıcak şerbet yönteminin aksine soğuk hazırlama tekniği,
ortaya çok daha hafif ve narin bir baklava çıkarır — bu da taze meyve lezzetinin
gerçekten fark yaratmasına zemin hazırlar.`, `Saytad'da Kırmızı Meyveli Soğuk Baklava, diğer soğuk baklava ürünlerimizle aynı
özenli süreçle hazırlanır: taş baskı Gaziantep fıstığı, el açması yufkanın her
katmanına sürülen saf tereyağı ve pişirme sonrası hamurun hafifliğini korumak
için soğuk uygulanan şerbet. Kırmızı meyve sosu ayrı olarak hazırlanır — taze
frambuaz ve mevsim kırmızı meyvelerinin pişirilerek koyulaştırılmasıyla elde edilir
— ve soğutulmuş baklavanın üzerine son bir kat olarak eklenir.`, `Sonuç, İstanbul'un mutfak geleneği ile daha geniş Avrupalı pastacılık dünyasını
buluşturan bir tatlıdır: temelde tartışmasız biçimde Türk, ama hafifliği ve
tazeliğiyle çağdaş bir zevke hitap eder. İster Türk tatlılarıyla ilk tanışma
olsun ister deneyimli bir damaklara sunulan yeni bir deneyim, Kırmızı Meyveli
Soğuk Baklava her seferinde şaşırtmayı başarır.`], en: [`The pairing of baklava and fresh fruit is a relatively modern development in
Turkish confectionery, but one that feels entirely natural once you taste it.
The cold preparation method, which results in a lighter and more delicate baklava
than the traditional hot-syrup approach, creates a product that genuinely benefits
from the brightness of fresh berry flavour.`, `At Saytad, the Red Berry Cold Baklava is made using the same careful process as
our other cold baklava products: stone-ground Gaziantep pistachios, pure ghee
butter brushed between each layer of hand-stretched phyllo, and cold syrup applied
after baking to preserve the lightness of the dough. The red berry coulis is
prepared separately — a reduction of fresh raspberry and seasonal red berries —
and applied as a finishing layer over the chilled baklava.`, `The result is a dessert that bridges the culinary traditions of Istanbul and the
broader European pastry world: unmistakably Turkish in its foundation, yet with
a lightness and freshness that speaks to a contemporary sensibility. Whether
encountered as an introduction to Turkish sweets or as something new for an
experienced palate, the Red Berry Cold Baklava consistently surprises.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Soğuk baklava buzdolabında saklanmalıdır — oda sıcaklığında muhafazaya uygun değildir`, en: `Cold baklava must be kept refrigerated — it is not designed for room-temperature storage` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `En Fazla 3 Gün`, en: `Up to 3 Days` }, note: { tr: `Her zaman buzdolabında saklayın ve doğrudan buzdolabından servis edin`, en: `Keep refrigerated at all times and serve directly from the fridge` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma işlemi, soğuk hazırlık dokusuna ve meyve sosuna zarar verir`, en: `Freezing damages the delicate cold-preparation texture and the berry coulis` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Meyve sosu ve baklavanın tazeliği üretim günü en yüksek düzeydedir`, en: `The berry coulis and baklava freshness are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün soğutmalı ambalajla teslimat.

Çarpıcı bir hediye seçeneği — kurumsal ve toplu siparişler memnuniyetle karşılanır.`, en: `Same-day delivery within Istanbul with refrigerated packaging.

A striking gift choice — corporate and bulk orders welcome.` },
  },
  "wild-berry-cold-baklava": {
    heroTag: { tr: `Soğuk Koleksiyon`, en: `Cold Collection` },
    heroSubItalic: { tr: `Soğutulmuş fıstıklı, yaban meyve tepesi`, en: `Chilled pistachio, wild berry topping` },
    heroSub: { tr: `El yapımı. Fıstıklı soğuk baklava, yaban meyveleri ile taçlandırılmış.

Saf tereyağı. Taş baskı Gaziantep fıstığı. Dağ meyvelerinin derinliği.`, en: `Pistachio cold baklava finished with a wild berry topping.

Pure ghee. Stone-ground Gaziantep pistachios. The depth of mountain berries.` },
    longDesc: { tr: `Dağ Meyveli Soğuk Baklava, klasik Fıstıklı Soğuk Baklava'mızın hafif ve ipeksi
temelini alır — taş baskı Gaziantep fıstığı, saf tereyağı, ince yufka ve soğuk
şerbet uygulaması — ve üzerine bol miktarda yaban meyvesi ekler. Yaban mersini,
böğürtlen ve orman meyveleri, fıstığın kuru yemiş dolgunluğunu tamamlayan toprak
tonlu bir derinlik ve hafif tatlılık getirir. Bu, en cömert ve en katmanlı soğuk
baklava deneyimidir.`, en: `Our Wild Berry Cold Baklava takes the light, silky foundation of our classic
Pistachio Cold Baklava — stone-ground Gaziantep pistachios, pure ghee, paper-thin
phyllo, and cold syrup application — and crowns it with a generous topping of
wild berries. Blueberries, blackberries, and other forest fruits bring an earthy
depth and gentle sweetness that complements the nuttiness of the pistachio in
a way that feels entirely natural. This is cold baklava at its most abundant:
generous, layered, and deeply satisfying.
Every piece is premium.` },
    badges: { tr: [`❄️ Soğuk servis`, `🫐 Yaban meyve tepesi`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`❄️ Served chilled`, `🫐 Wild berry topping`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir, çağdaş Saytad tarifi`, en: `Made in Istanbul, contemporary Saytad recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — iç ve üst dolgu`, en: `Stone-ground Gaziantep (Antep) pistachios — filling and topping` } },
      { key: { tr: `Üst Malzeme`, en: `Topping` }, val: { tr: `Yaban meyveleri (yaban mersini, böğürtlen, orman meyveleri) — soğuk hazırlık sonrası taze olarak eklenir`, en: `Wild berry selection (blueberry, blackberry, forest fruits) — applied fresh after cold preparation` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Her yufka katmanına sürülen saf tereyağı (sadeyağ)`, en: `Pure ghee (clarified butter) brushed between every phyllo layer` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Buzdolabında en fazla 3 gün · Her zaman soğukta muhafaza edilmelidir`, en: `Up to 3 days refrigerated · Must be kept chilled at all times` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Soğutmalı ambalaj kullanılır`, en: `Same-day within Istanbul · Refrigerated packaging used` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka (phyllo hamuru)`, en: `Phyllo dough (yufka)` }, detail: { tr: `İnce katman hamur (buğday unu, su, tuz, yumurta akı, az miktarda nişasta)`, en: `Paper-thin sheets (wheat flour, water, salt, egg whites, a small amount of starch)` } },
      { name: { tr: `Saf tereyağı (sadeyağ)`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, her yufka katmanına sürülür`, en: `100% clarified cow's butter, brushed between every phyllo layer` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — iç ve üst dolgu`, en: `Stone-ground, early-harvest Antep pistachios, unsalted — filling and topping` } },
      { name: { tr: `Şeker şerbeti (soğuk uygulama)`, en: `Sugar syrup (cold application)` }, detail: { tr: `Pancar şekeri, su, limon suyu — hafif doku için soğuk olarak uygulanır`, en: `Beet sugar, water, lemon juice — applied cold for lighter texture` } },
      { name: { tr: `Yaban meyve tepesi`, en: `Wild berry topping` }, detail: { tr: `Yaban mersini, böğürtlen ve orman meyveleri — soğutulmuş baklavanın üzerine taze olarak eklenir`, en: `Selection of wild berries (blueberry, blackberry, forest fruits) — applied fresh after cold preparation` } },
    ],
    ingredientsNote: { tr: ``, en: `` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Kabuklu yemiş (fıstık)`, `⚠ Süt (tereyağı)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Baklavada yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives in baklava`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer kabuklu yemişler içeren ürünler üretmektedir. Mutfaklarımız alerjen sertifikalı tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities.` },
    featuresEyebrow: { tr: `Farkını Yaratan Özellikler`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Gelenek ile Buluşması`, en: `Tradition Meets` },
    featuresTitleEm: { tr: `Dağın Derinliğinin`, en: `Forest & Depth` },
    features: [
      { icon: `🫐`, title: { tr: `Bol Yaban Meyvesi`, en: `Wild Berry Abundance` }, desc: { tr: `Yaban mersini, böğürtlen ve diğer orman meyvelerinin cömert bir karışımı,
soğutulmuş baklavayı kaplar; toprak tonlu bir tatlılık ve hafif asidite
getirir, tüm tabağı yukarı taşır. Kırmızı meyveli versiyon tazelik ve ekşilik
sunarken, yaban meyveli versiyon derinlik sunar — fıstığın kuru yemiş
karakterini tamamlayan daha koyu ve zengin bir harmoni.`, en: `A generous topping of blueberries, blackberries, and other wild forest fruits
covers the chilled baklava, bringing an earthy sweetness and gentle acidity
that lift the entire dish. Where the red berry version offers brightness and
tartness, the wild berry version provides depth — a darker, richer complement
to the nuttiness of the pistachio.` } },
      { icon: `🥜`, title: { tr: `Fıstık ve Orman Meyvesi`, en: `Pistachio and Forest Fruit` }, desc: { tr: `Taş baskı Gaziantep fıstığı ile yaban meyveleri beklenmedik biçimde uyumlu
bir ikili oluşturur. Her ikisinin paylaştığı toprak tonlu karakter ortak bir
iplik yaratırken, meyvenin tatlılığı ile kuru yemiş zenginliği katmanlı bir
kontrast üretir. Bu, gerçek karmaşıklığa sahip bir soğuk baklavadır — dikkat
isteyen bir tatlı.`, en: `The pairing of stone-ground Gaziantep pistachio and wild berries is an
unexpectedly harmonious one. The earthiness they share creates a common
thread, while the sweetness of the berries and the richness of the nut
create a layered contrast. This is cold baklava with real complexity — a
dessert that rewards attention.` } },
      { icon: `🌿`, title: { tr: `Mevsimsel Bir Karakter`, en: `A Seasonal Character` }, desc: { tr: `Yaban meyveleri, yetiştiği doğanın ve mevsimlerin karakterini taşır — bu da
ürüne diğer baklava çeşitlerinden farklı, doğaya bağlı bir his katar. Sonuç
olarak ortaya hem toprak tonlu hem de bol hissettiren, soğuk baklava
kategorisinde başka hiçbir şeye benzemeyen bir ürün çıkar.`, en: `Wild berries carry the character of the landscape and season in which they
grow — a quality that gives this product a connection to nature that feels
distinct from other baklava varieties. The result is something that feels
grounded and abundant at once, and unlike anything else in the cold baklava
category.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Dağ Meyveli Soğuk Baklava:`, en: `Wild Berry Cold Baklava:` },
    storyTitleEm: { tr: `Ormandan Gelen Derinlik`, en: `Depth from the Forest` },
    story: { tr: [`Saytad'daki soğuk baklava geleneği basit bir fikirle başladı: şerbeti sıcak değil
soğuk uygula ve yufkanın hafifliğini sıcak şerbetin asla sağlayamayacağı bir
şekilde koru. Bu temelden hareketle yaban meyveli varyasyon doğal bir uzantı
olarak ortaya çıktı — ormanın aromalarını Türk gastronomisinın en zarif kuru
yemişiyle buluşturmanın bir yolu olarak.`, `Baklavanın kendisi, tüm soğuk baklava ürünlerimizle aynı özenli süreçle
hazırlanır: el açması yufkanın her katmanına saf tereyağı sürülerek içine
taş baskı Gaziantep fıstığı yerleştirilir. Pişirme sonrasında katmanların ayrı
ve hafif kalmasını sağlamak için sıcak yerine soğuk şerbet kullanılır. Yaban
meyve tepesi her gün taze hazırlanır ve servis veya paketleme öncesinde soğutulmuş
dilimlerin üzerine cömertçe yerleştirilir.`, `Ortaya çıkan ürün, Türk baklava yapım sanatının kadim ustalığını dünyanın farklı
mutfak mirasından gelen malzemelerle buluşturmaktadır. Saytad yelpazesinin en
beklenmedik kombinasyonlarından biri olup sürekli olarak en çok konuşulan
ürünlerden biri olmayı sürdürmektedir. Soğuk baklavayı ilk kez keşfeden
misafirler için Dağ Meyveli versiyon çoğunlukla en akılda kalıcı deneyim olarak
öne çıkar.`], en: [`The cold baklava tradition at Saytad began with a simple idea: apply the syrup
cold, not hot, and preserve the lightness of the phyllo in a way that hot syrup
cannot. From that foundation, the wild berry variation emerged as a natural
extension — a way to bring the flavours of the forest into conversation with the
most refined nut in Turkish gastronomy.`, `The baklava itself is prepared in the same way as all of our cold baklava products:
stone-ground Gaziantep pistachios layered within hand-stretched phyllo, with pure
ghee butter applied between every sheet. After baking, cold syrup is used — rather
than hot — to allow the layers to remain distinct and light. The wild berry topping
is prepared fresh each day and applied generously over the chilled pieces before
serving or packaging.`, `The result is a product that combines the ancient craft of Turkish baklava-making
with ingredients drawn from a different part of the world's culinary heritage.
It is one of the more unexpected pairings in the Saytad range, and consistently
one of the most talked-about. For guests discovering cold baklava for the first
time, the Wild Berry version often proves the most memorable.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Soğuk baklava buzdolabında saklanmalıdır — oda sıcaklığında muhafazaya uygun değildir`, en: `Cold baklava must be kept refrigerated — it is not designed for room-temperature storage` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `En Fazla 3 Gün`, en: `Up to 3 Days` }, note: { tr: `Her zaman buzdolabında saklayın ve doğrudan buzdolabından servis edin`, en: `Keep refrigerated at all times and serve directly from the fridge` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma işlemi, soğuk hazırlık dokusuna ve taze meyve tepesine zarar verir`, en: `Freezing damages the delicate cold-preparation texture and the fresh berry topping` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Yaban meyve tepesi ve baklavanın tazeliği üretim günü en yüksek düzeydedir`, en: `The wild berry topping and baklava freshness are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün soğutmalı ambalajla teslimat.

Unutulmaz bir hediye seçeneği — kurumsal ve toplu siparişler memnuniyetle karşılanır.`, en: `Same-day delivery within Istanbul with refrigerated packaging.

An unforgettable gift choice — corporate and bulk orders welcome.` },
  },
  "sutlu-nuriye": {
    heroTag: { tr: `Soğuk Koleksiyon`, en: `Cold Collection` },
    heroSubItalic: { tr: `Sütlü baklava — yumuşak, kremsi, narin`, en: `The milk baklava — soft, creamy, delicate` },
    heroSub: { tr: `Şerbetin yerini sütün aldığı yer. Çıtırtının yerini yumuşaklığın aldığı yer.

Saf tereyağı. Taş baskı Gaziantep fıstığı. Yaptığımız en nazik baklava.`, en: `El yapımı. Where milk replaces syrup. Where softness replaces snap.

Pure ghee. Stone-ground Gaziantep pistachios. The gentlest baklava we make.` },
    longDesc: { tr: `Sütlü Nuriye, ayrı bir kategoride durur. Saytad'daki diğer tüm baklavalar
tatlılık ve nem için şeker şerbetine dayanırken, Sütlü Nuriye sütü kullanır —
baklava fırından çıktıktan sonra üzerine bol miktarda taze tam yağlı süt
dökülür. Süt yufka katmanlarına işledikçe çıtır ya da parlak değil; yumuşak,
kremsi ve kadifemsi bir doku oluşturur. Ortaya çıkan tatlı, tatlılığı daha
hafif, damağa karşı daha nazik ve tartışmasız biçimde süt ağırlıklıdır. Soğuk
servis edildiğinde, yaptığımız en sessiz ama en derin tatmin edici şeylerden
biridir.`, en: `Sütlü Nuriye is a category apart. While all other baklava at Saytad relies on
sugar syrup for sweetness and moisture, Sütlü Nuriye uses milk — fresh, whole
milk poured generously over the baklava after it comes out of the oven. As the
milk soaks into the phyllo layers, it creates a texture that is soft, creamy,
and pillowy rather than crisp or glossy. The result is a dessert that is subtler
in sweetness, gentler on the palate, and unmistakably milk-forward. Served
chilled, it is one of the most quietly satisfying things we make.` },
    badges: { tr: [`❄️ Soğuk servis`, `🥛 Şerbet yerine süt`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`❄️ Served chilled`, `🥛 Milk instead of syrup`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `Klasik Türk sütlü tatlı geleneği, Saytad usulüyle`, en: `A classic Turkish milk dessert tradition, prepared the Saytad way` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — iç ve üst dolgu`, en: `Stone-ground Gaziantep (Antep) pistachios — filling and topping` } },
      { key: { tr: `Sıvı`, en: `Liquid` }, val: { tr: `Pişirme sonrası dökülen taze tam yağlı süt — şerbeti tamamen ikame eder`, en: `Fresh whole milk poured after baking — replaces syrup entirely` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Her yufka katmanına sürülen saf tereyağı (sadeyağ)`, en: `Pure ghee (clarified butter) brushed between every phyllo layer` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Buzdolabında en fazla 3 gün · Her zaman soğukta muhafaza edilmelidir`, en: `Up to 3 days refrigerated · Must be kept chilled at all times` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Soğutmalı ambalaj kullanılır`, en: `Same-day within Istanbul · Refrigerated packaging used` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka (phyllo hamuru)`, en: `Phyllo dough (yufka)` }, detail: { tr: `İnce katman hamur (buğday unu, su, tuz, yumurta akı, az miktarda nişasta)`, en: `Paper-thin sheets (wheat flour, water, salt, egg whites, a small amount of starch)` } },
      { name: { tr: `Saf tereyağı (sadeyağ)`, en: `Pure ghee butter` }, detail: { tr: `%100 arıtılmış inek tereyağı, her yufka katmanına sürülür`, en: `100% clarified cow's butter, brushed between every phyllo layer` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — iç ve üst dolgu`, en: `Stone-ground, early-harvest Antep pistachios, unsalted — filling and topping` } },
      { name: { tr: `Taze tam yağlı süt`, en: `Fresh whole milk` }, detail: { tr: `Pişirme sonrası üzerine bol miktarda dökülür — şeker şerbetinin tamamen yerini alır, her katmana işler`, en: `Poured generously over the baklava after baking — replaces sugar syrup entirely, soaking into every layer` } },
      { name: { tr: `Şeker (az miktarda)`, en: `Sugar (small amount)` }, detail: { tr: `Yufka hazırlığında az miktarda şeker kullanılır; asıl tatlılık sütün doğal tatlılığından gelir`, en: `A small quantity of sugar is used in the phyllo preparation; the primary sweetness comes from the milk` } },
    ],
    ingredientsNote: { tr: `Süt içeriği hakkında not: Sütlü Nuriye, diğer baklava ürünlerimize kıyasla çok daha fazla süt içermektedir; zira süt temel sıvı bileşendir. Süt hassasiyeti olan misafirlerimizin bunu göz önünde bulundurması önerilir.`, en: `Note on milk content: Sütlü Nuriye contains significantly more milk than other baklava products, as milk is the primary liquid ingredient. Guests with dairy sensitivity should take this into account.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Kabuklu yemiş (fıstık)`, `⚠ Süt (tereyağı + taze süt)`, `⚠ Yumurta (hamurda yumurta akı)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`, `⚠ Milk (ghee + fresh milk)`, `⚠ Egg (egg whites in dough)`] },
    allergensFree: { tr: [`✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer kabuklu yemişler içeren ürünler üretmektedir. Mutfaklarımız alerjen sertifikalı tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities.` },
    featuresEyebrow: { tr: `Farkını Yaratan Özellikler`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Tamamen Farklı Bir`, en: `A Different Kind of` },
    featuresTitleEm: { tr: `Baklava Deneyimi`, en: `Baklava Entirely` },
    features: [
      { icon: `🥛`, title: { tr: `Şerbet Yerine Süt`, en: `Milk Instead of Syrup` }, desc: { tr: `Sütlü Nuriye'nin belirleyici özelliği, diğer tüm baklavalarda temel tat ve
nem kaynağı olan şeker şerbetinden tamamen vazgeçmesidir. Pişirme sonrası
taze tam yağlı süt baklavanın üzerine dökülür; yufka katmanlarına işleyerek
şerbetin tatlılığının yerini daha yumuşak, kremsi ve daha nazik tatlarla
doldurur. Bu tek değişiklik, deneyimin tamamını dönüştürür.`, en: `The defining characteristic of Sütlü Nuriye is its complete departure from
the sugar syrup that defines every other baklava. Fresh whole milk is poured
over the baklava after baking, soaking through the phyllo layers and replacing
the syrup's sweetness with something softer, creamier, and more gently
flavoured. This single change transforms the entire experience.` } },
      { icon: `☁️`, title: { tr: `Yumuşak, Kadifemsi Doku`, en: `Soft, Pillowy Texture` }, desc: { tr: `Geleneksel baklava çıtır çıtır kırılırken, Sütlü Nuriye teslim olur. Süte
batmış yufka, neredeyse muhallebi kıvamında yumuşak ve kadifemsi bir hal
alır; fıstık dolgusu ise kuru yemiş direncini korur. Yumuşak hamurun ve
fıstığın hafif direncinin yarattığı bu kontrast, tatlının en tatmin edici
unsurlarından biridir.`, en: `Where traditional baklava crackles and shatters, Sütlü Nuriye yields. The
milk-soaked phyllo becomes soft and pillowy — almost pudding-like in character
— while the pistachio filling retains its nutty substance. The contrast between
soft pastry and the slight resistance of the pistachio is one of the most
satisfying elements of this dessert.` } },
      { icon: `🌙`, title: { tr: `Hafif Tatlılık`, en: `Gentle Sweetness` }, desc: { tr: `Sütlü Nuriye, geleneksel baklavaya kıyasla çok daha az tatlıdır. Süt,
nemini ve hafif doğal tatlılığını katarken fıstığın aromasının ve sadeyağın
zenginliğinin ağır bir şerbetin gölgelemeyeceği şekilde öne çıkmasına izin
verir. Baklavayı çok zengin ya da çok tatlı bulanlar için bu ürün çoğunlukla
bakış açılarını tamamen değiştiren şey olur.`, en: `Sütlü Nuriye is considerably less sweet than traditional baklava. The milk
provides moisture and a mild, natural sweetness that allows the flavour of the
pistachio and the richness of the ghee to come forward in a way that heavy
syrup would obscure. For those who find baklava too rich or sweet, this is
often the one that changes their perspective entirely.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Sütlü Nuriye:`, en: `Sütlü Nuriye:` },
    storyTitleEm: { tr: `Sütün Her Şeyi Değiştirdiği An`, en: `When Milk Changes Everything` },
    story: { tr: [`Nuriye adı, Türk tatlı kültüründe nesiller boyu var olan sütlü baklava geleneğiyle
özdeşleşmiştir. Uluslararası arenada şerbetli versiyonu kadar tanınmasa da Sütlü
Nuriye, onu tanıyanların kalbinde özel bir yer tutar — çoğu zaman "baklava
sevmiyorum" diyenlerin sevdiğini keşfettiği baklava olarak anılır.`, `Saytad'da Sütlü Nuriye, diğer ürünlerimizle aynı yufka ve fıstık standartlarıyla
hazırlanır: taş baskı Gaziantep fıstığı, her katmana sürülen saf tereyağı ve
doğru renk ile yapıyı elde etmek için özenli pişirme. Baklava fırından çıktıktan
sonra şerbet tenceresine değil taze tam yağlı süte uzanırız — tüm ürün sıvıyla
dolana kadar her dilimi cömertçe ıslatacak şekilde. Ardından baklava soğuması ve
dinlenmesi için doğrudan buzdolabına alınır.`, `Soğuk servis edildiğinde ortaya çıkan sonuç, yaptıklarımızın hiçbirine benzemiyor.
Doku yumuşak ve kremsi. Tatlılık narin. Fıstık aroması daha belirgin değil —
daha az değil —; çünkü süt ortamı, onunla rekabet etmek yerine kuru yemiş
karakterini güçlendirir. Diğerlerine kıyasla daha sessiz bir tatlı — ama derinden
tatmin edici bir tatlı.`], en: [`The name Nuriye is traditionally associated with a milk-based version of baklava
that has existed in Turkish dessert culture for generations. While less famous
internationally than its syrup-based counterpart, Sütlü Nuriye holds a special
place in the affections of those who know it — often described as the baklava that
people who "don't like baklava" discover they love.`, `At Saytad, the Sütlü Nuriye is prepared using the same phyllo and pistachio
standards as our other products: stone-ground Gaziantep pistachios, pure ghee
butter between each layer, and careful baking to achieve the right colour and
structure. After the baklava comes out of the oven, instead of reaching for the
syrup pan, we pour fresh whole milk over the pieces — generously, allowing it
to soak through every layer until the entire product is saturated. It then goes
directly into the refrigerator to chill and set.`, `The result, when served cold, is unlike anything else we make. The texture is
soft and creamy. The sweetness is gentle. The pistachio flavour is more present,
not less, because the dairy environment amplifies its nuttiness without competing
against it. It is a quieter dessert than the others — but a deeply satisfying one.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Sütlü Nuriye her zaman buzdolabında saklanmalıdır — sütlü baklava oda sıcaklığında muhafazaya uygun değildir`, en: `Sütlü Nuriye must be refrigerated at all times — milk-based baklava is not suitable for room-temperature storage` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `En Fazla 3 Gün`, en: `Up to 3 Days` }, note: { tr: `Buzdolabında saklayın ve doğrudan buzdolabından servis edin — soğukluk deneyimin bir parçasıdır`, en: `Keep refrigerated and serve directly from the fridge — the cold temperature is part of the experience` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, süte batmış dokuya zarar verir ve tatlının karakterini önemli ölçüde değiştirir`, en: `Freezing damages the milk-soaked texture and significantly alters the character of the dessert` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Kremsi doku ve taze süt aroması üretim günü en yüksek düzeydedir`, en: `The creaminess and fresh milk flavour are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün soğutmalı ambalajla teslimat.

Nazik ve unutulmaz bir hediye — kurumsal ve toplu siparişler memnuniyetle karşılanır.`, en: `Same-day delivery within Istanbul with refrigerated packaging.

A gentle, memorable gift — corporate and bulk orders welcome.` },
  },
  "vegan-walnut-baklava": {
    heroTag: { tr: `Vegan Koleksiyon`, en: `Vegan Collection` },
    heroSubItalic: { tr: `%100 bitkisel — lezzetten taviz vermeden`, en: `100% plant-based — no compromise on flavour` },
    heroSub: { tr: `Handcrafted. Çıtır yufka. Taze çekilmiş ceviz. Doğal hurma şerbeti.

Geleneksel Türk baklava ustalığı — tamamen bitkisel.`, en: `Handcrafted. Crispy phyllo. Freshly crushed walnut. Natural date sherbet.

Pure Turkish baklava tradition — entirely plant-based.` },
    longDesc: { tr: `Vegan Cevizli Baklava'mız, klasik baklava yapım sürecinin her unsurunu — ince
el açması yufka, taze çekilmiş ceviz, bakır tepsede altın rengi pişirme — korur;
ancak hayvansal kaynaklı malzemeleri eşit özenle seçilmiş bitkisel alternatiflerle
ikame eder. Sadeyağın yerini bitkisel yağ, şeker şerbetinin yerini ise doğal hurma
şerbeti alır. Hurma şerbeti, yapay katkı maddesi içermeyen, daha derin ve karmaşık
bir tatlılık sağlar. Sonuç, %100 bitkisel olmasına karşın uzlaşma hissettirmeyen
bir baklavadır — çıtır, katmanlı ve gerçek anlamda tatmin edici.`, en: `Our Vegan Walnut Baklava uses every element of the classic baklava process —
paper-thin phyllo, freshly crushed walnuts, golden baking — but replaces the
animal-derived ingredients with equally considered plant-based alternatives.
Vegetable oil stands in for ghee, and a natural date sherbet replaces the
conventional sugar syrup, adding a deeper, more complex sweetness with no
artificial additives. The result is a baklava that is 100% plant-based without
feeling like a compromise — crispy, layered, and genuinely satisfying.` },
    badges: { tr: [`🌱 %100 Vegan`, `🌴 Hurma şerbeti`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`🌱 100% Vegan`, `🌴 Date sherbet`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir — Saytad vegan tarifi`, en: `Made in Istanbul — Saytad vegan recipe` } },
      { key: { tr: `Kuru yemiş`, en: `Nut filling` }, val: { tr: `Taze çekilmiş ceviz, tuzsuz — iç ve üst dolgu`, en: `Freshly crushed walnuts — filling and topping` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Soğuk sıkım bitkisel yağ — sadeyağı tamamen ikame eder`, en: `Cold-pressed vegetable oil — replaces ghee entirely` } },
      { key: { tr: `Şerbet`, en: `Sherbet` }, val: { tr: `Doğal hurma suyu şerbeti — rafine şeker yok, hayvansal ürün yok`, en: `Natural date juice sherbet — no refined cane sugar, no animal products` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar`, en: `2 days at room temperature · Up to 7 days refrigerated` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt genelinde kargo mevcut`, en: `Same-day within Istanbul · Nationwide shipping available` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka (phyllo hamuru)`, en: `Phyllo dough (yufka)` }, detail: { tr: `İnce katman hamur (buğday unu, su, tuz, az miktarda nişasta)`, en: `Paper-thin sheets (wheat flour, water, salt, a small amount of starch)` } },
      { name: { tr: `Soğuk sıkım bitkisel yağ`, en: `Cold-pressed vegetable oil` }, detail: { tr: `Bitkisel kaynaklı yağ, her yufka katmanına sürülür — sadeyağın tamamen yerini alır`, en: `Plant-based fat source, brushed between every phyllo layer — replaces ghee entirely` } },
      { name: { tr: `Taze çekilmiş ceviz`, en: `Freshly crushed walnuts` }, detail: { tr: `Tuzsuz ceviz, taze çekilmiş — iç ve üst dolgu`, en: `Unsalted walnuts, freshly crushed — filling and topping` } },
      { name: { tr: `Hurma suyu şerbeti`, en: `Date juice sherbet` }, detail: { tr: `Doğal hurma özü, su, limon suyu — geleneksel şeker şerbetinin yerini alır. Rafine şeker ve yapay katkı maddesi içermez`, en: `Natural date extract, water, lemon juice — replaces conventional sugar syrup. Provides a deeper, less sharp sweetness with no refined cane sugar` } },
    ],
    ingredientsNote: { tr: `Tamamen vegan: Bu ürün hiçbir hayvansal kaynaklı bileşen içermez. Sadeyağ yok, tereyağı yok, süt yok, bal yok, yumurta yok.`, en: `Fully vegan: This product contains no animal-derived ingredients. No ghee, no butter, no milk, no honey, no eggs.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Kabuklu yemiş (ceviz)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (walnut)`] },
    allergensFree: { tr: [`✓ Süt ürünü yok`, `✓ Yumurta yok`, `✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Fıstık yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No dairy / milk`, `✓ No eggs`, `✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No pistachio`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları fıstık, fındık ve diğer kabuklu yemişler içeren ürünler üretmektedir. Mutfaklarımız alerjen sertifikalı tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing pistachios, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities.` },
    featuresEyebrow: { tr: `Farkını Yaratan Özellikler`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Gerçek Baklava.`, en: `Genuine Baklava.` },
    featuresTitleEm: { tr: `Tamamen Bitkisel.`, en: `Entirely Plant-Based.` },
    features: [
      { icon: `🌴`, title: { tr: `Doğal Hurma Şerbeti`, en: `Natural Date Sherbet` }, desc: { tr: `Bu ürünün en belirgin unsuru hurma suyu şerbetidir. Rafine şeker yerine
konsantre hurma özünden hazırlanan bu şerbet, gerekli tatlılık ve nemi
sağlarken — toprak tonlu, karamele yakın, ince biçimde karmaşık —
geleneksel şeker şerbetinin sunamayacağı bir lezzet derinliği sunar.
Aynı zamanda rafine şeker ve herhangi bir yapay katkı maddesi içermez.`, en: `The most distinctive element of this product is the date juice sherbet. Made
from concentrated date extract rather than refined cane sugar, it provides
the necessary sweetness and moisture while offering a depth of flavour —
earthy, caramel-like, subtly complex — that conventional sugar syrup cannot
match. It also means no refined sugar and no artificial additives of any kind.` } },
      { icon: `🌱`, title: { tr: `Ustalıktan Taviz Yok`, en: `No Compromise on Craft` }, desc: { tr: `Aynı el açması yufka tekniği, aynı özenli katlama, aynı bakır tepsede
pişirme yöntemi — Saytad baklavasını tanımlayan her şey bu vegan versiyonda
da korunur. Değişen tek şey yağ kaynağı (sadeyağ yerine bitkisel yağ) ve
şerbettir (şeker yerine hurma). Ustalık tamamen aynı kalır.`, en: `The same hand-rolled phyllo technique, the same careful layering, the same
copper-pan baking method — everything that defines Saytad baklava is preserved
in this vegan version. The only changes are the fat source (vegetable oil
instead of ghee) and the sherbet (date instead of cane sugar). The craftsmanship
is entirely unchanged.` } },
      { icon: `🫘`, title: { tr: `Cevizin Farkı`, en: `The Walnut Difference` }, desc: { tr: `Ceviz, baklavaya fıstıktan farklı bir karakter katar: daha toprak tonlu,
daha güçlü, tatlı şerbete karşı güzel duran hafif bir acılıkla. Önceden
öğütülmüş değil, taze çekilmiş olan cevizler yağlarını ve doğal lezzetini
korur. Hurma şerbetiyle birleşince ortaya gerçek bir derinliğe sahip bir
baklava çıkar — zengin ama hiçbir zaman ağır olmayan.`, en: `Walnut brings a different character to baklava than pistachio: earthier, more
robust, with a slight bitterness that plays well against the sweet sherbet.
Freshly crushed rather than pre-ground, the walnuts in this baklava retain
their oils and natural flavour. Combined with the date sherbet, the result
is a baklava with real depth — rich without being heavy.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Vegan Cevizli Baklava:`, en: `Vegan Walnut Baklava:` },
    storyTitleEm: { tr: `Geleneğin Yeniden Yorumu`, en: `Tradition Reimagined` },
    story: { tr: [`Geleneksel Türk baklavası iki hayvansal kaynaklı malzemeye dayanır: yufkaya
karakteristik çıtırlığını kazandıran sadeyağ ve tatlılık ile nem sağlayan şeker
şerbeti. Saytad'ın Vegan Cevizli Baklava'sında her ikisi de değiştirilir — ancak
rastgele değil. Her alternatif, yalnızca ne içermediği için değil, nihai ürüne
ne kattığı için seçilmiştir.`, `İnce yufka katmanları arasına sürüldüğünde gerekli hafifliği ve çıtırlığı
sağladığı için soğuk sıkım bitkisel yağ tercih edilmiştir. Hurma suyu şerbeti
ise hurmanın Orta Doğu ve Anadolu'nun geniş mutfak geleneğinin binlerce yıllık
bir parçası olması nedeniyle seçilmiştir — hurma tatlılığını baklavada kullanmak
modern bir icat değil; daha kadim, daha az rafine hazırlık yöntemlerine bir
dönüştür.`, `Ceviz dolgusu, tıpkı geleneksel cevizli baklavamızda olduğu gibi her sabah taze
çekilir. Katlama aynı. Pişirme aynı. Elinize ulaşan ürün, pratik her açıdan
eksiksiz bir baklava deneyimidir — hayvansal ürün içermeyen bir beslenme
alışkanlığına sahip olanlara, daha az bir versiyonunu kabullenmeksizin sunulur.`], en: [`Traditional Turkish baklava relies on two animal-derived ingredients: ghee butter,
which provides richness and the characteristic flakiness of the phyllo, and sugar
syrup, which provides sweetness and moisture. For Saytad's Vegan Walnut Baklava,
both are replaced — but not substituted arbitrarily. Each alternative was chosen
for what it contributes to the finished product, not merely what it avoids.`, `Cold-pressed vegetable oil was selected as the fat source because, when applied
between paper-thin phyllo sheets, it provides the lightness and crispness that
the finished baklava requires. Date juice sherbet was chosen because dates have
been part of the broader culinary tradition of the Middle East and Anatolia for
millennia — using date sweetness in baklava is not a modern invention but a
return to older, less refined methods of preparation.`, `The walnut filling is freshly crushed each morning, just as in our conventional
walnut baklava. The layering is identical. The baking is identical. What you receive
is a product that is, in every practical sense, the full baklava experience —
available to those whose diet does not include animal products, without asking
them to accept a lesser version of it.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Güne Kadar`, en: `Up to 2 Days` }, note: { tr: `Doğrudan güneş ışığından uzak, serin ve kuru bir yerde saklayın. Oda sıcaklığında en fazla 2 gün içinde tüketin`, en: `Store in a cool, dry place away from direct sunlight. Best consumed within 2 days at room temperature` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Buzdolabı raf ömrünü uzatır — en iyi doku için servis öncesi oda sıcaklığına gelmesini bekleyin`, en: `Refrigeration extends shelf life — allow to come to room temperature before serving for best texture` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, narin yufka katmanlarına zarar verir ve hurma şerbetinin dokusunu bozar`, en: `Freezing damages the delicate phyllo layers and alters the texture of the date sherbet` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Baklava her zaman yapıldığı gün en lezzetlidir — çıtırlık ve tazelik zirvededir`, en: `Baklava is always at its finest on the day it is made — the crispness and freshness are at their peak` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat · Yurt genelinde kargo mevcut.

Düşünceli bir bitkisel hediye — kurumsal ve toplu siparişler memnuniyetle karşılanır.`, en: `Same-day delivery within Istanbul · Nationwide shipping available.

A thoughtful plant-based gift — corporate and bulk orders welcome.` },
  },
  "vegan-pistachio-burma-kadayif": {
    heroTag: { tr: `Vegan Koleksiyon`, en: `Vegan Collection` },
    heroSubItalic: { tr: `Burmalı tel kadayıf, bitkisel`, en: `Twisted shredded pastry, plant-based` },
    heroSub: { tr: `El yapımı. Fıstık özekli tel kadayıf, burma tekniğiyle şekillendirilmiş.

Bitkisel yağ. Gaziantep fıstığı. Tamamen bitkisel.`, en: `El yapımı. Shredded kadayıf twisted around a pistachio core.

Vegetable oil. Gaziantep pistachios. Entirely plant-based.` },
    longDesc: { tr: `Burma Kadayıf, adını şekillendirmek için kullanılan burma tekniğinden alır: tel
kadayıf düz serilir, ortasına yoğun bir fıstık dolgusu yerleştirilir ve bütün
parça dolgunun etrafına sıkıca sarılarak bükülür. Pişirme sırasında dış katmanlar
çıtırlaşıp renk alırken fıstık özek yoğun ve konsantre kalır. Vegan versiyonumuzda
sadeyağ yerine bitkisel yağ kullanılır; bu sayede kadayıf aynı altın rengi ve
tatmin edici çıtırlığa ulaşırken tamamen bitkisel kalır. Taş baskı Gaziantep
fıstığı hem iç hem de üst dolgu için kullanılır.`, en: `Burma Kadayıf takes its name from the twisting technique used to form it: shredded
wheat pastry is rolled tightly around a concentrated pistachio core, creating
cylindrical pieces with a crispy exterior and a dense, nutty centre. In our vegan
version, the ghee butter is replaced with vegetable oil — allowing the kadayıf
to achieve the same golden colour and satisfying crunch while remaining completely
plant-based. Stone-ground Gaziantep pistachios are used throughout, ensuring the
same quality of filling and topping as in our conventional Burma Kadayıf.
A bitkisel (plant-based) twist on a Gaziantep classic.` },
    badges: { tr: [`🌱 %100 Vegan`, `🌀 Burma tekniği`, `🫙 Her gün taze`, `📦 Hediye ambalajı`], en: [`🌱 100% Vegan`, `🌀 Twisted technique`, `🫙 Made fresh daily`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir — Saytad vegan tarifi`, en: `Made in Istanbul — Saytad vegan recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — yoğun özek dolgu ve üst`, en: `Stone-ground Gaziantep (Antep) pistachios — core filling and topping` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Soğuk sıkım bitkisel yağ — sadeyağı tamamen ikame eder`, en: `Cold-pressed vegetable oil — replaces ghee entirely` } },
      { key: { tr: `Şerbet`, en: `Sherbet` }, val: { tr: `Standart şeker şerbeti — hayvansal ürün içermez`, en: `Standard sugar syrup — no animal products` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar`, en: `2 days at room temperature · Up to 7 days refrigerated` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt genelinde kargo mevcut`, en: `Same-day within Istanbul · Nationwide shipping available` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Tel kadayıf`, en: `Kadayıf (tel kadayıf / shredded wheat)` }, detail: { tr: `İnce tel kadayıf (buğday unu, su, tuz)`, en: `Fine shredded wheat strands (wheat flour, water, salt)` } },
      { name: { tr: `Soğuk sıkım bitkisel yağ`, en: `Cold-pressed vegetable oil` }, detail: { tr: `Tel kadayıfa uygulanan bitkisel kaynaklı yağ — sadeyağın tamamen yerini alır`, en: `Plant-based fat source applied to the kadayıf strands — replaces ghee entirely` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — yoğun özek dolgu ve üst`, en: `Stone-ground, early-harvest Antep pistachios, unsalted — concentrated core filling and topping` } },
      { name: { tr: `Şeker şerbeti`, en: `Sugar syrup` }, detail: { tr: `Pancar şekeri, su, limon suyu — pişirme sonrası dökülür. Hayvansal ürün içermez`, en: `Beet sugar, water, lemon juice — poured after baking. Contains no animal products` } },
    ],
    ingredientsNote: { tr: `Tamamen vegan: Bu ürün hiçbir hayvansal kaynaklı bileşen içermez. Sadeyağ yok, tereyağı yok, süt yok, bal yok, yumurta yok.`, en: `Fully vegan: This product contains no animal-derived ingredients. No ghee, no butter, no milk, no honey, no eggs.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Kabuklu yemiş (fıstık)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`] },
    allergensFree: { tr: [`✓ Süt ürünü yok`, `✓ Yumurta yok`, `✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No dairy / milk`, `✓ No eggs`, `✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer kabuklu yemişler içeren ürünler üretmektedir. Mutfaklarımız alerjen sertifikalı tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities.` },
    featuresEyebrow: { tr: `Farkını Yaratan Özellikler`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Burma Tekniği.`, en: `The Twist.` },
    featuresTitleEm: { tr: `Bitkisel Ustalık.`, en: `Plant-Based.` },
    features: [
      { icon: `🌀`, title: { tr: `Burma Tekniği`, en: `The Twist Technique` }, desc: { tr: `Burma Kadayıf, kendine özgü silindirik formunu belirli bir tekniğe borçludur:
ince tel kadayıf düz serilir, fıstık dolgusu ortasına yerleştirilir ve bütün
parça dolgunun etrafına sıkıca sarılarak bükülür. Pişirildiğinde dış teller
çıtırlaşıp renk alırken fıstık özek yoğun ve konsantre kalır. Bu form,
çıtır dış yüzey ile kuru yemiş iç arasındaki kontrastı en üst düzeye çıkarır.`, en: `Burma Kadayıf owes its distinctive cylindrical form to a specific technique:
fine shredded wheat strands are laid flat, a pistachio filling is placed along
the centre, and the whole thing is twisted and rolled tightly around the filling.
When baked, the outer strands crisp and colour while the pistachio core stays
dense and concentrated. It is a form that maximises the contrast between crispy
exterior and nutty interior.` } },
      { icon: `🌱`, title: { tr: `Bitkisel Yağ, Aynı Çıtırlık`, en: `Vegetable Oil, Same Crunch` }, desc: { tr: `Vegan bir kadayıfın zorluğu, sadeyağın sağladığı altın rengi ve tatmin edici
çıtırlığa ulaşmaktır. Soğuk sıkım bitkisel yağ bu zorluğu aşar: pişirmeden
önce tel kadayıfa eşit biçimde uygulandığında, görsel ve dokusal açıdan
geleneksel versiyondan ayırt edilemez bir çıtır ve altın dış yüzey oluşturur.
Bitkisel yağ, hayvansal yağın sağladığı her şeyi karşılar — hiçbir şey
eksilmez.`, en: `The challenge of a vegan kadayıf is achieving the golden colour and satisfying
crunch that ghee butter provides. Cold-pressed vegetable oil meets this challenge:
applied evenly to the kadayıf strands before baking, it produces a crispy,
golden exterior that is visually and texturally indistinguishable from the
conventional version. The plant-based fat achieves everything the animal fat
does — nothing is lost.` } },
      { icon: `🥜`, title: { tr: `Yoğun Fıstık Özek`, en: `Concentrated Pistachio Core` }, desc: { tr: `Burma Kadayıf'taki fıstık dolgusu, diğer baklava formlarına kıyasla daha
konsantredir — sıkı burma, dolguyu her parçanın tamamında uzanan yoğun ve
kuru yemiş açısından yoğun bir özeke sıkıştırır. Taş baskı Gaziantep fıstığı
kullanılır ve kalitesi vegan versiyonda da tam anlamıyla korunur. Her ısırıkta
tutarlı bir fıstık lezzeti alınır.`, en: `The pistachio filling in Burma Kadayıf is more concentrated than in other
forms of baklava — the tight twist compresses the filling into a dense,
intensely nutty core that runs through every piece. Stone-ground Gaziantep
pistachios are used throughout, and their quality is preserved fully in the
vegan version. Every bite delivers a consistent hit of pistachio flavour.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Vegan Fıstıklı Burma Kadayıf:`, en: `Vegan Pistachio Burma Kadayıf:` },
    storyTitleEm: { tr: `Form ve İlke`, en: `Form and Principle` },
    story: { tr: [`Kadayıf — bu ürünün özündeki tel hamur — yufkadan farklı bir fiziksel yapıya
sahiptir. Yufka katmanlıyken kadayıf dokunmuştur; yufka düzken kadayıf
şekillendirilebilir. Burma formu bu esneklikten tam anlamıyla yararlanır;
telleri hem pişirme hem de şerbet uygulaması boyunca şeklini koruyan sıkı
silindirler halinde sarar.`, `Saytad'da Burma Kadayıf'ın vegan versiyonu, geleneksel versiyonuyla aynı
tekniği izler. Taş baskı Gaziantep fıstığı tel kadayıfın ortasına yerleştirilir,
ardından teller dolgunun etrafına sıkıca sarılır ve pişirme tepsisine dizilir.
Sadeyağ yerine soğuk sıkım bitkisel yağ uygulanarak teller eşit biçimde kaplanır.
Derin altın rengi alana kadar pişirildikten sonra üzerine hayvansal ürün içermeyen
standart şeker şerbeti dökülür.`, `Ortaya çıkan kadayıf, gerçekten önemli olan her açıdan — doku, lezzet, görünüm
ve yeme tatmini — geleneksel muadiliyle eşdeğerdir. Bitkisel diyetle beslenen,
vegan Türk tatlısının daha az değerli Türk tatlısı anlamına geleceğini düşünenler
için Vegan Fıstıklı Burma Kadayıf, bu görüşü doğrudan çürüten bir cevaptır.`], en: [`Kadayıf — the shredded wheat pastry at the heart of this product — has a different
physical structure from phyllo. Where phyllo is layered, kadayıf is woven; where
phyllo is flat, kadayıf can be shaped. The Burma form takes full advantage of this
flexibility, rolling the strands into tight cylinders that hold their shape through
baking and syrup application alike.`, `At Saytad, the vegan version of our Burma Kadayıf follows the same technique as
the conventional one. Stone-ground Gaziantep pistachios are placed at the centre
of the kadayıf strands, which are then twisted tightly around the filling and
arranged in the baking tray. Cold-pressed vegetable oil is applied in place of
ghee, coating the strands evenly. After baking to a deep golden colour, standard
sugar syrup — which contains no animal products — is poured over the pieces.`, `The result is a kadayıf that is, in every sense that matters — texture, flavour,
appearance, and the satisfaction of the eating — equal to its conventional
counterpart. For those following plant-based diets who believe that vegan Turkish
pastry must mean lesser Turkish pastry, the Vegan Pistachio Burma Kadayıf is a
direct refutation.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Güne Kadar`, en: `Up to 2 Days` }, note: { tr: `Doğrudan güneş ışığından uzak, serin ve kuru bir yerde saklayın. Oda sıcaklığında en fazla 2 gün içinde tüketin`, en: `Store in a cool, dry place away from direct sunlight. Best consumed within 2 days at room temperature` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Buzdolabı raf ömrünü uzatır — en iyi çıtırlık için servis öncesi oda sıcaklığına gelmesini bekleyin`, en: `Refrigeration extends shelf life — allow to come to room temperature before serving for best crunch` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma tel hamurun dokusunu ve şerbetin kıvamını olumsuz etkiler`, en: `Freezing affects the texture of the shredded pastry and the consistency of the syrup` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Kadayıf çıtırlığı ve fıstık tazeliği üretim günü en yüksek düzeydedir`, en: `Kadayıf crunch and pistachio freshness are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat · Yurt genelinde kargo mevcut.

Özgün bir bitkisel hediye — kurumsal ve toplu siparişler memnuniyetle karşılanır.`, en: `Same-day delivery within Istanbul · Nationwide shipping available.

A distinctive plant-based gift — corporate and bulk orders welcome.` },
  },
  "vegan-date-prince-baklava": {
    heroTag: { tr: `Vegan Koleksiyon`, en: `Vegan Collection` },
    heroSubItalic: { tr: `Katkısız, doğal olarak zengin`, en: `Additive-free, naturally indulgent` },
    heroSub: { tr: `El yapımı. Cömert fıstık dolgusu. Doğal hurma suyu şerbeti.

En görkemli bitkisel baklava — hiçbir taviz yok.`, en: `Handcrafted. Generous pistachio filling. Natural date juice sherbet.

Plant-based baklava at its most opulent — zero compromise.` },
    longDesc: { tr: `Prens Baklava formatı cömertliğiyle tanımlanır: daha kalın dilimler, daha bol
fıstık dolgusu ve her katmana işleyen daha cömert bir şerbet dökümü. Vegan
versiyonumuzun belirleyici unsuru ise hurma suyu şerbetidir. Geleneksel şeker
şerbeti yerine konsantre hurma özü kullanılır ve sonuç, rafine şekerli bir
versiyonun sunabileceğinden daha zengin, daha derin ve daha doğal olarak
lezzetli bir ürüntür. Yapay katkı maddesi yok. Hayvansal ürün yok. Gerçek
anlamda premium bir bitkisel baklava.`, en: `The Prince Baklava format is defined by generosity: thicker cuts, a more
abundant pistachio filling, and a more generous pour of sherbet that soaks
through every layer. In our vegan version, the defining addition is the
date juice sherbet. Rather than conventional sugar syrup, concentrated date
extract is used to sweeten the baklava — and the result is a product that
is richer, deeper, and more naturally indulgent than a cane-sugar version
could be. No artificial additives. No animal products. A genuinely premium
plant-based baklava.` },
    badges: { tr: [`🌱 %100 Vegan`, `🌴 Hurma suyu şerbeti`, `✨ Katkısız`, `📦 Hediye ambalajı`], en: [`🌱 100% Vegan`, `🌴 Date juice sherbet`, `✨ Additive-free`, `📦 Gift packaging`] },
    meta: [
      { key: { tr: `Köken`, en: `Origin` }, val: { tr: `İstanbul'da üretilir — Saytad vegan tarifi`, en: `Made in Istanbul — Saytad vegan recipe` } },
      { key: { tr: `Fıstık`, en: `Pistachio` }, val: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — cömert dolgu ve üst`, en: `Stone-ground Gaziantep (Antep) pistachios — generous filling and topping` } },
      { key: { tr: `Yağ kaynağı`, en: `Fat source` }, val: { tr: `Soğuk sıkım bitkisel yağ — sadeyağı tamamen ikame eder`, en: `Cold-pressed vegetable oil — replaces ghee entirely` } },
      { key: { tr: `Şerbet`, en: `Sherbet` }, val: { tr: `Doğal hurma suyu şerbeti — rafine şeker yok, yapay katkı maddesi yok, hayvansal ürün yok`, en: `Natural date juice sherbet — no refined cane sugar, no artificial additives, no animal products` } },
      { key: { tr: `Raf ömrü`, en: `Shelf life` }, val: { tr: `Oda sıcaklığında 2 gün · Buzdolabında 7 güne kadar`, en: `2 days at room temperature · Up to 7 days refrigerated` } },
      { key: { tr: `Teslimat`, en: `Delivery` }, val: { tr: `İstanbul içi aynı gün · Yurt genelinde kargo mevcut`, en: `Same-day within Istanbul · Nationwide shipping available` } },
      { key: { tr: `Şubeler`, en: `Locations` }, val: { tr: `Saytad Bahçeşehir · Saytad Yeşilköy`, en: `Saytad Bahçeşehir · Saytad Yeşilköy` } },
    ],
    ingredients: [
      { name: { tr: `Yufka (phyllo hamuru)`, en: `Phyllo dough (yufka)` }, detail: { tr: `İnce katman hamur (buğday unu, su, tuz, az miktarda nişasta)`, en: `Paper-thin sheets (wheat flour, water, salt, a small amount of starch)` } },
      { name: { tr: `Soğuk sıkım bitkisel yağ`, en: `Cold-pressed vegetable oil` }, detail: { tr: `Bitkisel kaynaklı yağ, her yufka katmanına sürülür — sadeyağın tamamen yerini alır`, en: `Plant-based fat source, brushed between every phyllo layer — replaces ghee entirely` } },
      { name: { tr: `Gaziantep fıstığı`, en: `Gaziantep pistachios` }, detail: { tr: `Taş baskı, erken hasat Antep fıstığı, tuzsuz — cömert dolgu ve üst`, en: `Stone-ground, early-harvest Antep pistachios, unsalted — generous filling and topping` } },
      { name: { tr: `Hurma suyu şerbeti`, en: `Date juice sherbet` }, detail: { tr: `Doğal hurma özü, su, limon suyu — geleneksel şeker şerbetinin yerini alır. Rafine şeker ve yapay katkı maddesi içermez`, en: `Natural date extract, water, lemon juice — replaces conventional sugar syrup. No refined cane sugar, no artificial additives` } },
    ],
    ingredientsNote: { tr: `Tamamen vegan ve katkısız: Bu ürün hiçbir hayvansal kaynaklı bileşen ve yapay katkı maddesi içermez. Sadeyağ yok, tereyağı yok, süt yok, bal yok, yumurta yok, koruyucu madde yok.`, en: `Fully vegan & additive-free: This product contains no animal-derived ingredients and no artificial additives. No ghee, no butter, no milk, no honey, no eggs, no preservatives.` },
    allergensContains: { tr: [`⚠ Gluten (buğday)`, `⚠ Kabuklu yemiş (fıstık)`], en: [`⚠ Gluten (wheat)`, `⚠ Tree nuts (pistachio)`] },
    allergensFree: { tr: [`✓ Süt ürünü yok`, `✓ Yumurta yok`, `✓ Yer fıstığı yok`, `✓ Susam yok`, `✓ Soya yok`, `✓ Ceviz yok`, `✓ Yapay katkı maddesi yok`], en: [`✓ No dairy / milk`, `✓ No eggs`, `✓ No peanuts`, `✓ No sesame`, `✓ No soya`, `✓ No walnuts`, `✓ No artificial additives`] },
    allergensCrossNote: { tr: `Çapraz bulaşma uyarısı: Saytad mutfakları ceviz, fındık ve diğer kabuklu yemişler içeren ürünler üretmektedir. Mutfaklarımız alerjen sertifikalı tesisler değildir.`, en: `Cross-contamination advisory: Saytad kitchens produce products containing walnuts, hazelnuts and other tree nuts. Our kitchens are not certified allergen-free facilities.` },
    featuresEyebrow: { tr: `Farkını Yaratan Özellikler`, en: `What Sets It Apart` },
    featuresTitle: { tr: `Prens Formatı.`, en: `The Prince Format.` },
    featuresTitleEm: { tr: `Hurmanın Farkı.`, en: `The Date Difference.` },
    features: [
      { icon: `🌴`, title: { tr: `Hurma Suyu Şerbeti`, en: `Date Juice Sherbet` }, desc: { tr: `Hurma suyu şerbeti, bu ürünü standart bir vegan baklavanın ötesine taşıyan
unsurdur. Hurma kendine özgü bir lezzet taşır — toprak tonlu, karamele yakın,
rafine şekerin asla sunamayacağı doğal bir karmaşıklıkla. Prens kesim
baklavanın üzerine cömertçe dökülüp katlara işlendiğinde, aynı anda zengin
ve doğal, tatlı ve karmaşık olan bir lezzet derinliği yaratır.`, en: `The date juice sherbet is what elevates this product above a standard vegan
baklava. Dates carry their own distinct flavour — earthy, caramel-like,
with a natural complexity that refined cane sugar simply cannot provide.
When poured generously over the Prince-cut baklava and allowed to soak
through the layers, it creates a depth of flavour that is simultaneously
rich and natural, sweet and complex.` } },
      { icon: `👑`, title: { tr: `Prens Formatı`, en: `The Prince Format` }, desc: { tr: `"Prens" kesimi, standart baklavadan daha kalın, daha cömert boyutlu bir
dilime işaret eder — her porsiyonda daha fazla dolgu, daha fazla katman
ve daha fazla şerbet. Baklava deneyimini ölçülü tutmak istemeyenler için
tasarlanmış bir formattır. Hurma şerbeti ve taş baskı fıstıkla birleşince,
Saytad vegan yelpazesinin en görkemli ürünü ortaya çıkar.`, en: `The "Prince" cut refers to a thicker, more generously proportioned piece
than standard baklava — more filling, more layers, and more sherbet in
every portion. It is a format designed for those who do not want to
moderate their baklava experience. Combined with the date sherbet and
the stone-ground pistachio, the result is the most opulent entry in the
Saytad vegan range.` } },
      { icon: `✨`, title: { tr: `Katkısız`, en: `Additive-Free` }, desc: { tr: `Bu ürün hiçbir türde yapay katkı maddesi, koruyucu, renklendirici veya
aroma maddesi içermez. Hurma şerbeti yalnızca konsantre hurma özünden
yapılır. Fıstık tuzsuz ve aromasız kullanılır. Yufka sadece buğday unu,
su ve tuz içerir. Tattığınız şey içindekilerdir — fazlası da eksiği de yok.`, en: `This product contains no artificial additives, preservatives, colourings,
or flavourings of any kind. The date sherbet is made from concentrated
date extract alone. The pistachio is unsalted and unflavoured. The phyllo
contains only wheat flour, water, and salt. What you taste is what is in it —
nothing more, nothing less.` } },
    ],
    storyEyebrow: { tr: `Arkasındaki Ustalık`, en: `The Craft Behind It` },
    storyTitle: { tr: `Vegan Hurmalı Prens Baklava:`, en: `Vegan Date Juicy Prince Baklava:` },
    storyTitleEm: { tr: `Doğal Bir Görkemlilik`, en: `Opulence, Naturally` },
    story: { tr: [`Prens Baklava, Türk şekerlemeciliğinde uzun zamandır cömertliğin bir ifadesi
olarak var olmuştur. Daha kalın dilimler ve daha bol dolgu, bu baklavanın gündelik
değil; biraz daha fazlasını hak eden anlar için yapıldığını gösterir. Saytad'ın
vegan versiyonunda bu cömertlik, farklı bir tatlandırıcıyla daha da güçlenir —
ürüne kendi tarihini ve lezzetini katan bir tatlandırıcıyla.`, `Hurma, Orta Doğu, Kuzey Afrika ve Anadolu'da binlerce yıldır yetiştirilmektedir.
Rafine şeker ortaya çıkmadan çok önce, bölge mutfaklarında tatlılaştırıcı olarak
kullanılmıştır. Bu baklavada hurma suyu şerbetini kullanmak, modern bir sağlık
trendi değil; tatlı yapmanın daha kadim ve daha az işlenmiş yöntemine bir dönüştür
— ve lezzet bunu yansıtır: şeker şurubundan daha derin, daha sıcak ve daha karmaşık.`, `Taş baskı Gaziantep fıstığı, her katmana soğuk sıkım bitkisel yağ sürülerek
el açması yufka arasına yerleştirilir. Altın rengi alana kadar pişirildikten
sonra hurma suyu şerbeti cömertçe dökülür — prens formatının gerektirdiğinden
de cömertçe. Sonuç, her meşru anlamda premium bir baklavadır — ve tamamen bitkisel.`], en: [`The Prince Baklava is a format that has long existed in Turkish confectionery
as a statement of generosity. Thicker cuts and a more abundant filling signal
that this is not an everyday baklava but something made for occasions that
warrant a little more. In the vegan version at Saytad, that generosity is
amplified by a different kind of sweetener — one that brings its own history
and flavour to the product.`, `Dates have been cultivated across the Middle East, North Africa, and Anatolia
for thousands of years. Their concentrated natural sweetness has served as a
sweetener in the region's cuisines long before refined sugar existed. Using date
juice sherbet in this baklava is not a modern health-food trend but a connection
to an older, less processed way of making sweet things — and the flavour reflects
that: deeper, warmer, and more complex than cane sugar syrup.`, `Stone-ground Gaziantep pistachios are layered within hand-stretched phyllo, with
cold-pressed vegetable oil applied between each sheet. After baking to a golden
colour, the date juice sherbet is poured generously — more generously than in a
standard baklava, because the Prince format demands it. The result is a product
that is, in every legitimate sense, a premium baklava — and entirely plant-based.`] },
    storage: [
      { icon: `🌡️`, title: { tr: `Oda Sıcaklığı`, en: `Room Temperature` }, val: { tr: `2 Güne Kadar`, en: `Up to 2 Days` }, note: { tr: `Doğrudan güneş ışığından uzak, serin ve kuru bir yerde saklayın. Oda sıcaklığında en fazla 2 gün içinde tüketin`, en: `Store in a cool, dry place away from direct sunlight. Best consumed within 2 days at room temperature` } },
      { icon: `❄️`, title: { tr: `Buzdolabında`, en: `Refrigerated` }, val: { tr: `7 Güne Kadar`, en: `Up to 7 Days` }, note: { tr: `Buzdolabı raf ömrünü uzatır — en iyi doku için servis öncesi oda sıcaklığına gelmesini bekleyin`, en: `Refrigeration extends shelf life — allow to come to room temperature before serving for best texture` } },
      { icon: `🚫`, title: { tr: `Dondurma`, en: `Freezing` }, val: { tr: `Önerilmez`, en: `Not advised` }, note: { tr: `Dondurma, narin yufka katmanlarına zarar verir ve hurma şerbetinin karakterini bozar`, en: `Freezing damages the delicate phyllo layers and alters the character of the date sherbet` } },
      { icon: `🕘`, title: { tr: `En İyi Tüketim`, en: `Best Enjoyed` }, val: { tr: `Aynı Gün`, en: `Same day` }, note: { tr: `Fıstık tazeliği ve hurma şerbet derinliği üretim günü en yüksek düzeydedir`, en: `The pistachio freshness and date sherbet depth are at their peak on the day of production` } },
    ],
    ctaEyebrow: { tr: `Hemen Sipariş`, en: `Order Today` },
    ctaTitle: { tr: `Denemeye`, en: `Ready to` },
    ctaTitleEm: { tr: `Hazır mısınız?`, en: `Experience It?` },
    ctaSub: { tr: `İstanbul içi aynı gün teslimat · Yurt genelinde kargo mevcut.

En görkemli bitkisel hediye — kurumsal ve toplu siparişler memnuniyetle karşılanır.`, en: `Same-day delivery within Istanbul · Nationwide shipping available.

The most opulent plant-based gift — corporate and bulk orders welcome.` },
  },
};

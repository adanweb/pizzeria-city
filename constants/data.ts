
import { MenuCategory, Language } from '../types';

const t = (bs: string, en: string, de: string, ar: string): { [key in Language]: string } => ({ bs, en, de, ar });

export const menuData: MenuCategory[] = [
  {
    id: 'special',
    title: t('Specijalna ponuda', 'Special Offer', 'Spezialangebot', 'العرض الخاص'),
    items: [
      { name: t('Ramste', 'Rump Steak', 'Rumpsteak', 'رامب ستيك'), price: '17 BAM' },
      { name: t('Ramstek sa gorgonzolom', 'Rump Steak with Gorgonzola', 'Rumpsteak mit Gorgonzola', 'رامب ستيك مع الجورجونزولا'), price: '19 BAM' },
      { name: t('Biftek', 'Beefsteak', 'Rinderfilet', 'بيفتك'), price: '31 BAM' },
    ],
  }
  {
    id: 'grill',
    title: t('Roštilj', 'Grill', 'Grill', 'مشويات'),
    items: [
      { name: t('Ćevapi', 'Ćevapi', 'Ćevapi', 'كباب'), description: t('10 komada u somunu sa lukom', '10 pieces in flatbread with onion', '10 Stück im Fladenbrot mit Zwiebeln', '10 قطع في خبز مسطح مع بصل'), price: '10 BAM' },
      { name: t('Pljeskavica', 'Burger Patty', 'Burger-Patty', 'برجر'), description: t('Gurmanska pljeskavica sa sirom', 'Gourmet burger patty with cheese', 'Gourmet-Burger-Patty mit Käse', 'برجر شهي بالجبنة'), price: '12 BAM' },
      { name: t('Miješano meso', 'Mixed Grill', 'Gemischter Grillteller', 'مشكل مشاوي'), description: t('Ćevapi, pljeskavica, kobasica, piletina', 'Ćevapi, burger patty, sausage, chicken', 'Ćevapi, Burger-Patty, Wurst, Hähnchen', 'كباب، برجر، سجق، دجاج'), price: '25 BAM' },
    ],
  },
  {
  id: 'pasta',
  title: t('Tjestenina', 'Pasta', 'Teigwaren', 'معكرونة'),
  items: [
    { name: t('Carbonara', 'Carbonara', 'Carbonara', 'كاربونارا'), description: t('Pasta sa jajima, sirom i slaninom', 'Pasta with eggs, cheese and bacon', 'Pasta mit Ei, Käse und Speck', 'باستا مع البيض والجبن واللحم'), price: '14 BAM' },
    { name: t('Alfredo', 'Alfredo', 'Alfredo', 'ألفريدو'), description: t('Pasta sa bijelim sosom i piletinom', 'Pasta with white sauce and chicken', 'Pasta mit weißer Soße und Hähnchen', 'باستا مع صلصة بيضاء ودجاج'), price: '15 BAM' },
    ],
  },
  {
    id: 'pizzas',
    title: t('Pizze', 'Pizzas', 'Pizzen', 'بيتزا'),
    items: [
      { name: t('Margarita', 'Margherita', 'Margherita', 'مارجريتا'), description: t('Paradajz sos, sir', 'Tomato sauce, cheese', 'Tomatensauce, Käse', 'صلصة طماطم، جبنة'), price: '10 BAM' },
      { name: t('Capricciosa', 'Capricciosa', 'Capricciosa', 'كابريتشيوزا'), description: t('Paradajz sos, sir, šunka, gljive', 'Tomato sauce, cheese, ham, mushrooms', 'Tomatensauce, Käse, Schinken, Pilze', 'صلصة طماطم، جبنة، لحم خنزير، فطر'), price: '12 BAM' },
      { name: t('Quattro Formaggi', 'Four Cheese', 'Vier Käse', 'أربعة أجبان'), description: t('4 vrste sira', '4 types of cheese', '4 Käsesorten', '4 أنواع من الجبن'), price: '14 BAM' },
      { name: t('City Special', 'City Special', 'City Spezial', 'سيتي سبيشل'), description: t('Paradajz sos, sir, pršut, rukola, cherry paradajz', 'Tomato sauce, cheese, prosciutto, arugula, cherry tomatoes', 'Tomatensauce, Käse, Prosciutto, Rucola, Kirschtomaten', 'صلصة طماطم، جبنة، بروشوتو، جرجير، طماطم كرزية'), price: '16 BAM' },
      { name: t('Mexicana', 'City Special', 'City Spezial', 'سيتي سبيشل'), description: t('Paradajz sos, sir, pršut, rukola, cherry paradajz', 'Tomato sauce, cheese, prosciutto, arugula, cherry tomatoes', 'Tomatensauce, Käse, Prosciutto, Rucola, Kirschtomaten', 'صلصة طماطم، جبنة، بروشوتو، جرجير، طماطم كرزية'), price: '16 BAM' },

    ],
  },
  {
  id: 'cityfood',
  title: t('City Food', 'City Food', 'City Food', 'أطعمة المدينة'),
  items: [
    { name: t('Sendvič City', 'City Sandwich', 'City Sandwich', 'شطيرة المدينة'), description: t('Piletina, sir, povrće, umak u tostu', 'Chicken, cheese, veggies, sauce in toast', 'Hähnchen, Käse, Gemüse, Soße im Toast', 'دجاج، جبنة، خضار، صلصة في التوست'), price: '8 BAM' },
    { name: t('City Burger', 'City Burger', 'City Burger', 'برجر المدينة'), description: t('Goveđa pljeskavica, sir, salata, umak', 'Beef patty, cheese, salad, sauce', 'Rindfleisch-Patty, Käse, Salat, Soße', 'برجر لحم بقري، جبنة، خس، صلصة'), price: '9 BAM' },
    ],
  },
  {
  id: 'soups',
  title: t('Supe', 'Soups', 'Suppen', 'شوربات'),
  items: [
    { name: t('Goveđa supa', 'Beef Soup', 'Rindfleischsuppe', 'شوربة لحم البقر'), description: t('Domaća goveđa supa s rezancima', 'Homemade beef soup with noodles', 'Hausgemachte Rindfleischsuppe mit Nudeln', 'شوربة لحم بقر منزلية مع المعكرونة'), price: '6 BAM' },
    ]
  },
  {
  id: 'city-breakfast',
  title: t('City - doručak', 'City - Breakfast', 'City - Frühstück', 'سيتي - فطور'),
  items: [
    { name: t('Doručak City', 'City Breakfast', 'City Frühstück', 'فطور المدينة'), description: t('Jaja, sudžuka, sir, hljeb', 'Eggs, sudžuk, cheese, bread', 'Eier, Sucuk, Käse, Brot', 'بيض، سجق، جبنة، خبز'), price: '9 BAM' },
    ]
  },
  {
  id: 'extras',
  title: t('Dodaci', 'Extras', 'Extras', 'إضافات'),
  items: [
    { name: t('Pomfrit', 'French Fries', 'Pommes Frites', 'بطاطس مقلية'), description: t('Hrskavi pomfrit', 'Crispy fries', 'Knusprige Pommes', 'بطاطس مقلية مقرمشة'), price: '4 BAM' },
    ]
  },
  {
  id: 'salads',
  title: t('Salate', 'Salads', 'Salate', 'سلطات'),
  items: [
    { name: t('Šopska salata', 'Shopska Salad', 'Schopska Salat', 'سلطة شوبسكا'), description: t('Paradajz, krastavac, sir', 'Tomato, cucumber, cheese', 'Tomaten, Gurken, Käse', 'طماطم، خيار، جبنة'), price: '5 BAM' },
    ]
  },
  {
  id: 'cold-plates',
  title: t('Hladne plate', 'Cold Plates', 'Kalte Platten', 'أطباق باردة'),
  items: [
    { name: t('Mesna plata', 'Meat Platter', 'Fleischplatte', 'طبق لحوم'), description: t('Pršut, sudžuka, sir', 'Prosciutto, sudžuk, cheese', 'Prosciutto, Sucuk, Käse', 'بروشوتو، سجق، جبنة'), price: '12 BAM' },
   ]
  },
  {
  id: 'cooked-dishes',
  title: t('Kuhana jela', 'Cooked Dishes', 'Gekochte Gerichte', 'أطباق مطبوخة'),
  items: [
    { name: t('Sarma', 'Stuffed Cabbage Rolls', 'Gefüllte Kohlrouladen', 'ملفوف محشي'), description: t('Sarma sa mesom i rižom u sosu', 'Cabbage rolls with meat and rice in sauce', 'Kohlrouladen mit Fleisch und Reis in Soße', 'ملفوف محشي باللحم والأرز مع صلصة'), price: '10 BAM' },
    ]
  },
  {
  id: 'desserts',
  title: t('Dezert', 'Dessert', 'Dessert', 'حلويات'),
  items: [
    { name: t('Tufahija', 'Tufahija', 'Tufahija', 'تفاحة محشوة'), description: t('Pečena jabuka punjena orasima', 'Baked apple stuffed with walnuts', 'Gebackener Apfel mit Walnüssen', 'تفاحة مخبوزة محشوة بالجوز'), price: '4 BAM' },
    ]
  },
  {
  id: 'hot-drinks',
  title: t('Topli napitci', 'Hot Drinks', 'Heißgetränke', 'مشروبات ساخنة'),
  items: [
    { name: t('Turska kafa', 'Turkish Coffee', 'Türkischer Kaffee', 'قهوة تركية'), description: t('Tradicionalna turska kafa', 'Traditional Turkish coffee', 'Traditioneller türkischer Kaffee', 'قهوة تركية تقليدية'), price: '2.5 BAM' },
    ]
  },
  {
  id: 'non-alcoholic-drinks',
  title: t('Bezalkoholna pića', 'Non-Alcoholic Drinks', 'Alkoholfreie Getränke', 'مشروبات غير كحولية'),
  items: [
    { name: t('Sok od narandže', 'Orange Juice', 'Orangensaft', 'عصير برتقال'), description: t('Svježe cijeđena narandža', 'Freshly squeezed orange', 'Frisch gepresste Orange', 'برتقال طازج معصور'), price: '5 BAM' },
    ]
  },
  {
  id: 'alcoholic-drinks',
  title: t('Alkoholna pića', 'Alcoholic Drinks', 'Alkoholische Getränke', 'مشروبات كحولية'),
  items: [
    { name: t('Rakija šljivovica', 'Plum Brandy', 'Pflaumenschnaps', 'عرق برقوق'), description: t('Domaća šljivovica', 'Homemade plum rakija', 'Hausgemachter Pflaumenschnaps', 'عرق برقوق منزلي'), price: '3 BAM' },
    ]
  },
  {
  id: 'beer',
  title: t('Pivo', 'Beer', 'Bier', 'بيرة'),
  items: [
    { name: t('Sarajevsko', 'Sarajevsko Beer', 'Sarajevsko Bier', 'بيرة سراييفو'), description: t('Lager pivo 0.5l', 'Lager beer 0.5l', 'Lagerbier 0,5l', 'بيرة لاجر 0.5 لتر'), price: '4.5 BAM' },
    ]
  },
  {
  id: 'wine',
  title: t('Vina', 'Wines', 'Weine', 'نبيذ'),
  items: [
    { name: t('Vranac', 'Vranac Wine', 'Vranac Wein', 'نبيذ فراناك'), description: t('Crveno vino iz Crne Gore', 'Red wine from Montenegro', 'Rotwein aus Montenegro', 'نبيذ أحمر من الجبل الأسود'), price: '6 BAM' },
    ]
  }
];

export const galleryImages: string[] = [
  "https://picsum.photos/seed/pizza1/600/400",
  "https://picsum.photos/seed/resto1/600/400",
  "https://picsum.photos/seed/grill1/600/400",
  "https://picsum.photos/seed/ambience1/600/400",
  "https://picsum.photos/seed/pasta1/600/400",
  "https://picsum.photos/seed/drink1/600/400",
  "https://picsum.photos/seed/ambience2/600/400",
  "https://picsum.photos/seed/details1/600/400",
];

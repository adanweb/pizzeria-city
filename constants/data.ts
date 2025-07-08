
import { MenuCategory, Language } from '../types';

const t = (bs: string, en: string, de: string, ar: string): { [key in Language]: string } => ({ bs, en, de, ar });

export const menuData: MenuCategory[] = [
  {
    id: 'special',
    title: t('Specijalna ponuda', 'Special Offer', 'Spezialangebot', 'العرض الخاص'),
    items: [
      { name: t('Ramstek', 'Rump Steak', 'Rumpsteak', 'رامب ستيك'), price: '17 BAM' },
      { name: t('Ramstek sa gorgonzolom', 'Rump Steak with Gorgonzola', 'Rumpsteak mit Gorgonzola', 'رامب ستيك مع الجورجونزولا'), price: '19 BAM' },
      { name: t('Biftek', 'Beefsteak', 'Rinderfilet', 'بيفتك'), price: '31 BAM' },
      { name: t('Biftek sa gorgonzolom', 'Beefsteak with Gorgonzola', 'Rinderfilet mit Gorgonzola', 'بيفتك مع الجورجونزولا'), price: '33 BAM' },
      { name: t('City - steak', 'City - Steak', 'City - Steak', 'سيتي - ستيك'), price: '27 BAM' },
      { name: t('City - burger sa prilogom', 'City - Burger with Sides', 'City - Burger mit Beilage', 'سيتي - برجر مع طبق جانبي'), price: '8 BAM' },
      { name: t('Pepper steak', 'Pepper Steak', 'Pfeffersteak', 'ستيك بالفلفل'), price: '19 BAM' },
      { name: t('Pastrmka', 'Trout', 'Forelle', 'سمك السلمون المرقط'), price: '13 BAM' },
      { name: t('Tortilja', 'Tortilla', 'Tortilla', 'تورتيلا'), price: '8 BAM' },
      { name: t('City - burger (pohovana piletina)', 'City - Burger (breaded chicken)', 'City - Burger (panierte Hähnchen)', 'سيتي - برجر (دجاج مقلي)'), price: '8 BAM' },
      { name: t('City tortilja', 'City Tortilla', 'City Tortilla', 'سيتي تورتيلا'), price: '8 BAM' },
      { name: t('Teletina ispod sača 1kg (prilog + salata)', 'Veal under sač 1kg (sides + salad)', 'Kalbfleisch unter der Glut 1kg (Beilage + Salat)', 'لحم عجل تحت الساچ 1 كغ (طبق جانبي + سلطة)'), price: '45 BAM' },
    ],
  },
{
    id: 'city-grill',
    title: t('City Grill', 'City Grill', 'City Grill', 'سيتي جريل'),
    items: [
      { name: t('Ćevapi mali', 'Small Ćevapi', 'Kleine Ćevapi', 'كباب صغير'), price: '7 BAM' },
      { name: t('Ćevapi srednji', 'Medium Ćevapi', 'Mittlere Ćevapi', 'كباب متوسط'), price: '8 BAM' },
      { name: t('Ćevapi veliki', 'Large Ćevapi', 'Große Ćevapi', 'كباب كبير'), price: '9 BAM' },
      { name: t('Šiš - ćevap mali', 'Small Shish Ćevapi', 'Kleiner Schisch-Kebab', 'شيش كباب صغير'), price: '8 BAM' },
      { name: t('Šiš - ćevap srednji', 'Medium Shish Ćevapi', 'Mittlerer Schisch-Kebab', 'شيش كباب متوسط'), price: '9 BAM' },
      { name: t('Šiš - ćevap veliki', 'Large Shish Ćevapi', 'Großer Schisch-Kebab', 'شيش كباب كبير'), price: '10 BAM' },
      { name: t('Kombinacija mala', 'Small Combination', 'Kleine Kombination', 'تشكيلة صغيرة'), price: '8 BAM' },
      { name: t('Kombinacija srednja', 'Medium Combination', 'Mittlere Kombination', 'تشكيلة متوسطة'), price: '9 BAM' },
      { name: t('Kombinacija velika', 'Large Combination', 'Große Kombination', 'تشكيلة كبيرة'), price: '11 BAM' },
      { name: t('Teleće krpice + kajmak', 'Veal Strips + Kajmak', 'Kalbsstreifen + Kajmak', 'شرائح العجل + قشطة'), price: '13 BAM' },
      { name: t('Miješano meso (za 1 osobu)', 'Mixed Meat (for 1 person)', 'Gemischtes Fleisch (für 1 Person)', 'لحم مشكل (لشخص واحد)'), price: '16 BAM' },
      { name: t('Miješano meso (za 2 osobe)', 'Mixed Meat (for 2 persons)', 'Gemischtes Fleisch (für 2 Personen)', 'لحم مشكل (لشخصين)'), price: '32 BAM' },
      { name: t('Miješano meso (za 3 osobe)', 'Mixed Meat (for 3 persons)', 'Gemischtes Fleisch (für 3 Personen)', 'لحم مشكل (لثلاثة أشخاص)'), price: '48 BAM' },
      { name: t('Pileći file', 'Chicken Filet', 'Hähnchenfilet', 'فيليه دجاج'), price: '10 BAM' },
      { name: t('Pileće krpice + kajmak', 'Chicken Strips + Kajmak', 'Hähnchenstreifen + Kajmak', 'شرائح دجاج + قشطة'), price: '13 BAM' },
      { name: t('Pljeskavica', 'Burger Patty', 'Burger-Patty', 'برجر'), price: '9 BAM' },
      { name: t('Punjena pljeskavica', 'Stuffed Burger Patty', 'Gefüllte Burger-Patty', 'برجر محشي'), price: '10 BAM' },
      { name: t('City pikant pljeskavica', 'City Spicy Patty', 'City Scharfe Patty', 'برجر حار من سيتي'), price: '10 BAM' },
      { name: t('Hamburger', 'Hamburger', 'Hamburger', 'هامبرغر'), price: '8 BAM' },
      { name: t('Chickenburger', 'Chickenburger', 'Chickenburger', 'برجر دجاج'), price: '8 BAM' },
      { name: t('Cheeseburger', 'Cheeseburger', 'Cheeseburger', 'برجر بالجبنة'), price: '8 BAM' },
      { name: t('City burger & prilog', 'City Burger & Side', 'City Burger & Beilage', 'برجر المدينة + طبق جانبي'), price: '8 BAM' },
      { name: t('Ramstek', 'Rump Steak', 'Rumpsteak', 'رامب ستيك'), price: '17 BAM' },
      { name: t('Biftek', 'Beefsteak', 'Rinderfilet', 'بيفتك'), price: '31 BAM' },
      { name: t('City - steak', 'City - Steak', 'City - Steak', 'سيتي - ستيك'), price: '27 BAM' },
      { name: t('City - burger (pohovana piletina)', 'City - Burger (breaded chicken)', 'City - Burger (panierte Hähnchen)', 'سيتي - برجر (دجاج مقلي)'), price: '8 BAM' }
    ]
  },
{
  id: 'pasta',
  title: t('Tjestenina', 'Pasta', 'Teigwaren', 'معكرونة'),
  items: [
    { name: t('Spaghetti Napoli', 'Spaghetti Napoli', 'Spaghetti Napoli', 'سباغيتي نابولي'), price: '8 BAM' },
    { name: t('Spaghetti Milanese', 'Spaghetti Milanese', 'Spaghetti Mailänder Art', 'سباغيتي ميلانيز'), price: '9 BAM' },
    { name: t('Spaghetti Bolognese', 'Spaghetti Bolognese', 'Spaghetti Bolognese', 'سباغيتي بولونيز'), price: '8 BAM' },
    { name: t('Spaghetti Carbonara', 'Spaghetti Carbonara', 'Spaghetti Carbonara', 'سباغيتي كاربونارا'), price: '10 BAM' },
    { name: t('Spaghetti Frutti di Mare', 'Spaghetti Frutti di Mare', 'Spaghetti mit Meeresfrüchten', 'سباغيتي مع ثمار البحر'), price: '12 BAM' },
    { name: t('Tjestenina sa gorgonzolom', 'Pasta with Gorgonzola', 'Pasta mit Gorgonzola', 'باستا مع جورجونزولا'), price: '10 BAM' },
    { name: t('Tjestenina sa pilećim mesom', 'Pasta with Chicken', 'Pasta mit Hähnchenfleisch', 'باستا مع الدجاج'), price: '8 BAM' },
    { name: t('Tjestenina sa tunjevinom i sirom', 'Pasta with Tuna and Cheese', 'Pasta mit Thunfisch und Käse', 'باستا مع التونة والجبنة'), price: '10 BAM' },
    { name: t('Tjestenina 4 vrste sira', 'Four Cheese Pasta', 'Vier-Käse-Pasta', 'باستا أربع أنواع جبنة'), price: '12 BAM' },
    { name: t('Risotto povrće', 'Vegetable Risotto', 'Gemüse-Risotto', 'ريزوتو بالخضار'), price: '9 BAM' },
    { name: t('Risotto morski plodovi', 'Seafood Risotto', 'Meeresfrüchte-Risotto', 'ريزوتو بثمار البحر'), price: '12 BAM' },
    { name: t('Risotto lignje', 'Squid Risotto', 'Tintenfisch-Risotto', 'ريزوتو بالحبار'), price: '15 BAM' },
    { name: t('Lazanje sa mesom in forno', 'Baked Meat Lasagna', 'Lasagne mit Fleisch aus dem Ofen', 'لازانيا باللحم في الفرن'), price: '8 BAM' },
    { name: t('Zapečeni makaroni', 'Baked Macaroni', 'Überbackene Makkaroni', 'مكرونة مخبوزة'), price: '8 BAM' },
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

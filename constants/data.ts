
import { MenuCategory, Language } from '../types';

const t = (bs: string, en: string, de: string, ar: string): { [key in Language]: string } => ({ bs, en, de, ar });

export const menuData: MenuCategory[] = [
  {
    id: 'special',
    title: t('Specijaliteti', 'Specialties', 'Spezialitäten', 'الأطباق الخاصة'),
    items: [
      { name: t('Bosanski Lonac', 'Bosnian Pot', 'Bosnischer Topf', 'وعاء بوسني'), description: t('Tradicionalno jelo sa mesom i povrćem', 'Traditional dish with meat and vegetables', 'Traditionelles Gericht mit Fleisch und Gemüse', 'طبق تقليدي باللحم والخضروات'), price: '20 BAM' },
      { name: t('Bečka Šnicla', 'Viennese Schnitzel', 'Wiener Schnitzel', 'شنيتزل فييني'), description: t('Pohovana teleća šnicla sa krompirom', 'Breaded veal cutlet with potatoes', 'Paniertes Kalbsschnitzel mit Kartoffeln', 'شريحة لحم عجل بالبقسماط مع بطاطس'), price: '18 BAM' },
      { name: t('Lazanje Bolognese', 'Lasagna Bolognese', 'Lasagne Bolognese', 'لازانيا بولونيز'), description: t('Klasične lazanje sa mljevenim mesom', 'Classic lasagna with minced meat', 'Klassische Lasagne mit Hackfleisch', 'لازانيا كلاسيكية باللحم المفروم'), price: '15 BAM' },
    ],
  },
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
    id: 'drinks',
    title: t('Pića', 'Drinks', 'Getränke', 'مشروبات'),
    items: [
      { name: t('Coca-Cola', 'Coca-Cola', 'Coca-Cola', 'كوكا كولا'), price: '4 BAM' },
      { name: t('Prirodni sok', 'Natural Juice', 'Natursaft', 'عصير طبيعي'), price: '5 BAM' },
      { name: t('Espresso', 'Espresso', 'Espresso', 'اسبريسو'), price: '2.5 BAM' },
      { name: t('Pivo', 'Beer', 'Bier', 'بيرة'), price: '5 BAM' },
    ],
  },
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

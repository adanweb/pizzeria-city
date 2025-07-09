
import { MenuCategory, Language } from '../types';

const t = (bs: string, en: string, de: string, ar: string): { [key in Language]: string } => ({ bs, en, de, ar });

export const menuData: MenuCategory[] = [
  {
  id: 'special',
  title: t('Specijalna ponuda', 'Special Offer', 'Spezialangebot', 'العرض الخاص'),
  items: [
    { name: t('Ramstek', 'Rump Steak', 'Rumpsteak', 'رامب ستيك'), price: '17,00 KM' },
    { name: t('Ramstek sa gorgonzolom', 'Rump Steak with Gorgonzola', 'Rumpsteak mit Gorgonzola', 'رامب ستيك مع الجورجونزولا'), price: '19,00 KM' },
    { name: t('Biftek', 'Beefsteak', 'Rinderfilet', 'بيفتك'), price: '31,00 KM' },
    { name: t('Biftek sa gorgonzolom', 'Beefsteak with Gorgonzola', 'Rinderfilet mit Gorgonzola', 'بيفتك مع الجورجونزولا'), price: '33,00 KM' },
    { name: t('City - steak', 'City - Steak', 'City - Steak', 'سيتي - ستيك'), price: '27,00 KM' },
    { name: t('City - burger sa prilogom', 'City - Burger with Sides', 'City - Burger mit Beilage', 'سيتي - برجر مع طبق جانبي'), price: '8,00 KM' },
    { name: t('Pepper steak', 'Pepper Steak', 'Pfeffersteak', 'ستيك بالفلفل'), price: '19,00 KM' },
    { name: t('Pastrmka', 'Trout', 'Forelle', 'سمك السلمون المرقط'), price: '13,00 KM' },
    { name: t('Tortilja', 'Tortilla', 'Tortilla', 'تورتيلا'), price: '8,00 KM' },
    { name: t('City - burger (pohovana piletina)', 'City - Burger (breaded chicken)', 'City - Burger (panierte Hähnchen)', 'سيتي - برجر (دجاج مقلي)'), price: '8,00 KM' },
    { name: t('City tortilja', 'City Tortilla', 'City Tortilla', 'سيتي تورتيلا'), price: '8,00 KM' },
    { name: t('Teletina ispod sača 1kg (prilog + salata)', 'Veal under sač 1kg (sides + salad)', 'Kalbfleisch unter der Glut 1kg (Beilage + Salat)', 'لحم عجل تحت الساچ 1 كغ (طبق جانبي + سلطة)'), price: '45,00 KM' },
  ]
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
    id: 'pizza-33',
    title: t('Pizze 33cm', 'Pizzas 33cm', 'Pizzen 33cm', 'بيتزا 33 سم'),
    items: [
      {
        name: t('Margarita', 'Margherita', 'Margherita', 'مارغريتا'),
        description: t('Pizza-sos, sir', 'Tomato sauce, cheese', 'Pizza-Soße, Käse', 'صلصة طماطم، جبنة'),
        price: '10 BAM'
      },
      {
        name: t('Nutella', 'Nutella', 'Nutella', 'نوتيلا'),
        description: t('Nutella', 'Nutella', 'Nutella', 'نوتيلا'),
        price: '9 BAM'
      },
      {
        name: t('Napolitana', 'Napolitana', 'Napolitana', 'نابوليتانا'),
        description: t('Pizza-sos, sir, šunka, viršla', 'Tomato sauce, cheese, ham, sausage', 'Pizza-Soße, Käse, Schinken, Wurst', 'صلصة طماطم، جبنة، لحم، نقانق'),
        price: '9 BAM'
      },
      {
        name: t('Šunka', 'Ham', 'Schinken', 'لحم'),
        description: t('Pizza-sos, sir, šunka', 'Tomato sauce, cheese, ham', 'Pizza-Soße, Käse, Schinken', 'صلصة طماطم، جبنة، لحم'),
        price: '9 BAM'
      },
      {
        name: t('Fungi', 'Mushroom', 'Pilze', 'فطر'),
        description: t('Pizza-sos, sir, gljive', 'Tomato sauce, cheese, mushrooms', 'Pizza-Soße, Käse, Pilze', 'صلصة طماطم، جبنة، فطر'),
        price: '9 BAM'
      },
      {
        name: t('Capricciosa', 'Capricciosa', 'Capricciosa', 'كابريتشوزا'),
        description: t('Pizza-sos, gljive, šunka', 'Tomato sauce, mushrooms, ham', 'Pizza-Soße, Pilze, Schinken', 'صلصة طماطم، فطر، لحم'),
        price: '9 BAM'
      },
      {
        name: t('Salami', 'Salami', 'Salami', 'سلامي'),
        description: t('Pizza-sos, sir, kulen', 'Tomato sauce, cheese, kulen sausage', 'Pizza-Soße, Käse, Kulen', 'صلصة طماطم، جبنة، كولن'),
        price: '9 BAM'
      },
      {
        name: t('Vegetariana', 'Vegetarian', 'Vegetarisch', 'نباتية'),
        description: t('Pizza-sos, razno povrće', 'Tomato sauce, mixed vegetables', 'Pizza-Soße, verschiedenes Gemüse', 'صلصة طماطم، خضار مشكلة'),
        price: '9 BAM'
      },
      {
        name: t('Pršut', 'Prosciutto', 'Prosciutto', 'بروشوتو'),
        description: t('Pizza-sos, sir, goveđi pršut', 'Tomato sauce, cheese, beef prosciutto', 'Pizza-Soße, Käse, Rind-Prosciutto', 'صلصة طماطم، جبنة، بروسكيتو بقري'),
        price: '9 BAM'
      },
      {
        name: t('Peperone', 'Pepperoni', 'Peperoni', 'بيبروني'),
        description: t('Pizza-sos, sir, kulen, feferoni', 'Tomato sauce, cheese, kulen, hot peppers', 'Pizza-Soße, Käse, Kulen, Peperoni', 'صلصة طماطم، جبنة، كولن، فلفل حار'),
        price: '9 BAM'
      },
      {
        name: t('Hawaii', 'Hawaii', 'Hawaii', 'هاواي'),
        description: t('Pizza-sos, sir, šunka, ananas', 'Tomato sauce, cheese, ham, pineapple', 'Pizza-Soße, Käse, Schinken, Ananas', 'صلصة طماطم، جبنة، لحم، أناناس'),
        price: '9 BAM'
      },
      {
        name: t('Al Tonno', 'Al Tonno', 'Al Tonno', 'تونة'),
        description: t('Pizza-sos, sir, tunjevina', 'Tomato sauce, cheese, tuna', 'Pizza-Soße, Käse, Thunfisch', 'صلصة طماطم، جبنة، تونة'),
        price: '9 BAM'
      },
      {
        name: t('Calzone', 'Calzone', 'Calzone', 'كالسوني'),
        description: t('Pizza-sos, sir, šunka, gljive', 'Tomato sauce, cheese, ham, mushrooms', 'Pizza-Soße, Käse, Schinken, Pilze', 'صلصة طماطم، جبنة، لحم، فطر'),
        price: '10 BAM'
      },
      {
        name: t('Kukurikuu', 'Kukurikuu', 'Kukurikuu', 'كوكوريكو'),
        description: t('Pizza-sos, sir, piletina, gljive', 'Tomato sauce, cheese, chicken, mushrooms', 'Pizza-Soße, Käse, Hähnchen, Pilze', 'صلصة طماطم، جبنة، دجاج، فطر'),
        price: '11 BAM'
      },
      {
        name: t('Mozzarella', 'Mozzarella', 'Mozzarella', 'موزاريلا'),
        description: t('Pizza-sos, sir, mozzarella', 'Tomato sauce, cheese, mozzarella', 'Pizza-Soße, Käse, Mozzarella', 'صلصة طماطم، جبنة، موزاريلا'),
        price: '11 BAM'
      },
      {
        name: t('City', 'City', 'City', 'سيتي'),
        description: t('Pizza-sos, sir, šunka, kulen, pršut, gljive', 'Tomato sauce, cheese, ham, kulen, prosciutto, mushrooms', 'Pizza-Soße, Käse, Schinken, Kulen, Prosciutto, Pilze', 'صلصة طماطم، جبنة، لحم، كولن، بروسكيتو، فطر'),
        price: '13 BAM'
      },
      {
        name: t('Frutti di Mare', 'Seafood', 'Meeresfrüchte', 'ثمار البحر'),
        description: t('Pizza-sos, sir, plodovi mora', 'Tomato sauce, cheese, seafood', 'Pizza-Soße, Käse, Meeresfrüchte', 'صلصة طماطم، جبنة، مأكولات بحرية'),
        price: '12 BAM'
      },
      {
        name: t('Quattro Formaggi', 'Four Cheese', 'Vier Käse', 'أربعة أجبان'),
        description: t('Pizza-sos, 4 vrste sira', 'Tomato sauce, 4 types of cheese', 'Pizza-Soße, 4 Käsesorten', 'صلصة طماطم، ٤ أنواع جبنة'),
        price: '12 BAM'
      },
      {
        name: t('Fantazija', 'Fantasy', 'Fantasie', 'فانتازيا'),
        description: t('Pizza-sos, sir, šunka, pršut, mozzarella, bukovača, šampinjoni', 'Tomato sauce, cheese, ham, prosciutto, mozzarella, oyster mushrooms, champignons', 'Pizza-Soße, Käse, Schinken, Prosciutto, Mozzarella, Austernpilze, Champignons', 'صلصة طماطم، جبنة، لحم، بروسكيتو، موزاريلا، فطر محاري، شامبيونز'),
        price: '13 BAM'
      },
      {
        name: t('Mexicana', 'Mexicana', 'Mexicana', 'ميكسيكانا'),
        description: t('Pizza-sos, sir, kulen, paprika, feferoni, kukuruz', 'Tomato sauce, cheese, kulen, peppers, hot peppers, corn', 'Pizza-Soße, Käse, Kulen, Paprika, Peperoni, Mais', 'صلصة طماطم، جبنة، كولن، فلفل، فلفل حار، ذرة'),
        price: '13 BAM'
      },
      {
        name: t('No1', 'No1', 'No1', 'رقم 1'),
        description: t('Pizza-sos, sir, piletina file, bukovača, šampinjoni, lešo tikvica', 'Tomato sauce, cheese, chicken fillet, oyster mushrooms, champignons, steamed zucchini', 'Pizza-Soße, Käse, Hähnchenfilet, Austernpilze, Champignons, Zucchini', 'صلصة طماطم، جبنة، دجاج، فطر محاري، فطر، كوسا مسلوقة'),
        price: '13 BAM'
      },
      {
        name: t('Gondola', 'Gondola', 'Gondola', 'جونديولا'),
        description: t('Pizza-sos, sir, pršut, mozzarella, gljive', 'Tomato sauce, cheese, prosciutto, mozzarella, mushrooms', 'Pizza-Soße, Käse, Prosciutto, Mozzarella, Pilze', 'صلصة طماطم، جبنة، بروسكيتو، موزاريلا، فطر'),
        price: '13 BAM'
      }
    ]
  },
  {
    id: 'pizzas-55cm',
    title: t('Pizze 55 cm', 'Pizzas 55 cm', 'Pizzen 55 cm', 'بيتزا 55 سم'),
    items: [
      { name: t('Margarita', 'Margherita', 'Margherita', 'مارغريتا'), description: t('Pizza sos, sir', 'Pizza sauce, cheese', 'Pizzasoße, Käse', 'صلصة بيتزا، جبن'), price: '21 KM' },
      { name: t('Nutella', 'Nutella', 'Nutella', 'نوتيلا'), description: t('Nutella', 'Nutella', 'Nutella', 'نوتيلا'), price: '22 KM' },
      { name: t('Napolitana', 'Napolitana', 'Napolitana', 'نابوليتانا'), description: t('Pizza sos, šunka, viršla', 'Pizza sauce, ham, sausage', 'Pizzasoße, Schinken, Wurst', 'صلصة بيتزا، لحم خنزير، سجق'), price: '22 KM' },
      { name: t('Šunka', 'Ham', 'Schinken', 'لحم خنزير'), description: t('Pizza sos, šunka, sir', 'Pizza sauce, ham, cheese', 'Pizzasoße, Schinken, Käse', 'صلصة بيتزا، لحم خنزير، جبن'), price: '22 KM' },
      { name: t('Fungi', 'Fungi', 'Fungi', 'فطريات'), description: t('Pizza sos, gljive', 'Pizza sauce, mushrooms', 'Pizzasoße, Pilze', 'صلصة بيتزا، فطر'), price: '23 KM' },
      { name: t('Capricoza', 'Capricciosa', 'Capricciosa', 'كابريتشوزا'), description: t('Pizza sos, gljive, šunka', 'Pizza sauce, mushrooms, ham', 'Pizzasoße, Pilze, Schinken', 'صلصة بيتزا، فطر، لحم خنزير'), price: '23 KM' },
      { name: t('Salami', 'Salami', 'Salami', 'سلامي'), description: t('Pizza sos, sir, kulen', 'Pizza sauce, cheese, spicy sausage', 'Pizzasoße, Käse, scharfe Wurst', 'صلصة بيتزا، جبن، سجق حار'), price: '22 KM' },
      { name: t('Vegetarina', 'Vegetarian', 'Vegetarisch', 'نباتية'), description: t('Pizza sos, razno povrće', 'Pizza sauce, various vegetables', 'Pizzasoße, verschiedenes Gemüse', 'صلصة بيتزا، خضروات متنوعة'), price: '22 KM' },
      { name: t('Pršut', 'Prosciutto', 'Prosciutto', 'بروشوتو'), description: t('Pizza sos, sir, goveđi pršut', 'Pizza sauce, cheese, beef prosciutto', 'Pizzasoße, Käse, Rinderschinken', 'صلصة بيتزا، جبن، بروشوتو بقري'), price: '22 KM' },
      { name: t('Peperone', 'Pepperoni', 'Peperoni', 'ببروني'), description: t('Pizza sos, sir, kulen, feferoni', 'Pizza sauce, cheese, spicy sausage, pepperoni', 'Pizzasoße, Käse, scharfe Wurst, Peperoni', 'صلصة بيتزا، جبن، سجق حار، فلفل حار'), price: '22 KM' },
      { name: t('Hawaii', 'Hawaii', 'Hawaii', 'هاواي'), description: t('Pizza sos, sir, šunka, ananas', 'Pizza sauce, cheese, ham, pineapple', 'Pizzasoße, Käse, Schinken, Ananas', 'صلصة بيتزا، جبن، لحم خنزير، أناناس'), price: '22 KM' },
      { name: t('Al Tonno', 'Al Tonno', 'Al Tonno', 'تونّو'), description: t('Pizza sos, sir, tunjevina', 'Pizza sauce, cheese, tuna', 'Pizzasoße, Käse, Thunfisch', 'صلصة بيتزا، جبن، تونة'), price: '22 KM' },
      { name: t('Calzone', 'Calzone', 'Calzone', 'كالتزوني'), description: t('Pizza sos, sir, šunka, gljive', 'Pizza sauce, cheese, ham, mushrooms', 'Pizzasoße, Käse, Schinken, Pilze', 'صلصة بيتزا، جبن، لحم خنزير، فطر'), price: '25 KM' },
      { name: t('Kukuriku', 'Kukuriku', 'Kukuriku', 'كوكوريكو'), description: t('Pizza sos, sir, piletina, gljive', 'Pizza sauce, cheese, chicken, mushrooms', 'Pizzasoße, Käse, Hähnchen, Pilze', 'صلصة بيتزا، جبن، دجاج، فطر'), price: '25 KM' },
      { name: t('Mozzarella', 'Mozzarella', 'Mozzarella', 'موزاريلا'), description: t('Pizza sos, sir, mozzarella', 'Pizza sauce, cheese, mozzarella', 'Pizzasoße, Käse, Mozzarella', 'صلصة بيتزا، جبن، موزاريلا'), price: '25 KM' },
      { name: t('City', 'City', 'City', 'سيتي'), description: t('Pizza sos, sir, šunka, kulen, pršut, gljive', 'Pizza sauce, cheese, ham, spicy sausage, prosciutto, mushrooms', 'Pizzasoße, Käse, Schinken, scharfe Wurst, Prosciutto, Pilze', 'صلصة بيتزا، جبن، لحم خنزير، سجق حار، بروشوتو، فطر'), price: '25 KM' },
      { name: t('Frutti di Mare', 'Frutti di Mare', 'Frutti di Mare', 'ثمار البحر'), description: t('Pizza sos, sir, plodovi mora', 'Pizza sauce, cheese, seafood', 'Pizzasoße, Käse, Meeresfrüchte', 'صلصة بيتزا، جبن، مأكولات بحرية'), price: '26 KM' },
      { name: t('Quattro Formaggi', 'Four Cheese', 'Vier Käse', 'أربعة أجبان'), description: t('Pizza sos, sir, 4 vrste sira', 'Pizza sauce, cheese, 4 types of cheese', 'Pizzasoße, Käse, 4 Käsesorten', 'صلصة بيتزا، جبن، 4 أنواع من الجبن'), price: '26 KM' },
      { name: t('Fantazija', 'Fantasia', 'Fantasie', 'فانتازيا'), description: t('Pizza sos, sir, šunka, pršut, mozzarella, bukovača, šampinjoni', 'Pizza sauce, cheese, ham, prosciutto, mozzarella, oyster mushrooms, champignons', 'Pizzasoße, Käse, Schinken, Prosciutto, Mozzarella, Austernpilze, Champignons', 'صلصة بيتزا، جبن، لحم خنزير، بروشوتو، موزاريلا، فطر محاري، شامبينيو'), price: '27 KM' },
      { name: t('Mexicana', 'Mexicana', 'Mexicana', 'ميكسيكانا'), description: t('Pizza sos, sir, kulen, paprika, feferoni, kukuruz, rukola', 'Pizza sauce, cheese, spicy sausage, peppers, pepperoni, corn, arugula', 'Pizzasoße, Käse, scharfe Wurst, Paprika, Peperoni, Mais, Rucola', 'صلصة بيتزا، جبن، سجق حار، فلفل، فلفل حار، ذرة، جرجير'), price: '27 KM' },
      { name: t('No1', 'No1', 'No1', 'رقم 1'), description: t('Pizza sos, sir, piletina, bukovača, šampinjoni, feferoni, kečap', 'Pizza sauce, cheese, chicken, oyster mushrooms, champignons, pepperoni, ketchup', 'Pizzasoße, Käse, Hähnchen, Austernpilze, Champignons, Peperoni, Ketchup', 'صلصة بيتزا، جبن، دجاج، فطر محاري، شامبينيو، فلفل حار، كاتشب'), price: '27 KM' },
      { name: t('Gondola', 'Gondola', 'Gondola', 'جونديولا'), description: t('Pizza sos, sir, mljeveno meso, povrće, čevap', 'Pizza sauce, cheese, minced meat, vegetables, kebab', 'Pizzasoße, Käse, Hackfleisch, Gemüse, Ćevap', 'صلصة بيتزا، جبن، لحم مفروم، خضروات، كباب'), price: '27 KM' },
    ]
  },
  {
  id: 'cityfood',
  title: t('City Food', 'City Food', 'City Food', 'أطعمة المدينة'),
  items: [
    { name: t('Jager pileći', 'Chicken Jäger', 'Hähnchen Jäger', 'دجاج ييغر'), description: t('Pileća šnicla, jager sos, riža', 'Chicken schnitzel, jäger sauce, rice', 'Hähnchenschnitzel, Jägersoße, Reis', 'شنيتسل دجاج، صوص ييغر، أرز'), price: '10 KM' },
    { name: t('Jager teleći', 'Veal Jäger', 'Kalbs Jäger', 'عجل ييغر'), description: t('Teleća šnicla, jager sos, riža', 'Veal schnitzel, jäger sauce, rice', 'Kalbsschnitzel, Jägersoße, Reis', 'شنيتسل عجل، صوص ييغر، أرز'), price: '16 KM' },
    { 
  name: t('Bečka šnicla', 'Viennese Schnitzel', 'Wiener Schnitzel', 'شنيتسل فييني'), 
  description: t('Teleća šnicla, pomfrit, tartar sos', 'Veal schnitzel, fries, tartar sauce', 'Kalbsschnitzel, Pommes, Tartarsoße', 'شنيتسل عجل، بطاطا مقلية، صلصة التارتار'), 
  price: '15 KM' 
},
    { name: t('Bečka šnicla XXL', 'Viennese Schnitzel XXL', 'Wiener Schnitzel XXL', 'شنيتسل فييني XXL'), price: '25 KM' },
    { name: t('Cordon blue', 'Cordon Bleu', 'Cordon Bleu', 'كوردون بلو'), price: '17 KM' },
    { name: t('Teleći medaljoni', 'Veal Medallions', 'Kalbsmedaillons', 'ميداليات لحم العجل'), description: t('Teleća šnicla, sir, pomfrit, pekarski krompir, tartar sos', 'Veal schnitzel, cheese, fries, roasted potatoes, tartar sauce', 'Kalbsschnitzel, Käse, Pommes, Bratkartoffeln, Tartarsoße', 'شنيتسل عجل، جبنة، بطاطا مقلية، بطاطا مشوية، صوص التارتار'), price: '21 KM' },
    { name: t('City šnicla', 'City Schnitzel', 'City Schnitzel', 'شنيتسل سيتي'), price: '21 KM' },
    { name: t('Gurmanski City burger', 'Gourmet City Burger', 'Gourmet City Burger', 'برجر سيتي الذواقة'), price: '10 KM' },
    { name: t('Lignje pohane', 'Breaded Squid', 'Panierte Tintenfischringe', 'كالاماري مقلي'), price: '16 KM' },
    { name: t('Lignje na žaru', 'Grilled Squid', 'Gegrillter Tintenfisch', 'كالاماري مشوي'), price: '16 KM' },
    { name: t('Piletina mozzarella', 'Chicken Mozzarella', 'Hähnchen mit Mozzarella', 'دجاج مع موتزاريلا'), price: '10 KM' },
    { name: t('Piletina 4 vrste sira', 'Chicken with 4 Cheeses', 'Hähnchen mit 4 Käsesorten', 'دجاج بأربعة أنواع جبنة'), price: '10 KM' },
    { name: t('Piletina u bechamel sosu', 'Chicken in Bechamel Sauce', 'Hähnchen in Béchamelsauce', 'دجاج بصلصة البشاميل'), price: '8 KM' },
    { name: t('Piletina u curry sosu', 'Chicken in Curry Sauce', 'Hähnchen in Currysauce', 'دجاج بصلصة الكاري'), price: '8 KM' },
    { name: t('Pohovana piletina', 'Breaded Chicken', 'Paniertes Hähnchen', 'دجاج مقلي'), price: '9 KM' },
    { name: t('Pastrmka', 'Trout', 'Forelle', 'سمك السلمون المرقط'), price: '13 KM' },
    { name: t('Oslić sa prilogom', 'Hake with Sides', 'Seehecht mit Beilage', 'سمك هاك مع طبق جانبي'), price: '12 KM' },
    { name: t('Povrće na žaru', 'Grilled Vegetables', 'Gegrilltes Gemüse', 'خضار مشوية'), price: '7 KM' },
    { name: t('Šampinjoni na žaru', 'Grilled Mushrooms', 'Gegrillte Champignons', 'فطر مشوي'), price: '7 KM' },
    { name: t('Pepper steak', 'Pepper Steak', 'Pfeffersteak', 'ستيك بالفلفل'), price: '19.5 KM' },
    { name: t('City tortilja', 'City Tortilla', 'City Tortilla', 'تورتيلا سيتي'), price: '8 KM' },
    { name: t('Teleća jetrca + prilog', 'Veal Liver + Sides', 'Kalbsleber + Beilage', 'كبدة عجل + طبق جانبي'), price: '12 KM' },
    { name: t('Teleće pečenje + prilog', 'Roasted Veal + Sides', 'Kalbsbraten + Beilage', 'عجل مشوي + طبق جانبي'), price: '15 KM' },
  ]
},
  {
  id: 'soups',
  title: t('Supe', 'Soups', 'Suppen', 'الشوربات'),
  items: [
    { name: t('Supa od paradajza', 'Tomato Soup', 'Tomatensuppe', 'شوربة طماطم'), price: '4 KM' },
    { name: t('Supa goveđa', 'Beef Soup', 'Rindfleischsuppe', 'شوربة لحم البقر'), price: '4 KM' },
    { name: t('Krem juha od gljiva', 'Cream of Mushroom Soup', 'Champignoncremesuppe', 'شوربة كريمة الفطر'), price: '4 KM' },
    { name: t('Begova čorba', 'Bey’s Soup', 'Bey-Suppe', 'شوربة بيك'), price: '4 KM' },
    { name: t('Trahana', 'Tarhana', 'Tarhana', 'طرهانا'), price: '4 KM' },
  ]
},
  {
  id: 'city-breakfast',
  title: t('City – doručak', 'City – Breakfast', 'City – Frühstück', 'فطور سيتي'),
  items: [
    { name: t('City – doručak', 'City – Breakfast', 'City – Frühstück', 'فطور سيتي'), price: '8 KM' },
    { name: t('Omlette', 'Omelette', 'Omelett', 'عجة بيض'), price: '6.90 KM' },
  ]
},
  {
  id: 'extras',
  title: t('Dodaci', 'Extras', 'Beilagen', 'إضافات'),
  items: [
    { name: t('Kajmak', 'Kajmak', 'Kajmak', 'قشطة بلقانية'), price: '2 KM' },
    { name: t('Pommes frites', 'French fries', 'Pommes frites', 'بطاطا مقلية'), price: '2 KM' },
    { name: t('Sos', 'Sauce', 'Soße', 'صلصة'), price: '2 KM' },
    { name: t('Bechamel sos', 'Béchamel sauce', 'Béchamelsauce', 'صلصة بشاميل'), price: '2 KM' },
    { name: t('Pekarski krompir', 'Baked potatoes', 'Backkartoffeln', 'بطاطا مشوية'), price: '2.50 KM' },
  ]
},
  {
  id: 'salads',
  title: t('Salate', 'Salads', 'Salate', 'سلطات'),
  items: [
    { name: t('Miješana salata', 'Mixed salad', 'Gemischter Salat', 'سلطة مشكلة'), price: '3 KM' },
    { name: t('Šopska salata', 'Shopska salad', 'Schopska Salat', 'سلطة شوبسكا'), price: '6 KM' },
    { name: t('Grčka salata', 'Greek salad', 'Griechischer Salat', 'سلطة يونانية'), price: '6 KM' },
    { name: t('Salata sa pilećim mesom', 'Chicken salad', 'Salat mit Hähnchenfleisch', 'سلطة بالدجاج'), price: '6 KM' },
    { name: t('Salata sa tunjevinom', 'Tuna salad', 'Thunfischsalat', 'سلطة بالتونة'), price: '7 KM' },
    { name: t('Salata sa mozzarellom', 'Mozzarella salad', 'Mozzarella-Salat', 'سلطة بالموزاريلا'), price: '9 KM' },
    { name: t('City salata', 'City salad', 'City-Salat', 'سلطة سيتي'), price: '9 KM' },
  ]
},
  {
  id: 'coldplates',
  title: t('Hladne plate', 'Cold Plates', 'Kalte Platten', 'الأطباق الباردة'),
  items: [
    {
      name: t('Hladna plata', 'Cold plate', 'Kalte Platte', 'طبق بارد'),
      description: t('za jednu osobu i pizza brot', 'for one person and pizza bread', 'für eine Person mit Pizzabrot', 'لشخص واحد وخبز بيتزا'),
      price: '15 KM'
    },
    {
      name: t('Hladna plata', 'Cold plate', 'Kalte Platte', 'طبق بارد'),
      description: t('za 2 osobe i pizza brot', 'for 2 persons and pizza bread', 'für 2 Personen mit Pizzabrot', 'لشخصين وخبز بيتزا'),
      price: '30 KM'
    }
  ]
},
  {
  id: 'cookedmeals',
  title: t('Kuhana jela', 'Cooked Meals', 'Hausgemachte Gerichte', 'الوجبات المطبوخة'),
  items: [
    {
      name: t('Gulaš', 'Goulash', 'Gulasch', 'غولاش'),
      price: '8 KM'
    },
    {
      name: t('Tripice', 'Tripe', 'Kutteln', 'كرشة'),
      price: '8 KM'
    },
    {
      name: t('Sarma', 'Sarma', 'Krautwickel', 'سرما'),
      price: '8 KM'
    },
    {
      name: t('Grah', 'Beans', 'Bohnen', 'فاصوليا'),
      price: '7 KM'
    },
    {
      name: t('Punjena paprika', 'Stuffed pepper', 'Gefüllte Paprika', 'فلفل محشي'),
      price: '8 KM'
    }
  ]
},
  {
  id: 'desserts',
  title: t('Dezert', 'Desserts', 'Desserts', 'حلويات'),
  items: [
    {
      name: t('Palačinke sa eurokremom', 'Pancakes with Eurocream', 'Pfannkuchen mit Eurocreme', 'فطائر مع يوروكريم'),
      price: '4 KM'
    },
    {
      name: t('Palačinke sa orasima', 'Pancakes with walnuts', 'Pfannkuchen mit Walnüssen', 'فطائر مع الجوز'),
      price: '4 KM'
    },
    {
      name: t('Palačinke sa keksom', 'Pancakes with biscuit', 'Pfannkuchen mit Keks', 'فطائر مع البسكويت'),
      price: '4 KM'
    },
    {
      name: t('Palačinke sa šumskim voćem', 'Pancakes with forest fruit', 'Pfannkuchen mit Waldfrüchten', 'فطائر مع فواكه الغابة'),
      price: '4 KM'
    },
    {
      name: t('Kolač', 'Cake', 'Kuchen', 'كيك'),
      price: '4 KM'
    }
  ]
},
  {
  id: 'hotdrinks',
  title: t('Topli napitci', 'Hot Drinks', 'Heißgetränke', 'مشروبات ساخنة'),
  items: [
    {
      name: t('Kafa', 'Coffee', 'Kaffee', 'قهوة'),
      price: '1.50 KM'
    },
    {
      name: t('Ness Classic', 'Nescafé Classic', 'Nescafé Classic', 'نسكافيه كلاسيك'),
      price: '2.10 KM'
    },
    {
      name: t('Ness vanilija', 'Vanilla Nescafé', 'Nescafé Vanille', 'نسكافيه بالفانيليا'),
      price: '2.50 KM'
    },
    {
      name: t('Ness čokolada', 'Chocolate Nescafé', 'Nescafé Schokolade', 'نسكافيه بالشوكولاتة'),
      price: '2.50 KM'
    },
    {
      name: t('Topla čokolada', 'Hot chocolate', 'Heiße Schokolade', 'شوكولاتة ساخنة'),
      price: '3.00 KM'
    },
    {
      name: t('Čaj', 'Tea', 'Tee', 'شاي'),
      price: '2.50 KM'
    }
  ]
},
  {
  id: 'softdrinks',
  title: t('Bezalkoholna pića', 'Soft Drinks', 'Alkoholfreie Getränke', 'مشروبات غير كحولية'),
  items: [
    { name: t('Gazirani sokovi', 'Carbonated drinks', 'Kohlensäurehaltige Getränke', 'مشروبات غازية'), price: '2.50 KM' },
    { name: t('Prirodni sokovi', 'Natural juices', 'Natur-Säfte', 'عصائر طبيعية'), price: '2.50 KM' },
    { name: t('Ledeni čaj', 'Iced tea', 'Eistee', 'شاي مثلج'), price: '2.50 KM' },
    { name: t('Cedevita', 'Cedevita', 'Cedevita', 'سيديفيتا'), price: '3.00 KM' },
    { name: t('Limunada', 'Lemonade', 'Limonade', 'عصير الليمون'), price: '3.00 KM' },
    { name: t('Narandža cijeđena', 'Fresh orange juice', 'Frisch gepresster Orangensaft', 'عصير برتقال طازج'), price: '4.00 KM' },
    { name: t('Mineralna voda 1L', 'Mineral water 1L', 'Mineralwasser 1L', 'ماء معدني 1 لتر'), price: '2.00 KM' },
    { name: t('Prirodna voda 0.70L', 'Still water 0.70L', 'Stilles Wasser 0.70L', 'ماء طبيعي 0.70 لتر'), price: '2.00 KM' },
    { name: t('Prirodna voda 0.25L', 'Still water 0.25L', 'Stilles Wasser 0.25L', 'ماء طبيعي 0.25 لتر'), price: '1.50 KM' },
    { name: t('Senzacija', 'Sensation', 'Sensation', 'مشروب سينسيشن'), price: '2.50 KM' },
    { name: t('Energy', 'Energy drink', 'Energiegetränk', 'مشروب طاقة'), price: '2.50 KM' },
    { name: t('Red Bull', 'Red Bull', 'Red Bull', 'ريد بول'), price: '4.00 KM' }
  ]
},
  {
  id: 'alcohol',
  title: t('Alkoholna pića', 'Alcoholic Drinks', 'Alkoholische Getränke', 'مشروبات كحولية'),
  items: [
    { name: t('Whisky', 'Whisky', 'Whisky', 'ويسكي'), price: '3.00 KM' },
    { name: t('Viljamovka', 'Williams pear brandy', 'Williamsbirnenbrand', 'مشروب الإجاص فيلياموفكا'), price: '3.00 KM' },
    { name: t('Jägermeister', 'Jägermeister', 'Jägermeister', 'ياغرمايستر'), price: '3.00 KM' },
    { name: t('Stock', 'Stock', 'Stock', 'ستوك'), price: '3.00 KM' },
    { name: t('Konjak', 'Cognac', 'Cognac', 'كونياك'), price: '3.00 KM' },
    { name: t('Loza', 'Loza brandy', 'Loza Schnaps', 'مشروب كحولي لوزا'), price: '3.00 KM' },
    { name: t('Vodka', 'Vodka', 'Wodka', 'فودكا'), price: '3.00 KM' },
    { name: t('Pelinkovac', 'Pelinkovac (herbal liqueur)', 'Pelinkovac (Kräuterlikör)', 'بيلينكوفاتس (مشروب عشبي)'), price: '3.00 KM' },
    { name: t('Lavov', 'Lavov', 'Lavov', 'لافوف'), price: '2.00 KM' },
    { name: t('Šljivovica', 'Plum brandy', 'Pflaumenschnaps', 'مشروب البرقوق'), price: '3.00 KM' }
  ]
},
  {
  id: 'beer',
  title: t('Pivo', 'Beer', 'Bier', 'بيرة'),
  items: [
    { name: t('Preminger', 'Preminger', 'Preminger', 'بريمنجر'), price: '3.00 KM' },
    { name: t('Karlovačko', 'Karlovačko', 'Karlovačko', 'كارلوفاتشكو'), price: '3.00 KM' },
    { name: t('Laško', 'Laško', 'Laško', 'لاشكو'), price: '3.00 KM' },
    { name: t('Laško Malt', 'Laško Malt', 'Laško Malz', 'لاشكو مالت'), price: '3.00 KM' },
    { name: t('Heineken', 'Heineken', 'Heineken', 'هاينيكن'), price: '4.00 KM' },
    { name: t('Bezalkoholno pivo', 'Non-alcoholic beer', 'Alkoholfreies Bier', 'بيرة بدون كحول'), price: '4.00 KM' },
    { name: t('Radler', 'Radler', 'Radler', 'رادلر'), price: '3.00 KM' }
  ]
},
  {
  id: 'wines',
  title: t('Vina', 'Wines', 'Weine', 'نبيذ'),
  items: [
    { name: t('Butelja (Vranac Pro Corde)', 'Bottle (Vranac Pro Corde)', 'Flasche (Vranac Pro Corde)', 'زجاجة (فراناتس برو كوردي)'), price: '6.00 KM' },
    { name: t('Buteljica 0.20 L', 'Small bottle 0.20 L', 'Kleinflasche 0,20 L', 'زجاجة صغيرة 0.20 لتر'), price: '6.00 KM' },
    { name: t('Vino crno 1L', 'Red wine 1L', 'Rotwein 1L', 'نبيذ أحمر 1 لتر'), price: '22.00 KM' },
    { name: t('Vino bijelo 1L', 'White wine 1L', 'Weißwein 1L', 'نبيذ أبيض 1 لتر'), price: '22.00 KM' }
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

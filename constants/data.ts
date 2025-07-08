
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

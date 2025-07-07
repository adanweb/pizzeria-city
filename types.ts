export type Language = 'bs' | 'en' | 'de' | 'ar';

export interface MenuItem {
  name: { [key in Language]: string };
  description?: { [key in Language]: string };
  price: string;
}

export interface MenuCategory {
  id: string;
  title: { [key in Language]: string };
  items: MenuItem[];
}

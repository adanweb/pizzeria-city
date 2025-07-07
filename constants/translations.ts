import { Language } from '../types';

type Translations = {
  [key: string]: { [key in Language]: string };
};

const t = (bs: string, en: string, de: string, ar: string): { [key in Language]: string } => ({ bs, en, de, ar });

export const translations = {
  bs: {
    menu: {
      title: "Meni",
      description: "Pregledajte našu ponudu jela i pića.",
    },
    gallery: {
      title: "Galerija",
      description: "Pogledajte naš ambijent i hranu.",
    },
    info: {
      title: "Informacije i Kontakt",
      address: "Adresa",
      addressValue: "Bosanskih šehida, Bihać 77000, Bosna i Hercegovina",
      phone: "Telefon",
      workingHours: "Radno Vrijeme",
      workingHoursValue: "Svaki dan: 07:00 - 23:00",
      socialMedia: "Društvene Mreže",
      location: "Pronađite nas na mapi",
    },
    footer: {
      rights: "Sva prava zadržana.",
    },
  },
  en: {
    menu: {
      title: "Menu",
      description: "Browse our selection of dishes and drinks.",
    },
    gallery: {
      title: "Gallery",
      description: "See our ambiance and food.",
    },
    info: {
      title: "Information & Contact",
      address: "Address",
      addressValue: "Bosanskih šehida, Bihać 77000, Bosnia and Herzegovina",
      phone: "Phone",
      workingHours: "Working Hours",
      workingHoursValue: "Every day: 07:00 - 23:00",
      socialMedia: "Social Media",
      location: "Find us on the map",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  de: {
    menu: {
      title: "Menü",
      description: "Durchsuchen Sie unsere Auswahl an Speisen und Getränken.",
    },
    gallery: {
      title: "Galerie",
      description: "Sehen Sie unser Ambiente und unsere Speisen.",
    },
    info: {
      title: "Information & Kontakt",
      address: "Adresse",
      addressValue: "Bosanskih šehida, Bihać 77000, Bosnien und Herzegowina",
      phone: "Telefon",
      workingHours: "Öffnungszeiten",
      workingHoursValue: "Täglich: 07:00 - 23:00",
      socialMedia: "Soziale Medien",
      location: "Finden Sie uns auf der Karte",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
  },
  ar: {
    menu: {
      title: "قائمة الطعام",
      description: "تصفح مجموعتنا المختارة من الأطباق والمشروبات.",
    },
    gallery: {
      title: "المعرض",
      description: "شاهد أجواءنا وطعامنا.",
    },
    info: {
      title: "المعلومات والاتصال",
      address: "العنوان",
      addressValue: "Bosanskih šehida, Bihać 77000, البوسنة والهرسك",
      phone: "الهاتف",
      workingHours: "ساعات العمل",
      workingHoursValue: "كل يوم: 07:00 - 23:00",
      socialMedia: "وسائل التواصل الاجتماعي",
      location: "اعثر علينا على الخريطة",
    },
    footer: {
      rights: "كل الحقوق محفوظة.",
    },
  },
};

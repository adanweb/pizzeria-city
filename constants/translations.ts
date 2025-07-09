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
      addressValue: "502. Viteške Brigade, Bihac, Bosnia and Herzegovina",
      phone: "Telefon",
      workingHours: "Radno Vrijeme",
      workingHoursValue: "Ponedjeljak – Petak: 07:00 – 23:00\nSubota: 10:00 – 23:00\nNedjelja: 11:00 – 22:00",
      socialMedia: "Društvene Mreže",
      location: "Pronađite nas na mapi",
    },
    footer: {
      rights: "Sva prava zadržana.\nDizajn i razvoj web stranice: Adan Zukančić",
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
      addressValue: "502. Viteške Brigade, Bihac, Bosnia and Herzegovina",
      phone: "Phone",
      workingHours: "Working Hours",
      workingHoursValue: "Monday – Friday: 07:00 – 23:00\nSaturday: 10:00 – 23:00\nSunday: 11:00 – 22:00",
      socialMedia: "Social Media",
      location: "Find us on the map",
    },
    footer: {
      rights: "All rights reserved.\nWebsite design and development: Adan Zukančić",
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
      addressValue: "502. Viteške Brigade, Bihac, Bosnia and Herzegovina",
      phone: "Telefon",
      workingHours: "Öffnungszeiten",
      workingHoursValue: "Montag – Freitag: 07:00 – 23:00\nSamstag: 10:00 – 23:00\nSonntag: 11:00 – 22:00",
      socialMedia: "Soziale Medien",
      location: "Finden Sie uns auf der Karte",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.\nWebseiten-Design und -Entwicklung: Adan Zukančić",
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
      addressValue: "٥٠٢. لواء الفرسان، بيهاتش، البوسنة والهرسك",
      phone: "الهاتف",
      workingHours: "ساعات العمل",
      workingHoursValue: "الاثنين – الجمعة: 07:00 – 23:00\nالسبت: 10:00 – 23:00\nالأحد: 11:00 – 22:00",
      socialMedia: "وسائل التواصل الاجتماعي",
      location: "اعثر علينا على الخريطة",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.\nتصميم وتطوير الموقع: عدنان زوكانتشيتش",
    },
  },
};

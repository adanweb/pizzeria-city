import React, { useState, useMemo } from 'react';
import { Language } from './types';
import { translations } from './constants/translations';
import LanguageSwitcher from './components/LanguageSwitcher';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import InfoSection from './components/InfoSection';
import { PizzeriaCityLogo } from './public/logo-02.png';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('bs');
  const t = useMemo(() => translations[language], [language]);

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="bg-gray-900 text-gray-100 min-h-screen">
      <header className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <a href="/">
  <img src="/logo.png" alt="Pizzeria City Logo" className="h-10 w-10" />
</a>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wider">
                Pizzeria City
              </h1>
            </div>
            <LanguageSwitcher currentLang={language} setLang={setLanguage} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <MenuSection t={t.menu} lang={language} />
        <GallerySection t={t.gallery} />
        <InfoSection t={t.info} />
      </main>

      <footer className="bg-gray-950/50 py-6 mt-12">
          <div className="text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Pizzeria City, Bihać. {<span className="whitespace-pre-line">{t.footer.rights}</span>}</p>
          </div>
      </footer>
    </div>
  );
};

export default App;

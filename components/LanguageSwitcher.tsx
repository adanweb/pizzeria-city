
import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
}

const languages: { code: Language; flag: string; name: string }[] = [
  { code: 'bs', flag: '🇧🇦', name: 'Bosnian' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'de', flag: '🇩🇪', name: 'German' },
  { code: 'ar', flag: '🇸🇦', name: 'Arabic' },
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, setLang }) => {
  return (
    <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-800/50 rounded-full p-1">
      {languages.map(({ code, flag }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 transform ${
            currentLang === code
              ? 'bg-amber-400 scale-110 shadow-lg'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
          aria-label={`Switch to ${name}`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

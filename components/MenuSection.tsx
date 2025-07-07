
import React, { useState } from 'react';
import { menuData } from '../constants/data';
import { Language } from '../types';

interface MenuSectionProps {
  t: {
    title: string;
    description: string;
  };
  lang: Language;
}

const SectionHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="text-center mb-8">
    <h2 className="font-display text-4xl sm:text-5xl font-bold text-amber-400">{title}</h2>
    <p className="mt-2 text-lg text-gray-300">{description}</p>
  </div>
);

const MenuSection: React.FC<MenuSectionProps> = ({ t, lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);

  const activeItems = menuData.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <section id="menu" className="py-12">
      <SectionHeader title={t.title} description={t.description} />
      
      <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8" dir="ltr">
        {menuData.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 ${
              activeCategory === category.id
                ? 'bg-amber-400 text-gray-900 shadow-lg shadow-amber-400/20'
                : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
            }`}
          >
            {category.title[lang]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeItems.map((item, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-5 flex flex-col transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white">{item.name[lang]}</h3>
              <p className="text-xl font-bold text-amber-400 whitespace-nowrap">{item.price}</p>
            </div>
            {item.description && <p className="text-gray-400 flex-grow">{item.description[lang]}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

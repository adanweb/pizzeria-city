
import React from 'react';
import { galleryImages } from '../constants/data';

interface GallerySectionProps {
  t: {
    title: string;
    description: string;
  };
}

const SectionHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="text-center mb-8">
    <h2 className="font-display text-4xl sm:text-5xl font-bold text-amber-400">{title}</h2>
    <p className="mt-2 text-lg text-gray-300">{description}</p>
  </div>
);

const GallerySection: React.FC<GallerySectionProps> = ({ t }) => {
  return (
    <section id="gallery" className="py-12">
      <SectionHeader title={t.title} description={t.description} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg shadow-black/30 group">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;

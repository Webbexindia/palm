import React from 'react';
import { motion } from 'motion/react';
import { homeAssets } from '../constants/assets';

export function GallerySection() {
  const images = [
    homeAssets.galleryOne,
    homeAssets.galleryTwo,
    homeAssets.galleryThree
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
        <div>
          <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans mb-4 block">Immerse</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-ivory">A Glimpse of Paradise</h2>
        </div>
        <a href="#gallery" className="hidden md:block text-xs uppercase tracking-[0.2em] text-brand-gold hover:text-white transition-colors">
          View Full Gallery
        </a>
      </div>

      <div className="flex gap-6 px-6 md:px-12 overflow-x-auto pb-8 snap-x hide-scrollbar">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] snap-center overflow-hidden"
          >
            <img 
              src={src} 
              alt="Gallery preview" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

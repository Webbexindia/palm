import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { homeAssets } from '../constants/assets';

export function AboutSection() {
  const images = [
    homeAssets.aboutImage1,
    homeAssets.aboutImage2,
    homeAssets.aboutImage3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="about" className="py-24 md:py-32 w-full relative overflow-hidden" style={{ backgroundColor: '#79552A' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-white/50" />
            <span className="text-white text-xs tracking-[0.2em] uppercase font-sans">PALM MANOR</span>
            <div className="h-[1px] w-12 bg-white/50" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Palm Manor State of Mind
          </h2>
        </motion.div>

        {/* Content Layout: Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <p className="text-white/90 font-light leading-relaxed mb-6 text-base md:text-lg">
              At Palm Manor Lonavala, every villa is designed to offer complete privacy, comfort, and elegance. From spacious 4, 6 and 8 BHK layouts to private swimming pools and scenic mountain views, we create the perfect setting for unforgettable stays, celebrations, and corporate retreats.
            </p>
            <p className="text-white/90 font-light leading-relaxed text-base md:text-lg">
              Enjoy premium amenities, indoor games, terrace views, professional cook services, and personalized hospitality — all in one exclusive destination.
            </p>
          </motion.div>

          {/* Image Right (Auto-fading, natural shape) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0 aspect-[4/3] overflow-hidden shadow-xl bg-black/20 rounded-sm"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                src={images[currentIndex]}
                alt={`Palm Manor State of Mind ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

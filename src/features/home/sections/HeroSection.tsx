import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { homeAssets } from '../constants/assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Luxury Villa \nRetreat in Lonavala',
    kicker: 'ESCAPE. RELAX. EXPERIENCE.',
    description: 'Unwind in a space where elegance meets calm. Thoughtfully crafted 4 / 6 / 8 BHK villas with private pools, open skies, and breathtaking hill views.',
    image: homeAssets.heroSlide1,
  },
  {
    id: 2,
    title: 'Panoramic \nHill View',
    kicker: 'MISTY MORNINGS.',
    description: 'Wake up to endless horizons and serene landscapes. Expansive 4 / 6 / 8 BHK villas where every moment is framed by uninterrupted hill views.',
    image: homeAssets.heroSlide2,
  },
  {
    id: 3,
    title: 'Private Pool \nExperience',
    kicker: 'TROPICAL BLISS.',
    description: 'Indulge in complete privacy and comfort. Premium 4 / 6 / 8 BHK villas featuring your own private pool - a perfect blend of relaxation and elevated living.',
    image: homeAssets.heroSlide3,
  },
  {
    id: 4,
    title: 'Weekend Bliss \nVilla Resort',
    kicker: 'WEEKEND GETAWAY.',
    description: 'Escape into moments that matter. Spacious 4 / 6 / 8 BHK villas crafted for celebrations, slow weekends, and unforgettable gatherings.',
    image: homeAssets.heroSlide4,
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const formatTitle = (title: string) => {
    // Split by newlines, then format the last word of the last line in gold
    const lines = title.split('\n');
    return (
      <>
        {lines.map((line, index) => {
          if (index === lines.length - 1) {
            const words = line.split(' ');
            const lastWord = words.pop();
            return (
              <React.Fragment key={index}>
                {words.join(' ')} <span className="text-brand-gold">{lastWord}</span>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] md:h-screen md:min-h-[700px] flex items-center bg-brand-black overflow-hidden top-0 pt-0">
      {/* Background Images Cross-Fade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'easeOut' }}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
          
          {/* Mobile Overlay: Left and slightly bottom (60-70%) */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent md:hidden z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/40 to-transparent md:hidden z-10" />
          
          {/* Desktop Overlay: Left to right */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/70 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Slider Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white bg-brand-black/40 hover:bg-brand-black/60 z-30 transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} strokeWidth={1.5} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white bg-brand-black/40 hover:bg-brand-black/60 z-30 transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} strokeWidth={1.5} />
      </button>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-16 lg:px-24 flex flex-col justify-center h-full pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <span className="text-brand-gold font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 drop-shadow-md">
              {slides[currentSlide].kicker}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-serif leading-[1.1] text-white mb-6 drop-shadow-lg pr-4">
              {formatTitle(slides[currentSlide].title)}
            </h1>
            <p className="text-white/90 font-sans text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-light drop-shadow-md max-w-lg">
              {slides[currentSlide].description}
            </p>
            
            <a
              href="#villas"
              className="group relative inline-flex items-center justify-center px-8 py-3 lg:px-10 lg:py-4 bg-brand-gold hover:bg-brand-ivory transition-colors duration-300 shadow-xl"
            >
              <span className="text-xs sm:text-sm tracking-[0.1em] uppercase font-semibold text-brand-black flex items-center gap-2">
                EXPLORE VILLA <ChevronRight size={16} strokeWidth={2.5} />
              </span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-brand-gold w-3 h-3' : 'bg-white/60 hover:bg-white w-2.5 h-2.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

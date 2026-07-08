import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function WeekendEscapeGallerySection() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    fetch('/gallery/images.json')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setImages(data);
        }
      })
      .catch((error) => console.error('Error loading gallery images:', error));
  }, []);

  const slideNext = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const slidePrev = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Autoplay
  useEffect(() => {
    if (images.length === 0 || isHovered) return;
    const timer = setInterval(() => {
      slideNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [slideNext, images.length, isHovered]);

  const getOffset = (index: number) => {
    const len = images.length;
    let diff = (index - currentIndex) % len;
    if (diff > Math.floor(len / 2)) {
      diff -= len;
    } else if (diff < -Math.ceil(len / 2)) {
      diff += len;
    }
    return diff;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      slideNext();
      setTouchStart(null);
    } else if (diff < -50) {
      slidePrev();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  if (images.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-brand-charcoal w-full relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-[150px]" />
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-ivory/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-16 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-brand-gold" />
          <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans">
            Gallery
          </span>
          <div className="h-[1px] w-12 bg-brand-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-ivory leading-tight mb-4"
        >
          Destination Wedding Gallery
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-brand-gold/90 font-light text-lg md:text-xl font-serif"
        >
          Celebrate your dream wedding in the heart of Lonavala.
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-[1400px] mx-auto h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex justify-center items-center [perspective:1200px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
          <AnimatePresence initial={false}>
            {images.map((src, index) => {
              const offset = getOffset(index);
              const isVisible = Math.abs(offset) <= 2;
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-[80%] md:w-[60%] lg:w-[55%] max-w-[900px] aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                  animate={{
                    x: `${offset * 75}%`,
                    scale: offset === 0 ? 1 : 1 - Math.abs(offset) * 0.18,
                    opacity: isVisible ? (offset === 0 ? 1 : Math.max(1 - Math.abs(offset) * 0.4, 0.2)) : 0,
                    zIndex: 20 - Math.abs(offset),
                    rotateY: offset * -12,
                    filter: offset === 0 ? 'blur(0px)' : `blur(${Math.abs(offset) * 4}px)`
                  }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => {
                    if (offset !== 0) {
                       setCurrentIndex(index);
                    }
                  }}
                  style={{
                    pointerEvents: isVisible ? 'auto' : 'none'
                  }}
                >
                  <motion.img
                    animate={{ scale: offset === 0 ? 1.05 : 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={src}
                    alt={`Destination Wedding Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Subtle overlay for inactive cards */}
                  {offset !== 0 && (
                    <div className="absolute inset-0 bg-brand-black/30 pointer-events-none transition-opacity duration-500" />
                  )}

                  {/* Reflection/Shadow overlay on active card */}
                  {offset === 0 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" 
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-4 md:left-12 lg:left-24 flex items-center z-30 pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); slidePrev(); }}
              className="w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-brand-gold border border-white/20 hover:border-brand-gold backdrop-blur-md flex items-center justify-center rounded-full text-white hover:text-brand-black transition-all shadow-xl pointer-events-auto group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-4 md:right-12 lg:right-24 flex items-center z-30 pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); slideNext(); }}
              className="w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-brand-gold border border-white/20 hover:border-brand-gold backdrop-blur-md flex items-center justify-center rounded-full text-white hover:text-brand-black transition-all shadow-xl pointer-events-auto group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center items-center gap-3 mt-12 md:mt-16 relative z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full h-1.5 md:h-2 ${
              idx === currentIndex
                ? 'bg-brand-gold w-10 md:w-12 shadow-[0_0_10px_rgba(212,175,55,0.5)]'
                : 'bg-white/20 w-2 md:w-3 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

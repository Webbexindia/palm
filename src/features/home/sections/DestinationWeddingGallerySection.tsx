import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function DestinationWeddingGallerySection() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    fetch('/wedding/images.json')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setImages(data);
        }
      })
      .catch((error) => console.error('Error loading wedding gallery images:', error));
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
    setTouchStart(e.clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        slideNext();
      } else {
        slidePrev();
      }
    }
    setTouchStart(null);
  };

  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans mb-4 block">
              Celebrate Love
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-ivory mb-4">
              Destination Wedding Gallery
            </h2>
            <p className="text-brand-ivory/70 text-lg max-w-2xl">
              Discover the magical moments and stunning venues perfect for your dream destination wedding
            </p>
          </div>
        </div>

        {images.length > 0 ? (
          <div
            className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-black/20 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              {images.map((image, idx) => {
                const offset = getOffset(idx);
                if (Math.abs(offset) > 1) return null;

                return (
                  <motion.div
                    key={`${idx}-${currentIndex}`}
                    initial={{ opacity: 0, x: offset > 0 ? 100 : -100 }}
                    animate={{ opacity: offset === 0 ? 1 : 0.3, x: 0 }}
                    exit={{ opacity: 0, x: offset > 0 ? -100 : 100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={image}
                      alt="Wedding gallery"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={slidePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-brand-gold/80 hover:bg-brand-gold text-brand-charcoal p-3 rounded-full transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={slideNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-brand-gold/80 hover:bg-brand-gold text-brand-charcoal p-3 rounded-full transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-brand-gold w-8 h-2'
                      : 'bg-white/40 hover:bg-white/60 w-2 h-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-6 right-6 z-10 bg-brand-charcoal/70 px-4 py-2 rounded-full text-brand-gold text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        ) : (
          <div className="h-[500px] md:h-[600px] rounded-lg bg-brand-charcoal/50 flex items-center justify-center">
            <p className="text-brand-ivory/50">Loading wedding gallery...</p>
          </div>
        )}
      </div>
    </section>
  );
}

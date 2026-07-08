import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

interface GallerySliderProps {
  images: string[];
}

export function GallerySlider({ images }: GallerySliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  }, [Autoplay({ delay: 3000, stopOnInteraction: true })]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex -ml-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
            >
               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                 <img
                    src={src}
                    alt={`Gallery slide ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setLightboxImage(src)}
                 />
               </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center justify-start -ml-4 md:-ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={scrollPrev}
          className="p-3 md:p-4 rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-brand-gold hover:text-black transition-colors shadow-xl border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center justify-end -mr-4 md:-mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={scrollNext}
          className="p-3 md:p-4 rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-brand-gold hover:text-black transition-colors shadow-xl border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              currentIndex === index ? "bg-brand-gold w-8" : "bg-white/30 hover:bg-white/60 w-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-black transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightboxImage}
              alt="Enlarged gallery image"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

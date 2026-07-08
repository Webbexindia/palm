import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeAssets } from '../constants/assets';

export function CTASection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80" 
          alt="Palm Manor Sunset" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Gradient Overlay similar to reference image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/80 to-brand-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left w-full max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-brand-ivory mb-4 tracking-tight">
            Ready to Experience Palm Manor?
          </h2>
          <p className="text-brand-ivory/80 font-sans text-base md:text-lg font-light">
            Book your stay today and create unforgettable memories.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0"
        >
          <Link 
            to="/contact" 
            className="group flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-ivory text-brand-black px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors shadow-lg"
          >
            <Calendar size={18} />
            <span>Book Now</span>
          </Link>
          
          <Link 
            to="/contact" 
            className="group flex items-center justify-center gap-2 border border-white/30 hover:border-brand-gold bg-transparent px-8 py-4 text-sm font-medium tracking-widest uppercase text-white hover:text-brand-gold transition-colors"
          >
            <Phone size={18} />
            <span>Contact</span>
            <span className="text-white/50 group-hover:text-brand-gold/50 ml-1">›</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

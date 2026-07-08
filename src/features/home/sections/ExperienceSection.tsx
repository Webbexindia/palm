import React from 'react';
import { motion } from 'motion/react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans mb-6">Lifestyle</span>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-ivory mb-10 max-w-2xl">
          More than a stay. <span className="italic text-brand-ivory/60">An experience.</span>
        </h2>
        <p className="text-brand-ivory/60 font-light max-w-xl mx-auto mb-16 text-sm">
          Whether you seek profound relaxation or quiet adventure, Palm Manor curates moments that linger long after your departure. Reconnect with nature without surrendering luxury.
        </p>
      </div>
    </section>
  );
}

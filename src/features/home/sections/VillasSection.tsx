import React from 'react';
import { motion } from 'motion/react';
import { villasData } from '../data/villasData';
import { homeAssets } from '../constants/assets';
import { Link } from 'react-router-dom';

export function VillasSection() {
  return (
    <section id="villas" className="py-24 md:py-32 relative flex items-center justify-center min-h-screen">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${homeAssets.heroBanner})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Explore Palm Manor Villas
          </h2>
          <div className="h-[2px] w-16 bg-blue-500/80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {villasData.map((villa, index) => {
             const isRusset = villa.id === 'russet';
             const isBlick = villa.id === 'blick';
             const isKadan = villa.id === 'kadan';
             const isToska = villa.id === 'toska';
             
             let linkTarget = `/#villas`;
             if (isRusset) linkTarget = '/villas/russet';
             if (isBlick) linkTarget = '/villas/blick';
             if (isKadan) linkTarget = '/villas/kadan';
             if (isToska) linkTarget = '/villas/toska';
             
             const isLinked = isRusset || isBlick || isKadan || isToska;
             
             return (
              <motion.div
                key={villa.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group h-full"
              >
                <Link to={linkTarget} className="flex flex-col bg-[#4F4C47] text-white shadow-2xl h-full block">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={villa.image}
                      alt={villa.name}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {isLinked && (
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                         <span className="border border-white text-white px-6 py-2 tracking-[0.2em] uppercase text-xs backdrop-blur-sm">View Villa</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col p-8 md:p-10">
                    <h3 className="text-xl font-sans tracking-widest text-white mb-6 uppercase">
                      {villa.name}
                    </h3>
                    <p className="text-white/80 font-sans font-light text-[15px] leading-relaxed">
                      {villa.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
}



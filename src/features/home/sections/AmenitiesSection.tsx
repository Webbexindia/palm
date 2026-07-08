import React from 'react';
import { motion } from 'motion/react';
import { default as Droplets } from 'lucide-react/dist/esm/icons/droplets';
import { default as Leaf } from 'lucide-react/dist/esm/icons/leaf';
import { default as BedDouble } from 'lucide-react/dist/esm/icons/bed-double';
import { default as Utensils } from 'lucide-react/dist/esm/icons/utensils';
import { default as Dices } from 'lucide-react/dist/esm/icons/dices';
import { default as Music } from 'lucide-react/dist/esm/icons/music';
import { default as Palette } from 'lucide-react/dist/esm/icons/palette';
import { default as ShieldCheck } from 'lucide-react/dist/esm/icons/shield-check';

export function AmenitiesSection() {
  const amenities = [
    { icon: Droplets, title: 'Private Swimming Pool', desc: 'Your own exclusive pool - pristine, private, and never shared. Day swims, midnight dips, sunrise floats - entirely on your schedule.' },
    { icon: Leaf, title: 'Palm Manor Views', desc: 'Lush greenery, open skies, and the serene beauty of nature - every corner of Palm Manor offers a view worth pausing for.' },
    { icon: BedDouble, title: 'Spacious Luxury Bedrooms', desc: 'Generously sized rooms with quality mattresses, blackout curtains, and warm interiors built for the deepest, most restful sleep.' },
    { icon: Utensils, title: 'In-House & Outside Catering', desc: 'Enjoy our in-house cook\'s fresh meals or bring your preferred caterer. With a fully equipped separate kitchen.' },
    { icon: Dices, title: 'Games & Entertainment', desc: 'Pool table, table tennis, carrom, cricket, and badminton — everything you need for non-stop fun across all age groups.' },
    { icon: Music, title: 'DJ Setup — In-House & Outside', desc: 'Our in-house DJ is ready for your event. Prefer your own? Outside DJs are fully welcome. The infrastructure is set for any sound vision.' },
    { icon: Palette, title: 'Outside Decorators Welcome', desc: 'Planning a themed birthday, anniversary, or event? Bring your own decorators — our spaces are built to be transformed and celebrated.' },
    { icon: ShieldCheck, title: 'All Event Permissions in Place', desc: 'We handle the process of getting all necessary permissions for your event—so you can focus on celebrating.' },
  ];

  return (
    <section id="amenities" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#79552A' }}>
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-brand-gold" />
            <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans">
              Features
            </span>
            <div className="h-[1px] w-12 bg-brand-gold" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-ivory mb-6"
          >
            Everything You Need, Nothing You Don't
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-ivory/70 font-light text-base md:text-lg max-w-2xl mx-auto"
          >
            Every feature at Palm Manor is designed around your comfort, freedom, and celebration.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group bg-brand-charcoal/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold/10 group-hover:scale-110 transition-all duration-500 relative z-10 shadow-inner">
                <item.icon strokeWidth={1} size={32} />
              </div>
              <h4 className="text-xl font-serif text-brand-ivory tracking-wide mb-3 relative z-10 group-hover:text-brand-gold transition-colors duration-300">{item.title}</h4>
              <p className="text-sm font-sans text-brand-ivory/60 font-light leading-relaxed relative z-10 group-hover:text-brand-ivory/80 transition-colors duration-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export function AttractionsSection() {
  const attractions = ['Tiger Point', 'Bhushi Dam', 'Karla Caves', 'Lohagad Fort'];
  return (
    <section className="py-24 bg-brand-black border-t border-brand-charcoal">
       <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-serif text-brand-ivory mb-12 text-center">Surrounding Wonders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {attractions.map((place) => (
             <div key={place} className="border border-white/10 p-8 text-center hover:border-brand-gold/50 transition-colors">
               <span className="text-sm font-sans tracking-widest text-brand-ivory/80 uppercase">{place}</span>
             </div>
          ))}
        </div>
       </div>
    </section>
  );
}

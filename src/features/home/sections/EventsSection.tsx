import React from 'react';
import { motion } from 'motion/react';

const eventsList = [
  {
    title: 'Destination Weddings',
    icon: '💍',
    subtitle: 'For couples seeking a dream hillside wedding',
    description: 'Say your vows against rolling green valleys and misty mountain skies. Our lush party lawns host up to 500 guests, while 24 on-site rooms ensure your families stay together, celebrate together, and wake up to the same stunning view.',
    capacity: '300-500 Visitors · 80–120 staying guests',
    tags: ['Pheras', 'Reception', 'Varmala', 'Baraat', 'Cocktail Evening'],
  },
  {
    title: 'Pre-Wedding Functions',
    icon: '🌸',
    subtitle: 'For families who want all the rituals, in one beautiful place',
    description: 'Mehendi, haldi, sangeet, ring ceremony — Palm Manor gives every pre-wedding function the backdrop it deserves. Intimate lawns, warm lighting, and nature all around make every ritual feel cinematic.',
    capacity: '50–200 guests (flexible for intimate gatherings)',
    tags: ['Mehendi', 'Haldi', 'Sangeet', 'Ring Ceremony', 'Cocktail Night'],
  },
  {
    title: 'Birthday Celebrations',
    icon: '🎂',
    subtitle: 'For anyone who deserves a celebration as grand as their personality',
    description: 'Milestone birthdays, surprise parties, pool parties under the mountain sky — at Palm Manor, birthdays are not just events, they are experiences. Book the villa, set up the lawn, bring the people who matter most.',
    capacity: '20–500 guests',
    tags: ['Pool Party', 'Garden Party', 'Surprise Party', 'Milestone Birthday', 'Kids Birthday'],
  },
  {
    title: 'Engagement Parties',
    icon: '💫',
    subtitle: 'For couples stepping into their forever, surrounded by loved ones',
    description: "There is no better place to say 'yes' than surrounded by mountains, greenery, and the people you love most. Our private villas and scenic outdoor spaces create the most romantic engagement settings in Lonavala.",
    capacity: '30–150 guests',
    tags: ['Ring Ceremony', 'Engagement Shoot', 'Intimate Gathering', 'Cocktail Party'],
  },
  {
    title: 'Family Get-Togethers',
    icon: '👨‍👩‍👧‍👦',
    subtitle: 'For families who want to truly reconnect, away from the rush',
    description: "Sometimes the greatest luxury is time — time spent together, unhurried, in a beautiful place. Palm Manor's private villas, shared lawns, and poolside spaces make family reunions feel like the holidays you always dreamed of.",
    capacity: '20-120 Staying Guests · More for day visits',
    tags: ['Reunion', 'Festival Celebration', 'Family Holiday', 'Summer Getaway'],
  },
  {
    title: 'Corporate Events & Retreats',
    icon: '🏢',
    subtitle: 'For teams that want to bond, brainstorm, and recharge',
    description: 'Step outside the boardroom and into the hills. Palm Manor offers a private, distraction-free environment for corporate offsites, team retreats, leadership workshops, and strategy sessions — with all the comfort your team deserves.',
    capacity: '20–100 team members',
    tags: ['Team Outing', 'Corporate Retreat', 'Leadership Offsite', 'Team Building'],
  },
  {
    title: 'Party Lawn Events',
    icon: '🎊',
    subtitle: 'For anyone planning a large outdoor celebration',
    description: 'Expansive, beautifully maintained, and set against mountain views — our party lawns can be set up for any occasion, from a casual poolside gathering to a full-blown gala under the stars.',
    capacity: '50–1000 guests',
    tags: ['Outdoor Party', 'Concert Setup', 'Poolside Bash', 'Garden Gala', 'Evening Event'],
  },
  {
    title: 'Sports & Recreation',
    icon: '🏸',
    subtitle: 'For guests and groups looking for active, outdoor fun',
    description: "Palm Manor's generous outdoor spaces are perfect for friendly sports, group activities, and outdoor recreation. Spend your days active in the most energizing setting imaginable — the mountains, fresh air, and open greens all yours.",
    capacity: 'All group sizes',
    tags: ['Badminton', 'Cricket', 'Pool'],
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-24 md:py-40 w-full relative overflow-x-clip" style={{ backgroundColor: '#79552A' }}>
      {/* Subtle Background Elements for depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 lg:items-start">
          
          {/* Left Column: Sticky Section Header */}
          <div className="w-full lg:w-[35%] lg:shrink-0 lg:sticky lg:top-32">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-[1px] w-12 bg-brand-gold" />
                <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans">Events & Celebrations</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-ivory mb-6 leading-tight"
              >
                Every Occasion Deserves a Setting This Beautiful
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-brand-gold/90 italic font-serif text-xl md:text-2xl mb-8 leading-snug"
              >
                "The mountains have witnessed a thousand celebrations here. Yours is next."
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-brand-ivory/70 font-light leading-relaxed text-base"
              >
                 Palm Manor is more than a holiday destination — it is Lonavala's most heartfelt private venue. With lush party lawns, exclusive villa spaces, 360° mountain backdrops, and complete privacy, it is the ideal setting for every kind of celebration. Whether you are hosting 20 or 500 guests, Palm Manor makes it feel effortless, intimate, and truly unforgettable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 pt-8 border-t border-brand-gold/20"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-brand-gold text-lg font-serif">Capacity:</span>
                  <span className="text-brand-ivory/90 font-light tracking-wide text-sm leading-relaxed">
                    Lawn Events 50-2000 Visiting Guests
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Scrolling Cards Grid */}
          <div className="w-full lg:w-[65%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {eventsList.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index % 2 === 0 ? 0 : 0.15 }}
                  className="bg-brand-charcoal/50 backdrop-blur-md p-8 lg:p-10 border border-white/5 hover:border-brand-gold/30 rounded-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
                >
                  {/* Subtle top edge animated gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-brand-black border border-brand-gold/20 flex items-center justify-center text-3xl mb-8 group-hover:bg-brand-gold/10 group-hover:scale-105 group-hover:border-brand-gold/40 transition-all duration-500 shadow-inner">
                    <span className="opacity-80 group-hover:opacity-100 transition-opacity">{event.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-brand-ivory mb-2 group-hover:text-brand-gold transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-brand-ivory/50 italic font-serif text-base mb-6 leading-relaxed">
                    {event.subtitle}
                  </p>

                  <p className="text-brand-ivory/80 font-light text-[14px] leading-relaxed mb-auto pb-8">
                    {event.description}
                  </p>

                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <div className="flex items-start gap-3 mb-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-2" />
                      <p className="text-brand-ivory/90 font-sans text-sm font-medium">
                        <span className="text-brand-ivory/40 uppercase text-[10px] tracking-widest block mb-1">Capacity</span>
                        Lawn Events 50-2000 Visiting Guests
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {event.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-2.5 py-1 bg-white/[0.03] border border-white/5 rounded-md text-brand-ivory/70 text-[10px] uppercase tracking-widest leading-none font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

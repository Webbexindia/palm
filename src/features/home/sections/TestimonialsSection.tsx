import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "We booked Palm Manor for a family reunion of 24 people and it was honestly the best decision we made. The private pool was the highlight — kids were in it all day and adults took over at night! The mountain views from every room are just breathtaking. The in-house cook made fresh, delicious meals every day. Will definitely come back.",
      author: "Priya Sharma",
      location: "Mumbai",
      time: "a month ago",
    },
    {
      text: "We hosted our pre-wedding mehendi and haldi at Palm Manor and it was absolutely magical. The lawns are so lush and spacious, our decorator transformed it completely. The staff was helpful at every step and the catering team worked exactly around our menu. Our 100+ guests couldn't stop complimenting the venue.",
      author: "Aakash Mehta",
      location: "Pune",
      time: "2 months ago",
    },
    {
      text: "Our team of 30 came to Palm Manor for an off-site retreat. The villas are huge, well-maintained, and the games setup kept the energy high throughout. Badminton, carrom, pool table — everyone had a blast. The views of the Sahyadris from the pool deck are something else. Highly recommend for corporate groups.",
      author: "Rohit Desai",
      location: "Nashik",
      time: "3 weeks ago",
    },
    {
      text: "Planned a surprise 30th birthday for my wife at Palm Manor. We brought our own decorator and DJ and the staff was extremely cooperative. The pool area at night with fairy lights and music felt like a dream. Every permission was already in place — no stress at all. 10/10 experience!",
      author: "Sameer Joshi",
      location: "Nagpur",
      time: "a week ago",
    },
    {
      text: "Just two of us, a private pool, and uninterrupted mountain views — what more could you want? Palm Manor gave us the most peaceful and luxurious break we've had in years. The bedroom was so comfortable, we didn't want to leave. The evening sit-out area with chai and valley views is pure bliss.",
      author: "Neha Patil",
      location: "Hyderabad",
      time: "4 months ago",
    },
    {
      text: "Six friends, one villa, one incredible weekend. The pool, the BBQ, the DJ setup, and the option to bring outside alcohol — Palm Manor truly has everything. The 6BHK villa offered more than enough space for all of us. We had never experienced such a premium and private stay in Lonavala before. Already planning our next trip!",
      author: "Karan Thakkar",
      location: "Ahmedabad",
      time: "Just now",
    }
  ];

  // Duplicate testimonials for seamless looping
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-brand-black text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex justify-center items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-brand-gold" />
          <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans">
            WHAT OUR GUESTS SAY
          </span>
          <div className="h-[1px] w-12 bg-brand-gold" />
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-4xl md:text-5xl font-serif text-brand-ivory"
        >
          Loved by 1000+ Families !
        </motion.h2>
      </div>

      {/* Auto-scrolling Marquee Container */}
      <div className="w-full relative py-4 flex overflow-hidden group mb-24">
        {/* Left and Right Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex min-w-max gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((t, idx) => (
            <div 
              key={idx}
              className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg text-left flex flex-col w-[350px] shrink-0 border border-white/10 hover:shadow-xl hover:border-brand-gold/30 transition-all cursor-default"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Initial Avatar */}
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-serif text-lg shrink-0">
                  {t.author.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-brand-ivory font-medium text-sm">{t.author}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-brand-ivory/50 text-xs">{t.time}</span>
                  </div>
                </div>
                
                {/* Google Icon (simulated) */}
                <div className="w-6 h-6 shrink-0 relative flex items-center justify-center bg-white/5 rounded-full p-1 border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full opacity-90">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3 text-brand-gold">
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <Star size={14} fill="currentColor" strokeWidth={0} />
              </div>

              {/* Review Text */}
              <p className="text-brand-ivory/80 text-sm leading-relaxed font-light flex-1">
                {t.text}
              </p>
              
            </div>
          ))}
        </motion.div>
      </div>
        
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Map Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative z-10"
        >
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4909.586313733258!2d73.4808297!3d18.7482371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ab2f5935c2fb%3A0x3f00d198f3bce66a!2sPalm%20Manor%20Lonavala%20-%20Serviced%20Luxury%20Villas!5e1!3m2!1sen!2sin!4v1778003516680!5m2!1sen!2sin" 
               width="100%" 
               height="450" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Palm Manor Map Location"
            ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

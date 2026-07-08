import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { HelmetProvider } from 'react-helmet-async';
import  SEO  from '../../components/seo/SEO';
import { Users, Flower2, CalendarDays, Check } from 'lucide-react';
import { GallerySlider } from '../../components/ui/GallerySlider';
import { Link } from 'react-router-dom';

export function BlickVillaPage() {
  const [sliderImages, setSliderImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch('/blickvilla/images.json')
      .then((res) => res.json())
      .then((data) => setSliderImages(data))
      .catch((err) => console.error("Error loading images", err));
  }, []);

  return (
    <HelmetProvider>
      <MainLayout>
        <SEO
  title="Blick Villa | Luxury Pool Villa in Lonavala | Palm Manor"
  description="Experience breathtaking valley views at Blick Villa, a luxurious private pool villa at Palm Manor Lonavala. Perfect for family vacations, group stays, weekend getaways, and celebrations with premium amenities."
  keywords="Blick Villa Lonavala, luxury villa in Lonavala, private pool villa, valley view villa, Palm Manor Blick Villa, family villa, group villa Lonavala"
  slug="/villas/blick"
/>
        
        {/* Fixed Parallax Background */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/blink-villa.jpg")' }}
        >
           {/* Dark overlay to make content readable */}
           <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-[2px]" />
        </div>
        
        {/* Content Wrapper */}
        <div className="relative z-10 pt-32 pb-24 w-full">
           
           {/* Header */}
           <div className="text-center mb-16">
             <h2 
               className="text-4xl md:text-5xl text-brand-gold mb-2 drop-shadow-md" 
               style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
             >
               Palmmanor
             </h2>
             <h1 className="text-4xl md:text-6xl font-serif text-white tracking-[0.2em] font-light uppercase drop-shadow-lg">
               BLICK VILLA
             </h1>
           </div>

           {/* Gallery Slider centered in content */}
           <div className="max-w-[90rem] mx-auto px-6 mb-16">
              <div className="bg-brand-black/40 p-4 md:p-8 backdrop-blur-md rounded-lg border border-white/5 shadow-2xl">
                 <GallerySlider images={sliderImages} />
              </div>
           </div>

           {/* Main Content Area */}
           <div className="max-w-7xl mx-auto px-6 md:px-12">
              
              {/* Event Stats Bar */}
              <div className="border border-brand-gold/30 bg-brand-black/80 backdrop-blur-md flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-10 lg:py-5 mb-16 gap-8 lg:gap-0 relative rounded-sm">
                 
                 {/* Lawn Events */}
                 <div className="flex flex-row items-center gap-4 text-white w-full lg:w-auto">
                    <Flower2 size={32} className="text-brand-gold opacity-90" strokeWidth={1.5} />
                    <div className="flex flex-col">
                       <span className="text-xs text-brand-ivory/80 uppercase tracking-[0.1em] mb-1">Lawn Events</span>
                       <span className="text-lg font-medium tracking-wide text-brand-gold mb-0.5">50-2000 Visiting Guests</span>
                       <span className="text-xs text-brand-ivory/60 font-light">Grand outdoor experiences</span>
                    </div>
                 </div>

                 <div className="hidden lg:block w-px h-12 bg-brand-gold/30" />

                 {/* Ideal For */}
                 <div className="flex flex-row items-center gap-4 text-white w-full lg:w-auto">
                    <CalendarDays size={32} className="text-brand-gold opacity-90" strokeWidth={1.5} />
                    <div className="flex flex-col">
                       <span className="text-xs text-brand-ivory/80 uppercase tracking-[0.1em] mb-1">Ideal for</span>
                       <span className="text-lg font-medium tracking-wide text-brand-gold mb-0.5">Weddings & Events</span>
                       <span className="text-xs text-brand-ivory/60 font-light">Birthdays, Reunions & More</span>
                    </div>
                 </div>

                 <Link to="/contact" className="bg-brand-gold hover:bg-brand-ivory text-brand-black px-8 py-4 text-sm tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(202,168,113,0.3)] font-semibold w-full lg:w-auto text-center hover:scale-105 duration-300 mt-2 lg:mt-0">
                    BOOK NOW
                 </Link>
              </div>

              {/* Two Column Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                 
                 {/* Left Column */}
                 <div className="space-y-12">
                    {/* Overview */}
                    <div className="bg-brand-black/40 p-8 backdrop-blur-md rounded-sm border border-white/5">
                       <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">OVERVIEW</h3>
                       <p className="text-white/90 italic mb-6 text-lg">
                          The view finds you here.
                       </p>
                       <p className="text-brand-ivory/80 leading-relaxed font-light mb-4">
                          Blick Villa at Palm Manor Lonavala is a premium 4 to 8 BHK private luxury villa designed for unforgettable group stays, celebrations, and peaceful escapes. Surrounded by scenic hills and offering breathtaking 360° mountain views, the villa combines privacy, space, and modern comfort in one exclusive destination.
                       </p>
                       <p className="text-brand-ivory/80 leading-relaxed font-light mb-4">
                          The villa features a private swimming pool (24 x 13 x 4.5 ft), spacious air-conditioned bedrooms with attached bathrooms, a large terrace with outdoor seating, and beautifully maintained outdoor areas. Guests can enjoy indoor and outdoor entertainment including pool table, table tennis, carrom, cricket and badminton setup — making it ideal for birthdays, corporate retreats, family gatherings, and weekend getaways.
                       </p>
                       <p className="text-brand-ivory/80 leading-relaxed font-light mb-4">
                          With flexible booking options (3 to 8 BHK depending on guest count), in-house cook services, a fully equipped kitchen, gazebo deck, and caretaker support, Blick Villa ensures a seamless and comfortable stay experience.
                       </p>
                       <p className="text-brand-ivory/80 leading-relaxed font-light mb-8">
                          Blick — from the German for ‘view’ — lives up to its name in every possible way. This villa opens up like a painting: mountains on all sides, skies that shift from gold to deep indigo as the day passes, and a private pool that reflects it all. If there is one place to rediscover the simple luxury of looking out and feeling small in the best way possible, it is Blick.
                       </p>
                       <p className="text-brand-ivory/90 text-sm">
                          <span className="font-semibold text-white">Best For:</span> Couples · Photography Enthusiasts · Creative Retreats
                       </p>
                    </div>

                    {/* Villa Configuration */}
                    <div className="bg-brand-black/40 p-8 backdrop-blur-md rounded-sm border border-white/5">
                       <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">Villa Configuration</h3>
                       <ul className="space-y-4">
                          {[
                            '4 to 8 BHK Luxury Private Villa', 
                            'Flexible booking: 3/4/5/6/8 BHK', 
                            'Ideal for approx. 10 to 25 Guests', 
                            'Exclusive access with complete privacy'
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-brand-ivory/90">
                               <Check size={20} className="text-white mt-0.5 shrink-0" strokeWidth={3} />
                               <span className="tracking-wide font-light">{item}</span>
                            </li>
                          ))}
                       </ul>
                    </div>

                    {/* Food & Kitchen */}
                    <div className="bg-brand-black/40 p-8 backdrop-blur-md rounded-sm border border-white/5">
                       <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">Food & Kitchen</h3>
                       <ul className="space-y-4">
                          {[
                            'Fully Equipped Kitchen', 
                            'All Crockery & Basic Appliances', 
                            'Refrigerator', 
                            'On-Site Professional Cook Available (Fixed meal packages, customizable menu options)'
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-brand-ivory/90">
                               <Check size={20} className="text-white mt-0.5 shrink-0" strokeWidth={3} />
                               <span className="tracking-wide font-light">{item}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>

                 {/* Right Column */}
                 <div className="space-y-12">
                    {/* Private Swimming Pool */}
                    <div className="bg-brand-black/40 p-8 backdrop-blur-md rounded-sm border border-white/5">
                       <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">Private Swimming Pool</h3>
                       <ul className="space-y-4">
                          {[
                            'Private Exclusive Pool', 
                            'Size: 24 x 13 x 4.5 ft', 
                            'Pool Timings: 9 AM to Midnight', 
                            'Poolside deck seating area', 
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-brand-ivory/90">
                               <Check size={20} className="text-white mt-0.5 shrink-0" strokeWidth={3} />
                               <span className="tracking-wide font-light">{item}</span>
                            </li>
                          ))}
                       </ul>
                    </div>

                    {/* Indoor & Outdoor Amenities */}
                    <div className="bg-brand-black/40 p-8 backdrop-blur-md rounded-sm border border-white/5">
                       <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">Indoor & Outdoor Amenities</h3>
                       <ul className="space-y-4">
                          {[
                            'Pool Table', 
                            'Table Tennis (TT)', 
                            'Carrom', 
                            'Cricket Setup', 
                            'Badminton Setup', 
                            'Smart TV', 
                            'Speakers Provided',
                            'Large Terrace with outdoor views',
                            'Gazebo Deck & Outdoor Seating'
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-brand-ivory/90">
                               <Check size={20} className="text-white mt-0.5 shrink-0" strokeWidth={3} />
                               <span className="tracking-wide font-light">{item}</span>
                            </li>
                          ))}
                       </ul>
                    </div>

                    {/* Additional Facilities */}
                    <div className="bg-brand-black/40 p-8 backdrop-blur-md rounded-sm border border-white/5">
                       <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">Additional Facilities</h3>
                       <ul className="space-y-4">
                          {[
                            'Car Parking', 
                            'Caretaker On Site', 
                            'Safe & Sanitized Environment', 
                            'Located 0.1 km from Malavli Station', 
                            '15 mins from Lonavala Market'
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-brand-ivory/90">
                               <Check size={20} className="text-white mt-0.5 shrink-0" strokeWidth={3} />
                               <span className="tracking-wide font-light">{item}</span>
                            </li>
                          ))}
                       </ul>
                    </div>

                    {/* Important Notes */}
                    <div className="bg-brand-black/40 p-8 backdrop-blur-md rounded-sm border border-white/5 border-t-2 border-t-brand-gold/30">
                       <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">Important Notes</h3>
                       <ul className="space-y-5">
                          <li className="flex items-center gap-4 text-brand-ivory/90 bg-white/5 p-3 rounded">
                             <span className="text-brand-gold text-xl drop-shadow-md">🎵</span>
                             <span className="tracking-wide font-medium">Outdoor music not allowed after 10 PM</span>
                          </li>
                          <li className="flex items-center gap-4 text-brand-ivory/90 bg-white/5 p-3 rounded">
                             <span className="text-brand-gold text-xl drop-shadow-md">⏰</span>
                             <span className="tracking-wide font-medium">Check-in: 1:30 PM</span>
                          </li>
                          <li className="flex items-center gap-4 text-brand-ivory/90 bg-white/5 p-3 rounded">
                             <span className="text-brand-gold text-xl drop-shadow-md">⏰</span>
                             <span className="tracking-wide font-medium">Check-out: 10:30 AM</span>
                          </li>
                       </ul>
                    </div>
                 </div>

              </div>

           </div>
        </div>

      </MainLayout>
    </HelmetProvider>
  );
}

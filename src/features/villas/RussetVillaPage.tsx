import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { HelmetProvider } from 'react-helmet-async';
import  SEO  from '../../components/seo/SEO';
import { Users, Flower2, CalendarDays, Check } from 'lucide-react';
import { GallerySlider } from '../../components/ui/GallerySlider';
import { Link } from 'react-router-dom';

export function RussetVillaPage() {
  const [sliderImages, setSliderImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch('/russetvilla/images.json')
      .then((res) => res.json())
      .then((data) => setSliderImages(data))
      .catch((err) => console.error("Error loading images", err));
  }, []);

  return (
    <HelmetProvider>
      <MainLayout>
        <SEO
         title="Russet Villa | Luxury Private Villa in Lonavala | Palm Manor"
         description="Experience comfort and elegance at Russet Villa, a premium private villa at Palm Manor Lonavala. Enjoy spacious bedrooms, modern interiors, a private pool, lush surroundings, and the perfect getaway for families, friends, and group stays."
         keywords="Russet Villa Lonavala, luxury villa in Lonavala, private pool villa Lonavala, Palm Manor Russet Villa, family villa in Lonavala, group stay villa, premium villa resort Lonavala"
         slug="/villas/russet"
         />
        
        {/* Fixed Parallax Background */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/Russet-Villa.jpg")' }}
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
               RUSSET VILLA
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
                          Warm as a sunset. Steady as the earth.
                       </p>
                       <p className="text-brand-ivory/80 leading-relaxed font-light mb-8">
                          Named for the deep, earthy tones of autumn, Russet wraps you in a sense of groundedness the moment you step in. 
                          With its private pool shimmering against lush surroundings and panoramic mountain backdrops, this villa is for those 
                          who find peace in the unhurried and the authentic. Gather your people, light the evenings, and let the hills do the rest.
                       </p>
                       <p className="text-brand-ivory/90 text-sm">
                          <span className="font-semibold text-white">Best For:</span> Family Getaways · Quiet Retreats · Long Weekend Unwinding
                       </p>
                    </div>

                    {/* Bedrooms */}
                    <div className="bg-brand-black/40 p-8 backdrop-blur-md rounded-sm border border-white/5">
                       <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">Bedrooms & Comfort</h3>
                       <ul className="space-y-4">
                          {[
                            'King Size Beds', 
                            'Queen Size Beds', 
                            'Additional Single Beds available', 
                            'All Bedrooms Fully Air-Conditioned', 
                            'En-suite Attached Washrooms', 
                            'Spacious Interiors'
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
                            'All Crockery & Appliances', 
                            'Refrigerator', 
                            'On-Site Professional Cook Available (Fixed Meal Packages – Menu customizable)'
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
                    {/* Indoor & Outdoor Amenities */}
                    <div className="bg-brand-black/40 p-8 backdrop-blur-md rounded-sm border border-white/5">
                       <h3 className="text-2xl font-serif text-white tracking-widest uppercase mb-6">Indoor & Outdoor Amenities</h3>
                       <ul className="space-y-4">
                          {[
                            'Pool Table', 
                            'Table Tennis', 
                            'Carrom', 
                            'Cricket Setup', 
                            'Badminton Setup', 
                            'Smart TV', 
                            'Speakers Provided',
                            'Terrace with Scenic Mountain Views',
                            'Private Gazebo Deck',
                            'Pool Deck Seating Area',
                            'Vibrant & Well-Maintained Outdoor Area'
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


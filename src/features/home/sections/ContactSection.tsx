import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Headset, Train, Car, Building2, Mountain, ChevronDown, Calendar, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formsubmit.co/ajax/Palmmanordisha@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 8000); // Hide success message after 8 seconds
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#0d0d0d] font-sans pt-24 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/PRIVATE-POOL-EXPERIENCE.jpeg"
          alt="Villa Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/90 via-[#0d0d0d]/80 to-[#0d0d0d] backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="max-w-xl text-left mb-16 mt-8">
          <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
            We'd love to hear from you
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-ivory mb-6">Contact Us</h2>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-brand-gold/50 w-16" />
            <span className="text-brand-gold text-xl leading-none">✽</span>
            <div className="h-px bg-brand-gold/50 w-16" />
          </div>

          <p className="text-brand-ivory/80 font-light text-sm md:text-base leading-relaxed">
            Have questions or planning your stay? Our team is here to help you with the perfect villa experience at Palm Manor Lonavala.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#1a1a1a]/80 border border-brand-gold/20 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 text-brand-gold">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Location</h3>
            <p className="text-brand-ivory/80 text-sm leading-relaxed">
              Palm Manor Lonavala<br />Malavli, Lonavala – 410405<br />Maharashtra, India
            </p>
          </div>

          <div className="bg-[#1a1a1a]/80 border border-brand-gold/20 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 text-brand-gold">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Call Us</h3>
            <p className="text-brand-ivory text-base font-medium mb-2">+91 99874 22254</p>
            <p className="text-brand-ivory/60 text-xs">9:00 AM – 10:00 PM</p>
          </div>

          <div className="bg-[#1a1a1a]/80 border border-brand-gold/20 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 text-brand-gold">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Email Us</h3>
            <p className="text-brand-ivory text-sm mb-2 break-all">palmmanor.info@gmail.com</p>
            <p className="text-brand-ivory/60 text-xs">We reply within 24 hours</p>
          </div>

          <div className="bg-[#1a1a1a]/80 border border-brand-gold/20 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 text-brand-gold">
              <MessageCircle size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Whatsapp</h3>
            <p className="text-brand-ivory text-base font-medium mb-2">+91 99874 22254</p>
            <p className="text-brand-ivory/60 text-xs">Chat with us instantly</p>
          </div>
        </div>

        {/* Message Form & Image Side-by-Side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Form */}
          <div className="flex-1 bg-[#1a1a1a]/80 border border-brand-gold/20 backdrop-blur-md rounded-xl p-8 lg:p-10">
            <h3 className="text-brand-gold text-sm font-bold tracking-[0.15em] uppercase mb-8">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative">
              {isSuccess && (
                <div className="absolute inset-0 bg-[#1a1a1a]/95 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center rounded-xl border border-brand-gold/30 p-8">
                  <CheckCircle2 size={48} className="text-brand-gold mb-4" />
                  <h4 className="text-brand-ivory text-xl font-serif mb-2">Thank You!</h4>
                  <p className="text-brand-ivory/80 text-sm">Thank you, our team will connect with you shortly.</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="Name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#262626] border border-white/5 rounded-md px-5 py-4 text-brand-ivory text-sm focus:outline-none focus:border-brand-gold/50 placeholder-white/40"
                />
                <input
                  type="tel"
                  name="Phone"
                  required
                  placeholder="Phone Number"
                  className="w-full bg-[#262626] border border-white/5 rounded-md px-5 py-4 text-brand-ivory text-sm focus:outline-none focus:border-brand-gold/50 placeholder-white/40"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  className="w-full bg-[#262626] border border-white/5 rounded-md px-5 py-4 text-brand-ivory text-sm focus:outline-none focus:border-brand-gold/50 placeholder-white/40"
                />
                <input
                  type="number"
                  name="Guests"
                  placeholder="Number of Guests"
                  className="w-full bg-[#262626] border border-white/5 rounded-md px-5 py-4 text-brand-ivory text-sm focus:outline-none focus:border-brand-gold/50 placeholder-white/40"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    name="CheckIn"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = 'text';
                    }}
                    placeholder="Check-in Date"
                    className="w-full bg-[#262626] border border-white/5 rounded-md px-5 py-4 text-brand-ivory text-sm focus:outline-none focus:border-brand-gold/50 placeholder-white/40 appearance-none bg-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  />
                  <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="CheckOut"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = 'text';
                    }}
                    placeholder="Check-out Date"
                    className="w-full bg-[#262626] border border-white/5 rounded-md px-5 py-4 text-brand-ivory text-sm focus:outline-none focus:border-brand-gold/50 placeholder-white/40 appearance-none bg-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  />
                  <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="relative">
                <select name="VillaPreference" defaultValue="" className="w-full bg-[#262626] border border-white/5 rounded-md px-5 py-4 text-white/40 text-sm focus:outline-none focus:border-brand-gold/50 appearance-none focus:text-brand-ivory">
                  <option value="" disabled hidden>Villa Preference</option>
                  <option value="russet" className="text-brand-black bg-brand-ivory">Russet Villa</option>
                  <option value="blick" className="text-brand-black bg-brand-ivory">Blick Villa</option>
                  <option value="kadan" className="text-brand-black bg-brand-ivory">Kadan Villa</option>
                  <option value="toska" className="text-brand-black bg-brand-ivory">Toska Villa</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
              </div>

              <textarea
                name="Message"
                placeholder="Message (Optional)"
                rows={4}
                className="w-full bg-[#262626] border border-white/5 rounded-md px-5 py-4 text-brand-ivory text-sm focus:outline-none focus:border-brand-gold/50 placeholder-white/40 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold hover:bg-brand-ivory text-[#1a1a1a] text-xs font-bold uppercase tracking-[0.2em] py-5 rounded-md transition-colors shadow-lg mt-2 font-sans disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative rounded-xl overflow-hidden min-h-[400px] border border-brand-gold/20">
            <img
              src="/PANORAMIC-HILL-VIEW-2.jpeg"
              alt="Balcony View at Sunset"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Box */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a]/90 backdrop-blur-md border border-brand-gold/30 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center shrink-0 text-brand-gold">
                <Headset size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-brand-gold text-lg font-serif mb-1">
                  We're here to make your stay memorable!
                </h4>
                <p className="text-brand-ivory/80 text-sm font-light">
                  Let's plan your perfect getaway.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Easy To Reach Section */}
        <div className="bg-[#f0eadd] rounded-xl py-12 px-6 shadow-xl text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-brand-black/20 w-12" />
            <span className="text-brand-black font-serif text-xl tracking-widest uppercase">Easy To Reach</span>
            <div className="h-px bg-brand-black/20 w-12" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 max-w-4xl mx-auto md:divide-x divide-brand-black/10">
            <div className="flex flex-col items-center px-4">
              <Train size={32} className="text-brand-black/80 mb-4" strokeWidth={1.5} />
              <p className="text-brand-black font-bold text-sm tracking-widest uppercase mb-1">0.1 KM</p>
              <p className="text-brand-black/60 text-xs font-medium">from Malavli Station</p>
            </div>
            
            <div className="flex flex-col items-center px-4">
              <Car size={32} className="text-brand-black/80 mb-4" strokeWidth={1.5} />
              <p className="text-brand-black font-bold text-sm tracking-widest uppercase mb-1">15 MINS</p>
              <p className="text-brand-black/60 text-xs font-medium">from Lonavala Market</p>
            </div>

            <div className="flex flex-col items-center px-4">
              <Building2 size={32} className="text-brand-black/80 mb-4" strokeWidth={1.5} />
              <p className="text-brand-black font-bold text-sm tracking-widest uppercase mb-1">100 MINS</p>
              <p className="text-brand-black/60 text-xs font-medium">from Mumbai</p>
            </div>

            <div className="flex flex-col items-center px-4">
              <Mountain size={32} className="text-brand-black/80 mb-4" strokeWidth={1.5} />
              <p className="text-brand-black font-bold text-sm tracking-widest uppercase mb-1">45 MINS</p>
              <p className="text-brand-black/60 text-xs font-medium">from Pune</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

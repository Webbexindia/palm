import React from 'react';
import { homeAssets } from '../../features/home/constants/assets';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-24 pb-12 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link to="/">
              <img src="/Palm-Manor-logo.png" alt="Palm Manor Logo" className="h-24 md:h-32 w-auto object-contain mb-6" />
            </Link>
            <p className="text-brand-ivory/60 font-sans font-light leading-relaxed mb-8">
              Refined luxury living nestled in the serene landscapes. A sanctuary for those seeking elegance and tranquility.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-brand-ivory mb-6 tracking-wider">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', link: '/#about', isAnchor: true },
                { name: 'Gallery', link: '/#gallery', isAnchor: true },
                { name: 'Contact', link: '/contact', isAnchor: false },
              ].map((item) => (
                <li key={item.name}>
                  {item.isAnchor ? (
                    <a href={item.link} className="text-brand-ivory/60 hover:text-brand-gold transition-colors text-sm tracking-wide">
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.link} className="text-brand-ivory/60 hover:text-brand-gold transition-colors text-sm tracking-wide">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-brand-ivory mb-6 tracking-wider">Our Villas</h4>
            <ul className="space-y-4">
              {[
                { name: 'Russet Villa', link: '/villas/russet' }, 
                { name: 'Blick Villa', link: '/villas/blick' }, 
                { name: 'Kadan Villa', link: '/villas/kadan' }, 
                { name: 'Toska Villa', link: '/villas/toska' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-brand-ivory/60 hover:text-brand-gold transition-colors text-sm tracking-wide">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-brand-ivory mb-6 tracking-wider">Address</h4>
            <ul className="space-y-4 text-brand-ivory/60 text-sm tracking-wide leading-relaxed">
              <li>
                Karla Ekvira Lane Malavali, Station, <br/>
                opp. Vedanta Academy, Karla, <br/>
                Lonavala, Maharashtra 410405
              </li>
              <li className="pt-2 border-t border-brand-gold/10">
                <a href="mailto:info@palmmanorlonavala.com" className="hover:text-brand-gold transition-colors">
                  info@palmmanorlonavala.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-brand-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-brand-ivory/10 gap-4">
          <p className="text-xs text-brand-ivory/40 tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} PALM MANOR LONAVALA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-ivory/40 hover:text-brand-gold text-xs tracking-widest transition-colors">PRIVACY POLICY</a>
            <a href="#" className="text-brand-ivory/40 hover:text-brand-gold text-xs tracking-widest transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

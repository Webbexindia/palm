import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '/#about', isAnchor: true },
    { 
      label: 'Villas', 
      isDropdown: true,
      children: [
        { label: 'Russet Villa', href: '/villas/russet' },
        { label: 'Blick Villa', href: '/villas/blick' },
        { label: 'Kadan Villa', href: '/villas/kadan' },
        { label: 'Toska Villa', href: '/villas/toska' },
      ]
    },
    { label: 'Contact', href: '/contact', isAnchor: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAnchor: boolean) => {
    if (isAnchor) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate(href);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5',
        isScrolled
          ? 'bg-brand-black/90 py-3 backdrop-blur-md shadow-2xl'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative flex items-center h-10 w-32 md:w-48 group whitespace-nowrap z-50">
          <img src="/Palm-Manor-logo.png" alt="Palm Manor Logo" className="absolute top-1/2 -translate-y-1/2 left-0 h-24 md:h-32 max-w-none w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.label} className={link.isDropdown ? "relative group" : ""}>
                {link.isDropdown ? (
                  <>
                    <button className="flex items-center gap-1 text-xs xl:text-sm font-sans tracking-widest text-brand-ivory/80 hover:text-brand-gold transition-colors uppercase whitespace-nowrap">
                      {link.label}
                      <ChevronDown size={14} />
                    </button>
                    <div className="absolute top-full left-0 mt-4 bg-brand-black/95 backdrop-blur-md border border-brand-gold/20 py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl z-50">
                      {link.children?.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-6 py-3 text-xs tracking-widest text-brand-ivory/80 hover:text-brand-gold hover:bg-white/5 transition-colors uppercase"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : link.isAnchor ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href as string, link.isAnchor as boolean)}
                    className="text-xs xl:text-sm font-sans tracking-widest text-brand-ivory/80 hover:text-brand-gold transition-colors uppercase whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href as string}
                    className="text-xs xl:text-sm font-sans tracking-widest text-brand-ivory/80 hover:text-brand-gold transition-colors uppercase whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="bg-brand-gold text-brand-black font-semibold px-4 py-2 xl:px-6 xl:py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-brand-ivory transition-all duration-300 whitespace-nowrap shadow-[0_0_15px_rgba(202,168,113,0.3)]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-brand-ivory"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-black/95 backdrop-blur-lg border-b border-brand-gold/10 p-6 flex flex-col items-center gap-6 shadow-2xl">
          {navLinks.map((link) => (
            link.isDropdown ? (
              <div key={link.label} className="flex flex-col items-center gap-4 w-full">
                <div className="text-lg font-serif text-brand-gold tracking-widest uppercase flex items-center gap-2">
                  {link.label} <ChevronDown size={18} />
                </div>
                {link.children?.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-serif text-brand-ivory/80 hover:text-brand-gold transition-colors tracking-widest uppercase"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : link.isAnchor ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href as string, link.isAnchor as boolean)}
                className="text-lg font-serif text-brand-ivory hover:text-brand-gold transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href as string}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-brand-ivory hover:text-brand-gold transition-colors tracking-widest uppercase"
              >
                {link.label}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-brand-gold text-brand-black font-semibold px-6 py-3 tracking-widest uppercase hover:bg-brand-ivory transition-all shadow-[0_0_15px_rgba(202,168,113,0.3)]"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}


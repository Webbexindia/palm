import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';
import { FloatingSocialIcons } from '../ui/FloatingSocialIcons';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory font-sans relative">
      <Navbar />
      <FloatingSocialIcons />
      <main className="flex-1 overflow-x-clip">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

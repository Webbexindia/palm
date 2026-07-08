import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import  SEO  from '../../components/seo/SEO';
import { ContactSection } from '../home/sections/ContactSection';
import { HelmetProvider } from 'react-helmet-async';

export function ContactPage() {
  return (
    <HelmetProvider>
      <MainLayout>
        <SEO
          title="Contact Palm Manor Lonavala | Book Your Luxury Villa Stay"
          description="Contact Palm Manor Lonavala to book your luxury private villa. Get assistance with reservations, availability, pricing, group bookings, family vacations, corporate retreats, and special celebrations."
          keywords="Contact Palm Manor Lonavala, luxury villa booking Lonavala, villa reservation Lonavala, private pool villa contact, Palm Manor contact, book villa in Lonavala, group villa booking"
          slug="/contact"
        />
        <ContactSection />
      </MainLayout>
    </HelmetProvider>
  );
}

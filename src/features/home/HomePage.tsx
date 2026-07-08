import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import  SEO  from '../../components/seo/SEO';
import { HeroSection } from './sections/HeroSection';
import { FeaturesBannerSection } from './sections/FeaturesBannerSection';
import { AboutSection } from './sections/AboutSection';
import { VillasSection } from './sections/VillasSection';
import { EventsSection } from './sections/EventsSection';
import { WeekendEscapeGallerySection } from './sections/WeekendEscapeGallerySection';
import { AmenitiesSection } from './sections/AmenitiesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { CTASection } from './sections/CTASection';
import { HelmetProvider } from 'react-helmet-async';
import SeoKeywordLinks from '@/src/components/ui/SeoKeywordLinks';

export function HomePage() {
  return (
    <HelmetProvider>
      <MainLayout>
        <SEO
          title="Luxury Villa Resort in Lonavala"
          description="Palm Manor offers luxurious villas with private pool in Lonavala for families, friends and corporate groups."
          keywords="Luxury Villa Lonavala, Resort in Lonavala, Villa with Pool"
          slug="/"
        />
        <HeroSection />
        <FeaturesBannerSection />
        <AboutSection />
        <VillasSection />
        <EventsSection />
        <WeekendEscapeGallerySection />
        <AmenitiesSection />
        <TestimonialsSection />
        <SeoKeywordLinks />
        <CTASection />
      </MainLayout>
    </HelmetProvider>
  );
}

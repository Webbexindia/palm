import React from 'react';
import { Building2, Home, Headphones } from 'lucide-react';

export function FeaturesBannerSection() {
  const features = [
    {
      icon: <Building2 strokeWidth={1.5} className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Flexible Villa Booking",
      subtitle: "3 to 8 BHK Options Available",
      bgClass: "bg-[#9A743B]"
    },
    {
      icon: <Home strokeWidth={1.5} className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Lonavala",
      subtitle: "Easy Access & Prime Location",
      bgClass: "bg-[#795B2E]"
    },
    {
      icon: <Headphones strokeWidth={1.5} className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Hospitality Service",
      subtitle: "In-House Cook & Caretaker On Site",
      bgClass: "bg-[#4A381C]"
    }
  ];

  return (
    <section className="relative z-30 w-full pointer-events-auto">
      <div className="w-full">
        <div className="flex flex-col w-full md:flex-row">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`flex flex-1 items-center gap-6 p-8 lg:p-10 ${feature.bgClass}`}
            >
              <div className="shrink-0 flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif text-[1.4rem] lg:text-[1.35rem] xl:text-2xl text-white font-semibold mb-1">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm md:text-[15px] text-white/90 font-medium">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

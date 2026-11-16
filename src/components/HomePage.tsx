"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import PrimeLocations from "@/components/PrimeLocations";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import PropertyModal from "@/components/PropertyModal";
import ConsultationModal from "@/components/ConsultationModal";
import type { Property, PropertyFilters } from "@/types/property";

export default function HomePage() {
  const [filters, setFilters] = useState<PropertyFilters>({
    location: "All",
    type: "All",
    purpose: "Buy",
  });
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [consultOpen, setConsultOpen] = useState(false);

  const handleSearch = () => {
    document
      .getElementById("featured")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar onBookConsultation={() => setConsultOpen(true)} />
      <main>
        <Hero
          filters={filters}
          onFiltersChange={setFilters}
          onSearch={handleSearch}
        />
        <FeaturedProperties
          filters={filters}
          onFiltersChange={setFilters}
          onViewDetails={setSelectedProperty}
        />
        <PrimeLocations />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
      <ConsultationModal
        open={consultOpen}
        onClose={() => setConsultOpen(false)}
      />
    </>
  );
}

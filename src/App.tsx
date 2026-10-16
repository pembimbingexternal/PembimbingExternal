import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactFormSection } from './components/ContactFormSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('bimbingan-skripsi');
  const [customNote, setCustomNote] = useState<string>('');

  const handleSelectService = (serviceId: string, note?: string) => {
    setSelectedServiceId(serviceId);
    if (note) {
      setCustomNote(note);
    }
    const contactSection = document.getElementById('kontak');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenConsultation = () => {
    const contactSection = document.getElementById('kontak');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#3B1B3C] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section with Polygon Pattern & 3 Docked Cards */}
        <HeroSection
          onSelectService={handleSelectService}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Mengapa Memilih Opsi Ini? Trust Bar */}
        <TrustBar />

        {/* Deep Dive Anchor Points for Tugas, Skripsi, Tesis */}
        <div id="tugas" className="sr-only" />
        <div id="skripsi" className="sr-only" />
        <div id="tesis" className="sr-only" />

        {/* Full Services Catalog & Interactive Estimator */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* Alur Kerja / Cara Kerja */}
        <WorkflowSection
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Testimoni Mahasiswa */}
        <TestimonialsSection />

        {/* Responsive High-Converting Contact & Consultation Form */}
        <ContactFormSection
          initialServiceId={selectedServiceId}
          initialNote={customNote}
        />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Speed Dial & WhatsApp Widget (Matching Reference Icon) */}
      <FloatingWhatsApp
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Quick Search Spotlight Modal (Ctrl+K / ⌘K) */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={handleSelectService}
      />
    </div>
  );
}

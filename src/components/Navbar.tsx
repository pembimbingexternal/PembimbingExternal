import React, { useState, useEffect } from 'react';
import { GraduationCap, Search, Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'BERANDA', href: '#beranda' },
    { label: 'TUGAS', href: '#tugas' },
    { label: 'SKRIPSI', href: '#skripsi' },
    { label: 'TESIS', href: '#tesis' },
    { label: 'CARA KERJA', href: '#cara-kerja' },
    { label: 'TESTIMONI', href: '#testimoni' },
    { label: 'KONTAK', href: '#kontak' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E8E1D5]'
            : 'bg-[#FAF8F5] py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#beranda"
              className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
              aria-label="Pembimbing External Beranda"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3B1B3C] text-[#C89D42] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 font-extrabold text-lg sm:text-xl tracking-tight leading-tight">
                  <span className="text-[#3B1B3C]">PEMBIMBING</span>
                  <span className="text-[#C89D42]">EXTERNAL</span>
                </div>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-bold tracking-wider text-stone-700 uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#3B1B3C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C89D42] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Quick Search & Primary Action */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Quick Search Button */}
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200/80 rounded-xl transition-colors border border-stone-200/70"
                title="Cari Cepat (Ctrl+K)"
                aria-label="Buka Pencarian Cepat"
              >
                <Search className="w-4 h-4 text-stone-500" />
                <span className="hidden sm:inline">Cari Layanan</span>
                <kbd className="hidden sm:inline-block text-[10px] bg-white border border-stone-300 px-1.5 py-0.5 rounded text-stone-500">
                  ⌘K
                </kbd>
              </button>

              {/* WhatsApp Consultation Button (Matching reference) */}
              <a
                href="https://wa.me/6288213808579?text=Halo%20Pembimbing%20External%2C%20saya%20ingin%20konsultasi%20pendampingan%20akademik."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#3B1B3C] hover:bg-[#2A0E2B] active:scale-95 rounded-xl shadow-xs transition-all tracking-wide whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-current shrink-0" />
                <span>KONSULTASI VIA WA</span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200 mt-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-700 hover:text-[#3B1B3C] hover:bg-stone-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-stone-700 bg-stone-100 rounded-xl"
                >
                  <Search className="w-4 h-4 text-stone-500" />
                  <span>Pencarian Cepat</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

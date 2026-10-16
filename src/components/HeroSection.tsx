import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  BarChart3, 
  Star, 
  ArrowRight, 
  Laptop, 
  GraduationCap, 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  Users, 
  BookOpen 
} from 'lucide-react';

interface HeroSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  const scrollToServices = () => {
    const el = document.getElementById('layanan');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beranda" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden academic-poly-pattern">
      {/* Decorative low-poly polygon facets matching the reference image */}
      <div className="absolute top-12 left-0 w-72 h-72 md:w-96 md:h-96 pointer-events-none opacity-40">
        <svg viewBox="0 0 300 300" className="w-full h-full fill-none">
          <polygon points="0,0 120,40 60,180" fill="#C89D42" fillOpacity="0.12" stroke="#C89D42" strokeWidth="0.5" strokeOpacity="0.3" />
          <polygon points="120,40 240,20 180,140" fill="#3B1B3C" fillOpacity="0.06" stroke="#3B1B3C" strokeWidth="0.5" strokeOpacity="0.2" />
          <polygon points="60,180 180,140 90,270" fill="#C89D42" fillOpacity="0.1" stroke="#C89D42" strokeWidth="0.5" strokeOpacity="0.3" />
          <polygon points="0,0 60,180 0,240" fill="#FAF8F5" fillOpacity="0.2" stroke="#C89D42" strokeWidth="0.5" strokeOpacity="0.15" />
        </svg>
      </div>

      <div className="absolute top-16 right-0 w-80 h-80 md:w-[460px] md:h-[460px] pointer-events-none opacity-40">
        <svg viewBox="0 0 300 300" className="w-full h-full fill-none">
          <polygon points="300,0 180,50 240,190" fill="#C89D42" fillOpacity="0.12" stroke="#C89D42" strokeWidth="0.5" strokeOpacity="0.3" />
          <polygon points="180,50 60,30 120,150" fill="#3B1B3C" fillOpacity="0.06" stroke="#3B1B3C" strokeWidth="0.5" strokeOpacity="0.2" />
          <polygon points="240,190 120,150 210,280" fill="#C89D42" fillOpacity="0.1" stroke="#C89D42" strokeWidth="0.5" strokeOpacity="0.3" />
          <polygon points="300,0 240,190 300,250" fill="#FAF8F5" fillOpacity="0.2" stroke="#C89D42" strokeWidth="0.5" strokeOpacity="0.15" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Headline & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12 lg:mb-16">
          
          {/* Left Column: Headlines & Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#1E1A20] tracking-tight leading-[1.12] uppercase">
                <span className="block text-[#3B1B3C]">PILIHAN ALTERNATIF:</span>
                <span className="block text-[#1E1A20]">SOLUSI AKADEMIK</span>
                <span className="block text-[#C89D42]">TERBAIK ANDA.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-stone-600 max-w-xl font-normal leading-relaxed pt-2">
                Pendampingan Menyeluruh untuk Skripsi, Tesis, & Tugas Kuliah dengan Hasil Berkualitas & Bebas Plagiarisme.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
              <a
                href="https://wa.me/6288213808579?text=Halo%20Pembimbing%20External%2C%20saya%20ingin%20konsultasi%20pendampingan%20akademik."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#3B1B3C] hover:bg-[#2B0E2C] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg active:scale-98 transition-all"
              >
                <Rocket className="w-4 h-4 text-[#C89D42]" />
                <span>HUBUNGI KAMI DI WA</span>
              </a>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-sm border-2 border-stone-300 hover:border-stone-400 active:scale-98 transition-all shadow-2xs"
              >
                <BarChart3 className="w-4 h-4 text-[#3B1B3C]" />
                <span>LIHAT LAYANAN & HARGA</span>
              </button>
            </div>

            {/* Rating / Social Proof */}
            <div className="flex items-center gap-2 mt-6 pt-2 text-stone-700 text-xs sm:text-sm font-semibold">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
              <span className="tracking-wide text-stone-900 font-bold">4.9/5 RATING</span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-600 font-medium">2.500+ KLIEN PUAS DARI 120+ KAMPUS</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Academic Collaboration Scene */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Studio Desk Presentation Container */}
              <div className="relative rounded-3xl bg-linear-to-b from-white to-[#F6F1E8] border border-[#E8DFD0] p-6 shadow-xl overflow-hidden">
                
                {/* Academic Institution Header & Status Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-200/80 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#3B1B3C] text-[#C89D42] flex items-center justify-center font-bold text-sm">
                      PE
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">Pembimbing External Lab</div>
                      <div className="text-[11px] text-stone-500">Mentoring & Review Center</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Lolos Turnitin & Sidang</span>
                  </div>
                </div>

                {/* Central Academic Visual Graphic */}
                <div className="relative rounded-2xl bg-linear-to-tr from-[#3B1B3C] via-[#4A204C] to-[#2B0E2C] p-5 text-white shadow-inner mb-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#C89D42]" />
                      <span className="text-xs font-semibold text-amber-200 tracking-wide uppercase">Monitoring Progress Skripsi/Tesis</span>
                    </div>
                    <span className="text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/90">Bab 1 - 5</span>
                  </div>

                  {/* Progress Milestone Bar */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs font-medium text-stone-200">
                      <span>Proses Bimbingan & Olah Data</span>
                      <span className="font-bold text-[#C89D42]">100% Siap Ujian</span>
                    </div>
                    <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-linear-to-r from-[#C89D42] to-amber-300 h-full w-full rounded-full transition-all duration-1000" />
                    </div>
                  </div>

                  {/* Live Verification Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs border border-white/10">
                      <div className="text-stone-300 text-[11px]">Turnitin Similarity</div>
                      <div className="text-base font-extrabold text-emerald-300 font-mono">8% (Aman)</div>
                      <div className="text-[10px] text-stone-300 mt-0.5">Maks. Kampus 20%</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs border border-white/10">
                      <div className="text-stone-300 text-[11px]">Status Naskah</div>
                      <div className="text-base font-extrabold text-amber-300">ACC Pembimbing</div>
                      <div className="text-[10px] text-stone-300 mt-0.5">Siap Daftar Sidang</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight Badges */}
                <div className="grid grid-cols-2 gap-3 text-stone-700">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
                    <Users className="w-4 h-4 text-[#3B1B3C] shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-stone-900 leading-tight">150+ Ahli S2 & S3</div>
                      <div className="text-[10px] text-stone-500">Spesialis Berbagai Jurusan</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
                    <ShieldCheck className="w-4 h-4 text-[#C89D42] shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-stone-900 leading-tight">Garansi Revisi</div>
                      <div className="text-[10px] text-stone-500">Tanpa Tambahan Biaya</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Docked Hero Feature Cards (Directly matching the reference image layout!) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-4"
        >
          {/* Card 1: Jasa Tugas Kuliah */}
          <div 
            onClick={() => onSelectService('tugas-kuliah')}
            className="group relative bg-white rounded-2xl p-6 border border-[#E6DDCE] hover:border-[#3B1B3C]/40 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-[#3B1B3C]/10 text-stone-700 group-hover:text-[#3B1B3C] flex items-center justify-center shrink-0 transition-colors">
                  <Laptop className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base lg:text-lg text-stone-900 uppercase tracking-tight group-hover:text-[#3B1B3C] transition-colors">
                    JASA TUGAS KULIAH
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">D3, S1, & S2 Semua Jurusan</p>
                </div>
              </div>
              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                Bimbingan untuk proposal, tugas makalah, review jurnal, dan asistensi tugas kuliah dengan tim ahli.
              </p>
            </div>
            
            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-bold text-stone-800 group-hover:text-[#3B1B3C] inline-flex items-center gap-1.5 transition-colors">
                Pesan Sekarang 
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-[11px] text-stone-500">Mulai Rp 150rb</span>
            </div>
          </div>

          {/* Card 2: Bimbingan Skripsi */}
          <div 
            onClick={() => onSelectService('bimbingan-skripsi')}
            className="group relative bg-white rounded-2xl p-6 border-2 border-[#C89D42]/60 hover:border-[#3B1B3C] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-[#3B1B3C]/10 text-[#C89D42] group-hover:text-[#3B1B3C] flex items-center justify-center shrink-0 transition-colors">
                  <GraduationCap className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-base lg:text-lg text-stone-900 uppercase tracking-tight group-hover:text-[#3B1B3C] transition-colors">
                      BIMBINGAN SKRIPSI
                    </h3>
                  </div>
                  <p className="text-xs text-amber-700 font-medium mt-1">Pilihan Terfavorit Mahasiswa S1</p>
                </div>
              </div>
              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                Bimbingan untuk proposal, bab hasil, olah data statistik, dan revisi skripsi dengan tim ahli bergaransi.
              </p>
            </div>
            
            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#3B1B3C] inline-flex items-center gap-1.5 transition-colors">
                Pesan Sekarang 
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-[11px] text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded">Garansi Revisi</span>
            </div>
          </div>

          {/* Card 3: Penulisan Tesis */}
          <div 
            onClick={() => onSelectService('penulisan-tesis')}
            className="group relative bg-white rounded-2xl p-6 border border-[#E6DDCE] hover:border-[#3B1B3C]/40 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-[#3B1B3C]/10 text-stone-700 group-hover:text-[#3B1B3C] flex items-center justify-center shrink-0 transition-colors">
                  <Award className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base lg:text-lg text-stone-900 uppercase tracking-tight group-hover:text-[#3B1B3C] transition-colors">
                    PENULISAN TESIS
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">Program Pascasarjana / S2</p>
                </div>
              </div>
              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                Penulisan tesis & olah data, perumusan novelty riset, pendampingan review naskah berkala bersama akademisi.
              </p>
            </div>
            
            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-bold text-stone-800 group-hover:text-[#3B1B3C] inline-flex items-center gap-1.5 transition-colors">
                Pesan Sekarang 
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-[11px] text-stone-500">Konsultan S2 / S3</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

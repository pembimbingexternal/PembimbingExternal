import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Calculator, Clock, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/academicData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string, customNote?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Instant Quote Estimator States
  const [estimatorDegree, setEstimatorDegree] = useState<'D3' | 'S1' | 'S2'>('S1');
  const [estimatorScope, setEstimatorScope] = useState<'proposal' | 'full' | 'olah_data' | 'tugas'>('proposal');
  const [estimatorSpeed, setEstimatorSpeed] = useState<'regular' | 'express'>('regular');

  const categories = [
    { id: 'all', label: 'Semua Layanan' },
    { id: 'tugas', label: 'Tugas Kuliah' },
    { id: 'skripsi', label: 'Skripsi S1' },
    { id: 'tesis', label: 'Tesis S2' },
    { id: 'olah-data', label: 'Olah Data' },
    { id: 'jurnal', label: 'Jurnal Ilmiah' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  // Calculate quick estimate
  const calculateEstimate = () => {
    let base = 750000;
    if (estimatorDegree === 'D3') base = 500000;
    if (estimatorDegree === 'S2') base = 1800000;

    let multiplier = 1;
    if (estimatorScope === 'full') multiplier = 2.0;
    if (estimatorScope === 'olah_data') multiplier = 0.6;
    if (estimatorScope === 'tugas') multiplier = 0.35;

    let speedBonus = estimatorSpeed === 'express' ? 1.3 : 1.0;
    const total = Math.round((base * multiplier * speedBonus) / 50000) * 50000;
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(total);
  };

  const handleApplyEstimate = () => {
    let serviceId = 'bimbingan-skripsi';
    if (estimatorDegree === 'S2') serviceId = 'penulisan-tesis';
    if (estimatorScope === 'tugas') serviceId = 'tugas-kuliah';
    if (estimatorScope === 'olah_data') serviceId = 'olah-data-statistik';

    const note = `Estimasi Mandiri: Jenjang ${estimatorDegree}, Kebutuhan ${estimatorScope}, Pengerjaan ${estimatorSpeed === 'express' ? 'Express Kilat' : 'Reguler'}, Perkiraan ${calculateEstimate()}`;
    onSelectService(serviceId, note);
  };

  return (
    <section id="layanan" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89D42]">Katalog Solusi Pembimbing External</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1A20] tracking-tight uppercase mt-2">
            PILIHAN LAYANAN AKADEMIK KAMI
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Didampingi dari tahap penentuan judul, riset kepustakaan, analisis statistik, hingga gladi resik presentasi ujian sidang.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-stone-200/60 rounded-2xl max-w-2xl mx-auto mt-8 border border-stone-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#3B1B3C] text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`bg-white rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 relative ${
                service.popular
                  ? 'border-2 border-[#C89D42] shadow-lg ring-4 ring-[#C89D42]/10'
                  : 'border-[#E6DDCE] hover:border-[#3B1B3C]/40 shadow-xs hover:shadow-md'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 right-6 bg-[#3B1B3C] text-[#C89D42] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs tracking-wider">
                  Paling Banyak Dipilih
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C89D42] bg-amber-50 px-2.5 py-1 rounded-md">
                    {service.categoryLabel}
                  </span>
                  <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {service.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-2 leading-tight">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 mb-6 pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                    Fasilitas & Jaminan:
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-stone-100 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-stone-400 font-medium uppercase">Mulai Dari</div>
                  <div className="text-base sm:text-lg font-extrabold text-[#3B1B3C]">
                    {service.priceStart}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    service.popular
                      ? 'bg-[#3B1B3C] hover:bg-[#2B0E2C] text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-[#3B1B3C] text-stone-800 hover:text-white'
                  }`}
                >
                  <span>Konsultasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Fast Cost Calculator Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-linear-to-r from-[#3B1B3C] via-[#461D48] to-[#2B0E2C] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-3">
                <Calculator className="w-4 h-4" />
                <span>Simulasi Biaya Cepat</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Hitung Estimasi Biaya Bimbingan Sesuai Kebutuhan Anda
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                Pilih jenjang pendidikan dan bagian yang ingin dikerjakan untuk melihat gambaran investasi akademik Anda secara transparan.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white/10 p-5 sm:p-6 rounded-2xl backdrop-blur-md border border-white/10 space-y-4">
              {/* Row 1: Degree */}
              <div>
                <label className="text-xs text-stone-300 font-semibold block mb-2">1. Jenjang Pendidikan:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['D3', 'S1', 'S2'] as const).map((deg) => (
                    <button
                      key={deg}
                      type="button"
                      onClick={() => setEstimatorDegree(deg)}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${
                        estimatorDegree === deg
                          ? 'bg-[#C89D42] text-stone-900 shadow-sm'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      Program {deg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 2: Scope */}
              <div>
                <label className="text-xs text-stone-300 font-semibold block mb-2">2. Bagian yang Dibutuhkan:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'proposal', label: 'Proposal (Bab 1-3)' },
                    { id: 'full', label: 'Lengkap (Bab 1-5)' },
                    { id: 'olah_data', label: 'Olah Data Saja' },
                    { id: 'tugas', label: 'Tugas Makalah' },
                  ].map((sc) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setEstimatorScope(sc.id as any)}
                      className={`p-2 text-center text-xs font-bold rounded-lg transition-all leading-tight ${
                        estimatorScope === sc.id
                          ? 'bg-[#C89D42] text-stone-900 shadow-sm'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Speed */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-300 font-semibold">Kecepatan:</span>
                  <div className="inline-flex rounded-lg bg-black/20 p-1">
                    <button
                      type="button"
                      onClick={() => setEstimatorSpeed('regular')}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                        estimatorSpeed === 'regular' ? 'bg-white text-stone-900' : 'text-stone-300'
                      }`}
                    >
                      Reguler
                    </button>
                    <button
                      type="button"
                      onClick={() => setEstimatorSpeed('express')}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                        estimatorSpeed === 'express' ? 'bg-[#C89D42] text-stone-900 font-bold' : 'text-stone-300'
                      }`}
                    >
                      Express Kilat
                    </button>
                  </div>
                </div>

                {/* Output & Action */}
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] text-stone-300 block uppercase">Estimasi Mulai</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#C89D42] font-mono">
                      {calculateEstimate()}
                    </span>
                  </div>
                  <button
                    onClick={handleApplyEstimate}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-[#3B1B3C] text-xs font-bold transition-all shadow-xs shrink-0 flex items-center gap-1.5"
                  >
                    <span>Gunakan</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C89D42]" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

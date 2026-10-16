import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/academicData';

export const TestimonialsSection: React.FC = () => {
  const campusList = [
    'Universitas Indonesia',
    'Universitas Gadjah Mada',
    'Institut Teknologi Bandung',
    'Universitas Airlangga',
    'Universitas Diponegoro',
    'Universitas Brawijaya',
    'Universitas Padjadjaran',
    'Institut Pertanian Bogor',
    'BINUS University',
    'Universitas Telkom',
  ];

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89D42]">Bukti Nyata Kelulusan</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1A20] tracking-tight uppercase mt-2">
            KISAH SUKSES MAHASISWA
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Lebih dari 2.500+ mahasiswa berhasil menyelesaikan masa studi tepat waktu dengan predikat memuaskan bersama tim Pembimbing External.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Rating & Quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C89D42]/20" />
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3B1B3C] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {item.degree} · <span className="text-stone-700 font-medium">{item.university}</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200/80 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Campus Partner Logos / Names Banner */}
        <div className="rounded-2xl bg-white border border-[#E8DFD0] p-6 sm:p-8 text-center shadow-2xs">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
            Telah Membimbing Mahasiswa dari Berbagai Kampus Ternama di Indonesia:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold text-stone-600">
            {campusList.map((campus, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="hover:text-[#3B1B3C] transition-colors">{campus}</span>
                {i < campusList.length - 1 && <span className="text-stone-300">·</span>}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

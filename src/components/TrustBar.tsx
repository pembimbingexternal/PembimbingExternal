import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, FileCheck, RefreshCw, Clock, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/academicData';

export const TrustBar: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    pakar: <UserCheck className="w-5 h-5 text-[#C89D42]" />,
    turnitin: <FileCheck className="w-5 h-5 text-[#3B1B3C]" />,
    privasi: <ShieldCheck className="w-5 h-5 text-[#C89D42]" />,
    revisi: <RefreshCw className="w-5 h-5 text-[#3B1B3C]" />,
    jadwal: <Clock className="w-5 h-5 text-[#C89D42]" />,
    interaktif: <Sparkles className="w-5 h-5 text-[#3B1B3C]" />,
  };

  return (
    <section className="py-12 bg-white border-y border-[#EBE4D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching the reference */}
        <div className="text-center md:text-left mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89D42]">Komitmen Keunggulan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1A20] tracking-tight uppercase mt-1">
              MENGAPA MEMILIH OPSI INI?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md">
            Standar akademik tinggi dengan perlindungan penuh untuk ketenangan dan kelulusan Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EBE4D8] hover:border-[#3B1B3C]/30 hover:bg-white transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                  {iconMap[item.id] || <ShieldCheck className="w-5 h-5 text-[#C89D42]" />}
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-stone-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

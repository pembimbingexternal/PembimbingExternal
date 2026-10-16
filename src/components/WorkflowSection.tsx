import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, FileSpreadsheet, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/academicData';

interface WorkflowSectionProps {
  onOpenConsultation: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenConsultation }) => {
  const stepIcons = [
    <MessageSquare key="1" className="w-6 h-6 text-[#C89D42]" />,
    <FileSpreadsheet key="2" className="w-6 h-6 text-[#3B1B3C]" />,
    <Headphones key="3" className="w-6 h-6 text-[#C89D42]" />,
    <CheckCircle2 key="4" className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-white border-t border-[#EBE4D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89D42]">Alur Transparan</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1A20] tracking-tight uppercase mt-2">
            BAGAIMANA CARA KERJA KAMI?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Hanya 4 langkah mudah untuk menyelesaikan tugas, skripsi, dan tesis Anda dengan rasa tenang dan bimbingan maksimal.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {WORKFLOW_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8DFD0] hover:border-[#3B1B3C]/30 hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center">
                    {stepIcons[index]}
                  </div>
                  <span className="text-3xl font-extrabold text-[#C89D42]/40 font-mono">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[#C89D42]/60">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Fast Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#3B1B3C] hover:bg-[#2B0E2C] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>Mulai Konsultasi Langkah Pertama Sekarang</span>
            <ArrowRight className="w-4 h-4 text-[#C89D42]" />
          </button>
        </div>

      </div>
    </section>
  );
};

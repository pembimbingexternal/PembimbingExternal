import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, Sparkles, Send } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenConsultation: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: 'Konsultasi Judul Skripsi', msg: 'Halo Pembimbing External, saya ingin konsultasi penentuan judul dan topik skripsi.' },
    { label: 'Bimbingan Skripsi Bab 1-5', msg: 'Halo Pembimbing External, saya butuh pendampingan skripsi lengkap bab 1 sampai bab 5.' },
    { label: 'Olah Data Statistik Cepat', msg: 'Halo Pembimbing External, saya butuh bantuan olah data SPSS/SmartPLS untuk bab 4.' },
    { label: 'Cek Turnitin & Parafrase', msg: 'Halo Pembimbing External, saya ingin cek Turnitin resmi dan penurunan similarity naskah.' },
  ];

  const handleSendQuickMessage = (text: string) => {
    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/6288213808579?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Floating Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#3B1B3C] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C89D42] text-stone-900 font-bold flex items-center justify-center text-xs">
                PE
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Konsultasi Pembimbing External</h4>
                <p className="text-[11px] text-amber-200 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online · Siap Membantu Anda
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick choices */}
          <div className="p-3.5 bg-stone-50/70 border-b border-stone-100 text-xs text-stone-600">
            Pilih pertanyaan cepat untuk terhubung langsung dengan konsultan kami:
          </div>

          <div className="p-3 space-y-2 max-h-60 overflow-y-auto">
            {quickMessages.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSendQuickMessage(item.msg)}
                className="w-full text-left p-2.5 rounded-xl border border-stone-200 bg-white hover:bg-amber-50/50 hover:border-[#C89D42]/60 text-xs text-stone-800 font-medium transition-all flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <Send className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#3B1B3C] group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>

          {/* Form link */}
          <div className="p-3 bg-stone-100/90 border-t border-stone-200 flex items-center justify-between">
            <span className="text-[11px] text-stone-500">Ingin penawaran tertulis?</span>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="text-xs font-bold text-[#3B1B3C] hover:underline flex items-center gap-1"
            >
              <span>Isi Form Konsultasi</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Main Trigger Button matching reference icon style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#3B1B3C] hover:bg-[#2B0E2C] text-[#C89D42] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all relative group"
        aria-label="Buka Chat Konsultasi Edu Assist"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </>
        )}
      </button>

    </div>
  );
};

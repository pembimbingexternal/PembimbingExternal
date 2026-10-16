import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E1A20] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Commitment */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#3B1B3C] text-[#C89D42] flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex items-center gap-1.5 font-extrabold text-xl tracking-tight text-white">
                <span>PEMBIMBING</span>
                <span className="text-[#C89D42]">EXTERNAL</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Platform pendampingan riset & asistensi akademik nomor satu di Indonesia. Kami berdedikasi membantu mahasiswa menyelesaikan tugas, skripsi, dan tesis dengan standar mutu tinggi dan bebas plagiarisme.
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#C89D42]" />
              <span>Kerahasiaan data Anda 100% terlindungi oleh NDA</span>
            </div>
          </div>

          {/* Col 2: Layanan */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#tugas" className="hover:text-white transition-colors">Jasa Tugas Kuliah & Makalah</a></li>
              <li><a href="#skripsi" className="hover:text-white transition-colors">Bimbingan Skripsi S1 (Bab 1 - 5)</a></li>
              <li><a href="#tesis" className="hover:text-white transition-colors">Penulisan & Riset Tesis S2</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Olah Data SPSS, PLS, AMOS, R</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Parafrase & Uji Turnitin Resmi</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Publikasi Jurnal SINTA & Scopus</a></li>
            </ul>
          </div>

          {/* Col 3: Navigasi */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#cara-kerja" className="hover:text-white transition-colors">Cara Kerja</a></li>
              <li><a href="#testimoni" className="hover:text-white transition-colors">Testimoni Klien</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Tanya Jawab</a></li>
              <li><a href="#kontak" className="hover:text-white transition-colors">Kontak Kami</a></li>
            </ul>
          </div>

          {/* Col 4: Kontak & Jam Kerja */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hubungi Kami
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C89D42]" />
                <a href="https://wa.me/6288213808579" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +62 882-1380-8579
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C89D42]" />
                <span>pembimbingexternal@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C89D42] shrink-0 mt-0.5" />
                <span>Jakarta Selatan, Indonesia</span>
              </div>
              <div className="pt-2 text-[11px] text-stone-500">
                Jam Operasional: 08.00 - 22.00 WIB (Senin - Minggu)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Pembimbing External Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <span>Kebijakan Privasi</span>
            <span>Syarat & Ketentuan</span>
            <span>Panduan Integritas Akademik</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

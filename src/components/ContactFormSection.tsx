import React from 'react';
import { 
  MessageCircle, 
  Sparkles, 
  PhoneCall, 
  Clock, 
  FileText, 
  ArrowRight,
  GraduationCap,
  Award,
  Laptop,
  BarChart2,
  CheckCircle2
} from 'lucide-react';

interface ContactFormProps {
  initialServiceId?: string;
  initialNote?: string;
}

export const ContactFormSection: React.FC<ContactFormProps> = ({
  initialServiceId: _initialServiceId,
  initialNote: _initialNote,
}) => {
  const whatsappChannels = [
    {
      id: 'skripsi',
      title: 'Bimbingan Skripsi S1',
      desc: 'Proposal Bab 1-3, olah data, pembahasan Bab 4-5, & persiapan sidang komprehensif.',
      msg: 'Halo Pembimbing External, saya ingin konsultasi bimbingan skripsi S1. Mohon info mentor dan prosedurnya.',
      icon: GraduationCap,
      badge: 'Paling Diminati',
    },
    {
      id: 'tesis',
      title: 'Penulisan & Riset Tesis S2',
      desc: 'Pendampingan tesis magister, perumusan novelty riset, metodologi, dan publikasi jurnal.',
      msg: 'Halo Pembimbing External, saya ingin konsultasi bimbingan tesis S2. Mohon info konsultan spesialis.',
      icon: Award,
      badge: 'Magister',
    },
    {
      id: 'tugas',
      title: 'Jasa Tugas Kuliah & Makalah',
      desc: 'Pembuatan makalah, esai akademik, critical review jurnal, dan asistensi tugas kampus.',
      msg: 'Halo Pembimbing External, saya butuh asistensi tugas kuliah/makalah. Mohon info estimasi biaya.',
      icon: Laptop,
      badge: 'Respon Cepat',
    },
    {
      id: 'olah-data',
      title: 'Olah Data SPSS, PLS, AMOS & R',
      desc: 'Analisis statistik kuantitatif/kualitatif dengan interpretasi output siap untuk Bab 4.',
      msg: 'Halo Pembimbing External, saya butuh jasa olah data statistik untuk Bab 4. Mohon info paketnya.',
      icon: BarChart2,
      badge: '1 - 2 Hari',
    },
  ];

  const handleOpenWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/6288213808579?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Pitch & Information */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89D42]">
              Konsultasi Langsung 24/7
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1A20] tracking-tight uppercase mt-2 leading-tight">
              KONSULTASIKAN KENDALA AKADEMIK ANDA SEKARANG
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
              Hubungi tim konsultan kami langsung via WhatsApp tanpa perlu repot mengisi formulir. Dapatkan respon kilat, analisa awal gratis, dan estimasi biaya transparan.
            </p>

            {/* Quick Benefits Checklist */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD0] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#3B1B3C]/10 text-[#3B1B3C] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">Respon Cepat WhatsApp</h4>
                  <p className="text-xs text-stone-500">Admin & konsultan siap merespon pertanyaan Anda setiap hari (08.00 - 22.00 WIB).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD0] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#C89D42] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">Privasi & Dokumen 100% Rahasia</h4>
                  <p className="text-xs text-stone-500">Draft, identitas kampus, dan data mentah dilindungi protokol Non-Disclosure Agreement (NDA).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD0] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">Garansi Revisi Sampai Lulus</h4>
                  <p className="text-xs text-stone-500">Pendampingan penuh tanpa biaya tambahan hingga disahkan dosen pembimbing.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[#3B1B3C] text-white">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Promo Mahasiswa Aktif</span>
              </div>
              <p className="text-xs text-stone-200">
                Sebutkan kode <strong className="text-amber-300 font-mono">EDUPASCA</strong> saat chat di WhatsApp untuk mendapatkan potongan 15% bimbingan skripsi & tesis!
              </p>
            </div>
          </div>

          {/* Right Side: Direct WhatsApp Channel Cards (No input form) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8DFD0] shadow-xl relative">
              
              <div className="border-b border-stone-100 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-stone-900 leading-tight">
                    Pilih Jalur Konsultasi WhatsApp
                  </h3>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Konsultan Online
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  Klik layanan yang ingin Anda tanyakan untuk langsung terhubung ke WhatsApp dengan pesan siap kirim:
                </p>
              </div>

              {/* Service WhatsApp Option Cards */}
              <div className="space-y-3 mb-6">
                {whatsappChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <button
                      key={channel.id}
                      type="button"
                      onClick={() => handleOpenWhatsApp(channel.msg)}
                      className="w-full text-left p-4 rounded-2xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all duration-200 group flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-start gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-emerald-600 group-hover:text-white text-stone-700 flex items-center justify-center shrink-0 transition-colors">
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                              {channel.title}
                            </h4>
                            <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 group-hover:bg-emerald-100 group-hover:text-emerald-800 px-2 py-0.5 rounded-md">
                              {channel.badge}
                            </span>
                          </div>
                          <p className="text-xs text-stone-500 mt-0.5 truncate sm:whitespace-normal">
                            {channel.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0">
                        <span className="hidden sm:inline">Chat</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Main Prominent General WhatsApp Button */}
              <div className="pt-2 border-t border-stone-100 space-y-3">
                <button
                  type="button"
                  onClick={() => handleOpenWhatsApp('Halo Pembimbing External, saya ingin konsultasi dan tanya seputar layanan pendampingan akademik.')}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span>Hubungi Admin via WhatsApp (0882-1380-8579)</span>
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500 pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Bebas Konsultasi Awal
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Respon &lt; 5 Menit
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Kerahasiaan 100%
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

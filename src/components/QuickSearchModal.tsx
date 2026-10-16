import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, GraduationCap, FileText, CheckCircle2, HelpCircle } from 'lucide-react';
import { SERVICES_DATA, WORKFLOW_STEPS, FAQ_DATA } from '../data/academicData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceId: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // open will be handled by parent or window listener
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const serviceItems = SERVICES_DATA.map((s) => ({
    id: s.id,
    title: s.title,
    subtitle: `${s.categoryLabel} · Mulai ${s.priceStart}`,
    type: 'Layanan' as const,
    action: () => {
      onSelectService(s.id);
      onClose();
    },
    icon: GraduationCap,
  }));

  const workflowItems = WORKFLOW_STEPS.map((w) => ({
    id: `wf-${w.step}`,
    title: `Langkah ${w.step}: ${w.title}`,
    subtitle: w.desc,
    type: 'Alur Kerja' as const,
    action: () => {
      const el = document.getElementById('cara-kerja');
      el?.scrollIntoView({ behavior: 'smooth' });
      onClose();
    },
    icon: CheckCircle2,
  }));

  const faqItems = FAQ_DATA.map((f) => ({
    id: f.id,
    title: f.question,
    subtitle: f.answer,
    type: 'FAQ' as const,
    action: () => {
      const el = document.getElementById('faq');
      el?.scrollIntoView({ behavior: 'smooth' });
      onClose();
    },
    icon: HelpCircle,
  }));

  const allItems = [...serviceItems, ...workflowItems, ...faqItems];

  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 6)
    : allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pencarian Cepat Pembimbing External"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200 bg-stone-50/70">
          <Search className="w-5 h-5 text-stone-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownList}
            placeholder="Cari layanan (Skripsi, Tesis, Tugas, Turnitin, Olah Data, FAQ)..."
            className="w-full bg-transparent text-stone-900 placeholder-stone-400 focus:outline-hidden text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-stone-400 hover:text-stone-600 transition-colors mr-2"
              title="Hapus pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[11px] font-medium text-stone-500 bg-stone-200/80 px-2 py-0.5 rounded-md shrink-0">
            ESC
          </span>
        </div>

        {/* Results list */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-stone-100">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <BookOpen className="w-8 h-8 mx-auto text-stone-300 mb-2" />
              <p className="text-sm font-medium">Tidak ada hasil untuk &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-stone-400 mt-1">Coba kata kunci: Skripsi, Olah Data, Tesis, Revisi, atau Harga</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                    isSelected
                      ? 'bg-[#3B1B3C]/10 text-[#3B1B3C]'
                      : 'hover:bg-stone-50 text-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#3B1B3C] text-white'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm truncate">{item.title}</span>
                        <span className="text-[10px] font-medium uppercase tracking-wider text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded-sm">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 truncate mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'translate-x-1 text-[#3B1B3C]' : 'text-stone-300'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer hints */}
        <div className="px-4 py-2.5 bg-stone-100/80 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded-sm text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded-sm text-[10px]">↓</kbd>
              <span>Navigasi</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded-sm text-[10px]">Enter</kbd>
              <span>Pilih</span>
            </span>
          </div>
          <span className="text-stone-400 hidden sm:inline">Navigasi Kilat Pembimbing External</span>
        </div>
      </div>
    </div>
  );
};

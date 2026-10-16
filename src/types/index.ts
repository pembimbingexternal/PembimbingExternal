export interface ServiceItem {
  id: string;
  title: string;
  category: 'tugas' | 'skripsi' | 'tesis' | 'olah-data' | 'jurnal';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  priceStart: string;
  duration: string;
  deliverables: string[];
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  degree: string;
  major: string;
  university: string;
  rating: number;
  comment: string;
  outcome: string;
  avatarSeed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: 'Layanan' | 'Alur Kerja' | 'FAQ' | 'Kontak';
  actionType: 'scroll' | 'selectService';
  targetId: string;
  serviceId?: string;
}

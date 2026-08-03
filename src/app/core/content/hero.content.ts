import { Localized } from '../i18n/language.types';
import { NavItem, Pillar } from '../models/project.models';

export interface ProjectMeta {
  brand: string;
  brandCaps: string;
  subtitle: string;
  tagline: string;
  project: string;
  program: string;
  instructor: string;
  date: string;
  duration: string;
  startDate: string;
  finishDate: string;
  totalBudget: number;
  totalBudgetLabel: string;
  logo: string;
  heroImage: string;
  secondaryImage: string;
  exploreCta: string;
  impactCta: string;
  metaProject: string;
  metaProgram: string;
  metaInstructor: string;
  metaDate: string;
  thankYouTitle: string;
  thankYouTagline: string;
  thankYouCredit: string;
}

export const PROJECT_META: Localized<ProjectMeta> = {
  en: {
    brand: 'The Green Hub',
    brandCaps: 'THE GREEN HUB',
    subtitle: 'Sustainable Community Center',
    tagline: 'Together for a Greener Tomorrow',
    project: 'MBA Team Final Project – Group 5 – July 6, 2025',
    program: 'RBC MBA — Project Management',
    instructor: 'Dr. Ehab EL Nezamy',
    date: 'July 6, 2025',
    duration: '40 Weeks',
    startDate: '1 January 2026',
    finishDate: '2 October 2026',
    totalBudget: 1_200_000,
    totalBudgetLabel: '$1,200,000',
    logo: 'assets/brand/logo.png',
    heroImage: 'assets/images/hub-plaza.png',
    secondaryImage: 'assets/images/hub-courtyard.png',
    exploreCta: 'Explore the project',
    impactCta: 'See the impact',
    metaProject: 'Project',
    metaProgram: 'Program',
    metaInstructor: 'Instructor',
    metaDate: 'Date',
    thankYouTitle: 'Thank You',
    thankYouTagline: 'Together for a greener tomorrow',
    thankYouCredit: 'The Green Hub — MBA Team Final Project, Group 5',
  },
  ar: {
    brand: 'جرين هب',
    brandCaps: 'جرين هب',
    subtitle: 'مركز مجتمعي مستدام',
    tagline: 'معًا من أجل غدٍ أكثر خضرة',
    project: 'مشروع تخرج MBA — المجموعة 5',
    program: 'RBC MBA — إدارة المشاريع',
    instructor: 'د. إيهاب النظامي',
    date: '6 يوليو 2025',
    duration: '40 أسبوعًا',
    startDate: '1 يناير 2026',
    finishDate: '2 أكتوبر 2026',
    totalBudget: 1_200_000,
    totalBudgetLabel: '$1,200,000',
    logo: 'assets/brand/logo.png',
    heroImage: 'assets/images/hub-plaza.png',
    secondaryImage: 'assets/images/hub-courtyard.png',
    exploreCta: 'استكشف المشروع',
    impactCta: 'شاهد الأثر',
    metaProject: 'المشروع',
    metaProgram: 'البرنامج',
    metaInstructor: 'المشرف',
    metaDate: 'التاريخ',
    thankYouTitle: 'شكرًا لكم',
    thankYouTagline: 'معًا من أجل غدٍ أكثر خضرة',
    thankYouCredit: 'جرين هب — مشروع تخرج MBA، المجموعة 5',
  },
};

export const NAV_ITEMS: Localized<NavItem[]> = {
  en: [
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Scope', href: '#scope' },
    { label: 'WBS', href: '#wbs' },
    { label: 'OBS', href: '#obs' },
    { label: 'Budget', href: '#budget' },
  ],
  ar: [
    { label: 'نبذة', href: '#about' },
    { label: 'الفريق', href: '#team' },
    { label: 'النطاق', href: '#scope' },
    { label: 'WBS', href: '#wbs' },
    { label: 'OBS', href: '#obs' },
    { label: 'الميزانية', href: '#budget' },
  ],
};

export const CORE_PILLARS: Localized<Pillar[]> = {
  en: [
    { title: 'Renewable energy', description: '', icon: 'solar' },
    { title: 'Smart technologies', description: '', icon: 'cpu' },
    {
      title: 'Environmentally Responsible Design',
      description: '',
      icon: 'leaf',
    },
  ],
  ar: [
    { title: 'Renewable energy', description: '', icon: 'solar' },
    { title: 'Smart technologies', description: '', icon: 'cpu' },
    {
      title: 'Environmentally Responsible Design',
      description: '',
      icon: 'leaf',
    },
  ],
};

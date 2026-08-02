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
    subtitle: 'A Smart & Sustainable Community Center',
    tagline: 'Together for a Greener Tomorrow',
    project: 'MBA Team Final Project — Group 5',
    program: 'RBC MBA — Project Management',
    instructor: 'Dr. Ehab EL Nezamy',
    date: 'July 6, 2026',
    duration: '40 Weeks',
    startDate: '1 January 2026',
    finishDate: '2 October 2026',
    totalBudget: 1_200_000,
    totalBudgetLabel: '$1,200,000 · 60,000,000 EGP',
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
    subtitle: 'مركز مجتمعي ذكي ومستدام',
    tagline: 'معًا من أجل غدٍ أكثر خضرة',
    project: 'مشروع تخرج MBA — المجموعة 5',
    program: 'RBC MBA — إدارة المشاريع',
    instructor: 'د. إيهاب النظامي',
    date: '6 يوليو 2026',
    duration: '40 أسبوعًا',
    startDate: '1 يناير 2026',
    finishDate: '2 أكتوبر 2026',
    totalBudget: 1_200_000,
    totalBudgetLabel: '$1,200,000 · 60,000,000 جنيه',
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
    { label: 'Objectives', href: '#objectives' },
    { label: 'Team', href: '#team' },
    { label: 'Scope', href: '#scope' },
    { label: 'Design', href: '#design' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Budget', href: '#budget' },
    { label: 'Stakeholders', href: '#stakeholders' },
    { label: 'Risks', href: '#risks' },
    { label: 'Impact', href: '#impact' },
    { label: 'Conclusion', href: '#conclusion' },
    { label: 'Opinions', href: '#opinions' },
    { label: 'Presentation', href: '#presentation' },
  ],
  ar: [
    { label: 'نبذة', href: '#about' },
    { label: 'الأهداف', href: '#objectives' },
    { label: 'الفريق', href: '#team' },
    { label: 'النطاق', href: '#scope' },
    { label: 'التصميم', href: '#design' },
    { label: 'الجدول', href: '#schedule' },
    { label: 'الميزانية', href: '#budget' },
    { label: 'أصحاب المصلحة', href: '#stakeholders' },
    { label: 'المخاطر', href: '#risks' },
    { label: 'الأثر', href: '#impact' },
    { label: 'الخاتمة', href: '#conclusion' },
    { label: 'الآراء', href: '#opinions' },
    { label: 'العرض', href: '#presentation' },
  ],
};

export const CORE_PILLARS: Localized<Pillar[]> = {
  en: [
    {
      title: 'Renewable Energy',
      description: 'Solar PV, rainwater harvesting, smart systems',
      icon: 'solar',
    },
    {
      title: 'Smart Technology',
      description: 'Intelligent systems that improve efficiency and sustainability.',
      icon: 'cpu',
    },
    {
      title: 'Community Impact',
      description: 'Education, coworking, training programs',
      icon: 'users',
    },
  ],
  ar: [
    {
      title: 'الطاقة المتجددة',
      description: 'طاقة شمسية، حصاد مياه الأمطار، وأنظمة ذكية',
      icon: 'solar',
    },
    {
      title: 'التقنية الذكية',
      description: 'أنظمة ذكية تحسّن الكفاءة والاستدامة.',
      icon: 'cpu',
    },
    {
      title: 'الأثر المجتمعي',
      description: 'تعليم، مساحات عمل مشتركة، وبرامج تدريب',
      icon: 'users',
    },
  ],
};

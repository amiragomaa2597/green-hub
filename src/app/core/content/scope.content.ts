import { Localized } from '../i18n/language.types';
import { Deliverable, ScopePhase } from '../models/project.models';
import { DELIVERABLE_IMAGES } from './visual.content';

export interface ScopeContent {
  eyebrow: string;
  title: string;
  statement: string;
  description: string;
  blueprintLabel: string;
  blueprintTitle: string;
  phasesCaption: string;
  requirements: string[];
  includes: string[];
  excludes: string[];
  deliverables: Deliverable[];
  assumptions: string[];
  constraints: string[];
  phases: ScopePhase[];
  acceptance: string[];
  costNote: string;
  costItems: Array<{ label: string; amount: string; color: string }>;
  totalBudgetLabel: string;
}

export const SCOPE_CONTENT: Localized<ScopeContent> = {
  en: {
    eyebrow: 'Deliverable 1',
    title: 'Scope Statement',
    statement:
      'Sustainable community center promoting environmental awareness and green living.',
    description:
      'Renewable-energy-powered facility with smart technologies, educational workshops, recycling programs, coworking spaces, and community activities.',
    blueprintLabel: 'Scope Command Deck',
    blueprintTitle: 'Draw the fence. Arm the systems. Clear the gates.',
    phasesCaption: '7-phase delivery path',
    requirements: [
      'Solar PV system',
      'Smart lighting & HVAC controls',
      'Rainwater harvesting',
      'Recycling center',
      'Building Management System (BMS)',
    ],
    includes: [
      'Site preparation and construction',
      'Solar PV and rainwater systems',
      'Smart lighting / HVAC and landscaping',
      'Recycling center and training rooms',
      'Grand opening',
    ],
    excludes: [
      'Other cities',
      'Residential development',
      'Commercial retail',
      'Post-handover operation',
    ],
    deliverables: [
      {
        title: 'Approved Charter',
        description: 'Project charter and governance baseline.',
        icon: 'file',
        image: DELIVERABLE_IMAGES[0],
      },
      {
        title: 'A&E Designs',
        description: 'Architectural and engineering design packages.',
        icon: 'design',
        image: DELIVERABLE_IMAGES[1],
      },
      {
        title: 'Sustainable Building',
        description: 'Completed LEED-oriented community facility.',
        icon: 'building',
        image: DELIVERABLE_IMAGES[2],
      },
      {
        title: 'Renewable Energy',
        description: 'Integrated solar PV system ready for operations.',
        icon: 'solar',
        image: DELIVERABLE_IMAGES[3],
      },
      {
        title: 'Smart BMS',
        description: 'Building Management System commissioned and live.',
        icon: 'cpu',
        image: DELIVERABLE_IMAGES[4],
      },
      {
        title: 'Training & Handover',
        description: 'Community training program and final documentation.',
        icon: 'grad',
        image: DELIVERABLE_IMAGES[5],
      },
    ],
    assumptions: [
      'Funding approved',
      'Permits on time',
      'Materials available',
      'Skilled contractors available',
      'Stable weather',
    ],
    constraints: [
      '$1.2M / 60M EGP budget',
      '40 weeks',
      'LEED standards',
      'Local regulations',
      'Site limitations',
    ],
    phases: [
      { name: 'Initiation', weeks: '1–2', duration: '2 wk' },
      { name: 'Planning', weeks: '3–5', duration: '3 wk' },
      { name: 'Design', weeks: '6–11', duration: '6 wk' },
      { name: 'Procurement', weeks: '12–15', duration: '4 wk' },
      { name: 'Construction', weeks: '16–35', duration: '20 wk' },
      { name: 'Testing', weeks: '36–38', duration: '3 wk' },
      { name: 'Handover', weeks: '39–40', duration: '2 wk' },
    ],
    acceptance: [
      '≤ 40 weeks',
      'Budget variance < 5%',
      'LEED certified',
      'Smart systems operational',
      'Client satisfaction ≥ 90%',
      'Zero lost-time accidents',
    ],
    costNote:
      'Construction range shown in the Scope Statement; resolved to $570K / 28.5M EGP in the Budget deliverable. All amounts in USD and EGP (1 USD = 50 EGP).',
    costItems: [
      { label: 'Design', amount: '$60K · 3M EGP', color: '#14532d' },
      { label: 'Construction', amount: '$570K · 28.5M EGP', color: '#15803d' },
      { label: 'Solar PV', amount: '$120K · 6M EGP', color: '#22c55e' },
      { label: 'Smart Systems', amount: '$80K · 4M EGP', color: '#38bdf8' },
      { label: 'MEP', amount: '$140K · 7M EGP', color: '#0ea5e9' },
      { label: 'Landscape', amount: '$40K · 2M EGP', color: '#84cc16' },
      { label: 'Furniture', amount: '$70K · 3.5M EGP', color: '#f59e0b' },
      { label: 'Contingency', amount: '$120K · 6M EGP', color: '#94a3b8' },
    ],
    totalBudgetLabel: '$1.2M · 60M EGP',
  },
  ar: {
    eyebrow: 'المخرج 1',
    title: 'بيان النطاق',
    statement:
      'مركز مجتمعي مستدام يعزّز الوعي البيئي والحياة الخضراء.',
    description:
      'منشأة تعمل بالطاقة المتجددة مع تقنيات ذكية وورش تعليمية وبرامج إعادة تدوير ومساحات عمل مشتركة وأنشطة مجتمعية.',
    blueprintLabel: 'لوحة قيادة النطاق',
    blueprintTitle: 'ارسم الحدود. فعّل الأنظمة. افتح البوابات.',
    phasesCaption: 'مسار تسليم من 7 مراحل',
    requirements: [
      'نظام طاقة شمسية',
      'إضاءة ذكية وتحكم HVAC',
      'حصاد مياه الأمطار',
      'مركز إعادة تدوير',
      'نظام إدارة المباني (BMS)',
    ],
    includes: [
      'تجهيز الموقع والإنشاء',
      'الطاقة الشمسية وحصاد الأمطار',
      'إضاءة / HVAC ذكية وتنسيق الموقع',
      'مركز إعادة تدوير وقاعات تدريب',
      'الافتتاح الكبير',
    ],
    excludes: [
      'مدن أخرى',
      'تطوير سكني',
      'تجارة تجزئة',
      'التشغيل بعد التسليم',
    ],
    deliverables: [
      {
        title: 'ميثاق معتمد',
        description: 'ميثاق المشروع وخط أساس الحوكمة.',
        icon: 'file',
        image: DELIVERABLE_IMAGES[0],
      },
      {
        title: 'تصاميم هندسية',
        description: 'حزم التصميم المعماري والهندسي.',
        icon: 'design',
        image: DELIVERABLE_IMAGES[1],
      },
      {
        title: 'مبنى مستدام',
        description: 'منشأة مجتمعية مكتملة موجّهة لـ LEED.',
        icon: 'building',
        image: DELIVERABLE_IMAGES[2],
      },
      {
        title: 'طاقة متجددة',
        description: 'نظام طاقة شمسية متكامل جاهز للتشغيل.',
        icon: 'solar',
        image: DELIVERABLE_IMAGES[3],
      },
      {
        title: 'BMS ذكي',
        description: 'نظام إدارة المباني مُشغَّل وجاهز.',
        icon: 'cpu',
        image: DELIVERABLE_IMAGES[4],
      },
      {
        title: 'تدريب وتسليم',
        description: 'برنامج تدريب مجتمعي والتوثيق النهائي.',
        icon: 'grad',
        image: DELIVERABLE_IMAGES[5],
      },
    ],
    assumptions: [
      'تم اعتماد التمويل',
      'التصاريح في الموعد',
      'المواد متوفرة',
      'مقاولون مهرة متاحون',
      'طقس مستقر',
    ],
    constraints: [
      'ميزانية 1.2 مليون دولار / 60 مليون جنيه',
      '40 أسبوعًا',
      'معايير LEED',
      'اللوائح المحلية',
      'قيود الموقع',
    ],
    phases: [
      { name: 'البدء', weeks: '1–2', duration: 'أسبوعان' },
      { name: 'التخطيط', weeks: '3–5', duration: '3 أسابيع' },
      { name: 'التصميم', weeks: '6–11', duration: '6 أسابيع' },
      { name: 'المشتريات', weeks: '12–15', duration: '4 أسابيع' },
      { name: 'الإنشاء', weeks: '16–35', duration: '20 أسبوعًا' },
      { name: 'الاختبار', weeks: '36–38', duration: '3 أسابيع' },
      { name: 'التسليم', weeks: '39–40', duration: 'أسبوعان' },
    ],
    acceptance: [
      '≤ 40 أسبوعًا',
      'انحراف الميزانية < 5%',
      'اعتماد LEED',
      'الأنظمة الذكية تعمل',
      'رضا العميل ≥ 90%',
      'صفر حوادث توقف عن العمل',
    ],
    costNote:
      'نطاق تكلفة الإنشاء مذكور في بيان النطاق؛ حُسم عند 570 ألف دولار / 28.5 مليون جنيه في مخرج الميزانية. كل المبالغ بالدولار والجنيه (1 دولار = 50 جنيهًا).',
    costItems: [
      { label: 'التصميم', amount: '60 ألف$ · 3 مليون جنيه', color: '#14532d' },
      { label: 'الإنشاء', amount: '570 ألف$ · 28.5 مليون جنيه', color: '#15803d' },
      { label: 'الطاقة الشمسية', amount: '120 ألف$ · 6 مليون جنيه', color: '#22c55e' },
      { label: 'الأنظمة الذكية', amount: '80 ألف$ · 4 مليون جنيه', color: '#38bdf8' },
      { label: 'MEP', amount: '140 ألف$ · 7 مليون جنيه', color: '#0ea5e9' },
      { label: 'تنسيق الموقع', amount: '40 ألف$ · 2 مليون جنيه', color: '#84cc16' },
      { label: 'الأثاث', amount: '70 ألف$ · 3.5 مليون جنيه', color: '#f59e0b' },
      { label: 'الطوارئ', amount: '120 ألف$ · 6 مليون جنيه', color: '#94a3b8' },
    ],
    totalBudgetLabel: '1.2 مليون$ · 60 مليون جنيه',
  },
};

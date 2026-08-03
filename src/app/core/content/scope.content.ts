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
      'Sustainable community center promoting environmental awareness and green living: renewable-energy-powered facility with smart technologies, educational workshops, recycling programs, coworking spaces, community activities.',
    description:
      'Waterfall-dominant life cycle: sequential initiation, planning, design, procurement, construction, testing, and handover. The Smart Building Management System (BMS) is delivered incrementally through configuration, integration, testing, and commissioning. Agile is not used because the overall scope, budget, and 40-week timeline are fixed.',
    blueprintLabel: 'Scope Command Deck',
    blueprintTitle: 'Draw the fence. Arm the systems. Clear the gates.',
    phasesCaption: '7-phase delivery path',
    requirements: [
      'Solar PV system',
      'smart lighting & HVAC controls',
      'rainwater harvesting',
      'recycling center',
      'Building Management System (BMS)',
    ],
    includes: [
      'site prep',
      'building construction',
      'solar PV',
      'rainwater',
      'smart lighting/HVAC',
      'native-plant landscaping',
      'recycling center',
      'training rooms',
      'grand opening',
    ],
    excludes: [
      'other cities',
      'residential',
      'commercial retail',
      'post-handover operation',
    ],
    deliverables: [
      {
        title: 'Approved charter',
        description: 'Approved charter',
        icon: 'file',
        image: DELIVERABLE_IMAGES[0],
      },
      {
        title: 'Architectural & engineering designs',
        description: 'Architectural & engineering designs',
        icon: 'design',
        image: DELIVERABLE_IMAGES[1],
      },
      {
        title: 'Completed sustainable building',
        description: 'Completed sustainable building',
        icon: 'building',
        image: DELIVERABLE_IMAGES[2],
      },
      {
        title: 'Renewable energy system',
        description: 'Renewable energy system',
        icon: 'solar',
        image: DELIVERABLE_IMAGES[3],
      },
      {
        title: 'Smart BMS',
        description: 'Smart BMS',
        icon: 'cpu',
        image: DELIVERABLE_IMAGES[4],
      },
      {
        title: 'Community training program',
        description: 'Community training program · final handover documentation',
        icon: 'grad',
        image: DELIVERABLE_IMAGES[5],
      },
    ],
    assumptions: [
      'Funding approved',
      'permits on time',
      'materials available',
      'skilled contractors available',
      'stable weather',
    ],
    constraints: [
      '$1.2M budget',
      '40 weeks',
      'LEED standards',
      'local regulations',
      'site limitations',
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
      'budget variance < 5%',
      'LEED certified',
      'smart systems operational',
      'client satisfaction ≥ 90%',
      'zero lost-time accidents',
    ],
    costNote:
      'Direct activity costs: Design $60K · Construction $570K · Solar PV $120K · Smart Systems/BMS $80K · MEP $140K · Landscaping $40K · Furniture $70K = $1,080K. Contingency reserve: $78K. Management reserve: $42K. Total approved budget: $1,200K.',
    costItems: [
      { label: 'Design', amount: '$60K', color: '#14532d' },
      { label: 'Construction', amount: '$570K', color: '#15803d' },
      { label: 'Solar PV', amount: '$120K', color: '#22c55e' },
      { label: 'Smart Systems/BMS', amount: '$80K', color: '#38bdf8' },
      { label: 'MEP', amount: '$140K', color: '#0ea5e9' },
      { label: 'Landscaping', amount: '$40K', color: '#84cc16' },
      { label: 'Furniture', amount: '$70K', color: '#f59e0b' },
      { label: 'Contingency reserve', amount: '$78K', color: '#94a3b8' },
      { label: 'Management reserve', amount: '$42K', color: '#c4a35a' },
    ],
    totalBudgetLabel: '$1,200K',
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

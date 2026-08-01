import { Localized } from '../i18n/language.types';
import { Milestone, WbsPackage } from '../models/project.models';

export interface ScheduleContent {
  eyebrow: string;
  title: string;
  wbsRoot: string;
  duration: string;
  startDate: string;
  finishDate: string;
  ganttTitle: string;
  wbs: WbsPackage[];
  gantt: Array<{ phase: string; start: number; end: number; duration: string }>;
  milestones: Milestone[];
  totalWeeks: number;
}

export const SCHEDULE_CONTENT: Localized<ScheduleContent> = {
  en: {
    eyebrow: 'Project Schedule & WBS',
    title: 'Timeline & Work Breakdown',
    wbsRoot: 'The Green Hub Sustainable Community Center',
    duration: '40 Weeks',
    startDate: '1 January 2026',
    finishDate: '2 October 2026',
    ganttTitle: 'Project Schedule (Gantt Chart) — 40 Weeks',
    wbs: [
      {
        id: 1,
        title: 'Project Initiation',
        weeks: '1–2',
        color: '#3b82f6',
        tasks: [
          'Project Charter',
          'Stakeholder Identification',
          'Feasibility Study',
          'Initial Budget Estimate',
        ],
      },
      {
        id: 2,
        title: 'Planning & Design',
        weeks: '3–5',
        color: '#06b6d4',
        tasks: [
          'Requirements Gathering',
          'Conceptual Design',
          'Detailed Design',
          'Approvals & Permits',
          'Project Plan Development',
        ],
      },
      {
        id: 3,
        title: 'Procurement',
        weeks: '6–11',
        color: '#22c55e',
        tasks: [
          'Supplier Selection',
          'Material Procurement',
          'Equipment Procurement',
          'Contracting',
        ],
      },
      {
        id: 4,
        title: 'Construction & Infrastructure',
        weeks: '12–22',
        color: '#84cc16',
        tasks: [
          'Site Preparation',
          'Building Construction',
          'MEP Installation',
          'Interior Finishes',
          'External Works',
          'Quality Control & Inspection',
        ],
      },
      {
        id: 5,
        title: 'Renewable Energy Systems Installation',
        weeks: '23–29',
        color: '#eab308',
        tasks: [
          'Solar PV System Installation',
          'Backup Energy Systems',
          'System Testing & Commissioning',
        ],
      },
      {
        id: 6,
        title: 'Smart Building System (BMS) Development',
        weeks: '14–24',
        color: '#f97316',
        tasks: [
          'System Design',
          'Software Development',
          'Integration',
          'Testing & Commissioning',
        ],
      },
      {
        id: 7,
        title: 'Water Conservation Systems Installation',
        weeks: '25–32',
        color: '#a855f7',
        tasks: [
          'Rainwater Harvesting',
          'Greywater Recycling',
          'System Testing & Commissioning',
        ],
      },
      {
        id: 8,
        title: 'Community & Educational Programs Setup',
        weeks: '28–35',
        color: '#ec4899',
        tasks: [
          'Program Planning',
          'Content Development',
          'Partnerships & Outreach',
          'Program Launch',
        ],
      },
      {
        id: 9,
        title: 'Testing, Commissioning & Training',
        weeks: '36–38',
        color: '#64748b',
        tasks: ['System Testing', 'Staff Training', 'User Training'],
      },
      {
        id: 10,
        title: 'Project Handover & Closure',
        weeks: '39–40',
        color: '#166534',
        tasks: [
          'Final Inspection',
          'Handover to Client',
          'Documentation & Closeout',
        ],
      },
      {
        id: 11,
        title: 'Post-Project Monitoring & Evaluation',
        weeks: '33–40',
        color: '#0f766e',
        tasks: [
          'Performance Monitoring',
          'Evaluation & Reporting',
          'Continuous Improvement',
        ],
      },
    ],
    gantt: [
      { phase: 'Project Initiation', start: 1, end: 2, duration: '2 Weeks' },
      { phase: 'Planning & Design', start: 3, end: 5, duration: '3 Weeks' },
      { phase: 'Procurement', start: 6, end: 11, duration: '6 Weeks' },
      {
        phase: 'Construction & Infrastructure',
        start: 12,
        end: 22,
        duration: '11 Weeks',
      },
      {
        phase: 'Renewable Energy Systems Installation',
        start: 23,
        end: 29,
        duration: '7 Weeks',
      },
      {
        phase: 'Smart Building System (BMS) Development',
        start: 14,
        end: 24,
        duration: '11 Weeks',
      },
      {
        phase: 'Water Conservation Systems Installation',
        start: 25,
        end: 32,
        duration: '8 Weeks',
      },
      {
        phase: 'Community & Educational Programs Setup',
        start: 28,
        end: 35,
        duration: '8 Weeks',
      },
      {
        phase: 'Testing, Commissioning & Training',
        start: 36,
        end: 38,
        duration: '3 Weeks',
      },
      {
        phase: 'Project Handover & Closure',
        start: 39,
        end: 40,
        duration: '2 Weeks',
      },
      {
        phase: 'Post-Project Monitoring & Evaluation',
        start: 33,
        end: 40,
        duration: '8 Weeks',
      },
    ],
    milestones: [
      { title: 'Design Approval', week: 'Wk 5' },
      { title: 'Construction Completion', week: 'Wk 22' },
      { title: 'Systems Commissioning', week: 'Wk 38' },
      { title: 'Project Handover', week: 'Wk 40' },
    ],
    totalWeeks: 40,
  },
  ar: {
    eyebrow: 'جدول المشروع وهيكل العمل',
    title: 'الجدول الزمني وتقسيم العمل',
    wbsRoot: 'جرين هب — مركز مجتمعي مستدام',
    duration: '40 أسبوعًا',
    startDate: '1 يناير 2026',
    finishDate: '2 أكتوبر 2026',
    ganttTitle: 'جدول المشروع (مخطط جانت) — 40 أسبوعًا',
    wbs: [
      {
        id: 1,
        title: 'بدء المشروع',
        weeks: '1–2',
        color: '#3b82f6',
        tasks: [
          'ميثاق المشروع',
          'تحديد أصحاب المصلحة',
          'دراسة الجدوى',
          'تقدير أولي للميزانية',
        ],
      },
      {
        id: 2,
        title: 'التخطيط والتصميم',
        weeks: '3–5',
        color: '#06b6d4',
        tasks: [
          'جمع المتطلبات',
          'التصميم المفاهيمي',
          'التصميم التفصيلي',
          'الموافقات والتصاريح',
          'تطوير خطة المشروع',
        ],
      },
      {
        id: 3,
        title: 'المشتريات',
        weeks: '6–11',
        color: '#22c55e',
        tasks: [
          'اختيار الموردين',
          'شراء المواد',
          'شراء المعدات',
          'التعاقد',
        ],
      },
      {
        id: 4,
        title: 'الإنشاءات والبنية التحتية',
        weeks: '12–22',
        color: '#84cc16',
        tasks: [
          'تجهيز الموقع',
          'بناء المبنى',
          'تركيب أنظمة MEP',
          'التشطيبات الداخلية',
          'الأعمال الخارجية',
          'مراقبة الجودة والتفتيش',
        ],
      },
      {
        id: 5,
        title: 'تركيب أنظمة الطاقة المتجددة',
        weeks: '23–29',
        color: '#eab308',
        tasks: [
          'تركيب نظام الطاقة الشمسية',
          'أنظمة الطاقة الاحتياطية',
          'اختبار وتشغيل الأنظمة',
        ],
      },
      {
        id: 6,
        title: 'تطوير نظام المبنى الذكي (BMS)',
        weeks: '14–24',
        color: '#f97316',
        tasks: [
          'تصميم النظام',
          'تطوير البرمجيات',
          'التكامل',
          'الاختبار والتشغيل',
        ],
      },
      {
        id: 7,
        title: 'تركيب أنظمة ترشيد المياه',
        weeks: '25–32',
        color: '#a855f7',
        tasks: [
          'حصاد مياه الأمطار',
          'إعادة تدوير المياه الرمادية',
          'اختبار وتشغيل الأنظمة',
        ],
      },
      {
        id: 8,
        title: 'إعداد البرامج المجتمعية والتعليمية',
        weeks: '28–35',
        color: '#ec4899',
        tasks: [
          'تخطيط البرامج',
          'تطوير المحتوى',
          'الشراكات والتواصل',
          'إطلاق البرامج',
        ],
      },
      {
        id: 9,
        title: 'الاختبار والتشغيل والتدريب',
        weeks: '36–38',
        color: '#64748b',
        tasks: ['اختبار الأنظمة', 'تدريب العاملين', 'تدريب المستخدمين'],
      },
      {
        id: 10,
        title: 'تسليم المشروع والإغلاق',
        weeks: '39–40',
        color: '#166534',
        tasks: [
          'التفتيش النهائي',
          'التسليم للعميل',
          'التوثيق والإغلاق',
        ],
      },
      {
        id: 11,
        title: 'المراقبة والتقييم بعد المشروع',
        weeks: '33–40',
        color: '#0f766e',
        tasks: [
          'مراقبة الأداء',
          'التقييم وإعداد التقارير',
          'التحسين المستمر',
        ],
      },
    ],
    gantt: [
      { phase: 'بدء المشروع', start: 1, end: 2, duration: 'أسبوعان' },
      { phase: 'التخطيط والتصميم', start: 3, end: 5, duration: '3 أسابيع' },
      { phase: 'المشتريات', start: 6, end: 11, duration: '6 أسابيع' },
      {
        phase: 'الإنشاءات والبنية التحتية',
        start: 12,
        end: 22,
        duration: '11 أسبوعًا',
      },
      {
        phase: 'تركيب أنظمة الطاقة المتجددة',
        start: 23,
        end: 29,
        duration: '7 أسابيع',
      },
      {
        phase: 'تطوير نظام المبنى الذكي (BMS)',
        start: 14,
        end: 24,
        duration: '11 أسبوعًا',
      },
      {
        phase: 'تركيب أنظمة ترشيد المياه',
        start: 25,
        end: 32,
        duration: '8 أسابيع',
      },
      {
        phase: 'إعداد البرامج المجتمعية والتعليمية',
        start: 28,
        end: 35,
        duration: '8 أسابيع',
      },
      {
        phase: 'الاختبار والتشغيل والتدريب',
        start: 36,
        end: 38,
        duration: '3 أسابيع',
      },
      {
        phase: 'تسليم المشروع والإغلاق',
        start: 39,
        end: 40,
        duration: 'أسبوعان',
      },
      {
        phase: 'المراقبة والتقييم بعد المشروع',
        start: 33,
        end: 40,
        duration: '8 أسابيع',
      },
    ],
    milestones: [
      { title: 'اعتماد التصميم', week: 'أسبوع 5' },
      { title: 'اكتمال الإنشاءات', week: 'أسبوع 22' },
      { title: 'تشغيل الأنظمة', week: 'أسبوع 38' },
      { title: 'تسليم المشروع', week: 'أسبوع 40' },
    ],
    totalWeeks: 40,
  },
};

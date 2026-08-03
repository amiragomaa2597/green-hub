import { Localized } from '../i18n/language.types';
import { GanttRow, Milestone } from '../models/project.models';

export interface ScheduleContent {
  eyebrow: string;
  title: string;
  speaker: string;
  duration: string;
  startDate: string;
  finishDate: string;
  ganttTitle: string;
  ganttLead: string;
  tableTitle: string;
  phaseLabel: string;
  startLabel: string;
  endLabel: string;
  durationLabel: string;
  predecessorLabel: string;
  wbsRefLabel: string;
  gantt: GanttRow[];
  milestones: Milestone[];
  totalWeeks: number;
}

const GANTT_EN: GanttRow[] = [
  {
    phase: 'Project Management (continuous)',
    start: 1,
    end: 40,
    duration: '40 weeks',
    color: '#64748b',
    wbsRef: 'Branch 1',
    predecessor: 'Project start (SS)',
  },
  {
    phase: 'Initiation',
    start: 1,
    end: 2,
    duration: '2 weeks',
    color: '#3b82f6',
    wbsRef: '1.1',
    predecessor: 'Project start',
  },
  {
    phase: 'Planning',
    start: 3,
    end: 5,
    duration: '3 weeks',
    color: '#0ea5e9',
    wbsRef: '1.2–1.4',
    predecessor: 'Initiation (FS)',
  },
  {
    phase: 'Design & Engineering',
    start: 6,
    end: 11,
    duration: '6 weeks',
    color: '#06b6d4',
    wbsRef: 'Branch 7',
    predecessor: 'Planning (FS)',
  },
  {
    phase: 'Procurement',
    start: 12,
    end: 15,
    duration: '4 weeks',
    color: '#14b8a6',
    wbsRef: 'Branch 8',
    predecessor: 'Design & Engineering (FS)',
  },
  {
    phase: 'Site Preparation',
    start: 16,
    end: 19,
    duration: '4 weeks',
    color: '#22c55e',
    wbsRef: 'Branch 2',
    predecessor: 'Procurement (FS)',
  },
  {
    phase: 'Building Construction',
    start: 18,
    end: 28,
    duration: '11 weeks',
    color: '#84cc16',
    wbsRef: 'Branch 3',
    predecessor: 'Site Preparation (SS + 2 weeks)',
  },
  {
    phase: 'Green Systems Installation',
    start: 24,
    end: 32,
    duration: '9 weeks',
    color: '#eab308',
    wbsRef: 'Branch 4',
    predecessor: 'Building Construction (SS + 6 weeks)',
  },
  {
    phase: 'Landscaping & Outdoor Areas',
    start: 29,
    end: 35,
    duration: '7 weeks',
    color: '#f59e0b',
    wbsRef: 'Branch 5',
    predecessor: 'Building Construction (FS)',
  },
  {
    phase: 'Community Programs & Launch',
    start: 33,
    end: 40,
    duration: '8 weeks',
    color: '#ec4899',
    wbsRef: 'Branch 9',
    predecessor: 'Green Systems (SS + 9 weeks)',
  },
  {
    phase: 'Testing',
    start: 36,
    end: 38,
    duration: '3 weeks',
    color: '#a855f7',
    wbsRef: '6.1–6.2',
    predecessor: 'Landscaping (FS); Green Systems complete',
  },
  {
    phase: 'Handover',
    start: 39,
    end: 40,
    duration: '2 weeks',
    color: '#166534',
    wbsRef: '6.3–6.4',
    predecessor: 'Testing (FS)',
  },
];

const GANTT_AR: GanttRow[] = [
  {
    phase: 'إدارة المشروع (مستمرة)',
    start: 1,
    end: 40,
    duration: '40 أسبوعًا',
    color: '#64748b',
    wbsRef: 'Branch 1',
    predecessor: 'بداية المشروع (SS)',
  },
  {
    phase: 'البدء',
    start: 1,
    end: 2,
    duration: 'أسبوعان',
    color: '#3b82f6',
    wbsRef: '1.1',
    predecessor: 'بداية المشروع',
  },
  {
    phase: 'التخطيط',
    start: 3,
    end: 5,
    duration: '3 أسابيع',
    color: '#0ea5e9',
    wbsRef: '1.2–1.4',
    predecessor: 'البدء (FS)',
  },
  {
    phase: 'التصميم والهندسة',
    start: 6,
    end: 11,
    duration: '6 أسابيع',
    color: '#06b6d4',
    wbsRef: 'Branch 7',
    predecessor: 'التخطيط (FS)',
  },
  {
    phase: 'التوريد',
    start: 12,
    end: 15,
    duration: '4 أسابيع',
    color: '#14b8a6',
    wbsRef: 'Branch 8',
    predecessor: 'التصميم والهندسة (FS)',
  },
  {
    phase: 'تجهيز الموقع',
    start: 16,
    end: 19,
    duration: '4 أسابيع',
    color: '#22c55e',
    wbsRef: 'Branch 2',
    predecessor: 'التوريد (FS)',
  },
  {
    phase: 'إنشاء المبنى',
    start: 18,
    end: 28,
    duration: '11 أسبوعًا',
    color: '#84cc16',
    wbsRef: 'Branch 3',
    predecessor: 'تجهيز الموقع (SS + أسبوعان)',
  },
  {
    phase: 'تركيب الأنظمة الخضراء',
    start: 24,
    end: 32,
    duration: '9 أسابيع',
    color: '#eab308',
    wbsRef: 'Branch 4',
    predecessor: 'إنشاء المبنى (SS + 6 أسابيع)',
  },
  {
    phase: 'تنسيق الموقع والمناطق الخارجية',
    start: 29,
    end: 35,
    duration: '7 أسابيع',
    color: '#f59e0b',
    wbsRef: 'Branch 5',
    predecessor: 'إنشاء المبنى (FS)',
  },
  {
    phase: 'البرامج المجتمعية والإطلاق',
    start: 33,
    end: 40,
    duration: '8 أسابيع',
    color: '#ec4899',
    wbsRef: 'Branch 9',
    predecessor: 'الأنظمة الخضراء (SS + 9 أسابيع)',
  },
  {
    phase: 'الاختبار',
    start: 36,
    end: 38,
    duration: '3 أسابيع',
    color: '#a855f7',
    wbsRef: '6.1–6.2',
    predecessor: 'تنسيق الموقع (FS)؛ اكتمال الأنظمة الخضراء',
  },
  {
    phase: 'التسليم',
    start: 39,
    end: 40,
    duration: 'أسبوعان',
    color: '#166534',
    wbsRef: '6.3–6.4',
    predecessor: 'الاختبار (FS)',
  },
];

export const SCHEDULE_CONTENT: Localized<ScheduleContent> = {
  en: {
    eyebrow: 'Schedule',
    title: 'Project Schedule Overview – Details in the Excel Sheet',
    speaker: 'Salwa',
    duration: '40 Weeks',
    startDate: '1 January 2026',
    finishDate: '2 October 2026',
    ganttTitle: 'Gantt Chart — 40 Weeks',
    ganttLead:
      'The table and Gantt chart use the same start/end weeks. FS governs the major phase gates; SS with a stated lag is used only for approved overlaps. No SF relationship is required in this high-level schedule.',
    tableTitle: 'Phase / WBS Branch',
    phaseLabel: 'Phase / WBS Branch',
    startLabel: 'Start',
    endLabel: 'End',
    durationLabel: 'Duration',
    predecessorLabel: 'Predecessor / Relationship',
    wbsRefLabel: 'WBS Ref',
    gantt: GANTT_EN,
    milestones: [
      { title: 'Design Complete', week: 'Wk 11' },
      { title: 'Procurement Locked', week: 'Wk 15' },
      { title: 'Building Structure Ready', week: 'Wk 28' },
      { title: 'Green Systems Live', week: 'Wk 32' },
      { title: 'Testing Complete', week: 'Wk 38' },
      { title: 'Project Handover', week: 'Wk 40' },
    ],
    totalWeeks: 40,
  },
  ar: {
    eyebrow: 'الجدول الزمني',
    title: 'نظرة عامة على جدول المشروع – التفاصيل في ملف Excel',
    speaker: 'سلوى',
    duration: '40 أسبوعًا',
    startDate: '1 يناير 2026',
    finishDate: '2 أكتوبر 2026',
    ganttTitle: 'مخطط جانت — 40 أسبوعًا',
    ganttLead:
      'يستخدم الجدول ومخطط جانت نفس أسابيع البداية/النهاية. تحكم علاقة FS بوابات المراحل الرئيسية؛ وتُستخدم SS مع تأخير معلن فقط للتداخلات المعتمدة. لا حاجة لعلاقة SF في هذا الجدول عالي المستوى.',
    tableTitle: 'المرحلة / فرع WBS',
    phaseLabel: 'المرحلة / فرع WBS',
    startLabel: 'البداية',
    endLabel: 'النهاية',
    durationLabel: 'المدة',
    predecessorLabel: 'السابق / العلاقة',
    wbsRefLabel: 'مرجع WBS',
    gantt: GANTT_AR,
    milestones: [
      { title: 'اكتمال التصميم', week: 'أ 11' },
      { title: 'إقفال التوريد', week: 'أ 15' },
      { title: 'جاهزية هيكل المبنى', week: 'أ 28' },
      { title: 'تشغيل الأنظمة الخضراء', week: 'أ 32' },
      { title: 'اكتمال الاختبار', week: 'أ 38' },
      { title: 'تسليم المشروع', week: 'أ 40' },
    ],
    totalWeeks: 40,
  },
};

import { Localized } from '../i18n/language.types';
import { BudgetItem, BudgetMatrixRow, PmbokLevel } from '../models/project.models';

export interface BudgetContent {
  eyebrow: string;
  title: string;
  lead: string;
  costBreakdownTitle: string;
  distributionTitle: string;
  matrixTitle: string;
  duration: string;
  startDate: string;
  finishDate: string;
  total: number;
  totalLabel: string;
  items: BudgetItem[];
  pmbok: PmbokLevel[];
  matrix: BudgetMatrixRow[];
  overview: Array<{ label: string; percent: number; amount: number; color: string }>;
  stepsNote: string;
}

export const BUDGET_CONTENT: Localized<BudgetContent> = {
  en: {
    eyebrow: 'Deliverable 4',
    title: 'Project Budget — PMBOK Cost Structure',
    lead:
      'PMBOK framework case study: aggregating costs and allocating risk reserves for The Green Hub ($1,200K / 60M EGP).',
    costBreakdownTitle: 'Green Hub Budget Matrix',
    distributionTitle: 'Financial Overview',
    matrixTitle: 'Reserve Build-Up',
    duration: '40 Weeks',
    startDate: '1 January 2026',
    finishDate: '2 October 2026',
    total: 1_200_000,
    totalLabel: '$1,200,000 · 60,000,000 EGP',
    items: [
      { category: 'Design', amount: 60_000, percentage: 5, color: '#14532d' },
      {
        category: 'Construction',
        amount: 570_000,
        percentage: 47.5,
        color: '#15803d',
      },
      { category: 'Solar PV', amount: 120_000, percentage: 10, color: '#22c55e' },
      {
        category: 'Smart Systems',
        amount: 80_000,
        percentage: 6.7,
        color: '#38bdf8',
      },
      { category: 'MEP', amount: 140_000, percentage: 11.7, color: '#0ea5e9' },
      { category: 'Landscape', amount: 40_000, percentage: 3.3, color: '#84cc16' },
      { category: 'Furniture', amount: 70_000, percentage: 5.8, color: '#f59e0b' },
      {
        category: 'Contingency',
        amount: 120_000,
        percentage: 10,
        color: '#94a3b8',
      },
    ],
    pmbok: [
      {
        step: 1,
        title: 'Activity Cost Level',
        detail: 'Direct costs — labor, equipment, professional services',
        addAmount: 1_080_000,
        cumulative: 1_080_000,
        color: '#14532d',
      },
      {
        step: 2,
        title: 'Work Package Level',
        detail: '+ Activity Contingency Reserve ($38K / 1.9M EGP)',
        addAmount: 38_000,
        cumulative: 1_118_000,
        color: '#15803d',
      },
      {
        step: 3,
        title: 'Control Accounts',
        detail: '+ Package Contingency ($40K / 2M EGP) = Cost Baseline',
        addAmount: 40_000,
        cumulative: 1_158_000,
        color: '#22c55e',
      },
      {
        step: 4,
        title: 'Total Project Budget',
        detail: '+ Management Reserve ($42K / 2.1M EGP)',
        addAmount: 42_000,
        cumulative: 1_200_000,
        color: '#c4a35a',
      },
    ],
    matrix: [
      {
        component: 'Activity Cost (Direct Costs)',
        amount: 1_080_000,
        reserveRatio: '—',
        cumulative: '$1,080K · 54M EGP',
      },
      {
        component: 'Activity Contingency Reserve',
        amount: 38_000,
        reserveRatio: '3.6%',
        cumulative: '$1,118K · 55.9M EGP',
      },
      {
        component: 'Contingency Reserve (Work Package)',
        amount: 40_000,
        reserveRatio: '3.6%',
        cumulative: '$1,158K · 57.9M EGP',
      },
      {
        component: 'Cost Baseline / Control Account',
        amount: 1_158_000,
        reserveRatio: '—',
        cumulative: '$1,158K · 57.9M EGP',
      },
      {
        component: 'Management Reserve',
        amount: 42_000,
        reserveRatio: '3.6%',
        cumulative: '$1,200K · 60M EGP',
      },
      {
        component: 'Total Project Budget',
        amount: 1_200_000,
        reserveRatio: '10.8% total',
        cumulative: '$1,200K · 60M EGP',
      },
    ],
    overview: [
      {
        label: 'Direct Activity Execution',
        percent: 90,
        amount: 1_080_000,
        color: '#14532d',
      },
      {
        label: 'Contingency Reserves',
        percent: 6.5,
        amount: 78_000,
        color: '#22c55e',
      },
      {
        label: 'Management Reserve',
        percent: 3.5,
        amount: 42_000,
        color: '#c4a35a',
      },
    ],
    stepsNote:
      'Steps: (1) direct activity costs → (2) + activity contingency → (3) + package contingency = Cost Baseline → (4) + management reserve = Total Budget.',
  },
  ar: {
    eyebrow: 'المخرج 4',
    title: 'ميزانية المشروع — هيكل التكلفة وفق PMBOK',
    lead:
      'دراسة حالة بإطار PMBOK: تجميع التكاليف وتخصيص احتياطيات المخاطر لمشروع جرين هب (1,200 ألف دولار / 60 مليون جنيه).',
    costBreakdownTitle: 'مصفوفة ميزانية جرين هب',
    distributionTitle: 'نظرة مالية',
    matrixTitle: 'بناء الاحتياطيات',
    duration: '40 أسبوعًا',
    startDate: '1 يناير 2026',
    finishDate: '2 أكتوبر 2026',
    total: 1_200_000,
    totalLabel: '$1,200,000 · 60,000,000 جنيه',
    items: [
      { category: 'التصميم', amount: 60_000, percentage: 5, color: '#14532d' },
      {
        category: 'الإنشاء',
        amount: 570_000,
        percentage: 47.5,
        color: '#15803d',
      },
      {
        category: 'الطاقة الشمسية',
        amount: 120_000,
        percentage: 10,
        color: '#22c55e',
      },
      {
        category: 'الأنظمة الذكية',
        amount: 80_000,
        percentage: 6.7,
        color: '#38bdf8',
      },
      { category: 'MEP', amount: 140_000, percentage: 11.7, color: '#0ea5e9' },
      {
        category: 'تنسيق الموقع',
        amount: 40_000,
        percentage: 3.3,
        color: '#84cc16',
      },
      { category: 'الأثاث', amount: 70_000, percentage: 5.8, color: '#f59e0b' },
      {
        category: 'الطوارئ',
        amount: 120_000,
        percentage: 10,
        color: '#94a3b8',
      },
    ],
    pmbok: [
      {
        step: 1,
        title: 'مستوى تكلفة النشاط',
        detail: 'تكاليف مباشرة — عمالة ومعدات وخدمات مهنية',
        addAmount: 1_080_000,
        cumulative: 1_080_000,
        color: '#14532d',
      },
      {
        step: 2,
        title: 'مستوى حزمة العمل',
        detail: '+ احتياطي طوارئ النشاط (38 ألف$ / 1.9 مليون جنيه)',
        addAmount: 38_000,
        cumulative: 1_118_000,
        color: '#15803d',
      },
      {
        step: 3,
        title: 'حسابات الرقابة',
        detail: '+ طوارئ الحزمة (40 ألف$ / 2 مليون جنيه) = خط أساس التكلفة',
        addAmount: 40_000,
        cumulative: 1_158_000,
        color: '#22c55e',
      },
      {
        step: 4,
        title: 'إجمالي ميزانية المشروع',
        detail: '+ الاحتياطي الإداري (42 ألف$ / 2.1 مليون جنيه)',
        addAmount: 42_000,
        cumulative: 1_200_000,
        color: '#c4a35a',
      },
    ],
    matrix: [
      {
        component: 'تكلفة النشاط (مباشرة)',
        amount: 1_080_000,
        reserveRatio: '—',
        cumulative: '1,080 ألف$ · 54 مليون جنيه',
      },
      {
        component: 'احتياطي طوارئ النشاط',
        amount: 38_000,
        reserveRatio: '3.6%',
        cumulative: '1,118 ألف$ · 55.9 مليون جنيه',
      },
      {
        component: 'احتياطي طوارئ حزمة العمل',
        amount: 40_000,
        reserveRatio: '3.6%',
        cumulative: '1,158 ألف$ · 57.9 مليون جنيه',
      },
      {
        component: 'خط أساس التكلفة / حساب الرقابة',
        amount: 1_158_000,
        reserveRatio: '—',
        cumulative: '1,158 ألف$ · 57.9 مليون جنيه',
      },
      {
        component: 'الاحتياطي الإداري',
        amount: 42_000,
        reserveRatio: '3.6%',
        cumulative: '1,200 ألف$ · 60 مليون جنيه',
      },
      {
        component: 'إجمالي ميزانية المشروع',
        amount: 1_200_000,
        reserveRatio: '10.8% إجمالي',
        cumulative: '1,200 ألف$ · 60 مليون جنيه',
      },
    ],
    overview: [
      {
        label: 'تنفيذ الأنشطة المباشرة',
        percent: 90,
        amount: 1_080_000,
        color: '#14532d',
      },
      {
        label: 'احتياطيات الطوارئ',
        percent: 6.5,
        amount: 78_000,
        color: '#22c55e',
      },
      {
        label: 'الاحتياطي الإداري',
        percent: 3.5,
        amount: 42_000,
        color: '#c4a35a',
      },
    ],
    stepsNote:
      'الخطوات: (1) تكاليف النشاط المباشرة ← (2) + طوارئ النشاط ← (3) + طوارئ الحزمة = خط أساس التكلفة ← (4) + الاحتياطي الإداري = إجمالي الميزانية.',
  },
};

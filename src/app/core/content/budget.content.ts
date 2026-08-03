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
      'PMBOK cost-aggregation case study: activity costs are aggregated first; contingency reserves are then added to establish the cost baseline, followed by management reserve to establish the approved project budget.',
    costBreakdownTitle: 'Green Hub Budget Matrix',
    distributionTitle: 'Financial Overview',
    matrixTitle: 'Cost Aggregation Level',
    duration: '40 Weeks',
    startDate: '1 January 2026',
    finishDate: '2 October 2026',
    total: 1_200_000,
    totalLabel: '$1,200,000',
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
        category: 'Smart Systems/BMS',
        amount: 80_000,
        percentage: 6.7,
        color: '#38bdf8',
      },
      { category: 'MEP', amount: 140_000, percentage: 11.7, color: '#0ea5e9' },
      { category: 'Landscaping', amount: 40_000, percentage: 3.3, color: '#84cc16' },
      { category: 'Furniture', amount: 70_000, percentage: 5.8, color: '#f59e0b' },
      {
        category: 'Contingency reserve',
        amount: 78_000,
        percentage: 6.5,
        color: '#94a3b8',
      },
      {
        category: 'Management reserve',
        amount: 42_000,
        percentage: 3.5,
        color: '#c4a35a',
      },
    ],
    pmbok: [
      {
        step: 1,
        title: 'Activity Cost Level',
        detail:
          '$1,080K in estimated direct costs for labor, equipment, materials, and professional services.',
        addAmount: 1_080_000,
        cumulative: 1_080_000,
        color: '#14532d',
      },
      {
        step: 2,
        title: 'Work Package Level',
        detail:
          '$38K activity contingency is added above activity costs, producing $1,118K in work-package cost.',
        addAmount: 38_000,
        cumulative: 1_118_000,
        color: '#15803d',
      },
      {
        step: 3,
        title: 'Control Account Level',
        detail:
          'a further $40K work-package contingency is added above work-package cost, producing the $1,158K cost baseline.',
        addAmount: 40_000,
        cumulative: 1_158_000,
        color: '#22c55e',
      },
      {
        step: 4,
        title: 'Total Approved Project Budget',
        detail: '+ Management Reserve ($42K) = $1,200K',
        addAmount: 42_000,
        cumulative: 1_200_000,
        color: '#c4a35a',
      },
    ],
    matrix: [
      {
        component: 'Direct Activity Costs',
        amount: 1_080_000,
        reserveRatio: '–',
        cumulative: '$1,080K',
      },
      {
        component: 'Activity Contingency Reserve',
        amount: 38_000,
        reserveRatio: '3.52% of activity cost',
        cumulative: '$1,118K',
      },
      {
        component: 'Work Package Cost',
        amount: 1_118_000,
        reserveRatio: '–',
        cumulative: '$1,118K',
      },
      {
        component: 'Work Package Contingency Reserve',
        amount: 40_000,
        reserveRatio: '3.58% of work-package cost',
        cumulative: '$1,158K',
      },
      {
        component: 'Cost Baseline / Control Accounts',
        amount: 1_158_000,
        reserveRatio: '–',
        cumulative: '$1,158K',
      },
      {
        component: 'Management Reserve',
        amount: 42_000,
        reserveRatio: '3.63% of cost baseline',
        cumulative: '$1,200K',
      },
      {
        component: 'Total Approved Project Budget',
        amount: 1_200_000,
        reserveRatio: '10.00% of approved budget is reserves',
        cumulative: '$1,200K',
      },
    ],
    overview: [
      {
        label:
          'direct activity execution, resources, and technical deliverables',
        percent: 90,
        amount: 1_080_000,
        color: '#14532d',
      },
      {
        label:
          'total contingency reserves for known risks across activities and work packages',
        percent: 6.5,
        amount: 78_000,
        color: '#22c55e',
      },
      {
        label: 'management reserve for unforeseen risk events',
        percent: 3.5,
        amount: 42_000,
        color: '#c4a35a',
      },
    ],
    stepsNote:
      'Activity costs are aggregated first; contingency reserves are then added to establish the cost baseline, followed by management reserve to establish the approved project budget.',
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

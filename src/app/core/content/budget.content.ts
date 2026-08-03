import { Localized } from '../i18n/language.types';
import { BudgetItem, BudgetMatrixRow, PmbokLevel } from '../models/project.models';

export interface BudgetOverviewLine {
  label: string;
  shortLabel: string;
  percent: number;
  amount: number;
  color: string;
}

export interface BudgetContent {
  eyebrow: string;
  title: string;
  lead: string;
  operationalTitle: string;
  costBreakdownTitle: string;
  distributionTitle: string;
  matrixTitle: string;
  totalApprovedLabel: string;
  duration: string;
  startDate: string;
  finishDate: string;
  total: number;
  totalLabel: string;
  items: BudgetItem[];
  pmbok: PmbokLevel[];
  matrix: BudgetMatrixRow[];
  overview: BudgetOverviewLine[];
  stepsNote: string;
}

const BUDGET_ITEMS_EN: BudgetItem[] = [
  { category: 'Design', amount: 60_000, percentage: 5, color: '#14532d' },
  { category: 'Construction', amount: 570_000, percentage: 47.5, color: '#15803d' },
  { category: 'Solar PV', amount: 120_000, percentage: 10, color: '#22c55e' },
  { category: 'Smart Systems/BMS', amount: 80_000, percentage: 6.7, color: '#38bdf8' },
  { category: 'MEP', amount: 140_000, percentage: 11.7, color: '#0ea5e9' },
  { category: 'Landscaping', amount: 40_000, percentage: 3.3, color: '#84cc16' },
  { category: 'Furniture', amount: 70_000, percentage: 5.8, color: '#f59e0b' },
  { category: 'Contingency reserve', amount: 78_000, percentage: 6.5, color: '#94a3b8' },
  { category: 'Management reserve', amount: 42_000, percentage: 3.5, color: '#c4a35a' },
];

const BUDGET_PMBOK_EN: PmbokLevel[] = [
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
    detail:
      'Management reserve of $42K is added above the cost baseline to establish the approved project budget of $1,200K.',
    addAmount: 42_000,
    cumulative: 1_200_000,
    color: '#c4a35a',
  },
];

const BUDGET_MATRIX_EN: BudgetMatrixRow[] = [
  {
    component: 'Direct Activity Costs',
    amount: 1_080_000,
    amountDisplay: '$1,080K',
    reserveRatio: '–',
    cumulative: '$1,080K',
  },
  {
    component: 'Activity Contingency Reserve',
    amount: 38_000,
    amountDisplay: '+$38K',
    reserveRatio: '3.52% of activity cost',
    cumulative: '$1,118K',
  },
  {
    component: 'Work Package Cost',
    amount: 1_118_000,
    amountDisplay: '$1,118K',
    reserveRatio: '–',
    cumulative: '$1,118K',
  },
  {
    component: 'Work Package Contingency Reserve',
    amount: 40_000,
    amountDisplay: '+$40K',
    reserveRatio: '3.58% of work-package cost',
    cumulative: '$1,158K',
  },
  {
    component: 'Cost Baseline / Control Accounts',
    amount: 1_158_000,
    amountDisplay: '$1,158K',
    reserveRatio: '–',
    cumulative: '$1,158K',
  },
  {
    component: 'Management Reserve',
    amount: 42_000,
    amountDisplay: '+$42K',
    reserveRatio: '3.63% of cost baseline',
    cumulative: '$1,200K',
  },
  {
    component: 'Total Approved Project Budget',
    amount: 1_200_000,
    amountDisplay: '$1,200K',
    reserveRatio: '10.00% of approved budget is reserves',
    cumulative: '$1,200K',
  },
];

const BUDGET_OVERVIEW_EN: BudgetOverviewLine[] = [
  {
    label: 'direct activity execution, resources, and technical deliverables',
    shortLabel: 'Direct activity execution',
    percent: 90,
    amount: 1_080_000,
    color: '#14532d',
  },
  {
    label:
      'total contingency reserves for known risks across activities and work packages',
    shortLabel: 'Contingency reserves',
    percent: 6.5,
    amount: 78_000,
    color: '#22c55e',
  },
  {
    label: 'management reserve for unforeseen risk events',
    shortLabel: 'Management reserve',
    percent: 3.5,
    amount: 42_000,
    color: '#c4a35a',
  },
];


const BUDGET_ITEMS_AR: BudgetItem[] = [
  { category: 'التصميم', amount: 60_000, percentage: 5, color: '#14532d' },
  { category: 'الإنشاء', amount: 570_000, percentage: 47.5, color: '#15803d' },
  { category: 'الطاقة الشمسية', amount: 120_000, percentage: 10, color: '#22c55e' },
  { category: 'الأنظمة الذكية/BMS', amount: 80_000, percentage: 6.7, color: '#38bdf8' },
  { category: 'MEP', amount: 140_000, percentage: 11.7, color: '#0ea5e9' },
  { category: 'تنسيق الموقع', amount: 40_000, percentage: 3.3, color: '#84cc16' },
  { category: 'الأثاث', amount: 70_000, percentage: 5.8, color: '#f59e0b' },
  { category: 'احتياطي الطوارئ', amount: 78_000, percentage: 6.5, color: '#94a3b8' },
  { category: 'الاحتياطي الإداري', amount: 42_000, percentage: 3.5, color: '#c4a35a' },
];

const BUDGET_PMBOK_AR: PmbokLevel[] = [
  {
    step: 1,
    title: 'مستوى تكلفة النشاط',
    detail:
      '1,080 ألف$ تكاليف مباشرة مقدَّرة للعمالة والمعدات والمواد والخدمات المهنية.',
    addAmount: 1_080_000,
    cumulative: 1_080_000,
    color: '#14532d',
  },
  {
    step: 2,
    title: 'مستوى حزمة العمل',
    detail:
      'يُضاف احتياطي طوارئ النشاط 38 ألف$ فوق تكاليف الأنشطة لينتج 1,118 ألف$ لتكلفة حزمة العمل.',
    addAmount: 38_000,
    cumulative: 1_118_000,
    color: '#15803d',
  },
  {
    step: 3,
    title: 'مستوى حساب الرقابة',
    detail:
      'يُضاف احتياطي طوارئ حزمة العمل 40 ألف$ فوق تكلفة الحزمة لينتج خط أساس التكلفة 1,158 ألف$.',
    addAmount: 40_000,
    cumulative: 1_158_000,
    color: '#22c55e',
  },
  {
    step: 4,
    title: 'إجمالي ميزانية المشروع المعتمدة',
    detail:
      'يُضاف الاحتياطي الإداري 42 ألف$ فوق خط أساس التكلفة لإثبات الميزانية المعتمدة 1,200 ألف$.',
    addAmount: 42_000,
    cumulative: 1_200_000,
    color: '#c4a35a',
  },
];

const BUDGET_MATRIX_AR: BudgetMatrixRow[] = [
  {
    component: 'تكاليف الأنشطة المباشرة',
    amount: 1_080_000,
    amountDisplay: '$1,080K',
    reserveRatio: '–',
    cumulative: '$1,080K',
  },
  {
    component: 'احتياطي طوارئ النشاط',
    amount: 38_000,
    amountDisplay: '+$38K',
    reserveRatio: '3.52% من تكلفة النشاط',
    cumulative: '$1,118K',
  },
  {
    component: 'تكلفة حزمة العمل',
    amount: 1_118_000,
    amountDisplay: '$1,118K',
    reserveRatio: '–',
    cumulative: '$1,118K',
  },
  {
    component: 'احتياطي طوارئ حزمة العمل',
    amount: 40_000,
    amountDisplay: '+$40K',
    reserveRatio: '3.58% من تكلفة حزمة العمل',
    cumulative: '$1,158K',
  },
  {
    component: 'خط أساس التكلفة / حسابات الرقابة',
    amount: 1_158_000,
    amountDisplay: '$1,158K',
    reserveRatio: '–',
    cumulative: '$1,158K',
  },
  {
    component: 'الاحتياطي الإداري',
    amount: 42_000,
    amountDisplay: '+$42K',
    reserveRatio: '3.63% من خط أساس التكلفة',
    cumulative: '$1,200K',
  },
  {
    component: 'إجمالي ميزانية المشروع المعتمدة',
    amount: 1_200_000,
    amountDisplay: '$1,200K',
    reserveRatio: '10.00% من الميزانية المعتمدة احتياطيات',
    cumulative: '$1,200K',
  },
];

const BUDGET_OVERVIEW_AR: BudgetOverviewLine[] = [
  {
    label: 'تنفيذ الأنشطة المباشرة والموارد والمخرجات الفنية',
    shortLabel: 'تنفيذ الأنشطة المباشرة',
    percent: 90,
    amount: 1_080_000,
    color: '#14532d',
  },
  {
    label: 'إجمالي احتياطيات الطوارئ للمخاطر المعروفة عبر الأنشطة وحزم العمل',
    shortLabel: 'احتياطيات الطوارئ',
    percent: 6.5,
    amount: 78_000,
    color: '#22c55e',
  },
  {
    label: 'الاحتياطي الإداري لأحداث المخاطر غير المتوقعة',
    shortLabel: 'الاحتياطي الإداري',
    percent: 3.5,
    amount: 42_000,
    color: '#c4a35a',
  },
];

export const BUDGET_CONTENT: Localized<BudgetContent> = {
  en: {
    eyebrow: 'Deliverable 4',
    title: 'Project Budget',
    lead:
      'PMBOK cost-aggregation case study: activity costs are aggregated first; contingency reserves are then added to establish the cost baseline, followed by management reserve to establish the approved project budget.',
    operationalTitle: 'Operational Cost Levels',
    costBreakdownTitle: 'Green Hub Budget Matrix',
    distributionTitle: 'Financial Overview',
    matrixTitle: 'Cost Aggregation Level',
    totalApprovedLabel: 'Total Approved Budget: $1,200,000',
    duration: '40 Weeks',
    startDate: '1 January 2026',
    finishDate: '2 October 2026',
    total: 1_200_000,
    totalLabel: '$1,200,000',
    items: BUDGET_ITEMS_EN,
    pmbok: BUDGET_PMBOK_EN,
    matrix: BUDGET_MATRIX_EN,
    overview: BUDGET_OVERVIEW_EN,
    stepsNote:
      'Activity costs are aggregated first; contingency reserves are then added to establish the cost baseline, followed by management reserve to establish the approved project budget.',
  },
  ar: {
    eyebrow: 'التسليم 4',
    title: 'ميزانية المشروع',
    lead:
      'دراسة حالة لتجميع التكاليف وفق PMBOK: تُجمَّع تكاليف الأنشطة أولًا؛ ثم تُضاف احتياطيات الطوارئ لإثبات خط أساس التكلفة، يليها الاحتياطي الإداري لإثبات الميزانية المعتمدة للمشروع.',
    operationalTitle: 'مستويات التكلفة التشغيلية',
    costBreakdownTitle: 'مصفوفة ميزانية جرين هب',
    distributionTitle: 'نظرة مالية',
    matrixTitle: 'مستوى تجميع التكلفة',
    totalApprovedLabel: 'إجمالي الميزانية المعتمدة: $1,200,000',
    duration: '40 أسبوعًا',
    startDate: '1 يناير 2026',
    finishDate: '2 أكتوبر 2026',
    total: 1_200_000,
    totalLabel: '$1,200,000',
    items: BUDGET_ITEMS_AR,
    pmbok: BUDGET_PMBOK_AR,
    matrix: BUDGET_MATRIX_AR,
    overview: BUDGET_OVERVIEW_AR,
    stepsNote:
      'تُجمَّع تكاليف الأنشطة أولًا؛ ثم تُضاف احتياطيات الطوارئ لإثبات خط أساس التكلفة، يليها الاحتياطي الإداري لإثبات الميزانية المعتمدة للمشروع.',
  },
};

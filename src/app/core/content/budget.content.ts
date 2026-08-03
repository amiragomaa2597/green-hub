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

const BUDGET_ITEMS: BudgetItem[] = [
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

const BUDGET_PMBOK: PmbokLevel[] = [
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

const BUDGET_MATRIX: BudgetMatrixRow[] = [
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

const BUDGET_OVERVIEW: BudgetOverviewLine[] = [
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
    items: BUDGET_ITEMS,
    pmbok: BUDGET_PMBOK,
    matrix: BUDGET_MATRIX,
    overview: BUDGET_OVERVIEW,
    stepsNote:
      'Activity costs are aggregated first; contingency reserves are then added to establish the cost baseline, followed by management reserve to establish the approved project budget.',
  },
  ar: {
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
    items: BUDGET_ITEMS,
    pmbok: BUDGET_PMBOK,
    matrix: BUDGET_MATRIX,
    overview: BUDGET_OVERVIEW,
    stepsNote:
      'Activity costs are aggregated first; contingency reserves are then added to establish the cost baseline, followed by management reserve to establish the approved project budget.',
  },
};

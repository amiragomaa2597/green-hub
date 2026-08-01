import { BudgetItem } from '../models/project.models';

export const BUDGET_CONTENT = {
  eyebrow: 'Budget Summary',
  title: 'Cost Breakdown & Distribution',
  costBreakdownTitle: 'Cost Breakdown',
  distributionTitle: 'Budget Distribution',
  duration: '40 Weeks',
  startDate: '1 January 2026',
  finishDate: '2 October 2026',
  total: 10_800_000,
  totalLabel: '10,800,000 EGP',
  items: [
    {
      category: 'Construction & Infrastructure',
      amount: 3_800_000,
      percentage: 35,
      color: '#14532d',
    },
    {
      category: 'Renewable Energy Systems',
      amount: 2_400_000,
      percentage: 22,
      color: '#15803d',
    },
    {
      category: 'Smart Building System (BMS)',
      amount: 1_800_000,
      percentage: 17,
      color: '#22c55e',
    },
    {
      category: 'Water Conservation Systems',
      amount: 1_200_000,
      percentage: 11,
      color: '#38bdf8',
    },
    {
      category: 'Community & Educational Programs',
      amount: 600_000,
      percentage: 6,
      color: '#f59e0b',
    },
    {
      category: 'Project Management & Miscellaneous',
      amount: 1_000_000,
      percentage: 9,
      color: '#94a3b8',
    },
  ] satisfies BudgetItem[],
};

# -*- coding: utf-8 -*-
from pathlib import Path
import re

path = Path(r"C:\Users\HP\OneDrive\Desktop\green-hub\src\app\core\content\budget.content.ts")
text = path.read_text(encoding="utf-8")

# Rename shared constants used by both - keep EN shared, add AR copies for display fields
text = text.replace("const BUDGET_PMBOK: PmbokLevel[] =", "const BUDGET_PMBOK_EN: PmbokLevel[] =", 1)
text = text.replace("const BUDGET_MATRIX: BudgetMatrixRow[] =", "const BUDGET_MATRIX_EN: BudgetMatrixRow[] =", 1)
text = text.replace("const BUDGET_OVERVIEW: BudgetOverviewLine[] =", "const BUDGET_OVERVIEW_EN: BudgetOverviewLine[] =", 1)
text = text.replace("const BUDGET_ITEMS: BudgetItem[] =", "const BUDGET_ITEMS_EN: BudgetItem[] =", 1)

# Insert AR after EN overview ends - find export const BUDGET_CONTENT
ar_block = r'''
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

'''

idx = text.find("export const BUDGET_CONTENT")
if idx < 0:
    raise SystemExit("BUDGET_CONTENT not found")
text = text[:idx] + ar_block + text[idx:]

text = text.replace("items: BUDGET_ITEMS,", "items: BUDGET_ITEMS_EN,", 1)
text = text.replace("pmbok: BUDGET_PMBOK,", "pmbok: BUDGET_PMBOK_EN,", 1)
text = text.replace("matrix: BUDGET_MATRIX,", "matrix: BUDGET_MATRIX_EN,", 1)
text = text.replace("overview: BUDGET_OVERVIEW,", "overview: BUDGET_OVERVIEW_EN,", 1)

# AR block still references old names - fix second occurrences (ar block)
# After first replacements, ar still has BUDGET_ITEMS etc if we only replaced once.
# Replace remaining for ar:
text = text.replace(
    """    items: BUDGET_ITEMS,
    pmbok: BUDGET_PMBOK,
    matrix: BUDGET_MATRIX,
    overview: BUDGET_OVERVIEW,""",
    """    items: BUDGET_ITEMS_AR,
    pmbok: BUDGET_PMBOK_AR,
    matrix: BUDGET_MATRIX_AR,
    overview: BUDGET_OVERVIEW_AR,""",
)

# If ar still has _EN from accidental double - check
# Fix en if somehow got AR - read approach: ensure en uses _EN
text = text.replace(
    """    totalLabel: '$1,200,000',
    items: BUDGET_ITEMS_AR,
    pmbok: BUDGET_PMBOK_AR,
    matrix: BUDGET_MATRIX_AR,
    overview: BUDGET_OVERVIEW_AR,
    stepsNote:
      'Activity costs are aggregated first""",
    """    totalLabel: '$1,200,000',
    items: BUDGET_ITEMS_EN,
    pmbok: BUDGET_PMBOK_EN,
    matrix: BUDGET_MATRIX_EN,
    overview: BUDGET_OVERVIEW_EN,
    stepsNote:
      'Activity costs are aggregated first""",
)

path.write_text(text, encoding="utf-8")
print("budget Arabic arrays wired")

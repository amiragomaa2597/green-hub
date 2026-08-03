export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  icon?: string;
}

export interface Deliverable {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface WbsWorkItem {
  code: string;
  title: string;
}

export interface WbsBranch {
  code: string;
  title: string;
  packages: WbsWorkItem[];
}

export interface WbsPackage {
  id: number;
  title: string;
  color: string;
  weeks?: string;
  /** Flat Level-2 labels (schedule overview). */
  tasks?: string[];
  /** Full Level-2 → Level-3 tree (Deliverable 2). */
  branches?: WbsBranch[];
}

export interface Milestone {
  title: string;
  week: string;
}

export interface GanttRow {
  phase: string;
  start: number;
  end: number;
  duration: string;
  color: string;
  wbsRef?: string;
  predecessor?: string;
}

export interface BudgetItem {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface PmbokLevel {
  step: number;
  title: string;
  detail: string;
  addAmount: number;
  cumulative: number;
  color: string;
}

export interface BudgetMatrixRow {
  component: string;
  amount: number;
  amountDisplay?: string;
  reserveRatio: string;
  cumulative: string;
}

export interface Stakeholder {
  name: string;
  role: string;
  influence: string;
  interest: string;
  strategy: string;
}

export interface MatrixQuadrant {
  title: string;
  strategy: string;
  hint: string;
  stakeholders: string[];
}

export interface RiskItem {
  id: number;
  risk: string;
  description: string;
  probability: string;
  costImpact: number;
  timeImpact: string;
  owner: string;
  mitigation: string;
  solutionCost: number;
  strategy: string;
}

export interface ImpactArea {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface Takeaway {
  title: string;
  description: string;
  icon?: string;
}

export interface FeatureBlock {
  title: string;
  description: string;
  points: string[];
  icon?: string;
  image?: string;
}

export interface ScopePhase {
  name: string;
  weeks: string;
  duration: string;
}

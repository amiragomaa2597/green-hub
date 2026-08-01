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

export interface WbsPackage {
  id: number;
  title: string;
  tasks: string[];
  weeks: string;
  color: string;
}

export interface Milestone {
  title: string;
  week: string;
}

export interface BudgetItem {
  category: string;
  amount: number;
  percentage: number;
  color: string;
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

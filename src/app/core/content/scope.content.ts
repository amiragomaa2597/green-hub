import { Localized } from '../i18n/language.types';

export interface ScopeRow {
  component: string;
  content: string;
}

export interface ScopeContent {
  eyebrow: string;
  title: string;
  speaker: string;
  rows: ScopeRow[];
  lifeCycleTitle: string;
  lifeCycle: string[];
}

/** Deliverable 1 — Scope Statement (presented by Armia). Letter-perfect. */
export const SCOPE_CONTENT: Localized<ScopeContent> = {
  en: {
    eyebrow: 'Presented by Armia',
    title: 'Deliverable 1 — Scope Statement',
    speaker: 'Armia',
    rows: [
      {
        component: 'Description',
        content:
          'Sustainable community center promoting environmental awareness and green living: renewable-energy-powered facility with smart technologies, educational workshops, recycling programs, coworking spaces, community activities.',
      },
      {
        component: 'Requirements',
        content:
          'Solar PV system · smart lighting & HVAC controls · rainwater harvesting · recycling center · Building Management System (BMS).',
      },
      {
        component: 'Deliverables',
        content:
          'Approved charter · architectural & engineering designs · completed sustainable building · renewable energy system · Smart BMS · community training program · final handover documentation.',
      },
      {
        component: 'Boundaries',
        content:
          'IN: site prep, building construction, solar PV, rainwater, smart lighting/HVAC, native-plant landscaping, recycling center, training rooms, grand opening. OUT: other cities, residential, commercial retail, post-handover operation.',
      },
      {
        component: 'Assumptions',
        content:
          'Funding approved · permits on time · materials available · skilled contractors available · stable weather.',
      },
      {
        component: 'Constraints',
        content:
          '$1.2M budget · 40 weeks · LEED standards · local regulations · site limitations.',
      },
      {
        component: 'Strategy',
        content:
          'Waterfall-dominant life cycle: sequential initiation, planning, design, procurement, construction, testing, and handover. The Smart Building Management System (BMS) is delivered incrementally through configuration, integration, testing, and commissioning. Agile is not used because the overall scope, budget, and 40-week timeline are fixed.',
      },
      {
        component: 'Acceptance criteria',
        content:
          '≤ 40 weeks · budget variance < 5% · LEED certified · smart systems operational · client satisfaction ≥ 90% · zero lost-time accidents.',
      },
      {
        component: 'Cost breakdown',
        content:
          'Direct activity costs: Design $60K · Construction $570K · Solar PV $120K · Smart Systems/BMS $80K · MEP $140K · Landscaping $40K · Furniture $70K = $1,080K. Contingency reserve: $78K. Management reserve: $42K. Total approved budget: $1,200K.',
      },
    ],
    lifeCycleTitle: 'Life Cycle Selection & Justification',
    lifeCycle: [
      'Waterfall is the governing life cycle for the sequential physical works because the requirements, approvals, construction sequence, acceptance criteria, budget, and completion date are defined in advance.',
      'Incremental delivery is limited to the BMS: core monitoring is configured first, followed by HVAC and lighting integration, renewable-energy data, dashboards, and final commissioning. Each increment adds usable functionality against a predefined scope.',
      'Agile is not selected because the project does not allow an evolving overall scope or an open-ended timeline. Controlled changes are processed through formal change control.',
    ],
  },
  ar: {
    eyebrow: 'يقدّمه أرميا',
    title: 'Deliverable 1 — Scope Statement',
    speaker: 'Armia',
    rows: [
      {
        component: 'Description',
        content:
          'Sustainable community center promoting environmental awareness and green living: renewable-energy-powered facility with smart technologies, educational workshops, recycling programs, coworking spaces, community activities.',
      },
      {
        component: 'Requirements',
        content:
          'Solar PV system · smart lighting & HVAC controls · rainwater harvesting · recycling center · Building Management System (BMS).',
      },
      {
        component: 'Deliverables',
        content:
          'Approved charter · architectural & engineering designs · completed sustainable building · renewable energy system · Smart BMS · community training program · final handover documentation.',
      },
      {
        component: 'Boundaries',
        content:
          'IN: site prep, building construction, solar PV, rainwater, smart lighting/HVAC, native-plant landscaping, recycling center, training rooms, grand opening. OUT: other cities, residential, commercial retail, post-handover operation.',
      },
      {
        component: 'Assumptions',
        content:
          'Funding approved · permits on time · materials available · skilled contractors available · stable weather.',
      },
      {
        component: 'Constraints',
        content:
          '$1.2M budget · 40 weeks · LEED standards · local regulations · site limitations.',
      },
      {
        component: 'Strategy',
        content:
          'Waterfall-dominant life cycle: sequential initiation, planning, design, procurement, construction, testing, and handover. The Smart Building Management System (BMS) is delivered incrementally through configuration, integration, testing, and commissioning. Agile is not used because the overall scope, budget, and 40-week timeline are fixed.',
      },
      {
        component: 'Acceptance criteria',
        content:
          '≤ 40 weeks · budget variance < 5% · LEED certified · smart systems operational · client satisfaction ≥ 90% · zero lost-time accidents.',
      },
      {
        component: 'Cost breakdown',
        content:
          'Direct activity costs: Design $60K · Construction $570K · Solar PV $120K · Smart Systems/BMS $80K · MEP $140K · Landscaping $40K · Furniture $70K = $1,080K. Contingency reserve: $78K. Management reserve: $42K. Total approved budget: $1,200K.',
      },
    ],
    lifeCycleTitle: 'Life Cycle Selection & Justification',
    lifeCycle: [
      'Waterfall is the governing life cycle for the sequential physical works because the requirements, approvals, construction sequence, acceptance criteria, budget, and completion date are defined in advance.',
      'Incremental delivery is limited to the BMS: core monitoring is configured first, followed by HVAC and lighting integration, renewable-energy data, dashboards, and final commissioning. Each increment adds usable functionality against a predefined scope.',
      'Agile is not selected because the project does not allow an evolving overall scope or an open-ended timeline. Controlled changes are processed through formal change control.',
    ],
  },
};

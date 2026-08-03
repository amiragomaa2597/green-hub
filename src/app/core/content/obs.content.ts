import { Localized } from '../i18n/language.types';

export interface ObsRole {
  title: string;
  seniority: string;
  assignee: string;
  reportsTo: string;
}

export interface ObsResourceRow {
  category: string;
  resource: string;
  inside: string;
  outside: string;
  total: string;
}

export interface ObsContent {
  eyebrow: string;
  title: string;
  speaker: string;
  hint: string;
  columns: {
    title: string;
    seniority: string;
    assignee: string;
    reportsTo: string;
  };
  roles: ObsRole[];
  resourcesTitle: string;
  resourcesHint: string;
  resourceColumns: {
    category: string;
    resource: string;
    inside: string;
    outside: string;
    total: string;
  };
  resources: ObsResourceRow[];
  resourceBasis: string;
}

const OBS_ROLES: ObsRole[] = [
  {
    title: 'Sponsor / Account director',
    seniority: 'Executive Level',
    assignee: 'Internal company appointment',
    reportsTo: 'Executive Board',
  },
  {
    title: 'Project Manager',
    seniority: 'Top Management',
    assignee: 'Armia',
    reportsTo: 'Sponsor',
  },
  {
    title: 'Planning & Scheduling Lead',
    seniority: 'Lead Level',
    assignee: 'Ehab',
    reportsTo: 'Project Manager',
  },
  {
    title: 'Scope & Risk Officer',
    seniority: 'Lead Level',
    assignee: 'Amira',
    reportsTo: 'Project Manager',
  },
  {
    title: 'Finance & Partners Officer',
    seniority: 'Lead Level',
    assignee: 'Salwa',
    reportsTo: 'Project Manager',
  },
  {
    title: 'QA & Governance Officer',
    seniority: 'Lead Level',
    assignee: 'Shehab',
    reportsTo: 'Project Manager',
  },
  {
    title: 'QA & Audit Assistant',
    seniority: 'Junior Level',
    assignee: 'Michael',
    reportsTo: 'QA & Governance officer',
  },
  {
    title: 'Procurement & Supply Chain Lead',
    seniority: 'Lead Level',
    assignee: 'Internal company appointment',
    reportsTo: 'Project Manager',
  },
  {
    title: 'Sustainability & BMS Engineer',
    seniority: 'Senior Level',
    assignee: 'Internal company appointment',
    reportsTo: 'Project Manager',
  },
  {
    title: 'HSE Lead officer',
    seniority: 'Senior Level',
    assignee: 'Internal company appointment',
    reportsTo: 'Project Manager',
  },
  {
    title: 'Design, site, MEP and civil engineers',
    seniority: 'Senior Level',
    assignee: 'External consultants / contractor',
    reportsTo: 'Project Manager',
  },
  {
    title: 'Junior site & Field Engineers',
    seniority: 'Junior Level',
    assignee: 'Contractor',
    reportsTo: 'Project Manager',
  },
  {
    title: 'Site Supervisors & Foramen',
    seniority: 'Supervisory Level',
    assignee: 'External main contractor',
    reportsTo: 'Project Manager',
  },
  {
    title: 'Skilled trades & Equipment operators',
    seniority: 'Skilled Workforce',
    assignee: 'External main contractor',
    reportsTo: 'Site supervisor',
  },
  {
    title: 'General Construction Workers',
    seniority: 'General Workforce',
    assignee: 'External main contractor',
    reportsTo: 'Foramen',
  },
];

const OBS_RESOURCES: ObsResourceRow[] = [
  {
    category: 'Management',
    resource:
      'Sponsor, PM, controls, finance, procurement, QA/QHSE, sustainability/BMS, community liaison',
    inside: '9',
    outside: '0',
    total: '9 people',
  },
  {
    category: 'Design & engineering',
    resource: 'Architects, civil/structural, MEP, solar and landscape engineers',
    inside: '0',
    outside: '8',
    total: '8 people',
  },
  {
    category: 'Construction supervision',
    resource: 'Construction manager, senior engineers, site engineers and supervisors',
    inside: '0',
    outside: '10',
    total: '10 people',
  },
  {
    category: 'Workforce',
    resource: 'Skilled trades, equipment operators and general workers',
    inside: '0',
    outside: '32',
    total: '32 peak workers',
  },
  {
    category: 'Specialists',
    resource: 'BMS integration, testing/commissioning and LEED support',
    inside: '1',
    outside: '5',
    total: '6 people',
  },
  {
    category: 'Office resources',
    resource: 'Laptops, PM software, document control and meeting facilities',
    inside: '10 sets',
    outside: '0',
    total: 'Company-owned',
  },
  {
    category: 'Heavy equipment',
    resource:
      'Excavator, loader, mobile crane, compactor, concrete pump/mixer and dump trucks',
    inside: '0',
    outside: '8 units',
    total: 'Rented/contractor-owned',
  },
  {
    category: 'Technical equipment',
    resource: 'Surveying sets, PV installation tools and MEP/BMS test kits',
    inside: '2 sets',
    outside: '9 sets',
    total: '11 sets',
  },
  {
    category: 'Safety & temporary works',
    resource: 'PPE sets, scaffolding, edge protection and site barriers',
    inside: '0',
    outside: '40 PPE + site sets',
    total: 'Contractor-provided',
  },
];

export const OBS_CONTENT: Localized<ObsContent> = {
  en: {
    eyebrow: 'Deliverable 3',
    title: 'Organizational Breakdown Structure',
    speaker: 'Amira',
    hint: 'Select any organizational role to inspect seniority, assignment source, and reporting line.',
    columns: {
      title: 'Title / Organizational Role',
      seniority: 'Seniority Level',
      assignee: 'Assigned Member / Source',
      reportsTo: 'Report to',
    },
    roles: OBS_ROLES,
    resourcesTitle: 'Equipment & Resource Breakdown',
    resourcesHint:
      'Tap a category to balance inside-company vs outside-company supply against the planning total.',
    resourceColumns: {
      category: 'Category',
      resource: 'Resource / Equipment',
      inside: 'Inside Company',
      outside: 'Outside Company',
      total: 'Total / Basis',
    },
    resources: OBS_RESOURCES,
    resourceBasis:
      'Resource basis: internal staff govern and control the project; external consultants and contractors execute design, construction, specialist installation, and peak site labor. Counts are peak planning estimates and remain within the approved direct-cost baseline.',
  },
  ar: {
    eyebrow: 'التسليم 3',
    title: 'Organizational Breakdown Structure',
    speaker: 'Amira',
    hint: 'اختر أي دور تنظيمي لاستعراض مستوى الأقدمية ومصدر التعيين وخط التقارير.',
    columns: {
      title: 'Title / Organizational Role',
      seniority: 'Seniority Level',
      assignee: 'Assigned Member / Source',
      reportsTo: 'Report to',
    },
    roles: OBS_ROLES,
    resourcesTitle: 'Equipment & Resource Breakdown',
    resourcesHint:
      'اختر فئة لموازنة التوريد داخل الشركة مقابل خارجها مقابل إجمالي التخطيط.',
    resourceColumns: {
      category: 'Category',
      resource: 'Resource / Equipment',
      inside: 'Inside Company',
      outside: 'Outside Company',
      total: 'Total / Basis',
    },
    resources: OBS_RESOURCES,
    resourceBasis:
      'Resource basis: internal staff govern and control the project; external consultants and contractors execute design, construction, specialist installation, and peak site labor. Counts are peak planning estimates and remain within the approved direct-cost baseline.',
  },
};

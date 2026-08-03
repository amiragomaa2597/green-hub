import { Localized } from '../i18n/language.types';
import { MatrixQuadrant, Stakeholder } from '../models/project.models';

export interface StakeholdersContent {
  eyebrow: string;
  title: string;
  speaker: string;
  lead: string;
  registerTitle: string;
  matrixTitle: string;
  quadrantSummaryTitle: string;
  register: Stakeholder[];
  matrix: MatrixQuadrant[];
}

/** Deliverable 5 — Stakeholder Analysis (presented by Shehab). */
export const STAKEHOLDERS_CONTENT: Localized<StakeholdersContent> = {
  en: {
    eyebrow: 'Deliverable 5',
    title: 'Stakeholder Analysis',
    speaker: 'Shehab',
    lead:
      'Stakeholders were assessed using four clear categories only: H H, H L, L H, and L L. Customer/Investor, Sponsor, and Project Manager are treated as separate stakeholders. Municipality/Local Authorities are H L—not H H—because they have high regulatory power but comparatively low day-to-day interest beyond compliance and permits.',
    registerTitle: 'Stakeholder Register',
    matrixTitle: 'Power / Interest Grid',
    quadrantSummaryTitle: 'Quadrant Summary',
    register: [
      {
        name: 'Customer/Investor',
        role: '',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Sponsor',
        role: '',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Project Manager',
        role: '',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Main Contractor',
        role: '',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Design Consultant',
        role: '',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Municipality/Local Authorities',
        role: '',
        influence: 'High',
        interest: 'Low',
        strategy: 'Keep Satisfied',
      },
      {
        name: 'Environmental Authority',
        role: '',
        influence: 'High',
        interest: 'Low',
        strategy: 'Keep Satisfied',
      },
      {
        name: 'Site Engineers & Supervisors',
        role: '',
        influence: 'Low',
        interest: 'High',
        strategy: 'Keep Informed',
      },
      {
        name: 'Skilled and General Workers',
        role: '',
        influence: 'Low',
        interest: 'High',
        strategy: 'Keep Informed',
      },
      {
        name: 'Local Community',
        role: '',
        influence: 'Low',
        interest: 'High',
        strategy: 'Keep Informed',
      },
      {
        name: 'Key Suppliers',
        role: '',
        influence: 'Low',
        interest: 'High',
        strategy: 'Keep Informed',
      },
      {
        name: 'General Public',
        role: '',
        influence: 'Low',
        interest: 'Low',
        strategy: 'Monitor',
      },
      {
        name: 'Non-critical Vendors',
        role: '',
        influence: 'Low',
        interest: 'Low',
        strategy: 'Monitor',
      },
    ],
    matrix: [
      {
        title: 'Manage Closely',
        strategy: 'H H',
        hint: 'Customer/Investor · Sponsor · Project Manager · Main Contractor · Design Consultant',
        stakeholders: [
          'Customer/Investor',
          'Sponsor',
          'Project Manager',
          'Main Contractor',
          'Design Consultant',
        ],
      },
      {
        title: 'Keep Satisfied',
        strategy: 'H L',
        hint: 'Municipality/Local Authorities · Environmental Authority',
        stakeholders: [
          'Municipality/Local Authorities',
          'Environmental Authority',
        ],
      },
      {
        title: 'Keep Informed',
        strategy: 'L H',
        hint: 'Site Engineers & Supervisors · Skilled and General Workers · Local Community · Key Suppliers',
        stakeholders: [
          'Site Engineers & Supervisors',
          'Skilled and General Workers',
          'Local Community',
          'Key Suppliers',
        ],
      },
      {
        title: 'Monitor',
        strategy: 'L L',
        hint: 'General Public · Non-critical Vendors',
        stakeholders: ['General Public', 'Non-critical Vendors'],
      },
    ],
  },
  ar: {
    eyebrow: 'التسليم 5',
    title: 'تحليل أصحاب المصلحة',
    speaker: 'شهاب',
    lead:
      'تم تقييم أصحاب المصلحة بأربع فئات واضحة فقط: ع ع، ع م، م ع، وم م. العميل/المستثمر والراعي ومدير المشروع يُعاملون كأصحاب مصلحة منفصلين. البلدية/السلطات المحلية ع م — وليست ع ع — لأنها تملك سلطة تنظيمية عالية مع مصلحة يومية أقل نسبيًا خارج الامتثال والتصاريح.',
    registerTitle: 'سجل أصحاب المصلحة',
    matrixTitle: 'مصفوفة القوة / المصلحة',
    quadrantSummaryTitle: 'ملخص الأرباع',
    register: [
      {
        name: 'العميل/المستثمر',
        role: '',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'الراعي',
        role: '',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'مدير المشروع',
        role: '',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'المقاول الرئيسي',
        role: '',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'استشاري التصميم',
        role: '',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'البلدية/السلطات المحلية',
        role: '',
        influence: 'عالية',
        interest: 'منخفضة',
        strategy: 'إبقاء راضين',
      },
      {
        name: 'الجهة البيئية',
        role: '',
        influence: 'عالية',
        interest: 'منخفضة',
        strategy: 'إبقاء راضين',
      },
      {
        name: 'مهندسو ومشرفو الموقع',
        role: '',
        influence: 'منخفضة',
        interest: 'عالية',
        strategy: 'إبقاء على اطلاع',
      },
      {
        name: 'العمال المهرة والعامون',
        role: '',
        influence: 'منخفضة',
        interest: 'عالية',
        strategy: 'إبقاء على اطلاع',
      },
      {
        name: 'المجتمع المحلي',
        role: '',
        influence: 'منخفضة',
        interest: 'عالية',
        strategy: 'إبقاء على اطلاع',
      },
      {
        name: 'الموردون الرئيسيون',
        role: '',
        influence: 'منخفضة',
        interest: 'عالية',
        strategy: 'إبقاء على اطلاع',
      },
      {
        name: 'الجمهور العام',
        role: '',
        influence: 'منخفضة',
        interest: 'منخفضة',
        strategy: 'مراقبة',
      },
      {
        name: 'البائعون غير الحرجين',
        role: '',
        influence: 'منخفضة',
        interest: 'منخفضة',
        strategy: 'مراقبة',
      },
    ],
    matrix: [
      {
        title: 'إدارة وثيقة',
        strategy: 'ع ع',
        hint: 'العميل/المستثمر · الراعي · مدير المشروع · المقاول الرئيسي · استشاري التصميم',
        stakeholders: [
          'العميل/المستثمر',
          'الراعي',
          'مدير المشروع',
          'المقاول الرئيسي',
          'استشاري التصميم',
        ],
      },
      {
        title: 'إبقاء راضين',
        strategy: 'ع م',
        hint: 'البلدية/السلطات المحلية · الجهة البيئية',
        stakeholders: ['البلدية/السلطات المحلية', 'الجهة البيئية'],
      },
      {
        title: 'إبقاء على اطلاع',
        strategy: 'م ع',
        hint: 'مهندسو ومشرفو الموقع · العمال المهرة والعامون · المجتمع المحلي · الموردون الرئيسيون',
        stakeholders: [
          'مهندسو ومشرفو الموقع',
          'العمال المهرة والعامون',
          'المجتمع المحلي',
          'الموردون الرئيسيون',
        ],
      },
      {
        title: 'مراقبة',
        strategy: 'م م',
        hint: 'الجمهور العام · البائعون غير الحرجين',
        stakeholders: ['الجمهور العام', 'البائعون غير الحرجين'],
      },
    ],
  },
};

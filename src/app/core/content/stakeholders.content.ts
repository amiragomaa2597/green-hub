import { Localized } from '../i18n/language.types';
import { MatrixQuadrant, Stakeholder } from '../models/project.models';

export interface StakeholdersContent {
  eyebrow: string;
  title: string;
  registerTitle: string;
  matrixTitle: string;
  register: Stakeholder[];
  matrix: MatrixQuadrant[];
}

export const STAKEHOLDERS_CONTENT: Localized<StakeholdersContent> = {
  en: {
    eyebrow: 'Stakeholder Analysis',
    title: 'Stakeholder Register & Power–Interest Matrix',
    registerTitle: 'Stakeholder Register',
    matrixTitle: 'Stakeholder Power–Interest Matrix',
    register: [
      {
        name: 'Project Sponsor (Municipality)',
        role: 'Provides funding and strategic direction',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Project Manager & Team',
        role: 'Responsible for planning, execution and delivery',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Local Community & Users',
        role: 'Beneficiaries of the center and programs',
        influence: 'Low',
        interest: 'High',
        strategy: 'Keep Informed',
      },
      {
        name: 'Government & Regulatory Bodies',
        role: 'Approvals, permits and compliance',
        influence: 'High',
        interest: 'Medium',
        strategy: 'Keep Satisfied',
      },
      {
        name: 'Suppliers & Contractors',
        role: 'Provide materials, equipment and services',
        influence: 'Medium',
        interest: 'Medium',
        strategy: 'Keep Satisfied',
      },
      {
        name: 'Investors & Donors',
        role: 'Provide financial support and resources',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Educational & Training Partners',
        role: 'Support environmental education programs',
        influence: 'Low',
        interest: 'Medium',
        strategy: 'Keep Informed',
      },
      {
        name: 'Environmental Organizations',
        role: 'Support sustainability and green initiatives',
        influence: 'Medium',
        interest: 'High',
        strategy: 'Keep Informed',
      },
    ],
    matrix: [
      {
        title: 'Manage Closely',
        strategy: 'High Interest / High Power',
        stakeholders: [
          'Project Sponsor (Municipality)',
          'Project Manager & Team',
          'Investors & Donors',
        ],
      },
      {
        title: 'Keep Satisfied',
        strategy: 'Low Interest / High Power',
        stakeholders: [
          'Government & Regulatory Bodies',
          'Suppliers & Contractors',
        ],
      },
      {
        title: 'Keep Informed',
        strategy: 'High Interest / Low Power',
        stakeholders: [
          'Local Community & Users',
          'Educational & Training Partners',
          'Environmental Organizations',
        ],
      },
      {
        title: 'Monitor',
        strategy: 'Low Interest / Low Power',
        stakeholders: ['(No major stakeholders in this quadrant)'],
      },
    ],
  },
  ar: {
    eyebrow: 'تحليل أصحاب المصلحة',
    title: 'سجل أصحاب المصلحة ومصفوفة القوة–المصلحة',
    registerTitle: 'سجل أصحاب المصلحة',
    matrixTitle: 'مصفوفة القوة–المصلحة',
    register: [
      {
        name: 'راعي المشروع (البلدية)',
        role: 'يوفر التمويل والتوجيه الاستراتيجي',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'مدير المشروع والفريق',
        role: 'مسؤول عن التخطيط والتنفيذ والتسليم',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'المجتمع المحلي والمستخدمون',
        role: 'المستفيدون من المركز والبرامج',
        influence: 'منخفضة',
        interest: 'عالية',
        strategy: 'إبقاء على اطلاع',
      },
      {
        name: 'الجهات الحكومية والتنظيمية',
        role: 'الموافقات والتصاريح والامتثال',
        influence: 'عالية',
        interest: 'متوسطة',
        strategy: 'إبقاء راضين',
      },
      {
        name: 'الموردون والمقاولون',
        role: 'توفير المواد والمعدات والخدمات',
        influence: 'متوسطة',
        interest: 'متوسطة',
        strategy: 'إبقاء راضين',
      },
      {
        name: 'المستثمرون والمانحون',
        role: 'تقديم الدعم المالي والموارد',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'شركاء التعليم والتدريب',
        role: 'دعم برامج التوعية البيئية',
        influence: 'منخفضة',
        interest: 'متوسطة',
        strategy: 'إبقاء على اطلاع',
      },
      {
        name: 'المنظمات البيئية',
        role: 'دعم الاستدامة والمبادرات الخضراء',
        influence: 'متوسطة',
        interest: 'عالية',
        strategy: 'إبقاء على اطلاع',
      },
    ],
    matrix: [
      {
        title: 'إدارة وثيقة',
        strategy: 'مصلحة عالية / قوة عالية',
        stakeholders: [
          'راعي المشروع (البلدية)',
          'مدير المشروع والفريق',
          'المستثمرون والمانحون',
        ],
      },
      {
        title: 'إبقاء راضين',
        strategy: 'مصلحة منخفضة / قوة عالية',
        stakeholders: ['الجهات الحكومية والتنظيمية', 'الموردون والمقاولون'],
      },
      {
        title: 'إبقاء على اطلاع',
        strategy: 'مصلحة عالية / قوة منخفضة',
        stakeholders: [
          'المجتمع المحلي والمستخدمون',
          'شركاء التعليم والتدريب',
          'المنظمات البيئية',
        ],
      },
      {
        title: 'مراقبة',
        strategy: 'مصلحة منخفضة / قوة منخفضة',
        stakeholders: ['(لا يوجد أصحاب مصلحة رئيسيون في هذا الربع)'],
      },
    ],
  },
};

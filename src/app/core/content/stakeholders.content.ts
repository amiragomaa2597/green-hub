import { Localized } from '../i18n/language.types';
import { MatrixQuadrant, Stakeholder } from '../models/project.models';

export interface StakeholdersContent {
  eyebrow: string;
  title: string;
  lead: string;
  registerTitle: string;
  matrixTitle: string;
  register: Stakeholder[];
  matrix: MatrixQuadrant[];
}

export const STAKEHOLDERS_CONTENT: Localized<StakeholdersContent> = {
  en: {
    eyebrow: 'Deliverable 5',
    title: 'Stakeholder Analysis',
    lead:
      'Stakeholders were identified from the project participants list, evaluated on power and interest, and plotted on a Power/Interest grid to set engagement strategy.',
    registerTitle: 'Stakeholder Register',
    matrixTitle: 'Power / Interest Grid',
    register: [
      {
        name: 'Sponsor / Investor',
        role: 'Funding and strategic direction',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Municipality (Permits)',
        role: 'Permits and municipal approvals',
        influence: 'High',
        interest: 'Medium',
        strategy: 'Keep Satisfied',
      },
      {
        name: 'Design Consultant',
        role: 'Architecture and engineering design',
        influence: 'Med-High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Contractor',
        role: 'Main construction delivery',
        influence: 'High',
        interest: 'High',
        strategy: 'Manage Closely',
      },
      {
        name: 'Suppliers',
        role: 'Materials and equipment supply',
        influence: 'Medium',
        interest: 'Medium',
        strategy: 'Monitor',
      },
      {
        name: 'Local Community',
        role: 'Beneficiaries and neighbors',
        influence: 'Low',
        interest: 'High',
        strategy: 'Keep Informed',
      },
      {
        name: 'Environmental Authority',
        role: 'Environmental compliance and LEED',
        influence: 'High',
        interest: 'Medium',
        strategy: 'Keep Satisfied',
      },
    ],
    matrix: [
      {
        title: 'Manage Closely',
        strategy: 'High Power / High Interest',
        hint: 'Sponsor/Investor · Design Consultant · Contractor — the three relationships that most directly determine project success.',
        stakeholders: [
          'Sponsor / Investor',
          'Design Consultant',
          'Contractor',
        ],
      },
      {
        title: 'Keep Satisfied',
        strategy: 'High Power / Medium Interest',
        hint: 'Municipality · Environmental Authority — regulatory gatekeepers who can block progress without deep day-to-day involvement.',
        stakeholders: ['Municipality (Permits)', 'Environmental Authority'],
      },
      {
        title: 'Keep Informed',
        strategy: 'Low Power / High Interest',
        hint: 'Local Community — affected by the project but with limited formal authority; managed through communication.',
        stakeholders: ['Local Community'],
      },
      {
        title: 'Monitor',
        strategy: 'Medium Power / Medium Interest',
        hint: 'Suppliers — tracked primarily for delivery-schedule risk rather than active engagement.',
        stakeholders: ['Suppliers'],
      },
    ],
  },
  ar: {
    eyebrow: 'المخرج 5',
    title: 'تحليل أصحاب المصلحة',
    lead:
      'تم تحديد أصحاب المصلحة من قائمة المشاركين، وتقييمهم وفق القوة والمصلحة، ورسمهم على مصفوفة القوة/المصلحة لتحديد استراتيجية التواصل.',
    registerTitle: 'سجل أصحاب المصلحة',
    matrixTitle: 'مصفوفة القوة / المصلحة',
    register: [
      {
        name: 'الراعي / المستثمر',
        role: 'التمويل والتوجيه الاستراتيجي',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'البلدية (التصاريح)',
        role: 'التصاريح والموافقات البلدية',
        influence: 'عالية',
        interest: 'متوسطة',
        strategy: 'إبقاء راضين',
      },
      {
        name: 'استشاري التصميم',
        role: 'التصميم المعماري والهندسي',
        influence: 'متوسطة–عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'المقاول',
        role: 'تنفيذ الإنشاءات الرئيسية',
        influence: 'عالية',
        interest: 'عالية',
        strategy: 'إدارة وثيقة',
      },
      {
        name: 'الموردون',
        role: 'توريد المواد والمعدات',
        influence: 'متوسطة',
        interest: 'متوسطة',
        strategy: 'مراقبة',
      },
      {
        name: 'المجتمع المحلي',
        role: 'المستفيدون والجيران',
        influence: 'منخفضة',
        interest: 'عالية',
        strategy: 'إبقاء على اطلاع',
      },
      {
        name: 'الجهة البيئية',
        role: 'الامتثال البيئي وLEED',
        influence: 'عالية',
        interest: 'متوسطة',
        strategy: 'إبقاء راضين',
      },
    ],
    matrix: [
      {
        title: 'إدارة وثيقة',
        strategy: 'قوة عالية / مصلحة عالية',
        hint: 'الراعي/المستثمر · استشاري التصميم · المقاول — العلاقات الثلاث التي تحدد نجاح المشروع مباشرة.',
        stakeholders: ['الراعي / المستثمر', 'استشاري التصميم', 'المقاول'],
      },
      {
        title: 'إبقاء راضين',
        strategy: 'قوة عالية / مصلحة متوسطة',
        hint: 'البلدية · الجهة البيئية — بوابات تنظيمية يمكنها إيقاف التقدم دون مشاركة يومية عميقة.',
        stakeholders: ['البلدية (التصاريح)', 'الجهة البيئية'],
      },
      {
        title: 'إبقاء على اطلاع',
        strategy: 'قوة منخفضة / مصلحة عالية',
        hint: 'المجتمع المحلي — متأثر بالمشروع بسلطة رسمية محدودة؛ يُدار عبر التواصل.',
        stakeholders: ['المجتمع المحلي'],
      },
      {
        title: 'مراقبة',
        strategy: 'قوة متوسطة / مصلحة متوسطة',
        hint: 'الموردون — يُتابَعون أساسًا لمخاطر جدول التسليم لا للمشاركة النشطة.',
        stakeholders: ['الموردون'],
      },
    ],
  },
};

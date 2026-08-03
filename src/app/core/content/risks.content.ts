import { Localized } from '../i18n/language.types';
import { RiskItem } from '../models/project.models';

export interface RisksContent {
  eyebrow: string;
  title: string;
  motto: string;
  risks: RiskItem[];
  summary: {
    totalCostImpact: number;
    totalDelay: number;
    totalMitigationCost: number;
    goal: string;
    reserveCheck: string;
  };
}

/** Source: final.docx — Risk Mitigation Sheet (letter-perfect). */
export const RISKS_CONTENT: Localized<RisksContent> = {
  en: {
    eyebrow: 'Risk Management',
    title: 'Risk Mitigation Sheet for The Green Hub',
    motto: 'Risk Mitigation Sheet for The Green Hub',
    risks: [
      {
        id: 1,
        risk: 'Building permit delay',
        description: '$17,600 (1.47%)',
        probability: 'High',
        costImpact: 17_600,
        timeImpact: '4 wks',
        owner: 'Design Lead',
        mitigation:
          'Submit at 70% design; appoint permitting consultant. Cost is added to prevention/consultancy. Solution cost $6,000.',
        strategy: 'Mitigate',
      },
      {
        id: 2,
        risk: 'Late delivery of imported solar equipment',
        description: '$27,400 (2.28%)',
        probability: 'High',
        costImpact: 27_400,
        timeImpact: '5 wks',
        owner: 'Procurement Manager',
        mitigation:
          'Order early; dual-source; penalty clause and expediting allowance. Solution cost $8,000.',
        strategy: 'Transfer',
      },
      {
        id: 3,
        risk: 'Material breakage during handling, storage, or contractor handover',
        description: '$22,000 (1.83%)',
        probability: 'Medium',
        costImpact: 22_000,
        timeImpact: '2 wks',
        owner: 'Construction Manager',
        mitigation:
          'Inspection at receipt; protected storage; handling method statement; supplier/contractor liability. Solution cost $5,000.',
        strategy: 'Transfer',
      },
      {
        id: 4,
        risk: 'Contractor underperformance or default',
        description: '$70,400 (5.87%)',
        probability: 'Medium',
        costImpact: 70_400,
        timeImpact: '8 wks',
        owner: 'Project Manager',
        mitigation:
          'Prequalify; performance bond; retention; milestone payments. Bond/admin premium affects direct cost. Solution cost $12,000.',
        strategy: 'Mitigate',
      },
      {
        id: 5,
        risk: 'Scope creep from unapproved requests',
        description: '$25,400 (2.12%)',
        probability: 'High',
        costImpact: 25_400,
        timeImpact: '3 wks',
        owner: 'Project Manager',
        mitigation:
          'Formal change control and baseline approval; allowance covers administration and impact analysis. Solution cost $3,000.',
        strategy: 'Mitigate',
      },
      {
        id: 6,
        risk: 'Utility connection / net-metering delay',
        description: '$8,800 (0.73%)',
        probability: 'Medium',
        costImpact: 8_800,
        timeImpact: '4 wks',
        owner: 'Sustainability Engineer',
        mitigation:
          'Apply early; temporary generator/testing arrangement. Solution cost $7,500.',
        strategy: 'Mitigate',
      },
      {
        id: 7,
        risk: 'Local cement and steel price inflation',
        description: '$35,200 (2.93%)',
        probability: 'High',
        costImpact: 35_200,
        timeImpact: '0 wks',
        owner: 'Procurement Manager',
        mitigation:
          'Although reporting is in USD, local purchases remain exposed to EGP supplier inflation and USD-equivalent escalation. Bulk-buy, fixed-price contracts, and secure storage. Solution cost $10,000.',
        strategy: 'Mitigate',
      },
      {
        id: 8,
        risk: 'Site safety incident',
        description: '$19,600 (1.63%)',
        probability: 'Medium',
        costImpact: 19_600,
        timeImpact: '2 wks',
        owner: 'QHSE Officer',
        mitigation:
          'Insurance; permit-to-work; edge protection; PPE and weekly toolbox talks. Solution cost $15,000.',
        strategy: 'Mitigate',
      },
    ],
    summary: {
      totalCostImpact: 226_400,
      totalDelay: 28,
      totalMitigationCost: 66_500,
      goal: '$226,400 (18.87%) · 28 weeks (worst case, unmitigated) · $66,500 (5.54%)',
      reserveCheck: '$66,500 ≤ $78,000 contingency reserve',
    },
  },
  ar: {
    eyebrow: 'إدارة المخاطر',
    title: 'ورقة معالجة مخاطر جرين هب',
    motto: 'ورقة معالجة مخاطر جرين هب',
    risks: [
      {
        id: 1,
        risk: 'تأخير تصريح البناء',
        description: '$17,600 (1.47%)',
        probability: 'High',
        costImpact: 17_600,
        timeImpact: '4 أسابيع',
        owner: 'مسؤول التصميم',
        mitigation:
          'التقديم عند اكتمال 70% من التصميم؛ تعيين استشاري تصاريح. التكلفة تُضاف للوقاية/الاستشارات. تكلفة الحل 6,000 دولار.',
        strategy: 'Mitigate',
      },
      {
        id: 2,
        risk: 'تأخر تسليم معدات الطاقة الشمسية المستوردة',
        description: '$27,400 (2.28%)',
        probability: 'High',
        costImpact: 27_400,
        timeImpact: '5 أسابيع',
        owner: 'مدير المشتريات',
        mitigation:
          'طلب مبكر؛ موردان بديلان؛ بند غرامة وبدل تسريع. تكلفة الحل 8,000 دولار.',
        strategy: 'Transfer',
      },
      {
        id: 3,
        risk: 'كسر المواد أثناء المناولة أو التخزين أو تسليم المقاول',
        description: '$22,000 (1.83%)',
        probability: 'Medium',
        costImpact: 22_000,
        timeImpact: 'أسبوعان',
        owner: 'مدير الإنشاءات',
        mitigation:
          'فحص عند الاستلام؛ تخزين محمي؛ بيان طريقة مناولة؛ مسؤولية المورد/المقاول. تكلفة الحل 5,000 دولار.',
        strategy: 'Transfer',
      },
      {
        id: 4,
        risk: 'ضعف أداء المقاول أو التعثر',
        description: '$70,400 (5.87%)',
        probability: 'Medium',
        costImpact: 70_400,
        timeImpact: '8 أسابيع',
        owner: 'مدير المشروع',
        mitigation:
          'تأهيل مسبق؛ ضمان أداء؛ احتجاز؛ دفعات معالم. علاوة الضمان/الإدارة تؤثر على التكلفة المباشرة. تكلفة الحل 12,000 دولار.',
        strategy: 'Mitigate',
      },
      {
        id: 5,
        risk: 'توسع النطاق من طلبات غير معتمدة',
        description: '$25,400 (2.12%)',
        probability: 'High',
        costImpact: 25_400,
        timeImpact: '3 أسابيع',
        owner: 'مدير المشروع',
        mitigation:
          'تحكم رسمي بالتغيير واعتماد خط الأساس؛ بدل للإدارة وتحليل الأثر. تكلفة الحل 3,000 دولار.',
        strategy: 'Mitigate',
      },
      {
        id: 6,
        risk: 'تأخير ربط المرافق / صافي القياس',
        description: '$8,800 (0.73%)',
        probability: 'Medium',
        costImpact: 8_800,
        timeImpact: '4 أسابيع',
        owner: 'مهندس الاستدامة',
        mitigation:
          'تقديم مبكر؛ ترتيب مولد/اختبار مؤقت. تكلفة الحل 7,500 دولار.',
        strategy: 'Mitigate',
      },
      {
        id: 7,
        risk: 'تضخم أسعار الإسمنت والحديد محليًا',
        description: '$35,200 (2.93%)',
        probability: 'High',
        costImpact: 35_200,
        timeImpact: '0 أسابيع',
        owner: 'مدير المشتريات',
        mitigation:
          'رغم العرض بالدولار، تبقى المشتريات المحلية عرضة لتضخم الموردين بالجنيه والتصعيد المكافئ بالدولار. شراء كميات كبيرة، عقود سعر ثابت، وتخزين آمن. تكلفة الحل 10,000 دولار.',
        strategy: 'Mitigate',
      },
      {
        id: 8,
        risk: 'حادث سلامة في الموقع',
        description: '$19,600 (1.63%)',
        probability: 'Medium',
        costImpact: 19_600,
        timeImpact: 'أسبوعان',
        owner: 'مسؤول الجودة والصحة والسلامة',
        mitigation:
          'تأمين؛ تصريح عمل؛ حماية الحواف؛ معدات وقاية وجلسات توعية أسبوعية. تكلفة الحل 15,000 دولار.',
        strategy: 'Mitigate',
      },
    ],
    summary: {
      totalCostImpact: 226_400,
      totalDelay: 28,
      totalMitigationCost: 66_500,
      goal: '$226,400 (18.87%) · 28 أسبوعًا (أسوأ حالة دون معالجة) · $66,500 (5.54%)',
      reserveCheck: '$66,500 ≤ $78,000 احتياطي الطوارئ',
    },
  },
};

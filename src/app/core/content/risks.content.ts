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
  };
}

/**
 * Keep probability/strategy in English as stable filter keys.
 * Display labels are localized in UI_LABELS / risk console.
 */
export const RISKS_CONTENT: Localized<RisksContent> = {
  en: {
    eyebrow: 'Risk Management',
    title: 'Top 8 Project Risks & Mitigation Plan',
    motto: 'Identify. Assess. Mitigate. Managing Risks. Delivering Success.',
    risks: [
      {
        id: 1,
        risk: 'Building Permit Delay',
        description: 'Delay in obtaining construction approval.',
        probability: 'High',
        costImpact: 900_000,
        timeImpact: '4 Weeks',
        owner: 'Design Lead',
        mitigation:
          'Submit permit at 70% design and appoint a permitting consultant.',
        strategy: 'Mitigate',
      },
      {
        id: 2,
        risk: 'Late Delivery of Solar Equipment',
        description: 'Delay in PV panels & inverters (shipping / customs).',
        probability: 'High',
        costImpact: 1_400_000,
        timeImpact: '5 Weeks',
        owner: 'Procurement Manager',
        mitigation:
          'Order early in Week 14; dual-source suppliers; include late-delivery penalty clause.',
        strategy: 'Transfer',
      },
      {
        id: 3,
        risk: 'Currency Fluctuation',
        description: 'EGP devaluation increases cost of imported equipment.',
        probability: 'High',
        costImpact: 2_700_000,
        timeImpact: '0 Weeks',
        owner: 'Finance Manager',
        mitigation: 'Fix prices in EGP; pay 50% advance; cap escalation at 5%.',
        strategy: 'Mitigate',
      },
      {
        id: 4,
        risk: 'Contractor Underperformance',
        description: 'Main contractor may underperform or default.',
        probability: 'Medium',
        costImpact: 3_600_000,
        timeImpact: '8 Weeks',
        owner: 'Project Manager',
        mitigation:
          'Prequalify bidders; 10% performance bond; 5% retention; milestone payments.',
        strategy: 'Mitigate',
      },
      {
        id: 5,
        risk: 'Scope Creep',
        description: 'New requests change scope, impacting time & cost.',
        probability: 'High',
        costImpact: 1_300_000,
        timeImpact: '3 Weeks',
        owner: 'Project Manager',
        mitigation:
          'Formal change control – no change without Steering Committee approval.',
        strategy: 'Mitigate',
      },
      {
        id: 6,
        risk: 'Utility Connection Delay',
        description: 'Delay in grid connection / net-metering approval.',
        probability: 'Medium',
        costImpact: 450_000,
        timeImpact: '4 Weeks',
        owner: 'Sustainability Engineer',
        mitigation:
          'Apply in Week 14; use temporary generator so testing can continue.',
        strategy: 'Mitigate',
      },
      {
        id: 7,
        risk: 'Material Price Increase',
        description: 'Escalation in cement and steel prices.',
        probability: 'High',
        costImpact: 1_800_000,
        timeImpact: '0 Weeks',
        owner: 'Procurement Manager',
        mitigation:
          'Bulk-buy at award; fixed-price supply contracts; 7% contingency.',
        strategy: 'Share',
      },
      {
        id: 8,
        risk: 'Safety Incidents',
        description: 'Accidents on site (e.g. fall from roof / PV works).',
        probability: 'Medium',
        costImpact: 1_000_000,
        timeImpact: '2 Weeks',
        owner: 'QHSE Officer',
        mitigation:
          'Insurance; permit-to-work; edge protection; weekly toolbox talks.',
        strategy: 'Mitigate',
      },
    ],
    summary: {
      totalCostImpact: 17_850_000,
      totalDelay: 43,
      totalMitigationCost: 3_300_000,
      goal: 'ZERO SURPRISES. ON TIME. ON BUDGET.',
    },
  },
  ar: {
    eyebrow: 'إدارة المخاطر',
    title: 'أهم 8 مخاطر للمشروع وخطة المعالجة',
    motto: 'حدّد. قيّم. عالج. ندير المخاطر. نحقّق النجاح.',
    risks: [
      {
        id: 1,
        risk: 'تأخير تصريح البناء',
        description: 'تأخير في الحصول على موافقة الإنشاء.',
        probability: 'High',
        costImpact: 900_000,
        timeImpact: '4 أسابيع',
        owner: 'مسؤول التصميم',
        mitigation:
          'تقديم طلب التصريح عند اكتمال 70% من التصميم وتعيين استشاري تصاريح.',
        strategy: 'Mitigate',
      },
      {
        id: 2,
        risk: 'تأخر تسليم معدات الطاقة الشمسية',
        description: 'تأخير في الألواح والمحولات (شحن / جمارك).',
        probability: 'High',
        costImpact: 1_400_000,
        timeImpact: '5 أسابيع',
        owner: 'مدير المشتريات',
        mitigation:
          'الطلب مبكرًا في الأسبوع 14؛ موردان بديلان؛ بند غرامة تأخير في العقد.',
        strategy: 'Transfer',
      },
      {
        id: 3,
        risk: 'تقلب سعر العملة',
        description: 'انخفاض الجنيه يرفع تكلفة المعدات المستوردة.',
        probability: 'High',
        costImpact: 2_700_000,
        timeImpact: '0 أسابيع',
        owner: 'مدير المالية',
        mitigation:
          'تثبيت الأسعار بالجنيه؛ دفع 50% مقدمًا؛ سقف للزيادة عند 5%.',
        strategy: 'Mitigate',
      },
      {
        id: 4,
        risk: 'ضعف أداء المقاول',
        description: 'قد يضعف أداء المقاول الرئيسي أو يتعثر.',
        probability: 'Medium',
        costImpact: 3_600_000,
        timeImpact: '8 أسابيع',
        owner: 'مدير المشروع',
        mitigation:
          'تأهيل مسبق للمقاولين؛ ضمان أداء 10%؛ احتجاز 5%؛ دفعات مرتبطة بالمعالم.',
        strategy: 'Mitigate',
      },
      {
        id: 5,
        risk: 'توسع النطاق',
        description: 'طلبات جديدة تغيّر النطاق وتؤثر على الوقت والتكلفة.',
        probability: 'High',
        costImpact: 1_300_000,
        timeImpact: '3 أسابيع',
        owner: 'مدير المشروع',
        mitigation:
          'تحكم رسمي بالتغيير — لا تغيير دون موافقة لجنة التوجيه.',
        strategy: 'Mitigate',
      },
      {
        id: 6,
        risk: 'تأخير ربط المرافق',
        description: 'تأخير في الربط بالشبكة / موافقة صافي القياس.',
        probability: 'Medium',
        costImpact: 450_000,
        timeImpact: '4 أسابيع',
        owner: 'مهندس الاستدامة',
        mitigation:
          'التقديم في الأسبوع 14؛ استخدام مولد مؤقت لاستمرار الاختبار.',
        strategy: 'Mitigate',
      },
      {
        id: 7,
        risk: 'ارتفاع أسعار المواد',
        description: 'ارتفاع أسعار الإسمنت والحديد.',
        probability: 'High',
        costImpact: 1_800_000,
        timeImpact: '0 أسابيع',
        owner: 'مدير المشتريات',
        mitigation:
          'شراء كميات كبيرة عند الترسية؛ عقود توريد بسعر ثابت؛ احتياطي 7%.',
        strategy: 'Share',
      },
      {
        id: 8,
        risk: 'حوادث السلامة',
        description: 'حوادث في الموقع (مثل السقوط من السطح / أعمال الطاقة الشمسية).',
        probability: 'Medium',
        costImpact: 1_000_000,
        timeImpact: '2 أسابيع',
        owner: 'مسؤول الجودة والصحة والسلامة',
        mitigation:
          'تأمين؛ تصريح عمل؛ حماية الحواف؛ جلسات توعية أسبوعية.',
        strategy: 'Mitigate',
      },
    ],
    summary: {
      totalCostImpact: 17_850_000,
      totalDelay: 43,
      totalMitigationCost: 3_300_000,
      goal: 'صفر مفاجآت. في الموعد. ضمن الميزانية.',
    },
  },
};

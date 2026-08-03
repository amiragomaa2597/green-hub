import { Localized } from '../i18n/language.types';

export interface ScopeRow {
  component: string;
  content: string;
}

export interface ScopeContent {
  eyebrow: string;
  title: string;
  speaker: string;
  hint: string;
  rows: ScopeRow[];
  lifeCycleTitle: string;
  lifeCycle: string[];
}

/** Deliverable 1 — Scope Statement (presented by Armia). */
export const SCOPE_CONTENT: Localized<ScopeContent> = {
  en: {
    eyebrow: 'Presented by Armia',
    title: 'Deliverable 1 — Scope Statement',
    speaker: 'Armia',
    hint: 'Tap any component to open its content.',
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
    title: 'التسليم 1 — بيان النطاق',
    speaker: 'أرميا',
    hint: 'اضغط على أي عنصر لفتح محتواه.',
    rows: [
      {
        component: 'الوصف',
        content:
          'مركز مجتمعي مستدام يعزّز الوعي البيئي والعيش الأخضر: منشأة تعمل بالطاقة المتجددة مع تقنيات ذكية وورش تعليمية وبرامج إعادة تدوير ومساحات عمل مشتركة وأنشطة مجتمعية.',
      },
      {
        component: 'المتطلبات',
        content:
          'نظام طاقة شمسية · إضاءة ذكية وتحكم HVAC · حصاد مياه الأمطار · مركز إعادة تدوير · نظام إدارة المبنى (BMS).',
      },
      {
        component: 'المخرجات',
        content:
          'ميثاق معتمد · تصاميم معمارية وهندسية · مبنى مستدام مكتمل · نظام طاقة متجددة · BMS ذكي · برنامج تدريب مجتمعي · وثائق التسليم النهائي.',
      },
      {
        component: 'الحدود',
        content:
          'داخل النطاق: تجهيز الموقع، إنشاء المبنى، الطاقة الشمسية، حصاد الأمطار، الإضاءة/HVAC الذكية، تنسيق نباتات محلية، مركز إعادة التدوير، قاعات التدريب، الافتتاح. خارج النطاق: مدن أخرى، سكني، تجزئة تجارية، التشغيل بعد التسليم.',
      },
      {
        component: 'الافتراضات',
        content:
          'تمويل معتمد · تصاريح في الموعد · مواد متاحة · مقاولون مهرة متاحون · طقس مستقر.',
      },
      {
        component: 'القيود',
        content:
          'ميزانية 1.2 مليون دولار · 40 أسبوعًا · معايير LEED · لوائح محلية · قيود الموقع.',
      },
      {
        component: 'الاستراتيجية',
        content:
          'دورة حياة يغلب عليها الشلال: بدء وتخطيط وتصميم وتوريد وإنشاء واختبار وتسليم متسلسل. يُسلَّم نظام إدارة المبنى الذكي (BMS) بشكل تزايدي عبر الإعداد والتكامل والاختبار والتشغيل. لا يُستخدم أجايل لأن النطاق والميزانية وجدول الـ40 أسبوعًا ثابتة.',
      },
      {
        component: 'معايير القبول',
        content:
          '≤ 40 أسبوعًا · انحراف ميزانية < 5% · شهادة LEED · أنظمة ذكية قيد التشغيل · رضا العميل ≥ 90% · صفر حوادث فقد وقت عمل.',
      },
      {
        component: 'تفصيل التكاليف',
        content:
          'تكاليف الأنشطة المباشرة: التصميم 60 ألف$ · الإنشاء 570 ألف$ · الطاقة الشمسية 120 ألف$ · الأنظمة الذكية/BMS 80 ألف$ · MEP 140 ألف$ · تنسيق الموقع 40 ألف$ · الأثاث 70 ألف$ = 1,080 ألف$. احتياطي الطوارئ: 78 ألف$. الاحتياطي الإداري: 42 ألف$. إجمالي الميزانية المعتمدة: 1,200 ألف$.',
      },
    ],
    lifeCycleTitle: 'اختيار دورة الحياة ومبرراتها',
    lifeCycle: [
      'الشلال هو دورة الحياة الحاكمة للأعمال المادية المتسلسلة لأن المتطلبات والموافقات وتسلسل الإنشاء ومعايير القبول والميزانية وتاريخ الإنجاز محددة مسبقًا.',
      'يقتصر التسليم التزايدي على نظام BMS: يُضبط الرصد الأساسي أولًا، ثم تكامل HVAC والإضاءة، وبيانات الطاقة المتجددة، ولوحات المعلومات، والتشغيل النهائي. كل زيادة تضيف وظيفة قابلة للاستخدام ضمن نطاق محدد مسبقًا.',
      'لا يُختار أجايل لأن المشروع لا يسمح بنطاق إجمالي متغير أو جدول زمني مفتوح. تُعالَج التغييرات المنضبطة عبر رقابة تغيير رسمية.',
    ],
  },
};

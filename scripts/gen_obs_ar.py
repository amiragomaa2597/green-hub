# -*- coding: utf-8 -*-
from pathlib import Path

root = Path(r"C:\Users\HP\OneDrive\Desktop\green-hub")
path = root / "src/app/core/content/obs.content.ts"
text = path.read_text(encoding="utf-8")

# Rename shared constants
text = text.replace("const OBS_ROLES: ObsRole[] =", "const OBS_ROLES_EN: ObsRole[] =", 1)
text = text.replace("const OBS_RESOURCES: ObsResourceRow[] =", "const OBS_RESOURCES_EN: ObsResourceRow[] =", 1)

ar_roles = r'''
const OBS_ROLES_AR: ObsRole[] = [
  {
    title: 'الراعي / مدير الحساب',
    seniority: 'مستوى تنفيذي',
    assignee: 'تعيين داخلي من الشركة',
    reportsTo: 'المجلس التنفيذي',
  },
  {
    title: 'مدير المشروع',
    seniority: 'الإدارة العليا',
    assignee: 'أرميا',
    reportsTo: 'الراعي',
  },
  {
    title: 'قائد التخطيط والجدولة',
    seniority: 'مستوى قيادي',
    assignee: 'إيهاب',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'مسؤول النطاق والمخاطر',
    seniority: 'مستوى قيادي',
    assignee: 'أميرة',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'مسؤول المالية والشراكات',
    seniority: 'مستوى قيادي',
    assignee: 'سلوى',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'مسؤول الجودة والحوكمة',
    seniority: 'مستوى قيادي',
    assignee: 'شهاب',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'مساعد الجودة والتدقيق',
    seniority: 'مستوى مبتدئ',
    assignee: 'مايكل',
    reportsTo: 'مسؤول الجودة والحوكمة',
  },
  {
    title: 'قائد المشتريات وسلسلة التوريد',
    seniority: 'مستوى قيادي',
    assignee: 'تعيين داخلي من الشركة',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'مهندس الاستدامة وBMS',
    seniority: 'مستوى أول',
    assignee: 'تعيين داخلي من الشركة',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'مسؤول الصحة والسلامة والبيئة',
    seniority: 'مستوى أول',
    assignee: 'تعيين داخلي من الشركة',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'مهندسو التصميم والموقع وMEP والمدني',
    seniority: 'مستوى أول',
    assignee: 'استشاريون / مقاول خارجي',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'مهندسو الموقع والميدان المبتدئون',
    seniority: 'مستوى مبتدئ',
    assignee: 'المقاول',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'مشرفو الموقع والملاحظون',
    seniority: 'مستوى إشرافي',
    assignee: 'المقاول الرئيسي الخارجي',
    reportsTo: 'مدير المشروع',
  },
  {
    title: 'الحرفيون المهرة ومشغّلو المعدات',
    seniority: 'قوة عمل ماهرة',
    assignee: 'المقاول الرئيسي الخارجي',
    reportsTo: 'مشرف الموقع',
  },
  {
    title: 'عمال الإنشاءات العامون',
    seniority: 'قوة عمل عامة',
    assignee: 'المقاول الرئيسي الخارجي',
    reportsTo: 'الملاحظون',
  },
];
'''

ar_resources = r'''
const OBS_RESOURCES_AR: ObsResourceRow[] = [
  {
    category: 'الإدارة',
    resource:
      'الراعي، مدير المشروع، الرقابة، المالية، المشتريات، الجودة/الصحة والسلامة، الاستدامة/BMS، منسق المجتمع',
    inside: '9',
    outside: '0',
    total: '9 أشخاص',
  },
  {
    category: 'التصميم والهندسة',
    resource: 'مهندسون معماريون ومدني/إنشائي وMEP وشمسي وتنسيق موقع',
    inside: '0',
    outside: '8',
    total: '8 أشخاص',
  },
  {
    category: 'الإشراف على الإنشاءات',
    resource: 'مدير إنشاءات ومهندسون أولون ومهندسو ومشرفو موقع',
    inside: '0',
    outside: '10',
    total: '10 أشخاص',
  },
  {
    category: 'القوى العاملة',
    resource: 'حرفيون مهرة ومشغّلو معدات وعمال عامون',
    inside: '0',
    outside: '32',
    total: '32 عاملًا في الذروة',
  },
  {
    category: 'المتخصصون',
    resource: 'تكامل BMS والاختبار/التشغيل ودعم LEED',
    inside: '1',
    outside: '5',
    total: '6 أشخاص',
  },
  {
    category: 'موارد المكتب',
    resource: 'أجهزة محمولة وبرمجيات إدارة مشاريع وضبط مستندات ومرافق اجتماعات',
    inside: '10 مجموعات',
    outside: '0',
    total: 'مملوكة للشركة',
  },
  {
    category: 'المعدات الثقيلة',
    resource:
      'حفّار، جرافة، رافعة متحركة، دمك، مضخة/خلاط خرسانة وشاحنات قلاب',
    inside: '0',
    outside: '8 وحدات',
    total: 'مستأجرة/مملوكة للمقاول',
  },
  {
    category: 'المعدات الفنية',
    resource: 'أطقم مسح وأدوات تركيب الطاقة الشمسية وأطقم اختبار MEP/BMS',
    inside: '2 مجموعات',
    outside: '9 مجموعات',
    total: '11 مجموعة',
  },
  {
    category: 'السلامة والأعمال المؤقتة',
    resource: 'أطقم PPE وسقالات وحماية الحواف وحواجز الموقع',
    inside: '0',
    outside: '40 PPE + أطقم موقع',
    total: 'يوفّرها المقاول',
  },
];
'''

marker = "export const OBS_CONTENT"
idx = text.find(marker)
if idx < 0:
    raise SystemExit("OBS_CONTENT not found")
text = text[:idx] + ar_roles + "\n" + ar_resources + "\n" + text[idx:]

old_export = """export const OBS_CONTENT: Localized<ObsContent> = {
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
"""

new_export = """export const OBS_CONTENT: Localized<ObsContent> = {
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
    roles: OBS_ROLES_EN,
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
    resources: OBS_RESOURCES_EN,
    resourceBasis:
      'Resource basis: internal staff govern and control the project; external consultants and contractors execute design, construction, specialist installation, and peak site labor. Counts are peak planning estimates and remain within the approved direct-cost baseline.',
  },
  ar: {
    eyebrow: 'التسليم 3',
    title: 'الهيكل التنظيمي (OBS)',
    speaker: 'أميرة',
    hint: 'اختر أي دور تنظيمي لاستعراض مستوى الأقدمية ومصدر التعيين وخط التقارير.',
    columns: {
      title: 'المسمى / الدور التنظيمي',
      seniority: 'مستوى الأقدمية',
      assignee: 'العضو المعيَّن / المصدر',
      reportsTo: 'يرفع تقاريره إلى',
    },
    roles: OBS_ROLES_AR,
    resourcesTitle: 'تفصيل المعدات والموارد',
    resourcesHint:
      'اختر فئة لموازنة التوريد داخل الشركة مقابل خارجها مقابل إجمالي التخطيط.',
    resourceColumns: {
      category: 'الفئة',
      resource: 'المورد / المعدة',
      inside: 'داخل الشركة',
      outside: 'خارج الشركة',
      total: 'الإجمالي / الأساس',
    },
    resources: OBS_RESOURCES_AR,
    resourceBasis:
      'أساس الموارد: الموظفون الداخليون يحكمون المشروع ويسيطرون عليه؛ والاستشاريون والمقاولون الخارجيون ينفّذون التصميم والإنشاء والتركيب المتخصص وعمالة الموقع في الذروة. الأعداد تقديرات تخطيط للذروة وتبقى ضمن خط الأساس المعتمد للتكاليف المباشرة.',
  },
};
"""

if old_export not in text:
    raise SystemExit("OBS_CONTENT export block not found exactly")
text = text.replace(old_export, new_export)
path.write_text(text, encoding="utf-8")
print("obs.content.ts updated")

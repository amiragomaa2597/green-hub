# -*- coding: utf-8 -*-
import re
from pathlib import Path

translations = {
  "Project Management": "إدارة المشروع",
  "Project Planning": "تخطيط المشروع",
  "Define Scope": "تحديد النطاق",
  "Objectives": "الأهداف",
  "Deliverables": "المخرجات",
  "Project Scheduling": "جدولة المشروع",
  "Activity List": "قائمة الأنشطة",
  "Duration Estimation": "تقدير المدة",
  "Timeline": "الجدول الزمني",
  "Project Budgeting": "ميزانية المشروع",
  "Cost Estimation": "تقدير التكلفة",
  "Budget Allocation": "توزيع الميزانية",
  "Cost Control": "مراقبة التكلفة",
  "Project Monitoring & Control": "مراقبة المشروع والتحكم",
  "Progress Tracking": "تتبع التقدم",
  "Risk Management": "إدارة المخاطر",
  "Reporting": "التقارير",
  "Project Closeout": "إغلاق المشروع",
  "Documentation": "التوثيق",
  "Lessons Learned": "الدروس المستفادة",
  "Closure Report": "تقرير الإغلاق",
  "Site Preparation": "تجهيز الموقع",
  "Land Survey & Analysis": "مسح وتحليل الأرض",
  "Topographic Survey": "المسح الطبوغرافي",
  "Soil Analysis": "تحليل التربة",
  "Site Assessment": "تقييم الموقع",
  "Site Clearing & Demolition": "تطهير الموقع والهدم",
  "Vegetation Removal": "إزالة النباتات",
  "Demolition": "الهدم",
  "Debris Disposal": "التخلص من الأنقاض",
  "Earthwork": "أعمال الحفر والتسوية",
  "Excavation": "الحفر",
  "Grading": "التسوية",
  "Compaction": "الدمك",
  "Foundation Work": "أعمال الأساسات",
  "Foundation Design": "تصميم الأساسات",
  "Formwork": "القوالب",
  "Concrete Pouring": "صب الخرسانة",
  "Waterproofing": "العزل المائي",
  "Site Utilities Preparation": "تجهيز مرافق الموقع",
  "Water Line": "خط المياه",
  "Sewage Line": "خط الصرف",
  "Electrical Conduit": "مجاري الكهرباء",
  "Construction": "الإنشاءات",
  "Building Structure": "هيكل المبنى",
  "Columns & Beams": "الأعمدة والكمرات",
  "Walls": "الجدران",
  "Slabs": "البلاطات",
  "Roofing": "الأسقف",
  "Roof Structure": "هيكل السقف",
  "Insulation": "العزل",
  "Roof Covering": "تغطية السقف",
  "Exterior Finishes": "التشطيبات الخارجية",
  "Wall Finishes": "تشطيبات الجدران",
  "Windows & Doors": "النوافذ والأبواب",
  "External Painting": "الدهان الخارجي",
  "Interior Finishes": "التشطيبات الداخلية",
  "Partitions": "القواطع",
  "Flooring": "الأرضيات",
  "Ceiling": "الأسقف المعلقة",
  "Painting": "الدهان",
  "MEP Rough-In": "أعمال MEP الأولية",
  "Electrical Wiring": "التوصيلات الكهربائية",
  "Plumbing": "السباكة",
  "HVAC Ducting": "مجاري التكييف",
  "Fixtures & Fittings": "التركيبات والتجهيزات",
  "Doors & Windows": "الأبواب والنوافذ",
  "Sanitary Fixtures": "التركيبات الصحية",
  "Electrical Fixtures": "التركيبات الكهربائية",
  "Green Systems": "الأنظمة الخضراء",
  "Solar Power System": "نظام الطاقة الشمسية",
  "System Design": "تصميم النظام",
  "Solar Panels Installation": "تركيب الألواح الشمسية",
  "Inverter & Wiring": "العاكس والتوصيلات",
  "Testing": "الاختبار",
  "Rainwater Harvesting": "حصاد مياه الأمطار",
  "Collection System": "نظام التجميع",
  "Storage Tank": "خزان التخزين",
  "Filtration System": "نظام الترشيح",
  "Distribution System": "نظام التوزيع",
  "Smart Lighting System": "نظام الإضاءة الذكية",
  "Lighting Design": "تصميم الإضاءة",
  "Installation": "التركيب",
  "Sensors Integration": "تكامل المستشعرات",
  "Smart HVAC System": "نظام التكييف الذكي",
  "HVAC Design": "تصميم التكييف",
  "Equipment Installation": "تركيب المعدات",
  "Controls Integration": "تكامل أنظمة التحكم",
  "Recycling & Waste Management": "إعادة التدوير وإدارة النفايات",
  "Recycling Center Setup": "إنشاء مركز إعادة التدوير",
  "Waste Segregation": "فرز النفايات",
  "Composting Area": "منطقة التحويل إلى سماد",
  "Building Management System (BMS)": "نظام إدارة المبنى (BMS)",
  "Hardware Installation": "تركيب الأجهزة",
  "Software Configuration": "تهيئة البرمجيات",
  "Integration & Testing": "التكامل والاختبار",
  "Landscaping & Outdoor Areas": "تنسيق الموقع والمناطق الخارجية",
  "Landscape Design": "تصميم تنسيق الموقع",
  "Layout Planning": "تخطيط المخطط",
  "Plant Selection": "اختيار النباتات",
  "Irrigation Design": "تصميم الري",
  "Outdoor Construction": "الإنشاءات الخارجية",
  "Pathways": "الممرات",
  "Seating Areas": "مناطق الجلوس",
  "Outdoor Structures": "الهياكل الخارجية",
  "Irrigation System": "نظام الري",
  "System Installation": "تركيب النظام",
  "Water Pumps": "مضخات المياه",
  "Controller Setup": "إعداد جهاز التحكم",
  "Green Spaces Development": "تطوير المساحات الخضراء",
  "Planting": "الزراعة",
  "Soil Improvement": "تحسين التربة",
  "Maintenance Plan": "خطة الصيانة",
  "Testing & Handover": "الاختبار والتسليم",
  "System Testing": "اختبار الأنظمة",
  "Electrical Testing": "الاختبار الكهربائي",
  "HVAC Testing": "اختبار التكييف",
  "Plumbing Testing": "اختبار السباكة",
  "Green Systems Testing": "اختبار الأنظمة الخضراء",
  "Final Inspection": "المعاينة النهائية",
  "Quality Check": "فحص الجودة",
  "Safety Compliance": "الامتثال للسلامة",
  "Punch List": "قائمة الملاحظات",
  "Client Handover": "تسليم العميل",
  "User Training": "تدريب المستخدمين",
  "Handover Certificate": "شهادة التسليم",
  "Post Handover Support": "الدعم بعد التسليم",
  "Warranty Support": "دعم الضمان",
  "Performance Review": "مراجعة الأداء",
}

root = Path(r"C:\Users\HP\OneDrive\Desktop\green-hub")
src = (root / "src/app/core/content/wbs.content.ts").read_text(encoding="utf-8")
m = re.search(r"const WBS_PACKAGES: WbsPackage\[\] = (\[[\s\S]*?\n\]);", src)
if not m:
    raise SystemExit("packages not found")
block = m.group(1)
missing = []

def repl_title(mo):
    t = mo.group(1)
    if t in translations:
        return f"title: '{translations[t]}'"
    missing.append(t)
    return mo.group(0)

ar_block = re.sub(r"title: '([^']+)'", repl_title, block)
print("missing", sorted(set(missing)))

# Update wbs.content.ts: rename shared packages to EN, add AR, wire locales
new_src = src.replace(
    "const WBS_PACKAGES: WbsPackage[] =",
    "const WBS_PACKAGES_EN: WbsPackage[] =",
    1,
)
# insert AR packages after EN closing
insert_at = new_src.find("];\n\nexport const WBS_CONTENT")
if insert_at < 0:
    raise SystemExit("insert point not found")
ar_decl = "\n\nconst WBS_PACKAGES_AR: WbsPackage[] = " + ar_block + ";\n"
new_src = new_src[:insert_at] + "];" + ar_decl + new_src[insert_at + 2 :]

new_src = new_src.replace(
    """  en: {
    eyebrow: 'Deliverable 2',
    title: 'Work Breakdown Structure',
    speaker: 'Michael',
    rootTitle: 'The Green Hub Project',
    hint: 'Select a Level-1 package, then open any Level-2 branch to see its work packages.',
    packages: WBS_PACKAGES,
  },
  ar: {
    eyebrow: 'التسليم 2',
    title: 'Work Breakdown Structure',
    speaker: 'Michael',
    rootTitle: 'The Green Hub Project',
    hint: 'اختر حزمة المستوى الأول، ثم افتح أي فرع من المستوى الثاني لعرض حزم العمل.',
    packages: WBS_PACKAGES,
  },
};""",
    """  en: {
    eyebrow: 'Deliverable 2',
    title: 'Work Breakdown Structure',
    speaker: 'Michael',
    rootTitle: 'The Green Hub Project',
    hint: 'Select a Level-1 package, then open any Level-2 branch to see its work packages.',
    packages: WBS_PACKAGES_EN,
  },
  ar: {
    eyebrow: 'التسليم 2',
    title: 'هيكل تقسيم العمل',
    speaker: 'مايكل',
    rootTitle: 'مشروع جرين هب',
    hint: 'اختر حزمة المستوى الأول، ثم افتح أي فرع من المستوى الثاني لعرض حزم العمل.',
    packages: WBS_PACKAGES_AR,
  },
};""",
)

(root / "src/app/core/content/wbs.content.ts").write_text(new_src, encoding="utf-8")
print("wbs.content.ts updated")

import { Localized } from '../i18n/language.types';
import { WbsPackage } from '../models/project.models';

export interface WbsContent {
  eyebrow: string;
  title: string;
  speaker: string;
  rootTitle: string;
  hint: string;
  packages: WbsPackage[];
}

const WBS_PACKAGES_EN: WbsPackage[] = [
  {
    id: 1,
    title: 'Project Management',
    color: '#166534',
    branches: [
      {
        code: '1.1',
        title: 'Project Planning',
        packages: [
          { code: '1.1.1', title: 'Define Scope' },
          { code: '1.1.2', title: 'Objectives' },
          { code: '1.1.3', title: 'Deliverables' },
        ],
      },
      {
        code: '1.2',
        title: 'Project Scheduling',
        packages: [
          { code: '1.2.1', title: 'Activity List' },
          { code: '1.2.2', title: 'Duration Estimation' },
          { code: '1.2.3', title: 'Timeline' },
        ],
      },
      {
        code: '1.3',
        title: 'Project Budgeting',
        packages: [
          { code: '1.3.1', title: 'Cost Estimation' },
          { code: '1.3.2', title: 'Budget Allocation' },
          { code: '1.3.3', title: 'Cost Control' },
        ],
      },
      {
        code: '1.4',
        title: 'Project Monitoring & Control',
        packages: [
          { code: '1.4.1', title: 'Progress Tracking' },
          { code: '1.4.2', title: 'Risk Management' },
          { code: '1.4.3', title: 'Reporting' },
        ],
      },
      {
        code: '1.5',
        title: 'Project Closeout',
        packages: [
          { code: '1.5.1', title: 'Documentation' },
          { code: '1.5.2', title: 'Lessons Learned' },
          { code: '1.5.3', title: 'Closure Report' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Site Preparation',
    color: '#1a7a4c',
    branches: [
      {
        code: '2.1',
        title: 'Land Survey & Analysis',
        packages: [
          { code: '2.1.1', title: 'Topographic Survey' },
          { code: '2.1.2', title: 'Soil Analysis' },
          { code: '2.1.3', title: 'Site Assessment' },
        ],
      },
      {
        code: '2.2',
        title: 'Site Clearing & Demolition',
        packages: [
          { code: '2.2.1', title: 'Vegetation Removal' },
          { code: '2.2.2', title: 'Demolition' },
          { code: '2.2.3', title: 'Debris Disposal' },
        ],
      },
      {
        code: '2.3',
        title: 'Earthwork',
        packages: [
          { code: '2.3.1', title: 'Excavation' },
          { code: '2.3.2', title: 'Grading' },
          { code: '2.3.3', title: 'Compaction' },
        ],
      },
      {
        code: '2.4',
        title: 'Foundation Work',
        packages: [
          { code: '2.4.1', title: 'Foundation Design' },
          { code: '2.4.2', title: 'Formwork' },
          { code: '2.4.3', title: 'Concrete Pouring' },
          { code: '2.4.4', title: 'Waterproofing' },
        ],
      },
      {
        code: '2.5',
        title: 'Site Utilities Preparation',
        packages: [
          { code: '2.5.1', title: 'Water Line' },
          { code: '2.5.2', title: 'Sewage Line' },
          { code: '2.5.3', title: 'Electrical Conduit' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Construction',
    color: '#22c55e',
    branches: [
      {
        code: '3.1',
        title: 'Building Structure',
        packages: [
          { code: '3.1.1', title: 'Columns & Beams' },
          { code: '3.1.2', title: 'Walls' },
          { code: '3.1.3', title: 'Slabs' },
        ],
      },
      {
        code: '3.2',
        title: 'Roofing',
        packages: [
          { code: '3.2.1', title: 'Roof Structure' },
          { code: '3.2.2', title: 'Insulation' },
          { code: '3.2.3', title: 'Roof Covering' },
        ],
      },
      {
        code: '3.3',
        title: 'Exterior Finishes',
        packages: [
          { code: '3.3.1', title: 'Wall Finishes' },
          { code: '3.3.2', title: 'Windows & Doors' },
          { code: '3.3.3', title: 'External Painting' },
        ],
      },
      {
        code: '3.4',
        title: 'Interior Finishes',
        packages: [
          { code: '3.4.1', title: 'Partitions' },
          { code: '3.4.2', title: 'Flooring' },
          { code: '3.4.3', title: 'Ceiling' },
          { code: '3.4.4', title: 'Painting' },
        ],
      },
      {
        code: '3.5',
        title: 'MEP Rough-In',
        packages: [
          { code: '3.5.1', title: 'Electrical Wiring' },
          { code: '3.5.2', title: 'Plumbing' },
          { code: '3.5.3', title: 'HVAC Ducting' },
        ],
      },
      {
        code: '3.6',
        title: 'Fixtures & Fittings',
        packages: [
          { code: '3.6.1', title: 'Doors & Windows' },
          { code: '3.6.2', title: 'Sanitary Fixtures' },
          { code: '3.6.3', title: 'Electrical Fixtures' },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Green Systems',
    color: '#84cc16',
    branches: [
      {
        code: '4.1',
        title: 'Solar Power System',
        packages: [
          { code: '4.1.1', title: 'System Design' },
          { code: '4.1.2', title: 'Solar Panels Installation' },
          { code: '4.1.3', title: 'Inverter & Wiring' },
          { code: '4.1.4', title: 'Testing' },
        ],
      },
      {
        code: '4.2',
        title: 'Rainwater Harvesting',
        packages: [
          { code: '4.2.1', title: 'Collection System' },
          { code: '4.2.2', title: 'Storage Tank' },
          { code: '4.2.3', title: 'Filtration System' },
          { code: '4.2.4', title: 'Distribution System' },
        ],
      },
      {
        code: '4.3',
        title: 'Smart Lighting System',
        packages: [
          { code: '4.3.1', title: 'Lighting Design' },
          { code: '4.3.2', title: 'Installation' },
          { code: '4.3.3', title: 'Sensors Integration' },
          { code: '4.3.4', title: 'Testing' },
        ],
      },
      {
        code: '4.4',
        title: 'Smart HVAC System',
        packages: [
          { code: '4.4.1', title: 'HVAC Design' },
          { code: '4.4.2', title: 'Equipment Installation' },
          { code: '4.4.3', title: 'Controls Integration' },
          { code: '4.4.4', title: 'Testing' },
        ],
      },
      {
        code: '4.5',
        title: 'Recycling & Waste Management',
        packages: [
          { code: '4.5.1', title: 'Recycling Center Setup' },
          { code: '4.5.2', title: 'Waste Segregation' },
          { code: '4.5.3', title: 'Composting Area' },
        ],
      },
      {
        code: '4.6',
        title: 'Building Management System (BMS)',
        packages: [
          { code: '4.6.1', title: 'System Design' },
          { code: '4.6.2', title: 'Hardware Installation' },
          { code: '4.6.3', title: 'Software Configuration' },
          { code: '4.6.4', title: 'Integration & Testing' },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Landscaping & Outdoor Areas',
    color: '#15803d',
    branches: [
      {
        code: '5.1',
        title: 'Landscape Design',
        packages: [
          { code: '5.1.1', title: 'Layout Planning' },
          { code: '5.1.2', title: 'Plant Selection' },
          { code: '5.1.3', title: 'Irrigation Design' },
        ],
      },
      {
        code: '5.2',
        title: 'Outdoor Construction',
        packages: [
          { code: '5.2.1', title: 'Pathways' },
          { code: '5.2.2', title: 'Seating Areas' },
          { code: '5.2.3', title: 'Outdoor Structures' },
        ],
      },
      {
        code: '5.3',
        title: 'Irrigation System',
        packages: [
          { code: '5.3.1', title: 'System Installation' },
          { code: '5.3.2', title: 'Water Pumps' },
          { code: '5.3.3', title: 'Controller Setup' },
        ],
      },
      {
        code: '5.4',
        title: 'Green Spaces Development',
        packages: [
          { code: '5.4.1', title: 'Planting' },
          { code: '5.4.2', title: 'Soil Improvement' },
          { code: '5.4.3', title: 'Maintenance Plan' },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Testing & Handover',
    color: '#0f2f22',
    branches: [
      {
        code: '6.1',
        title: 'System Testing',
        packages: [
          { code: '6.1.1', title: 'Electrical Testing' },
          { code: '6.1.2', title: 'HVAC Testing' },
          { code: '6.1.3', title: 'Plumbing Testing' },
          { code: '6.1.4', title: 'Green Systems Testing' },
        ],
      },
      {
        code: '6.2',
        title: 'Final Inspection',
        packages: [
          { code: '6.2.1', title: 'Quality Check' },
          { code: '6.2.2', title: 'Safety Compliance' },
          { code: '6.2.3', title: 'Punch List' },
        ],
      },
      {
        code: '6.3',
        title: 'Client Handover',
        packages: [
          { code: '6.3.1', title: 'User Training' },
          { code: '6.3.2', title: 'Documentation' },
          { code: '6.3.3', title: 'Handover Certificate' },
        ],
      },
      {
        code: '6.4',
        title: 'Post Handover Support',
        packages: [
          { code: '6.4.1', title: 'Maintenance Plan' },
          { code: '6.4.2', title: 'Warranty Support' },
          { code: '6.4.3', title: 'Performance Review' },
        ],
      },
    ],
  },
];

const WBS_PACKAGES_AR: WbsPackage[] = [
  {
    id: 1,
    title: 'إدارة المشروع',
    color: '#166534',
    branches: [
      {
        code: '1.1',
        title: 'تخطيط المشروع',
        packages: [
          { code: '1.1.1', title: 'تحديد النطاق' },
          { code: '1.1.2', title: 'الأهداف' },
          { code: '1.1.3', title: 'المخرجات' },
        ],
      },
      {
        code: '1.2',
        title: 'جدولة المشروع',
        packages: [
          { code: '1.2.1', title: 'قائمة الأنشطة' },
          { code: '1.2.2', title: 'تقدير المدة' },
          { code: '1.2.3', title: 'الجدول الزمني' },
        ],
      },
      {
        code: '1.3',
        title: 'ميزانية المشروع',
        packages: [
          { code: '1.3.1', title: 'تقدير التكلفة' },
          { code: '1.3.2', title: 'توزيع الميزانية' },
          { code: '1.3.3', title: 'مراقبة التكلفة' },
        ],
      },
      {
        code: '1.4',
        title: 'مراقبة المشروع والتحكم',
        packages: [
          { code: '1.4.1', title: 'تتبع التقدم' },
          { code: '1.4.2', title: 'إدارة المخاطر' },
          { code: '1.4.3', title: 'التقارير' },
        ],
      },
      {
        code: '1.5',
        title: 'إغلاق المشروع',
        packages: [
          { code: '1.5.1', title: 'التوثيق' },
          { code: '1.5.2', title: 'الدروس المستفادة' },
          { code: '1.5.3', title: 'تقرير الإغلاق' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'تجهيز الموقع',
    color: '#1a7a4c',
    branches: [
      {
        code: '2.1',
        title: 'مسح وتحليل الأرض',
        packages: [
          { code: '2.1.1', title: 'المسح الطبوغرافي' },
          { code: '2.1.2', title: 'تحليل التربة' },
          { code: '2.1.3', title: 'تقييم الموقع' },
        ],
      },
      {
        code: '2.2',
        title: 'تطهير الموقع والهدم',
        packages: [
          { code: '2.2.1', title: 'إزالة النباتات' },
          { code: '2.2.2', title: 'الهدم' },
          { code: '2.2.3', title: 'التخلص من الأنقاض' },
        ],
      },
      {
        code: '2.3',
        title: 'أعمال الحفر والتسوية',
        packages: [
          { code: '2.3.1', title: 'الحفر' },
          { code: '2.3.2', title: 'التسوية' },
          { code: '2.3.3', title: 'الدمك' },
        ],
      },
      {
        code: '2.4',
        title: 'أعمال الأساسات',
        packages: [
          { code: '2.4.1', title: 'تصميم الأساسات' },
          { code: '2.4.2', title: 'القوالب' },
          { code: '2.4.3', title: 'صب الخرسانة' },
          { code: '2.4.4', title: 'العزل المائي' },
        ],
      },
      {
        code: '2.5',
        title: 'تجهيز مرافق الموقع',
        packages: [
          { code: '2.5.1', title: 'خط المياه' },
          { code: '2.5.2', title: 'خط الصرف' },
          { code: '2.5.3', title: 'مجاري الكهرباء' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'الإنشاءات',
    color: '#22c55e',
    branches: [
      {
        code: '3.1',
        title: 'هيكل المبنى',
        packages: [
          { code: '3.1.1', title: 'الأعمدة والكمرات' },
          { code: '3.1.2', title: 'الجدران' },
          { code: '3.1.3', title: 'البلاطات' },
        ],
      },
      {
        code: '3.2',
        title: 'الأسقف',
        packages: [
          { code: '3.2.1', title: 'هيكل السقف' },
          { code: '3.2.2', title: 'العزل' },
          { code: '3.2.3', title: 'تغطية السقف' },
        ],
      },
      {
        code: '3.3',
        title: 'التشطيبات الخارجية',
        packages: [
          { code: '3.3.1', title: 'تشطيبات الجدران' },
          { code: '3.3.2', title: 'النوافذ والأبواب' },
          { code: '3.3.3', title: 'الدهان الخارجي' },
        ],
      },
      {
        code: '3.4',
        title: 'التشطيبات الداخلية',
        packages: [
          { code: '3.4.1', title: 'القواطع' },
          { code: '3.4.2', title: 'الأرضيات' },
          { code: '3.4.3', title: 'الأسقف المعلقة' },
          { code: '3.4.4', title: 'الدهان' },
        ],
      },
      {
        code: '3.5',
        title: 'أعمال MEP الأولية',
        packages: [
          { code: '3.5.1', title: 'التوصيلات الكهربائية' },
          { code: '3.5.2', title: 'السباكة' },
          { code: '3.5.3', title: 'مجاري التكييف' },
        ],
      },
      {
        code: '3.6',
        title: 'التركيبات والتجهيزات',
        packages: [
          { code: '3.6.1', title: 'الأبواب والنوافذ' },
          { code: '3.6.2', title: 'التركيبات الصحية' },
          { code: '3.6.3', title: 'التركيبات الكهربائية' },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'الأنظمة الخضراء',
    color: '#84cc16',
    branches: [
      {
        code: '4.1',
        title: 'نظام الطاقة الشمسية',
        packages: [
          { code: '4.1.1', title: 'تصميم النظام' },
          { code: '4.1.2', title: 'تركيب الألواح الشمسية' },
          { code: '4.1.3', title: 'العاكس والتوصيلات' },
          { code: '4.1.4', title: 'الاختبار' },
        ],
      },
      {
        code: '4.2',
        title: 'حصاد مياه الأمطار',
        packages: [
          { code: '4.2.1', title: 'نظام التجميع' },
          { code: '4.2.2', title: 'خزان التخزين' },
          { code: '4.2.3', title: 'نظام الترشيح' },
          { code: '4.2.4', title: 'نظام التوزيع' },
        ],
      },
      {
        code: '4.3',
        title: 'نظام الإضاءة الذكية',
        packages: [
          { code: '4.3.1', title: 'تصميم الإضاءة' },
          { code: '4.3.2', title: 'التركيب' },
          { code: '4.3.3', title: 'تكامل المستشعرات' },
          { code: '4.3.4', title: 'الاختبار' },
        ],
      },
      {
        code: '4.4',
        title: 'نظام التكييف الذكي',
        packages: [
          { code: '4.4.1', title: 'تصميم التكييف' },
          { code: '4.4.2', title: 'تركيب المعدات' },
          { code: '4.4.3', title: 'تكامل أنظمة التحكم' },
          { code: '4.4.4', title: 'الاختبار' },
        ],
      },
      {
        code: '4.5',
        title: 'إعادة التدوير وإدارة النفايات',
        packages: [
          { code: '4.5.1', title: 'إنشاء مركز إعادة التدوير' },
          { code: '4.5.2', title: 'فرز النفايات' },
          { code: '4.5.3', title: 'منطقة التحويل إلى سماد' },
        ],
      },
      {
        code: '4.6',
        title: 'نظام إدارة المبنى (BMS)',
        packages: [
          { code: '4.6.1', title: 'تصميم النظام' },
          { code: '4.6.2', title: 'تركيب الأجهزة' },
          { code: '4.6.3', title: 'تهيئة البرمجيات' },
          { code: '4.6.4', title: 'التكامل والاختبار' },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'تنسيق الموقع والمناطق الخارجية',
    color: '#15803d',
    branches: [
      {
        code: '5.1',
        title: 'تصميم تنسيق الموقع',
        packages: [
          { code: '5.1.1', title: 'تخطيط المخطط' },
          { code: '5.1.2', title: 'اختيار النباتات' },
          { code: '5.1.3', title: 'تصميم الري' },
        ],
      },
      {
        code: '5.2',
        title: 'الإنشاءات الخارجية',
        packages: [
          { code: '5.2.1', title: 'الممرات' },
          { code: '5.2.2', title: 'مناطق الجلوس' },
          { code: '5.2.3', title: 'الهياكل الخارجية' },
        ],
      },
      {
        code: '5.3',
        title: 'نظام الري',
        packages: [
          { code: '5.3.1', title: 'تركيب النظام' },
          { code: '5.3.2', title: 'مضخات المياه' },
          { code: '5.3.3', title: 'إعداد جهاز التحكم' },
        ],
      },
      {
        code: '5.4',
        title: 'تطوير المساحات الخضراء',
        packages: [
          { code: '5.4.1', title: 'الزراعة' },
          { code: '5.4.2', title: 'تحسين التربة' },
          { code: '5.4.3', title: 'خطة الصيانة' },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'الاختبار والتسليم',
    color: '#0f2f22',
    branches: [
      {
        code: '6.1',
        title: 'اختبار الأنظمة',
        packages: [
          { code: '6.1.1', title: 'الاختبار الكهربائي' },
          { code: '6.1.2', title: 'اختبار التكييف' },
          { code: '6.1.3', title: 'اختبار السباكة' },
          { code: '6.1.4', title: 'اختبار الأنظمة الخضراء' },
        ],
      },
      {
        code: '6.2',
        title: 'المعاينة النهائية',
        packages: [
          { code: '6.2.1', title: 'فحص الجودة' },
          { code: '6.2.2', title: 'الامتثال للسلامة' },
          { code: '6.2.3', title: 'قائمة الملاحظات' },
        ],
      },
      {
        code: '6.3',
        title: 'تسليم العميل',
        packages: [
          { code: '6.3.1', title: 'تدريب المستخدمين' },
          { code: '6.3.2', title: 'التوثيق' },
          { code: '6.3.3', title: 'شهادة التسليم' },
        ],
      },
      {
        code: '6.4',
        title: 'الدعم بعد التسليم',
        packages: [
          { code: '6.4.1', title: 'خطة الصيانة' },
          { code: '6.4.2', title: 'دعم الضمان' },
          { code: '6.4.3', title: 'مراجعة الأداء' },
        ],
      },
    ],
  },
];


export const WBS_CONTENT: Localized<WbsContent> = {
  en: {
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
};

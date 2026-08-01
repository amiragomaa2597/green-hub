import { Localized } from '../i18n/language.types';
import { FeatureBlock } from '../models/project.models';
import { DESIGN_BLOCK_IMAGES } from './visual.content';

export interface DesignContent {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: FeatureBlock[];
}

export const DESIGN_CONTENT: Localized<DesignContent> = {
  en: {
    eyebrow: 'Design & Systems',
    title: 'Site, Building & Sustainable Features',
    intro:
      'The Green Hub brings together responsible architecture, renewable systems, water conservation, and smart building technology in one community center.',
    blocks: [
      {
        title: 'Site & Location',
        description:
          'A community-centered site designed as a living model for greener neighborhoods, with landscaped grounds, shared outdoor space, and visible clean-energy infrastructure.',
        icon: 'map',
        image: DESIGN_BLOCK_IMAGES[0],
        points: [
          'Community-facing sustainable campus setting',
          'Landscaped grounds and outdoor gathering space',
          'Visible solar and wind clean-energy presence',
          'Designed to inspire surrounding communities',
        ],
      },
      {
        title: 'Building Design',
        description:
          'A modern, energy-efficient community center combining green construction, engineering, and environmentally responsible architecture.',
        icon: 'building',
        image: DESIGN_BLOCK_IMAGES[1],
        points: [
          'Sustainable building design and construction',
          'Energy-efficient envelope and interior finishes',
          'Living-wall and green facade integration',
          'MEP systems aligned with sustainability goals',
          'LEED-oriented environmentally responsible design',
        ],
      },
      {
        title: 'Sustainable Features',
        description:
          'Renewable energy and water systems reduce environmental impact while supporting long-term operations.',
        icon: 'leaf',
        image: DESIGN_BLOCK_IMAGES[2],
        points: [
          'Solar PV system installation and clean energy systems',
          'Backup energy systems and commissioning',
          'Rainwater harvesting',
          'Greywater recycling',
          'Reduced carbon footprint and resource conservation',
        ],
      },
      {
        title: 'Smart Technologies',
        description:
          'A Smart Building Management System (BMS) improves efficiency, automation, and sustainable operations.',
        icon: 'cpu',
        image: DESIGN_BLOCK_IMAGES[3],
        points: [
          'BMS system design and software development',
          'Integration with building and energy systems',
          'Smart controls supporting green operations',
          'Testing, commissioning, and staff/user training',
          'Performance monitoring after handover',
        ],
      },
    ],
  },
  ar: {
    eyebrow: 'التصميم والأنظمة',
    title: 'الموقع والمبنى وخصائص الاستدامة',
    intro:
      'يجمع جرين هب بين العمارة المسؤولة والأنظمة المتجددة وترشيد المياه وتقنية المباني الذكية في مركز مجتمعي واحد.',
    blocks: [
      {
        title: 'الموقع والمكان',
        description:
          'موقع مجتمعي مصمم كنموذج حي لأحياء أكثر خضرة، مع مساحات خضراء وأماكن خارجية مشتركة وبنية تحتية ظاهرة للطاقة النظيفة.',
        icon: 'map',
        image: DESIGN_BLOCK_IMAGES[0],
        points: [
          'حرم مستدام موجّه للمجتمع',
          'مساحات خضراء وأماكن تجمع خارجية',
          'حضور واضح للطاقة الشمسية وطاقة الرياح',
          'مصمم لإلهام المجتمعات المحيطة',
        ],
      },
      {
        title: 'تصميم المبنى',
        description:
          'مركز مجتمعي حديث وموفّر للطاقة يجمع البناء الأخضر والهندسة والعمارة المسؤولة بيئيًا.',
        icon: 'building',
        image: DESIGN_BLOCK_IMAGES[1],
        points: [
          'تصميم وبناء مستدام للمبنى',
          'غلاف داخلي وخارجي موفر للطاقة',
          'دمج الجدران الحية والواجهات الخضراء',
          'أنظمة MEP متوافقة مع أهداف الاستدامة',
          'تصميم موجّه لمعايير LEED',
        ],
      },
      {
        title: 'خصائص الاستدامة',
        description:
          'أنظمة الطاقة المتجددة والمياه تقلل الأثر البيئي وتدعم التشغيل طويل الأمد.',
        icon: 'leaf',
        image: DESIGN_BLOCK_IMAGES[2],
        points: [
          'تركيب أنظمة الطاقة الشمسية والطاقة النظيفة',
          'أنظمة طاقة احتياطية والتشغيل التجريبي',
          'حصاد مياه الأمطار',
          'إعادة تدوير المياه الرمادية',
          'خفض البصمة الكربونية والحفاظ على الموارد',
        ],
      },
      {
        title: 'التقنيات الذكية',
        description:
          'نظام إدارة المباني الذكي (BMS) يحسّن الكفاءة والأتمتة والتشغيل المستدام.',
        icon: 'cpu',
        image: DESIGN_BLOCK_IMAGES[3],
        points: [
          'تصميم نظام BMS وتطوير البرمجيات',
          'التكامل مع أنظمة المبنى والطاقة',
          'تحكم ذكي يدعم التشغيل الأخضر',
          'الاختبار والتشغيل وتدريب العاملين والمستخدمين',
          'مراقبة الأداء بعد التسليم',
        ],
      },
    ],
  },
};

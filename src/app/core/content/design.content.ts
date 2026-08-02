import { Localized } from '../i18n/language.types';
import { FeatureBlock } from '../models/project.models';
import { DESIGN_BLOCK_IMAGES } from './visual.content';

export interface DesignContent {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: FeatureBlock[];
}

/** Derived from Scope requirements — systems that define The Green Hub. */
export const DESIGN_CONTENT: Localized<DesignContent> = {
  en: {
    eyebrow: 'Systems & Features',
    title: 'Renewable, Smart & Responsible Design',
    intro:
      'The Scope Statement requires solar PV, smart lighting & HVAC, rainwater harvesting, a recycling center, and a Building Management System — all under LEED-oriented design.',
    blocks: [
      {
        title: 'Solar PV System',
        description:
          'Clean power generation that lets the community center run on renewable energy.',
        icon: 'solar',
        image: DESIGN_BLOCK_IMAGES[2],
        points: [
          'System design and panel installation',
          'Inverter, wiring, and commissioning',
          'Supports green operations after handover',
        ],
      },
      {
        title: 'Smart Lighting & HVAC',
        description:
          'Intelligent controls that cut waste while keeping spaces comfortable.',
        icon: 'cpu',
        image: DESIGN_BLOCK_IMAGES[3],
        points: [
          'Smart lighting design with sensor integration',
          'Smart HVAC design, equipment, and controls',
          'Testing before client handover',
        ],
      },
      {
        title: 'Water & Recycling',
        description:
          'Rainwater harvesting and on-site recycling reduce waste and resource demand.',
        icon: 'water',
        image: DESIGN_BLOCK_IMAGES[0],
        points: [
          'Collection, storage, filtration, and distribution',
          'Recycling center setup and waste segregation',
          'Composting area for organic streams',
        ],
      },
      {
        title: 'Building Management System',
        description:
          'A Smart BMS ties systems together for efficient, monitored operations.',
        icon: 'building',
        image: DESIGN_BLOCK_IMAGES[1],
        points: [
          'System design and hardware installation',
          'Software configuration and integration',
          'End-to-end testing with green systems',
        ],
      },
    ],
  },
  ar: {
    eyebrow: 'الأنظمة والخصائص',
    title: 'تصميم متجدد وذكي ومسؤول',
    intro:
      'يتطلب بيان النطاق طاقة شمسية وإضاءة وHVAC ذكية وحصاد أمطار ومركز إعادة تدوير ونظام إدارة مباني — ضمن تصميم موجّه لـ LEED.',
    blocks: [
      {
        title: 'نظام الطاقة الشمسية',
        description:
          'توليد طاقة نظيفة يتيح تشغيل المركز المجتمعي بالطاقة المتجددة.',
        icon: 'solar',
        image: DESIGN_BLOCK_IMAGES[2],
        points: [
          'تصميم النظام وتركيب الألواح',
          'المحولات والتمديدات والتشغيل',
          'يدعم التشغيل الأخضر بعد التسليم',
        ],
      },
      {
        title: 'إضاءة وHVAC ذكية',
        description:
          'تحكم ذكي يقلل الهدر ويحافظ على راحة المساحات.',
        icon: 'cpu',
        image: DESIGN_BLOCK_IMAGES[3],
        points: [
          'تصميم إضاءة ذكية مع حساسات',
          'تصميم HVAC والمعدات والتحكم',
          'اختبار قبل تسليم العميل',
        ],
      },
      {
        title: 'المياه وإعادة التدوير',
        description:
          'حصاد مياه الأمطار وإعادة التدوير في الموقع يقللان الهدر والطلب على الموارد.',
        icon: 'water',
        image: DESIGN_BLOCK_IMAGES[0],
        points: [
          'جمع وتخزين وترشيح وتوزيع',
          'إعداد مركز إعادة التدوير وفرز النفايات',
          'منطقة تسميد للتيارات العضوية',
        ],
      },
      {
        title: 'نظام إدارة المباني',
        description:
          'BMS ذكي يربط الأنظمة لتشغيل كفء ومراقب.',
        icon: 'building',
        image: DESIGN_BLOCK_IMAGES[1],
        points: [
          'تصميم النظام وتركيب العتاد',
          'تهيئة البرمجيات والتكامل',
          'اختبار شامل مع الأنظمة الخضراء',
        ],
      },
    ],
  },
};

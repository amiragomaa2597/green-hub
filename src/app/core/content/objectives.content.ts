import { Localized } from '../i18n/language.types';
import { Pillar } from '../models/project.models';
import { OBJECTIVE_IMAGES } from './visual.content';

export interface ObjectivesContent {
  eyebrow: string;
  title: string;
  intro: string;
  areas: Pillar[];
}

export const OBJECTIVES_CONTENT: Localized<ObjectivesContent> = {
  en: {
    eyebrow: 'Project Overview',
    title: 'Key Focus Areas',
    intro:
      'Use clean energy, smart systems, community services, and responsible design to create lasting environmental, social, and economic value.',
    areas: [
      {
        title: 'Renewable Energy',
        description:
          'Use clean energy sources to reduce dependence on traditional power.',
        icon: 'solar',
        image: OBJECTIVE_IMAGES[0],
      },
      {
        title: 'Smart Technology',
        description:
          'Integrate intelligent systems to improve efficiency and sustainability.',
        icon: 'cpu',
        image: OBJECTIVE_IMAGES[1],
      },
      {
        title: 'Community Impact',
        description:
          'Provide educational and social services that positively affect the surrounding community.',
        icon: 'users',
        image: OBJECTIVE_IMAGES[2],
      },
      {
        title: 'Sustainable Design',
        description:
          'Apply environmentally responsible architectural and engineering practices throughout the project.',
        icon: 'design',
        image: OBJECTIVE_IMAGES[3],
      },
    ],
  },
  ar: {
    eyebrow: 'نظرة عامة على المشروع',
    title: 'محاور التركيز الرئيسية',
    intro:
      'نستخدم الطاقة النظيفة والأنظمة الذكية والخدمات المجتمعية والتصميم المسؤول لخلق قيمة بيئية واجتماعية واقتصادية دائمة.',
    areas: [
      {
        title: 'الطاقة المتجددة',
        description: 'استخدام مصادر طاقة نظيفة لتقليل الاعتماد على الطاقة التقليدية.',
        icon: 'solar',
        image: OBJECTIVE_IMAGES[0],
      },
      {
        title: 'التقنية الذكية',
        description: 'دمج أنظمة ذكية لتحسين الكفاءة والاستدامة.',
        icon: 'cpu',
        image: OBJECTIVE_IMAGES[1],
      },
      {
        title: 'الأثر المجتمعي',
        description: 'تقديم خدمات تعليمية واجتماعية تؤثر إيجابًا في المجتمع المحيط.',
        icon: 'users',
        image: OBJECTIVE_IMAGES[2],
      },
      {
        title: 'التصميم المستدام',
        description:
          'تطبيق ممارسات معمارية وهندسية مسؤولة بيئيًا طوال دورة حياة المشروع.',
        icon: 'design',
        image: OBJECTIVE_IMAGES[3],
      },
    ],
  },
};

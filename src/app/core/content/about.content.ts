import { Localized } from '../i18n/language.types';
import { Pillar } from '../models/project.models';

export interface AboutContent {
  eyebrow: string;
  title: string;
  lead: string;
  body: string;
  quote: string;
  aboutHubTitle: string;
  aboutHubBody: string;
  overviewPillars: Pillar[];
}

/** Source: final.docx — About (letter-perfect). */
export const ABOUT_CONTENT: Localized<AboutContent> = {
  en: {
    eyebrow: 'Project Overview',
    title: 'About',
    lead:
      'The Green Hub is a community center powered entirely by renewable energy, combining construction, engineering, and sustainability. It exemplifies integrating project management with sustainable development, providing environmental, social, and economic benefits to the community.',
    body:
      'The project aims to inspire greener communities and create a lasting positive impact, while fostering a culture of green living.',
    quote:
      '“The Green Hub serves as a sustainable community center fueled by renewable energy and advanced smart technologies.”',
    aboutHubTitle: 'About The Green Hub',
    aboutHubBody:
      'The Green Hub serves as a sustainable community center fueled by renewable energy and advanced smart technologies. It combines environmental education, community services, and eco-friendly design to generate lasting social, environmental, and economic benefits.',
    overviewPillars: [
      {
        title: 'Renewable energy',
        description: 'Powered entirely by renewable energy.',
        icon: 'solar',
      },
      {
        title: 'Smart technologies',
        description: 'Advanced smart technologies for green operations.',
        icon: 'cpu',
      },
      {
        title: 'Environmentally Responsible Design',
        description: 'Eco-friendly design for lasting community value.',
        icon: 'leaf',
      },
    ],
  },
  ar: {
    eyebrow: 'نظرة عامة على المشروع',
    title: 'نبذة',
    lead:
      'جرين هب مركز مجتمعي يعمل بالكامل بالطاقة المتجددة، ويجمع بين البناء والهندسة والاستدامة. يجسّد دمج إدارة المشاريع مع التنمية المستدامة، ويقدّم منافع بيئية واجتماعية واقتصادية للمجتمع.',
    body:
      'يهدف المشروع إلى إلهام مجتمعات أكثر خضرة وخلق أثر إيجابي دائم، مع تعزيز ثقافة الحياة الخضراء.',
    quote:
      '«جرين هب مركز مجتمعي مستدام يغذّيه الطاقة المتجددة والتقنيات الذكية المتقدمة.»',
    aboutHubTitle: 'عن جرين هب',
    aboutHubBody:
      'جرين هب مركز مجتمعي مستدام يعمل بالطاقة المتجددة والتقنيات الذكية المتقدمة. يجمع بين التعليم البيئي والخدمات المجتمعية والتصميم الصديق للبيئة لخلق قيمة اجتماعية وبيئية واقتصادية دائمة.',
    overviewPillars: [
      {
        title: 'الطاقة المتجددة',
        description: 'تشغيل بالكامل بالطاقة المتجددة.',
        icon: 'solar',
      },
      {
        title: 'التقنيات الذكية',
        description: 'تقنيات ذكية متقدمة للتشغيل الأخضر.',
        icon: 'cpu',
      },
      {
        title: 'تصميم مسؤول بيئيًا',
        description: 'تصميم صديق للبيئة بقيمة مجتمعية دائمة.',
        icon: 'leaf',
      },
    ],
  },
};

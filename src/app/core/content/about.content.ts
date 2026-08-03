import { Localized } from '../i18n/language.types';
import { Pillar } from '../models/project.models';

export interface AboutContent {
  eyebrow: string;
  title: string;
  speaker: string;
  lead: string;
  body: string;
  hubBody: string;
  overviewPillars: Pillar[];
}

/** About (presented by Salwa). */
export const ABOUT_CONTENT: Localized<AboutContent> = {
  en: {
    eyebrow: 'Presented by Salwa',
    title: 'About',
    speaker: 'Salwa',
    lead:
      'The Green Hub is a community center powered entirely by renewable energy, combining construction, engineering, and sustainability. It exemplifies integrating project management with sustainable development, providing environmental, social, and economic benefits to the community.',
    body:
      'The project aims to inspire greener communities and create a lasting positive impact, while fostering a culture of green living.',
    hubBody:
      'The Green Hub serves as a sustainable community center fueled by renewable energy and advanced smart technologies. It combines environmental education, community services, and eco-friendly design to generate lasting social, environmental, and economic benefits.',
    overviewPillars: [
      { title: 'Renewable energy', description: '', icon: 'solar' },
      { title: 'Smart technologies', description: '', icon: 'cpu' },
      {
        title: 'Environmentally Responsible Design',
        description: '',
        icon: 'leaf',
      },
    ],
  },
  ar: {
    eyebrow: 'تقدّمها سلوى',
    title: 'نبذة',
    speaker: 'سلوى',
    lead:
      'جرين هب مركز مجتمعي يعمل بالكامل بالطاقة المتجددة، ويجمع بين الإنشاءات والهندسة والاستدامة. ويجسّد دمج إدارة المشاريع مع التنمية المستدامة، مقدّمًا فوائد بيئية واجتماعية واقتصادية للمجتمع.',
    body:
      'يهدف المشروع إلى إلهام مجتمعات أكثر خضرة وتحقيق أثر إيجابي دائم، مع تعزيز ثقافة العيش الأخضر.',
    hubBody:
      'يعمل جرين هب كمركز مجتمعي مستدام يعتمد على الطاقة المتجددة والتقنيات الذكية المتقدمة. ويجمع بين التوعية البيئية والخدمات المجتمعية والتصميم الصديق للبيئة لتحقيق فوائد اجتماعية وبيئية واقتصادية دائمة.',
    overviewPillars: [
      { title: 'الطاقة المتجددة', description: '', icon: 'solar' },
      { title: 'التقنيات الذكية', description: '', icon: 'cpu' },
      {
        title: 'تصميم مسؤول بيئيًا',
        description: '',
        icon: 'leaf',
      },
    ],
  },
};

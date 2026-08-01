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

export const ABOUT_CONTENT: Localized<AboutContent> = {
  en: {
    eyebrow: 'Project Overview',
    title: 'About',
    lead:
      'The Green Hub is a community center project that runs entirely on renewable energy and combines construction, engineering, and sustainability.',
    body:
      'It represents the successful integration of professional project management principles with sustainable development practices — delivering measurable environmental, social, and economic value by combining renewable energy, smart technologies, and environmentally responsible design to inspire greener communities and foster a culture of green living.',
    quote:
      '“The Green Hub is a living embodiment of how professional project management converges with a vision of environmental sustainability to achieve a real, lasting impact on the community.”',
    aboutHubTitle: 'About The Green Hub',
    aboutHubBody:
      'The Green Hub is a sustainable community center powered by renewable energy and smart technologies. It combines green construction, environmental education, and community services to create long-term environmental, social, and economic value.',
    overviewPillars: [
      {
        title: 'Renewable Energy',
        description: 'Solar PV, rainwater harvesting, smart systems',
        icon: 'solar',
      },
      {
        title: 'Community Impact',
        description: 'Education, coworking, training programs',
        icon: 'users',
      },
      {
        title: 'LEED Certified',
        description: 'Environmentally responsible design standard',
        icon: 'leaf',
      },
    ],
  },
  ar: {
    eyebrow: 'نظرة عامة على المشروع',
    title: 'نبذة',
    lead:
      'جرين هب مشروع لمركز مجتمعي يعمل بالكامل بالطاقة المتجددة ويجمع بين البناء والهندسة والاستدامة.',
    body:
      'يمثّل التكامل الناجح بين مبادئ إدارة المشاريع المهنية وممارسات التنمية المستدامة — ليقدّم قيمة بيئية واجتماعية واقتصادية قابلة للقياس عبر الجمع بين الطاقة المتجددة والتقنيات الذكية والتصميم المسؤول بيئيًا، بما يلهم مجتمعات أكثر خضرة ويعزّز ثقافة الحياة الخضراء.',
    quote:
      '«جرين هب تجسيد حي لالتقاء إدارة المشاريع المهنية برؤية الاستدامة البيئية لتحقيق أثر حقيقي ودائم على المجتمع.»',
    aboutHubTitle: 'عن جرين هب',
    aboutHubBody:
      'جرين هب مركز مجتمعي مستدام يعمل بالطاقة المتجددة والتقنيات الذكية. يجمع بين البناء الأخضر والتعليم البيئي والخدمات المجتمعية لخلق قيمة بيئية واجتماعية واقتصادية طويلة الأمد.',
    overviewPillars: [
      {
        title: 'الطاقة المتجددة',
        description: 'طاقة شمسية، حصاد مياه الأمطار، وأنظمة ذكية',
        icon: 'solar',
      },
      {
        title: 'الأثر المجتمعي',
        description: 'تعليم، مساحات عمل مشتركة، وبرامج تدريب',
        icon: 'users',
      },
      {
        title: 'معتمد LEED',
        description: 'معيار تصميم مسؤول بيئيًا',
        icon: 'leaf',
      },
    ],
  },
};

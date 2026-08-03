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

/** Letter-perfect from final document — About (presented by Salwa). */
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
};

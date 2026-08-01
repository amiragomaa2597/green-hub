import { Localized } from '../i18n/language.types';
import { ImpactArea } from '../models/project.models';
import { IMPACT_IMAGES } from './visual.content';

export interface ImpactContent {
  eyebrow: string;
  title: string;
  intro: string;
  highlight: string;
  areas: ImpactArea[];
}

export const IMPACT_CONTENT: Localized<ImpactContent> = {
  en: {
    eyebrow: 'Project Impact',
    title: 'Beyond Construction: Long-Term Sustainable Value',
    intro:
      'A practical impact on the environment, the community, and future operations.',
    highlight:
      'The Green Hub is designed to deliver long-term environmental, social, and operational benefits through sustainable technologies and community-focused initiatives.',
    areas: [
      {
        title: 'Reduce Carbon Emissions',
        description: 'Lower footprint through efficient design and clean energy.',
        icon: 'leaf',
        image: IMPACT_IMAGES[0],
      },
      {
        title: 'Renewable Energy',
        description: 'Solar PV and smart controls support green operations.',
        icon: 'bolt',
        image: IMPACT_IMAGES[1],
      },
      {
        title: 'Water Conservation',
        description: 'Rainwater harvesting and recycling reduce waste.',
        icon: 'water',
        image: IMPACT_IMAGES[2],
      },
      {
        title: 'Community Development',
        description: 'Education, training, and shared spaces create social value.',
        icon: 'building',
        image: IMPACT_IMAGES[3],
      },
      {
        title: 'Long-term Sustainability',
        description: 'A scalable model with lasting social and economic benefit.',
        icon: 'chart',
        image: IMPACT_IMAGES[4],
      },
    ],
  },
  ar: {
    eyebrow: 'أثر المشروع',
    title: 'ما بعد البناء: قيمة مستدامة طويلة الأمد',
    intro: 'أثر عملي على البيئة والمجتمع والتشغيل المستقبلي.',
    highlight:
      'صُمم جرين هب لتقديم منافع بيئية واجتماعية وتشغيلية طويلة الأمد عبر تقنيات مستدامة ومبادرات موجّهة للمجتمع.',
    areas: [
      {
        title: 'خفض انبعاثات الكربون',
        description: 'بصمة أقل عبر تصميم كفء وطاقة نظيفة.',
        icon: 'leaf',
        image: IMPACT_IMAGES[0],
      },
      {
        title: 'الطاقة المتجددة',
        description: 'الطاقة الشمسية والتحكم الذكي يدعمان التشغيل الأخضر.',
        icon: 'bolt',
        image: IMPACT_IMAGES[1],
      },
      {
        title: 'ترشيد المياه',
        description: 'حصاد مياه الأمطار وإعادة التدوير يقللان الهدر.',
        icon: 'water',
        image: IMPACT_IMAGES[2],
      },
      {
        title: 'تنمية المجتمع',
        description: 'التعليم والتدريب والمساحات المشتركة تخلق قيمة اجتماعية.',
        icon: 'building',
        image: IMPACT_IMAGES[3],
      },
      {
        title: 'استدامة طويلة الأمد',
        description: 'نموذج قابل للتوسع بمنافع اجتماعية واقتصادية دائمة.',
        icon: 'chart',
        image: IMPACT_IMAGES[4],
      },
    ],
  },
};

import { Localized } from '../i18n/language.types';
import { Takeaway } from '../models/project.models';

export interface ConclusionContent {
  eyebrow: string;
  title: string;
  quote: string;
  thanks: string;
  closing: string;
  takeaways: Takeaway[];
  summary: Array<{
    label: string;
    value: string;
    icon: string;
    count?: number;
    suffix?: string;
  }>;
}

export const CONCLUSION_CONTENT: Localized<ConclusionContent> = {
  en: {
    eyebrow: 'Conclusion & Final Remarks',
    title: 'A Successful Project. A Sustainable Legacy.',
    quote:
      'The Green Hub is a living example of how professional project management and sustainable innovation come together to create lasting value for people and the planet.',
    thanks:
      'Thank you to our team, stakeholders, partners, and supporters for their dedication and collaboration in making The Green Hub a reality.',
    closing: 'Together, we build a better future.',
    takeaways: [
      {
        title: 'On Time',
        description:
          'Delivered within the 40-week timeline with a structured plan and effective execution.',
        icon: 'clock',
      },
      {
        title: 'On Budget',
        description:
          'Completed within the approved budget of 10,800,000 EGP with strong cost control.',
        icon: 'coins',
      },
      {
        title: 'High Quality',
        description:
          'Achieved the highest quality standards in construction, systems, and sustainability.',
        icon: 'award',
      },
      {
        title: 'Community Impact',
        description:
          'Delivering long-term environmental, social, and economic value to the community.',
        icon: 'users',
      },
      {
        title: 'Sustainable Future',
        description:
          'Built to operate efficiently, reduce environmental impact, and inspire a greener tomorrow.',
        icon: 'recycle',
      },
    ],
    summary: [
      {
        label: 'Project Duration',
        value: '40 Weeks',
        icon: 'calendar',
        count: 40,
        suffix: ' Weeks',
      },
      {
        label: 'Total Budget',
        value: '10,800,000 EGP',
        icon: 'coins',
        count: 10_800_000,
        suffix: ' EGP',
      },
      {
        label: 'Quality',
        value: 'High Quality Standards',
        icon: 'award',
      },
      {
        label: 'Community',
        value: 'Positive Community Impact',
        icon: 'users',
      },
      {
        label: 'Date',
        value: 'July 6, 2026',
        icon: 'calendar',
      },
    ],
  },
  ar: {
    eyebrow: 'الخاتمة والملاحظات الختامية',
    title: 'مشروع ناجح. إرث مستدام.',
    quote:
      'جرين هب مثال حي على التقاء إدارة المشاريع المهنية والابتكار المستدام لخلق قيمة دائمة للناس والكوكب.',
    thanks:
      'شكرًا لفريقنا وأصحاب المصلحة وشركائنا وداعمينا على تفانيهم وتعاونهم في جعل جرين هب حقيقة.',
    closing: 'معًا نبني مستقبلًا أفضل.',
    takeaways: [
      {
        title: 'في الموعد',
        description:
          'تم التسليم ضمن جدول 40 أسبوعًا بخطة منظمة وتنفيذ فعّال.',
        icon: 'clock',
      },
      {
        title: 'ضمن الميزانية',
        description:
          'اكتمل ضمن الميزانية المعتمدة 10,800,000 جنيه مع رقابة قوية على التكاليف.',
        icon: 'coins',
      },
      {
        title: 'جودة عالية',
        description:
          'تحقق أعلى معايير الجودة في الإنشاءات والأنظمة والاستدامة.',
        icon: 'award',
      },
      {
        title: 'أثر مجتمعي',
        description:
          'تقديم قيمة بيئية واجتماعية واقتصادية طويلة الأمد للمجتمع.',
        icon: 'users',
      },
      {
        title: 'مستقبل مستدام',
        description:
          'بُني ليعمل بكفاءة ويقلل الأثر البيئي ويلهم غدًا أكثر خضرة.',
        icon: 'recycle',
      },
    ],
    summary: [
      {
        label: 'مدة المشروع',
        value: '40 أسبوعًا',
        icon: 'calendar',
        count: 40,
        suffix: ' أسابيع',
      },
      {
        label: 'إجمالي الميزانية',
        value: '10,800,000 جنيه',
        icon: 'coins',
        count: 10_800_000,
        suffix: ' جنيه',
      },
      {
        label: 'الجودة',
        value: 'معايير جودة عالية',
        icon: 'award',
      },
      {
        label: 'المجتمع',
        value: 'أثر مجتمعي إيجابي',
        icon: 'users',
      },
      {
        label: 'التاريخ',
        value: '6 يوليو 2026',
        icon: 'calendar',
      },
    ],
  },
};

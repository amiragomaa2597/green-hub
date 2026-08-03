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
      'The Green Hub is a living embodiment of how professional project management converges with environmental sustainability to achieve a real, lasting impact on the community.',
    thanks:
      'Thank you to our team, stakeholders, partners, and supporters for their dedication and collaboration in making The Green Hub a reality.',
    closing: 'Together for a greener tomorrow.',
    takeaways: [
      {
        title: 'On Time',
        description:
          'Delivered within the 40-week timeline with sequential phases and overlapping construction branches.',
        icon: 'clock',
      },
      {
        title: 'On Budget',
        description:
          'Completed within the approved $1.2M / 60M EGP budget with PMBOK reserves and cost baseline control.',
        icon: 'coins',
      },
      {
        title: 'LEED Quality',
        description:
          'Acceptance criteria target LEED certification, smart systems online, and zero lost-time accidents.',
        icon: 'award',
      },
      {
        title: 'Community Impact',
        description:
          'Education, training, coworking, and shared spaces create lasting social value.',
        icon: 'users',
      },
      {
        title: 'Sustainable Future',
        description:
          'A scalable model powered by renewable energy, water conservation, and smart controls.',
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
        value: '$1,200,000 · 60,000,000 EGP',
        icon: 'coins',
      },
      {
        label: 'Quality',
        value: 'LEED-oriented standards',
        icon: 'award',
      },
      {
        label: 'Community',
        value: 'Positive community impact',
        icon: 'users',
      },
      {
        label: 'Date',
        value: 'July 6, 2025',
        icon: 'calendar',
      },
    ],
  },
  ar: {
    eyebrow: 'الخاتمة والملاحظات الختامية',
    title: 'مشروع ناجح. إرث مستدام.',
    quote:
      'جرين هب تجسيد حي لالتقاء إدارة المشاريع المهنية برؤية الاستدامة البيئية لتحقيق أثر حقيقي ودائم على المجتمع.',
    thanks:
      'شكرًا لفريقنا وأصحاب المصلحة وشركائنا وداعمينا على تفانيهم وتعاونهم في جعل جرين هب حقيقة.',
    closing: 'معًا من أجل غدٍ أكثر خضرة.',
    takeaways: [
      {
        title: 'في الموعد',
        description:
          'تم التسليم ضمن جدول 40 أسبوعًا بمراحل متتابعة وفروع إنشاء متداخلة.',
        icon: 'clock',
      },
      {
        title: 'ضمن الميزانية',
        description:
          'اكتمل ضمن الميزانية المعتمدة 1.2 مليون دولار / 60 مليون جنيه باحتياطيات PMBOK ورقابة خط الأساس.',
        icon: 'coins',
      },
      {
        title: 'جودة LEED',
        description:
          'معايير القبول تستهدف اعتماد LEED وتشغيل الأنظمة الذكية وصفر حوادث توقف.',
        icon: 'award',
      },
      {
        title: 'أثر مجتمعي',
        description:
          'التعليم والتدريب والعمل المشترك والمساحات المشتركة تخلق قيمة اجتماعية دائمة.',
        icon: 'users',
      },
      {
        title: 'مستقبل مستدام',
        description:
          'نموذج قابل للتوسع بالطاقة المتجددة وترشيد المياه والتحكم الذكي.',
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
        value: '$1,200,000 · 60,000,000 جنيه',
        icon: 'coins',
      },
      {
        label: 'الجودة',
        value: 'معايير موجّهة لـ LEED',
        icon: 'award',
      },
      {
        label: 'المجتمع',
        value: 'أثر مجتمعي إيجابي',
        icon: 'users',
      },
      {
        label: 'التاريخ',
        value: '6 يوليو 2025',
        icon: 'calendar',
      },
    ],
  },
};

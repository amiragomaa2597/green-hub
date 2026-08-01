import { Localized } from '../i18n/language.types';

export type SectionHooks = {
  about: string;
  objectives: string;
  team: string;
  scope: string;
  design: string;
  schedule: string;
  budget: string;
  stakeholders: string;
  risks: string;
  impact: string;
  conclusion: string;
  presentation: string;
};

/** Engagement hooks shown under each section title. */
export const SECTION_HOOKS: Localized<SectionHooks> = {
  en: {
    about: 'What if a community center could run entirely on clean energy?',
    objectives:
      'Can one project deliver environmental, social, and economic value together?',
    team: 'Who turns a green vision into a delivered project?',
    scope: 'What are we building — and what are we intentionally leaving out?',
    design: 'How can architecture heal the planet and serve the community?',
    schedule: 'How do you deliver a sustainable campus in just 40 weeks?',
    budget: 'Where does every pound go in a 10.8M EGP green project?',
    stakeholders: 'Who holds the power — and who holds the interest?',
    risks: 'What could stop The Green Hub — and how do we stop it first?',
    impact: 'What lasting value remains after construction ends?',
    conclusion: 'What does a successful sustainable project look like?',
    presentation: 'Want the full story behind The Green Hub?',
  },
  ar: {
    about: 'ماذا لو عمل مركز مجتمعي بالكامل على الطاقة النظيفة؟',
    objectives: 'هل يمكن لمشروع واحد أن يحقق قيمة بيئية واجتماعية واقتصادية معًا؟',
    team: 'من يحوّل الرؤية الخضراء إلى مشروع مُسلَّم؟',
    scope: 'ماذا نبني — وما الذي نستبعده عمدًا؟',
    design: 'كيف يمكن للعمارة أن تشفي الكوكب وتخدم المجتمع؟',
    schedule: 'كيف نسلّم حرمًا مستدامًا في 40 أسبوعًا فقط؟',
    budget: 'أين يذهب كل جنيه في مشروع أخضر بميزانية 10.8 مليون؟',
    stakeholders: 'من يملك السلطة — ومن يملك المصلحة؟',
    risks: 'ما الذي قد يوقف جرين هب — وكيف نوقفه نحن أولًا؟',
    impact: 'ما القيمة الباقية بعد انتهاء البناء؟',
    conclusion: 'كيف يبدو مشروع مستدام ناجح؟',
    presentation: 'هل تريد القصة الكاملة وراء جرين هب؟',
  },
};

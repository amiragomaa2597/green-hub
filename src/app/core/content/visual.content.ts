import { Localized } from '../i18n/language.types';

export interface SectionVisual {
  src: string;
  alt: string;
  caption: string;
}

export type SectionVisualKey =
  | 'objectives'
  | 'team'
  | 'scope'
  | 'schedule'
  | 'budget'
  | 'stakeholders'
  | 'risks'
  | 'impact'
  | 'conclusion'
  | 'presentation';

/** Stock photography for section visuals — each path used once across the site. */
export const SECTION_VISUALS: Localized<Record<SectionVisualKey, SectionVisual>> =
  {
    en: {
      objectives: {
        src: 'assets/images/sections/campus-living-wall.jpg',
        alt: 'Sustainable modern building with greenery',
        caption:
          'Clean energy, smart systems, community value, and responsible design.',
      },
      team: {
        src: 'assets/images/sections/team-collaboration.jpg',
        alt: 'Project team collaborating around a table',
        caption:
          'A coordinated team delivering The Green Hub from planning to handover.',
      },
      scope: {
        src: 'assets/images/sections/scope-construction.jpg',
        alt: 'Sustainable construction site and architectural plans',
        caption: 'What we deliver — and what stays outside the project boundary.',
      },
      schedule: {
        src: 'assets/images/sections/schedule-planning.jpg',
        alt: 'Project planning workspace with timeline materials',
        caption:
          'Forty weeks from initiation to handover and post-project monitoring.',
      },
      budget: {
        src: 'assets/images/sections/budget-finance.jpg',
        alt: 'Financial planning documents and calculator',
        caption:
          'A clear cost structure for construction, systems, and community programs.',
      },
      stakeholders: {
        src: 'assets/images/sections/stakeholders-meeting.jpg',
        alt: 'Stakeholders collaborating in a workshop',
        caption: 'Engage the right people with the right strategy at every stage.',
      },
      risks: {
        src: 'assets/images/sections/risks-safety.jpg',
        alt: 'Construction professionals reviewing site safety',
        caption:
          'Identify, assess, and mitigate — zero surprises, on time, on budget.',
      },
      impact: {
        src: 'assets/images/sections/campus-garden.jpg',
        alt: 'Lush green courtyard garden in a sustainable campus',
        caption: 'Beyond construction: lasting environmental and social value.',
      },
      conclusion: {
        src: 'assets/images/sections/conclusion-future.jpg',
        alt: 'Solar panels in a green landscape under open sky',
        caption: 'A successful project. A sustainable legacy.',
      },
      presentation: {
        src: 'assets/images/sections/presentation-docs.jpg',
        alt: 'Notebook and study materials for a formal presentation',
        caption: 'Download the full MBA final presentation (PowerPoint).',
      },
    },
    ar: {
      objectives: {
        src: 'assets/images/sections/campus-living-wall.jpg',
        alt: 'مبنى حديث مستدام مع مساحات خضراء',
        caption: 'طاقة نظيفة وأنظمة ذكية وقيمة مجتمعية وتصميم مسؤول.',
      },
      team: {
        src: 'assets/images/sections/team-collaboration.jpg',
        alt: 'فريق المشروع يتعاون حول طاولة',
        caption: 'فريق منسّق يسلّم جرين هب من التخطيط حتى التسليم.',
      },
      scope: {
        src: 'assets/images/sections/scope-construction.jpg',
        alt: 'موقع بناء مستدام ومخططات معمارية',
        caption: 'ما نسلّمه — وما يبقى خارج حدود المشروع.',
      },
      schedule: {
        src: 'assets/images/sections/schedule-planning.jpg',
        alt: 'مساحة تخطيط مشروع مع مواد الجدول الزمني',
        caption: 'أربعون أسبوعًا من البدء إلى التسليم والمراقبة بعد المشروع.',
      },
      budget: {
        src: 'assets/images/sections/budget-finance.jpg',
        alt: 'مستندات تخطيط مالي وآلة حاسبة',
        caption: 'هيكل تكلفة واضح للإنشاءات والأنظمة والبرامج المجتمعية.',
      },
      stakeholders: {
        src: 'assets/images/sections/stakeholders-meeting.jpg',
        alt: 'أصحاب مصلحة يتعاونون في ورشة عمل',
        caption: 'التواصل مع الأشخاص المناسبين بالاستراتيجية المناسبة في كل مرحلة.',
      },
      risks: {
        src: 'assets/images/sections/risks-safety.jpg',
        alt: 'مهنيون في الإنشاءات يراجعون سلامة الموقع',
        caption: 'حدّد، قيّم، عالج — صفر مفاجآت، في الموعد، ضمن الميزانية.',
      },
      impact: {
        src: 'assets/images/sections/campus-garden.jpg',
        alt: 'حديقة فناء خضراء في حرم مستدام',
        caption: 'ما بعد البناء: قيمة بيئية واجتماعية دائمة.',
      },
      conclusion: {
        src: 'assets/images/sections/conclusion-future.jpg',
        alt: 'ألواح شمسية في مشهد أخضر تحت سماء مفتوحة',
        caption: 'مشروع ناجح. إرث مستدام.',
      },
      presentation: {
        src: 'assets/images/sections/presentation-docs.jpg',
        alt: 'دفتر ملاحظات ومواد دراسة لعرض رسمي',
        caption: 'حمّل ملف العرض النهائي لـ MBA بصيغة PowerPoint.',
      },
    },
  };

/** Unique image per objective card. */
export const OBJECTIVE_IMAGES = [
  'assets/images/sections/obj-solar.jpg',
  'assets/images/sections/obj-smart.jpg',
  'assets/images/sections/obj-community.jpg',
  'assets/images/sections/obj-design.jpg',
] as const;

/** Unique image per scope deliverable — no overlap with objectives/impact. */
export const DELIVERABLE_IMAGES = [
  'assets/images/sections/deliverable-building.jpg',
  'assets/images/sections/campus-sunset.jpg',
  'assets/images/sections/campus-glass.jpg',
  'assets/images/sections/campus-courtyard.jpg',
  'assets/images/sections/deliverable-education.jpg',
  'assets/images/sections/campus-dusk.jpg',
] as const;

/** Unique image per impact card. */
export const IMPACT_IMAGES = [
  'assets/images/sections/impact-carbon.jpg',
  'assets/images/sections/impact-energy.jpg',
  'assets/images/sections/impact-water.jpg',
  'assets/images/sections/impact-people.jpg',
  'assets/images/sections/impact-growth.jpg',
] as const;

/** Unique image per design block. */
export const DESIGN_BLOCK_IMAGES = [
  'assets/images/sections/design-site.jpg',
  'assets/images/sections/design-building.jpg',
  'assets/images/sections/design-features.jpg',
  'assets/images/sections/campus-facade.jpg',
] as const;

/** Design section banner — not reused elsewhere. */
export const DESIGN_BANNER_IMAGE = 'assets/images/sections/campus-aerial.jpg';

/** Thank-you background — not reused elsewhere. */
export const THANK_YOU_IMAGE = 'assets/images/hub-courtyard.png';

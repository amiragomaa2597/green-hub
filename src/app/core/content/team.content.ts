import { Localized } from '../i18n/language.types';
import { TeamMember } from '../models/project.models';

export interface TeamContent {
  eyebrow: string;
  title: string;
  speaker: string;
  advisor: TeamMember;
  members: Array<TeamMember & { icon: string }>;
  thankYouNames: string[];
}

/** Team section (presented by Salwa). */
export const TEAM_CONTENT: Localized<TeamContent> = {
  en: {
    eyebrow: 'Presented by Salwa',
    title: 'Team',
    speaker: 'Salwa',
    advisor: {
      name: 'Dr. Ehab EL Nezamy',
      role: 'Instructor / Advisor',
    },
    members: [
      { name: 'Armia', role: 'Project Manager', icon: 'person' },
      { name: 'Ehab', role: 'Planning & Scheduling Lead', icon: 'calendar' },
      { name: 'Amira', role: 'Scope & Risk Officer', icon: 'target' },
      { name: 'Salwa', role: 'Finance & Partners Officer', icon: 'coins' },
      { name: 'Shehab', role: 'QA & Governance Officer', icon: 'shield' },
      { name: 'Michael', role: 'QA & Audit Assistant', icon: 'person' },
    ],
    thankYouNames: ['Armia', 'Ehab', 'Amira', 'Salwa', 'Shehab', 'Michael'],
  },
  ar: {
    eyebrow: 'تقدّمها سلوى',
    title: 'الفريق',
    speaker: 'سلوى',
    advisor: {
      name: 'د. إيهاب النظامي',
      role: 'المشرف / المستشار',
    },
    members: [
      { name: 'أرميا', role: 'مدير المشروع', icon: 'person' },
      { name: 'إيهاب', role: 'قائد التخطيط والجدولة', icon: 'calendar' },
      { name: 'أميرة', role: 'مسؤولة النطاق والمخاطر', icon: 'target' },
      { name: 'سلوى', role: 'مسؤولة المالية والشراكات', icon: 'coins' },
      { name: 'شهاب', role: 'مسؤول الجودة والحوكمة', icon: 'shield' },
      { name: 'مايكل', role: 'مساعد الجودة والتدقيق', icon: 'person' },
    ],
    thankYouNames: ['أرميا', 'إيهاب', 'أميرة', 'سلوى', 'شهاب', 'مايكل'],
  },
};

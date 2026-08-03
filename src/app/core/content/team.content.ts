import { Localized } from '../i18n/language.types';
import { TeamMember } from '../models/project.models';

export interface ObsRole {
  name: string;
  role: string;
  icon: string;
}

export interface TeamContent {
  eyebrow: string;
  title: string;
  advisor: TeamMember;
  members: Array<TeamMember & { icon: string }>;
  obsNote: string;
  obsPeers: ObsRole[];
  thankYouNames: string[];
  pmName: string;
}

/** Source: final.docx — Deliverable 3 OBS named members (letter-perfect). */
export const TEAM_CONTENT: Localized<TeamContent> = {
  en: {
    eyebrow: 'Governance',
    title: 'Project Team',
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
    obsNote:
      'OBS assigned members from the final document — PM at the top; equal lead level for peer officers.',
    obsPeers: [
      { name: 'Ehab', role: 'Planning & Scheduling Lead', icon: 'calendar' },
      { name: 'Amira', role: 'Scope & Risk Officer', icon: 'target' },
      { name: 'Salwa', role: 'Finance & Partners Officer', icon: 'coins' },
      { name: 'Shehab', role: 'QA & Governance Officer', icon: 'shield' },
      { name: 'Michael', role: 'QA & Audit Assistant', icon: 'person' },
    ],
    thankYouNames: ['Armia', 'Ehab', 'Amira', 'Salwa', 'Shehab', 'Michael'],
    pmName: 'Armia',
  },
  ar: {
    eyebrow: 'الحوكمة',
    title: 'فريق المشروع',
    advisor: {
      name: 'د. إيهاب النظامي',
      role: 'المشرف / المستشار',
    },
    members: [
      { name: 'أرميا', role: 'مدير المشروع', icon: 'person' },
      { name: 'إيهاب', role: 'مسؤول التخطيط والجدولة', icon: 'calendar' },
      { name: 'أميرة', role: 'مسؤولة النطاق والمخاطر', icon: 'target' },
      { name: 'سلوى', role: 'مسؤولة المالية والشركاء', icon: 'coins' },
      { name: 'شهاب', role: 'مسؤول الجودة والحوكمة', icon: 'shield' },
      { name: 'مايكل', role: 'مساعد الجودة والمراجعة', icon: 'person' },
    ],
    obsNote:
      'أعضاء OBS المعيّنون من المستند النهائي — مدير المشروع في الأعلى؛ مستوى قيادة متساوٍ للزملاء.',
    obsPeers: [
      { name: 'إيهاب', role: 'مسؤول التخطيط والجدولة', icon: 'calendar' },
      { name: 'أميرة', role: 'مسؤولة النطاق والمخاطر', icon: 'target' },
      { name: 'سلوى', role: 'مسؤولة المالية والشركاء', icon: 'coins' },
      { name: 'شهاب', role: 'مسؤول الجودة والحوكمة', icon: 'shield' },
      { name: 'مايكل', role: 'مساعد الجودة والمراجعة', icon: 'person' },
    ],
    thankYouNames: ['أرميا', 'إيهاب', 'أميرة', 'سلوى', 'شهاب', 'مايكل'],
    pmName: 'أرميا',
  },
};

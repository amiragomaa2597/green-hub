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

/** Source of truth: Governance + OBS slides — PM at top, equal-authority peers. */
export const TEAM_CONTENT: Localized<TeamContent> = {
  en: {
    eyebrow: 'Governance',
    title: 'Project Team',
    advisor: {
      name: 'Dr. Ehab EL Nezamy',
      role: 'Instructor / Advisor',
    },
    members: [
      { name: 'Armia Kamal', role: 'Project Manager', icon: 'person' },
      { name: 'Mohamed Ahab', role: 'Planning & Scheduling Lead', icon: 'calendar' },
      { name: 'Michael Atef', role: 'Scope & Risk Officer', icon: 'target' },
      { name: 'Salwa Michel', role: 'Finance & Partners Officer', icon: 'coins' },
      { name: 'Shehab Badr', role: 'QA & Governance Officer', icon: 'shield' },
      { name: 'Amira Gomaa', role: 'QA & Audit Assistant', icon: 'person' },
    ],
    obsNote:
      'Per the instructor’s rule: PM at the top, same horizontal level = same authority, titles with names.',
    obsPeers: [
      { name: 'Mohamed Ahab', role: 'Planning & Scheduling Lead', icon: 'calendar' },
      { name: 'Michael Atef', role: 'Scope & Risk Officer', icon: 'target' },
      { name: 'Salwa Michel', role: 'Finance & Partners Officer', icon: 'coins' },
      { name: 'Shehab Badr', role: 'QA & Governance Officer', icon: 'shield' },
      { name: 'Amira Gomaa', role: 'QA & Audit Assistant', icon: 'person' },
    ],
    thankYouNames: [
      'Armia Kamal',
      'Mohamed Ahab',
      'Michael Atef',
      'Salwa Michel',
      'Shehab Badr',
      'Amira Gomaa',
    ],
    pmName: 'Armia Kamal',
  },
  ar: {
    eyebrow: 'الحوكمة',
    title: 'فريق المشروع',
    advisor: {
      name: 'د. إيهاب النظامي',
      role: 'المشرف / المستشار',
    },
    members: [
      { name: 'أرميا كمال', role: 'مدير المشروع', icon: 'person' },
      { name: 'محمد إيهاب', role: 'مسؤول التخطيط والجدولة', icon: 'calendar' },
      { name: 'مايكل عاطف', role: 'مسؤول النطاق والمخاطر', icon: 'target' },
      { name: 'سلوى ميشيل', role: 'مسؤولة المالية والشركاء', icon: 'coins' },
      { name: 'شهاب بدر', role: 'مسؤول الجودة والحوكمة', icon: 'shield' },
      { name: 'أميرة جمعة', role: 'مساعدة الجودة والمراجعة', icon: 'person' },
    ],
    obsNote:
      'وفق قاعدة المشرف: مدير المشروع في الأعلى، ونفس المستوى الأفقي = نفس السلطة، مع العناوين والأسماء.',
    obsPeers: [
      { name: 'محمد إيهاب', role: 'مسؤول التخطيط والجدولة', icon: 'calendar' },
      { name: 'مايكل عاطف', role: 'مسؤول النطاق والمخاطر', icon: 'target' },
      { name: 'سلوى ميشيل', role: 'مسؤولة المالية والشركاء', icon: 'coins' },
      { name: 'شهاب بدر', role: 'مسؤول الجودة والحوكمة', icon: 'shield' },
      { name: 'أميرة جمعة', role: 'مساعدة الجودة والمراجعة', icon: 'person' },
    ],
    thankYouNames: [
      'أرميا كمال',
      'محمد إيهاب',
      'مايكل عاطف',
      'سلوى ميشيل',
      'شهاب بدر',
      'أميرة جمعة',
    ],
    pmName: 'أرميا كمال',
  },
};

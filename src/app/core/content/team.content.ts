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

/** Source of truth: OBS slide — Project Manager + equal-authority peers. */
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
      { name: 'Salwa Michel', role: 'Finance & Partners Officer', icon: 'coins' },
      { name: 'Shehab Badr', role: 'QA & Governance Officer', icon: 'shield' },
      { name: 'Michael Atef', role: 'QA & Audit Assistant', icon: 'person' },
      { name: 'Amira Gomaa', role: 'Scope & Risk Officer', icon: 'target' },
    ],
    obsNote:
      'OBS shows the authority map once: Project Manager at the top, and every role on the same row shares equal authority — role and name, nothing repeated.',
    obsPeers: [
      { name: 'Mohamed Ahab', role: 'Planning & Scheduling Lead', icon: 'calendar' },
      { name: 'Salwa Michel', role: 'Finance & Partners Officer', icon: 'coins' },
      { name: 'Shehab Badr', role: 'QA & Governance Officer', icon: 'shield' },
      { name: 'Michael Atef', role: 'QA & Audit Assistant', icon: 'person' },
      { name: 'Amira Gomaa', role: 'Scope & Risk Officer', icon: 'target' },
    ],
    thankYouNames: [
      'Armia Kamal',
      'Mohamed Ahab',
      'Salwa Michel',
      'Shehab Badr',
      'Michael Atef',
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
      { name: 'سلوى ميشيل', role: 'مسؤولة المالية والشركاء', icon: 'coins' },
      { name: 'شهاب بدر', role: 'مسؤول الجودة والحوكمة', icon: 'shield' },
      { name: 'مايكل عاطف', role: 'مساعد الجودة والمراجعة', icon: 'person' },
      { name: 'أميرة جمعة', role: 'مسؤولة النطاق والمخاطر', icon: 'target' },
    ],
    obsNote:
      'OBS يعرض خريطة السلطة مرة واحدة: مدير المشروع في الأعلى، وكل دور في الصف نفسه يملك سلطة متساوية — الدور والاسم فقط، بدون تكرار.',
    obsPeers: [
      { name: 'محمد إيهاب', role: 'مسؤول التخطيط والجدولة', icon: 'calendar' },
      { name: 'سلوى ميشيل', role: 'مسؤولة المالية والشركاء', icon: 'coins' },
      { name: 'شهاب بدر', role: 'مسؤول الجودة والحوكمة', icon: 'shield' },
      { name: 'مايكل عاطف', role: 'مساعد الجودة والمراجعة', icon: 'person' },
      { name: 'أميرة جمعة', role: 'مسؤولة النطاق والمخاطر', icon: 'target' },
    ],
    thankYouNames: [
      'أرميا كمال',
      'محمد إيهاب',
      'سلوى ميشيل',
      'شهاب بدر',
      'مايكل عاطف',
      'أميرة جمعة',
    ],
    pmName: 'أرميا كمال',
  },
};

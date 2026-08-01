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

/** Source of truth: Governance → Project Team (plan lock). */
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
      { name: 'Ata Mohamed', role: 'Planning & Scheduling Lead', icon: 'calendar' },
      { name: 'Ahab', role: 'Scope & Risk Officer', icon: 'target' },
      { name: 'Shehab Badr', role: 'QA & Audit Assistant', icon: 'bag' },
      { name: 'Salwa Michel', role: 'Finance & Partners Officer', icon: 'coins' },
      { name: 'Michael Atef', role: 'Construction Lead', icon: 'building' },
      { name: 'Amira Gomaa', role: 'QA & Governance Officer', icon: 'shield' },
    ],
    obsNote:
      'OBS shows the authority map once: Project Manager at the top, and every role on the same row shares equal authority — role and name, nothing repeated.',
    obsPeers: [
      { name: 'Ata Mohamed', role: 'Planning & Scheduling Lead', icon: 'calendar' },
      { name: 'Ahab', role: 'Scope & Risk Officer', icon: 'target' },
      { name: 'Salwa Michel', role: 'Finance & Partners Officer', icon: 'coins' },
      { name: 'Shehab Badr', role: 'QA & Audit Assistant', icon: 'bag' },
      { name: 'Michael Atef', role: 'Construction Lead', icon: 'building' },
      { name: 'Amira Gomaa', role: 'QA & Governance Officer', icon: 'shield' },
    ],
    thankYouNames: [
      'Armia Kamal',
      'Ata Mohamed',
      'Ahab',
      'Shehab Badr',
      'Salwa Michel',
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
      { name: 'عطا محمد', role: 'مسؤول التخطيط والجدولة', icon: 'calendar' },
      { name: 'إيهاب', role: 'مسؤول النطاق والمخاطر', icon: 'target' },
      { name: 'شهاب بدر', role: 'مساعد الجودة والمراجعة', icon: 'bag' },
      { name: 'سلوى ميشيل', role: 'مسؤولة المالية والشركاء', icon: 'coins' },
      { name: 'مايكل عاطف', role: 'مسؤول الإنشاءات', icon: 'building' },
      { name: 'أميرة جمعة', role: 'مسؤولة الجودة والحوكمة', icon: 'shield' },
    ],
    obsNote:
      'OBS يعرض خريطة السلطة مرة واحدة: مدير المشروع في الأعلى، وكل دور في الصف نفسه يملك سلطة متساوية — الدور والاسم فقط، بدون تكرار.',
    obsPeers: [
      { name: 'عطا محمد', role: 'مسؤول التخطيط والجدولة', icon: 'calendar' },
      { name: 'إيهاب', role: 'مسؤول النطاق والمخاطر', icon: 'target' },
      { name: 'سلوى ميشيل', role: 'مسؤولة المالية والشركاء', icon: 'coins' },
      { name: 'شهاب بدر', role: 'مساعد الجودة والمراجعة', icon: 'bag' },
      { name: 'مايكل عاطف', role: 'مسؤول الإنشاءات', icon: 'building' },
      { name: 'أميرة جمعة', role: 'مسؤولة الجودة والحوكمة', icon: 'shield' },
    ],
    thankYouNames: [
      'أرميا كمال',
      'عطا محمد',
      'إيهاب',
      'شهاب بدر',
      'سلوى ميشيل',
      'مايكل عاطف',
      'أميرة جمعة',
    ],
    pmName: 'أرميا كمال',
  },
};

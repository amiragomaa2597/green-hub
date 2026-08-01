import { Localized } from '../i18n/language.types';
import { TeamMember } from '../models/project.models';

export interface TeamContent {
  eyebrow: string;
  title: string;
  advisor: TeamMember;
  members: Array<TeamMember & { icon: string }>;
  obsNote: string;
  obsPeers: Array<TeamMember & { icon: string }>;
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
      "Per the instructor's rule: PM at the top, same horizontal level = same authority, titles not names.",
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
      'وفق قاعدة المشرف: مدير المشروع في الأعلى، والمستوى الأفقي الواحد يعني سلطة متساوية، والعناوين لا الأسماء.',
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

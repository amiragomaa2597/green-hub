import { TeamMember } from '../models/project.models';

/** Source of truth: Governance → Project Team (plan lock). */
export const TEAM_CONTENT = {
  eyebrow: 'Governance',
  title: 'Project Team',
  advisor: {
    name: 'Dr. Ehab EL Nezamy',
    role: 'Instructor / Advisor',
  } satisfies TeamMember,
  members: [
    { name: 'Armia Kamal', role: 'Project Manager', icon: 'person' },
    { name: 'Ata Mohamed', role: 'Planning & Scheduling Lead', icon: 'calendar' },
    { name: 'Ahab', role: 'Scope & Risk Officer', icon: 'target' },
    { name: 'Shehab Badr', role: 'QA & Audit Assistant', icon: 'bag' },
    { name: 'Salwa Michel', role: 'Finance & Partners Officer', icon: 'coins' },
    { name: 'Michael Atef', role: 'Construction Lead', icon: 'building' },
    { name: 'Amira Gomaa', role: 'QA & Governance Officer', icon: 'shield' },
  ] as Array<TeamMember & { icon: string }>,
  obsNote:
    "Per the instructor's rule: PM at the top, same horizontal level = same authority, titles not names.",
  obsPeers: [
    { name: 'Ata Mohamed', role: 'Planning & Scheduling Lead', icon: 'calendar' },
    { name: 'Ahab', role: 'Scope & Risk Officer', icon: 'target' },
    { name: 'Salwa Michel', role: 'Finance & Partners Officer', icon: 'coins' },
    { name: 'Shehab Badr', role: 'QA & Audit Assistant', icon: 'bag' },
    { name: 'Michael Atef', role: 'Construction Lead', icon: 'building' },
    { name: 'Amira Gomaa', role: 'QA & Governance Officer', icon: 'shield' },
  ] as Array<TeamMember & { icon: string }>,
  thankYouNames: [
    'Armia Kamal',
    'Ata Mohamed',
    'Ahab',
    'Shehab Badr',
    'Salwa Michel',
    'Michael Atef',
    'Amira Gomaa',
  ],
};

import { NavItem, Pillar } from '../models/project.models';

export const PROJECT_META = {
  brand: 'The Green Hub',
  brandCaps: 'THE GREEN HUB',
  subtitle: 'A Smart & Sustainable Community Center',
  tagline: 'Together for a Greener Tomorrow',
  project: 'MBA Team Final Project — Group 5',
  program: 'RBC MBA — Project Management',
  instructor: 'Dr. Ehab EL Nezamy',
  date: 'July 6, 2026',
  duration: '40 Weeks',
  startDate: '1 January 2026',
  finishDate: '2 October 2026',
  totalBudget: 10_800_000,
  totalBudgetLabel: '10,800,000 EGP',
  logo: 'assets/brand/logo.png',
  heroImage: 'assets/images/hub-plaza.png',
  secondaryImage: 'assets/images/hub-courtyard.png',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Objectives', href: '#objectives' },
  { label: 'Team', href: '#team' },
  { label: 'Scope', href: '#scope' },
  { label: 'Design', href: '#design' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Budget', href: '#budget' },
  { label: 'Stakeholders', href: '#stakeholders' },
  { label: 'Risks', href: '#risks' },
  { label: 'Impact', href: '#impact' },
  { label: 'Conclusion', href: '#conclusion' },
  { label: 'Presentation', href: '#presentation' },
];

export const CORE_PILLARS: Pillar[] = [
  {
    title: 'Renewable Energy',
    description: 'Solar PV, rainwater harvesting, smart systems',
    icon: 'solar',
  },
  {
    title: 'Smart Technology',
    description: 'Intelligent systems that improve efficiency and sustainability.',
    icon: 'cpu',
  },
  {
    title: 'Community Impact',
    description: 'Education, coworking, training programs',
    icon: 'users',
  },
];

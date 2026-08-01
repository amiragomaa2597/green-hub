import { Deliverable } from '../models/project.models';
import { DELIVERABLE_IMAGES } from './visual.content';

export const SCOPE_CONTENT = {
  eyebrow: 'Scope Statement',
  title: 'Project Scope',
  statement:
    'Design and deliver The Green Hub, a sustainable community center powered by renewable energy and smart technologies.',
  includes: [
    'Sustainable building design and construction',
    'Renewable energy systems',
    'Smart Building Management System (BMS)',
    'Community and educational facilities',
    'Testing, commissioning, and project handover',
  ],
  excludes: [
    'Future building expansions',
    'Operations and facility management after handover',
  ],
  deliverables: [
    {
      title: 'Sustainable Facility',
      description: 'Modern, energy-efficient community center.',
      icon: 'building',
      image: DELIVERABLE_IMAGES[0],
    },
    {
      title: 'Renewable Energy',
      description: 'Integrated solar PV and clean energy systems.',
      icon: 'solar',
      image: DELIVERABLE_IMAGES[1],
    },
    {
      title: 'Smart Technology',
      description: 'Smart building management and automation.',
      icon: 'cpu',
      image: DELIVERABLE_IMAGES[2],
    },
    {
      title: 'Community Services',
      description: 'Spaces and programs for community development.',
      icon: 'users',
      image: DELIVERABLE_IMAGES[3],
    },
    {
      title: 'Education & Awareness',
      description: 'Environmental education and training programs.',
      icon: 'grad',
      image: DELIVERABLE_IMAGES[4],
    },
    {
      title: 'Environmental Impact',
      description: 'Reduced carbon footprint and resource conservation.',
      icon: 'leaf',
      image: DELIVERABLE_IMAGES[5],
    },
  ] satisfies Deliverable[],
};

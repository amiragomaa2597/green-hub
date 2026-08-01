import { Pillar } from '../models/project.models';
import { OBJECTIVE_IMAGES } from './visual.content';

export const OBJECTIVES_CONTENT = {
  eyebrow: 'Project Overview',
  title: 'Key Focus Areas',
  intro:
    'Use clean energy, smart systems, community services, and responsible design to create lasting environmental, social, and economic value.',
  areas: [
    {
      title: 'Renewable Energy',
      description:
        'Use clean energy sources to reduce dependence on traditional power.',
      icon: 'solar',
      image: OBJECTIVE_IMAGES[0],
    },
    {
      title: 'Smart Technology',
      description:
        'Integrate intelligent systems to improve efficiency and sustainability.',
      icon: 'cpu',
      image: OBJECTIVE_IMAGES[1],
    },
    {
      title: 'Community Impact',
      description:
        'Provide educational and social services that positively affect the surrounding community.',
      icon: 'users',
      image: OBJECTIVE_IMAGES[2],
    },
    {
      title: 'Sustainable Design',
      description:
        'Apply environmentally responsible architectural and engineering practices throughout the project.',
      icon: 'design',
      image: OBJECTIVE_IMAGES[3],
    },
  ] satisfies Pillar[],
};

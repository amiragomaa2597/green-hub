import { ImpactArea } from '../models/project.models';
import { IMPACT_IMAGES } from './visual.content';

export const IMPACT_CONTENT = {
  eyebrow: 'Project Impact',
  title: 'Beyond Construction: Long-Term Sustainable Value',
  intro:
    'A practical impact on the environment, the community, and future operations.',
  highlight:
    'The Green Hub is designed to deliver long-term environmental, social, and operational benefits through sustainable technologies and community-focused initiatives.',
  areas: [
    {
      title: 'Reduce Carbon Emissions',
      description: 'Lower footprint through efficient design and clean energy.',
      icon: 'leaf',
      image: IMPACT_IMAGES[0],
    },
    {
      title: 'Renewable Energy',
      description: 'Solar PV and smart controls support green operations.',
      icon: 'bolt',
      image: IMPACT_IMAGES[1],
    },
    {
      title: 'Water Conservation',
      description: 'Rainwater harvesting and recycling reduce waste.',
      icon: 'water',
      image: IMPACT_IMAGES[2],
    },
    {
      title: 'Community Development',
      description: 'Education, training, and shared spaces create social value.',
      icon: 'building',
      image: IMPACT_IMAGES[3],
    },
    {
      title: 'Long-term Sustainability',
      description: 'A scalable model with lasting social and economic benefit.',
      icon: 'chart',
      image: IMPACT_IMAGES[4],
    },
  ] satisfies ImpactArea[],
};

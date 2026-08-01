import { FeatureBlock } from '../models/project.models';
import { DESIGN_BLOCK_IMAGES } from './visual.content';

export const DESIGN_CONTENT = {
  eyebrow: 'Design & Systems',
  title: 'Site, Building & Sustainable Features',
  intro:
    'The Green Hub brings together responsible architecture, renewable systems, water conservation, and smart building technology in one community center.',
  blocks: [
    {
      title: 'Site & Location',
      description:
        'A community-centered site designed as a living model for greener neighborhoods, with landscaped grounds, shared outdoor space, and visible clean-energy infrastructure.',
      icon: 'map',
      image: DESIGN_BLOCK_IMAGES[0],
      points: [
        'Community-facing sustainable campus setting',
        'Landscaped grounds and outdoor gathering space',
        'Visible solar and wind clean-energy presence',
        'Designed to inspire surrounding communities',
      ],
    },
    {
      title: 'Building Design',
      description:
        'A modern, energy-efficient community center combining green construction, engineering, and environmentally responsible architecture.',
      icon: 'building',
      image: DESIGN_BLOCK_IMAGES[1],
      points: [
        'Sustainable building design and construction',
        'Energy-efficient envelope and interior finishes',
        'Living-wall and green facade integration',
        'MEP systems aligned with sustainability goals',
        'LEED-oriented environmentally responsible design',
      ],
    },
    {
      title: 'Sustainable Features',
      description:
        'Renewable energy and water systems reduce environmental impact while supporting long-term operations.',
      icon: 'leaf',
      image: DESIGN_BLOCK_IMAGES[2],
      points: [
        'Solar PV system installation and clean energy systems',
        'Backup energy systems and commissioning',
        'Rainwater harvesting',
        'Greywater recycling',
        'Reduced carbon footprint and resource conservation',
      ],
    },
    {
      title: 'Smart Technologies',
      description:
        'A Smart Building Management System (BMS) improves efficiency, automation, and sustainable operations.',
      icon: 'cpu',
      image: DESIGN_BLOCK_IMAGES[3],
      points: [
        'BMS system design and software development',
        'Integration with building and energy systems',
        'Smart controls supporting green operations',
        'Testing, commissioning, and staff/user training',
        'Performance monitoring after handover',
      ],
    },
  ] satisfies FeatureBlock[],
};

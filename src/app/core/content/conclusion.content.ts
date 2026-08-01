import { Takeaway } from '../models/project.models';

export const CONCLUSION_CONTENT = {
  eyebrow: 'Conclusion & Final Remarks',
  title: 'A Successful Project. A Sustainable Legacy.',
  quote:
    'The Green Hub is a living example of how professional project management and sustainable innovation come together to create lasting value for people and the planet.',
  thanks:
    'Thank you to our team, stakeholders, partners, and supporters for their dedication and collaboration in making The Green Hub a reality.',
  closing: 'Together, we build a better future.',
  takeaways: [
    {
      title: 'On Time',
      description:
        'Delivered within the 40-week timeline with a structured plan and effective execution.',
      icon: 'clock',
    },
    {
      title: 'On Budget',
      description:
        'Completed within the approved budget of 10,800,000 EGP with strong cost control.',
      icon: 'coins',
    },
    {
      title: 'High Quality',
      description:
        'Achieved the highest quality standards in construction, systems, and sustainability.',
      icon: 'award',
    },
    {
      title: 'Community Impact',
      description:
        'Delivering long-term environmental, social, and economic value to the community.',
      icon: 'users',
    },
    {
      title: 'Sustainable Future',
      description:
        'Built to operate efficiently, reduce environmental impact, and inspire a greener tomorrow.',
      icon: 'recycle',
    },
  ] satisfies Takeaway[],
  summary: [
    {
      label: 'Project Duration',
      value: '40 Weeks',
      icon: 'calendar',
      count: 40,
      suffix: ' Weeks',
    },
    {
      label: 'Total Budget',
      value: '10,800,000 EGP',
      icon: 'coins',
      count: 10_800_000,
      suffix: ' EGP',
    },
    {
      label: 'Quality',
      value: 'High Quality Standards',
      icon: 'award',
    },
    {
      label: 'Community',
      value: 'Positive Community Impact',
      icon: 'users',
    },
    {
      label: 'Date',
      value: 'July 6, 2026',
      icon: 'calendar',
    },
  ],
};

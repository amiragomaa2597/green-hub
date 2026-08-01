import { MatrixQuadrant, Stakeholder } from '../models/project.models';

export const STAKEHOLDERS_CONTENT = {
  eyebrow: 'Stakeholder Analysis',
  title: 'Stakeholder Register & Power–Interest Matrix',
  registerTitle: 'Stakeholder Register',
  matrixTitle: 'Stakeholder Power–Interest Matrix',
  register: [
    {
      name: 'Project Sponsor (Municipality)',
      role: 'Provides funding and strategic direction',
      influence: 'High',
      interest: 'High',
      strategy: 'Manage Closely',
    },
    {
      name: 'Project Manager & Team',
      role: 'Responsible for planning, execution and delivery',
      influence: 'High',
      interest: 'High',
      strategy: 'Manage Closely',
    },
    {
      name: 'Local Community & Users',
      role: 'Beneficiaries of the center and programs',
      influence: 'Low',
      interest: 'High',
      strategy: 'Keep Informed',
    },
    {
      name: 'Government & Regulatory Bodies',
      role: 'Approvals, permits and compliance',
      influence: 'High',
      interest: 'Medium',
      strategy: 'Keep Satisfied',
    },
    {
      name: 'Suppliers & Contractors',
      role: 'Provide materials, equipment and services',
      influence: 'Medium',
      interest: 'Medium',
      strategy: 'Keep Satisfied',
    },
    {
      name: 'Investors & Donors',
      role: 'Provide financial support and resources',
      influence: 'High',
      interest: 'High',
      strategy: 'Manage Closely',
    },
    {
      name: 'Educational & Training Partners',
      role: 'Support environmental education programs',
      influence: 'Low',
      interest: 'Medium',
      strategy: 'Keep Informed',
    },
    {
      name: 'Environmental Organizations',
      role: 'Support sustainability and green initiatives',
      influence: 'Medium',
      interest: 'High',
      strategy: 'Keep Informed',
    },
  ] satisfies Stakeholder[],
  matrix: [
    {
      title: 'Manage Closely',
      strategy: 'High Interest / High Power',
      stakeholders: [
        'Project Sponsor (Municipality)',
        'Project Manager & Team',
        'Investors & Donors',
      ],
    },
    {
      title: 'Keep Satisfied',
      strategy: 'Low Interest / High Power',
      stakeholders: [
        'Government & Regulatory Bodies',
        'Suppliers & Contractors',
      ],
    },
    {
      title: 'Keep Informed',
      strategy: 'High Interest / Low Power',
      stakeholders: [
        'Local Community & Users',
        'Educational & Training Partners',
        'Environmental Organizations',
      ],
    },
    {
      title: 'Monitor',
      strategy: 'Low Interest / Low Power',
      stakeholders: ['(No major stakeholders in this quadrant)'],
    },
  ] satisfies MatrixQuadrant[],
};

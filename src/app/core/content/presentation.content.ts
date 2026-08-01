import { Localized } from '../i18n/language.types';

export interface PresentationContent {
  eyebrow: string;
  title: string;
  lead: string;
  fileName: string;
  filePath: string;
  fileType: string;
  pages: string;
  project: string;
}

export const PRESENTATION_CONTENT: Localized<PresentationContent> = {
  en: {
    eyebrow: 'Project Files',
    title: 'Download the Presentation',
    lead:
      'View or download The Green Hub final MBA presentation (PDF) — Group 5.',
    fileName: 'The Green Hub - Final Presentation - Group 5.pdf',
    filePath: 'assets/docs/the-green-hub-final-presentation.pdf',
    fileType: 'PDF Presentation',
    pages: '14 slides',
    project: 'MBA Team Final Project — Group 5',
  },
  ar: {
    eyebrow: 'ملفات المشروع',
    title: 'تحميل العرض التقديمي',
    lead: 'اعرض أو حمّل العرض النهائي لجرين هب (PDF) — المجموعة 5.',
    fileName: 'The Green Hub - Final Presentation - Group 5.pdf',
    filePath: 'assets/docs/the-green-hub-final-presentation.pdf',
    fileType: 'عرض تقديمي PDF',
    pages: '14 شريحة',
    project: 'مشروع تخرج MBA — المجموعة 5',
  },
};

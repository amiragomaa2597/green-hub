import { Localized } from '../i18n/language.types';

export interface PresentationContent {
  eyebrow: string;
  title: string;
  lead: string;
  fileNamePptx: string;
  filePathPptx: string;
  fileNamePdf: string;
  filePathPdf: string;
  fileTypePptx: string;
  fileTypePdf: string;
  pages: string;
  project: string;
}

export const PRESENTATION_CONTENT: Localized<PresentationContent> = {
  en: {
    eyebrow: 'Project Files',
    title: 'Download the Presentation',
    lead:
      'Download The Green Hub final MBA presentation as PowerPoint or PDF — Group 5.',
    fileNamePptx: 'The Green Hub - Final Presentation - Group 5.pptx',
    filePathPptx: 'assets/docs/the-green-hub-final-presentation.pptx',
    fileNamePdf: 'The Green Hub - Final Presentation - Group 5.pdf',
    filePathPdf: 'assets/docs/the-green-hub-final-presentation.pdf',
    fileTypePptx: 'PowerPoint (.pptx)',
    fileTypePdf: 'PDF Document',
    pages: '16 slides',
    project: 'MBA Team Final Project — Group 5',
  },
  ar: {
    eyebrow: 'ملفات المشروع',
    title: 'تحميل العرض التقديمي',
    lead: 'حمّل العرض النهائي لجرين هب بصيغة PowerPoint أو PDF — المجموعة 5.',
    fileNamePptx: 'The Green Hub - Final Presentation - Group 5.pptx',
    filePathPptx: 'assets/docs/the-green-hub-final-presentation.pptx',
    fileNamePdf: 'The Green Hub - Final Presentation - Group 5.pdf',
    filePathPdf: 'assets/docs/the-green-hub-final-presentation.pdf',
    fileTypePptx: 'PowerPoint (.pptx)',
    fileTypePdf: 'ملف PDF',
    pages: '16 شريحة',
    project: 'مشروع تخرج MBA — المجموعة 5',
  },
};

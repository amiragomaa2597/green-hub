import { Localized } from '../i18n/language.types';

export interface PresentationContent {
  eyebrow: string;
  title: string;
  lead: string;
  fileNameDocx: string;
  filePathDocx: string;
  fileNamePdf: string;
  filePathPdf: string;
  fileTypeDocx: string;
  fileTypePdf: string;
  pages: string;
  project: string;
}

export const PRESENTATION_CONTENT: Localized<PresentationContent> = {
  en: {
    eyebrow: 'Project Files',
    title: 'Download the Final Document',
    lead:
      'Download The Green Hub final project document as Word (.docx) or PDF — Group 5.',
    fileNameDocx: 'The Green Hub - Final.docx',
    filePathDocx: 'assets/docs/the-green-hub-final.docx',
    fileNamePdf: 'The Green Hub - Final.pdf',
    filePathPdf: 'assets/docs/the-green-hub-final.pdf',
    fileTypeDocx: 'Word Document (.docx)',
    fileTypePdf: 'PDF Document',
    pages: 'Final project document',
    project: 'MBA Team Final Project — Group 5',
  },
  ar: {
    eyebrow: 'ملفات المشروع',
    title: 'تحميل المستند النهائي',
    lead: 'حمّل مستند مشروع جرين هب النهائي بصيغة Word أو PDF — المجموعة 5.',
    fileNameDocx: 'The Green Hub - Final.docx',
    filePathDocx: 'assets/docs/the-green-hub-final.docx',
    fileNamePdf: 'The Green Hub - Final.pdf',
    filePathPdf: 'assets/docs/the-green-hub-final.pdf',
    fileTypeDocx: 'مستند Word (.docx)',
    fileTypePdf: 'ملف PDF',
    pages: 'المستند النهائي للمشروع',
    project: 'مشروع تخرج MBA — المجموعة 5',
  },
};

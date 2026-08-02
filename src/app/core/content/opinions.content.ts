import { Localized } from '../i18n/language.types';

export interface OpinionOption {
  id: string;
  label: string;
  hint: string;
}

export interface OpinionsContent {
  eyebrow: string;
  title: string;
  lead: string;
  privacyNote: string;
  interestLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  sendingLabel: string;
  successTitle: string;
  successBody: string;
  errorTitle: string;
  errorBody: string;
  options: OpinionOption[];
}

export const OPINIONS_CONTENT: Localized<OpinionsContent> = {
  en: {
    eyebrow: 'Voices & Interest',
    title: 'Share Your Opinion',
    lead:
      'Are you a teammate with feedback, or someone interested in investing in a project like The Green Hub? Leave your opinion only — no name, no email.',
    privacyNote:
      'We never ask for your personal email. Your message is delivered privately to the project team.',
    interestLabel: 'What best describes you?',
    messageLabel: 'Your opinion',
    messagePlaceholder:
      'Share your thoughts on The Green Hub, the investment opportunity, or advice for the team…',
    submitLabel: 'Send opinion',
    sendingLabel: 'Sending…',
    successTitle: 'Opinion sent',
    successBody:
      'Thank you — your message reached the Green Hub team. We appreciate your voice.',
    errorTitle: 'Could not send',
    errorBody:
      'Please try again in a moment. If it keeps failing, check your connection and retry.',
    options: [
      {
        id: 'invest-yes',
        label: 'I’d invest',
        hint: 'Interested in backing a project like this',
      },
      {
        id: 'invest-maybe',
        label: 'Maybe later',
        hint: 'Curious, but not ready to invest yet',
      },
      {
        id: 'invest-no',
        label: 'Not for me',
        hint: 'Happy to share feedback without investing',
      },
      {
        id: 'teammate',
        label: 'Teammate feedback',
        hint: 'Opinion from a classmate or collaborator',
      },
    ],
  },
  ar: {
    eyebrow: 'آراء واهتمام',
    title: 'شاركنا رأيك',
    lead:
      'هل أنت زميل تريد إبداء رأي، أو مهتم بالاستثمار في مشروع مثل جرين هب؟ اكتب رأيك فقط — بدون اسم وبدون بريد.',
    privacyNote:
      'لن نطلب بريدك الشخصي أبدًا. تُرسل رسالتك بخصوصية إلى فريق المشروع.',
    interestLabel: 'أي وصف يناسبك؟',
    messageLabel: 'رأيك',
    messagePlaceholder:
      'شاركنا رأيك في جرين هب، أو فرصة الاستثمار، أو نصيحة للفريق…',
    submitLabel: 'إرسال الرأي',
    sendingLabel: 'جارٍ الإرسال…',
    successTitle: 'تم إرسال رأيك',
    successBody: 'شكرًا لك — وصلت رسالتك إلى فريق جرين هب. نقدّر صوتك.',
    errorTitle: 'تعذّر الإرسال',
    errorBody: 'حاول مرة أخرى بعد لحظات. إذا استمر الخطأ، تحقق من الاتصال وأعد المحاولة.',
    options: [
      {
        id: 'invest-yes',
        label: 'سأستثمر',
        hint: 'مهتم بدعم مشروع كهذا',
      },
      {
        id: 'invest-maybe',
        label: 'ربما لاحقًا',
        hint: 'فضولي، لكن لست مستعدًا للاستثمار بعد',
      },
      {
        id: 'invest-no',
        label: 'ليس لي',
        hint: 'سعيد بمشاركة رأي دون استثمار',
      },
      {
        id: 'teammate',
        label: 'رأي زميل',
        hint: 'ملاحظات من زميل أو متعاون',
      },
    ],
  },
};

/** Destination inbox — never collected from visitors. */
export const OPINION_DESTINATION_EMAIL =
  'amiragomaahassanabdelsadek@gmail.com';

import { Localized } from '../i18n/language.types';

/** Shared UI labels used across section templates. */
export const UI_LABELS: Localized<{
  includes: string;
  excludes: string;
  deliverables: string;
  sustainableCenter: string;
  instructorAdvisor: string;
  obsBadge: string;
  obsTitle: string;
  obsEqualLevel: string;
  projectManager: string;
  teamLead: string;
  designCampusLead: string;
  duration: string;
  start: string;
  finish: string;
  startDate: string;
  finishDate: string;
  timeline: string;
  keyMilestones: string;
  category: string;
  amountEgp: string;
  amountUsd: string;
  amountBoth: string;
  currencyNote: string;
  usdLabel: string;
  egpLabel: string;
  percentOfTotal: string;
  totalProjectBudget: string;
  totalBudget: string;
  stakeholder: string;
  roleInterest: string;
  influencePower: string;
  interestLevel: string;
  engagementStrategy: string;
  keyTakeaways: string;
  projectSummary: string;
  sustainableImpact: string;
  wbsLabel: string;
  journeyMap: string;
  journeyHint: string;
  workPackages: string;
  weeksLabel: string;
  weekShort: string;
  handoverReady: string;
  sustainableDelivery: string;
  viewPresentation: string;
  downloadPdf: string;
  downloadPptx: string;
  openInNewTab: string;
  download: string;
  close: string;
  presentationViewer: string;
  reserveRatio: string;
  cumulative: string;
  assumptions: string;
  constraints: string;
  strategy: string;
  acceptanceCriteria: string;
  requirements: string;
  costBreakdown: string;
  financialOverview: string;
  powerInterestGrid: string;
  stakeholderJourneyMap: string;
  stakeholderMapHint: string;
  powerAxisHigh: string;
  powerAxisLow: string;
  interestAxisLow: string;
  interestAxisHigh: string;
  strategiesCount: string;
  manageCloselyHint: string;
  keepSatisfiedHint: string;
  keepInformedHint: string;
  monitorHint: string;
  pmbokLadder: string;
  directActivity: string;
  contingencyReserves: string;
  managementReserve: string;
  costBaseline: string;
  scopeConsoleModes: string;
  scopeModeBoundary: string;
  scopeModeSystems: string;
  scopeModeStrategy: string;
  scopeModeGates: string;
  scopeModeBudget: string;
  scopeModeOutputs: string;
  missionBrief: string;
  insideFence: string;
  outsideFence: string;
  flipBoundary: string;
  lockStatus: string;
  unlocked: string;
  weeksSuffix: string;
  riskConsoleLabel: string;
  riskConsoleTitle: string;
  riskConsoleBody: string;
  riskMapRoot: string;
  riskStationsLabel: string;
  probAxisHigh: string;
  probAxisMedium: string;
  costAxisLow: string;
  costAxisHigh: string;
  lowerExposure: string;
  higherExposure: string;
  radarNote: string;
  costImpact: string;
  timeImpact: string;
  owner: string;
  severityIndex: string;
  mitigationResponse: string;
  totalPotentialCost: string;
  totalPotentialDelay: string;
  totalMitigationCost: string;
  ourGoal: string;
  riskPrefix: string;
  probabilitySuffix: string;
  filterAll: string;
  filterHigh: string;
  filterMedium: string;
  filterMitigate: string;
  filterTransfer: string;
  filterShare: string;
  high: string;
  medium: string;
  mitigate: string;
  transfer: string;
  share: string;
  toggleNav: string;
  primaryNav: string;
  siteNav: string;
  closeNav: string;
  mobileNav: string;
  switchToEnglish: string;
  switchToArabic: string;
}> = {
  en: {
    includes: 'Includes',
    excludes: 'Excludes',
    deliverables: 'Scope Deliverables',
    sustainableCenter: 'Sustainable Community Center',
    instructorAdvisor: 'Instructor / Advisor',
    obsBadge: 'OBS',
    obsTitle: 'Organizational Breakdown Structure',
    obsEqualLevel: 'Same level · equal authority',
    projectManager: 'Project Manager',
    teamLead: 'Instructor / Advisor and project team roles for The Green Hub.',
    designCampusLead:
      'Solar PV, smart lighting & HVAC, rainwater, recycling, and BMS — the systems required by the Scope Statement.',
    duration: 'Duration',
    start: 'Start',
    finish: 'Finish',
    startDate: 'Start Date',
    finishDate: 'Finish Date',
    timeline: 'Timeline',
    keyMilestones: 'Key Milestones',
    category: 'Category',
    amountEgp: 'Amount (EGP)',
    amountUsd: 'Amount (USD)',
    amountBoth: 'Amount (USD / EGP)',
    currencyNote: 'All money shown in USD and EGP (1 USD = 50 EGP).',
    usdLabel: 'USD',
    egpLabel: 'EGP',
    percentOfTotal: '% of Total',
    totalProjectBudget: 'Total Project Budget',
    totalBudget: 'Total Budget',
    stakeholder: 'Stakeholder',
    roleInterest: 'Role / Interest',
    influencePower: 'Influence (Power)',
    interestLevel: 'Interest (Level)',
    engagementStrategy: 'Engagement Strategy',
    keyTakeaways: 'Key Takeaways',
    projectSummary: 'Project Summary',
    sustainableImpact: 'Sustainable Impact',
    wbsLabel: 'Work Breakdown Structure',
    journeyMap: 'Project Journey Map',
    journeyHint:
      'Follow the path from project management to handover — tap any station to open its work packages.',
    workPackages: 'WBS branches · one delivery path',
    weeksLabel: 'Weeks',
    weekShort: 'Wk',
    handoverReady: 'Handover ready',
    sustainableDelivery: 'Sustainable delivery complete',
    viewPresentation: 'View presentation',
    downloadPdf: 'Download PDF',
    downloadPptx: 'Download PowerPoint',
    openInNewTab: 'Open in new tab',
    download: 'Download',
    close: 'Close',
    presentationViewer: 'Presentation viewer',
    reserveRatio: 'Reserve Ratio',
    cumulative: 'Cumulative',
    assumptions: 'Assumptions',
    constraints: 'Constraints',
    strategy: 'Strategy',
    acceptanceCriteria: 'Acceptance Criteria',
    requirements: 'Requirements',
    costBreakdown: 'Cost Breakdown',
    financialOverview: 'Financial Overview',
    powerInterestGrid: 'Power / Interest Grid',
    stakeholderJourneyMap: 'Engagement Journey Map',
    stakeholderMapHint:
      'Tap a node on the map — or open a strategy station along the path.',
    powerAxisHigh: 'High power',
    powerAxisLow: 'Low power',
    interestAxisLow: 'Low interest',
    interestAxisHigh: 'High interest',
    strategiesCount: 'strategy stations',
    manageCloselyHint:
      'The relationships that most directly determine project success.',
    keepSatisfiedHint:
      'Regulatory gatekeepers who can block progress without day-to-day involvement.',
    keepInformedHint:
      'Affected by the project but with limited formal authority.',
    monitorHint: 'Tracked mainly for delivery-schedule risk.',
    pmbokLadder: 'PMBOK Cost Structure',
    directActivity: 'Direct Activity Execution',
    contingencyReserves: 'Contingency Reserves',
    managementReserve: 'Management Reserve',
    costBaseline: 'Cost Baseline',
    scopeConsoleModes: 'Scope modes',
    scopeModeBoundary: 'Boundary',
    scopeModeSystems: 'Systems',
    scopeModeStrategy: 'Strategy',
    scopeModeGates: 'Gates',
    scopeModeBudget: 'Budget',
    scopeModeOutputs: 'Outputs',
    missionBrief: 'Mission brief',
    insideFence: 'Inside the fence',
    outsideFence: 'Outside the fence',
    flipBoundary: 'Flip the fence',
    lockStatus: 'Acceptance locks',
    unlocked: 'Cleared',
    weeksSuffix: ' Weeks',
    riskConsoleLabel: 'Risk Defense Console',
    riskConsoleTitle: 'Scan the threats. Lock the response.',
    riskConsoleBody:
      'Explore the Top 8 risks on an interactive board — filter by pressure level or strategy, then open any threat to see impact and mitigation.',
    riskMapRoot: 'Top 8 Project Risks & Mitigation Plan',
    riskStationsLabel: 'risk stations',
    probAxisHigh: 'High probability',
    probAxisMedium: 'Medium probability',
    costAxisLow: 'Lower cost impact',
    costAxisHigh: 'Higher cost impact',
    lowerExposure: 'Lower exposure',
    higherExposure: 'Higher exposure',
    radarNote: 'Node size & position reflect relative cost impact.',
    costImpact: 'Cost Impact',
    timeImpact: 'Time Impact',
    owner: 'Owner',
    severityIndex: 'Severity Index',
    mitigationResponse: 'Mitigation Response',
    totalPotentialCost: 'Total Potential Cost Impact',
    totalPotentialDelay: 'Total Potential Delay',
    totalMitigationCost: 'Total Mitigation Cost',
    ourGoal: 'Our Goal',
    riskPrefix: 'Risk',
    probabilitySuffix: 'Probability',
    filterAll: 'All',
    filterHigh: 'High',
    filterMedium: 'Medium',
    filterMitigate: 'Mitigate',
    filterTransfer: 'Transfer',
    filterShare: 'Share',
    high: 'High',
    medium: 'Medium',
    mitigate: 'Mitigate',
    transfer: 'Transfer',
    share: 'Share',
    toggleNav: 'Toggle navigation',
    primaryNav: 'Primary',
    siteNav: 'Site navigation',
    closeNav: 'Close navigation',
    mobileNav: 'Mobile primary',
    switchToEnglish: 'Switch to English',
    switchToArabic: 'التبديل إلى العربية',
  },
  ar: {
    includes: 'يشمل',
    excludes: 'لا يشمل',
    deliverables: 'مخرجات النطاق',
    sustainableCenter: 'مركز مجتمعي مستدام',
    instructorAdvisor: 'المشرف / المستشار',
    obsBadge: 'OBS',
    obsTitle: 'الهيكل التنظيمي',
    obsEqualLevel: 'نفس المستوى · سلطة متساوية',
    projectManager: 'مدير المشروع',
    teamLead: 'أدوار المشرف وفريق المشروع لجرين هب.',
    designCampusLead:
      'طاقة شمسية وإضاءة وHVAC ذكية وحصاد أمطار وإعادة تدوير وBMS — الأنظمة التي يطلبها بيان النطاق.',
    duration: 'المدة',
    start: 'البداية',
    finish: 'النهاية',
    startDate: 'تاريخ البدء',
    finishDate: 'تاريخ الانتهاء',
    timeline: 'الجدول الزمني',
    keyMilestones: 'المعالم الرئيسية',
    category: 'البند',
    amountEgp: 'المبلغ (جنيه)',
    amountUsd: 'المبلغ (دولار)',
    amountBoth: 'المبلغ (دولار / جنيه)',
    currencyNote: 'كل المبالغ معروضة بالدولار والجنيه (1 دولار = 50 جنيهًا).',
    usdLabel: 'دولار',
    egpLabel: 'جنيه',
    percentOfTotal: '% من الإجمالي',
    totalProjectBudget: 'إجمالي ميزانية المشروع',
    totalBudget: 'إجمالي الميزانية',
    stakeholder: 'صاحب المصلحة',
    roleInterest: 'الدور / المصلحة',
    influencePower: 'التأثير (القوة)',
    interestLevel: 'المصلحة (المستوى)',
    engagementStrategy: 'استراتيجية التواصل',
    keyTakeaways: 'أبرز النتائج',
    projectSummary: 'ملخص المشروع',
    sustainableImpact: 'الأثر المستدام',
    wbsLabel: 'هيكل تقسيم العمل',
    journeyMap: 'خريطة رحلة المشروع',
    journeyHint:
      'اتبع المسار من إدارة المشروع إلى التسليم — اضغط على أي محطة لفتح حزم العمل الخاصة بها.',
    workPackages: 'فروع WBS · مسار تسليم واحد',
    weeksLabel: 'أسابيع',
    weekShort: 'أ',
    handoverReady: 'جاهز للتسليم',
    sustainableDelivery: 'اكتمل التسليم المستدام',
    viewPresentation: 'عرض التقديم',
    downloadPdf: 'تحميل PDF',
    downloadPptx: 'تحميل PowerPoint',
    openInNewTab: 'فتح في تبويب جديد',
    download: 'تحميل',
    close: 'إغلاق',
    presentationViewer: 'عارض العرض التقديمي',
    reserveRatio: 'نسبة الاحتياطي',
    cumulative: 'التراكمي',
    assumptions: 'الافتراضات',
    constraints: 'القيود',
    strategy: 'الاستراتيجية',
    acceptanceCriteria: 'معايير القبول',
    requirements: 'المتطلبات',
    costBreakdown: 'تفصيل التكاليف',
    financialOverview: 'نظرة مالية',
    powerInterestGrid: 'مصفوفة القوة / المصلحة',
    stakeholderJourneyMap: 'خريطة رحلة التواصل',
    stakeholderMapHint:
      'اضغط على نقطة في الخريطة — أو افتح محطة استراتيجية على المسار.',
    powerAxisHigh: 'قوة عالية',
    powerAxisLow: 'قوة منخفضة',
    interestAxisLow: 'مصلحة منخفضة',
    interestAxisHigh: 'مصلحة عالية',
    strategiesCount: 'محطات استراتيجية',
    manageCloselyHint: 'العلاقات التي تحدد نجاح المشروع بشكل مباشر.',
    keepSatisfiedHint: 'جهات تنظيمية يمكنها إيقاف التقدم دون مشاركة يومية.',
    keepInformedHint: 'متأثرون بالمشروع بسلطة رسمية محدودة.',
    monitorHint: 'يُتابَعون أساسًا لمخاطر جدول التسليم.',
    pmbokLadder: 'هيكل التكلفة وفق PMBOK',
    directActivity: 'تنفيذ الأنشطة المباشرة',
    contingencyReserves: 'احتياطيات الطوارئ',
    managementReserve: 'الاحتياطي الإداري',
    costBaseline: 'خط الأساس للتكلفة',
    scopeConsoleModes: 'أوضاع النطاق',
    scopeModeBoundary: 'الحدود',
    scopeModeSystems: 'الأنظمة',
    scopeModeStrategy: 'الاستراتيجية',
    scopeModeGates: 'البوابات',
    scopeModeBudget: 'الميزانية',
    scopeModeOutputs: 'المخرجات',
    missionBrief: 'موجز المهمة',
    insideFence: 'داخل النطاق',
    outsideFence: 'خارج النطاق',
    flipBoundary: 'اقلب الحدود',
    lockStatus: 'أقفال القبول',
    unlocked: 'تم الاجتياز',
    weeksSuffix: ' أسابيع',
    riskConsoleLabel: 'لوحة الدفاع عن المخاطر',
    riskConsoleTitle: 'ارصد التهديدات. ثبّت الاستجابة.',
    riskConsoleBody:
      'استكشف أهم 8 مخاطر على لوحة تفاعلية — صفِّ حسب مستوى الضغط أو الاستراتيجية، ثم افتح أي تهديد لترى الأثر وخطة المعالجة.',
    riskMapRoot: 'أهم 8 مخاطر للمشروع وخطة المعالجة',
    riskStationsLabel: 'محطات مخاطر',
    probAxisHigh: 'احتمال عالٍ',
    probAxisMedium: 'احتمال متوسط',
    costAxisLow: 'أثر تكلفة أقل',
    costAxisHigh: 'أثر تكلفة أعلى',
    lowerExposure: 'تعرض أقل',
    higherExposure: 'تعرض أعلى',
    radarNote: 'حجم العقدة وموقعها يعكسان الأثر النسبي على التكلفة.',
    costImpact: 'أثر التكلفة',
    timeImpact: 'أثر الوقت',
    owner: 'المسؤول',
    severityIndex: 'مؤشر الخطورة',
    mitigationResponse: 'استجابة المعالجة',
    totalPotentialCost: 'إجمالي الأثر المحتمل على التكلفة',
    totalPotentialDelay: 'إجمالي التأخير المحتمل',
    totalMitigationCost: 'إجمالي تكلفة المعالجة',
    ourGoal: 'هدفنا',
    riskPrefix: 'خطر',
    probabilitySuffix: 'احتمال',
    filterAll: 'الكل',
    filterHigh: 'عالية',
    filterMedium: 'متوسطة',
    filterMitigate: 'تخفيف',
    filterTransfer: 'نقل',
    filterShare: 'مشاركة',
    high: 'عالية',
    medium: 'متوسطة',
    mitigate: 'تخفيف',
    transfer: 'نقل',
    share: 'مشاركة',
    toggleNav: 'تبديل القائمة',
    primaryNav: 'الرئيسية',
    siteNav: 'تنقل الموقع',
    closeNav: 'إغلاق القائمة',
    mobileNav: 'القائمة للجوال',
    switchToEnglish: 'Switch to English',
    switchToArabic: 'التبديل إلى العربية',
  },
};

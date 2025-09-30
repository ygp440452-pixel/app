
import { NewsArticle, StudentResult } from './types';

export const TICKER_MESSAGES: string[] = [
  'مرحباً بكم في الموقع الرسمي لمدرسة صاحب البراق للبنين.',
  'سيتم إعلان نتائج الامتحانات الشهرية قريباً. ترقبونا!',
  'يبدأ الدوام الشتوي من الساعة الثامنة صباحاً.',
  ' اجتماع أولياء الأمور القادم يوم السبت المقبل.',
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: 'تكريم الطلاب الأوائل للفصل الدراسي الأول',
    date: '15 فبراير 2024',
    summary: 'أقامت المدرسة حفلاً لتكريم الطلاب المتفوقين في امتحانات الفصل الدراسي الأول، بحضور أولياء الأمور وأعضاء الهيئة التدريسية.',
    imageUrl: 'https://picsum.photos/400/250?random=1',
  },
  {
    id: 2,
    title: 'انطلاق فعاليات الأسبوع الثقافي',
    date: '5 مارس 2024',
    summary: 'بدأت فعاليات الأسبوع الثقافي في المدرسة والذي يتضمن مسابقات شعرية وعلمية ومعرضاً للرسوم والأعمال اليدوية للطلاب.',
    imageUrl: 'https://picsum.photos/400/250?random=2',
  },
  {
    id: 3,
    title: 'رحلة علمية إلى متحف العلوم',
    date: '20 مارس 2024',
    summary: 'نظمت المدرسة رحلة علمية لطلاب الصف السادس إلى متحف العلوم بهدف ربط المفاهيم النظرية بالتطبيقات العملية.',
    imageUrl: 'https://picsum.photos/400/250?random=3',
  },
    {
    id: 4,
    title: 'حملة تشجير ساحة المدرسة',
    date: '1 أبريل 2024',
    summary: 'شارك طلاب المدرسة في حملة تطوعية لزراعة الأشجار في ساحة المدرسة لزيادة المساحات الخضراء وتعزيز الوعي البيئي.',
    imageUrl: 'https://picsum.photos/400/250?random=4',
  },
];

export const STUDENT_RESULTS: StudentResult[] = [
    { id: '101', name: 'أحمد علي', grade: 1, examType: 'monthly', scores: [{subject: 'القرآن الكريم', score: 95}, {subject: 'اللغة العربية', score: 92}, {subject: 'الرياضيات', score: 88}] },
    { id: '102', name: 'محمد حسن', grade: 1, examType: 'monthly', scores: [{subject: 'القرآن الكريم', score: 85}, {subject: 'اللغة العربية', score: 90}, {subject: 'الرياضيات', score: 91}] },
    { id: '201', name: 'علي جاسم', grade: 2, examType: 'semester', scores: [{subject: 'اللغة العربية', score: 88}, {subject: 'الرياضيات', score: 92}, {subject: 'العلوم', score: 85}, {subject: 'اللغة الانجليزية', score: 94}] },
    { id: '301', name: 'يوسف خالد', grade: 3, examType: 'final', scores: [{subject: 'اللغة العربية', score: 91}, {subject: 'الرياضيات', score: 89}, {subject: 'العلوم', score: 93}, {subject: 'اللغة الانجليزية', score: 95}, {subject: 'الاجتماعيات', score: 88}] },
    { id: '401', name: 'عمر وليد', grade: 4, examType: 'monthly', scores: [{subject: 'اللغة العربية', score: 94}, {subject: 'الرياضيات', score: 96}, {subject: 'العلوم', score: 90}] },
    { id: '501', name: 'حسن كاظم', grade: 5, examType: 'semester', scores: [{subject: 'اللغة العربية', score: 85}, {subject: 'الرياضيات', score: 88}, {subject: 'العلوم', score: 91}, {subject: 'اللغة الانجليزية', score: 89}, {subject: 'التاريخ', score: 92}] },
    { id: '601', name: 'زيد سامي', grade: 6, examType: 'final', scores: [{subject: 'اللغة العربية', score: 96}, {subject: 'الرياضيات', score: 98}, {subject: 'العلوم', score: 95}, {subject: 'اللغة الانجليزية', score: 97}, {subject: 'الجغرافيا', score: 94}] },
];

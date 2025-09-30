
import { NewsArticle, ResultFile } from './types';

export const TICKER_MESSAGES: string[] = [
    'مرحباً بكم في الموقع الرسمي لمدرسة صاحب البراق للبنين.',
    'سيتم إعلان نتائج امتحانات نصف السنة قريباً. ترقبونا!',
    'يبدأ التسجيل للعام الدراسي الجديد في الأول من شهر آب.',
    'اجتماع أولياء الأمور القادم يوم السبت الساعة العاشرة صباحاً.',
];

export const NEWS_ARTICLES: NewsArticle[] = [
    {
        id: 1,
        title: 'افتتاح العام الدراسي الجديد 2024-2025',
        date: '1 سبتمبر 2024',
        summary: 'بحضور الهيئة التدريسية وأولياء الأمور، تم افتتاح العام الدراسي الجديد مع فعاليات ترحيبية بالطلاب.',
        imageUrl: 'https://picsum.photos/seed/school1/600/400',
    },
    {
        id: 2,
        title: 'تكريم الطلاب الأوائل',
        date: '25 أغسطس 2024',
        summary: 'قامت إدارة المدرسة بتكريم الطلاب المتفوقين في امتحانات العام الماضي بحضور أولياء أمورهم.',
        imageUrl: 'https://picsum.photos/seed/school2/600/400',
    },
    {
        id: 3,
        title: 'حملة تشجير ساحة المدرسة',
        date: '15 أغسطس 2024',
        summary: 'شارك طلاب الصف الخامس والسادس في حملة تطوعية لزراعة الأشجار في ساحة المدرسة لزيادة المساحات الخضراء.',
        imageUrl: 'https://picsum.photos/seed/school3/600/400',
    },
    {
        id: 4,
        title: 'المشاركة في المسابقة العلمية المحلية',
        date: '10 أغسطس 2024',
        summary: 'حقق فريق المدرسة المركز الثاني في المسابقة العلمية التي أقيمت على مستوى المدينة للمدارس الابتدائية.',
        imageUrl: 'https://picsum.photos/seed/school4/600/400',
    }
];

export const RESULTS_FILES: ResultFile[] = [
    { id: 1, grade: 1, type: 'monthly', description: 'نتائج امتحان الشهر الأول - الصف الأول', url: '/results/placeholder.pdf', date: '2024-10-15' },
    { id: 2, grade: 2, type: 'monthly', description: 'نتائج امتحان الشهر الأول - الصف الثاني', url: '/results/placeholder.pdf', date: '2024-10-15' },
    { id: 3, grade: 3, type: 'monthly', description: 'نتائج امتحان الشهر الأول - الصف الثالث', url: '/results/placeholder.pdf', date: '2024-10-15' },
    { id: 4, grade: 4, type: 'monthly', description: 'نتائج امتحان الشهر الأول - الصف الرابع', url: '/results/placeholder.pdf', date: '2024-10-15' },
    { id: 5, grade: 5, type: 'monthly', description: 'نتائج امتحان الشهر الأول - الصف الخامس', url: '/results/placeholder.pdf', date: '2024-10-15' },
    { id: 6, grade: 6, type: 'monthly', description: 'نتائج امتحان الشهر الأول - الصف السادس', url: '/results/placeholder.pdf', date: '2024-10-15' },
    { id: 7, grade: 1, type: 'semester', description: 'نتائج امتحانات نصف السنة - الصف الأول', url: '/results/placeholder.pdf', date: '2025-01-20' },
    { id: 8, grade: 2, type: 'semester', description: 'نتائج امتحانات نصف السنة - الصف الثاني', url: '/results/placeholder.pdf', date: '2025-01-20' },
    { id: 9, grade: 3, type: 'semester', description: 'نتائج امتحانات نصف السنة - الصف الثالث', url: '/results/placeholder.pdf', date: '2025-01-20' },
    { id: 10, grade: 4, type: 'semester', description: 'نتائج امتحانات نصف السنة - الصف الرابع', url: '/results/placeholder.pdf', date: '2025-01-20' },
    { id: 11, grade: 5, type: 'semester', description: 'نتائج امتحانات نصف السنة - الصف الخامس', url: '/results/placeholder.pdf', date: '2025-01-20' },
    { id: 12, grade: 6, type: 'semester', description: 'نتائج امتحانات نصف السنة - الصف السادس', url: '/results/placeholder.pdf', date: '2025-01-20' },
];

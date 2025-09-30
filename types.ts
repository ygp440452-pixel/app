
export enum Page {
    Home = 'home',
    News = 'news',
    Results = 'results',
    About = 'about',
    Contact = 'contact',
}

export interface NewsArticle {
    id: number;
    title: string;
    date: string;
    summary: string;
    imageUrl: string;
}

export interface ResultFile {
    id: number;
    grade: number;
    type: 'monthly' | 'semester';
    description: string;
    url: string;
    date: string;
}

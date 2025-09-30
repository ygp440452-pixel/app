
export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}

export interface SubjectScore {
  subject: string;
  score: number;
}

export interface StudentResult {
  id: string;
  name: string;
  grade: number;
  examType: 'monthly' | 'semester' | 'final';
  scores: SubjectScore[];
}

export enum Page {
  Home = 'home',
  News = 'news',
  Results = 'results',
  About = 'about',
  Contact = 'contact',
}

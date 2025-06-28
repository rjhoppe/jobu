export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  url: string;
  scrapedDate: string;
  sourceUrl?: string;
  postedDate?: string;
  active?: boolean;
} 
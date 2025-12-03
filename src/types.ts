export interface Project {
  id: number;
  title: string;
  images: string[];
  description: string;
  tags: string[];
  technologies: string[];
  link?: string;
}
export interface Project {
  id: string;
  title: string;
  imgPath: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  sourceCodeLink?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'language' | 'tool';
  proficiency: 'expert' | 'advanced' | 'intermediate';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Section {
  id: string;
  title: string;
  component: React.ComponentType;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

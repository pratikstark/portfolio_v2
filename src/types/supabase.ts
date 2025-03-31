
export interface Qualification {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string | null;
  order_index: number | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string | null;
  order_index: number | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string | null;
  content: string | null;
  image_url: string | null;
  featured: boolean | null;
  order_index: number | null;
  created_at: string | null;
  updated_at: string | null;
  tags?: Tag[];
}

export interface BlogPost {
  id: string;
  title: string;
  publish_date: string | null;
  summary: string | null;
  content: string | null;
  image_url: string | null;
  featured: boolean | null;
  order_index: number | null;
  created_at: string | null;
  updated_at: string | null;
  tags?: Tag[];
}

export interface Tag {
  id: string;
  name: string;
  created_at: string | null;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  read: boolean | null;
  created_at: string | null;
}

export interface WebsiteSettings {
  id: string;
  section: string;
  visible: boolean | null;
  order_index: number | null;
  settings: any | null; // Changed from Record<string, any> to any to fix the type error
  updated_at: string | null;
}

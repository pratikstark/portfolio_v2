
import { supabase } from "@/integrations/supabase/client";
import { 
  Qualification, 
  WorkExperience, 
  CaseStudy, 
  BlogPost, 
  Tag, 
  ContactSubmission,
  WebsiteSettings
} from "@/types/supabase";

// Qualifications
export const getQualifications = async (): Promise<Qualification[]> => {
  const { data, error } = await supabase
    .from('qualifications')
    .select('*')
    .order('order_index', { ascending: true });
  
  if (error) {
    console.error('Error fetching qualifications:', error);
    return [];
  }
  
  return data || [];
};

// Work Experience
export const getWorkExperience = async (): Promise<WorkExperience[]> => {
  const { data, error } = await supabase
    .from('work_experience')
    .select('*')
    .order('order_index', { ascending: true });
  
  if (error) {
    console.error('Error fetching work experience:', error);
    return [];
  }
  
  return data || [];
};

// Case Studies
export const getCaseStudies = async (): Promise<CaseStudy[]> => {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .order('order_index', { ascending: true });
  
  if (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }

  // Get tags for case studies
  const caseStudiesWithTags = await Promise.all(
    data.map(async (caseStudy) => {
      const { data: tagData } = await supabase
        .from('case_study_tags')
        .select('tags(*)')
        .eq('case_study_id', caseStudy.id);
      
      return {
        ...caseStudy,
        tags: tagData?.map(item => item.tags) || []
      };
    })
  );
  
  return caseStudiesWithTags || [];
};

export const getCaseStudyById = async (id: string): Promise<CaseStudy | null> => {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching case study:', error);
    return null;
  }

  // Get tags for case study
  const { data: tagData } = await supabase
    .from('case_study_tags')
    .select('tags(*)')
    .eq('case_study_id', id);
  
  return {
    ...data,
    tags: tagData?.map(item => item.tags) || []
  };
};

// Blog Posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('publish_date', { ascending: false });
  
  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  // Get tags for blog posts
  const postsWithTags = await Promise.all(
    data.map(async (post) => {
      const { data: tagData } = await supabase
        .from('blog_post_tags')
        .select('tags(*)')
        .eq('blog_post_id', post.id);
      
      return {
        ...post,
        tags: tagData?.map(item => item.tags) || []
      };
    })
  );
  
  return postsWithTags || [];
};

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  // Get tags for blog post
  const { data: tagData } = await supabase
    .from('blog_post_tags')
    .select('tags(*)')
    .eq('blog_post_id', id);
  
  return {
    ...data,
    tags: tagData?.map(item => item.tags) || []
  };
};

// Tags
export const getTags = async (): Promise<Tag[]> => {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name', { ascending: true });
  
  if (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
  
  return data || [];
};

// Contact Form
export const submitContactForm = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<boolean> => {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([
      { name, email, subject, message }
    ]);
  
  if (error) {
    console.error('Error submitting contact form:', error);
    return false;
  }
  
  return true;
};

// Website Settings
export const getWebsiteSettings = async (): Promise<Record<string, WebsiteSettings>> => {
  const { data, error } = await supabase
    .from('website_settings')
    .select('*')
    .order('order_index', { ascending: true });
  
  if (error) {
    console.error('Error fetching website settings:', error);
    return {};
  }
  
  // Convert to object with section as key
  return data.reduce((acc, setting) => {
    acc[setting.section] = setting as WebsiteSettings;
    return acc;
  }, {} as Record<string, WebsiteSettings>);
};

// For real-time updates
export const subscribeToWebsiteSettings = (
  callback: (payload: any) => void
) => {
  const channel = supabase
    .channel('public:website_settings')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'website_settings' },
      callback
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};

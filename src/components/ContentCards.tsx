
import React, { useState, useEffect } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  FileText, 
  BookOpen, 
  ArrowRight, 
  X 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  getQualifications, 
  getWorkExperience, 
  getCaseStudies, 
  getBlogPosts 
} from "@/lib/api";
import { 
  Qualification, 
  WorkExperience, 
  CaseStudy, 
  BlogPost,
  WebsiteSettings
} from "@/types/supabase";
import { useNavigate } from "react-router-dom";

type ContentCategory = "qualifications" | "work" | "caseStudies" | "blogs" | null;

interface ContentCardsProps {
  settings?: WebsiteSettings;
}

const ContentCards: React.FC<ContentCardsProps> = ({ settings }) => {
  const [activeCategory, setActiveCategory] = useState<ContentCategory>(null);
  const [qualifications, setQualifications] = useState<Qualification[]>([]);
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [quals, work, cases, blogs] = await Promise.all([
          getQualifications(),
          getWorkExperience(),
          getCaseStudies(),
          getBlogPosts()
        ]);
        
        setQualifications(quals);
        setWorkExperience(work);
        setCaseStudies(cases);
        setBlogPosts(blogs);
      } catch (error) {
        console.error("Error fetching content data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const closeDetails = () => {
    setActiveCategory(null);
  };

  const handleViewDetails = (id: string, type: 'case-study' | 'blog-post') => {
    navigate(`/${type}/${id}`);
    closeDetails();
  };

  // If section is set to not visible, don't render anything
  if (settings && settings.visible === false) {
    return null;
  }

  const cards = [
    {
      id: "qualifications",
      title: "Qualifications",
      icon: <GraduationCap className="text-primary" size={24} />,
      description: "Educational background and certifications",
      details: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Education & Certifications</h3>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : qualifications.length === 0 ? (
            <p className="text-center text-foreground/70">No qualifications found.</p>
          ) : (
            qualifications.map(qualification => (
              <div key={qualification.id} className="glass-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold">{qualification.title}</h4>
                <p className="text-sm text-foreground/70">{qualification.institution}, {qualification.year}</p>
                {qualification.description && (
                  <p className="mt-2">{qualification.description}</p>
                )}
              </div>
            ))
          )}
        </div>
      ),
    },
    {
      id: "work",
      title: "Work",
      icon: <Briefcase className="text-primary" size={24} />,
      description: "Professional experience and projects",
      details: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : workExperience.length === 0 ? (
            <p className="text-center text-foreground/70">No work experience found.</p>
          ) : (
            workExperience.map(work => (
              <div key={work.id} className="glass-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold">{work.title}</h4>
                <p className="text-sm text-foreground/70">{work.company}, {work.period}</p>
                {work.description && (
                  <p className="mt-2">{work.description}</p>
                )}
              </div>
            ))
          )}
        </div>
      ),
    },
    {
      id: "caseStudies",
      title: "Case Studies",
      icon: <FileText className="text-primary" size={24} />,
      description: "Detailed analysis of key projects",
      details: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Case Studies</h3>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : caseStudies.length === 0 ? (
            <p className="text-center text-foreground/70">No case studies found.</p>
          ) : (
            caseStudies.map(caseStudy => (
              <div key={caseStudy.id} className="glass-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold">{caseStudy.title}</h4>
                <p className="text-sm text-foreground/70">Category: {caseStudy.category}</p>
                {caseStudy.description && (
                  <p className="mt-2">{caseStudy.description}</p>
                )}
                <button 
                  className="mt-4 text-primary flex items-center text-sm"
                  onClick={() => handleViewDetails(caseStudy.id, 'case-study')}
                >
                  View Case Study <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            ))
          )}
        </div>
      ),
    },
    {
      id: "blogs",
      title: "Blogs",
      icon: <BookOpen className="text-primary" size={24} />,
      description: "Articles and thought leadership",
      details: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Blog Posts</h3>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : blogPosts.length === 0 ? (
            <p className="text-center text-foreground/70">No blog posts found.</p>
          ) : (
            blogPosts.map(post => (
              <div key={post.id} className="glass-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold">{post.title}</h4>
                <p className="text-sm text-foreground/70">
                  Published: {new Date(post.publish_date || Date.now()).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                {post.summary && (
                  <p className="mt-2">{post.summary}</p>
                )}
                <button 
                  className="mt-4 text-primary flex items-center text-sm"
                  onClick={() => handleViewDetails(post.id, 'blog-post')}
                >
                  Read Post <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            ))
          )}
        </div>
      ),
    },
  ];

  return (
    <section id="content" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Work</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore my qualifications, work experience, case studies, and blog posts.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={cn(
                  "glass-card rounded-xl p-6 transition-all duration-300 cursor-pointer reveal opacity-0 hover:border-primary/50 hover:shadow-lg",
                  activeCategory === card.id ? "border-primary/50" : ""
                )}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setActiveCategory(card.id as ContentCategory)}
              >
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-foreground/70">{card.description}</p>
                <button className="mt-4 text-primary flex items-center text-sm">
                  View Details <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Full-screen details view */}
        {activeCategory && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
            <div className="max-w-3xl w-full bg-secondary/30 p-6 md:p-10 rounded-xl glass-card max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <button
                  onClick={closeDetails}
                  className="text-foreground/50 hover:text-primary p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              {cards.find((card) => card.id === activeCategory)?.details}
              
              <div className="mt-8 text-center">
                <button
                  onClick={closeDetails}
                  className="px-6 py-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentCards;


import React, { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  FileText, 
  BookOpen, 
  ArrowRight, 
  X 
} from "lucide-react";
import { cn } from "@/lib/utils";

type ContentCategory = "qualifications" | "work" | "caseStudies" | "blogs" | null;

const ContentCards = () => {
  const [activeCategory, setActiveCategory] = useState<ContentCategory>(null);

  const closeDetails = () => {
    setActiveCategory(null);
  };

  const cards = [
    {
      id: "qualifications",
      title: "Qualifications",
      icon: <GraduationCap className="text-primary" size={24} />,
      description: "Educational background and certifications",
      details: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Education & Certifications</h3>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Master's in Psychology</h4>
            <p className="text-sm text-foreground/70">University of Psychology, 2018</p>
            <p className="mt-2">Specialized in cognitive psychology and user behavior analysis.</p>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">UX Design Certification</h4>
            <p className="text-sm text-foreground/70">Design Institute, 2019</p>
            <p className="mt-2">Focused on user-centered design methodologies and practices.</p>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Full-Stack Development Bootcamp</h4>
            <p className="text-sm text-foreground/70">Tech Academy, 2020</p>
            <p className="mt-2">Intensive training in modern web development technologies and practices.</p>
          </div>
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
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Senior UX Developer</h4>
            <p className="text-sm text-foreground/70">Digital Innovations Inc., 2020 - Present</p>
            <p className="mt-2">Lead the development of user-centered web applications, combining psychological insights with modern development practices.</p>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">UX Designer</h4>
            <p className="text-sm text-foreground/70">Creative Solutions, 2018 - 2020</p>
            <p className="mt-2">Designed user interfaces for various clients, focusing on creating intuitive and engaging user experiences.</p>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Research Assistant</h4>
            <p className="text-sm text-foreground/70">University Psychology Lab, 2016 - 2018</p>
            <p className="mt-2">Conducted research on user behavior and cognitive processes in digital environments.</p>
          </div>
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
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">E-Commerce Redesign</h4>
            <p className="text-sm text-foreground/70">Category: UX/UI, Psychology</p>
            <p className="mt-2">Redesigned an e-commerce platform using psychological principles to increase user engagement and conversion rates by 32%.</p>
            <button className="mt-4 text-primary flex items-center text-sm">
              View Case Study <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Mental Health App</h4>
            <p className="text-sm text-foreground/70">Category: Design, Development</p>
            <p className="mt-2">Developed a mobile application for mental health tracking, combining psychological insights with intuitive design.</p>
            <button className="mt-4 text-primary flex items-center text-sm">
              View Case Study <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Corporate Website Overhaul</h4>
            <p className="text-sm text-foreground/70">Category: Development, UX</p>
            <p className="mt-2">Completely redesigned and developed a corporate website, focusing on user needs and business goals.</p>
            <button className="mt-4 text-primary flex items-center text-sm">
              View Case Study <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
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
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">The Psychology of User Interfaces</h4>
            <p className="text-sm text-foreground/70">Published: January 15, 2023</p>
            <p className="mt-2">Exploring how psychological principles can inform better UI design decisions.</p>
            <button className="mt-4 text-primary flex items-center text-sm">
              Read Post <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Bridging Design and Development</h4>
            <p className="text-sm text-foreground/70">Published: March 22, 2023</p>
            <p className="mt-2">How designers and developers can work together more effectively for cohesive products.</p>
            <button className="mt-4 text-primary flex items-center text-sm">
              Read Post <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Cognitive Load in Web Applications</h4>
            <p className="text-sm text-foreground/70">Published: June 10, 2023</p>
            <p className="mt-2">Understanding and managing cognitive load to create more user-friendly applications.</p>
            <button className="mt-4 text-primary flex items-center text-sm">
              Read Post <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
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

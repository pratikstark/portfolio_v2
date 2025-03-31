
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getCaseStudyById } from "@/lib/api";
import { CaseStudy } from "@/types/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!id) {
        setError("Case study ID is missing");
        setLoading(false);
        return;
      }

      try {
        const data = await getCaseStudyById(id);
        if (!data) {
          setError("Case study not found");
        } else {
          setCaseStudy(data);
        }
      } catch (err) {
        console.error("Error fetching case study:", err);
        setError("Failed to load case study");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={goBack}
          className="flex items-center text-foreground/70 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="glass-card p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-destructive mb-4">Error</h2>
            <p>{error}</p>
          </div>
        ) : caseStudy ? (
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-xl mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{caseStudy.title}</h1>
              
              <div className="mb-8">
                <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  {caseStudy.category}
                </span>
                
                {caseStudy.tags && caseStudy.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {caseStudy.tags.map(tag => (
                      <span 
                        key={tag.id} 
                        className="bg-secondary/50 px-3 py-1 rounded-full text-xs"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {caseStudy.image_url && (
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src={caseStudy.image_url} 
                    alt={caseStudy.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              
              {caseStudy.description && (
                <div className="mb-8 text-lg text-foreground/80">
                  <p>{caseStudy.description}</p>
                </div>
              )}
              
              {caseStudy.content && (
                <div className="prose prose-invert max-w-none">
                  {/* Render content - in a real app, you might want to use a markdown renderer here */}
                  <div dangerouslySetInnerHTML={{ __html: caseStudy.content.replace(/\n/g, '<br>') }} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="glass-card p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
            <p>The case study you are looking for does not exist.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;

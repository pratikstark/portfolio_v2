
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getBlogPostById } from "@/lib/api";
import { BlogPost } from "@/types/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!id) {
        setError("Blog post ID is missing");
        setLoading(false);
        return;
      }

      try {
        const data = await getBlogPostById(id);
        if (!data) {
          setError("Blog post not found");
        } else {
          setBlogPost(data);
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
        ) : blogPost ? (
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-xl mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{blogPost.title}</h1>
              
              <div className="mb-8 text-foreground/70">
                <p className="text-sm">
                  Published: {formatDate(blogPost.publish_date)}
                </p>
                
                {blogPost.tags && blogPost.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {blogPost.tags.map(tag => (
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
              
              {blogPost.image_url && (
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src={blogPost.image_url} 
                    alt={blogPost.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              
              {blogPost.summary && (
                <div className="mb-8 text-lg italic text-foreground/80 border-l-4 border-primary/30 pl-4">
                  <p>{blogPost.summary}</p>
                </div>
              )}
              
              {blogPost.content && (
                <div className="prose prose-invert max-w-none">
                  {/* Render content - in a real app, you might want to use a markdown renderer here */}
                  <div dangerouslySetInnerHTML={{ __html: blogPost.content.replace(/\n/g, '<br>') }} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="glass-card p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
            <p>The blog post you are looking for does not exist.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPostDetail;

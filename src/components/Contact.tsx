
import React, { useState } from "react";
import { Send, Download } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to Supabase
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! I'll get back to you soon.", {
      description: "Thanks for reaching out!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would be a link to an actual resume file
    toast.info("Resume download initiated", {
      description: "The resume would download in a real implementation.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="glass-card rounded-xl p-8 reveal opacity-0">
            <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between reveal opacity-0">
            <div className="glass-card rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-semibold mb-6">Resume</h3>
              <p className="text-foreground/70 mb-6">
                Want to learn more about my professional background? Download my resume to see my complete experience, skills, and education.
              </p>
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-6 py-3 rounded-lg transition-colors w-full"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </button>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-foreground/70 text-sm">Email</span>
                  <a href="mailto:contact@example.com" className="text-primary hover:underline">
                    contact@example.com
                  </a>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-foreground/70 text-sm">Location</span>
                  <span>San Francisco, CA</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-foreground/70 text-sm">Connect</span>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                      GitHub
                    </a>
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

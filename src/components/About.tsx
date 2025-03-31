
import React, { useEffect, useRef } from "react";
import { User, Lightbulb, Code } from "lucide-react";
import { WebsiteSettings } from "@/types/supabase";

interface AboutProps {
  settings?: WebsiteSettings;
}

const About: React.FC<AboutProps> = ({ settings }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // If section is set to not visible, don't render anything
  if (settings && settings.visible === false) {
    return null;
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            With a unique blend of expertise in psychology, design, and coding, I create digital
            experiences that are not only visually appealing but also psychologically engaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-8 reveal opacity-0" style={{ transitionDelay: "0.1s" }}>
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <User className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Psychology</h3>
            <p className="text-foreground/70">
              My background in psychology allows me to create user experiences
              that connect on a deeper level, understanding the human mind and behavior.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 reveal opacity-0" style={{ transitionDelay: "0.3s" }}>
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Design</h3>
            <p className="text-foreground/70">
              I combine aesthetic principles with psychological insights to create
              designs that are not only beautiful but also intuitive and engaging.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 reveal opacity-0" style={{ transitionDelay: "0.5s" }}>
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Code className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Code</h3>
            <p className="text-foreground/70">
              My technical skills allow me to bring designs to life with clean, efficient
              code that performs well and creates seamless user experiences.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto reveal opacity-0">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-foreground/70 mb-4">
              With over a decade of experience bridging the gap between psychology, 
              design, and technology, I've developed a unique approach to creating 
              digital experiences that truly resonate with users.
            </p>
            <p className="text-foreground/70">
              I believe that the most effective digital products are those that 
              understand human behavior, present information beautifully, and function 
              flawlessly. This intersection is where I thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

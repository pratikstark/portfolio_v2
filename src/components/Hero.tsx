
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen hero-pattern flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10"></div>
      
      <div className="container px-4 z-20">
        <div 
          className={`flex flex-col items-center text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-6">
            <span className="block text-primary animate-pulse-slow">Psychology.</span> 
            <span className="block delay-300">Design.</span> 
            <span className="block text-primary animate-pulse-slow delay-500">Code.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            Creating thoughtful digital experiences that merge psychological insights with elegant design and efficient code.
          </p>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
            <a
              href="#about"
              className="px-8 py-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary transition-colors duration-300"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce flex flex-col items-center text-sm text-foreground/50 hover:text-primary transition-colors"
      >
        <span className="mb-2">Scroll Down</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;

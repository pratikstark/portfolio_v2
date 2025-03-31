
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/50 text-sm">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#hero" className="text-foreground/50 hover:text-primary transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

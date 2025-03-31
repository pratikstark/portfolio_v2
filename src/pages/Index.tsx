
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ContentCards from "@/components/ContentCards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SettingsProvider, useSettings } from "@/context/SettingsContext";

const IndexContent = () => {
  const { settings, loading } = useSettings();

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
          <p className="text-foreground/70">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero settings={settings.hero} />
      <About settings={settings.about} />
      <ContentCards settings={settings.content} />
      <Contact settings={settings.contact} />
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <SettingsProvider>
      <IndexContent />
    </SettingsProvider>
  );
};

export default Index;


import React, { createContext, useContext, useState, useEffect } from "react";
import { getWebsiteSettings, subscribeToWebsiteSettings } from "@/lib/api";
import { WebsiteSettings } from "@/types/supabase";

interface SettingsContextType {
  settings: Record<string, WebsiteSettings>;
  loading: boolean;
  error: Error | null;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: {},
  loading: true,
  error: null,
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [settings, setSettings] = useState<Record<string, WebsiteSettings>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        setLoading(true);
        const data = await getWebsiteSettings();
        setSettings(data);
      } catch (err) {
        console.error("Error loading settings:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

    loadSettings();

    // Subscribe to real-time updates
    const unsubscribe = subscribeToWebsiteSettings((payload) => {
      console.log("Real-time settings update:", payload);
      // Reload all settings when any setting changes
      loadSettings();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading, error }}>
      {children}
    </SettingsContext.Provider>
  );
};

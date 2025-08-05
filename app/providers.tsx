"use client";

import { createContext, useContext, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

import { defaultTheme, ThemeConfig } from "@/config/theme";
import { AuthProvider } from "@/context/AuthContext";
import { ToastProvider } from "@/components/ui/Toast";

const ThemeConfigContext = createContext<{
  theme: ThemeConfig;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
}>({
  theme: defaultTheme,
  updateTheme: () => {},
});

export const useThemeConfig = () => useContext(ThemeConfigContext);

export interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function Providers({ children }: ProvidersProps) {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(defaultTheme);

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    setThemeConfig((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return (
    <ThemeConfigContext.Provider value={{ theme: themeConfig, updateTheme }}>
      <NextThemesProvider
        disableTransitionOnChange
        enableSystem
        attribute="class"
        defaultTheme={themeConfig.mode}
      >
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <AuthProvider>
              <React.Fragment key="main-content">{children}</React.Fragment>
              <React.Fragment key="devtools">
                <ReactQueryDevtools initialIsOpen={false} />
              </React.Fragment>
            </AuthProvider>
          </ToastProvider>
        </QueryClientProvider>
      </NextThemesProvider>
    </ThemeConfigContext.Provider>
  );
}

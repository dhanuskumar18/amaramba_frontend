"use client";

import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Footer from "@/components/Footer";
import Layout from "@/components/layout/Layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <Layout
        initialTheme={{
          menuOrientation: "vertical",
          miniDrawer: false,
          themeDirection: "ltr",
          container: true,
          fontFamily: "Public Sans",
          mode: "light",
          presetColor: "default",
          i18n: "en",
        }}
      >
        {children}
      </Layout>
      <Footer />
    </ProtectedRoute>
  );
}

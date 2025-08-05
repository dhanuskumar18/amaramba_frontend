"use client";

import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Layout from "@/components/layout/Layout";
import { defaultTheme } from "@/config/theme";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <Layout initialTheme={defaultTheme}>{children}</Layout>
    </ProtectedRoute>
  );
}

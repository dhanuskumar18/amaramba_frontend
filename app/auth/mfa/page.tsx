"use client";

import React from "react";

import { AuthLayout } from "@/components/ui/AuthLayout";
import { MfaManagement } from "@/components/auth/MfaManagement";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function MfaPage() {
  return (
    <ProtectedRoute requireAuth={true}>
      <AuthLayout
        subtitle="Secure your account with an additional layer of protection"
        title="Multi-Factor Authentication"
      >
        <div className="max-w-2xl mx-auto">
          <MfaManagement />
        </div>
      </AuthLayout>
    </ProtectedRoute>
  );
}

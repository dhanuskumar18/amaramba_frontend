"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAuth = true,
  redirectTo = "/auth/login",
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Only handle redirects if we're not loading and not already on the target path
    if (!isLoading) {
      if (requireAuth && !isAuthenticated && pathname !== redirectTo) {
        setShouldRedirect(true);
        router.replace(redirectTo);
      } else if (!requireAuth && isAuthenticated && pathname !== "/dashboard") {
        setShouldRedirect(true);
        router.replace("/dashboard");
      } else {
        setShouldRedirect(false);
      }
    }
  }, [isAuthenticated, isLoading, requireAuth, redirectTo, router, pathname]);

  // Show loading state while checking authentication or during redirect
  if (isLoading || shouldRedirect) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
      </div>
    );
  }

  // Only render children if authentication requirements are met
  if ((requireAuth && isAuthenticated) || (!requireAuth && !isAuthenticated)) {
    return <>{children}</>;
  }

  // Return loading state while redirect happens
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
    </div>
  );
};

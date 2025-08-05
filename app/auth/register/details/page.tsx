"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function RegistrationDetailsPage() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    // Get all route parameters
    const routeParams = new URLSearchParams();
    console.log(params, 'params');

    // Convert route params to query params for the redirect
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        routeParams.append(key, value as string);
      }
    });

    // Redirect to set-password with all the same parameters
    router.replace(`/auth/register/set-password?${routeParams.toString()}`);
  }, [router, params]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto" />
        <p className="mt-4 text-gray-600">
          Redirecting to complete registration...
        </p>
      </div>
    </div>
  );
}

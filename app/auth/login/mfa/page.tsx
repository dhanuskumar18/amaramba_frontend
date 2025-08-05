"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";

import { AuthLayout } from "@/components/ui/AuthLayout";
import { OtpInput } from "@/components/ui/OtpInput";
import { useVerifyMfaLogin } from "@/hooks/useAuthApi";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { decryptToken } from "@/utils/decryptToken";

export default function MfaPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [mfaCode, setMfaCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [tempToken, setTempToken] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("loginEmail");
    const storedTempToken = sessionStorage.getItem("mfaToken");

    if (!storedEmail || !storedTempToken) {
      router.push("/auth/login");

      return;
    }

    setEmail(storedEmail);
    setTempToken(storedTempToken);
  }, [router]);

  const mfaMutation = useVerifyMfaLogin(tempToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mfaCode.length !== 6) return;

    setError("");
    mfaMutation.mutate(
      { token: mfaCode },
      {
        onSuccess: (response) => {
          if (response.status === "success" && response.data) {
            // MFA verification successful - use temp token as final auth token
            const user = decryptToken(tempToken);

            if (user) {
              toast({
                title: "MFA Verified",
                description: "Authentication successful. Welcome back!",
              });
              login(tempToken, user);
              sessionStorage.removeItem("loginEmail");
              sessionStorage.removeItem("mfaToken");
              router.push("/dashboard");
            } else {
              setError("Authentication failed. Please try again.");
            }
          } else {
            setError(response.message || "Invalid MFA code. Please try again.");
          }
        },
        onError: (err: any) => {
          console.error("MFA verification error:", err);

          // Handle different error scenarios
          if (err?.response?.status === 401) {
            setError("Session expired. Please login again.");
            setTimeout(() => {
              sessionStorage.removeItem("loginEmail");
              sessionStorage.removeItem("mfaToken");
              router.push("/auth/login");
            }, 2000);
          } else if (err?.response?.status === 400) {
            setError("Invalid MFA code. Please try again.");
          } else {
            setError(err?.message || "Verification failed. Please try again.");
          }
        },
      },
    );
  };

  const handleBackToLogin = () => {
    sessionStorage.removeItem("loginEmail");
    sessionStorage.removeItem("mfaToken");
    router.push("/auth/login");
  };

  if (!email) {
    return null; // Will redirect to login page
  }

  return (
    <AuthLayout
      showBackButton
      backUrl="/auth/login"
      subtitle="Enter the 6-digit code from your authenticator app (Google Authenticator, Authy, etc.)"
      title="Two-Factor Authentication"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <OtpInput
            disabled={mfaMutation.isPending}
            error={!!error}
            errorMessage={error}
            value={mfaCode}
            onChange={setMfaCode}
          />
        </div>

        <Button
          className="w-full"
          color="primary"
          isDisabled={mfaCode.length !== 6 || mfaMutation.isPending}
          isLoading={mfaMutation.isPending}
          size="lg"
          type="submit"
        >
          Verify & Sign In
        </Button>

        <div className="text-center space-y-3">
          <p className="text-sm text-gray-600">
            Having trouble?{" "}
            <button
              className="text-blue-600 hover:text-blue-700 disabled:text-gray-400"
              disabled={mfaMutation.isPending}
              type="button"
              onClick={handleBackToLogin}
            >
              Back to login
            </button>
          </p>

          {email && (
            <p className="text-xs text-gray-500">Authenticating: {email}</p>
          )}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Open your authenticator app and enter the
            current 6-digit code. The code changes every 30 seconds.
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}

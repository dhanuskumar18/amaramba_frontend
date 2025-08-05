"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import EditText from "@/components/ui/EditText";
import { Button } from "@/components/ui/button";
import { useForgotPassword } from "@/hooks/useAuthApi";
import { useToast } from "@/hooks/use-toast";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const forgotPasswordMutation = useForgotPassword();

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    forgotPasswordMutation.mutate(
      { email },
      {
        onSuccess: (response) => {
          if (response.status === "success") {
            toast({
              title: "Reset email sent",
              description: "Check your email for password reset instructions",
            });
            sessionStorage.setItem("resetEmail", email);
            router.push("/auth/verify-reset-otp");
          } else {
            setError(
              response.message ||
                "Failed to send reset email. Please try again.",
            );
          }
        },
        onError: (err: any) => {
          setError(
            err?.message || "Failed to send reset email. Please try again.",
          );
        },
      },
    );
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <ProtectedRoute requireAuth={false}>
      <div className="w-full flex flex-row h-screen">
        {/* Left Side - Mountain Climbing Background */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <Image
            src="/images/signup.png"
            alt="Mountain climbing inspiration"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-between relative h-screen">
          <div className="w-full max-w-md space-y-5 py-32 px-8 lg:px-16 ">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/amaramba_logo.png"
                alt="Amaramba Capital"
                width={120}
                height={82}
                className="w-[120px] h-[82px]"
                priority
              />
            </div>

            {/* Forgot Password Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-left">
                <h1 className="text-2xl font-lexend font-normal text-global-1">
                  Forgot your password?
                </h1>
                <p className="text-sm font-lexend font-normal text-global-2 mt-2">
                  Enter your email to receive reset instructions
                </p>
              </div>

              <div className="space-y-4">
                <EditText
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="w-full [&_input::placeholder]:text-gray-400 [&_input::placeholder]:opacity-100 [&_input::placeholder]:text-base"
                  required
                />

                {/* Error Messages */}
                {error && (
                  <div className="text-sm text-red-600 text-center bg-red-50 p-3 rounded-md">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={!isValidEmail(email) || forgotPasswordMutation.isPending}
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white !opacity-100 disabled:opacity-50"
                  size="default"
                >
                  {forgotPasswordMutation.isPending ? "Sending..." : "Send Reset Email"}
                </Button>
              </div>
            </form>
          </div>

          {/* Footer with Divider */}
          <div className="px-8 lg:px-16 py-5 w-full border-t-2 border-gray-200  ">
            <div className="w-full max-w-md mx-auto">
              <div className="pt-2 space-y-2">
                {/* Back to Sign In Link */}
                <div className="text-center">
                  <span className="text-sm font-lexend font-normal text-global-1">
                    Remember your password?{" "}
                  </span>
                  <Link
                    href="/auth/login"
                    className="text-blue-400 text-sm font-lexend font-normal hover:underline transition-all duration-200"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import EditText from "@/components/ui/EditText";
import { Button } from "@/components/ui/button";
import { PasswordStrength } from "@/components/ui/PasswordStrength";
import { useResetPassword } from "@/hooks/useAuthApi";
import { useToast } from "@/hooks/use-toast";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const { toast } = useToast();
  const resetPasswordMutation = useResetPassword();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("resetEmail");
    const storedToken = sessionStorage.getItem("resetToken");

    if (!storedEmail || !storedToken) {
      router.push("/auth/forgot-password");
      return;
    }
    setEmail(storedEmail);
    setResetToken(storedToken);
  }, [router]);

  const isPasswordValid = (password: string) => {
    const requirements = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /\d/.test(password),
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    ];
    const hasMinLength = requirements[0];
    const otherRequirements = requirements.slice(1);
    const passedOtherRequirements = otherRequirements.filter(
      (req) => req,
    ).length;

    return hasMinLength && passedOtherRequirements >= 3;
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setError(""); // Clear error when user types
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!isPasswordValid(password)) {
      setError("Password does not meet all requirements");
      return;
    }
    resetPasswordMutation.mutate(
      { email, password, confirmPassword, resetToken },
      {
        onSuccess: (response) => {
          if (response.status === "success") {
            toast({
              title: "Password reset successful",
              description: "Your password has been reset successfully",
            });
            sessionStorage.removeItem("resetEmail");
            sessionStorage.removeItem("resetToken");
            router.push("/auth/login");
          } else {
            setError(
              response.message || "Failed to reset password. Please try again.",
            );
          }
        },
        onError: (err: any) =>
          setError(
            err?.message || "Failed to reset password. Please try again.",
          ),
      },
    );
  };

  const isFormValid = () => {
    return (
      isPasswordValid(password) &&
      password === confirmPassword &&
      !resetPasswordMutation.isPending
    );
  };

  if (!email || !resetToken) return null;

  return (
    <ProtectedRoute requireAuth={false}>
      <div className="w-full flex flex-row ">
        {/* Left Side - Mountain Climbing Background */}
        <div className="hidden lg:flex lg:w-1/2 relative ">
          <Image
            src="/images/signup.png"
            alt="Mountain climbing inspiration"
            height={1000}
            width={1000}
            className=" h-full w-full"
            priority
           
          />
        </div>

        {/* Right Side - Reset Password Form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-between relative ">
          <div className="w-full max-w-md space-y-5 py-32 px-8 lg:px-16">
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

            {/* Reset Password Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-left">
                <h1 className="text-2xl font-lexend font-normal text-global-1">
                  Reset your password
                </h1>
                <p className="text-sm font-lexend font-normal text-global-2 mt-2">
                  Enter a new password for your account
                </p>
              </div>

              <div className="space-y-4">
                <EditText
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your new password"
                  className="w-full [&_input::placeholder]:text-gray-400 [&_input::placeholder]:opacity-100 [&_input::placeholder]:text-base"
                  required
                />
                
                {password && <PasswordStrength password={password} />}
                
                <EditText
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Confirm your new password"
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
                  disabled={!isFormValid()}
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white !opacity-100 disabled:opacity-50"
                  size="default"
                >
                  {resetPasswordMutation.isPending ? "Resetting..." : "Reset Password"}
                </Button>
              </div>
            </form>
          </div>

          {/* Footer with Divider */}
          <div className="px-8 lg:px-16 py-5 w-full border-t-2 border-gray-200">
            <div className="w-full max-w-md mx-auto">
              <div className="pt-2 space-y-2">
                {/* Back to Forgot Password Link */}
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

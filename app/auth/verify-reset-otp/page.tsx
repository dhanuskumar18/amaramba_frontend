"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InputOtp } from "@heroui/react";
import { useVerifyResetOtp, useResendOtp } from "@/hooks/useAuthApi";
import { useToast } from "@/hooks/use-toast";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function VerifyResetOtpPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const verifyResetOtpMutation = useVerifyResetOtp();
  const resendOtpMutation = useResendOtp();

  React.useEffect(() => {
    const storedEmail = sessionStorage.getItem("resetEmail");

    if (!storedEmail) {
      router.push("/auth/forgot-password");
      return;
    }
    setEmail(storedEmail);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    const otp = String(formData.get("otp") || "");

    if (otp.length !== 6) return;
    verifyResetOtpMutation.mutate(
      { email, otp },
      {
        onSuccess: (response) => {
          if (response.status === "success" && response.data?.resetToken) {
            sessionStorage.setItem("resetToken", response.data.resetToken);
            router.push("/auth/reset-password");
          } else {
            setError(response.message || "Invalid OTP. Please try again.");
          }
        },
        onError: (err: any) =>
          setError(err?.message || "Invalid OTP. Please try again."),
      },
    );
  };

  const handleResendOtp = async () => {
    setError("");
    resendOtpMutation.mutate(
      { email },
      {
        onSuccess: (response) => {
          toast({
            title: "OTP resent",
            description: "Check your email for the new verification code",
          });
        },
        onError: (err: any) =>
          setError(err?.message || "Failed to resend OTP. Please try again."),
      },
    );
  };

  if (!email) return null;

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

        {/* Right Side - Verify OTP Form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-between relative h-screen">
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

            {/* Verify OTP Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-left">
                <h1 className="text-2xl font-lexend font-normal text-global-1">
                  Verify Reset Code
                </h1>
                <p className="text-sm font-lexend font-normal text-global-2 mt-2">
                  Enter the 6-digit code sent to {email}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col items-center gap-4">
                  <InputOtp
                    isRequired
                    aria-label="OTP input field"
                    classNames={{ 
                      input: "w-12 h-12 text-xl text-center border border-gray-300 rounded-md focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-20",
                      wrapper: "gap-2"
                    }}
                    isDisabled={verifyResetOtpMutation.isPending}
                    length={6}
                    name="otp"
                    placeholder="0"
                  />
                  
                  {/* Error Messages */}
                  {error && (
                    <div className="text-sm text-red-600 text-center bg-red-50 p-3 rounded-md w-full">
                      {error}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={verifyResetOtpMutation.isPending}
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white !opacity-100 disabled:opacity-50"
                  size="default"
                >
                  {verifyResetOtpMutation.isPending ? "Verifying..." : "Verify Code"}
                </Button>

                <div className="text-center space-y-3">
                  <p className="text-sm font-lexend font-normal text-global-2">
                    Didn't receive the code?{" "}
                    <button
                      className="text-blue-400 hover:text-blue-500 disabled:text-gray-400 font-lexend font-normal hover:underline transition-all duration-200"
                      disabled={resendOtpMutation.isPending}
                      type="button"
                      onClick={handleResendOtp}
                    >
                      {resendOtpMutation.isPending ? "Sending..." : "Resend"}
                    </button>
                  </p>
                </div>
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
                    Wrong email?{" "}
                  </span>
                  <Link
                    href="/auth/forgot-password"
                    className="text-blue-400 text-sm font-lexend font-normal hover:underline transition-all duration-200"
                  >
                    Go back
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

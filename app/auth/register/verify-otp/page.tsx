"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { InputOtp } from "@heroui/react";

import { AuthLayout } from "@/components/ui/AuthLayout";
import { useVerifyOtp, useResendOtp } from "@/hooks/useAuthApi";

export default function VerifyOtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const verifyOtpMutation = useVerifyOtp();
  const resendOtpMutation = useResendOtp();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("registerEmail");

    if (!storedEmail) {
      router.push("/auth/register/email");

      return;
    }
    setEmail(storedEmail);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) return;

    setError("");
    verifyOtpMutation.mutate(
      { email, otp },
      {
        onSuccess: (response) => {
          if (response.status === "success" && response.data?.verified) {
            router.push("/auth/register/set-password");
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
          if (response.status === "success") {
            console.log("OTP resent successfully");
          } else {
            setError(
              response.message || "Failed to resend OTP. Please try again.",
            );
          }
        },
        onError: (err: any) =>
          setError(err?.message || "Failed to resend OTP. Please try again."),
      },
    );
  };

  if (!email) {
    return null; // Will redirect to email page
  }

  return (
    <AuthLayout
      showBackButton
      backUrl="/auth/register/email"
      subtitle={`Enter the 6-digit code sent to ${email}`}
      title="Verify your email"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col items-center gap-2">
            <InputOtp
              isDisabled={verifyOtpMutation.isLoading}
              length={6}
              value={otp}
              onValueChange={setOtp}
            />
            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}
          </div>
        </div>

        <Button
          className="w-full"
          color="primary"
          isDisabled={otp.length !== 6 || verifyOtpMutation.isPending}
          isLoading={verifyOtpMutation.isPending}
          size="lg"
          type="submit"
        >
          Verify Email
        </Button>

        <div className="text-center space-y-3">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button
              className="text-blue-600 hover:text-blue-700 disabled:text-gray-400"
              disabled={resendOtpMutation.isPending}
              type="button"
              onClick={handleResendOtp}
            >
              Resend
            </button>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}

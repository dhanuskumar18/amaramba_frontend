"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { AuthLayout } from "@/components/ui/AuthLayout";
import { PasswordStrength } from "@/components/ui/PasswordStrength";
import { useSetPassword } from "@/hooks/useAuthApi";

export default function SetPasswordPage() {
  const router = useRouter();
  const params = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isGoogleAuth, setIsGoogleAuth] = useState(false);

  const setPasswordMutation = useSetPassword();

  useEffect(() => {
    // Check for Google OAuth params
    const emailParam = params.email as string;
    const provider = params.provider as string;
    const isGoogleProvider = provider === "google";

    if (emailParam && isGoogleProvider) {
      setEmail(emailParam);
      setIsGoogleAuth(true);

      return;
    }

    // Regular email registration flow
    const storedEmail = sessionStorage.getItem("registerEmail");

    if (!storedEmail) {
      router.push("/auth/register/email");

      return;
    }
    setEmail(storedEmail);
  }, [params, router]);

  const isPasswordValid = (password: string) => {
    // Simplified requirements - at least 8 characters and at least 3 of the other requirements
    const requirements = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /\d/.test(password),
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    ];

    // Must have at least 8 characters and at least 3 of the other 4 requirements
    const hasMinLength = requirements[0];
    const otherRequirements = requirements.slice(1);
    const passedOtherRequirements = otherRequirements.filter(
      (req) => req,
    ).length;

    return hasMinLength && passedOtherRequirements >= 3;
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

    const requestData = {
      email,
      password,
      confirmPassword,
      ...(isGoogleAuth && { provider: "google" }), // Add provider only for Google OAuth
    };

    setPasswordMutation.mutate(requestData, {
      onSuccess: (response) => {
        if (response.status === "success") {
          // Pass along Google OAuth data to onboarding
          if (isGoogleAuth) {
            const searchParams = new URLSearchParams({
              email,
              provider: "google",
              ...(params.name && {
                name: params.name as string,
              }),
              ...(params.picture && {
                picture: params.picture as string,
              }),
              isEmailVerified: "true",
            });

            router.push(`/auth/register/onboarding?${searchParams}`);
          } else {
            router.push("/auth/register/onboarding");
          }
        } else {
          setError(
            response.message || "Failed to set password. Please try again.",
          );
        }
      },
      onError: (err: any) =>
        setError(err?.message || "Failed to set password. Please try again."),
    });
  };

  const isFormValid = () => {
    const passwordValid = isPasswordValid(password);
    const passwordsMatch = password === confirmPassword;
    const notLoading = !setPasswordMutation.isPending;

    return passwordValid && passwordsMatch && notLoading;
  };

  if (!email) {
    return null; // Will redirect to email page
  }

  return (
    <AuthLayout
      backUrl="/auth/register/verify-otp"
      showBackButton={!isGoogleAuth}
      subtitle="Create a strong password for your account"
      title="Set your password"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            disabled
            classNames={{
              input: "text-base bg-gray-100",
            }}
            label="Email address"
            type="email"
            value={email}
          />

          <Input
            isRequired
            classNames={{
              input: "text-base",
            }}
            isInvalid={!!error && !isPasswordValid(password)}
            label="New Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {password && <PasswordStrength password={password} />}

          <Input
            isRequired
            classNames={{
              input: "text-base",
            }}
            errorMessage={
              confirmPassword.length > 0 && password !== confirmPassword
                ? "Passwords do not match"
                : ""
            }
            isInvalid={
              confirmPassword.length > 0 && password !== confirmPassword
            }
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && (
          <div className="text-sm text-red-600 text-center">{error}</div>
        )}

        <Button
          className="w-full"
          color="primary"
          isDisabled={!isFormValid()}
          isLoading={setPasswordMutation.isPending}
          size="lg"
          type="submit"
        >
          Continue
        </Button>
      </form>
    </AuthLayout>
  );
}

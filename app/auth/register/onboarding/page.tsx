"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import ReCAPTCHA from "react-google-recaptcha";

import { AuthLayout } from "@/components/ui/AuthLayout";
import { useToast } from "@/hooks/use-toast";
import { useCompleteSignup } from "@/hooks/useAuthApi";

export default function OnboardingPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const [registeredWithSecurities, setRegisteredWithSecurities] =
    useState(false);
  const [pep, setPep] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isGoogleAuth, setIsGoogleAuth] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const completeSignupMutation = useCompleteSignup();

  useEffect(() => {
    // Check for Google OAuth params from route parameters
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!acceptTerms) {
      setError("You must accept the terms and conditions");

      return;
    }

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification");

      return;
    }

    const requestData = {
      email,
      registeredWithSecurities,
      pep,
      acceptTerms,
      recaptchaToken,
      ...(isGoogleAuth && { provider: "google" }),
    };

    completeSignupMutation.mutate(requestData, {
      onSuccess: (response) => {
        if (response.status === "success") {
          // Clear registration data
          sessionStorage.removeItem("registerEmail");

          // Show success message
          toast({
            title: "Registration successful",
            description: "Please login to continue",
          });

          // Redirect to login page
          router.push("/auth/login");
        } else {
          setError(
            response.message ||
              "Failed to complete registration. Please try again.",
          );
        }
      },
      onError: (err: any) => {
        setError(
          err?.message || "Failed to complete onboarding. Please try again.",
        );
        recaptchaRef.current?.reset();
        setRecaptchaToken("");
      },
    });
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token || "");
    setError(""); // Clear any previous reCAPTCHA errors
  };

  const isFormValid = () => {
    return acceptTerms && recaptchaToken && !completeSignupMutation.isPending;
  };

  if (!email) {
    return null; // Will redirect to email page
  }

  return (
    <AuthLayout
      backUrl="/auth/register/set-password"
      showBackButton={!isGoogleAuth}
      subtitle="Tell us a bit more about yourself"
      title="Complete your profile"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-3">
            <Switch
              isSelected={registeredWithSecurities}
              size="lg"
              onValueChange={setRegisteredWithSecurities}
            >
              I am registered with securities regulators
            </Switch>
            <p className="text-sm text-gray-600 ml-12">
              Check this if you are registered with any securities regulatory
              body
            </p>
          </div>

          <div className="space-y-3">
            <Switch isSelected={pep} size="lg" onValueChange={setPep}>
              I am a Politically Exposed Person (PEP)
            </Switch>
            <p className="text-sm text-gray-600 ml-12">
              A PEP is someone who has been entrusted with a prominent public
              function
            </p>
          </div>

          <div className="space-y-3">
            <Switch
              className={!!error && !acceptTerms ? "border-red-500" : ""}
              isSelected={acceptTerms}
              size="lg"
              onValueChange={setAcceptTerms}
            >
              I accept the Terms and Conditions
            </Switch>
            {!!error && !acceptTerms && (
              <p className="text-sm text-red-600 ml-12">
                You must accept the terms and conditions
              </p>
            )}
            <p className="text-sm text-gray-600 ml-12">
              You must accept our terms and conditions to continue
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              } // Default test key
              onChange={handleRecaptchaChange}
            />
          </div>
          {error && !recaptchaToken && (
            <p className="text-sm text-red-600 text-center">
              Please complete the reCAPTCHA verification
            </p>
          )}
        </div>

        {error && (
          <div className="text-sm text-red-600 text-center">{error}</div>
        )}

        <Button
          className="w-full"
          color="primary"
          isDisabled={!isFormValid()}
          isLoading={completeSignupMutation.isPending}
          size="lg"
          type="submit"
        >
          Complete Registration
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            By completing registration, you agree to our{" "}
            <a className="text-blue-600 hover:text-blue-700" href="/terms">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-blue-600 hover:text-blue-700" href="/privacy">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}

"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import EditText from "@/components/ui/EditText";
import PasswordInput from "@/components/ui/PasswordInput";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { useAuthWithToast } from "@/hooks/useAuthWithToast";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useLogin } from "@/hooks/useAuthApi";
import { useAuth } from "@/context/AuthContext";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { loginWithToast } = useAuthWithToast();
  const { loginWithGoogle } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [error, setError] = useState<string>("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const loginMutation = useLogin();

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setError(""); // Clear error when user types
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setError(""); // Clear error when user types
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification");
      return;
    }

    loginMutation.mutate(
      { email, password, recaptchaToken },
      {
        onSuccess: (response) => {
          if (response.status === "success" && response.data) {
            // Check if MFA is required
            if (response.data.requireMfa) {
              // Store email and temporary token for MFA page and redirect
              sessionStorage.setItem("loginEmail", email);
              if (response.data.token) {
                sessionStorage.setItem("mfaToken", response.data.token);
              }
              router.replace("/auth/login/mfa");
            } else {
              // Normal login - use token and user data
              if (response.data.token && response.data.user) {
                loginWithToast(response.data.token, response.data.user);
                router.replace("/dashboard");
              } else {
                setError("Login failed. Please try again.");
              }
            }
          } else {
            setError(
              response.message || "Invalid email or password. Please try again."
            );
          }
        },
        onError: (err: any) => {
          setError(
            err?.message || "Invalid email or password. Please try again."
          );
          recaptchaRef.current?.reset();
          setRecaptchaToken("");
        },
      }
    );
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token || "");
    setError(""); // Clear any previous reCAPTCHA errors
  };

  const handleGoogleLogin = () => {
    loginWithGoogle("login");
  };

  const isValidForm = () => {
    return email && password && recaptchaToken && !loginMutation.isPending;
  };

  return (
    <ProtectedRoute requireAuth={false}>
      <div className="w-full  flex flex-row h-screen">
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

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center relative h-screen">
          <div className="w-full max-w-md space-y-5 py-10 px-8 lg:px-16">
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

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="text-left">
                <h1 className="text-2xl font-lexend font-normal text-global-1">
                  Sign in
                </h1>
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

                <PasswordInput
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className="[&_input::placeholder]:text-gray-400 [&_input::placeholder]:opacity-100"
                  required
                />
                {/* Forgot Password Link */}
                <div className="text-right">
                  <Link
                    href="/auth/forgot-password"
                    className="text-blue-400 text-sm font-lexend font-normal hover:underline transition-all duration-200"
                  >
                    Forgot your password?
                  </Link>
                </div>
                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={
                      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                      "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    }
                    onChange={handleRecaptchaChange}
                  />
                </div>

                {/* Error Messages */}
                {error && (
                  <div className="text-sm text-red-600 text-center">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={!isValidForm()}
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white !opacity-100 disabled:opacity-50"
                 
                >
                  {loginMutation.isPending ? "Signing in..." : "Sign in"}
                </Button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Google Login Button */}
                <Button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
                 
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </div>
            </form>
          </div>
          {/* Footer with Divider */}
          <div className="  px-8 lg:px-16 w-full border-t-2  border-gray-200">
            <div className="w-full max-w-md mx-auto">
              <div className="pt-2 space-y-2">
                {/* Sign Up Link */}
                <div className="text-center">
                  <span className="text-sm font-lexend font-normal text-global-1">
                    Don't have an account?{" "}
                  </span>
                  <Link
                    href="/auth/register/email"
                    className="text-blue-400 text-sm font-lexend font-normal hover:underline transition-all duration-200"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default LoginPage;

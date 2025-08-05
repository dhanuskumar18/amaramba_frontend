'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';    
import EditText from '@/components/ui/EditText';
import PasswordInput from '@/components/ui/PasswordInput';
import { OtpInput } from '@/components/ui/OtpInput';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ReCAPTCHA from 'react-google-recaptcha';
import { useInitiateSignup, useVerifyOtp, useSetPassword, useCompleteSignup, useResendOtp } from '@/hooks/useAuthApi';
import { useAuthWithToast } from '@/hooks/useAuthWithToast';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

// Loading component for Suspense fallback
const SignUpLoading = () => (
  <div className="w-full min-h-screen flex flex-row">
    <div className="hidden lg:flex lg:w-1/2 relative">
      <div className="w-full h-full bg-gray-200 animate-pulse"></div>
    </div>
    <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center px-8 py-12 lg:px-16">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <div className="w-[120px] h-[82px] bg-gray-200 animate-pulse rounded"></div>
        </div>
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 animate-pulse rounded"></div>
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-12 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DealerSignUpPageContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loginWithToast } = useAuthWithToast();
  
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>(""); 
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [otpTimer, setOtpTimer] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  // Google OAuth states
  const [isGoogleAuth, setIsGoogleAuth] = useState<boolean>(false);
  const [googleUserData, setGoogleUserData] = useState<any>(null);
  
  // Step 4 form states
  const [isPEP, setIsPEP] = useState<string>('');
  const [isRegistered, setIsRegistered] = useState<string>('');
  const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false);

  // API hooks
  const initiateSignupMutation = useInitiateSignup();
  const verifyOtpMutation = useVerifyOtp();
  const setPasswordMutation = useSetPassword();
  const completeSignupMutation = useCompleteSignup();
  const resendOtpMutation = useResendOtp();

  useEffect(() => {
    // Check if this is a Google OAuth flow
    const emailParam = searchParams.get('email');
    const provider = searchParams.get('provider');
    const name = searchParams.get('name');
    const picture = searchParams.get('picture');
    
    if (emailParam && provider === "google") {
      // This is a Google OAuth user who needs to complete registration
      setEmail(emailParam);
      setIsGoogleAuth(true);
      
      // Extract Google user data from URL params
      const googleData = {
        email: emailParam,
        name: name || "",
        picture: picture || "",
        provider: "google"
      };
      setGoogleUserData(googleData);
      
      // Skip to password creation step for Google users
      setCurrentStep(3);
    }
  }, [searchParams]);

  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);

      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setError(''); // Clear error when user types
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
    setError(''); // Clear error when user types
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setError(''); // Clear error when user types
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setError(''); // Clear error when user types
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token || '');
    setError(''); // Clear any previous reCAPTCHA errors
  };

  const handleGetOtp = async () => {
    if (!email) return;
    setError('');

    initiateSignupMutation.mutate(
      { email },
      {
        onSuccess: (response) => {
          if (response.status === 'success') {
            setCurrentStep(2);
            setOtpTimer(300); // 5 minutes timer
          } else {
            setError(response.message || 'Failed to send OTP. Please try again.');
          }
        },
        onError: (err: any) => {
          setError(err?.message || 'Failed to send OTP. Please try again.');
        },
      },
    );
  };

  const handleVerifyOtp = async () => {
    if (!otp) return;
    setError('');

    verifyOtpMutation.mutate(
      { email, otp },
      {
        onSuccess: (response) => {
          if (response.status === 'success' && response.data?.verified) {
            setCurrentStep(3);
          } else {
            setError(response.message || 'Invalid OTP. Please try again.');
          }
        },
        onError: (err: any) => {
          setError(err?.message || 'Invalid OTP. Please try again.');
        },
      },
    );
  };

  const handleCreatePassword = async () => {
    if (!password || !confirmPassword || password !== confirmPassword) return;
    setError('');

    const requestData = {
      email, 
      password, 
      confirmPassword,
      ...(isGoogleAuth && { provider: "google" as const }) // Add provider for Google OAuth
    };

    setPasswordMutation.mutate(
      requestData,
      {
        onSuccess: (response) => {
          if (response.status === 'success') {
            setCurrentStep(4);
          } else {
            setError(response.message || 'Failed to set password. Please try again.');
          }
        },
        onError: (err: any) => {
          setError(err?.message || 'Failed to set password. Please try again.');
        },
      },
    );
  };

  const handleCompleteSignup = async () => {
    if (!isPEP || !isRegistered || !privacyPolicy || !recaptchaToken) {
      setError('Please complete all required fields and verify reCAPTCHA.');
      return;
    }
    setError('');

    const requestData = { 
      email, 
      registeredWithSecurities: isRegistered === 'yes',
      pep: isPEP === 'yes',
      acceptTerms: privacyPolicy,
      recaptchaToken,
      ...(isGoogleAuth && { provider: "google" as const }) // Add provider for Google OAuth
    };

    completeSignupMutation.mutate(
      requestData,
      {
        onSuccess: (response) => {
          if (response.status === 'success' && response.data) {
            // Login the user with the returned token and user data
            if (response.data.token && response.data) {
              loginWithToast(response.data.token, response.data);
              router.replace('/dashboard');
            } else {
              setError('Registration successful but login failed. Please try logging in.');
              router.replace('/auth/login');
            }
          } else {
            setError(response.message || 'Failed to complete registration. Please try again.');
          }
        },
        onError: (err: any) => {
          setError(err?.message || 'Failed to complete registration. Please try again.');
          recaptchaRef.current?.reset();
          setRecaptchaToken('');
        },
      },
    );
  };

  const handleResendOtp = async () => {
    setError('');

    resendOtpMutation.mutate(
      { email },
      {
        onSuccess: (response) => {
          if (response.status === 'success') {
            setOtpTimer(300); // Reset timer
          } else {
            setError(response.message || 'Failed to resend OTP. Please try again.');
          }
        },
        onError: (err: any) => {
          setError(err?.message || 'Failed to resend OTP. Please try again.');
        },
      },
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getStepLabel = (step: number) => {
    if (isGoogleAuth) {
      const labels = {
        3: 'Set Password',
        4: 'Complete Registration'
      };
      return labels[step as keyof typeof labels] || "";
    } else {
      const labels = {
        1: 'Enter your email',
        2: 'OTP verification',
        3: 'Set Password',
        4: 'Complete Registration'
      };
      return labels[step as keyof typeof labels] || "";
    }
  };

  const getTotalSteps = () => {
    return isGoogleAuth ? 2 : 4;
  };

  const getCurrentStepForProgress = () => {
    if (isGoogleAuth) {
      return currentStep === 3 ? 1 : 2;
    }
    return currentStep;
  };

  const ProgressIndicator = ({
    step,
    total,
    label,
  }: {
    step: number;
    total: number;
    label: string;
  }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (step / total) * circumference;

    return (
      <div className="flex items-center justify-center space-x-4 mb-8">
        <div className="relative">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              className="transition-all duration-300 ease-in-out"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#13b4fb"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              strokeWidth="8"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-lexend font-medium text-global-2">
              {step} of {total}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-lexend font-medium text-global-2">
            Step {step}
          </p>
          <p className="text-base font-lexend font-normal text-global-1 mt-1">
            {label}
          </p>
        </div>
      </div>
    );
  };

  return (
    <ProtectedRoute requireAuth={false}>
      <div className="w-full min-h-screen flex flex-row">
        {/* Left Side - Mountain Climbing Background */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <Image
            fill
            priority
            alt="Mountain climbing inspiration"
            className="object-cover"
            sizes="50vw"
            src="/images/signup.png"
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center relative">
          <div className="w-full max-w-md space-y-8 py-24 px-8 lg:px-16">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                priority
                alt="Amaramba Capital"
                className="w-[120px] h-[82px]"
                height={82}
                src="/images/amaramba_logo.png"
                width={120}
              />
            </div>

            {/* Google OAuth Welcome Message */}
            {isGoogleAuth && (
              <div className="text-center bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-lexend font-medium text-blue-800">
                  Welcome! Your Google account is verified. Please complete your registration.
                </p>
              </div>
            )}

            {/* Dynamic Progress Indicator - Show for all steps */}
            <ProgressIndicator 
              step={getCurrentStepForProgress()} 
              total={getTotalSteps()} 
              label={getStepLabel(currentStep)} 
            />

            {/* Error Messages */}
            {error && (
              <div className="text-sm text-red-600 text-center bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}

            {/* Step 1: Email Sign Up Form (Only for regular email flow) */}
            {currentStep === 1 && !isGoogleAuth && (
              <div className="space-y-6">
                <div className="text-left">
                  <h1 className="text-2xl font-lexend font-normal text-global-1">
                    Sign up
                  </h1>
                </div>

                <div className="space-y-4">
                  <EditText
                    required
                    className="w-full"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />

                  <Button
                    onClick={handleGetOtp}
                    className="w-full bg-blue-400 hover:bg-blue-500 text-white !opacity-100 disabled:opacity-50"
                    disabled={!email || initiateSignupMutation.isPending}
                    size="default"
                  >
                    {initiateSignupMutation.isPending ? 'Sending OTP...' : 'Get OTP'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: OTP Verification Form (Only for regular email flow) */}
            {currentStep === 2 && !isGoogleAuth && (
              <div className="space-y-6">
                <div className="text-center">
                  <h1 className="text-2xl font-lexend font-normal text-global-1">
                    OTP Verification
                  </h1>
                </div>

                <div className="space-y-4">
                  <OtpInput
                    length={6}
                    value={otp}
                    onChange={handleOtpChange}
                    disabled={verifyOtpMutation.isPending}
                  />

                  {otpTimer > 0 && (
                    <div className="text-center">
                      <p className="text-sm font-lexend font-normal text-global-3">
                        Resend OTP in {formatTime(otpTimer)}
                      </p>
                    </div>
                  )}

                  {otpTimer === 0 && (
                    <div className="text-center">
                      <button
                        className="text-sm font-lexend font-normal text-global-2 hover:underline transition-all duration-200"
                        disabled={resendOtpMutation.isPending}
                        onClick={handleResendOtp}
                      >
                        {resendOtpMutation.isPending ? 'Sending...' : 'Resend OTP'}
                      </button>
                    </div>
                  )}

                  <Button
                    onClick={handleVerifyOtp}
                    className="w-full bg-blue-400 hover:bg-blue-500 text-white !opacity-100 disabled:opacity-50"
                    disabled={!otp || otp.length < 4 || verifyOtpMutation.isPending}
                    size="default"
                  >
                    {verifyOtpMutation.isPending ? 'Verifying...' : 'Verify OTP'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Create Password Form */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-left">
                  <h1 className="text-2xl font-lexend font-normal text-global-1">
                    {isGoogleAuth ? 'Set Your Password' : 'Create Password'}
                  </h1>
                </div>

                <div className="space-y-4">
                  {/* Show email for Google OAuth users */}
                  {isGoogleAuth && (
                    <div className="p-3 bg-gray-50 rounded-md">
                      <p className="text-sm font-lexend font-medium text-global-2">
                        Email: {email}
                      </p>
                    </div>
                  )}

                  <PasswordInput
                    required
                    label="Create Your Password"
                    placeholder="Create Your Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <PasswordInput
                    required
                    label="Re - Enter Password"
                    placeholder="Re - Enter Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />

                  {password &&
                    confirmPassword &&
                    password !== confirmPassword && (
                      <p className="text-xs font-lexend font-normal text-red-500">
                        Passwords do not match
                      </p>
                    )}

                  <Button
                    onClick={handleCreatePassword}
                    disabled={!password || !confirmPassword || password !== confirmPassword || setPasswordMutation.isPending}
                    className="w-full bg-blue-400 hover:bg-blue-500 text-white !opacity-100 disabled:opacity-50"
                    size="default"
                  >
                    {setPasswordMutation.isPending ? 'Setting Password...' : 'Next'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Complete Registration Form */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-left">
                  <h1 className="text-2xl font-lexend font-normal text-global-1">
                    Complete Registration
                  </h1>
                </div>

                <div className="space-y-4">
                  {/* Question 1: PEP */}
                  <div className="space-y-2">
                    <label className="text-sm font-lexend font-medium text-global-2">
                      Are you a PEP (Politically Exposed Person)?
                    </label>
                    <Select value={isPEP} onValueChange={setIsPEP}>
                      <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Question 2: Securities Exchange Registration */}
                  <div className="space-y-2">
                    <label className="text-sm font-lexend font-medium text-global-2">
                      Are you currently registered with the securities exchange as a client?
                    </label>
                    <Select value={isRegistered} onValueChange={setIsRegistered}>
                      <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy-policy"
                      checked={privacyPolicy}
                      onCheckedChange={(checked) => setPrivacyPolicy(checked as boolean)}
                      className="mt-1"
                    />
                    <label htmlFor="privacy-policy" className="text-sm font-lexend font-normal text-global-2 leading-relaxed">
                      You agree to our friendly{' '}
                      <Link href="/privacy-policy" className="text-blue-400 underline hover:text-blue-500">
                        privacy policy.
                      </Link>
                    </label>
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={
                        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                        '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                      }
                      onChange={handleRecaptchaChange}
                    />
                  </div>

                  <Button
                    onClick={handleCompleteSignup}
                    disabled={!isPEP || !isRegistered || !privacyPolicy || !recaptchaToken || completeSignupMutation.isPending}
                    className="w-full bg-blue-400 hover:bg-blue-500 text-white !opacity-100 disabled:opacity-50"
                    size="default"
                  >
                    {completeSignupMutation.isPending ? 'Completing Registration...' : 'Complete Registration'}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Footer with Divider */}
          <div className=" px-8 lg:px-16 w-full border-t-2 border-gray-200 h-fit">
            <div className="w-full max-w-md mx-auto">
              <div className="pt-4">
                {/* Sign In Link */}
                <div className="text-center">
                  <span className="text-sm font-lexend font-normal text-global-1">
                    Already have an account?{" "}
                  </span>
                  <Link 
                    href="/auth/login"
                    className="text-blue-400 text-sm font-lexend font-normal hover:underline transition-all duration-200"
                  >
                    Sign In
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

const DealerSignUpPage: React.FC = () => {
  return (
    <Suspense fallback={<SignUpLoading />}>
      <DealerSignUpPageContent />
    </Suspense>
  );
};

export default DealerSignUpPage;

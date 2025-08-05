import { apiClient } from "./axios";

import {
  LoginRequest,
  LoginResponse,
  InitiateSignupRequest,
  InitiateSignupResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
  SetPasswordRequest,
  SetPasswordResponse,
  CompleteSignupRequest,
  CompleteSignupResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  VerifyResetOtpRequest,
  VerifyResetOtpResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  ResendOtpRequest,
  ResendOtpResponse,
  LockAccountRequest,
  LockAccountResponse,
  RecaptchaSiteKeyResponse,
  LogoutResponse,
  ApiResponse,
  GoogleRegistrationRequest,
  GoogleRegistrationResponse,
  MfaSetupResponse,
  MfaVerifySetupRequest,
  MfaVerifySetupResponse,
  MfaVerifyLoginRequest,
  MfaVerifyLoginResponse,
  MfaStatusResponse,
  MfaDisableResponse,
} from "@/types/auth";

// Constants
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://amarambaserver.webnoxdigital.com/api";

export const GOOGLE_AUTH_URL = `${API_URL}/auth/google`;
export const CALLBACK_URL = "https://amarambaserver.webnoxdigital.com/auth/callback";

// Get reCAPTCHA site key
export async function getRecaptchaSiteKey(): Promise<
  ApiResponse<RecaptchaSiteKeyResponse>
> {
  const response = await apiClient.get("/auth/recaptcha-site-key");

  return response.data;
}

// Initiate signup
export async function initiateSignup(
  data: InitiateSignupRequest,
): Promise<ApiResponse<InitiateSignupResponse>> {
  const response = await apiClient.post("/auth/initiate-signup", data);

  return response.data;
}

// Verify OTP
export async function verifyOtp(
  data: VerifyOtpRequest,
): Promise<ApiResponse<VerifyOtpResponse>> {
  const response = await apiClient.post("/auth/verify-otp", data);

  return response.data;
}

// Set password
export async function setPassword(
  data: SetPasswordRequest,
): Promise<ApiResponse<SetPasswordResponse>> {
  const response = await apiClient.post("/auth/set-password", data);

  return response.data;
}

// Complete signup
export async function completeSignup(
  data: CompleteSignupRequest,
): Promise<ApiResponse<CompleteSignupResponse>> {
  const response = await apiClient.post("/auth/complete-signup", data);

  return response.data;
}

// Login
export async function login(
  data: LoginRequest,
): Promise<ApiResponse<LoginResponse>> {
  const response = await apiClient.post("/auth/login", data);

  return response.data;
}

// Logout
export async function logout(): Promise<ApiResponse<LogoutResponse>> {
  const response = await apiClient.post("/auth/logout");

  return response.data;
}

// Forgot password
export async function forgotPassword(
  data: ForgotPasswordRequest,
): Promise<ApiResponse<ForgotPasswordResponse>> {
  const response = await apiClient.post("/auth/forgot-password", data);

  return response.data;
}

// Verify reset OTP
export async function verifyResetOtp(
  data: VerifyResetOtpRequest,
): Promise<ApiResponse<VerifyResetOtpResponse>> {
  const response = await apiClient.post("/auth/verify-reset-otp", data);

  return response.data;
}

// Reset password
export async function resetPassword(
  data: ResetPasswordRequest,
): Promise<ApiResponse<ResetPasswordResponse>> {
  const response = await apiClient.post("/auth/reset-password", data);

  return response.data;
}

// Resend OTP
export async function resendOtp(
  data: ResendOtpRequest,
): Promise<ApiResponse<ResendOtpResponse>> {
  const response = await apiClient.post("/auth/resend-otp", data);

  return response.data;
}

// Lock account
export async function lockAccount(
  data: LockAccountRequest,
): Promise<ApiResponse<LockAccountResponse>> {
  const response = await apiClient.post("/auth/lock-account", data);

  return response.data;
}

// Google OAuth Registration
export async function registerWithGoogle(
  data: GoogleRegistrationRequest,
): Promise<ApiResponse<GoogleRegistrationResponse>> {
  const response = await apiClient.post("/auth/register/google", data);

  return response.data;
}

// Helper function to build Google OAuth URL
export function getGoogleAuthUrl(source?: "login" | "register"): string {
  const params = new URLSearchParams();

  if (source) {
    params.append("source", source);
  }

  return `${GOOGLE_AUTH_URL}${params.toString() ? `?${params.toString()}` : ""}`;
}

// Get profile (if needed)
export async function getProfile(): Promise<ApiResponse> {
  const response = await apiClient.get("/auth/profile");

  return response.data;
}

// MFA-related functions
export async function setupMfa(): Promise<ApiResponse<MfaSetupResponse>> {
  const response = await apiClient.post("/auth/setup-mfa");

  return response.data;
}

export async function verifyMfaSetup(
  data: MfaVerifySetupRequest,
): Promise<ApiResponse<MfaVerifySetupResponse>> {
  const response = await apiClient.post("/auth/verify-mfa-setup", data);

  return response.data;
}

export async function verifyMfaLogin(
  data: MfaVerifyLoginRequest,
  tempToken?: string,
): Promise<ApiResponse<MfaVerifyLoginResponse>> {
  const config = tempToken
    ? {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      }
    : {};

  const response = await apiClient.post("/auth/verify-mfa-login", data, config);

  return response.data;
}

export async function getMfaStatus(): Promise<ApiResponse<MfaStatusResponse>> {
  const response = await apiClient.get("/auth/mfa-status");

  return response.data;
}

export async function disableMfa(): Promise<ApiResponse<MfaDisableResponse>> {
  const response = await apiClient.post("/auth/disable-mfa");

  return response.data;
}

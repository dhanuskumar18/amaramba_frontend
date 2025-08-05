import { useMutation, useQuery } from "@tanstack/react-query";

import * as api from "@/services/auth";
import { useAuth } from "@/context/AuthContext";
import {
  LoginRequest,
  InitiateSignupRequest,
  VerifyOtpRequest,
  SetPasswordRequest,
  CompleteSignupRequest,
  ForgotPasswordRequest,
  VerifyResetOtpRequest,
  ResetPasswordRequest,
  ResendOtpRequest,
  LockAccountRequest,
  ApiResponse,
  LoginResponse,
  InitiateSignupResponse,
  VerifyOtpResponse,
  SetPasswordResponse,
  CompleteSignupResponse,
  ForgotPasswordResponse,
  VerifyResetOtpResponse,
  ResetPasswordResponse,
  ResendOtpResponse,
  LockAccountResponse,
  RecaptchaSiteKeyResponse,
  LogoutResponse,
  MfaSetupResponse,
  MfaVerifySetupRequest,
  MfaVerifySetupResponse,
  MfaVerifyLoginRequest,
  MfaVerifyLoginResponse,
  MfaStatusResponse,
  MfaDisableResponse,
} from "@/types/auth";

// Get reCAPTCHA site key
export function useRecaptchaSiteKey() {
  return useQuery<ApiResponse<RecaptchaSiteKeyResponse>, Error>({
    queryKey: ["recaptcha-site-key"],
    queryFn: api.getRecaptchaSiteKey,
  });
}

// Initiate signup
export function useInitiateSignup() {
  return useMutation<
    ApiResponse<InitiateSignupResponse>,
    Error,
    InitiateSignupRequest
  >({
    mutationFn: api.initiateSignup,
  });
}

// Verify OTP
export function useVerifyOtp() {
  return useMutation<ApiResponse<VerifyOtpResponse>, Error, VerifyOtpRequest>({
    mutationFn: api.verifyOtp,
  });
}

// Set password
export function useSetPassword() {
  return useMutation<
    ApiResponse<SetPasswordResponse>,
    Error,
    SetPasswordRequest
  >({
    mutationFn: api.setPassword,
  });
}

// Complete signup
export function useCompleteSignup() {
  return useMutation<
    ApiResponse<CompleteSignupResponse>,
    Error,
    CompleteSignupRequest
  >({
    mutationFn: api.completeSignup,
  });
}

// Login
export function useLogin() {
  return useMutation<ApiResponse<LoginResponse>, Error, LoginRequest>({
    mutationFn: api.login,
  });
}

// Logout
export function useLogout() {
  return useMutation<ApiResponse<LogoutResponse>, Error, void>({
    mutationFn: api.logout,
  });
}

// Forgot password
export function useForgotPassword() {
  return useMutation<
    ApiResponse<ForgotPasswordResponse>,
    Error,
    ForgotPasswordRequest
  >({
    mutationFn: api.forgotPassword,
  });
}

// Verify reset OTP
export function useVerifyResetOtp() {
  return useMutation<
    ApiResponse<VerifyResetOtpResponse>,
    Error,
    VerifyResetOtpRequest
  >({
    mutationFn: api.verifyResetOtp,
  });
}

// Reset password
export function useResetPassword() {
  return useMutation<
    ApiResponse<ResetPasswordResponse>,
    Error,
    ResetPasswordRequest
  >({
    mutationFn: api.resetPassword,
  });
}

// Resend OTP
export function useResendOtp() {
  return useMutation<ApiResponse<ResendOtpResponse>, Error, ResendOtpRequest>({
    mutationFn: api.resendOtp,
  });
}

// Lock account
export function useLockAccount() {
  return useMutation<
    ApiResponse<LockAccountResponse>,
    Error,
    LockAccountRequest
  >({
    mutationFn: api.lockAccount,
  });
}

// Legacy hooks for backward compatibility
export function useRequestOtp() {
  return useInitiateSignup();
}

export function useOnboarding() {
  return useCompleteSignup();
}

// MFA-related hooks
export function useSetupMfa() {
  return useMutation<ApiResponse<MfaSetupResponse>, Error, void>({
    mutationFn: api.setupMfa,
  });
}

export function useVerifyMfaSetup() {
  return useMutation<
    ApiResponse<MfaVerifySetupResponse>,
    Error,
    MfaVerifySetupRequest
  >({
    mutationFn: api.verifyMfaSetup,
  });
}

export function useVerifyMfaLogin(tempToken?: string) {
  return useMutation<
    ApiResponse<MfaVerifyLoginResponse>,
    Error,
    MfaVerifyLoginRequest
  >({
    mutationFn: (data: MfaVerifyLoginRequest) =>
      api.verifyMfaLogin(data, tempToken),
  });
}

export function useMfaStatus() {
  const { isAuthenticated } = useAuth();

  return useQuery<ApiResponse<MfaStatusResponse>, Error>({
    queryKey: ["mfa-status"],
    queryFn: api.getMfaStatus,
    enabled: isAuthenticated, // Only fetch when user is authenticated
    retry: 1,
  });
}

export function useDisableMfa() {
  return useMutation<ApiResponse<MfaDisableResponse>, Error, void>({
    mutationFn: api.disableMfa,
  });
}

// Legacy hook for backward compatibility
export function useMfa() {
  return useVerifyMfaLogin();
}

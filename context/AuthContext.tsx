"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { User, AuthState, AuthContextType } from "@/types/auth";
import { getToken, setToken, clearToken } from "@/utils/storage";
import { decryptToken } from "@/utils/decryptToken";
import { logout as logoutApi, getGoogleAuthUrl } from "@/services/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isLoading: true,
    error: null,
  });

  // Regular login with email/password
  const login = (token: string, user: User) => {
    try {
      setToken({ token });
      setAuthState({
        isAuthenticated: true,
        user,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        error: "Failed to login",
      }));
    }
  };

  // Google OAuth login/register
  const loginWithGoogle = (source?: "login" | "register") => {
    try {
      // Set loading state
      setAuthState((prev) => ({
        ...prev,
        isLoading: true,
        error: null,
      }));

      // Redirect to appropriate Google OAuth URL
      window.location.href = getGoogleAuthUrl(source);
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: "Failed to initiate Google login",
      }));
    }
  };

  const logout = async () => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true }));

      // Clear local state first
      clearToken();
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: null,
      });

      // Try to call logout API, but don't wait for it
      logoutApi().catch((error) => {
        console.error("Error calling logout API:", error);
        // Already logged out locally, so no need to show error to user
      });

      // Force reload to clear any cached state
      window.location.href = "/auth/login";
    } catch (error) {
      console.error("Error during logout:", error);
      // Still clear the token and state even if something fails
      clearToken();
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: null,
      });
      window.location.href = "/auth/login";
    }
  };

  const updateAuthState = (newState: Partial<AuthState>) => {
    setAuthState((prev) => ({ ...prev, ...newState }));
  };

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const tokens = getToken();

        if (tokens?.token) {
          const decodedUser = decryptToken(tokens.token);

          if (decodedUser) {
            // Check if user needs to complete registration
            if (decodedUser.needsCompletion) {
              clearToken();
              window.location.href = `/auth/register/details?${new URLSearchParams(
                {
                  email: decodedUser.email,
                  needsCompletion: "true",
                  ...(decodedUser.profile?.picture && {
                    picture: decodedUser.profile.picture,
                  }),
                  ...(decodedUser.profile?.provider && {
                    provider: decodedUser.profile.provider,
                  }),
                },
              )}`;

              return;
            }

            setAuthState({
              isAuthenticated: true,
              user: decodedUser,
              isLoading: false,
              error: null,
            });
          } else {
            clearToken();
            setAuthState({
              isAuthenticated: false,
              user: null,
              isLoading: false,
              error: "Session expired, please log in again",
            });
          }
        } else {
          setAuthState((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        clearToken();
        setAuthState({
          isAuthenticated: false,
          user: null,
          isLoading: false,
          error: "Failed to initialize authentication",
        });
      }
    };

    initializeAuth();
  }, []);

  const value: AuthContextType = {
    ...authState,
    login,
    loginWithGoogle,
    logout,
    setAuthState: updateAuthState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

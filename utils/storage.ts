import { AuthTokens } from "@/types/auth";

const TOKEN_KEY = "authToken";

export const getToken = (): AuthTokens | null => {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) return null;

  return {
    token,
  };
};

export const setToken = (tokens: AuthTokens): void => {
  if (typeof window === "undefined") return;

  localStorage.setItem(TOKEN_KEY, tokens.token);
};

export const clearToken = (): void => {
  if (typeof window === "undefined") return;

  localStorage.removeItem(TOKEN_KEY);
};

export const getAccessToken = (): string | null => {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(TOKEN_KEY);
};

// Legacy function for backward compatibility
export const getRefreshToken = (): string | null => {
  return null; // No refresh token in new structure
};

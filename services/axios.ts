import axios from "axios";

import { getAccessToken } from "@/utils/storage";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://amarambaserver.webnoxdigital.com/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to attach the token
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = getAccessToken();

      if (token) {
        config.headers = config.headers || {};
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

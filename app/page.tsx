"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useOAuthCallback } from "@/utils/auth";
import { Navbar } from "@/components/navbar";
import { useThemeConfig } from "@/app/providers";
import { SimpleLayoutType } from "@/config/constants";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import InvestmentDashboard from "@/components/sections/InvestmentDashboard";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import StockMarketDashboard from "@/components/sections/StockMarketDashboard";
import UserReviewsFeedback from "@/components/sections/UserReviewsFeedback";
import Footer from "@/components/Footer";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { theme } = useThemeConfig();

  // Handle OAuth callback
  useOAuthCallback();

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <ProtectedRoute requireAuth={false}>
        <Navbar theme={theme} variant={SimpleLayoutType.LANDING} />
      <div className="min-h-screen bg-background px-4 md:px-8 lg:px-16">
        <InvestmentDashboard />
        <WhyChooseUs />
        <FeatureShowcase />
        <StockMarketDashboard />
        <UserReviewsFeedback />
      </div>
        <Footer />
    </ProtectedRoute>
  );
}

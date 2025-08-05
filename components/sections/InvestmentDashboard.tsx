import { Button } from "@heroui/react";
import Image from "next/image";
import BullMarketDashboard from "./home/bull-market-dashboard";
// import { Button } from "@/components/ui/button"

export default function InvestmentLanding() {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          priority
          alt="Hero background"
          className="object-cover object-center opacity-100"
          height={1400}
          src="/images/herobg.png"
          width={1900}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/4" />
      </div>
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center relative z-20">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 max-w-6xl">
          Invest Smarter. <span className="text-cyan-400">Grow Faster</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-black mb-2 ">
          Your Gateway to Confident Stock Investing. Powerful tools. Expert
          insights.
        </p>

        {/* Low fees text */}
        <p className="text-lg md:text-xl text-black mb-8">Low fees</p>

        {/* CTA Button */}
        <Button
          className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          size="lg"
        >
          Start Investing Today
        </Button>
      </div>

        {/* Hero Image Section */}
        <div className=" mb-8 relative z-20">
      <BullMarketDashboard />
      </div>
    </div>
  );
}

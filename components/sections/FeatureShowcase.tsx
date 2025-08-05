import React, { useRef, useEffect, useState } from "react";

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white "
    >
      <div className=" mx-auto relative">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8 py-8">
          {/* Mobile Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col items-center mb-4">
                <img
                  alt="User icon"
                  className="w-12 h-12 mb-3"
                  src="/images/user1.svg"
                />
                <h3 className="text-2xl font-bold text-slate-800 text-center">
                  Sign Up in Minutes
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry Lorem Ipsum has been.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col items-center mb-4">
                <img
                  alt="Search icon"
                  className="w-12 h-12 mb-3"
                  src="/images/find1.svg"
                />
                <h3 className="text-2xl font-bold text-slate-800 text-center">
                  Choose Your Stocks / ETF / Bonds
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry Lorem Ipsum has been.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col items-center mb-4">
                <img
                  alt="Money icon"
                  className="w-12 h-12 mb-3"
                  src="/images/money.svg"
                />
                <h3 className="text-2xl font-bold text-slate-800 text-center">
                  Fund Your Account Securely
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry Lorem Ipsum has been.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col items-center mb-4">
                <img
                  alt="Coin icon"
                  className="w-12 h-12 mb-3"
                  src="/images/coin1.svg"
                />
                <h3 className="text-2xl font-bold text-slate-800 text-center">
                  Track & Grow Your Portfolio
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry Lorem Ipsum has been.
              </p>
            </div>
          </div>

          {/* Mobile Blue Background */}

          <div className="bg-cyan-400 rounded-3xl p-8 h-80 relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                alt="Background pattern"
                className="w-full h-full object-cover opacity-20"
                src="/images/pattern1.svg"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                alt="Investment illustration"
                className="w-3/4 h-3/4 object-contain"
                src="/images/phone1.svg"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <h2 className="text-[50px] font-bold text-center ">
          <span className="text-black">How it </span>
          <span className="text-[#13b4fb]">works</span>
        </h2>
        <div className="hidden lg:block relative w-full  ">
          {/* Left Side - Blue Background with Illustrations */}
          <div className="mt-16 absolute left-0 top-0 h-[500px] w-[30%] max-w-[400px] bg-cyan-400 rounded-[26.862px] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <img
                alt="Background pattern"
                className={`w-full h-[500px] object-cover transition-all duration-1000 ${
                  isVisible
                    ? "animate-pattern-slide-up"
                    : "translate-y-full opacity-0"
                }`}
                src="/images/pattern1.svg"
              />
            </div>

            {/* Main Illustration */}
            <div className="absolute top-[140px] inset-0 flex items-center justify-center">
              <img
                alt="Investment illustration"
                className={`object-cover transition-all duration-1000 ease-out ${
                  isVisible
                    ? "rotate-0 translate-x-5 translate-y-0"
                    : "-rotate-90 translate-x-8 translate-y-32"
                }`}
                src="/images/phone1.svg"
              />
            </div>
          </div>

          {/* Center - Feature Cards */}
          <div className="absolute left-[35%] top-14 flex flex-col space-y-16">
            {/* Feature Card 1 - Top Center */}
            <div className="w-[280px] lg:w-[320px] xl:w-[350px]">
              <div className="flex flex-col items-left mb-3">
                <img
                  alt="User icon"
                  className="w-10 h-10 mb-2"
                  src="/images/user1.svg"
                />
                <h3 className="text-xl lg:text-2xl xl:text-2xl font-bold text-slate-800 text-left">
                  Sign Up in Minutes
                </h3>
              </div>
              <p className="text-sm lg:text-base xl:text-base text-gray-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry Lorem Ipsum has been.
              </p>
            </div>

            {/* Feature Card 2 - Bottom Center */}
            <div className="w-[280px] lg:w-[320px] xl:w-[350px]">
              <div className="flex flex-col items-left mb-3">
                <img
                  alt="Search icon"
                  className="w-10 h-10 mb-2"
                  src="/images/coin1.svg"
                />
                <h3 className="text-xl lg:text-2xl xl:text-2xl font-bold text-slate-800 text-left">
                  Choose Your Stocks / ETF / Bonds
                </h3>
              </div>
              <p className="text-sm lg:text-base xl:text-base text-gray-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry Lorem Ipsum has been.
              </p>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="absolute right-0 top-14 flex flex-col space-y-16">
            {/* Feature Card 3 - Top Right */}
            <div className="w-[280px] lg:w-[320px] xl:w-[350px]">
              <div className="flex flex-col items-left mb-3">
                <img
                  alt="Money icon"
                  className="w-10 h-10 mb-2"
                  src="/images/money.svg"
                />
                <h3 className="text-xl lg:text-2xl xl:text-2xl font-bold text-slate-800 text-left">
                  Fund Your Account Securely
                </h3>
              </div>
              <p className="text-sm lg:text-base xl:text-base text-gray-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry Lorem Ipsum has been.
              </p>
            </div>

            {/* Feature Card 4 - Bottom Right */}
            <div className="w-[280px] lg:w-[320px] xl:w-[350px]">
              <div className="flex flex-col items-left mb-3">
                <img
                  alt="Coin icon"
                  className="w-10 h-10 mb-2"
                  src="/images/find1.svg"
                />
                <h3 className="text-xl lg:text-2xl xl:text-2xl font-bold text-slate-800 text-center">
                  Track & Grow Your Portfolio
                </h3>
              </div>
              <p className="text-sm lg:text-base xl:text-base text-gray-600 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry Lorem Ipsum has been.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

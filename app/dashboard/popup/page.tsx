"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Shield, Lock, User, Settings, Target, MoreHorizontal, Check } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"
import Confetti from "../../../public/images/kyc/Confetti.json"
// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("react-lottie"), { ssr: false })
export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  // Start animation when popup opens
  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true)
      // Stop animation after 3 seconds
      const timer = setTimeout(() => {
        setShowAnimation(false)
      }, 3000)
      return () => clearTimeout(timer)
    } else {
      setShowAnimation(false)
    }
  }, [isOpen])
  // Lottie animation options
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Confetti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Lottie Background Animation */}
      {showAnimation && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <Lottie
            options={defaultOptions}
            height="100%"
            width="100%"
          />
        </div>
      )}
      {/* Trigger Button */}
      <Button
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold relative z-10"
        onClick={() => setIsOpen(true)}
      >
        Open KYC Verification
      </Button>
      {/* Custom Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Transparent Overlay */}
          <div
            className="absolute inset-0 bg-transparent"
            onClick={() => setIsOpen(false)}
          />
          {/* Modal Content */}
          <div className="relative max-w-2xl w-full rounded-lg overflow-hidden bg-white shadow-xl z-50">
            {/* Top Section - Blue Background with Waves */}
            <div className="relative h-[280px] bg-gradient-to-br from-[#58C5E2] to-[#4FB3D1] overflow-hidden">
              {/* Waves Background Image Overlay */}
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage: "url('/images/kyc/waves.png')",
                  backgroundSize: "40% cover",
                  backgroundPosition: "center bottom",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            {/* Illustration - positioned outside both sections */}
            <Image
              src="/images/kyc/illustration_lock.webp"
              alt="KYC Verification Illustration"
              width={1080}
              height={1080}
              className="absolute top-[12rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[350px] h-[300px]"
            />
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-60 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            >
              <X className="w-3 h-3 text-gray-600" />
            </button>
            {/* Bottom Section - White Content */}
            <div className="px-6 py-8 bg-white relative z-10 mt-[3rem]">
              <div className="text-center">
                <h1 className="text-2xl font-medium text-gray-900 mb-2">
                  Complete <span className="text-[#26C6DA]">KYC</span>{" "}
                  <span className="text-[#26C6DA]">Verification</span>
                </h1>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 px-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
                <Button
                  className="bg-[#13B4FB] text-white px-8 py-2.5 rounded-lg font-semibold text-sm shadow-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  Verify
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function BullMarketDashboard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<HTMLDivElement[]>([])

  // Left side bars - positioned far left (2% to 38% width) - MORE BARS ADDED
  const leftBars = [
    { height: 80, value: "", left: "2%" },
    { height: 96, value: "18.09", left: "5%", lineHeight: 175, labelLeft: "3%", labelBottom: "35%" },
    { height: 120, value: "", left: "7%" },
    { height: 144, value: "", left: "8%" },
    { height: 108, value: "", left: "10%" },
    { height: 120, value: "", left: "11%" },
    { height: 156, value: "", left: "13%" },
    { height: 168, value: "20.07", left: "14%", lineHeight: 195, labelLeft: "12%", labelBottom: "40%" },
    { height: 132, value: "", left: "16%" },
    { height: 108, value: "", left: "17%" },
    { height: 180, value: "", left: "19%" },
    { height: 192, value: "", left: "20%" },
    { height: 144, value: "", left: "22%" },
    { height: 216, value: "22.27", left: "23%", lineHeight: 210, labelLeft: "21%", labelBottom: "45%" },
    { height: 168, value: "", left: "25%" },
    { height: 132, value: "", left: "26%" },
    { height: 204, value: "", left: "28%" },
    { height: 156, value: "", left: "29%" },
    { height: 192, value: "", left: "31%" },
    { height: 180, value: "07.27", left: "32%", lineHeight: 165, labelLeft: "30%", labelBottom: "38%" },
    { height: 144, value: "", left: "34%" },
    { height: 168, value: "", left: "35%" },
    { height: 120, value: "", left: "37%" },
    { height: 96, value: "", left: "38%" },
    { height: 130, value: "", left: "40%" },
  ]

  // Right side bars - positioned far right (64% to 100% width) - MORE BARS ADDED
  const rightBars = [
    { height: 108, value: "", left: "65%" },
    { height: 132, value: "", left: "66%" },
    { height: 156, value: "", left: "67%" },
    { height: 168, value: "", left: "69%" },
    { height: 144, value: "", left: "70%" },
    { height: 192, value: "", left: "72%" },
    { height: 144, value: "23.07", left: "73%", lineHeight: 185, labelLeft: "71%", labelBottom: "42%" },
    { height: 180, value: "", left: "75%" },
    { height: 192, value: "", left: "76%" },
    { height: 168, value: "", left: "78%" },
    { height: 156, value: "20.07", left: "79%", lineHeight: 170, labelLeft: "77%", labelBottom: "39%" },
    { height: 204, value: "", left: "81%" },
    { height: 216, value: "", left: "82%" },
    { height: 132, value: "", left: "84%" },
    { height: 180, value: "", left: "85%" },
    { height: 156, value: "", left: "87%" },
    { height: 204, value: "", left: "88%" },
    { height: 144, value: "", left: "90%" },
    { height: 168, value: "", left: "91%" },
    { height: 192, value: "", left: "93%" },
    { height: 144, value: "", left: "94%" },
    { height: 180, value: "", left: "96%" },
    { height: 120, value: "18.07", left: "97%", lineHeight: 200, labelLeft: "92%", labelBottom: "41%" },
    { height: 96, value: "", left: "99%" },
    { height: 108, value: "", left: "100%" },
  ]

  const allBars = [...leftBars, ...rightBars]

  useEffect(() => {
    if (!containerRef.current) return

    const bars = barsRef.current.filter(Boolean)

    // Initial animation - bars grow from bottom
    gsap.fromTo(
      bars,
      {
        scaleY: 0,
        transformOrigin: "bottom center",
      },
      {
        scaleY: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out",
      },
    )

    // FIXED: Use individual timelines for each bar with strict minimum limits
    bars.forEach((bar, index) => {
      const individualTimeline = gsap.timeline({ repeat: -1, yoyo: true })

      // Each bar gets its own fixed minimum (never below 40%)
      const minHeight = 0.4
      const maxHeight = 1.0
      const randomTarget = minHeight + Math.random() * (maxHeight - minHeight)

      individualTimeline.to(bar, {
        scaleY: randomTarget,
        duration: 2 + Math.random() * 2,
        ease: "power2.inOut",
        transformOrigin: "bottom center",
        onComplete: () => {
          // Ensure it never goes below minimum
          if (Number(gsap.getProperty(bar, "scaleY")) < minHeight) {
            gsap.set(bar, { scaleY: minHeight })
          }
        },
      })
    })

    return () => {
      // Clean up all animations
      gsap.killTweensOf(bars)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden rounded-3xl"
      style={{
        backgroundImage: "url('images/bull.png')",
        backgroundSize: "cover",
        backgroundPosition: "40% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated bars */}
      {allBars.map((bar, index) => (
        <div key={index} className="absolute" style={{ left: bar.left, bottom: "20%" }}>
          {/* Bar with gradient - blackish at bottom, blue at top */}
          <div
            ref={(el) => {
              if (el) barsRef.current[index] = el
            }}
            className="w-6 rounded-t-sm"
            style={{
              height: `${bar.height}px`,
              background: "linear-gradient(to top, rgba(0, 0, 0, 0.2), #1e3a8a, #3b82f6, #60a5fa)",
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
            }}
          />
        </div>
      ))}

      {/* Data labels with connecting lines */}
      {allBars.map((bar, index) => {
        if (!bar.value) return null
        return (
          <div key={`label-${index}`} className="absolute" style={{ left: bar.labelLeft, bottom: "20%" }}>
            {/* Connecting line - 10% thinner and shuffled heights */}
            <div
              className="absolute bg-blue-400"
              style={{
                width: "0.5px", // Made 10% thinner (was 1px, now 0.5px)
                height: `${bar.lineHeight}px`,
                left: "50%",
                bottom: "0",
                transform: "translateX(-50%)",
              }}
            />

            {/* Label with circular indicator */}
            <div
              className="absolute flex items-center gap-2"
              style={{
                bottom: `${bar.lineHeight}px`,
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
            >
              <div className="w-4 h-4 rounded-full border-2 border-blue-400 bg-blue-600/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              </div>
              <span className="text-blue-300 text-sm font-medium">{bar.value}</span>
            </div>
          </div>
        )
      })}

      {/* Additional overlay glow effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-900/10 pointer-events-none" />
    </div>
  )
}

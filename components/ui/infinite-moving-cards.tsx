"use client";

import React, { useEffect } from "react";

import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [direction, speed]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);

        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      console.log("Animation started:", {
        direction,
        speed,
        itemsCount: items.length,
      });
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };

  // Function to render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
          "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.name}
            className="relative w-[400px] max-w-full shrink-0 rounded-2xl bg-white border border-blue-200 px-8 py-8 md:w-[450px]"
            style={{
              backgroundImage: `url('/images/cardbg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Quote Icon - Top Right */}
            <div className="absolute top-6 right-6 text-gray-700 text-4xl font-bold">
              "
            </div>

            {/* Profile Section */}
            <div className="flex items-start space-x-4 mb-6 border-b border-gray-200 pb-3" >
              {/* Profile Picture */}
              <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover"
                  src={
                    item.avatar ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=0585db&color=fff&size=48`
                  }
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=0585db&color=fff&size=48`;
                  }}
                />
              </div>

              {/* Name and Rating */}
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-800 text-base mb-2">
                  {item.name}
                </h3>
                <div className="flex space-x-1">{renderStars(5)}</div>
              </div>
            </div>

            {/* Review Text */}
            <div className="mt-6">
              <p className="text-gray-700 text-base leading-relaxed">
                {item.quote}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

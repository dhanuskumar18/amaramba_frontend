"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
export default function CountryMap() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" rounded-lg  w-full">
     
<h1 className="text-2xl font-bold m-5">All Stocks</h1>
        <div className="flex justify-center items-center gap-8">
          {/* Base Map with Pointer */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={{
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/basecountry.png"
                alt="Africa map with highlighted country"
                width={400}
                height={400}
                className="object-contain "
                priority
              />

              {/* Magnified Circle Overlay */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute pointer-events-none"
                style={{
                  top: "65%", // Position in the Mozambique area
                  left: "72%", // Position in the Mozambique area
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative">
                  {/* Blue light spread effect at 170 degrees - opposite cone shape */}
                  <div className="absolute bottom-5 left-[100px] transform -translate-x-1/2 w-40 h-52 bg-gradient-to-t from-blue-400/60 via-blue-300/40 to-transparent blur-sm rotate-[50deg]" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}></div>
                  
                  {/* Large magnified circle with border */}
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full border-4 border-white/60 shadow-2xl"></div>
                  
                  {/* Inner magnified area */}
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full border-2 border-white/40"></div> */}
                  
                  {/* Center highlight */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side Hover Image */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : 50,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="rounded-lg p-4 ">
              <Image
                src="/hover.png"
                alt="Highlighted country on hover"
                width={200}
                height={300}
                className="object-contain"
              />
            </div>
            {/* <p className="text-sm text-gray-600 mt-2 font-sans">Mozambique</p> */}
          </motion.div>
        </div>

       
      </div>

      {/* Stock Market Data Table */}
      <div className="bg-white rounded-[10px] shadow-lg  w-full mt-8 font-sans">
        <div className="overflow-x-auto rounded-[10px]">
          <table className="w-full text-lg " >
            <thead>
              <tr className="bg-gray-100  ">
                <th className="text-left py-4 px-6 font-sans text-gray-500">Stock Name</th>
                <th className="text-right py-4 px-6 font-sans text-gray-500">Last Traded</th>
                <th className="text-right py-4 px-6 font-sans text-gray-500">Day Change</th>
                <th className="text-right py-4 px-6 font-sans text-gray-500">High</th>
                <th className="text-right py-4 px-6 font-sans text-gray-500">Low</th>
                <th className="text-right py-4 px-6 font-sans text-gray-500">Open</th>
                <th className="text-right py-4 px-6 font-sans text-gray-500">Prev.Close</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-gray-500">Abc Technology</td>
                <td className="py-4 px-6 text-right text-gray-500">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-red-500">-88,000 (0.34%)</td>
                <td className="py-4 px-6 text-right text-gray-500">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-500">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-500">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-500">664.7 MZN</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-gray-700">Abc Technology</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-red-600">-88,000 (0.34%)</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-gray-700">Abc Technology</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-red-600">-88,000 (0.34%)</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-gray-700">Abc Technology</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-red-600">-88,000 (0.34%)</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-gray-700">Abc Technology</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-red-600">-88,000 (0.34%)</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-gray-700">Abc Technology</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-red-600">-88,000 (0.34%)</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-gray-700">Abc Technology</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-red-600">-88,000 (0.34%)</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-gray-700">Abc Technology</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-red-600">-88,000 (0.34%)</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 text-gray-700">Abc Technology</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-red-600">-88,000 (0.34%)</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
                <td className="py-4 px-6 text-right text-gray-700">664.7 MZN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { ChevronDown, ChevronLeft, ChevronRight, Globe, TrendingUp, Wallet, Clock, BarChart3, ShoppingCart } from 'lucide-react'
// import Link from 'next/link'
// import React from 'react'

// const ExploreSections = () => {


//     const mostBoughtStocks = [
//         { name: "CDM Cervejas", logo: "🔴", price: "5009.20 MZN", change: "-47.00 (2.25%)", symbol: "CDM" },
//         { name: "Zero Investimentos", logo: "🟡", price: "5009.20 MZN", change: "+47.00 (2.25%)", symbol: "ZERO" },
//         { name: "Coal Limited", logo: "⚫", price: "5009.20 MZN", change: "-47.00 (2.25%)", symbol: "COAL" },
//         { name: "Tropigalia", logo: "🔴", price: "5009.20 MZN", change: "+47.00 (2.25%)", symbol: "TROP" },
//     ]

//     const topGainers = [
//         { name: "CDM Cervejas", logo: "🔴", price: "5009.20 MZN", change: "-47.00 (2.25%)", symbol: "CDM" },
//         { name: "Zero Investimentos", logo: "🟡", price: "5009.20 MZN", change: "+47.00 (2.25%)", symbol: "ZERO" },
//         { name: "CMH", logo: "🔵", price: "5009.20 MZN", change: "-47.00 (2.25%)", symbol: "CMH" },
//         { name: "Tropigalia", logo: "🔴", price: "5009.20 MZN", change: "+47.00 (2.25%)", symbol: "TROP" },
//     ]


//     return (
//         <>
//             <div className="flex flex-col gap-4 ">
//                 {/* Main Content */}
//                 <div className="flex-1  ">
//                     {/* Metric Cards */}
//                     <div className="grid grid-cols-4 gap-4 mb-8">
//                         <Card className="bg-gradient-to-r from-[#0585db] to-[#13b4fb] text-white border-none transition-all duration-300 hover:from-[#2196f3] hover:to-[#64b5f6] hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
//                             <CardContent className="p-6">
//                                 <div className="flex items-center justify-between mb-2">
//                                     <span className="text-sm opacity-90">Available balance</span>
//                                     <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
//                                         <Wallet className="w-4 h-4 text-blue-600 " />
//                                     </div>
//                                 </div>
//                                 <div className="text-2xl font-bold mb-2">89,935</div>
//                                 <div className="flex items-center text-sm">
//                                     <TrendingUp className="w-4 h-4 mr-1" />
//                                     <span>10.2 +1.01% this week</span>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card className="bg-gradient-to-r from-[#6c68e1] to-[#8c94a3] text-white border-none transition-all duration-300 hover:from-[#9c98f5] hover:to-[#b6bcc7] hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
//                             <CardContent className="p-6">
//                                 <div className="flex items-center justify-between mb-2">
//                                     <span className="text-sm opacity-90">Pending balance</span>
//                                     <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
//                                         <Clock className="w-4 h-4 text-blue-600" />
//                                     </div>
//                                 </div>
//                                 <div className="text-2xl font-bold mb-2">23,283.5</div>
//                                 <div className="flex items-center text-sm">
//                                     <TrendingUp className="w-4 h-4 mr-1" />
//                                     <span>10.2 +1.01% this week</span>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card className="bg-gradient-to-r from-[#b01e29] to-[#ed5533] text-white border-none transition-all duration-300 hover:from-[#d73c47] hover:to-[#f57c5a] hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
//                             <CardContent className="p-6">
//                                 <div className="flex items-center justify-between mb-2">
//                                     <span className="text-sm opacity-90">Total sales</span>
//                                     <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
//                                         <BarChart3 className="w-4 h-4 text-blue-600" />
//                                     </div>
//                                 </div>
//                                 <div className="text-2xl font-bold mb-2">23,283.5</div>
//                                 <div className="flex items-center text-sm">
//                                     <TrendingUp className="w-4 h-4 mr-1" />
//                                     <span>10.2 +1.01% this week</span>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card className="bg-gradient-to-r from-[#ff5b29] to-[#ed5533] text-white border-none transition-all duration-300 hover:from-[#ff8a5c] hover:to-[#f57c5a] hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
//                             <CardContent className="p-6">
//                                 <div className="flex items-center justify-between mb-2">
//                                     <span className="text-sm opacity-90">Total buys</span>
//                                     <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
//                                         <ShoppingCart className="w-4 h-4 text-blue-600" />
//                                     </div>
//                                 </div>
//                                 <div className="text-2xl font-bold mb-2">23,283.5</div>
//                                 <div className="flex items-center text-sm">
//                                     <TrendingUp className="w-4 h-4 mr-1" />
//                                     <span>10.2 +1.01% this week</span>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     {/* Stock Ticker */}
//                     <div className="flex items-start justify-between gap-4 mb-8">
//                         {[
//                             { name: "S&P 500 ETF", price: "509.90", change: "-3.05", percent: "-0.40%" },
//                             { name: "Dow Jones ETF", price: "509.90", change: "-3.05", percent: "+0.56%" },
//                             { name: "S&P 500 ETF", price: "509.90", change: "-3.05", percent: "-0.40%" },
//                             { name: "S&P 500 ETF", price: "509.90", change: "-3.05", percent: "+0.56%" },
//                             { name: "S&P 500 ETF", price: "509.90", change: "-3.05", percent: "-0.40%" },
//                         ].map((stock, index) => (
//                             <Card key={index} className="flex-1  bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer">
//                                 <CardContent className="p-5 px-4">
//                                     {/* First Row: Vertical Line + Name + Price */}
//                                     <div className="flex items-center gap-3 mb-2">
//                                         <div className="flex items-center space-x-2">
//                                             <div className="w-[2px] h-4 bg-gray-800"></div>
//                                             <div className="text-sm font-medium text-gray-900">{stock.name}</div>
//                                         </div>
//                                         <div className="text-sm font-medium text-gray-900">{stock.price}</div>
//                                     </div>
//                                     {/* Second Row: Change + Percent */}
//                                     <div className={`text-sm font-medium ${stock.percent.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
//                                         {stock.change} {stock.percent}
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                         <Link href="/dashboard/explore/country">
//                             <Card className=" bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer">
//                                 <CardContent className="p-3">
//                                     <Globe color='grey' />
//                                 </CardContent>
//                             </Card>
//                         </Link>
//                     </div>
//                 </div>

//                 <div className='grid grid-cols-12 gap-4'>

//                     <div className=' col-span-8'>
//                         {/* Most Bought Stocks */}
//                         <div className="mb-8">
//                             <div className="flex items-center justify-between mb-4">
//                                 <h2 className="text-xl font-bold text-[#101532]">Most bought stocks on Amaramba</h2>
//                                 <Button variant="ghost" className="text-[#0585db]">
//                                     See more
//                                 </Button>
//                             </div>
//                             <div className="grid grid-cols-4 gap-4">
//                                 {mostBoughtStocks.map((stock, index) => (
//                                     <Link key={index} href={`/dashboard/explore/stock/${stock.symbol}`}>
//                                         <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
//                                             <div className="flex items-center space-x-3 mb-3">
//                                                 <div className="w-10 h-10 rounded-full bg-[#f4f4f5] flex items-center justify-center">
//                                                     {stock.logo}
//                                                 </div>
//                                                 <div className="font-medium text-[#101532]">{stock.name}</div>
//                                             </div>
//                                             <div className="text-lg font-bold text-[#101532] mb-1">{stock.price}</div>
//                                             <div className={`text-sm ${stock.change.startsWith("+") ? "text-[#04b589]" : "text-[#ed5533]"}`}>
//                                                 {stock.change}
//                                             </div>
//                                         </Card>
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Top Gainers */}
//                         <div className="mb-8">
//                             <div className="flex items-center justify-between mb-4">
//                                 <h2 className="text-xl font-bold text-[#101532]">Top Gainers</h2>
//                                 <div className="flex items-center space-x-2">
//                                     <Button variant="ghost" className="text-[#0585db]">
//                                         See more
//                                     </Button>
//                                     <div className="flex space-x-1">
//                                         <Button variant="outline" size="sm">
//                                             Large
//                                         </Button>
//                                         <Button variant="ghost" size="sm">
//                                             Mid
//                                         </Button>
//                                         <Button variant="ghost" size="sm">
//                                             Small
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-4 gap-4">
//                                 {topGainers.map((stock, index) => (
//                                     <Link key={index} href={`/dashboard/explore/stock/${stock.symbol}`}>
//                                         <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
//                                             <div className="flex items-center space-x-3 mb-3">
//                                                 <div className="w-10 h-10 rounded-full bg-[#f4f4f5] flex items-center justify-center">
//                                                     {stock.logo}
//                                                 </div>
//                                                 <div className="font-medium text-[#101532]">{stock.name}</div>
//                                             </div>
//                                             <div className="text-lg font-bold text-[#101532] mb-1">{stock.price}</div>
//                                             <div className={`text-sm ${stock.change.startsWith("+") ? "text-[#04b589]" : "text-[#ed5533]"}`}>
//                                                 {stock.change}
//                                             </div>
//                                         </Card>
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Top by Market Cap Table */}
//                         <div className="mb-8">
//                             <h2 className="text-xl font-bold text-[#101532] mb-4">Top by Market Cap</h2>
//                             <Card>
//                                 <div className="overflow-x-auto">
//                                     <table className="w-full">
//                                                                                  <thead className="bg-gray-100">
//                                              <tr>
//                                                  <th className="text-left p-4 font-medium text-gray-600 text-sm">COMPANY</th>
//                                                  <th className="text-left p-4 font-medium text-gray-600 text-sm">MARKET PRICE</th>
//                                                  <th className="text-left p-4 font-medium text-gray-600 text-sm">
//                                                      <div className="flex items-center gap-2">
//                                                          CLOSE PRICE 
//                                                          <ChevronDown className="w-4 h-4" />
//                                                      </div>
//                                                  </th>
//                                                  <th className="text-left p-4 font-medium text-gray-600 text-sm">
//                                                      <div className="flex items-center gap-2">
//                                                          MARKET CAP 
//                                                          <ChevronDown className="w-4 h-4" />
//                                                      </div>
//                                                  </th>
//                                              </tr>
//                                          </thead>
//                                         <tbody>
//                                             {Array.from({ length: 6 }, (_, i) => (
//                                                 <tr key={i} className="border-b border-[#ededed]">
//                                                     <td className="p-4 font-medium text-[#101532]">BSL PVT LMT</td>
//                                                     <td className="p-4">
//                                                         <div className="text-[#101532]">15009.20</div>
//                                                         <div className="text-[#ed5533] text-sm">+47.00 (2.25%)</div>
//                                                     </td>
//                                                     <td className="p-4 text-[#101532]">4,9212.40</td>
//                                                     <td className="p-4 text-[#101532]">4,9212.40</td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 <div className="flex items-center justify-center p-4 space-x-2">
//                                     <Button variant="ghost" size="icon">
//                                         <ChevronLeft className="w-4 h-4" />
//                                     </Button>
//                                     <Button variant="default" size="sm" className="bg-[#0585db]">
//                                         1
//                                     </Button>
//                                     <Button variant="ghost" size="sm">
//                                         2
//                                     </Button>
//                                     <Button variant="ghost" size="sm">
//                                         ...
//                                     </Button>
//                                     <Button variant="ghost" size="sm">
//                                         10
//                                     </Button>
//                                     <Button variant="ghost" size="icon">
//                                         <ChevronRight className="w-4 h-4" />
//                                     </Button>
//                                 </div>
//                             </Card>
//                         </div>
//                     </div>

//                     {/* Watchlist Sidebar */}
//                     <div className="w-full col-span-4 ">
//                         <div className="flex items-center justify-between mb-6">
//                             <h2 className="text-xl font-bold text-[#101532]">Watchlist</h2>
//                             <Button variant="ghost" className="text-[#0585db]">
//                                 See more
//                             </Button>
//                         </div>
//                         <div className="space-y-4 border border-[#ededed] p-6">
//                             {[
//                                 { name: "ADH Citigroup", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                                 { name: "Bull tech exports", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                                 { name: "Coal Limited", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                                 { name: "HDFC Bank", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                                 { name: "SBI Bank", price: "5009.20 MZN", change: "-47.00 (2.25%)" },
//                                 { name: "SBI Bank", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                                 { name: "SBI Bank", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                                 { name: "Coal Limited", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                                 { name: "SBI Bank", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                                 { name: "Coal Limited", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                                 { name: "Coal Limited", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
//                             ].map((stock, index) => (
//                                 <div key={index} className="flex items-center justify-between py-2">
//                                     <div>
//                                         <div className="font-medium text-[#101532] text-sm">{stock.name}</div>
//                                         <div className="text-lg font-bold text-[#101532]">{stock.price}</div>
//                                     </div>
//                                     <div
//                                         className={`text-sm text-right ${stock.change.startsWith("+") ? "text-[#04b589]" : "text-[#ed5533]"}`}
//                                     >
//                                         {stock.change}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>

//             </div>

            
//         </>
//     )
// }

// export default ExploreSections


"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Confetti from "../../public/images/kyc/Confetti.json";
import ExploreSections from "./explore/page";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function AmarambaDashboard() {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  // Show popup on every page reload
  useEffect(() => {
    // Show popup after a short delay to ensure page is loaded
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Start animation when popup opens
  useEffect(() => {
    if (isPopupOpen) {
      setShowAnimation(true);
      // Stop animation after 3 seconds
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowAnimation(false);
    }
  }, [isPopupOpen]);

  // Lottie animation options
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Confetti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="">
      {/* Lottie Background Animation */}
      {showAnimation && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <Lottie
            options={defaultOptions}
            height="100%"
            width="100%"
            isClickToPauseDisabled={true}
          />
        </div>
      )}

      <div className="">
        <ExploreSections />
      </div>

      {/* KYC Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Transparent Overlay */}
          <div
            className="absolute inset-0 bg-transparent"
            onClick={() => setIsPopupOpen(false)}
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
              onClick={() => setIsPopupOpen(false)}
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
                  onClick={() => {
                    setIsPopupOpen(false);
                    router.push("/dashboard/kyc");
                  }}
                >
                  Verify
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

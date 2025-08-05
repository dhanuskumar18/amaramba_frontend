"use client";

import { MousePointer2, Plus, TrendingUp } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HoldingsPage() {
  const holdingsData = [
    {
      company: "Abc Technology",
      subInfo: "12 Shares - Avg. 9.50",
      marketPrice: "664.7 MZN",
      marketPriceChange: "+47.00 (₹)",
      returnNValue: "664.7 MZN",
      returnNPercentage: "25.47%",
      currentValue: "664.7 MZN",
      currentPercentage: "25.47%",
      isMarketPricePositive: true, // Assuming positive for the example
    },
    {
      company: "Abc Technology",
      subInfo: "12 Shares - Avg. 9.50",
      marketPrice: "664.7 MZN",
      marketPriceChange: "+47.00 (₹)",
      returnNValue: "664.7 MZN",
      returnNPercentage: "25.47%",
      currentValue: "664.7 MZN",
      currentPercentage: "25.47%",
      isMarketPricePositive: true,
    },
    {
      company: "Abc Technology",
      subInfo: "12 Shares - Avg. 9.50",
      marketPrice: "664.7 MZN",
      marketPriceChange: "+47.00 (₹)",
      returnNValue: "664.7 MZN",
      returnNPercentage: "25.47%",
      currentValue: "664.7 MZN",
      currentPercentage: "25.47%",
      isMarketPricePositive: true,
    },
    {
      company: "Abc Technology",
      subInfo: "12 Shares - Avg. 9.50",
      marketPrice: "664.7 MZN",
      marketPriceChange: "+47.00 (₹)",
      returnNValue: "664.7 MZN",
      returnNPercentage: "25.47%",
      currentValue: "664.7 MZN",
      currentPercentage: "25.47%",
      isMarketPricePositive: true,
    },
    {
      company: "Abc Technology",
      subInfo: "12 Shares - Avg. 9.50",
      marketPrice: "664.7 MZN",
      marketPriceChange: "+47.00 (₹)",
      returnNValue: "664.7 MZN",
      returnNPercentage: "25.47%",
      currentValue: "664.7 MZN",
      currentPercentage: "25.47%",
      isMarketPricePositive: true,
    },
    {
      company: "Abc Technology",
      subInfo: "12 Shares - Avg. 9.50",
      marketPrice: "664.7 MZN",
      marketPriceChange: "+47.00 (₹)",
      returnNValue: "664.7 MZN",
      returnNPercentage: "25.47%",
      currentValue: "664.7 MZN",
      currentPercentage: "25.47%",
      isMarketPricePositive: true,
    },
  ]
  return (
    <div className="min-h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" >
          <h1 className="text-2xl font-semibold text-gray-900 mb-8 col-span-3">Holdings</h1>
        {/* Left Column: Holdings Summary and Table */}
        <div className="lg:col-span-2">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Current Value</p>
                    <p className="text-2xl font-semibold text-blue-600">5009.20 MZN</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
                    <Link href="/dashboard/holdings/analysis" className="flex items-center">
                      <span className="mr-1">$</span>
                      Analyze
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Invested Value</p>
                  <p className="text-2xl font-semibold text-blue-600 mb-2">5009.20 MZN</p>
                  <div className="flex justify-between items-center space-x-4 text-sm">
                    <div className="flex flex-col justify-center text-green-600">
                      <span className="text-gray-600">Id returns</span> <br />
                      <TrendingUp className="w-4 h-4 " />
                      <span>+47.00 (2.25%)</span>
                    </div>
                    <div className="flex flex-col text-green-600">
                      <span className="text-gray-600">Total returns</span> <br />
                      <TrendingUp className="w-4 h-4 " />
                      <span>+47.00 (2.25%)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Holdings Table */}
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                        Company <span className="text-xs">▼</span>
                      </th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                        Market Price (₹) <span className="text-xs">▼</span>
                      </th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                        Return (N) <span className="text-xs">▼</span>
                      </th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                        Current <span className="text-xs">▼</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdingsData.map((holding, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">{holding.company}</p>
                            <p className="text-xs text-gray-500">{holding.subInfo}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">{holding.marketPrice}</p>
                            <p
                              className={`text-xs ${holding.isMarketPricePositive ? "text-green-600" : "text-red-600"}`}
                            >
                              {holding.marketPriceChange}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">{holding.returnNValue}</p>
                            <p className="text-xs text-green-600">{holding.returnNPercentage}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">{holding.currentValue}</p>
                            <p className="text-xs text-green-600">{holding.currentPercentage}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Right Column: Select Stock Panel */}
        <div className="lg:col-span-1 ">
          <Card className="shadow-sm  flex flex-col justify-between h-full">
            <CardContent className="p-6 flex flex-col items-center justify-center flex-grow text-center">
              <div className=" p-4 rounded-full mb-4">
                <Image src="/images/Vector (5).png" alt="stock" width={100} height={100} />
              </div>
              <p className="text-gray-600">Select a stock to get started</p>
            </CardContent>
            <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">
              <p className="text-sm text-gray-700">Balance: 15.8</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
                <Plus className="w-4 h-4 mr-2" />
                Add Money
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
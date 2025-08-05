"use client";

import { Search, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function WatchlistPage() {
  const [isBuyMode, setIsBuyMode] = useState(true)
  const watchlistData = [
    {
      company: "SSA GENERAL TRADING CO LLC",
      marketPrice: "5768 MZN",
      dayChange: "+4700 (5%)",
      isPositive: true,
    },
    {
      company: "KENT",
      marketPrice: "6768 MZN",
      dayChange: "+4700 (7%)",
      isPositive: true,
    },
    {
      company: "LIL SAMS P O CO LTD",
      marketPrice: "5768 MZN",
      dayChange: "+4700 (5%)",
      isPositive: true,
    },
    {
      company: "SSA GENERAL TRADING CO LLC",
      marketPrice: "5768 MZN",
      dayChange: "+4700 (5%)",
      isPositive: true,
    },
    {
      company: "SSA TRADING CO LLC",
      marketPrice: "5768 MZN",
      dayChange: "+4700 (5%)",
      isPositive: true,
    },
    {
      company: "SSA GENERAL TRADING CO LLC",
      marketPrice: "5768 MZN",
      dayChange: "+4700 (5%)",
      isPositive: true,
    },
  ];

  return (
    <div className=" ">
   

      {/* Main Content */}
      <div className="">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Watchlist</h1>

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Watchlist Table Section */}
          <div className="lg:col-span-5  rounded-lg border-gray-200">
            {/* Search and Action Buttons */}
            <div className="flex items-center justify-between  border-[1px] border-b-0 rounded-t-lg">
              <div className="relative flex-1 max-w-md p-3 py-5 ">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  className="pl-10 bg-gray-100 border-gray-300 "
                  placeholder="Search & Add"
                />
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                          <div className="flex items-center">
                            Company
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </div>
                        </th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                          <div className="flex items-center">
                            Market Price
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </div>
                        </th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                          <div className="flex items-center">
                            Day Change (%)
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </div>
                        </th>
                       
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {watchlistData.map((stock, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-4 px-6 text-sm text-gray-900">
                            {stock.company}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-900">
                            {stock.marketPrice}
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm font-medium text-green-600">
                              {stock.dayChange}
                            </span>
                          </td>
                        
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

           {/* Right Sidebar */}
           <div className="md:col-span-3">
            <div className="sticky top-8">
              <Card className="border-[#ededed]">
                <CardHeader className="border-b">
                  {/* Buy/Sell Toggle */}
                  <div className="flex">
                    <button 
                      onClick={() => setIsBuyMode(true)}
                      className={`flex items-center space-x-2 px-3 py-2 font-medium ${
                        isBuyMode ? 'text-green-600' : 'text-gray-400'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        isBuyMode ? 'bg-green-600' : 'bg-gray-400'
                      }`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Buy</span>
                    </button>
                    <button 
                      onClick={() => setIsBuyMode(false)}
                      className={`flex items-center space-x-2 px-3 py-2 font-medium ml-4 ${
                        !isBuyMode ? 'text-orange-600' : 'text-gray-400'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        !isBuyMode ? 'bg-orange-600' : 'bg-gray-400'
                      }`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM4 10a6 6 0 1112 0A6 6 0 014 10z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Sell</span>
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">

                  {/* Orders Section */}
                  <h3 className="text-xl font-bold text-gray-900 mb-8">Orders</h3>

                  {/* Form Fields */}
                  <div className="space-y-6 mb-12">
                    {/* Qty Field */}
                    <div className=" flex items-center justify-between">
                      <label className="block text-sm font-medium text-gray-900 mb-3">Qty</label>
                      <div className="relative">
                        <select className=" md:w-[15rem] px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 appearance-none focus:ring-2 focus:ring-green-500 focus:outline-none pr-10">
                          <option value="">Select quantity</option>
                          <option value="1">1</option>
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                    </div>
                    </div>
                  </div>

                    {/* Price Market Field */}
                    <div  className=" flex items-center justify-between">
                      <label className="block text-sm font-medium text-gray-900 mb-3">Price Market</label>
                      <div className="relative">
                        <select className=" md:w-[15rem] px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 appearance-none focus:ring-2 focus:ring-green-500 focus:outline-none pr-10">
                          <option value="">At Market</option>
                          <option value="1">1</option>
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                    </div>
                    </div>
                    </div>
                  </div>

                  

                </CardContent>
                <CardFooter className=" flex flex-col items-center justify-center border-t border-gray-200 ">

                  {/* Balance and Approx Info */}
                  <div className="w-full flex justify-between items-center my-6">
                    <span className="text-sm text-gray-500">Balance : 23.8</span>
                    <span className="text-sm text-gray-500">Approx req : 465 MZN</span>
                  </div>

                  {/* Buy/Sell Button */}
                  <Button className={`w-full text-white py-4 text-lg font-semibold rounded-lg ${
                    isBuyMode 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-orange-600 hover:bg-orange-700'
                  }`}>
                    {isBuyMode ? 'Buy' : 'Sell'}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"

import { useState } from "react"
import { Search, Bell, TrendingUp, ArrowLeft, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart, BarChart, Bar, CartesianGrid, LabelList } from "recharts"
import Link from "next/link"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function StockDetailsPage() {
  const [isBuyMode, setIsBuyMode] = useState(true)
  // Stock performance data matching the image pattern
  const performanceData = [
    { month: "Jan", percentage: 17, fullMonth: "January" },
    { month: "Feb", percentage: 19, fullMonth: "February" },
    { month: "Mar", percentage: 22, fullMonth: "March", annotation: { date: "March 16, 2025", text: "Ethereum +4.459%", value: 30 } },
    { month: "Apr", percentage: 42, fullMonth: "April" },
    { month: "May", percentage: 45, fullMonth: "May" },
    { month: "Jun", percentage: 52, fullMonth: "June" },
    { month: "Jul", percentage: 48, fullMonth: "July" },
    { month: "Aug", percentage: 41, fullMonth: "August" },
    { month: "Sep", percentage: 38, fullMonth: "September" },
  ]

  // Chart data with realistic ups and downs like a real stock market
  const chartData = [
    { month: "Jan", percentage: 17, xPos: 0 },
    { month: "", percentage: 16.2, xPos: 1 },
    { month: "", percentage: 16.8, xPos: 2 },
    { month: "", percentage: 16.5, xPos: 5 },
    { month: "Feb", percentage: 18.2, xPos: 6 },
    { month: "", percentage: 17.8, xPos: 7 },
    { month: "", percentage: 19.3, xPos: 8 },
    { month: "", percentage: 21.2, xPos: 12 },
    { month: "", percentage: 20.8, xPos: 13 },
    { month: "Mar", percentage: 22.5, xPos: 14 },
    { month: "", percentage: 21.9, xPos: 15 },
    { month: "", percentage: 28.9, xPos: 20 },
    { month: "", percentage: 30.2, xPos: 21 }, // March 16 - annotation point
    { month: "", percentage: 29.1, xPos: 22 },
    { month: "", percentage: 33.2, xPos: 25 },
    { month: "", percentage: 32.1, xPos: 26 },
    { month: "Apr", percentage: 34.8, xPos: 27 },
    { month: "", percentage: 33.9, xPos: 28 },
    { month: "", percentage: 38.9, xPos: 34 },
    { month: "", percentage: 41.2, xPos: 35 },
    { month: "", percentage: 42.8, xPos: 37 },
    { month: "", percentage: 41.9, xPos: 38 },
    { month: "May", percentage: 44.2, xPos: 39 },
    { month: "", percentage: 49.5, xPos: 47 },
    { month: "", percentage: 48.2, xPos: 48 },
    { month: "Jun", percentage: 50.8, xPos: 49 },
    { month: "", percentage: 49.9, xPos: 50 },
    { month: "", percentage: 52.2, xPos: 51 },
    { month: "", percentage: 50.1, xPos: 56 },
    { month: "", percentage: 49.8, xPos: 57 },
    { month: "", percentage: 48.9, xPos: 58 },
    { month: "Jul", percentage: 47.5, xPos: 59 },
    { month: "", percentage: 48.2, xPos: 60 },
    { month: "", percentage: 46.8, xPos: 61 },
    { month: "", percentage: 47.9, xPos: 62 },
    { month: "Aug", percentage: 42.5, xPos: 69 },
    { month: "", percentage: 43.1, xPos: 70 },
    { month: "", percentage: 41.2, xPos: 71 },
    { month: "", percentage: 40.2, xPos: 76 },
    { month: "", percentage: 38.9, xPos: 77 },
    { month: "", percentage: 39.5, xPos: 78 },
    { month: "Sep", percentage: 38.2, xPos: 79 },
  ]

  // Quarterly performance data
  const quarterlyData = [
    { quarter: "Q1", value: 120 },
    { quarter: "Q2", value: 150 },
    { quarter: "Q3", value: 100 },
    { quarter: "Q4", value: 180 },
    { quarter: "Q1", value: 160 },
  ]

  const timeButtons = ["1D", "5D", "1M", "3M", "6M", "1Y", "5Y"]

  // Financials data for the chart
  const financialsData = [
    { year: "2021", revenue: 434, profit: 320, netWorth: 280 },
    { year: "2022", revenue: 421, profit: 350, netWorth: 290 },
    { year: "2023", revenue: 536, profit: 420, netWorth: 310 },
    { year: "2024", revenue: 536, profit: 450, netWorth: 320 },
    { year: "2025", revenue: 536, profit: 480, netWorth: 340 },
  ]

  // Stock information data
  const stockInfo = [
    { label: "Market Cap", value: "₹1,23,456 Cr" },
    { label: "P/E Ratio", value: "25.4" },
    { label: "EPS", value: "₹24.30" },
    { label: "Book Value", value: "₹156.78" },
    { label: "Dividend Yield", value: "1.2%" },
    { label: "ROE", value: "18.5%" },
    { label: "52W High", value: "₹5,200.00" },
    { label: "52W Low", value: "₹4,200.00" },
    { label: "Volume", value: "12,34,567" },
    { label: "Avg Volume", value: "8,45,123" },
    { label: "Beta", value: "1.15" },
    { label: "Face Value", value: "₹10.00" },
  ]

  // Financial metrics
  const financialMetrics = [
    { metric: "Revenue", current: "₹45,678 Cr", previous: "₹42,345 Cr", change: "+7.9%" },
    { metric: "Net Profit", current: "₹8,945 Cr", previous: "₹7,823 Cr", change: "+14.3%" },
    { metric: "Total Assets", current: "₹1,23,456 Cr", previous: "₹1,15,678 Cr", change: "+6.7%" },
    { metric: "Debt to Equity", current: "0.45", previous: "0.52", change: "-13.5%" },
  ]

  // Similar stocks data
  const similarStocks = [
    { company: "SSA GENERAL TRADING CO LLC", marketPrice: "57668.MZN", peRatio: "+47.00 (97)", isBookmarked: false, hasSquareIcon: true },
    { company: "KBM", marketPrice: "57668.MZN", peRatio: "+47.00 (97)", isBookmarked: true, hasSquareIcon: false },
    { company: "TAE SUNG C P CO LTD", marketPrice: "57668.MZN", peRatio: "+47.00 (97)", isBookmarked: true, hasSquareIcon: false },
    { company: "SSA GENERAL TRADING CO LLC", marketPrice: "57668.MZN", peRatio: "+47.00 (97)", isBookmarked: true, hasSquareIcon: false },
    { company: "SSA TRADING CO LLC", marketPrice: "57668.MZN", peRatio: "+47.00 (97)", isBookmarked: true, hasSquareIcon: false },
    { company: "SSA GENERAL TRADING CO LLC", marketPrice: "57668.MZN", peRatio: "+47.00 (97)", isBookmarked: true, hasSquareIcon: false },
  ]

  // Fundamental metrics data
  const fundamentalMetrics = {
    leftColumn: [
      { label: "Market Cap", value: "500 MZN" },
      { label: "P/E Ratio (TTM)", value: "20.3" },
      { label: "P/B Ratio", value: "17.3" },
      { label: "Industry P/E", value: "177.3" },
      { label: "Debt to Equity", value: "18.3" },
    ],
    rightColumn: [
      { label: "ROE", value: "500 %" },
      { label: "EPS (TTM)", value: "7.07" },
      { label: "Dividend yield", value: "17.3%" },
      { label: "Book value", value: "177.3" },
      { label: "Face Value", value: "1" },
    ]
  }

  return (
    <div className="min-h-screen">
      

      {/* Main Content */}
      <div className="  ">
        {/* Back Navigation and Stock Header */}
        {/* <div className="flex items-center mb-8">
          <Link href="/explore" className="mr-4">
            <ArrowLeft className="w-5 h-5 text-[#606060] hover:text-[#101532]" />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#ed5533] rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">C</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#101532]">CDM Cervejas</h1>
              <p className="text-sm text-[#606060]">NSE: CDM</p>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-12 gap-8">
          {/* Main Chart Section */}
          <div className="md:col-span-7">
            {/* Company Header */}
            
            {/* Performance Chart */}
            <Card className="mb-8 border-gray-200">
              <CardContent className="p-6">

              <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-bold">COM</span>
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold text-gray-900">Qwarz pvt ltd</h1>
                      <p className="text-2xl font-bold text-gray-900">5004.00 MZN</p>
                </div>
              </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" className="text-gray-600 border-gray-300">
                      Create alert
                    </Button>
                    <Button variant="outline" className="text-gray-600 border-gray-300">
                      Watchlist
                    </Button>
                  </div>
            </div>

                <div className="relative h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 40, right: 30, left: 40, bottom: 40 }}>
                      <defs>
                        <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.6} />
                          <stop offset="50%" stopColor="#60A5FA" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid 
                        vertical={false}
                        horizontal={true}
                        strokeDasharray="2 2"
                        stroke="#D1D5DB"
                        strokeOpacity={0.7}
                      />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14, fill: "#9CA3AF" }}
                        interval={0}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14, fill: "#9CA3AF" }}
                        domain={[10, 60]}
                        tickFormatter={(value) => `${value}%`}
                        ticks={[10, 20, 30, 40, 50, 60]}
                      />
                      <Area
                        type="monotone"
                        dataKey="percentage"
                        stroke="#60A5FA"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#performanceGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  
                  {/* Annotation for March 16, 2025 - starts from bottom */}
                  <div className="absolute" style={{ bottom: '195px', left: '44%' }}>
                    <div className="relative">
                      {/* Vertical dashed line from bottom to data point */}
                      <div className="absolute w-px h-32 border-l-2 border-dashed border-gray-400 left-1/2 transform -translate-x-1/2"></div>
                      {/* Dot at data point */}
                      <div className="w-3 h-3 bg-gray-700 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                      {/* Label above the data point */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg absolute -top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <p className="text-sm text-gray-500 mb-1">March 16, 2025</p>
                        <p className="text-sm font-semibold text-green-600">Ethereum +4.459%</p>
                      </div>
                    </div>
                </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Section */}
            <Card className="mb-8 border-[#ededed]">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#101532] mb-6">Performance</h3>
                
                {/* Today's Range */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#9CA3AF]">Today's low</span>
                    <span className="text-sm text-[#9CA3AF]">Today's High</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base font-medium text-[#101532]">500 MZN</span>
                    <span className="text-base font-medium text-[#101532]">500 MZN</span>
                  </div>
                  <div className="relative">
                    <Slider
                      min={0}
                      max={100}
                      defaultValue={50}
                      trackStyle={{ backgroundColor: '#60A5FA', height: 4 }}
                      railStyle={{ backgroundColor: '#60A5FA', height: 4 }}
                      handleStyle={{
                        backgroundColor: 'white',
                        borderColor: '#60A5FA',
                        width: 12,
                        height: 12,
                        marginTop: -4,
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </div>
                </div>

                {/* 52W Range */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#9CA3AF]">52W Low</span>
                    <span className="text-sm text-[#9CA3AF]">52W High</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base font-medium text-[#101532]">500 MZN</span>
                    <span className="text-base font-medium text-[#101532]">500 MZN</span>
                  </div>
                  <div className="relative">
                    <Slider
                      min={0}
                      max={100}
                      defaultValue={40}
                      trackStyle={{ backgroundColor: '#60A5FA', height: 4 }}
                      railStyle={{ backgroundColor: '#60A5FA', height: 4 }}
                      handleStyle={{
                        backgroundColor: 'white',
                        borderColor: '#60A5FA',
                        width: 12,
                        height: 12,
                        marginTop: -4,
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </div>
                </div>

                {/* Performance Data Grid - 6 items in 2x3 layout */}
                <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                  <div>
                    <div className="text-sm text-[#9CA3AF] mb-1">Open</div>
                    <div className="text-base font-medium text-[#101532]">123 MZN</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#9CA3AF] mb-1">Prev. close</div>
                    <div className="text-base font-medium text-[#101532]">314 MZN</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#9CA3AF] mb-1">Volume</div>
                    <div className="text-base font-medium text-[#101532]">1,21,424 MZN</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#9CA3AF] mb-1">Total traded value</div>
                    <div className="text-base font-medium text-[#101532]">1,21,424 MZN</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#9CA3AF] mb-1">Upper circuit</div>
                    <div className="text-base font-medium text-[#101532]">500 MZN</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#9CA3AF] mb-1">Lower Circuit</div>
                    <div className="text-base font-medium text-[#101532]">500 MZN</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar stocks */}
            <Card className="mb-8 border-[#ededed]">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#101532]">Similar stocks</h3>
                  <button className="text-[#0585db] text-sm font-medium hover:underline">
                    See More
                  </button>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 pb-4 mb-4 border-b border-[#F3F4F6]">
                  <div className="col-span-6 text-sm font-medium text-[#9CA3AF]">Company</div>
                  <div className="col-span-2 text-sm font-medium text-[#9CA3AF] text-right">Market Price</div>
                  <div className="col-span-3 text-sm font-medium text-[#9CA3AF] text-right">P/E Ratio</div>
                  <div className="col-span-1"></div>
                </div>

                {/* Stock List */}
                <div className="space-y-4">
                  {similarStocks.map((stock, index) => (
                    <div key={index} className="grid grid-cols-12 gap-4 items-center py-2">
                      {/* Company Name */}
                      <div className="col-span-6">
                        <span className="text-sm text-[#9CA3AF] font-medium">{stock.company}</span>
                      </div>
                      
                      {/* Market Price */}
                      <div className="col-span-2 text-right">
                        <span className="text-sm text-[#101532] font-medium">{stock.marketPrice}</span>
                      </div>
                      
                      {/* P/E Ratio */}
                      <div className="col-span-3 text-right">
                        <span className="text-sm text-green-600 font-medium">{stock.peRatio}</span>
                      </div>
                      
                      {/* Icon */}
                      <div className="col-span-1 flex justify-end">
                        {stock.hasSquareIcon ? (
                          <Bookmark className="w-4 h-4 text-[#0585db] fill-[#0585db]" />
                        ) : (
                          <Bookmark className="w-4 h-4 text-[#9CA3AF]" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card className="mb-8 border-[#ededed]">
              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#101532] mb-4">About</h3>
                
                {/* Description */}
                <div className="mb-6">
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Lacinia Odio Vitae Vestibulum Vestibulum. Cras Venenatis Euismod Malesuada. Integer Facilisis, Purus At Varius Rhoncus, Arcu Libero Hendrerit Mi, Vel Efficitur Lectus Odio Eget Justo. Fusce Ac Tincidunt Turpis, Nec Convallis Sem. Sed Sollicitudin, Nunc Ac Fermentum Elementum, Erat Ipsum Consequat Turpis, Id Suscipit Libero Nisl Nec Nulla.{' '}
                    <button className="text-[#0585db] font-medium hover:underline">
                      Read More
                    </button>
                  </p>
                </div>

                {/* Company Information */}
                <div className="space-y-4">
                  {/* First Row */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-sm text-[#9CA3AF] mb-1">Parent Organisation</div>
                      <div className="text-base font-medium text-[#101532]">Bse Limited</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#9CA3AF] mb-1">Nse symbol</div>
                      <div className="text-base font-medium text-[#101532]">Bse</div>
                    </div>
                  </div>
                  
                  {/* Second Row */}
                  <div>
                    <div className="text-sm text-[#9CA3AF] mb-1">Managing Director</div>
                    <div className="text-base font-medium text-[#101532]">Janndah</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financials */}
            <Card className="mb-8 border-[#ededed]">
              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#101532] mb-6">Financials</h3>
                
                {/* Tab Navigation */}
                <div className="flex items-center space-x-8 mb-6">
                  <button className="text-sm font-medium text-[#101532] border-b-2 border-[#0585db] pb-2">
                    Revenue
                  </button>
                  <button className="text-sm font-medium text-[#9CA3AF] pb-2">
                    Profit
                  </button>
                  <button className="text-sm font-medium text-[#9CA3AF] pb-2">
                    Net Worth
                  </button>
                </div>

                {/* Chart Area */}
                <div className="relative">
                  {/* All Values In Lakhs */}
                  <div className="absolute top-0 right-0 text-xs text-[#9CA3AF]">
                    All Values In Lakhs
                  </div>
                  
                  {/* Bar Chart */}
                  <div className="h-80 mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={financialsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis
                          dataKey="year"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: "#9CA3AF" }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={false}
                        />
                        <Bar 
                          dataKey="revenue" 
                          fill="#13b4fb" 
                          radius={[2, 2, 0, 0]}
                          maxBarSize={60}
                        >
                          <LabelList 
                            dataKey="revenue" 
                            position="top" 
                            style={{ 
                              fontSize: '12px', 
                              fill: '#9CA3AF',
                              fontWeight: '500'
                            }} 
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-6">
                    <button className="text-sm text-[#9CA3AF] border w-[6rem] py-1 px-2 rounded">Quarterly</button>
                    <button className="text-sm text-[#101532] border w-[6rem] py-1 px-2 rounded bg-slate-200 font-medium">yearly</button>
                  </div>
                  <button className="text-sm text-[#0585db] font-medium hover:underline">
                    See Details
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Fundamental */}
            <Card className="border-[#ededed]">
              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#101532] mb-6">Fundamental</h3>
                
                {/* Two Column Grid */}
                <div className="grid grid-cols-2 gap-8 mb-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {fundamentalMetrics.leftColumn.map((metric, index) => (
                      <div key={index}>
                        <div className="text-sm text-[#9CA3AF] mb-1">{metric.label}</div>
                        <div className="text-base font-medium text-[#101532]">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-6">
                    {fundamentalMetrics.rightColumn.map((metric, index) => (
                      <div key={index}>
                        <div className="text-sm text-[#9CA3AF] mb-1">{metric.label}</div>
                        <div className="text-base font-medium text-[#101532]">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom Link */}
                <div>
                  <button className="text-sm text-[#9CA3AF] hover:text-[#0585db] transition-colors">
                    Understand fundamentals
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-5">
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
  )
}

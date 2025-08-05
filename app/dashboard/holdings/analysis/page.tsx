"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp } from "lucide-react"
import Link from "next/link"
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts'

export default function AnalysisPage() {
  const timeButtons = ["1M", "3M", "6M", "1Y", "3Y", "5Y", "All"]
  
  // Realistic portfolio performance data with ups and downs (simplified)
  const portfolioData = [
    { time: 0, value: 25 },
    { time: 4, value: 26 },
    { time: 8, value: 28 },
    { time: 12, value: 27 },
    { time: 16, value: 29 },
    { time: 24, value: 26 },
    { time: 28, value: 33 },
    { time: 32, value: 32 },
    { time: 36, value: 34 },
    { time: 40, value: 42 },
    { time: 44, value: 41 },
    { time: 48, value: 43 },
    { time: 52, value: 44 },
    { time: 56, value: 52 },
    { time: 60, value: 51 },
    { time: 64, value: 53 },
    { time: 68, value: 54 },
    { time: 72, value: 61 },
    { time: 76, value: 63 },
    { time: 80, value: 65 },
    { time: 84, value: 64 },
    { time: 88, value: 71 },
    { time: 92, value: 73 },
    { time: 96, value: 75 },
    { time: 100, value: 76 },
    { time: 104, value: 77 },
    { time: 108, value: 85 },
    { time: 112, value: 87 },
    { time: 116, value: 89 },
    { time: 120, value: 88 },
    { time: 124, value: 95 },
    { time: 128, value: 97 },
    { time: 132, value: 98 },
    { time: 136, value: 100 },
    { time: 140, value: 101 },
    { time: 144, value: 103 },
    { time: 148, value: 105 },
    { time: 152, value: 106 },
    { time: 156, value: 108 },
    { time: 160, value: 110 },
    { time: 164, value: 112 },
    { time: 168, value: 114 },
    { time: 172, value: 115 },
    { time: 176, value: 117 },
    { time: 180, value: 119 },
    { time: 184, value: 120 },
    { time: 188, value: 115 },
    { time: 192, value: 109 },
    { time: 196, value: 103 },
    { time: 200, value: 102 },
    { time: 204, value: 96 },
    { time: 208, value: 95 },
    { time: 212, value: 89 },
    { time: 216, value: 88 },
    { time: 220, value: 82 },
    { time: 224, value: 81 },
    { time: 228, value: 75 },
    { time: 232, value: 74 },
    { time: 236, value: 73 },
    { time: 240, value: 72 }
  ]

  const marketCapData = [
    { 
      category: "Large Cap", 
      stockCount: "6 Stocks",
      currentAmount: "517.38 MZN", 
      currentPercentage: "46.5%", 
      returnsAmount: "517.38 MZN",
      returnsPercentage: "46.5%",
      value: 46.5, 
      color: "#10B981" 
    },
    { 
      category: "Small Cap", 
      stockCount: "6 Stocks",
      currentAmount: "517.38 MZN", 
      currentPercentage: "46.5%", 
      returnsAmount: "517.38 MZN",
      returnsPercentage: "46.5%",
      value: 46.5, 
      color: "#F59E0B" 
    },
    { 
      category: "Mid Cap", 
      stockCount: "6 Stocks",
      currentAmount: "517.38 MZN", 
      currentPercentage: "46.5%", 
      returnsAmount: "517.38 MZN",
      returnsPercentage: "46.5%",
      value: 46.5, 
      color: "#4F46E5" 
    },
    { 
      category: "Big Cap", 
      stockCount: "6 Stocks",
      currentAmount: "517.38 MZN", 
      currentPercentage: "46.5%", 
      returnsAmount: "517.38 MZN",
      returnsPercentage: "46.5%",
      value: 46.5, 
      color: "#06B6D4" 
    },
  ]
  
  const COLORS = ['#10B981', '#F59E0B', '#4F46E5', '#06B6D4']

  const sectorData = [
    { 
      category: "IT", 
      stockCount: "6 Stocks",
      currentAmount: "517.38 MZN", 
      currentPercentage: "46.5%", 
      returnsAmount: "517.38 MZN",
      returnsPercentage: "46.5%",
      value: 46.5, 
      color: "#10B981" 
    },
    { 
      category: "Banking", 
      stockCount: "6 Stocks",
      currentAmount: "517.38 MZN", 
      currentPercentage: "46.5%", 
      returnsAmount: "517.38 MZN",
      returnsPercentage: "46.5%",
      value: 46.5, 
      color: "#F59E0B" 
    },
    { 
      category: "Healthcare", 
      stockCount: "6 Stocks",
      currentAmount: "517.38 MZN", 
      currentPercentage: "46.5%", 
      returnsAmount: "517.38 MZN",
      returnsPercentage: "46.5%",
      value: 46.5, 
      color: "#3B82F6" 
    },
    { 
      category: "FMCG", 
      stockCount: "6 Stocks",
      currentAmount: "517.38 MZN", 
      currentPercentage: "46.5%", 
      returnsAmount: "517.38 MZN",
      returnsPercentage: "46.5%",
      value: 46.5, 
      color: "#8B5CF6" 
    },
  ]
  
  const SECTOR_COLORS = ['#10B981', '#F59E0B', '#3B82F6', '#8B5CF6']

  return (
    <div className="min-h-screen ">
     

      {/* Main Content */}
      <div className="">
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-5 h-5 text-gray-600 hover:text-gray-900" />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">Portfolio analysis</h1>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Current</p>
                <p className="text-3xl font-semibold text-gray-600 mb-2">5009.20 MZN</p>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">+2.56%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className=" place-content-center">
            <CardContent className="p-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total</p>
                <p className="text-3xl font-semibold text-gray-600">5009.20 MZN</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div>
                <p className="text-sm text-gray-600 mb-4">Portfolio is outperforming NIFTY 50 by 3.15%</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">Portfolio xIRR</span>
                    <span className="text-sm font-medium text-green-600">+15.87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">S&P 500 ETF</span>
                    <span className="text-sm font-medium text-green-600">+127204</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-4 border w-fit p-2 rounded">
                NIFTY shows your live returns by factoring in all buy and sell transactions, their dates, and your portfolio value.
              </p>
            </div>

            {/* Performance Chart */}
            <div className="h-80 bg-white rounded-lg mb-4 relative overflow-hidden border border-gray-100">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.4}/>
                      <stop offset="50%" stopColor="#60A5FA" stopOpacity={0.2}/>
                      <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid 
                    vertical={false}
                    horizontal={true}
                    strokeDasharray="3 3"
                    stroke="#cbd5e1"
                    strokeOpacity={0.8}
                  />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                    tickCount={6}
                    domain={['dataMin - 5', 'dataMax + 5']}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Time Period Buttons */}
            <div className="flex justify-start space-x-[1.5rem]">
              {timeButtons.map((period, index) => (
                <Button
                  key={period}
                  variant={index === 2 ? "default" : "outline"}
                  size="sm"
                  className={index === 2 ? "bg-blue-600 text-white" : ""}
                >
                  {period}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analysis Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Market Cap Chart */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-gray-700 mb-6 text-start">Market Cap</h3>

              {/* Dynamic Donut Chart */}
              <div className="flex justify-start mb-8">
                <div className="relative w-60 h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marketCapData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {marketCapData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">Market Cap</span>
                  </div>
                </div>
              </div>

              {/* Market Cap Table */}
              <div className="space-y-4">
                {/* Table Headers */}
                <div className="grid grid-cols-3 gap-4 pb-2">
                  <div className="text-sm font-medium text-gray-600">Market Cap</div>
                  <div className="text-sm font-medium text-gray-600 text-center">Current (Allocation)</div>
                  <div className="text-sm font-medium text-gray-600 text-center">Returns (%)</div>
                </div>
                
                {/* Table Rows */}
                {marketCapData.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
                    {/* Market Cap Column */}
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.category}</p>
                        <p className="text-xs text-gray-500">{item.stockCount}</p>
                      </div>
                    </div>
                    
                    {/* Current Allocation Column */}
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">{item.currentAmount}</p>
                      <p className="text-xs text-gray-500">{item.currentPercentage}</p>
                    </div>
                    
                    {/* Returns Column */}
                    <div className="text-center">
                      <p className="text-sm font-semibold text-green-600">{item.returnsAmount}</p>
                      <p className="text-xs text-gray-500">{item.returnsPercentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sector Allocation Chart */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6 text-start">Sector Allocation</h3>

              {/* Dynamic Donut Chart */}
              <div className="flex justify-start mb-8">
                <div className="relative w-60 h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sectorData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {sectorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={SECTOR_COLORS[index % SECTOR_COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">Sector Allocation</span>
                  </div>
                </div>
              </div>

              {/* Sector Allocation Table */}
              <div className="space-y-4">
                {/* Table Headers */}
                <div className="grid grid-cols-3 gap-4 pb-2">
                  <div className="text-sm font-medium text-gray-600">Sector Allocation</div>
                  <div className="text-sm font-medium text-gray-600 text-center">Current (Allocation)</div>
                  <div className="text-sm font-medium text-gray-600 text-center">Returns (%)</div>
                </div>
                
                {/* Table Rows */}
                {sectorData.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
                    {/* Sector Allocation Column */}
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.category}</p>
                        <p className="text-xs text-gray-500">{item.stockCount}</p>
                      </div>
                    </div>
                    
                    {/* Current Allocation Column */}
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">{item.currentAmount}</p>
                      <p className="text-xs text-gray-500">{item.currentPercentage}</p>
                    </div>
                    
                    {/* Returns Column */}
                    <div className="text-center">
                      <p className="text-sm font-semibold text-green-600">{item.returnsAmount}</p>
                      <p className="text-xs text-gray-500">{item.returnsPercentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

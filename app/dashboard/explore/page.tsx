import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronLeft, ChevronRight, Globe, TrendingUp, Wallet, Clock, BarChart3, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ExploreSections = () => {


    const mostBoughtStocks = [
        { name: "CDM Cervejas", logo: "🔴", price: "5009.20 MZN", change: "-47.00 (2.25%)", symbol: "CDM" },
        { name: "Zero Investimentos", logo: "🟡", price: "5009.20 MZN", change: "+47.00 (2.25%)", symbol: "ZERO" },
        { name: "Coal Limited", logo: "⚫", price: "5009.20 MZN", change: "-47.00 (2.25%)", symbol: "COAL" },
        { name: "Tropigalia", logo: "🔴", price: "5009.20 MZN", change: "+47.00 (2.25%)", symbol: "TROP" },
    ]

    const topGainers = [
        { name: "CDM Cervejas", logo: "🔴", price: "5009.20 MZN", change: "-47.00 (2.25%)", symbol: "CDM" },
        { name: "Zero Investimentos", logo: "🟡", price: "5009.20 MZN", change: "+47.00 (2.25%)", symbol: "ZERO" },
        { name: "CMH", logo: "🔵", price: "5009.20 MZN", change: "-47.00 (2.25%)", symbol: "CMH" },
        { name: "Tropigalia", logo: "🔴", price: "5009.20 MZN", change: "+47.00 (2.25%)", symbol: "TROP" },
    ]


    return (
        <>
            <div className="flex flex-col gap-4 ">
                {/* Main Content */}
                <div className="flex-1  ">
                    {/* Metric Cards */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <Card className="bg-gradient-to-r from-[#0585db] to-[#13b4fb] text-white border-none transition-all duration-300 hover:from-[#2196f3] hover:to-[#64b5f6] hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm opacity-90">Available balance</span>
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                                        <Wallet className="w-4 h-4 text-blue-600 " />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold mb-2">89,935</div>
                                <div className="flex items-center text-sm">
                                    <TrendingUp className="w-4 h-4 mr-1" />
                                    <span>10.2 +1.01% this week</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-r from-[#6c68e1] to-[#8c94a3] text-white border-none transition-all duration-300 hover:from-[#9c98f5] hover:to-[#b6bcc7] hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm opacity-90">Pending balance</span>
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                                        <Clock className="w-4 h-4 text-blue-600" />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold mb-2">23,283.5</div>
                                <div className="flex items-center text-sm">
                                    <TrendingUp className="w-4 h-4 mr-1" />
                                    <span>10.2 +1.01% this week</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-r from-[#b01e29] to-[#ed5533] text-white border-none transition-all duration-300 hover:from-[#d73c47] hover:to-[#f57c5a] hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm opacity-90">Total sales</span>
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                                        <BarChart3 className="w-4 h-4 text-blue-600" />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold mb-2">23,283.5</div>
                                <div className="flex items-center text-sm">
                                    <TrendingUp className="w-4 h-4 mr-1" />
                                    <span>10.2 +1.01% this week</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white border-none transition-all duration-300 hover:from-[#fcd34d] hover:to-[#fbbf24] hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm opacity-90">Total buys</span>
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                                        <ShoppingCart className="w-4 h-4 text-blue-600" />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold mb-2">23,283.5</div>
                                <div className="flex items-center text-sm">
                                    <TrendingUp className="w-4 h-4 mr-1" />
                                    <span>10.2 +1.01% this week</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Stock Ticker */}
                    <div className="flex items-start justify-between gap-4 mb-8">
                        {[
                            { name: "S&P 500 ETF", price: "509.90", change: "-3.05", percent: "-0.40%" },
                            { name: "Dow Jones ETF", price: "509.90", change: "-3.05", percent: "+0.56%" },
                            { name: "S&P 500 ETF", price: "509.90", change: "-3.05", percent: "-0.40%" },
                            { name: "S&P 500 ETF", price: "509.90", change: "-3.05", percent: "+0.56%" },
                            { name: "S&P 500 ETF", price: "509.90", change: "-3.05", percent: "-0.40%" },
                        ].map((stock, index) => (
                            <Card key={index} className="flex-1  bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer">
                                <CardContent className="p-5 px-4">
                                    {/* First Row: Vertical Line + Name + Price */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-[2px] h-4 bg-gray-800"></div>
                                            <div className="text-sm font-medium text-gray-900">{stock.name}</div>
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">{stock.price}</div>
                                    </div>
                                    {/* Second Row: Change + Percent */}
                                    <div className={`text-sm font-medium ${stock.percent.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                                        {stock.change} {stock.percent}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        <Link href="/dashboard/explore/country">
                            <Card className=" bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer">
                                <CardContent className="p-3">
                                    <Globe color='grey' />
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-4'>

                    <div className=' col-span-8'>
                        {/* Most Bought Stocks */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-[#101532]">Most bought stocks on Amaramba</h2>
                                <Button variant="ghost" className="text-[#0585db]">
                                    See more
                                </Button>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {mostBoughtStocks.map((stock, index) => (
                                    <Link key={index} href={`/dashboard/explore/stock/${stock.symbol}`}>
                                        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-[#f4f4f5] flex items-center justify-center">
                                                    {stock.logo}
                                                </div>
                                                <div className="font-medium text-[#101532]">{stock.name}</div>
                                            </div>
                                            <div className="text-lg font-bold text-[#101532] mb-1">{stock.price}</div>
                                            <div className={`text-sm ${stock.change.startsWith("+") ? "text-[#04b589]" : "text-[#ed5533]"}`}>
                                                {stock.change}
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Top Gainers */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-[#101532]">Top Gainers</h2>
                                <div className="flex items-center space-x-2">
                                    <Button variant="ghost" className="text-[#0585db]">
                                        See more
                                    </Button>
                                    <div className="flex space-x-1">
                                        <Button variant="outline" size="sm">
                                            Large
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            Mid
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            Small
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {topGainers.map((stock, index) => (
                                    <Link key={index} href={`/dashboard/explore/stock/${stock.symbol}`}>
                                        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-[#f4f4f5] flex items-center justify-center">
                                                    {stock.logo}
                                                </div>
                                                <div className="font-medium text-[#101532]">{stock.name}</div>
                                            </div>
                                            <div className="text-lg font-bold text-[#101532] mb-1">{stock.price}</div>
                                            <div className={`text-sm ${stock.change.startsWith("+") ? "text-[#04b589]" : "text-[#ed5533]"}`}>
                                                {stock.change}
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Top by Market Cap Table */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-[#101532] mb-4">Top by Market Cap</h2>
                            <Card>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                                                                 <thead className="bg-gray-100">
                                             <tr>
                                                 <th className="text-left p-4 font-medium text-gray-600 text-sm">COMPANY</th>
                                                 <th className="text-left p-4 font-medium text-gray-600 text-sm">MARKET PRICE</th>
                                                 <th className="text-left p-4 font-medium text-gray-600 text-sm">
                                                     <div className="flex items-center gap-2">
                                                         CLOSE PRICE 
                                                         <ChevronDown className="w-4 h-4" />
                                                     </div>
                                                 </th>
                                                 <th className="text-left p-4 font-medium text-gray-600 text-sm">
                                                     <div className="flex items-center gap-2">
                                                         MARKET CAP 
                                                         <ChevronDown className="w-4 h-4" />
                                                     </div>
                                                 </th>
                                             </tr>
                                         </thead>
                                        <tbody>
                                            {Array.from({ length: 6 }, (_, i) => (
                                                <tr key={i} className="border-b border-[#ededed]">
                                                    <td className="p-4 font-medium text-[#101532]">BSL PVT LMT</td>
                                                    <td className="p-4">
                                                        <div className="text-[#101532]">15009.20</div>
                                                        <div className="text-[#ed5533] text-sm">+47.00 (2.25%)</div>
                                                    </td>
                                                    <td className="p-4 text-[#101532]">4,9212.40</td>
                                                    <td className="p-4 text-[#101532]">4,9212.40</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex items-center justify-center p-4 space-x-2">
                                    <Button variant="ghost" size="icon">
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button variant="default" size="sm" className="bg-[#0585db]">
                                        1
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        2
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        ...
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        10
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Watchlist Sidebar */}
                    <div className="w-full col-span-4 ">
                        <div className="flex items-center justify-between mb-6 ">
                            <h2 className="text-xl font-bold text-[#101532]">Watchlist</h2>
                            <Button variant="ghost" className="text-[#0585db]">
                                See more
                            </Button>
                        </div>
                        <div className="space-y-4 border border-[#ededed] p-6  bg-white">
                            {[
                                { name: "ADH Citigroup", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                                { name: "Bull tech exports", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                                { name: "Coal Limited", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                                { name: "HDFC Bank", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                                { name: "SBI Bank", price: "5009.20 MZN", change: "-47.00 (2.25%)" },
                                { name: "SBI Bank", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                                { name: "SBI Bank", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                                { name: "Coal Limited", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                                { name: "SBI Bank", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                                { name: "Coal Limited", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                                { name: "Coal Limited", price: "5009.20 MZN", change: "+47.00 (2.25%)" },
                            ].map((stock, index) => (
                                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
                                    <div>
                                        <div className="font-medium text-[#101532] text-sm">{stock.name}</div>
                                        <div className="text-lg font-bold text-[#101532]">{stock.price}</div>
                                    </div>
                                    <div
                                        className={`text-sm text-right ${stock.change.startsWith("+") ? "text-[#04b589]" : "text-[#ed5533]"}`}
                                    >
                                        {stock.change}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            
        </>
    )
}

export default ExploreSections
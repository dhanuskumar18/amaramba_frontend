"use client";

import React from "react";

// Stock data interface
interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  color: string;
}

// Sample stock data
const stockData: StockData[] = [
  {
    symbol: "ABC",
    price: 509.9,
    change: -3.05,
    changePercent: -0.4,
    color: "#8085FF",
  },
  {
    symbol: "EFG",
    price: 30.0,
    change: -3.05,
    changePercent: 0.56,
    color: "#F044FF",
  },
  {
    symbol: "HIJ",
    price: 452.9,
    change: -3.05,
    changePercent: -0.96,
    color: "#FFAA2B",
  },
  {
    symbol: "KLM",
    price: 452.9,
    change: -3.05,
    changePercent: -0.96,
    color: "#FFAA2B",
  },
  {
    symbol: "NOP",
    price: 452.9,
    change: -3.05,
    changePercent: -0.96,
    color: "#FFAA2B",
  },
  {
    symbol: "QRS",
    price: 452.9,
    change: -3.05,
    changePercent: -0.96,
    color: "#FFAA2B",
  },
];

// Candlestick data interface
interface CandlestickData {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// Sample candlestick data (simplified for demo)
const candlestickData: CandlestickData[] = Array.from(
  { length: 100 },
  (_, i) => ({
    open: 100 + Math.random() * 20,
    high: 105 + Math.random() * 15,
    low: 95 + Math.random() * 10,
    close: 100 + Math.random() * 20,
    volume: 1000 + Math.random() * 5000,
  }),
);

const StockMarketDashboard: React.FC = () => {
  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  const formatChange = (change: number) => {
    return change > 0 ? `+${change.toFixed(2)}` : change.toFixed(2);
  };

  const formatChangePercent = (percent: number) => {
    return percent > 0 ? `+${percent.toFixed(2)}%` : `${percent.toFixed(2)}%`;
  };

  return (
    <div className="relative w-full mt-3 mx-auto ">
      {/* Header Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] leading-tight mb-5 text-center">
        <span>Featured </span>
        <span className="text-[#0585db]">Stocks</span>
        <span> or </span>
        <span className="text-[#0585db]">Funds</span>
      </h1>
      <div className="mb-6 grid grid-cols-2 gap-6 mt-14">
        <p className="text-[#041e3f] text-lg leading-9 font-normal">
          Include small sparkline charts or performance %.
        </p>
        <p className="text-[#041e3f] text-lg leading-9 font-normal">
          Showcase key local stocks (e.g., Delta Corporation, Econet Wireless) +
          popular global options if allowed.
        </p>
      </div>

      <div className="flex gap-6">
        {/* Main Chart Container */}
        <div className="w-2/3 bg-[#ebf7ff] rounded-[40px] p-6">
          <div className="h-[398px] flex flex-col gap-4">
            {/* Chart Area */}
            <div className="flex-1 relative">
              {/* Chart Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  alt="Stock Market Chart"
                  className="w-full h-full object-contain rounded-lg absolute top-10"
                  src="/images/graphs.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stock Indicators */}
        <div className="w-[800px] flex flex-col gap-3">
          {stockData.map((stock, index) => (
            <div key={index} className="bg-[#ebf7ff] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1">
                  <div
                    className="w-1 h-4 rounded-full"
                    style={{ backgroundColor: stock.color }}
                  />
                  <span className="text-[#041e3f] text-sm font-normal">
                    {stock.symbol}
                  </span>
                </div>
                <span className="text-[#041e3f] text-sm font-normal">
                  {formatPrice(stock.price)}
                </span>
              </div>
              <div className="flex gap-2">
                <span
                  className={`text-sm font-normal ${
                    stock.changePercent > 0
                      ? "text-[#0fedbe]"
                      : "text-[#f63c6b]"
                  }`}
                >
                  {formatChange(stock.change)}
                </span>
                <span
                  className={`text-sm font-normal ${
                    stock.changePercent > 0
                      ? "text-[#0fedbe]"
                      : "text-[#f63c6b]"
                  }`}
                >
                  {formatChangePercent(stock.changePercent)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockMarketDashboard;

"use client"

import { Filter, Search, Download, ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const transactions = [
  { id: 1, type: "positive", amount: "+54 MZN", balance: "Bal: 98 MZN", date: "30 Jul 2025, 08:00 PM" },
  { id: 2, type: "negative", amount: "-54 MZN", balance: "Bal: 98 MZN", date: "30 Jul 2025, 08:00 PM" },
  { id: 3, type: "positive", amount: "+54 MZN", balance: "Bal: 98 MZN", date: "30 Jul 2025, 08:00 PM" },
  { id: 4, type: "negative", amount: "-54 MZN", balance: "Bal: 98 MZN", date: "30 Jul 2025, 08:00 PM" },
  { id: 5, type: "positive", amount: "+54 MZN", balance: "Bal: 98 MZN", date: "30 Jul 2025, 08:00 PM" },
  { id: 6, type: "negative", amount: "-54 MZN", balance: "Bal: 98 MZN", date: "30 Jul 2025, 08:00 PM" },
  { id: 7, type: "positive", amount: "+54 MZN", balance: "Bal: 98 MZN", date: "30 Jul 2025, 08:00 PM" },
  { id: 8, type: "negative", amount: "-54 MZN", balance: "Bal: 98 MZN", date: "30 Jul 2025, 08:00 PM" },
]

export default function AllTransactions() {
  return (
    <div className=" " >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold text-blue-900">All Transactions</h1>
        </div>
        <div className="flex items-center justify-between w-3/4">
          <h2 className="text-xl font-bold text-blue-900">Transactions</h2>
          <div className="flex flex-col gap-2">
            <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
              <Download className="w-4 h-4 mr-2" />
              Download statement
            </Button>
            <Button variant="outline" className="flex items-center ">
              Sort
              <ArrowUpDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* Filters Header */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <h3 className="font-medium text-gray-900">Filters</h3>
              </div>

              {/* Search */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search..." className="pl-10" />
                </div>
              </div>

              {/* Transaction Status */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700">Transaction Status</h4>
                <div className="flex items-center space-x-2">
                  <Checkbox id="failed" />
                  <label htmlFor="failed" className="text-sm text-gray-600">
                    Only Failed
                  </label>
                </div>
              </div>

              {/* Transaction Type */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700">Transaction Type</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="deposit" />
                    <label htmlFor="deposit" className="text-sm text-gray-600">
                      Deposit
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="withdraw" />
                    <label htmlFor="withdraw" className="text-sm text-gray-600">
                      Withdraw
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="stocks" />
                    <label htmlFor="stocks" className="text-sm text-gray-600">
                      Stocks
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fo" />
                    <label htmlFor="fo" className="text-sm text-gray-600">
                      F&O
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="other" />
                    <label htmlFor="other" className="text-sm text-gray-600">
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions List */}
        <div className="lg:col-span-3">
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          transaction.type === "positive" ? "bg-green-100" : "bg-red-100"
                        }`}
                      >
                        {transaction.type === "positive" ? (
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        ) : (
                          <TrendingDown className="w-6 h-6 text-red-500" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Paid For Stocks</h3>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-semibold ${
                          transaction.type === "positive" ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {transaction.amount}
                      </p>
                      <p className="text-sm text-gray-500">{transaction.balance}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

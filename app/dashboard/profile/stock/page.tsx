"use client"

import { TrendingUp, Banknote, PiggyBank, ChevronRight, Plus, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import Link from "next/link"

export default function FinancialDashboard() {
  return (
    <div className="  ">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Stock Balance Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Stock Balance</p>
                <p className="text-2xl font-bold text-blue-600">233 MZN</p>
              </div>
            </div>

            {/* Balance Cards */}
            <div className="space-y-4">
              {/* Cash Balance */}
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <Banknote className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Cash</h3>
                      <p className="text-sm text-gray-500">Available Balance</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900">233 MZN</p>
                </div>
              </div>

              {/* Pledge Balance */}
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                      <PiggyBank className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Pledge</h3>
                      <p className="text-sm text-gray-500">Add Balance For Stock Holdings</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white border-gray-300">
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </div>

            {/* All Transactions */}
            <Link href="/dashboard/profile/transaction" className="block">
              <div className="bg-gray-100 rounded-xl p-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">All Transactions</h3>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Add Money Form */}
          <div className="space-y-6">
            {/* Action Toggles */}
            <div className="flex gap-2">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl">
                <DollarSign className="w-4 h-4 mr-2" />
                Add Money
              </Button>
              <Button variant="outline" className="px-6 py-2 rounded-xl bg-white border-gray-300 text-gray-600">
                <DollarSign className="w-4 h-4 mr-2" />
                Withdraw
              </Button>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 space-y-6">
              {/* Enter Amount */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Enter Amount</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">MZN</div>
                  <Input
                    type="number"
                    placeholder="0"
                    className="pl-12 text-right text-lg font-medium bg-white border-gray-300 rounded-xl"
                    defaultValue="0"
                  />
                </div>
              </div>

              {/* Bank Account Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Bank Account</label>
                <div className="bg-white border border-gray-300 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <Banknote className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">Bank Account</p>
                        <p className="text-sm text-gray-500">Accxxxx5685</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Add Money Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                <DollarSign className="w-4 h-4 mr-2" />
                Add Money
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

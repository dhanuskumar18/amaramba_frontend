"use client";
import { Search, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronIcon } from "@/components/icons";

export default function AllOrdersPage() {
  const router = useRouter();
  
  const ordersByDate = {
    "1-06-2025": [
      {
        id: "order-001",
        company: "Ary Technology",
        type: "Buy",
        status: "Market - Regular",
        qty: "5",
        price: "484.7 MZN",
        total: "Avg Price",
        time: "4:37 PM",
        statusColor: "green",
      },
    ],
    "30-05-2025": [
      {
        id: "order-002",
        company: "Ary Technology",
        type: "Buy",
        status: "Market - Regular",
        qty: "5",
        price: "484.7 MZN",
        total: "Avg Price",
        time: "4:37 PM",
        statusColor: "yellow",
      },
      {
        id: "order-003",
        company: "Ary Technology",
        type: "Sell",
        status: "Market - Regular",
        qty: "5",
        price: "484.7 MZN",
        total: "Avg Price",
        time: "4:37 PM",
        statusColor: "red",
      },
    ],
    "3-06-2025": [
      {
        id: "order-004",
        company: "Ary Technology",
        type: "Buy",
        status: "Market - Regular",
        qty: "5",
        price: "484.7 MZN",
        total: "Avg Price",
        time: "4:37 PM",
        statusColor: "green",
      },
      {
        id: "order-005",
        company: "Ary Technology",
        type: "Sell",
        status: "Market - Regular",
        qty: "5",
        price: "484.7 MZN",
        total: "Avg Price",
        time: "4:37 PM",
        statusColor: "green",
      },
    ],
  };

  return (
    <div className="min-h-screen">
     

      {/* Main Content */}
      <div className="">
        <div className="flex items-center mb-8">
          <Link className="mr-4" href="/dashboard/orders">
            <ArrowLeft className="w-5 h-5 text-gray-600 hover:text-gray-900" />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">All Orders</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-2 ">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                  <button className="text-blue-600 text-sm hover:underline">
                    Clear all
                  </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      className="pl-10 bg-white border-gray-300"
                      placeholder="Search for Stock"
                    />
                  </div>
                </div>

                {/* Date Range */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="relative flex-1">
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4" />
                      <Input
                        className="pr-10 bg-white border-gray-300"
                        placeholder="From :"
                      />
                    </div>
                    <div className="relative flex-1">
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4" />
                      <Input
                        className="pr-10 bg-white border-gray-300"
                        placeholder="To:"
                      />
                    </div>
                  </div>
                </div>

                {/* Filter Options */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="in-progress" />
                      <label
                        className="text-sm text-gray-700"
                        htmlFor="in-progress"
                      >
                        Orders In Progress
                      </label>
                    </div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="successful" />
                      <label
                        className="text-sm text-gray-700"
                        htmlFor="successful"
                      >
                        Successful Progress
                      </label>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="unsuccessful" />
                      <label
                        className="text-sm text-gray-700"
                        htmlFor="unsuccessful"
                      >
                        UnSuccessful Progress
                      </label>
                    </div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Orders List */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              {Object.entries(ordersByDate).map(([date, orders]) => (
                <div key={date} >
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    {date}
                  </h3>
                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y divide-gray-200">
                        {orders.map((order, index) => (
                          <div 
                            key={index} 
                            className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
                            onClick={() => router.push(`/dashboard/orders/${order.id}`)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div
                                  className={`w-3 h-3 rounded-full ${
                                    order.statusColor === "green"
                                      ? "bg-green-500"
                                      : order.statusColor === "yellow"
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                  }`}
                                />
                                <div>
                                  <p className="font-medium text-gray-900">
                                    {order.company}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {order.status}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center space-x-8">
                                <div className="text-center">
                                  <p
                                    className={`text-sm font-medium ${
                                      order.type === "Buy"
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                                  >
                                    {order.type}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    Intraday
                                  </p>
                                </div>

                                <div className="text-center">
                                  <p className="text-sm font-medium text-gray-900">
                                    {order.qty}
                                  </p>
                                  <p className="text-xs text-gray-500">Qty</p>
                                </div>

                                <div className="text-center">
                                  <p className="text-sm font-medium text-gray-900">
                                    {order.price}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {order.total}
                                  </p>
                                </div>

                                <div className="text-right flex items-center space-x-1">
                                  <p className="text-sm text-gray-900">
                                    {order.time}
                                  </p>
                                  <ChevronIcon className="w-4 h-4 text-gray-400" />
                                </div>
                            
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

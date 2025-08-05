"use client"
import { ArrowLeft, ChevronDown, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
export default function OrderDetailsPage() {
  const orderDetails = {
    company: "Info Tech",
    type: "BUY", // For the badge
    quantity: "6",
    totalOrderValue: "66 MZN",
    pricing: {
      orderPrice: "Market",
      avgPrice: "66 MZN",
      mktPrice: "66 MZN",
    },
    settings: {
      orderType: "Market",
      delivery: "Delivery",
      exchange: "BSE",
      duration: "Day",
    },
  }
  const orderStatusTimeline = [
    {
      status: "Request Verified",
      time: "1:11 PM, 30 Jul",
      transactionId: "Amaramba ID : SDFHGRGK2534634VJFSD",
      completed: true,
    },
    {
      status: "Order Place With BSE",
      time: "1:11 PM, 30 Jul",
      transactionId: "Amaramba ID : SDFHGRGK2534634VJFSD",
      completed: true,
    },
    {
      status: "Order Place With BSE", // Assuming this is a placeholder for another step
      time: "1:11 PM, 30 Jul",
      transactionId: "Amaramba ID : SDFHGRGK2534634VJFSD",
      completed: true,
    },
  ]
  return (
    <div className=" ">
      {/* Main Content */}
      <div className="">
        <div className="flex items-center mb-8">
          <Link className="mr-4" href="/orders">
            <ArrowLeft className="w-5 h-5 text-gray-600 hover:text-gray-900" />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">Order Details</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Order Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company and Type Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-medium text-gray-900">{orderDetails.company}</h3>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs px-2 py-1 rounded-full">
                        {orderDetails.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">Quantity : {orderDetails.quantity} Shares</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{orderDetails.totalOrderValue}</p>
                  <p className="text-sm text-gray-600">Total Order Value</p>
                </div>
              </CardContent>
            </Card>
            {/* Pricing Details and Order Settings Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">$ Pricing Details</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">Order Price</p>
                      <p className="font-medium text-gray-900">{orderDetails.pricing.orderPrice}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">Average Price</p>
                      <p className="font-medium text-gray-900">{orderDetails.pricing.avgPrice}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">Market Price</p>
                      <p className="font-medium text-gray-900">{orderDetails.pricing.mktPrice}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Order Settings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">Order Type</p>
                      <p className="font-medium text-gray-900">{orderDetails.settings.orderType}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">Delivery</p>
                      <p className="font-medium text-gray-900">{orderDetails.settings.delivery}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">Exchange</p>
                      <p className="font-medium text-gray-900">{orderDetails.settings.exchange}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-medium text-gray-900">{orderDetails.settings.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* List of Trades */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">List of Trades</p>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Right Side - Order Status */}
          <div className="lg:col-span-1">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                {/* Order Status Header */}
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-gray-900">Order Status</h4>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-900">Executed</span>
                  </div>
                </div>
                {/* Order Status Timeline */}
                <div className="relative pl-6">
                  {/* Dashed line */}
                  <div className="absolute left-3 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-300" />
                  
                  {orderStatusTimeline.map((status, index) => (
                    <div key={index} className="mb-6 last:mb-0 relative">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-6 h-6 flex items-center justify-center">
                        {status.completed ? (
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        ) : (
                          <div className="w-3 h-3 bg-gray-400 rounded-full" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="ml-8">
                        <p className="font-medium text-gray-900 text-sm">{status.status}</p>
                        {status.time && (
                          <p className="text-xs text-gray-600 mt-1">{status.time}</p>
                        )}
                        {status.transactionId && (
                          <p className="text-xs text-gray-500 mt-1 break-all">
                            Amaramba ID : {status.transactionId}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
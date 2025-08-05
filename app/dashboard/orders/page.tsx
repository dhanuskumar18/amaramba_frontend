"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OrdersPage() {
  const ordersData = [
    {
      company: "Lz Tech Company",
      action: "Buy",
      qty: "5",
      avgPrice: "4,512.60",
    },
    {
      company: "Lz Tech Company",
      action: "Sell",
      qty: "1",
      avgPrice: "4,512.60",
    },
    {
      company: "Lz Tech Company",
      action: "Buy",
      qty: "5",
      avgPrice: "4,512.60",
    },
    {
      company: "Lz Tech Company",
      action: "Sell",
      qty: "1",
      avgPrice: "4,512.60",
    },
    {
      company: "Lz Tech Company",
      action: "Buy",
      qty: "5",
      avgPrice: "4,512.60",
    },
    {
      company: "Lz Tech Company",
      action: "Buy",
      qty: "1",
      avgPrice: "4,512.60",
    },
  ];

  return (
    <div className=" ">
      {/* Main Content */}
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders Table Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-semibold text-gray-900">
                Total orders
              </h1>
              <Link href="/dashboard/orders/all" className="text-blue-600 text-sm hover:underline">
                All orders
              </Link>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b">
                      <tr>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-700 uppercase tracking-wider">
                          COMPANY
                        </th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-700 uppercase tracking-wider">
                          BUY/SELL
                        </th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-700 uppercase tracking-wider">
                          QTY
                        </th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-700 uppercase tracking-wider">
                          AVG PRICE
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {ordersData.map((order, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-4 px-6 text-sm text-gray-900">
                            {order.company}
                          </td>
                                                     <td className="py-4 px-6">
                             <button
                               className={`inline-flex items-center px-3 py-1.5 rounded-[30px] border border-gray-200 bg-white text-sm font-medium ${
                                 order.action === "Buy"
                                   ? "text-green-600"
                                   : "text-red-600"
                               }`}
                             >
                               <div
                                 className={`w-2 h-2 rounded-full mr-2 ${
                                   order.action === "Buy"
                                     ? "bg-green-500"
                                     : "bg-red-500"
                                 }`}
                               />
                               {order.action}
                             </button>
                           </td>
                          <td className="py-4 px-6 text-sm text-gray-900">
                            {order.qty}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-900">
                            {order.avgPrice}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side Panel */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full min-h-[400px]">
                {/* Header */}
                <div className="text-center mb-6">
                  <p className="text-gray-600 text-sm">
                    Select a stock to get started
                  </p>
                </div>

              

                {/* Dashed Separator */}
                <div className="border-t border-dashed border-gray-300 mb-6" />
  {/* Stock Input Field */}
  <div className="w-full h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-full h-full bg-blue-100 rounded-lg" />
                </div>
                {/* Footer */}
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Balance: 23.8</span>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Money
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

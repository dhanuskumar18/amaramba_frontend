"use client"

import { Calendar } from "lucide-react"

const notifications = {
  today: [
    {
      id: 1,
      type: "executed",
      title: "Order Executed",
      message: "Zero Investimentos Delivery Buy Order For 8 Shares At Rs 8.86 Has Been Executed On BSE",
      time: "4:54 PM",
    },
    {
      id: 2,
      type: "rejected",
      title: "Order Rejected",
      message: "Zero Investimentos Delivery Buy Order For 8 Shares At Rs 8.86 Has Been Executed On BSE",
      time: "4:54 PM",
    },
    {
      id: 3,
      type: "executed",
      title: "Order Executed",
      message: "Zero Investimentos Delivery Buy Order For 8 Shares At Rs 8.86 Has Been Executed On BSE",
      time: "4:54 PM",
    },
  ],
  yesterday: [
    {
      id: 4,
      type: "executed",
      title: "Order Executed",
      message: "Zero Investimentos Delivery Buy Order For 8 Shares At Rs 8.86 Has Been Executed On BSE",
      time: "4:54 PM",
    },
    {
      id: 5,
      type: "rejected",
      title: "Order Rejected",
      message: "Zero Investimentos Delivery Buy Order For 8 Shares At Rs 8.86 Has Been Executed On BSE",
      time: "4:54 PM",
    },
    {
      id: 6,
      type: "executed",
      title: "Order Executed",
      message: "Zero Investimentos Delivery Buy Order For 8 Shares At Rs 8.86 Has Been Executed On BSE",
      time: "4:54 PM",
    },
  ],
  weekAgo: [
    {
      id: 7,
      type: "executed",
      title: "Order Executed",
      message: "Zero Investimentos Delivery Buy Order For 8 Shares At Rs 8.86 Has Been Executed On BSE",
      time: "4:54 PM",
    },
    {
      id: 8,
      type: "rejected",
      title: "Order Rejected",
      message: "Zero Investimentos Delivery Buy Order For 8 Shares At Rs 8.86 Has Been Executed On BSE",
      time: "4:54 PM",
    },
    {
      id: 9,
      type: "executed",
      title: "Order Executed",
      message: "Zero Investimentos Delivery Buy Order For 8 Shares At Rs 8.86 Has Been Executed On BSE",
      time: "4:54 PM",
    },
  ],
}

function NotificationItem({ notification }: { notification: any }) {
  return (
    <div className="flex items-start justify-between py-4">
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 mb-1">{notification.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{notification.message}</p>
      </div>
      <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{notification.time}</span>
    </div>
  )
}

export default function Notifications() {
  return (
    <div className="">
      <div className="">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Notification</h1>
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="text-sm text-gray-600">Stay duration</span>
              <span className="text-sm">8/1/2025 - 2/28/2026</span>
              <button className="text-gray-400 hover:text-gray-600">
                <Calendar className="w-4 h-4" />
              </button>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Today Section */}
          <div>
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Today</h2>
            <div className="space-y-0">
              {notifications.today.map((notification, index) => (
                <div key={notification.id}>
                  <NotificationItem notification={notification} />
                  {index < notifications.today.length - 1 && <div className="border-b border-gray-200" />}
                </div>
              ))}
            </div>
          </div>

          {/* Yesterday Section */}
          <div>
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Yesterday</h2>
            <div className="space-y-0">
              {notifications.yesterday.map((notification, index) => (
                <div key={notification.id}>
                  <NotificationItem notification={notification} />
                  {index < notifications.yesterday.length - 1 && <div className="border-b border-gray-200" />}
                </div>
              ))}
            </div>
          </div>

          {/* 1 Week Ago Section */}
          <div>
            <h2 className="text-lg font-semibold text-blue-600 mb-4">1 Week Ago</h2>
            <div className="space-y-0">
              {notifications.weekAgo.map((notification, index) => (
                <div key={notification.id}>
                  <NotificationItem notification={notification} />
                  {index < notifications.weekAgo.length - 1 && <div className="border-b border-gray-200" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

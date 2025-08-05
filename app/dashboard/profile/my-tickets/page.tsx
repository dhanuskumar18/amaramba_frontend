"use client"

import { useState } from "react"
import {
  ArrowLeft,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function MyTicketsPage() {
  const tickets = [
    {
      id: 1,
      title: "KYC problem",
      user: "Jandaah",
      status: "OPEN",
      date: "jul 2, 2025",
    }
  ]

  return (
    <div className=" bg-gray-50  ">
    

      <div className="">
        {/* Header */}
        <div className="mb-8">
          {/* <Link 
            href="/kyc"
            className="text-gray-500 hover:text-gray-700 flex items-center space-x-3 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-base font-medium">Back</span>
          </Link> */}
          <h1 className="text-3xl font-bold text-gray-900">My tickets</h1>
        </div>

        {/* Ticket List */}
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div 
              key={ticket.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between">
                {/* Left Side - Icon and Details */}
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="relative">
                      {/* Ticket icon */}
                      <img 
                        src="/note-2.png" 
                        alt="Ticket" 
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{ticket.title}</h3>
                    <p className="text-sm text-gray-500">{ticket.user}</p>
                  </div>
                </div>

                {/* Right Side - Status and Date */}
                <div className="flex flex-col items-end space-y-2">
                  {/* Status Badge */}
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {ticket.status}
                  </div>
                  
                  {/* Date */}
                  <p className="text-sm text-gray-500">{ticket.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no tickets) */}
        {tickets.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No tickets yet</h3>
            <p className="text-gray-500">You haven't created any support tickets yet.</p>
          </div>
        )}
      </div>
    </div>
  )
} 
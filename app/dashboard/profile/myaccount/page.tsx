"use client"

import { useState } from "react"
import {
  ChevronRight,
  Search,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Ticket,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function KYCPage() {
  const [activeSubSection, setActiveSubSection] = useState("KYC")
  const [selectedFAQ, setSelectedFAQ] = useState<string | null>(null)

  const subSections = [
    { id: "KYC", label: "KYC" },
    { id: "Amaramba", label: "Amaramba account" },
    { id: "Bank", label: "Bank Accounts" },
    { id: "Others", label: "Others" }
  ]

  const faqItems = [
    {
      id: "kyc-reverify",
      question: "Why do I need to reverify my KYC?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
    },
    {
      id: "pan-card",
      question: "I don't have a PAN card. Can I invest?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: "kyc-charges",
      question: "Do you charge for processing KYC?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ]

  const handleFAQClick = (faqId: string) => {
    setSelectedFAQ(faqId)
  }

  const selectedFAQData = faqItems.find(faq => faq.id === selectedFAQ)

  return (
    <div className="min-h-screen bg-gray-50  w-full">
     

      <div className=" w-full ">
        <div className="  ">
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-gray-200">
            <div className="flex items-center space-x-6">
              {/* <Link 
                href="/"
                className="text-gray-500 hover:text-gray-700 flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-base font-medium">Back</span>
              </Link> */}
              <h1 className="text-3xl font-semibold text-gray-900">Stuck somewhere?</h1>
            </div>
                         <Link href="/dashboard/profile/my-tickets">
               <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-3 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                 <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                 <span className="text-base">My tickets</span>
               </button>
             </Link>
          </div>

          {/* Search Bar */}
          <div className="relative p-8 border-b border-gray-200">
            <Search className="absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <Input
              type="text"
              placeholder="Search for your issue"
              className="pl-14 py-4 w-full border-gray-300 rounded-xl text-base"
            />
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 px-8">
            <button className="px-8 py-4 text-base font-medium border-b-2 border-blue-500 text-blue-600">
              My Account
            </button>
            <button className="px-8 py-4 text-base font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:bg-gray-50 transition-colors">
              Stocks
            </button>
            <button className="px-8 py-4 text-base font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:bg-gray-50 transition-colors">
              Payment & withdraw
            </button>
            <button className="px-8 py-4 text-base font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:bg-gray-50 transition-colors">
              Most visited FAQ
            </button>
          </div>

          {/* Content Area */}
          <div className="flex min-h-[600px]">
            {/* Left Sidebar */}
            <div className="w-80 border-r border-gray-200 bg-gray-50">
              <div className="p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {subSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSubSection(section.id)}
                      className={`w-full text-left px-6 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                        activeSubSection === section.id 
                          ? "bg-blue-100 text-blue-700 shadow-sm" 
                          : "text-gray-600 hover:text-gray-800 hover:bg-white"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 p-8">
              {selectedFAQ && selectedFAQData ? (
                <div className="space-y-6">
                  {/* FAQ Question */}
                  <h2 className="text-2xl font-bold text-gray-900">{selectedFAQData.question}</h2>
                  
                  {/* FAQ Answer */}
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {selectedFAQData.answer}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                    </p>
                  </div>

                                     {/* Action Buttons */}
                   <div className="flex items-center space-x-4 pt-4">
                     <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                       <MessageSquare className="w-4 h-4" />
                       <span>Contact Us</span>
                     </Button>
                     <Link href="/dashboard/profile/tickets">
                       <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                         <span>Rise a ticket</span>
                         <Ticket className="w-4 h-4" />
                       </button>
                     </Link>
                   </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Account & KYC</h2>
                  <div className="space-y-2">
                    {faqItems.map((item, index) => (
                      <div 
                        key={item.id}
                        className="flex items-center justify-between py-6 px-6 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 cursor-pointer transition-all duration-200"
                        onClick={() => handleFAQClick(item.id)}
                      >
                        <span className="text-base text-gray-700 font-medium">{item.question}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
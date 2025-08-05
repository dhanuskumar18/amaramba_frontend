"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Image as ImageIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function TicketsPage() {
  const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's")

  return (
    <div className="min-h-screen  font-sans">
      {/* Top Navigation Bar */}


      <div className=" ">
        <div className=" ">
          {/* Header */}
          <div className="mb-8">
            {/* <Link 
              href="/kyc"
              className="text-gray-500 hover:text-gray-700 flex items-center space-x-3 mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-base font-medium">Back</span>
            </Link> */}
            <h1 className="text-3xl font-semibold text-black">My tickets</h1>
          </div>

          {/* Ticket Form */}
          <div className="space-y-6 border-[1px] border-gray-200 rounded-lg p-8 w-3/4">
            {/* Ticket Issue Label */}
            <div>
              <Label className="text-gray-500 text-sm font-medium">Ticket Issue</Label>
            </div>

            {/* Problem Title */}
            <div>
              <h2 className="text-2xl font-bold text-black">KYC problem ?</h2>
            </div>

            {/* Description Text Area */}
            <div>
              <Label htmlFor="description" className="text-gray-500 text-sm font-medium mb-2 block">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your issue..."
                className="min-h-[120px] border-gray-300 rounded-lg resize-none"
              />
            </div>

            {/* Attachment Button */}
            <div>
              <button className="flex items-center space-x-2 px-14 py-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <ImageIcon className="w-90 h-90 text-gray-500" />
              
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
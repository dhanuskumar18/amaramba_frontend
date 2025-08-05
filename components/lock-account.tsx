"use client"

import { useState } from "react"
import Image from "next/image"
import { AlertTriangle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function LockAccountComponent() {
  const [confirmations, setConfirmations] = useState({
    understand: false,
    acknowledge: false,
    contact: false,
  })

  const handleConfirmationChange = (key: keyof typeof confirmations, checked: boolean) => {
    setConfirmations((prev) => ({ ...prev, [key]: checked }))
  }

  const allConfirmed = Object.values(confirmations).every(Boolean)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Account Status Section */}
      <div className="bg-white rounded-lg p-6 h-fit">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Account Status</h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Image src="/profile-avatar.png" alt="Profile" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-medium text-gray-900">Jandaah</h3>
              <p className="text-sm text-gray-500">jandaah@gmail.com</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Account Type:</span>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Trading</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Last Login:</span>
              <span className="text-sm text-gray-900">Today, 2:20 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lock Trading Account Section */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-start space-x-3 mb-6">
          <div className="bg-orange-100 p-2 rounded-full">
            <Lock className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900">Lock Trading Account</h2>
            <p className="text-sm text-gray-500">Temporarily suspend all trading activities on your account</p>
          </div>
        </div>

        {/* Important Warning */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-yellow-800">
                <span className="font-medium">Important:</span> Locking your account will temporarily suspend all
                trading activities. You can unlock it anytime, but this action should only be used for security
                purposes.
              </p>
            </div>
          </div>
        </div>

        {/* What happens section */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">What happens when you lock your account:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start space-x-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>All buy and sell orders will be cancelled</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>No new trades can be executed</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>You can still view your portfolio and account details</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>Existing positions remain unchanged</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>You can unlock your account at any time</span>
            </li>
          </ul>
        </div>

        {/* Confirmation section */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">Please confirm you understand:</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="understand"
                checked={confirmations.understand}
                onCheckedChange={(checked) => handleConfirmationChange("understand", checked as boolean)}
              />
              <label htmlFor="understand" className="text-sm text-gray-600 leading-5">
                I understand that locking my account will suspend all trading activities immediately
              </label>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="acknowledge"
                checked={confirmations.acknowledge}
                onCheckedChange={(checked) => handleConfirmationChange("acknowledge", checked as boolean)}
              />
              <label htmlFor="acknowledge" className="text-sm text-gray-600 leading-5">
                I acknowledge that I will not be able to place new orders while the account is locked
              </label>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="contact"
                checked={confirmations.contact}
                onCheckedChange={(checked) => handleConfirmationChange("contact", checked as boolean)}
              />
              <label htmlFor="contact" className="text-sm text-gray-600 leading-5">
                I can contact support if I need assistance unlocking my account
              </label>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-3">
          <Button variant="outline" className="flex-1 bg-transparent">
            Cancel
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={!allConfirmed}>
            Continue to Lock Account
          </Button>
        </div>
      </div>
    </div>
  )
}

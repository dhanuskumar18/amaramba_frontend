import { Plus, Check, Wallet, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function BankAccountDetails() {
  return (
    <div className=" ">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-900">Bank Account Details</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Bank Accounts Section */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">Bank Accounts</h2>
                    <p className="text-sm text-gray-500">Manage Your Linked Bank Accounts</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Account
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Standard Bank Account */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Standard Bank</h3>
                    <p className="text-sm text-gray-500">••9866</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">1,234.56 MZN</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">Verified</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Bank Account Details */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Bank Account</h2>
                  <p className="text-sm text-gray-500">Primary Bank</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status</span>
                <span className="font-medium text-gray-900">Verified</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account</span>
                <span className="font-medium text-gray-900">Xxxxxxxxxx4562</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">IFSC Code</span>
                <span className="font-medium text-gray-900">WE4GGRYH66</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Branch Name</span>
                <span className="font-medium text-gray-900">Mozambique</span>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card>
            <CardHeader className="pb-4">
              <h2 className="font-semibold text-gray-900">Important Information</h2>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">Bank account verification may take 1-2 business days</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">You can add up to 3 bank accounts</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">Primary account is used for withdrawals by default</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">Account holder name must match your profile name</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

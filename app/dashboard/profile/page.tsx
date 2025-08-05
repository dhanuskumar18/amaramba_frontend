"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Edit2,
  Camera,
  AlertTriangle,
  Lock,
  User,
  TrendingUp,
  CreditCard,
  HelpCircle,
  Search,
  Compass,
  FileText,
  ClipboardList,
  LogOut,
  ArrowRight,
  Shield,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useMfaStatus, useDisableMfa, useSetupMfa, useVerifyMfaSetup, useLockAccount } from "@/hooks/useAuthApi"
import { useToast } from "@/hooks/use-toast"
import { OtpInput } from "@/components/ui/OtpInput"
import { decryptToken } from "@/utils/decryptToken"

export default function ProfileSettings() {
  const [activeSection, setActiveSection] = useState("Basic details")
  const [showMfaSetup, setShowMfaSetup] = useState(false)
  const [showDisableMfaModal, setShowDisableMfaModal] = useState(false)
  const [mfaStep, setMfaStep] = useState<"loading" | "setup" | "verify">("loading")
  const [qrCode, setQrCode] = useState<string>("")
  const [secret, setSecret] = useState<string>("")
  const [verificationCode, setVerificationCode] = useState<string>("")
  const [mfaError, setMfaError] = useState<string>("")
  const [showLockAccountModal, setShowLockAccountModal] = useState(false)
  const [lockAccountChecks, setLockAccountChecks] = useState({
    understand: false,
    acknowledge: false,
    contact: false
  })
  const [showLockAccountConfirmation, setShowLockAccountConfirmation] = useState(false)
  const [lockAccountConfirmation, setLockAccountConfirmation] = useState("")

  const { toast } = useToast()
  const { data: mfaStatusData, isLoading: isLoadingMfaStatus, refetch: refetchMfaStatus } = useMfaStatus()
  const disableMfaMutation = useDisableMfa()
  const setupMfaMutation = useSetupMfa()
  const verifyMfaSetupMutation = useVerifyMfaSetup()
  const lockAccountMutation = useLockAccount()

  const mfaStatus = mfaStatusData?.data
  const isMfaEnabled = mfaStatus?.mfaEnabled || false

  const menuItems = ["Basic details", "Change password", "Lock account", "Security", "Ticket", "Logout"]

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...")
    // You can redirect to login page or clear session
  }

  const handleToggleMfa = (enabled: boolean) => {
    if (enabled) {
      // Enable MFA - show setup modal
      setShowMfaSetup(true)
      setMfaStep("loading")
      // Initialize MFA setup
      setupMfaMutation.mutate(undefined, {
        onSuccess: (response) => {
          if (response.status === "success" && response.data) {
            setQrCode(response.data.qrCode)
            setSecret(response.data.secret)
            setMfaStep("setup")
          } else {
            setMfaError(response.message || "Failed to initialize MFA setup")
          }
        },
        onError: (err: any) => {
          setMfaError(err?.message || "Failed to initialize MFA setup")
        },
      })
    } else {
      // Disable MFA - show confirmation modal
      setShowDisableMfaModal(true)
    }
  }

  const handleDisableMfa = () => {
    disableMfaMutation.mutate(undefined, {
      onSuccess: (response) => {
        if (response.status === "success") {
          toast({
            title: "MFA Disabled",
            description: "Two-factor authentication has been disabled.",
          })
          refetchMfaStatus()
          setShowDisableMfaModal(false)
        } else {
          toast({
            title: "Error",
            description: response.message || "Failed to disable MFA",
          })
        }
      },
      onError: (err: any) => {
        toast({
          title: "Error",
          description: err?.message || "Failed to disable MFA",
        })
      },
    })
  }

  const handleVerifyMfaSetup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (verificationCode.length !== 6) return

    setMfaError("")
    verifyMfaSetupMutation.mutate(
      { token: verificationCode },
      {
        onSuccess: (response) => {
          if (response.status === "success" && response.data) {
            toast({
              title: "MFA Setup Complete",
              description: response.data.message || "Two-factor authentication has been successfully enabled.",
            })
            setShowMfaSetup(false)
            setVerificationCode("")
            setMfaError("")
            refetchMfaStatus()
          } else {
            setMfaError(response.message || "Invalid verification code")
          }
        },
        onError: (err: any) => {
          setMfaError(err?.message || "Invalid verification code")
        },
      },
    )
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied",
      description: "Text copied to clipboard",
    })
  }

  const handleLockAccountCheck = (checkName: keyof typeof lockAccountChecks) => {
    setLockAccountChecks(prev => ({
      ...prev,
      [checkName]: !prev[checkName]
    }))
  }

  const handleLockAccount = () => {
    // Check if all confirmations are checked
    if (!lockAccountChecks.understand || !lockAccountChecks.acknowledge || !lockAccountChecks.contact) {
      toast({
        title: "Error",
        description: "Please confirm all statements before locking your account.",
      })
      return
    }

    // Show confirmation dialog
    setShowLockAccountConfirmation(true)
  }

  const handleConfirmLockAccount = () => {
    console.log("handleConfirmLockAccount called")
    console.log("lockAccountConfirmation:", lockAccountConfirmation)
    
    // Check if user typed "delete"
    if (lockAccountConfirmation.toLowerCase() !== "delete") {
      console.log("Validation failed: user did not type 'delete'")
      toast({
        title: "Error",
        description: "Please type 'delete' to confirm locking your account.",
      })
      return
    }

    console.log("Validation passed: user typed 'delete'")

    // Get token from localStorage
    const token = localStorage.getItem('authToken')
    console.log("Token from localStorage:", token ? "Found" : "Not found")
    
    if (!token) {
      toast({
        title: "Error",
        description: "Authentication token not found. Please log in again.",
      })
      return
    }

    // Decode token to get user ID
    const user = decryptToken(token)
    console.log("Decoded user:", user)
    
    if (!user) {
      toast({
        title: "Error",
        description: "Invalid authentication token. Please log in again.",
      })
      return
    }

    console.log("User ID for API call:", user.id)

    // Call lock account API
    console.log("Calling lockAccountMutation.mutate with userId:", user.id)
    lockAccountMutation.mutate(
      { userId: user.id },
      {
        onSuccess: (response) => {
          console.log("Lock account API success:", response)
          if (response.status === "success") {
            toast({
              title: "Account Locked",
              description: response.data?.message || "Your trading account has been successfully locked.",
            })
            setShowLockAccountConfirmation(false)
            setLockAccountConfirmation("")
            setLockAccountChecks({
              understand: false,
              acknowledge: false,
              contact: false
            })
          } else {
            toast({
              title: "Error",
              description: response.message || "Failed to lock account",
            })
          }
        },
        onError: (err: any) => {
          console.log("Lock account API error:", err)
          toast({
            title: "Error",
            description: err?.message || "Failed to lock account",
          })
        },
      }
    )
  }

  return (
    <div className=" bg-gray-50 ">
  
      <div className="flex relative">
        {/* Left Sidebar */}
        <div className="w-64 p-4 ml-36 sticky top-[100px] h-fit">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-fit flex flex-col">
            {/* User Profile Section */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image src="/profile-avatar.png" alt="Profile" width={48} height={48} className="rounded-full" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Jandaah</h3>
                  <p className="text-sm text-gray-500">jandaah@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => item === "Logout" ? handleLogout() : setActiveSection(item)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                    activeSection === item ? "bg-blue-50 border-r-2 border-blue-500" : ""
                  } ${item === "Logout" ? "text-red-500 hover:text-red-600 hover:bg-red-50" : ""}`}
                >
                  <span className={`${activeSection === item ? "text-blue-600 font-medium" : item === "Logout" ? "text-red-500" : "text-gray-700"}`}>
                    {item}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 mr-36">
          <div className="max-w-6xl mx-auto">
            {activeSection === "Lock account" ? (
              <div className="grid grid-cols-2 gap-6">
                {/* Left: Account Status Section */}
                <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Image src="/profile-avatar.png" alt="Profile" width={48} height={48} className="rounded-full" />
                      <div>
                        <h3 className="font-medium text-gray-900">Jandaah</h3>
                        <p className="text-sm text-gray-500">jandaah@gmail.com</p>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Account Status:</span>
                        <span className="text-sm font-medium text-green-600">
                          Active
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Account Type:</span>
                        <span className="text-sm text-gray-900">
                          Trading
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Last Login:</span>
                        <span className="text-sm text-gray-900">Today, 2:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Lock Trading Account Section */}
                <div className="bg-white rounded-lg p-8 w-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Lock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-medium text-gray-900 mb-2">Lock Trading Account</h2>
                      <p className="text-sm text-gray-500">
                        Temporarily suspend all trading activities on your account
                      </p>
                    </div>
                  </div>

                  {/* Important Warning */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-yellow-800">
                          <span className="font-medium">Important:</span> Locking your account will temporarily suspend
                          all trading activities. You can unlock it anytime, but this action should only be used for
                          security purposes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What happens section */}
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-900 mb-3 text-sm">What happens when you lock your account:</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-3">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>All buy and sell orders will be cancelled</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>No new trades can be executed</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>You can still view your portfolio and account details</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Existing positions remain unchanged</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>You can unlock your account at any time</span>
                      </li>
                    </ul>
                  </div>

                  {/* Confirmation section */}
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-900 mb-3 text-sm">Please confirm you understand:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="understand" 
                          className="mt-0.5" 
                          checked={lockAccountChecks.understand}
                          onCheckedChange={() => handleLockAccountCheck('understand')}
                        />
                        <label htmlFor="understand" className="text-sm text-gray-600 leading-5">
                          I understand that locking my account will suspend all trading activities immediately
                        </label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="acknowledge" 
                          className="mt-0.5" 
                          checked={lockAccountChecks.acknowledge}
                          onCheckedChange={() => handleLockAccountCheck('acknowledge')}
                        />
                        <label htmlFor="acknowledge" className="text-sm text-gray-600 leading-5">
                          I acknowledge that I will not be able to place new orders while the account is locked
                        </label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="contact" 
                          className="mt-0.5" 
                          checked={lockAccountChecks.contact}
                          onCheckedChange={() => handleLockAccountCheck('contact')}
                        />
                        <label htmlFor="contact" className="text-sm text-gray-600 leading-5">
                          I can contact support if I need assistance unlocking my account
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      className="flex-1 text-sm py-3 bg-transparent" 
                      size="sm"
                      onClick={() => {
                        setLockAccountChecks({
                          understand: false,
                          acknowledge: false,
                          contact: false
                        })
                      }}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm py-3" 
                      size="sm"
                      disabled={lockAccountMutation.isPending || !lockAccountChecks.understand || !lockAccountChecks.acknowledge || !lockAccountChecks.contact}
                      onClick={handleLockAccount}
                    >
                      {lockAccountMutation.isPending ? "Locking..." : "Continue to Lock Account"}
                    </Button>
                  </div>
                </div>
              </div>
            ) : activeSection === "Security" ? (
              <div className="max-w-2xl">
                <div className="bg-white rounded-lg p-6">
                  <div className="space-y-8">
                    {/* Two-Factor Authentication */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1 mr-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Add an extra layer of security to your account with two-factor authentication. When enabled, 
                          you'll need to enter a code from your authenticator app in addition to your password when signing in.
                        </p>
                        {isLoadingMfaStatus ? (
                          <div className="mt-3 flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                            <span className="text-sm text-gray-500">Loading status...</span>
                          </div>
                        ) : (
                          <div className="mt-3 flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${isMfaEnabled ? "bg-green-500" : "bg-gray-400"}`}></div>
                            <span className="text-sm text-gray-600">
                              Status: {isMfaEnabled ? "Enabled" : "Disabled"}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={isMfaEnabled}
                            onChange={(e) => handleToggleMfa(e.target.checked)}
                            disabled={isLoadingMfaStatus || disableMfaMutation.isPending}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                      </div>
                    </div>

                    {isMfaEnabled && (
                      <>
                        <div className="border-t pt-6">
                          <div className="space-y-3">
                            <h4 className="font-medium text-sm text-gray-900">Additional Options</h4>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Backup Codes</span>
                              <span className="text-sm">
                                {mfaStatus?.hasBackupCodes ? "Available" : "Not available"}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500">
                              If you lose access to your authenticator app, you can use backup codes to sign in.
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-2 text-gray-900">
                        About Two-Factor Authentication
                      </h4>
                      <p className="text-xs text-gray-600">
                        When enabled, you'll need to enter a code from your authenticator app (like Google Authenticator, 
                        Authy, or Microsoft Authenticator) in addition to your password when signing in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeSection === "Change password" ? (
              <div className="max-w-md">
                <div className="bg-white rounded-lg p-6">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="newPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                        Enter New Password
                      </Label>
                      <Input id="newPassword" type="password" placeholder="••••••••" className="w-full" />
                    </div>

                    <div>
                      <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                        Enter Confirm Password
                      </Label>
                      <Input id="confirmPassword" type="password" placeholder="••••••••" className="w-full" />
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Update Password</Button>
                  </div>
                </div>
              </div>
                        ) : activeSection === "Ticket" ? (
              <div className="max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-2xl font-medium text-gray-900">Stuck somewhere?</h1>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    My tickets
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search for your issue"
                    className="pl-10 py-3 w-full border-gray-300 rounded-lg"
                  />
                </div>

                {/* Category Cards */}
                <div className="grid grid-cols-2 gap-6">
                  {/* My Account */}
                  <Link href="/dashboard/profile/myaccount">
                    <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <User className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">My Account</h3>
                          <p className="text-sm text-gray-500">Buy / Sell</p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Stocks */}
                  <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Stocks</h3>
                        <p className="text-sm text-gray-500">Orders / Holdings</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment & withdraw */}
                  <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <CreditCard className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Payment & withdraw</h3>
                        <p className="text-sm text-gray-500">Withdraw / Deposit</p>
                      </div>
                    </div>
                  </div>

                  {/* Most visited FAQs */}
                  <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <HelpCircle className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Most visited FAQs</h3>
                        <p className="text-sm text-gray-500">Others / Holdings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeSection === "Basic details" ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Picture Section */}
                <div className="bg-white rounded-lg p-6 h-fit lg:col-span-1">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Profile Picture</h2>

                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <Image
                        src="/profile-avatar.png"
                        alt="Profile"
                        width={120}
                        height={120}
                        className="rounded-full"
                      />
                      <button className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2">
                        <Camera className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 mb-2">Upload & New Profile Picture</p>
                    <p className="text-xs text-gray-400 mb-4">JPG, PNG Up To 8MB</p>

                    <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm">Change picture</Button>
                  </div>
                </div>

                {/* Personal Information Section */}
                <div className="bg-white rounded-lg p-6 lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                      <Edit2 className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name
                        </Label>
                        <Input id="firstName" value="Jandaah" readOnly className="mt-1 bg-gray-50" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name
                        </Label>
                        <Input id="lastName" value="mohamed" readOnly className="mt-1 bg-gray-50" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <Input id="email" value="jandaah@gmail.com" readOnly className="mt-1 bg-gray-50" />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input id="phone" value="+258 84 123 4567" readOnly className="mt-1 bg-gray-50" />
                    </div>

                    <div>
                      <Label htmlFor="dob" className="text-sm font-medium text-gray-700">
                        Date of Birth
                      </Label>
                      <Input id="dob" value="15-06-2990" readOnly className="mt-1 bg-gray-50" />
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                        Address
                      </Label>
                      <Input id="address" value="Maputo, Mozambique" readOnly className="mt-1 bg-gray-50" />
                    </div>

                    <div>
                      <Label htmlFor="occupation" className="text-sm font-medium text-gray-700">
                        Occupation
                      </Label>
                      <Input id="occupation" value="Software Engineer" readOnly className="mt-1 bg-gray-50" />
                    </div>

                    <div>
                      <Label htmlFor="nationalId" className="text-sm font-medium text-gray-700">
                        National ID
                      </Label>
                      <Input id="nationalId" value="National card" readOnly className="mt-1 bg-gray-50" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">{activeSection}</h2>
                <p className="text-gray-500">This section is under development.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MFA Setup Modal */}
      {showMfaSetup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            {mfaStep === "loading" ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Setting up MFA...</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Set Up Two-Factor Authentication</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Scan the QR code with your authenticator app or enter the setup key manually
                  </p>
                </div>

                {/* QR Code */}
                <div className="text-center mb-6">
                  <div className="bg-white p-4 rounded-lg border inline-block">
                    <img alt="MFA QR Code" className="w-48 h-48 mx-auto" src={qrCode} />
                  </div>
                </div>

                {/* Setup Key */}
                <div className="space-y-2 mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Setup Key (Manual Entry)
                  </label>
                  <div className="flex items-center space-x-2">
                    <Input
                      readOnly
                      className="flex-1 font-mono text-sm"
                      value={secret}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(secret)}
                    >
                      Copy
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Enter this key in your authenticator app if you can't scan the QR code
                  </p>
                </div>

                <div className="border-t pt-6">
                  {/* Verification */}
                  <form className="space-y-4" onSubmit={handleVerifyMfaSetup}>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Verification Code
                      </label>
                      <OtpInput
                        disabled={verifyMfaSetupMutation.isPending}
                        error={!!mfaError}
                        errorMessage={mfaError}
                        value={verificationCode}
                        onChange={setVerificationCode}
                      />
                      <p className="text-xs text-gray-500">
                        Enter the 6-digit code from your authenticator app
                      </p>
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        disabled={verifyMfaSetupMutation.isPending}
                        onClick={() => {
                          setShowMfaSetup(false)
                          setVerificationCode("")
                          setMfaError("")
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        disabled={
                          verificationCode.length !== 6 ||
                          verifyMfaSetupMutation.isPending
                        }
                      >
                        {verifyMfaSetupMutation.isPending ? "Verifying..." : "Verify & Enable"}
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}

             {/* Disable MFA Confirmation Modal */}
       {showDisableMfaModal && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
           <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
             <div className="text-center mb-6">
               <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
                 <AlertTriangle className="w-6 h-6 text-red-600" />
               </div>
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Disable Two-Factor Authentication</h3>
               <p className="text-sm text-gray-600">
                 Are you sure you want to disable two-factor authentication? This will make your account less secure.
               </p>
             </div>

             <div className="flex space-x-3">
               <Button
                 variant="outline"
                 className="flex-1"
                 disabled={disableMfaMutation.isPending}
                 onClick={() => setShowDisableMfaModal(false)}
               >
                 Cancel
               </Button>
               <Button
                 className="flex-1 bg-red-600 hover:bg-red-700"
                 disabled={disableMfaMutation.isPending}
                 onClick={handleDisableMfa}
               >
                 {disableMfaMutation.isPending ? "Disabling..." : "Disable MFA"}
               </Button>
             </div>
           </div>
         </div>
               )}

       {/* Lock Account Confirmation Dialog */}
       {showLockAccountConfirmation && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
           <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
             <div className="text-center mb-6">
               <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
                 <AlertTriangle className="w-6 h-6 text-red-600" />
               </div>
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Confirmation</h3>
               <p className="text-sm text-gray-600">
                 This action will lock your trading account and suspend all trading activities. 
                 This action cannot be undone immediately.
               </p>
             </div>

             <div className="space-y-4">
               <div>
                 <Label htmlFor="lockConfirmation" className="text-sm font-medium text-gray-700">
                   Type "delete" to confirm
                 </Label>
                 <Input
                   id="lockConfirmation"
                   type="text"
                   placeholder="Type 'delete' to confirm"
                   value={lockAccountConfirmation}
                   onChange={(e) => setLockAccountConfirmation(e.target.value)}
                   className="mt-1"
                 />
                 <p className="text-xs text-gray-500 mt-1">
                   This action will lock your account and cancel all pending orders.
                 </p>
               </div>

               <div className="flex space-x-3">
                 <Button
                   variant="outline"
                   className="flex-1"
                   disabled={lockAccountMutation.isPending}
                   onClick={() => {
                     setShowLockAccountConfirmation(false)
                     setLockAccountConfirmation("")
                   }}
                 >
                   Cancel
                 </Button>
                 <Button
                   className="flex-1 bg-red-600 hover:bg-red-700"
                   disabled={lockAccountMutation.isPending || lockAccountConfirmation.toLowerCase() !== "delete"}
                   onClick={() => {
                     console.log("Lock Account button clicked")
                     console.log("Button disabled state:", lockAccountMutation.isPending || lockAccountConfirmation.toLowerCase() !== "delete")
                     handleConfirmLockAccount()
                   }}
                 >
                   {lockAccountMutation.isPending ? "Locking..." : "Lock Account"}
                 </Button>
               </div>
             </div>
           </div>
         </div>
       )}
     </div>
   )
 }

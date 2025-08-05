"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Bell, Moon, Sun, Compass, Briefcase, FileText, Eye, User, Settings, LogOut, ChevronDown, ChevronRight, Wallet, Building2, HelpCircle, CheckCircle2, XCircle } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

interface NotificationItemProps {
  title: string
  description: string
  time: string
  status: 'executed' | 'rejected'
}

const NotificationItem: React.FC<NotificationItemProps> = ({ title, description, time, status }) => {
  return (
    <div className="flex items-start gap-3 p-4 hover:bg-gray-50 border-b last:border-b-0 transition-colors">
      <div className={`mt-1 ${status === 'executed' ? 'text-green-500' : 'text-red-500'}`}>
        {status === 'executed' ? (
          <CheckCircle2 className="h-5 w-5" />
        ) : (
          <XCircle className="h-5 w-5" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-sm text-gray-900">{title}</h5>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('Explore')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const navigationTabs = [
    { 
      name: 'Explore', 
      icon: Compass, 
      href: '/dashboard'
    },
    { 
      name: 'Holdings', 
      icon: Briefcase, 
      href: '/dashboard/holdings'
    },
    { 
      name: 'Orders', 
      icon: FileText, 
      href: '/dashboard/orders'
    },
    { 
      name: 'Watchlist', 
      icon: Eye, 
      href: '/dashboard/watchlist'
    }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="relative">
      {/* Clean Glass Effect Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="w-[85%] mx-auto px-6">
          <div className="flex items-center h-[9rem]">
            
            <div className='flex flex-col items-start justify-between w-full space-y-[40px]'>
              {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/dashboard" className="flex items-center space-x-3">
                <Image
                  src="/images/amaramba_logo.png"
                  alt="Amaramba"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <div>
                  <h1 className="text-base font-bold text-gray-900 leading-tight">AMARAMBA</h1>
                  <p className="text-xs text-gray-500 leading-tight">CAPITAL DEALER</p>
                </div>
              </Link>
            </div>

            {/* Navigation Tabs - Center Left */}
            <div className="flex items-center  space-x-8">
              {navigationTabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    onClick={() => setActiveTab(tab.name)}
                    className="flex items-center space-x-2 group"
                  >
                    <div className={`p-1.5 rounded-full ${
                      activeTab === tab.name 
                        ? 'bg-blue-500' 
                        : 'bg-gray-400'
                    }`}>
                      <IconComponent className="h-3 w-3 text-white" />
                    </div>
                    <span className={`text-sm font-medium ${
                      activeTab === tab.name 
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}>
                      {tab.name}
                    </span>
                  </Link>
                )
              })}
            </div>
            </div>

            {/* Right Side - Search and Controls */}
            <div className="flex items-center ml-auto space-x-4">
              
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-[20rem] pl-10 pr-4 py-2 bg-gray-200 border border-gray-200 rounded-2xl text-sm focus:bg-white outline-0 transition-all"
                />
              </div>

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full h-8 w-8"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[380px] mt-3 p-0">
                  <div className="flex items-center justify-between p-4 border-b bg-blue-400 text-white">
                    <h4 className="font-semibold">Notification</h4>
                    <Link href="/dashboard/notification" className="text-xs text-white hover:text-white">
                      See More
                    </Link>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto">
                    <NotificationItem
                      title="Order Executed"
                      description="Zero Investimentos Delivery Buy Order For 6 Shares At R$ 0.86 Has Been Executed On BSE"
                      time="1 Hour Ago"
                      status="executed"
                    />
                    <NotificationItem
                      title="Order Rejected"
                      description="Zero Investimentos Delivery Buy Order For 6 Shares At R$ 0.86 Has Been Executed On BSE"
                      time="2 Hours Ago"
                      status="rejected"
                    />
                    <NotificationItem
                      title="Order Executed"
                      description="Zero Investimentos Delivery Buy Order For 6 Shares At R$ 0.86 Has Been Executed On BSE"
                      time="5 Hours Ago"
                      status="executed"
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Profile Avatar with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div 
                  className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={handleAvatarClick}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/images/user1.svg" alt="Profile" />
                    <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">

                    {/* Menu Items */}
                    <div className="py-4 px-4">
                      {/* Profile Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-base font-medium">Jandaah</h3>
                          <p className="text-sm text-gray-500">Jandaah@Gmail.Com</p>
                        </div>
                        <Link 
                          href="/dashboard/profile"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Settings className="h-5 w-5 text-gray-400" />
                        </Link>
                      </div>

                      {/* Balance */}
                      <Link 
                        href="/dashboard/profile/stock" 
                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="flex items-center">
                          <Wallet className="h-5 w-5 mr-3 text-gray-500" />
                          <div>
                            <div className="font-medium">89.MZN</div>
                            <div className="text-xs text-gray-500">Stocks Balance</div>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </Link>

                      {/* Menu Items */}
                      <div className="mt-2 space-y-1">
                        <Link 
                          href="/dashboard/orders/all" 
                          className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 mr-3 text-gray-500" />
                            <span>All Order</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </Link>

                        <Link 
                          href="/dashboard/profile/bank" 
                          className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center">
                            <Building2 className="h-5 w-5 mr-3 text-gray-500" />
                            <span>Bank Details</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </Link>

                        <Link 
                          href="/dashboard/profile?tab=tickets" 
                          className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="flex items-center">
                            <HelpCircle className="h-5 w-5 mr-3 text-gray-500" />
                            <span>Help</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </Link>
                      </div>

                      {/* Logout Button */}
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          // Add your logout logic here
                        }}
                        className="w-full mt-4 px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full h-8 w-8"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>

          </div>

        </div>
      </nav>

      {/* Navbar Spacer */}
      <div className="h-16"></div>
    </div>
  )
}

export default Navbar
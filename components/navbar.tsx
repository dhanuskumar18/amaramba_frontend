import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu as HeroUIDropdownMenu,
  DropdownItem,
  Avatar,
  User,
  Accordion,
  AccordionItem,
} from "@heroui/react";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeConfig } from "@/config/theme";
import { SimpleLayoutTypeType } from "@/config/constants";
import { navItems } from "@/config/nav";
import { ThemeSwitch } from "@/components/theme-switch";
import { useAuth } from "@/context/AuthContext";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  ChevronIcon,
} from "@/components/icons";
import { Bell, Building2, CheckCircle2, ChevronDown, ChevronRight, FileText, HelpCircle, LogOut, Settings, Wallet, XCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
  status: 'executed' | 'rejected';
}

interface NavbarProps {
  theme: ThemeConfig;
  variant: SimpleLayoutTypeType;
}

export const Navbar = ({ theme, variant }: NavbarProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [isMac, setIsMac] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();
  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
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
  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes("mac"));

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMac]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      // Redirect to home page after logout
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const searchInput = (
    <Input
      ref={searchInputRef}
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <div className="flex gap-1 items-center">
          <Kbd
            className="hidden lg:inline-block"
            keys={[isMac ? "command" : "ctrl"]}
          >
            K
          </Kbd>
        </div>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      value={searchValue}
      onValueChange={handleSearch}
    />
  );

  const renderNavItem = (item: any) => {
    const isActive = pathname === item.href;

    if (item.children) {
      const hasActiveChild = item.children.some(
        (child: any) => pathname === child.href
      );

      return (
        <Dropdown key={item.href}>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={clsx(
                  "p-0 bg-transparent data-[hover=true]:bg-transparent text-sm gap-1 flex items-center",
                  (isActive || hasActiveChild) && "text-primary"
                )}
                endContent={
                  <ChevronIcon
                    className={clsx(
                      "text-small rotate-90",
                      (isActive || hasActiveChild) && "text-primary"
                    )}
                  />
                }
                radius="sm"
                variant="light"
              >
                {item.icon && (
                  <span
                    className={clsx(
                      "text-xl",
                      (isActive || hasActiveChild) && "text-primary"
                    )}
                  >
                    {item.icon}
                  </span>
                )}
                {item.label}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <HeroUIDropdownMenu
            aria-label={`${item.label} options`}
            className="w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {item.children.map((child: any) => (
              <DropdownItem key={child.href}>
                <NextLink
                  className={clsx(
                    linkStyles({
                      color: pathname === child.href ? "primary" : "foreground",
                    }),
                    "w-full"
                  )}
                  href={child.href}
                >
                  {child.label}
                </NextLink>
              </DropdownItem>
            ))}
          </HeroUIDropdownMenu>
        </Dropdown>
      );
    }

    return (
      <NavbarItem key={item.href}>
        <NextLink
          className={clsx(
            linkStyles({ color: isActive ? "primary" : "foreground" }),
            "data-[active=true]:font-medium text-sm pt-0.5 flex items-center gap-1"
          )}
          color={isActive ? "primary" : "foreground"}
          href={item.href}
        >
          {item.icon && (
            <span className={clsx("text-xl", isActive && "text-primary")}>
              {item.icon}
            </span>
          )}
          <span className="p-2">{item.label}</span>
        </NextLink>
      </NavbarItem>
    );
  };

  return (
    <>
      <div className="w-full sticky top-0 z-50 bg-background/60 backdrop-blur-md border-b border-default-200">
        {/* First row - Logo, Search, Profile */}
        <div className="h-16 flex items-center justify-between px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
            </NextLink>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <ThemeSwitch />
            {isAuthenticated && (
              <div className="hidden lg:block">{searchInput}</div>
            )}
            {isAuthenticated ? (
              <>
                {/* Notifications */}
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
                          handleLogout();
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
              </>
            ) : (
              <Button
                as={NextLink}
                href="/auth/login"
                color="primary"
                variant="flat"
                size="sm"
              >
                Sign In
              </Button>
            )}
          </div>

          <div className="sm:hidden flex items-center gap-2">
            <ThemeSwitch />
            {isAuthenticated ? (
              <>
                {/* Mobile Notifications */}
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Button
                      isIconOnly
                      variant="light"
                      size="sm"
                      className="relative text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
                    >
                      <Bell className="h-4 w-4" />
                      <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                    </Button>
                  </DropdownTrigger>
                  <HeroUIDropdownMenu aria-label="Notifications" className="w-[320px] p-0">
                    <DropdownItem key="header" className="h-auto p-0">
                      <div className="flex items-center justify-between p-4 border-b bg-blue-400 text-white">
                        <h4 className="font-semibold">Notification</h4>
                        <Link href="/dashboard/notification" className="text-xs text-white hover:text-white">
                          See More
                        </Link>
                      </div>
                    </DropdownItem>
                    <DropdownItem key="notifications" className="h-auto p-0">
                      <div className="max-h-[300px] overflow-y-auto">
                        <div className="flex items-start gap-3 p-4 hover:bg-gray-50 border-b last:border-b-0 transition-colors">
                          <div className="mt-1 text-green-500">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h5 className="font-medium text-sm text-gray-900">Order Executed</h5>
                              <span className="text-xs text-gray-500">1 Hour Ago</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">Zero Investimentos Delivery Buy Order For 6 Shares At R$ 0.86 Has Been Executed On BSE</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 hover:bg-gray-50 border-b last:border-b-0 transition-colors">
                          <div className="mt-1 text-red-500">
                            <XCircle className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h5 className="font-medium text-sm text-gray-900">Order Rejected</h5>
                              <span className="text-xs text-gray-500">2 Hours Ago</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">Zero Investimentos Delivery Buy Order For 6 Shares At R$ 0.86 Has Been Rejected On BSE</p>
                          </div>
                        </div>
                      </div>
                    </DropdownItem>
                  </HeroUIDropdownMenu>
                </Dropdown>
                
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
                          handleLogout();
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
              </>
            ) : (
              <Button
                as={NextLink}
                href="/auth/login"
                color="primary"
                variant="flat"
                size="sm"
              >
                Sign In
              </Button>
            )}
            {isAuthenticated && (
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-all duration-300"
              >
                <span className="sr-only">Menu</span>
                <motion.div
                  className="relative w-6 h-6 flex items-center justify-center"
                  animate={isMenuOpen ? "open" : "closed"}
                >
                  <motion.span
                    className="absolute w-6 h-0.5 bg-current origin-center"
                    variants={{
                      closed: { rotate: 0, y: -6 },
                      open: { rotate: 45, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-current origin-center"
                    variants={{
                      closed: { opacity: 1, y: 0 },
                      open: { opacity: 0, y: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-current origin-center"
                    variants={{
                      closed: { rotate: 0, y: 6 },
                      open: { rotate: -45, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.div>
              </Button>
            )}
          </div>
        </div>

        {/* Second row for navigation items - Only show when authenticated */}
        {isAuthenticated && (
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop navigation */}
            <div className="hidden sm:flex gap-6 py-3 overflow-x-auto">
              {navItems.map((item) => {
                if (!item.href) return null;

                const isActive = pathname === item.href;

                return (
                  <NextLink
                    key={item.href}
                    className={clsx(
                      linkStyles({
                        color: isActive ? "primary" : "foreground",
                      }),
                      "data-[active=true]:font-medium text-sm pt-0.5 flex items-center gap-1"
                    )}
                    color={isActive ? "primary" : "foreground"}
                    href={item.href}
                  >
                    {item.icon && (
                      <span
                        className={clsx("text-xl", isActive && "text-primary")}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className="p-2">{item.label}</span>
                  </NextLink>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Mobile navigation menu - Only show when authenticated */}
      <AnimatePresence mode="wait">
        {isMenuOpen && isAuthenticated && (
          <motion.div
            className="sm:hidden fixed inset-0 top-16 bg-background/60 backdrop-blur-xl z-[9999] overflow-y-auto"
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0.0, 0.2, 1],
              staggerChildren: 0.1,
            }}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">{searchInput}</div>
              </div>

              {/* Authentication section for mobile */}
              <motion.div
                className="mb-6 p-4 bg-default-50 rounded-xl border border-default-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <Avatar
                    src={
                      user?.profile?.picture ||
                      "https://api.dicebear.com/7.x/avatars/svg?seed=shadon"
                    }
                    alt={user?.profile?.firstName || "User"}
                    size="md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">
                      {user?.email || "User"}
                    </p>
                    <p className="text-xs text-default-500">Signed in</p>
                  </div>
                  <Button
                    size="sm"
                    color="danger"
                    variant="light"
                    onClick={handleLogout}
                    isLoading={isLoggingOut}
                    isDisabled={isLoggingOut}
                  >
                    {isLoggingOut ? "Logging out..." : "Logout"}
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col gap-2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {
                    opacity: 0,
                    transition: {
                      staggerChildren: 0.1,
                      staggerDirection: -1,
                    },
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {navItems.map((item) => {
                  if (!item.href) return null;

                  const isActive = pathname === item.href;

                  return (
                    <motion.div
                      key={item.href}
                      className="w-full bg-background p-2 rounded-xl border-1 border-foreground-100 shadow-lg"
                      variants={{
                        hidden: { opacity: 0, x: -30, scale: 0.95 },
                        visible: { opacity: 1, x: 0, scale: 1 },
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0.0, 0.2, 1],
                      }}
                    >
                      <div
                        className={clsx(
                          "flex items-center gap-2 p-3 text-sm rounded-lg transition-colors cursor-pointer",
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:bg-default-100"
                        )}
                      >
                        {item.icon && (
                          <span
                            className={clsx(
                              "text-xl",
                              isActive && "text-primary"
                            )}
                          >
                            {item.icon}
                          </span>
                        )}
                        <NextLink
                          className="flex-1"
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </NextLink>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

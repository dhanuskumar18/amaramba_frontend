"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeConfig } from "@/config/theme";
import { SimpleLayoutType } from "@/config/constants";
import { getNavItemsBySection, NavItem } from "@/config/nav";
import { Logo, LogoutIcon, ChevronIcon } from "@/components/icons";
import { useAuth } from "@/context/AuthContext";

interface SidebarProps {
  theme: ThemeConfig;
  variant: (typeof SimpleLayoutType)[keyof typeof SimpleLayoutType];
  isCollapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

export function Sidebar({
  theme,
  variant,
  isCollapsed,
  onCollapsedChange,
}: SidebarProps) {
  const navSections = getNavItemsBySection();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, bottom: 0 });
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();
  const popupRef = useRef<HTMLDivElement>(null);
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();
  const leaveTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      // Redirect to home page after logout
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const toggleSubmenu = (itemHref: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemHref)
        ? prev.filter((href) => href !== itemHref)
        : [...prev, itemHref],
    );
  };

  const handleMouseEnter = (e: React.MouseEvent, href: string | undefined) => {
    if (isCollapsed && href) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }

      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      setPopupPosition({ top: rect.top, bottom: rect.bottom });
      setHoveredItem(href);
    }
  };

  const handleMouseLeave = () => {
    if (isCollapsed) {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }

      leaveTimeoutRef.current = setTimeout(() => {
        if (!isPopupHovered) {
          setHoveredItem(null);
        }
      }, 100);
    }
  };

  const handlePopupMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    setIsPopupHovered(true);
  };

  const handlePopupMouseLeave = () => {
    setIsPopupHovered(false);
    setHoveredItem(null);
  };

  const menuAnimation = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
    transition: { duration: 0.2 },
  };

  const renderPopupMenu = (item: NavItem) => {
    if (!isCollapsed || !hoveredItem || hoveredItem !== item.href) return null;

    return (
      <AnimatePresence>
        <motion.div
          ref={popupRef}
          animate={menuAnimation.animate}
          aria-label={`${item.label} submenu`}
          className="
            absolute bg-background rounded-lg shadow-lg border border-default-200 
            min-w-[200px] z-[99999] py-2
          "
          exit={menuAnimation.exit}
          initial={menuAnimation.initial}
          role="menu"
          style={{
            position: "fixed",
            top: popupPosition.top,
            left: "60px",
            pointerEvents: "auto",
          }}
          transition={menuAnimation.transition}
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
        >
          <div className="px-4 py-2 font-medium text-sm text-default-600 border-b border-default-100">
            {item.label}
          </div>
          <ul className="mt-1" role="menu">
            {item.children?.map((child: NavItem) => (
              <li key={child.href} role="none">
                <Link
                  className={clsx(
                    `
                    flex items-center px-4 py-2 text-sm
                    hover:bg-default-100
                    hover:text-default-900`,
                    pathname === child.href
                      ? "text-primary"
                      : "text-default-600",
                  )}
                  href={child.href}
                  role="menuitem"
                >
                  {child.icon && (
                    <span
                      className={clsx(
                        "text-xl flex items-center justify-center",
                        pathname === child.href
                          ? "text-primary"
                          : "text-inherit",
                      )}
                    >
                      {child.icon}
                    </span>
                  )}
                  <span className={child.icon ? "ml-3" : ""}>
                    {child.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    );
  };

  const renderNavItem = (item: NavItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = item.href ? expandedItems.includes(item.href) : false;
    const isActive = pathname === item.href;
    const hasActiveChild = item.children?.some(
      (child) => pathname === child.href,
    );
    const isHovered = hoveredItem === item.href;

    return (
      <li key={item.href} className="relative group">
        <div
          className="relative"
          onMouseEnter={(e) => handleMouseEnter(e, item.href)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            aria-expanded={hasChildren ? isExpanded : undefined}
            aria-haspopup={hasChildren ? "true" : undefined}
            className={clsx(
              `
              flex items-center px-4 py-2 text-sm
              hover:bg-default-100 rounded-lg
              hover:text-default-900
              ${isCollapsed ? "justify-center" : "justify-start"}
              ${hasChildren ? "pr-10" : ""}`,
              isActive || hasActiveChild ? "text-primary" : "text-default-600",
            )}
            href={item.href}
            role={hasChildren ? "button" : undefined}
            onClick={
              hasChildren
                ? (e) => {
                    e.preventDefault();
                    if (!isCollapsed && item.href) toggleSubmenu(item.href);
                  }
                : undefined
            }
          >
            <span
              className={clsx(
                "text-xl flex items-center justify-center",
                isActive || hasActiveChild ? "text-primary" : "text-inherit",
              )}
            >
              {item.icon}
            </span>
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
            {isCollapsed && <span className="sr-only">{item.label}</span>}
          </Link>
          {!isCollapsed && hasChildren && (
            <button
              aria-label={isExpanded ? "Collapse submenu" : "Expand submenu"}
              className={clsx(
                `
                absolute right-2 top-1/2 -translate-y-1/2
                p-1 rounded-lg hover:bg-default-100
                transition-transform duration-200`,
                isExpanded ? "rotate-90" : "",
                hasActiveChild ? "text-primary" : "text-default-500",
              )}
              onClick={() => item.href && toggleSubmenu(item.href)}
            >
              <ChevronIcon />
            </button>
          )}
        </div>

        {/* Render popup menu for collapsed state */}
        {renderPopupMenu(item)}

        {/* Regular submenu for expanded state */}
        {!isCollapsed && hasChildren && isExpanded && (
          <ul
            className="ml-9 mt-1 space-y-1 border-l border-default-100"
            role="menu"
          >
            {item.children?.map((child: NavItem) => (
              <li key={child.href} role="none">
                <Link
                  className={clsx(
                    `
                    flex items-center px-4 py-2 text-sm
                    hover:bg-default-100 rounded-lg
                    hover:text-default-900`,
                    pathname === child.href
                      ? "text-primary"
                      : "text-default-600",
                  )}
                  href={child.href}
                  role="menuitem"
                >
                  {child.icon && (
                    <span
                      className={clsx(
                        "text-xl flex items-center justify-center",
                        pathname === child.href
                          ? "text-primary"
                          : "text-default-600",
                      )}
                    >
                      {child.icon}
                    </span>
                  )}
                  <span className={child.icon ? "ml-3" : ""}>
                    {child.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside
      aria-label="Main navigation"
      className={`
        fixed top-0 left-0 h-screen bg-background text-default-foreground
        transition-all duration-300 ease-in-out flex flex-col
        border-r border-default-200
        ${isCollapsed ? "w-[60px]" : "w-[260px]"}
        ${theme.themeDirection === "rtl" ? "left-auto right-0" : "left-0"}
      `}
      role="navigation"
    >
      {/* Header with Logo */}
      <div className="h-16 flex items-center px-4 border-b border-default-200">
        <div className="flex items-center flex-1">
          <Logo />
          {!isCollapsed && (
            <span className="ml-2 font-semibold text-xl">Acme Inc</span>
          )}
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto">
        {Array.from(navSections.entries()).map(([sectionTitle, items]) => (
          <div key={sectionTitle} className="py-4">
            {!isCollapsed && (
              <h2 className="px-4 text-xs font-semibold text-default-500 uppercase tracking-wider">
                {sectionTitle}
              </h2>
            )}
            <nav aria-label={sectionTitle} className="mt-2">
              <ul className="space-y-1" role="menu">
                {items.map(renderNavItem)}
              </ul>
            </nav>
          </div>
        ))}
      </div>

      {/* User Profile */}
      {isAuthenticated && (
        <div
          className={`
            relative p-4 border-t border-default-200
            ${isCollapsed ? "text-center" : ""}
          `}
          onMouseEnter={(e) => handleMouseEnter(e, "profile")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`
            flex items-center gap-3
            ${isCollapsed ? "justify-center" : "justify-between"}
          `}
          >
            <div className="flex items-center min-w-0 gap-3 flex-1">
              <img
                alt={user?.profile?.firstName || "User"}
                className="w-8 h-8 rounded-full bg-default-100 flex-shrink-0"
                src={
                  user?.profile?.picture ||
                  "https://api.dicebear.com/7.x/avatars/svg?seed=shadon"
                }
              />
              {!isCollapsed && (
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-default-900 truncate">
                    {user?.profile?.firstName
                      ? `${user.profile.firstName} ${user.profile.lastName || ""}`
                      : "User"}
                  </p>
                  <p className="text-xs text-default-500 truncate">
                    {user?.email || "user@example.com"}
                  </p>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <Button
                isIconOnly
                aria-label="Sign out"
                className="text-default-500 hover:text-danger flex-shrink-0"
                isDisabled={isLoggingOut}
                isLoading={isLoggingOut}
                size="sm"
                variant="light"
                onClick={handleLogout}
              >
                <LogoutIcon className="text-lg" />
              </Button>
            )}
          </div>

          {/* Profile Popup for Collapsed State */}
          <AnimatePresence>
            {isCollapsed && hoveredItem === "profile" && (
              <motion.div
                ref={popupRef}
                animate={menuAnimation.animate}
                aria-label="User profile menu"
                className="
                  bg-background rounded-lg shadow-lg border border-default-200 
                  min-w-[240px] z-[99999] p-4
                "
                exit={menuAnimation.exit}
                initial={menuAnimation.initial}
                role="dialog"
                style={{
                  position: "fixed",
                  top: popupPosition.top,
                  left: "60px",
                  pointerEvents: "auto",
                  transform: "translateY(-80%)",
                }}
                transition={menuAnimation.transition}
                onMouseEnter={handlePopupMouseEnter}
                onMouseLeave={handlePopupMouseLeave}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      alt={user?.profile?.firstName || "User"}
                      className="w-10 h-10 rounded-full bg-default-100 flex-shrink-0"
                      src={
                        user?.profile?.picture ||
                        "https://api.dicebear.com/7.x/avatars/svg?seed=shadon"
                      }
                    />
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-sm font-medium text-default-900 truncate">
                        {user?.profile?.firstName
                          ? `${user.profile.firstName} ${user.profile.lastName || ""}`
                          : "User"}
                      </p>
                      <p className="text-xs text-default-500 truncate">
                        {user?.email || "user@example.com"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 pt-2 border-t border-default-100">
                    <Button
                      as={Link}
                      className="w-full justify-start text-default-600 hover:text-default-900"
                      href="/settings/profile"
                      variant="light"
                    >
                      View Profile
                    </Button>
                    <Button
                      as={Link}
                      className="w-full justify-start text-default-600 hover:text-default-900"
                      href="/settings"
                      variant="light"
                    >
                      Settings
                    </Button>
                    <Button
                      className="w-full justify-start text-default-500 hover:text-danger"
                      isDisabled={isLoggingOut}
                      isLoading={isLoggingOut}
                      variant="light"
                      onClick={handleLogout}
                    >
                      <LogoutIcon className="text-lg mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </aside>
  );
}

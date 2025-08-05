"use client";

import { Input } from "@heroui/input";
import { Kbd   } from "@heroui/kbd";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

import { ThemeSwitch } from "@/components/theme-switch";
import { ThemeConfig } from "@/config/theme";
import { SimpleLayoutType } from "@/config/constants";
import { SearchIcon } from "@/components/icons";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface TopNavProps {
  theme: ThemeConfig;
  variant: (typeof SimpleLayoutType)[keyof typeof SimpleLayoutType];
  isSidebarCollapsed: boolean;
  onSidebarCollapsedChange: (collapsed: boolean) => void;
}

export function TopNav({
  theme,
  variant,
  isSidebarCollapsed,
  onSidebarCollapsedChange,
}: TopNavProps) {
  const [isMac, setIsMac] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes("mac"));

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMac]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    // Add your search logic here
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

  return (
    <div
      className={`
      h-16 border-b border-default-200 bg-background
      flex items-center justify-between px-4
      fixed top-0 right-0
      transition-all duration-300 ease-in-out
      ${isSidebarCollapsed ? "left-[60px]" : "left-[260px]"}
      ${theme.themeDirection === "rtl" ? "left-0" : ""}
    `}
    >
      {/* Left side - Breadcrumb and Toggle */}
      <div className="h-full flex items-center space-x-4">
        <button
          className="w-8 h-8 flex items-center justify-center text-default-500 hover:text-default-900 rounded-lg hover:bg-default-100"
          onClick={() => onSidebarCollapsedChange(!isSidebarCollapsed)}
        >
          {isSidebarCollapsed ? "→" : "←"}
        </button>
        <Breadcrumbs icons theme={theme} title={false} />
      </div>

      {/* Right side - Search and Theme Toggle */}
      <div className="flex items-center space-x-4">
        <div className="relative">{searchInput}</div>
        <ThemeSwitch />
      </div>
    </div>
  );
}

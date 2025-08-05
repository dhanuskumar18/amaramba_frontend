"use client";
import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: DropdownOption[];
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  rightImage?: {
    src: string;
    width: number;
    height: number;
  };
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder = "Select an option",
  value,
  onChange,
  options = [],
  disabled = false,
  className = "",
  size = "md",
  rightImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sizes = {
    sm: "h-10 text-sm px-3 py-2",
    md: "h-12 text-base px-4 py-3",
    lg: "h-14 text-lg px-5 py-4",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: DropdownOption) => {
    setSelectedValue(option.value);
    onChange?.(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  );
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <button
        className={`
          w-full
          ${sizes[size]}
          ${rightImage ? "pr-12" : "pr-4"}
          border-0
          rounded-md
          bg-edittext-1
          text-left
          text-global-18
          focus:outline-none
          focus:ring-2
          focus:ring-global-2
          transition-all
          duration-200
          ${disabled ? "opacity-50 cursor-not-allowed bg-gray-100" : "cursor-pointer"}
          font-lexend
          flex
          items-center
          justify-between
        `
          .trim()
          .replace(/\s+/g, " ")}
        disabled={disabled}
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? "text-global-18" : "text-gray-400"}>
          {displayText}
        </span>

        {rightImage && (
          <img
            alt="Dropdown Arrow"
            className={`${iconSizes[size]} transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            height={rightImage.height}
            src={rightImage.src}
            width={rightImage.width}
          />
        )}
      </button>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.length === 0 ? (
            <div className="px-4 py-2 text-gray-500 text-sm">
              No options available
            </div>
          ) : (
            options.map((option) => (
              <button
                key={option.value}
                className={`
                  w-full
                  px-4
                  py-2
                  text-left
                  text-global-18
                  hover:bg-gray-100
                  focus:bg-gray-100
                  focus:outline-none
                  transition-colors
                  duration-150
                  ${selectedValue === option.value ? "bg-blue-50 text-global-2" : ""}
                  font-lexend
                `
                  .trim()
                  .replace(/\s+/g, " ")}
                type="button"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

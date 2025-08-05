import React from "react";

interface IconProps {
  className?: string;
}

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const ApartmentIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect height="16" rx="2" ry="2" width="16" x="4" y="4" />
    <line x1="9" x2="15" y1="9" y2="9" />
    <line x1="9" x2="15" y1="12" y2="12" />
    <line x1="9" x2="13" y1="15" y2="15" />
  </svg>
);

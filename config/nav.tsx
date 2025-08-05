import { ReactNode } from "react";

import { NavActionType } from "./constants";

import { MdExplore } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsFileTextFill } from "react-icons/bs";
import { BiGridAlt } from "react-icons/bi";

interface BaseNavItem {
  label: string;
  href: string;
  icon?: ReactNode;
  actionType?: (typeof NavActionType)[keyof typeof NavActionType];
  section?: string;
}

export interface NavItem extends BaseNavItem {
  children?: BaseNavItem[];
}

export const navItems: NavItem[] = [
  {
    label: "Explore",
    href: "/dashboard",
    icon: <MdExplore />,
    actionType: NavActionType.LINK,
    section: "main",
  },
  {
    label: "Holdings",
    href: "/dashboard/holdings",
    icon: <FaHandHoldingUsd />,
    actionType: NavActionType.LINK,
    section: "main",
  },
  {
    label: "Orders",
    href: "/dashboard/orders",
    icon: <BsFileTextFill />,
    actionType: NavActionType.LINK,
    section: "main",
  },
  {
    label: "Watchlist",
    href: "/dashboard/watchlist",
    icon: <BiGridAlt />,
    actionType: NavActionType.LINK,
    section: "main",
  },
];

// Helper function to group nav items by section
export function getNavItemsBySection() {
  const sections = new Map<string, NavItem[]>();

  navItems.forEach((item) => {
    if (item.section) {
      if (!sections.has(item.section)) {
        sections.set(item.section, []);
      }
      sections.get(item.section)?.push(item);
    }
  });

  return sections;
}

import { Lexend } from "next/font/google";

import { ThemeMode, ThemeDirection, MenuOrientation } from "./constants";

export const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  // Include a range of weights for flexibility
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export interface ThemeConfig {
  fontFamily: string;
  mode: (typeof ThemeMode)[keyof typeof ThemeMode];
  themeDirection: (typeof ThemeDirection)[keyof typeof ThemeDirection];
  menuOrientation: (typeof MenuOrientation)[keyof typeof MenuOrientation];
  miniDrawer: boolean;
  presetColor: string;
  container: boolean;
  i18n: string;
}

export const defaultTheme: ThemeConfig = {
  fontFamily: lexend.className,
  mode: ThemeMode.LIGHT,
  themeDirection: ThemeDirection.LTR,
  menuOrientation: MenuOrientation.HORIZONTAL,
  miniDrawer: false,
  presetColor: "default",
  container: true,
  i18n: "en",
};

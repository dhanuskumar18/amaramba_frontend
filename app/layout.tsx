"use client";

import { Providers } from "./providers";

import { lexend } from "@/config/theme";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={lexend.className}>
   
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

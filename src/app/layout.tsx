import "./layout.css";
import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google"
import { Open_Sans, Roboto_Flex } from "next/font/google";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto",
  subsets: ["latin-ext", "cyrillic-ext"],
});

export const metadata: Metadata = {
  get title() {
    return `XTranslate - ${this.description}`
  },
  description: "translator app for modern browsers (free extension)",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
    <body className={`${openSans.variable} ${robotoFlex.variable}`}>
    {children}
    </body>
    <Analytics/>
    <GoogleAnalytics gaId="G-HKWWGL29S8"/>
    </html>
  );
}

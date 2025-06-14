import "./layout.css";
import type React from "react";
import type { Metadata } from "next";
import { Locales, websiteUrl } from "@/app/config";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google"
import { Roboto_Flex } from "next/font/google";
import ClientProviders from "@/app/context/ClientProviders";
import { getUserLang } from "@/actions/get-set-lang";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto",
  subsets: ["latin-ext", "cyrillic-ext"],
});

export const metadata: Metadata = {
  get title() {
    return `XTranslate - ${this.description}`
  },
  description: "translator app for modern browsers (free extension)",
  alternates: {
    canonical: websiteUrl,
    languages: Object.keys(Locales).reduce((sitemap, locale) => {
      sitemap[locale] = `${websiteUrl}?lang=${locale}`;
      return sitemap;
    }, {} as Record<string, string>)
  }
}

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const lang = await getUserLang();
  return (
    <html>
    <body className={`${robotoFlex.variable}`}>
    <ClientProviders lang={lang}>
      {children}
    </ClientProviders>
    </body>
    <Analytics/>
    <GoogleAnalytics gaId="G-HKWWGL29S8"/>
    </html>
  );
}

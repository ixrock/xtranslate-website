import React from "react";
import { SessionProvider } from "next-auth/react";
import { MainPage } from "@/app/pages/main-page";
import { Locale } from "@/app/i18n";

export interface MainPageProps {
  locale: Locale;
}

export default async function AppEntry({ locale }: MainPageProps) {
  return (
    <SessionProvider>
      <MainPage locale={locale}/>
    </SessionProvider>
  )
}

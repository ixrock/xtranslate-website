import React from "react";
import { ClientProviders } from "@/app/providers";
import { MainPage } from "@/app/pages/main-page";
import { Locale } from "@/app/i18n";

export interface MainPageProps {
  locale: Locale;
}

export default async function AppEntry({ locale }: MainPageProps) {
  return (
    <ClientProviders>
      <MainPage locale={locale}/>
    </ClientProviders>
  )
}

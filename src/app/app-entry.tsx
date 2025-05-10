import React from "react";
import { SessionProvider } from "next-auth/react";
import { MainPage } from "@/app/pages/main-page";
import { Locale } from "@/app/i18n";
import { auth } from "@/auth";

export interface MainPageProps {
  locale: Locale;
}

export default async function AppEntry({ locale }: MainPageProps) {
  const session = await auth();

  return (
    <SessionProvider>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <MainPage locale={locale}/>
    </SessionProvider>
  )
}

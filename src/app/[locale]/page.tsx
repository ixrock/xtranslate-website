import React from "react";
import { redirect } from "next/navigation";
import { fallbackLocale, isAvailableLocale, Locale } from "@/app/i18n";
import { MainPage } from "@/app/pages/MainPage";

interface LocalizedPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function Localized({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isAvailableLocale(locale)) {
    return redirect(`/${fallbackLocale}`);
  }

  return <MainPage locale={locale}/>
}

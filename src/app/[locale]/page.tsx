import React from "react";
import { redirect } from "next/navigation";
import { fallbackLocale, isAvailableLocale, Locale } from "@/app/i18n";
import AppEntry from "@/app/app-entry";

interface LocalizedPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function Localized({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isAvailableLocale(locale)) {
    return redirect(`/${fallbackLocale}`);
  }

  return <AppEntry locale={locale}/>
}

import React from "react";
import { redirect } from "next/navigation";
import { AppEntry } from "@/app/pages/AppEntry";
import { fallbackLocale, isAvailableLocale, Locale } from "@/app/i18n";

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

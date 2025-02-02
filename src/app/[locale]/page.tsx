import React from "react";
import { redirect } from "next/navigation";
import { fallbackLocale, isAvailableLocale, Locale } from "@/app/i18n";
import { LocalizedPage } from "./localized-page";

interface LocalizedPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function LocalizedPageVersion({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isAvailableLocale(locale)) {
    return redirect(`/${fallbackLocale}`);
  }

  return <LocalizedPage locale={locale}/>
}

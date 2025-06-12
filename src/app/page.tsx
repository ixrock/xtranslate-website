import { MainPage } from "@/app/pages/MainPage";
import { headers } from "next/headers";
import { fallbackLocale, isAvailableLocale, Locale } from "@/app/i18n";

export default async function Home() {
  const header = await headers();

  const acceptedLanguages = (header.get("accept-language") ?? "")
    .split(/;q=[0-9.]+/)
    .flatMap(lang => lang.split(","))
    .map(lang => lang.trim())
    .filter(Boolean) as Locale[];

  const locale = acceptedLanguages.find(isAvailableLocale) ?? fallbackLocale;

  return <MainPage locale={locale}/>;
}

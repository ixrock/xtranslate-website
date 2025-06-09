import { headers } from "next/headers";
import { AppEntry } from "@/app/pages/AppEntry";
import { fallbackLocale, isAvailableLocale, Locale } from "@/app/i18n";

export default async function Home() {
  const header = await headers();

  const acceptedLanguages = (header.get("accept-language") ?? "")
    .split(/;q=\d+\.\d+,?\s?/)
    .flatMap(lang => lang.split(","))
    .map(lang => lang.trim())
    .filter(Boolean) as Locale[];

  const locale = acceptedLanguages.find(isAvailableLocale) ?? fallbackLocale;

  return <AppEntry locale={locale}/>;
}

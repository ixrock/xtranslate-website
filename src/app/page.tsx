import { AppEntry } from "@/app/pages/AppEntry";
import { headers } from "next/headers";
import { fallbackLocale, isAvailableLocale, Locale } from "@/app/i18n";

export default async function Home() {
  const h = await headers();
  const acceptLanguage = h.get("accept-language") ?? "";
  const navLang = acceptLanguage.split(",")[0].trim() as Locale;
  const userLocale = navLang.split("-")[0] as Locale;

  const landingLocale =
    isAvailableLocale(navLang) ? navLang :
      isAvailableLocale(userLocale) ? userLocale :
        fallbackLocale;

  return <AppEntry locale={landingLocale}/>;
}

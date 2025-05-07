import { fallbackLocale, isAvailableLocale, Locale } from "@/app/i18n";
import AppEntry from "@/app/app-entry";

export default function Home() {
  const navLang = navigator.language as any as Locale;
  const userLocale = navLang.split("-")[0] as Locale;

  const landingLocale =
    isAvailableLocale(navLang) ? navLang :
      isAvailableLocale(userLocale) ? userLocale :
        fallbackLocale;

  return <AppEntry locale={landingLocale}/>;
}

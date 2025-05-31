import { AppEntry } from "@/app/pages/AppEntry";
import { fallbackLocale, isAvailableLocale, Locale } from "@/app/i18n";

export default function Home() {
  const navLang = navigator.language as any as Locale;
  const userLocale = navLang.split("-")[0] as Locale;

  const landingLocale =
    isAvailableLocale(navLang) ? navLang :
      isAvailableLocale(userLocale) ? userLocale :
        fallbackLocale;

  return <AppEntry locale={landingLocale}/>;
}

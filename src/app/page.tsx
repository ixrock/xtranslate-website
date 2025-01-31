import AvailableLocales from "@/app/locales/_locales.json";
import { fallbackLocale, Locale } from "@/app/i18n";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  const navLang = navigator.language as any as Locale;
  const userLocale = navLang.split("-")[0] as Locale;

  const landingLocale =
    AvailableLocales[navLang] ? navLang :
      AvailableLocales[userLocale] ? userLocale :
        fallbackLocale;

  permanentRedirect(landingLocale);
}

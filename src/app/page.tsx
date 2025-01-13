import AvailableLocales from "@/app/locales/_locales.json";
import { fallbackLocale, Locale } from "@/app/i18n";
import { redirect } from "next/navigation";

export default function Home() {
  const navLang = navigator.language as any as Locale;
  const userLocale = navLang.split("-")[0] as Locale;

  if (AvailableLocales[navLang]) redirect(`/${AvailableLocales[navLang]}`)
  if (AvailableLocales[userLocale]) redirect(`/${AvailableLocales[userLocale]}`);
  redirect(`/${fallbackLocale}`);
}

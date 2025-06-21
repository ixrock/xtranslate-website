"use server";

import { headers, cookies } from "next/headers";
import { defaultLocale, Locale, Locales } from "@/app/i18n";

export async function getUserLang() {
  const cookieLang = await getCookieLang();
  const acceptLang = await getAcceptLang();
  return cookieLang ?? acceptLang ?? defaultLocale;
}

export async function getAcceptLang(): Promise<Locale | undefined> {
  const header = await headers();

  const acceptedLanguages = (header.get("accept-language") ?? "")
    .split(/;q=[0-9.]+/)
    .flatMap(lang => lang.split(","))
    .map(lang => lang.trim())
    .filter(Boolean) as Locale[];

  return acceptedLanguages.find(lang => Locales[lang]) as Locale;
}

export async function getCookieLang(): Promise<Locale | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("lang")?.value as Locale;
}

export async function setCookieLang(lang: Locale) {
  const cookieStore = await cookies();
  cookieStore.set("lang", lang, {
    path: "/",
    maxAge: 31536000, // 1 year
    sameSite: "lax",
  });
}

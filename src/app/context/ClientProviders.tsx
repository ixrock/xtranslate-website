"use client";

import React, { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Cookies } from "typescript-cookie";
import { defaultLocale, type Locale, Locales } from "@/app/config";
import { PageContextProvider } from "./PageContextProvider";
import { setCookieLang } from "@/actions/get-set-lang";

export default function ClientProviders({ lang, children }: {
  lang: Locale; // from server
  children: React.ReactNode;
}) {
  const search = useSearchParams();
  const [userLang, setLang] = useState(lang);

  useEffect(() => {
    const searchLang = search.get("lang") as Locale;
    const cookieLang = Cookies.get("lang") as Locale;

    if (searchLang !== null && searchLang !== cookieLang) {
      const lang = Locales[searchLang] ? searchLang : defaultLocale;
      setLang(lang); // update client-render
      void setCookieLang(lang); // update server-cookie
    }
  }, [search]);

  return (
    <SessionProvider>
      <PageContextProvider value={{ lang: userLang }}>
        {children}
      </PageContextProvider>
    </SessionProvider>
  );
}

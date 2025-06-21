import React from "react";
import { defaultLocale, Locale } from "@/app/i18n";

export interface PageContextValue {
  lang: Locale;
}

export const PageContext = React.createContext<PageContextValue>({
  lang: defaultLocale,
});

import React from "react";
import { defaultLocale, Locale } from "@/app/config";

export interface PageContextValue {
  lang: Locale;
}

export const PageContext = React.createContext<PageContextValue>({
  lang: defaultLocale,
});

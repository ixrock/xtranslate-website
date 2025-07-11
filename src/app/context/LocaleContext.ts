import React from "react";
import { defaultLocale, Locale } from "@/app/i18n";

export const LocaleContext = React.createContext<Locale>(defaultLocale);

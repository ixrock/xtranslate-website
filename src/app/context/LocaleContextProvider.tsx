"use client";

import React from "react";
import { LocaleContext } from "./LocaleContext";
import { Locale } from "@/app/i18n";

export function LocaleContextProvider({ value, children }: {
  value: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

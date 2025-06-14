"use client";

import React from "react";
import { PageContext, PageContextValue } from "./PageContext";

export function PageContextProvider({ value, children }: {
  value: PageContextValue;
  children: React.ReactNode;
}) {
  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
}

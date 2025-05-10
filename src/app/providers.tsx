"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

export interface ClientProvidersProps extends React.PropsWithChildren {
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

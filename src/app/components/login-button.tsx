"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function LoginButton() {
  const { data: session } = useSession();

  return (
    <>
      {!session && <button onClick={() => signIn()}>Sign In</button>}
      {session && <button onClick={() => signOut()}>Sign Out</button>}
    </>
  )
}
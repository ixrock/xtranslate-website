"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function LoginButton() {
  const { data: session } = useSession();

  return (
    <>
      <button onClick={() => signIn()}>Sign In</button>
      {session && <button onClick={() => signOut()}>Sign Out</button>}
    </>
  )
}
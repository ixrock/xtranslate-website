"use client";

import "./page.css"
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { EarlyAccessSource, joinEarlyAccess } from "@/actions/early-access";
import { Button } from "@/app/components/Button";

interface Props {
  loggedIn: boolean;
  i18n: {
    buttonLabel: string
    buttonLabelJoining: string
    loginFirstInfo: string
    successInfo: string
    errorInfo: string;
  }
}

export default function EarlyAccessButton({ loggedIn, i18n }: Props) {
  const [joining, setJoining] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const source = searchParams.get("source") as EarlyAccessSource;

  const handleJoin = async () => {
    setJoining(true);
    setError(null);
    try {
      await joinEarlyAccess(source ?? "website");
      setJoined(true);
    } catch (err) {
      setError(i18n.errorInfo);
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="EarlyAccessButton flex column gaps align-center">
      {loggedIn && (
        <Button themed onClick={handleJoin} disabled={joining || joined}>
          {joining ? i18n.buttonLabelJoining : i18n.buttonLabel}
        </Button>
      )}
      {!loggedIn && (
        <Button themed onClick={() => signIn()}>
          {i18n.loginFirstInfo}
        </Button>
      )}
      {joined && <p className="success">{i18n.successInfo}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

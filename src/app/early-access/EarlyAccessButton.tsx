"use client";

import "./page.css"
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { EarlyAccessSource, joinEarlyAccess } from "@/actions/early-access";
import { Button } from "@/app/components/Button";
import { useLocalization } from "@/app/hooks/useLocalization";
import { Locales } from "@/app/i18n";

interface Props {
  loggedIn: boolean;
}

export default function EarlyAccessButton({ loggedIn }: Props) {
  const [joining, setJoining] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t, isReady, locale } = useLocalization();
  const searchParams = useSearchParams();
  const source = searchParams.get("source") as EarlyAccessSource;

  if (!isReady) {
    return `Loading ${Locales[locale].english} localization...`;
  }

  const handleJoin = async () => {
    setJoining(true);
    setError(null);
    try {
      await joinEarlyAccess(source ?? "website");
      setJoined(true);
    } catch (err) {
      setError(t("early_access.error"));
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="EarlyAccessButton flex column gaps align-center">
      {loggedIn && (
        <Button asLink onClick={handleJoin} disabled={joining || joined}>
          {joining ? t("early_access.button_adding") : t("early_access.button_add")}
        </Button>
      )}
      {!loggedIn && (
        <Button asLink onClick={() => signIn()}>
          {t("early_access.login_first")}
        </Button>
      )}
      {joined && <p className="success">{t("early_access.success")}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

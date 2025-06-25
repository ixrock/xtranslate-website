import "./page.css"
import React from "react";
import { auth } from "@/auth";
import { getServerLocalization } from "@/app/i18n";
import { Header } from "@/app/components/Header";
import { ComparePlans } from "@/app/page-content/ComparePlans";
import { Logo } from "@/app/page-content/Logo";
import EarlyAccessButton from "@/app/early-access/EarlyAccessButton";

export default async function EarlyAccessPage() {
  const session = await auth();
  const t = await getServerLocalization();

  return (
    <>
      <Header showHome/>
      <main>
        <div className="EarlyAccess flex column gaps align-center">
          <div className="flex gaps align-center">
            <Logo/>
            <div className="flex column align-center">
              <h1>{t("early_access.header")}</h1>
              <h2>{t("early_access.subheader")}</h2>
            </div>
          </div>
          <EarlyAccessButton loggedIn={!!session}/>
          <p className="noSpamInfo">{t("early_access.nospam_info")}</p>
          <ComparePlans/>
        </div>
      </main>
    </>
  );
}

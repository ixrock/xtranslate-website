import "./page.css"
import React from "react";
import { auth } from "@/auth";
import { getLocalization } from "@/app/i18n";
import { Header } from "@/app/components/Header";
import { ComparePlans } from "@/app/page-content/ComparePlans";
import { Logo } from "@/app/page-content/Logo";
import EarlyAccessButton from "@/app/early-access/EarlyAccessButton";

export default async function EarlyAccessPage() {
  const session = await auth();
  const t = await getLocalization();

  const i18n = {
    header: t("early_access.header"),
    subHeader: t("early_access.subheader"),
    buttonLabel: t("early_access.button_add"),
    buttonLabelJoining: t("early_access.button_adding"),
    loginFirstInfo: t("early_access.login_first"),
    noSpamInfo: t("early_access.nospam_info"),
    successInfo: t("early_access.success"),
    errorInfo: t("early_access.error"),
  };

  return (
    <>
      <Header showHome/>
      <main>
        <div className="EarlyAccess flex column gaps align-center">
          <div className="flex gaps align-center">
            <Logo/>
            <div className="flex column align-center">
              <h1>{i18n.header}</h1>
              <h2>{i18n.subHeader}</h2>
            </div>
          </div>
          <EarlyAccessButton loggedIn={!!session} i18n={i18n}/>
          <p className="noSpamInfo">{i18n.noSpamInfo}</p>
          <ComparePlans/>
        </div>
      </main>
    </>
  );
}

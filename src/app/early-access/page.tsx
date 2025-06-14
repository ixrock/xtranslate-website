import "./page.css"
import React from "react";
import { auth } from "@/auth";
import { getLocalization } from "@/app/i18n";
import { Header } from "@/app/components/Header";
import { Button } from "@/app/components/Button";
import { ComparePlans } from "@/app/page-content/ComparePlans";
import { Logo } from "@/app/page-content/Logo";
import HomeSvg from "@/assets/home.svg";
import { Icon } from "@/app/components/Icon";
import EarlyAccessButton from "@/app/early-access/early-access-button";

export default async function EarlyAccessPage() {
  const session = await auth();
  const t = await getLocalization();

  const i18n = {
    header: t("early_access_header"),
    subHeader: t("early_access_header_subheader"),
    buttonLabel: t("early_access_button_add"),
    buttonLabelJoining: t("early_access_button_adding"),
    loginFirstInfo: t("early_access_login_first"),
    noSpamInfo: t("early_access_nospam_info"),
    successInfo: t("early_access_success"),
    errorInfo: t("early_access_error"),
  };

  return (
    <>
      <Header>
        <Button flat href="/">
          <Icon small svgFill><HomeSvg/></Icon>
        </Button>
      </Header>
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

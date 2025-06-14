import "./early-access.css"

import React from "react";
import { getLocalization } from "@/app/i18n";
import { Header } from "@/app/components/Header";
import { Button } from "@/app/components/Button";
import { ComparePlans } from "@/app/page-content/ComparePlans";
import { Logo } from "@/app/page-content/Logo";
import HomeSvg from "@/assets/home.svg";
import { Icon } from "@/app/components/Icon";

export default async function EarlyAccessPage() {
  const t = await getLocalization();

  const texts = {
    header: t("early_access_header"),
    subHeader: t("early_access_header_subheader"),
    buttonLabel: t("early_access_button_add"),
    buttonLabelJoining: t("early_access_button_adding"),
    successInfo: t("early_access_success"),
    noSpamInfo: t("early_access_nospam_info")
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
          <div className={`headline flex gaps`}>
            <Logo/>
            <div className={`flex column align-center`}>
              <h1>{texts.header}</h1>
              <h2>{texts.subHeader}</h2>
            </div>
          </div>

          <div className="flex column gaps">
            <Button themed>{texts.buttonLabel}</Button>
          </div>
          <p className="noSpamInfo">{texts.noSpamInfo}</p>

          <ComparePlans/>
        </div>
      </main>
    </>
  );
}

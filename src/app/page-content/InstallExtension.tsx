import "./InstallExtension.css"
import React from "react";
import { chromeStoreUrl, edgeStoreUrl } from "@/app/config";
import { getLocalization } from "@/app/i18n";
import { getUserLang } from "@/actions/get-set-lang";
import { Icon } from "@/app/components/Icon";
import { Button } from "@/app/components/Button";

export async function InstallExtension() {
  const locale = await getUserLang();
  const t = await getLocalization();

  return (
    <section className="InstallExtension flex gaps justify-center">
      <Button
        flat
        href={`${chromeStoreUrl}?hl=${locale}`}
        className="flex gaps align-center"
        title={t("install_from_chrome_store")}
        target="_blank"
      >
        <Icon>
          <img src="/chrome.svg" alt={t("chrome_store_short")}/>
        </Icon>
        <span>{t("install_from_chrome_store")}</span>
      </Button>
      <Button
        flat
        href={edgeStoreUrl}
        className="flex gaps align-center"
        title={t("install_from_ms_edge_store")}
        target="_blank"
      >
        <Icon>
          <img src="/edge.svg" alt={t("ms_edge_store_short")}/>
        </Icon>
        <span>{t("install_from_ms_edge_store")}</span>
      </Button>
    </section>
  );
}

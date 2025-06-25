import "./InstallExtension.css"
import React from "react";
import { chromeStoreUrl, edgeStoreUrl } from "@/app/config";
import { getServerLocalization } from "@/app/i18n";
import { getServerLocale } from "@/actions/get-set-lang";
import { Icon } from "@/app/components/Icon";
import { ButtonLink } from "@/app/components/Button";
import ChromeSvg from "@/assets/chrome.svg";
import EdgeSvg from "@/assets/edge.svg";

export async function InstallExtension() {
  const locale = await getServerLocale();
  const t = await getServerLocalization();

  return (
    <section className="InstallExtension flex gaps justify-center">
      <ButtonLink
        flat
        href={`${chromeStoreUrl}?hl=${locale}`}
        className="button flex gaps align-center"
        target="_blank"
      >
        <Icon>
          <ChromeSvg/>
        </Icon>
        <span>{t("install_from.chrome_store")}</span>
      </ButtonLink>
      <ButtonLink
        flat
        href={edgeStoreUrl}
        className="button flex gaps align-center"
        target="_blank"
      >
        <Icon>
          <EdgeSvg/>
        </Icon>
        <span>{t("install_from.ms_edge_store")}</span>
      </ButtonLink>
    </section>
  );
}

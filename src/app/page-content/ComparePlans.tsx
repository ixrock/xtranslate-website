import "./ComparePlans.css"
import React from "react";
import { getServerLocalization } from "@/app/i18n";

export async function ComparePlans() {
  const t = await getServerLocalization();
  return (
    <>
      <h3>{t("plans.compare_title")}</h3>
      <section className="ComparePlans flex gaps auto">
        <div>
          <h4>{t("plans.free_title")}</h4>
          <ul>
            <li>{t("free_plan.inplace")}</li>
            <li>{t("free_plan.fullpage")}</li>
            <li>{t("free_plan.tts")}</li>
            <li>{t("free_plan.ownkey_limit", { pagesPerDay: <b>10</b> })}</li>
            <li>{t("free_plan.pdf")}</li>
            <li>{t("free_plan.history")}</li>
          </ul>
        </div>
        <div>
          <h4>{t("plans.pro_title")}</h4>
          <ul>
            <li>{t("pro_plan.freeplus")}</li>
            <li>
              {t("pro_plan.tokens", {
                tokens_value: v => <b>{v}</b>,
                tokens_note: v => <em>{v}</em>,
              })}
            </li>
            <li>{t("pro_plan.summarize")}</li>
            <li>{t("pro_plan.voice")}</li>
            <li>{t("pro_plan.ownkey")}</li>
            <li>{t("pro_plan.support")}</li>
            <li>{t("pro_plan.noads")}</li>
          </ul>
        </div>
      </section>
    </>
  );
}

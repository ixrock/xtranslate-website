import "./ComparePlans.css"
import React from "react";
import { getLocalization } from "@/app/i18n";

export async function ComparePlans() {
  const t = await getLocalization();
  return (
    <>
      <h3>{t("plans_compare_title")}</h3>
      <section className="ComparePlans flex gaps auto">
        <div>
          <h4>{t("plans_free_title")}</h4>
          <ul>
            <li>{t("free_plan_inplace")}</li>
            <li>{t("free_plan_fullpage")}</li>
            <li>{t("free_plan_tts")}</li>
            <li>{t("free_plan_ownkey_limit", { pagesCount: 10 })}</li>
            <li>{t("free_plan_pdf")}</li>
            <li>{t("free_plan_history")}</li>
          </ul>
        </div>
        <div>
          <h4>{t("plans_pro_title")}</h4>
          <ul>
            <li>{t("pro_plan_freeplus")}</li>
            <li>
              {t("pro_plan_tokens", {
                tokens_value: <b key="v">{t("pro_plan_tokens_value")}</b>,
                tokens_note: <em key="n">{t("pro_plan_tokens_note")}</em>,
              })}
            </li>
            <li>{t("pro_plan_summarize")}</li>
            <li>{t("pro_plan_voice")}</li>
            <li>{t("pro_plan_ownkey")}</li>
            <li>{t("pro_plan_support")}</li>
            <li>{t("pro_plan_noads")}</li>
          </ul>
          <p className="proPlanFinalThought">{t("pro_footnote")}</p>
        </div>
      </section>
    </>
  );
}

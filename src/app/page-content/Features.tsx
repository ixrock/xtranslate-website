import React from "react";
import { getServerLocalization } from "@/app/i18n";

export async function Features() {
  const t = await getServerLocalization();
  return (
    <>
      <h3>{t("features.header")}</h3>
      <p>{t("features.intro")}</p>
      <ul className="fluidColumns">
        <li>
          {t("features.fullpage", {
            fullpage_translation: v => <b>{v}</b>,
            fullpage_notes: v => <em>{v}</em>,
          })}
        </li>
        <li>{t("features.dblclick")}</li>
        <li>{t("features.icon")}</li>
        <li>
          {t("features.click_selected", {
            by_default: v => <em>{v}</em>
          })}
        </li>
        <li>
          {t("features.after_selection", {
            by_default: v => <em>{v}</em>
          })}
        </li>
        <li>
          {t("features.hotkey", {
            hotkey_default: v => <em>{v}</em>
          })}
        </li>
        <li>
          {t("features.pdf", {
            pdf_translation: v => <b>{v}</b>,
            pdf_requirements: v => <em>{v}</em>
          })}
        </li>
        <li>
          {t("features.input_tab", {
            shortcuts_url: <code>chrome://extensions/shortcuts</code>
          })}
        </li>
        <li>
          {t("features.tts", {
            tts_listen: v => <b>{v}</b>,
            tts_providers: <em>Google, OpenAI</em>
          })}
        </li>
        <li>{t("features.bookmark")}</li>
        <li>{t("features.customize")}</li>
        <li>{t("features.history")}</li>
      </ul>
    </>
  );
}

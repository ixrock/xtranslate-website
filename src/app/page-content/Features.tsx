import React from "react";
import { getLocalization } from "@/app/i18n";

export async function Features() {
  const t = await getLocalization();

  return (
    <>
      <h3>{t("features_header")}</h3>
      <p>{t("features_intro")}</p>
      <ul className="fluidColumns">
        <li>
          {t("features_fullpage", {
            fullpage_text_translation: <b key="t">{t("features_fullpage_text_translation")}</b>,
            fullpage_text_notes: <em key="n">{t("features_fullpage_text_notes")}</em>,
          })}
        </li>
        <li>{t("features_dblclick")}</li>
        <li>{t("features_icon")}</li>
        <li>
          {t("features_click_selected", {
            turned_off_by_default: <em key="o">{t("features_turned_off_by_default")}</em>
          })}
        </li>
        <li>
          {t("features_after_selection", {
            turned_off_by_default: <em key="o">{t("features_turned_off_by_default")}</em>
          })}
        </li>
        <li>
          {t("features_hotkey", {
            hotkey_default: <em key={1}>{t("features_hotkey_default")}</em>
          })}
        </li>
        <li>
          {t("features_pdf", {
            pdf_translation: <b key={1}>{t("features_pdf_translation")}</b>,
            pdf_requirements: <em key={2}>{t("features_pdf_requirements")}</em>
          })}
        </li>
        <li>
          {t("features_input_tab", {
            shortcuts_url: <code key={1}>chrome://extensions/shortcuts</code>
          })}
        </li>
        <li>
          {t("features_tts", {
            tts_listen: <b key={1}>{t("features_tts_listen")}</b>,
            tts_providers: <em key={2}>Google, OpenAI</em>
          })}
        </li>
        <li>{t("features_bookmark")}</li>
        <li>{t("features_customize")}</li>
        <li>{t("features_history")}</li>
      </ul>
    </>
  );
}

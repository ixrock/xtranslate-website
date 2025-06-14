import "./MainContent.css"

import React from "react";
import { chromeStoreUrl, githubRepoUrl } from "@/app/config";
import { formatNumber, getLocalization } from "@/app/i18n";
import { getUserLang } from "@/actions/get-set-lang";
import { PhotoPreviews, Rating } from "@/app/components";
import { Icon } from "@/app/components/Icon";
import { Logo } from "@/app/page-content/Logo";
import { InstallExtension } from "@/app/page-content/InstallExtension";
import { ComparePlans } from "@/app/page-content/ComparePlans";

export async function MainContent() {
  const locale = await getUserLang();
  const t = await getLocalization();

  return (
    <main className={`MainContent flex column gaps`}>
      <div className={`headline flex gaps`}>
        <Logo/>
        <div className={`flex column align-center`}>
          <h1>{t("header")}</h1>
          <h2>{t("subheader")}</h2>
        </div>
      </div>

      <div className="ratingsWrapper">
        <div className="ratings">
          <Rating rateValue={4.5}/>
          <div className="ratingAmountFrom">
            {t("total_ratings", {
              count: <b key="count">{formatNumber({ value: 1600 })}+</b>,
              ratingsLink: <a key="reviews" href={`${chromeStoreUrl}/reviews?hl=${locale}`} target="_blank">
                {t("total_ratings_ratingsLink")}
              </a>
            })}
          </div>
        </div>
        <div className={`ratingTotalUsers flex gaps align-center`}>
          <Icon small>
            <img src="/users.svg" alt="Total users"/>
          </Icon>
          <span>
            {t("total_rating_users", {
              usersCount: <b key="count">100K</b>,
              fromStores: <em key="origins">{t("total_rating_users_fromStores")}</em>,
            })}
          </span>
        </div>
      </div>

      <InstallExtension/>

      <div className="mainInfo">
        <p>
          {t("main_info1", {
            textTranslation: <b key="text">{t("main_info1_textTranslation")}</b>,
            htmlDocuments: <b key="html">HTML</b>,
            pdfDocuments: <b key="pdf">{t("main_info1_pdfDocuments")}</b>,
            fullPageTranslation: <b key="page">{t("main_info1_fullPageTranslation")}</b>,
          })}
        </p>
        <p>
          {t("main_info2", {
            textTranslation: <b key="text">{t("main_info2_textTranslation")}</b>
          })}
        </p>
      </div>

      <PhotoPreviews images={[
        { src: "/sshots/website_popup.jpg", title: t("gallery_website_popup") },
        { src: "/sshots/website_select_text.png", title: t("gallery_website_select_text") },
        { src: "/sshots/website_translation_results.png", title: t("gallery_website_translation_results") },
        { src: "/sshots/app_settings.png", title: t("gallery_app_settings") },
        { src: "/sshots/app_popup_customization.png", title: t("gallery_app_popup_customization") },
        { src: "/sshots/app_translate_tab.png", title: t("gallery_app_translate_tab") },
        { src: "/sshots/app_history_tab.png", title: t("gallery_app_history_tab") },
        { src: "/sshots/pdf_translation.png", title: t("gallery_pdf_translation") },
        { src: "/sshots/app_theme_dark.png", title: t("gallery_app_theme_dark") },
        { src: "/sshots/page_translation_context_menu_translate.png", title: t("gallery_context_menu_page_translate") },
        { src: "/sshots/page_translation_context_menu_translated.png", title: t("gallery_context_menu_page_translated") },
      ]}
      />

      <div className="fluidColumns">
        <h3>{t("install_extension_header")}</h3>
        <ul>
          <li><a href={`https://chrome.google.com/webstore/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo?hl=${locale}`} target="_blank">{t("install_chrome_store")}</a></li>
          <li><a href="https://microsoftedge.microsoft.com/addons/detail/cinfaflgbaachkaamaeglolofeahelkd" target="_blank">{t("install_ms_addons")}</a></li>
          <li><a href="https://addons.mozilla.org/en-GB/firefox/addon/xtranslate-chrome/" target="_blank">{t("install_firefox")}</a> <em>({t("install_old_version")})</em></li>
          <li><a href={githubRepoUrl} target="_blank">Github</a> <em>({t("install_from_sources")})</em></li>
        </ul>

        <h3 className="breakCol">{t("vendors_available_header")}</h3>
        <ul>
          <li><a href="https://translate.google.com/" target="_blank">Google</a> ({t("vendor_apis_is_free")})</li>
          <li><a href="https://www.bing.com/translator" target="_blank">Bing</a> ({t("vendor_apis_is_free")})</li>
          <li><a href="https://www.deepl.com/translator" target="_blank">DeepL</a> ({t("vendor_apis_is_free")}: {t("vendor_deepl_limitatiion")} + {t("vendor_ai_bring_your_key")})</li>
          <li><a href="https://platform.openai.com" target="_blank">OpenAI</a> ({t("vendor_ai_bring_your_key")})</li>
          <li><a href="https://console.x.ai" target="_blank">Grok</a> ({t("vendor_ai_bring_your_key")})</li>
          <li><a href="https://platform.deepseek.com" target="_blank">DeepSeek</a> ({t("vendor_ai_bring_your_key")})</li>
        </ul>
      </div>

      <ComparePlans/>

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

      <h3>{t("security_info_header")}</h3>
      <ul>
        <li>
          {t("security_info_api_key_store", {
            providersList: <em key={1}>OpenAI, Grok</em>,
            apiKeyStorage: <a key={2} href="https://developer.chrome.com/docs/extensions/reference/api/storage" target="_blank">chrome.storage.local</a>,
            authHeader: <code key={3}>Authorization</code>,
            webRequestApi: <a key={4} href="https://developer.chrome.com/docs/extensions/reference/api/webRequest" target="_blank">webRequest</a>,
          })}
        </li>
        <li>
          {t("security_info_anti_xss", {
            aiConnectionProvider: <a key={1} href="https://github.com/openai/openai-node" target="_blank">OpenAI</a>,
          })}
        </li>
        <li>{t("security_info_stay_safe")}</li>
        <li>{t("security_info_other_recommendations")}</li>
      </ul>
      <hr/>
      <footer>
        {t("footer_info")}
      </footer>
    </main>
  );
}

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
import { Features } from "@/app/page-content/Features";
import UsersIconSvg from "@/assets/users.svg";

export async function MainContent() {
  const locale = await getUserLang();
  const t = await getLocalization();

  return (
    <main className={`MainContent flex column gaps`}>
      <div className="flex gaps">
        <Logo/>
        <div className={`flex column align-center`}>
          <h1>{t("header")}</h1>
          <h2>{t("subheader")}</h2>
        </div>
      </div>

      <section className="ratingsWrapper">
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
        <div className="flex gaps align-center">
          <Icon small svgFill className="usersIcon">
            <UsersIconSvg/>
          </Icon>
          <span>
            {t("total_rating_users", {
              usersCount: <b key="count">100K</b>,
              fromStores: <em key="origins">{t("total_rating_users_fromStores")}</em>,
            })}
          </span>
        </div>
      </section>

      <InstallExtension/>

      <section className="mainInfo">
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
      </section>

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

      <section className="availableProviders">
        <h3>{t("install_extension_header")}</h3>
        <ul>
          <li><a href={`https://chrome.google.com/webstore/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo?hl=${locale}`} target="_blank">{t("install_chrome_store")}</a></li>
          <li><a href="https://microsoftedge.microsoft.com/addons/detail/cinfaflgbaachkaamaeglolofeahelkd" target="_blank">{t("install_ms_addons")}</a></li>
          <li><a href="https://addons.mozilla.org/en-GB/firefox/addon/xtranslate-chrome/" target="_blank">{t("install_firefox")}</a> <em>({t("install_old_version")})</em></li>
          <li><a href={githubRepoUrl} target="_blank">Github</a> <em>({t("install_from_sources")})</em></li>
        </ul>

        <h3>{t("vendors_available_header")}</h3>
        <ul>
          <li><a href="https://translate.google.com/" target="_blank">Google</a> ({t("vendor_apis_is_free")})</li>
          <li><a href="https://www.bing.com/translator" target="_blank">Bing</a> ({t("vendor_apis_is_free")})</li>
          <li><a href="https://www.deepl.com/translator" target="_blank">DeepL</a> ({t("vendor_apis_is_free")}: {t("vendor_deepl_limitatiion")} + {t("vendor_ai_bring_your_key")})</li>
          <li><a href="https://platform.openai.com" target="_blank">OpenAI</a> ({t("vendor_ai_bring_your_key")})</li>
          <li><a href="https://console.x.ai" target="_blank">Grok</a> ({t("vendor_ai_bring_your_key")})</li>
          <li><a href="https://platform.deepseek.com" target="_blank">DeepSeek</a> ({t("vendor_ai_bring_your_key")})</li>
        </ul>
      </section>

      <ComparePlans/>
      <Features/>

      <h3>{t("security_info_header")}</h3>
      <section>
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
      </section>
      <hr/>
      <footer>
        {t("footer_info")}
      </footer>
    </main>
  );
}

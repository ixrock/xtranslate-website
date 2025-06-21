import "./MainContent.css"

import React from "react";
import { chromeStoreUrl } from "@/app/config";
import { formatNumber, getLocalization } from "@/app/i18n";
import { getUserLang } from "@/actions/get-set-lang";
import { PhotoGallery, Rating } from "@/app/components";
import { Icon } from "@/app/components/Icon";
import { Logo } from "@/app/page-content/Logo";
import { InstallExtension } from "@/app/page-content/InstallExtension";
import { ComparePlans } from "@/app/page-content/ComparePlans";
import { Features } from "@/app/page-content/Features";
import { ButtonLink } from "@/app/components/Button";
import UsersIconSvg from "@/assets/users.svg";
import DiscountLabelSvg from "@/assets/discount.svg";

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
              count: <b key="count">{formatNumber({ value: 1600, locale })}+</b>,
              link: v => <a key="reviews" href={`${chromeStoreUrl}/reviews?hl=${locale}`} target="_blank">{v}</a>
            })}
          </div>
        </div>
        <div className="flex gaps align-center">
          <Icon svgFill>
            <UsersIconSvg/>
          </Icon>
          <span>
            {t("total_rating_users", {
              usersCount: <b key="count">100K</b>,
              storeInfo: v => <em key="origins">{v}</em>,
            })}
          </span>
        </div>
      </section>

      <InstallExtension/>

      <section className="mainInfo">
        <p>
          {t("main_info1", {
            textTranslation: v => <b key="text">{v}</b>,
            htmlDocs: <b key="html">HTML</b>,
            pdfDocs: v => <b key="pdf">{v}</b>,
            fullPageTranslation: v => <b key="page">{v}</b>,
          })}
        </p>
        <p>
          {t("main_info2", { textTranslation: v => <b key="text">{v}</b> })}
        </p>
      </section>

      <PhotoGallery>
        <img src="/sshots/website_popup.webp" alt={t("gallery.website_popup")}/>
        <img src="/sshots/website_select_text.webp" alt={t("gallery.website_select_text")}/>
        <img src="/sshots/app_settings.webp" alt={t("gallery.app_settings")}/>
        <img src="/sshots/app_popup_customization.webp" alt={t("gallery.app_popup_customization")}/>
        <img src="/sshots/app_history_tab.webp" alt={t("gallery.app_history_tab")}/>
        <img src="/sshots/pdf_translation.webp" alt={t("gallery.pdf_translation")}/>
        <img src="/sshots/app_theme_dark.webp" alt={t("gallery.app_theme_dark")}/>
        <img src="/sshots/page_translation_context_menu_translate.webp" alt={t("gallery.context_menu_translate")}/>
        <img src="/sshots/page_translation_context_menu_translated.webp" alt={t("gallery.context_menu_translated")}/>
      </PhotoGallery>

      <section className="availableProviders flex column gaps">
        <h3>{t("providers_available_header")}</h3>
        <ul>
          <li><a href="https://translate.google.com/" target="_blank">Google</a> ({t("provider_api.is_free")})</li>
          <li><a href="https://www.bing.com/translator" target="_blank">Bing</a> ({t("provider_api.is_free")})</li>
          <li><a href="https://www.deepl.com/translator" target="_blank">DeepL</a> ({t("provider_api.is_free")}: {t("provider_api.deepl_limit")} + {t("provider_api.bring_own_key")})</li>
          <li><a href="https://platform.openai.com" target="_blank">OpenAI</a> ({t("provider_api.bring_own_key")})</li>
          <li><a href="https://console.x.ai" target="_blank">Grok</a> ({t("provider_api.bring_own_key")})</li>
          <li><a href="https://platform.deepseek.com" target="_blank">DeepSeek</a> ({t("provider_api.bring_own_key")})</li>
        </ul>
      </section>

      <ComparePlans/>

      <ButtonLink href="/early-access" className="earlyAccessBtn flex gaps align-center justify-center">
        <Icon svgFill>
          <DiscountLabelSvg/>
        </Icon>
        <div className="flex column">
          <b className="label">{t("early_access.button_label")}</b>
          <span className="extraInfo">{t("early_access.button_label_extra")}</span>
        </div>
      </ButtonLink>

      <Features/>

      <h3>{t("security_info.header")}</h3>
      <section>
        <ul>
          <li>
            {t("security_info.api_key_store", {
              providersList: <em key={1}>OpenAI, Grok</em>,
              authHeader: <code key={2}>Authorization</code>,
              apiKeyStorage: <a key={3} href="https://developer.chrome.com/docs/extensions/reference/api/storage" target="_blank">chrome.storage.local</a>,
              webRequestApi: <a key={4} href="https://developer.chrome.com/docs/extensions/reference/api/webRequest" target="_blank">webRequest</a>,
            })}
          </li>
          <li>
            {t("security_info.anti_xss", {
              aiConnectionProvider: <a key={1} href="https://github.com/openai/openai-node" target="_blank">OpenAI</a>,
            })}
          </li>
          <li>{t("security_info.stay_safe")}</li>
          <li>{t("security_info.other_recommendations")}</li>
        </ul>
      </section>
      <hr/>
      <footer>
        {t("footer_info")}
      </footer>
    </main>
  );
}

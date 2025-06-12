import styles from "./MainPage.module.css";
import React from "react";
import { chromeStoreUrl, edgeStoreUrl, githubRepoUrl } from "@/app/config";
import { getMessage, Locale, MessagePlaceholders } from "@/app/i18n";
import { LightDarkIconSwitcher, PhotoPreviews, Rating } from "@/app/components";
import { SelectLanguage } from "@/app/components/SelectLangIcon";
import { UserMenu } from "@/app/components/UserMenu";
import { Icon } from "@/app/components/Icon";
import { GithubButton } from "@/app/components/GithubButton";
import { Button } from "@/app/components/Button";

export interface LocalizedPageProps {
  locale?: Locale;
}

export function MainPage({ locale = "en" }: LocalizedPageProps) {
  const __ = (id: string, placeholders: MessagePlaceholders = {}) => {
    return getMessage({ msgId: id, locale, placeholders }); // __("msgId") shortcut for getting localized message
  };

  return (
    <div className={`${styles.mainPage} flex column gaps`}>
      <UserMenu/>

      <div className={`${styles.topIcons} flex gaps`}>
        <LightDarkIconSwitcher/>
        <SelectLanguage locale={locale}/>
      </div>

      <div className="flex gaps align-center justify-center">
        <GithubButton/>
        <Button href="/early-access" className={styles.earlyAccessBtn}>
          <b className={styles.label}>{__("early_access_button_label")}</b>
          <span className={styles.extraInfo}>{__("early_access_button_label_extra")}</span>
        </Button>
      </div>

      <header className={styles.header}>
        <a href="/">
          <img src="/xtranslate-logo.svg" className={styles.logo} alt="XTranslate"/>
        </a>
        <h1>{__("header")}</h1>
      </header>

      <div className={styles.ratingsWrapper}>
        <div className={styles.ratings}>
          <Rating rateValue={4.5}/>
          <div className={styles.ratingAmountFrom}>
            {__("total_ratings", {
              count: <b key="count">1.6K</b>,
              ratingsLink: <a key="reviews" href={`${chromeStoreUrl}/reviews?hl=${locale}`} target="_blank">
                {__("total_ratings_ratingsLink")}
              </a>
            })}
          </div>
        </div>
        <div className={`${styles.ratingTotalUsers} flex gaps align-center`}>
          <Icon small>
            <img src="/users.svg" alt="Total users"/>
          </Icon>
          <span>
            {__("total_rating_users", {
              usersCount: <b key="count">100K</b>,
              fromStores: <em key="origins">{__("total_rating_users_fromStores")}</em>,
            })}
          </span>
        </div>
      </div>

      <section className={`${styles.installButtons} flex gaps justify-center`}>
        <Button
          flat
          href={`${chromeStoreUrl}?hl=${locale}`}
          className="flex gaps align-center"
          title={__("install_from_chrome_store")}
          target="_blank"
        >
          <Icon>
            <img src="/chrome.svg" alt={__("chrome_store_short")}/>
          </Icon>
          <span>{__("install_from_chrome_store")}</span>
        </Button>
        <Button
          flat
          href={edgeStoreUrl}
          className="flex gaps align-center"
          title={__("install_from_ms_edge_store")}
          target="_blank"
        >
          <Icon>
            <img src="/edge.svg" alt={__("ms_edge_store_short")}/>
          </Icon>
          <span>{__("install_from_ms_edge_store")}</span>
        </Button>
      </section>

      <div className={styles.mainInfo}>
        <p>
          {__("main_info1", {
            textTranslation: <b key="text">{__("main_info1_textTranslation")}</b>,
            htmlDocuments: <b key="html">HTML</b>,
            pdfDocuments: <b key="pdf">{__("main_info1_pdfDocuments")}</b>,
            fullPageTranslation: <b key="page">{__("main_info1_fullPageTranslation")}</b>,
          })}
        </p>
        <p>
          {__("main_info2", {
            textTranslation: <b key="text">{__("main_info2_textTranslation")}</b>
          })}
        </p>
      </div>

      <PhotoPreviews images={[
        { src: "/sshots/website_popup.jpg", title: __("gallery_website_popup") },
        { src: "/sshots/website_select_text.png", title: __("gallery_website_select_text") },
        { src: "/sshots/website_translation_results.png", title: __("gallery_website_translation_results") },
        { src: "/sshots/app_settings.png", title: __("gallery_app_settings") },
        { src: "/sshots/app_popup_customization.png", title: __("gallery_app_popup_customization") },
        { src: "/sshots/app_translate_tab.png", title: __("gallery_app_translate_tab") },
        { src: "/sshots/app_history_tab.png", title: __("gallery_app_history_tab") },
        { src: "/sshots/pdf_translation.png", title: __("gallery_pdf_translation") },
        { src: "/sshots/app_theme_dark.png", title: __("gallery_app_theme_dark") },
        { src: "/sshots/page_translation_context_menu_translate.png", title: __("gallery_context_menu_page_translate") },
        { src: "/sshots/page_translation_context_menu_translated.png", title: __("gallery_context_menu_page_translated") },
      ]}
      />

      <div className={styles.columns}>
        <h3>{__("install_extension_header")}</h3>
        <ul>
          <li><a href={`https://chrome.google.com/webstore/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo?hl=${locale}`} target="_blank">{__("install_chrome_store")}</a></li>
          <li><a href="https://microsoftedge.microsoft.com/addons/detail/cinfaflgbaachkaamaeglolofeahelkd" target="_blank">{__("install_ms_addons")}</a></li>
          <li><a href="https://addons.mozilla.org/en-GB/firefox/addon/xtranslate-chrome/" target="_blank">{__("install_firefox")}</a> <em>({__("install_old_version")})</em></li>
          <li><a href={githubRepoUrl} target="_blank">Github</a> <em>({__("install_from_sources")})</em></li>
        </ul>

        <h3 className={styles.break}>{__("vendors_available_header")}</h3>
        <ul>
          <li><a href="https://translate.google.com/" target="_blank">Google</a> ({__("vendor_apis_is_free")})</li>
          <li><a href="https://www.bing.com/translator" target="_blank">Bing</a> ({__("vendor_apis_is_free")})</li>
          <li><a href="https://www.deepl.com/translator" target="_blank">DeepL</a> ({__("vendor_apis_is_free")}: {__("vendor_deepl_limitatiion")} + {__("vendor_ai_bring_your_key")})</li>
          <li><a href="https://platform.openai.com" target="_blank">OpenAI</a> ({__("vendor_ai_bring_your_key")})</li>
          <li><a href="https://console.x.ai" target="_blank">Grok</a> ({__("vendor_ai_bring_your_key")})</li>
          <li><a href="https://platform.deepseek.com" target="_blank">DeepSeek</a> ({__("vendor_ai_bring_your_key")})</li>
        </ul>
      </div>

      <h3>Compare plans</h3>
      <div className={`${styles.comparePlans} flex gaps auto`}>
        <div>
          <h4>FREE (base features)</h4>
          <ul>
            <li>Unlimited in-place text translations</li>
            <li>Unlimited full-page text translations with Google Translate and Bing Translator APIs</li>
            <li>Text-to-speech with Google Translate API and browser's internal capabilities</li>
            <li>Full-page AI translations with own API-key are limited to 10 pages per day</li>
            <li>Translation of selected texts in PDF-files</li>
            <li>History of translations</li>
          </ul>
        </div>
        <div>
          <h4>PRO (monthly subscription / ⭐ most popular)</h4>
          <ul>
            <li>All Free features, plus:</li>
            <li><b>1M AI tokens</b> for high-quality in-place and full-page text translations <em>(≈ 750K words ≈ 1,000–1,500 book pages ≈ 3000 web-pages)</em></li>
            <li>1 hour of natural AI voice (text-to-speech)</li>
            <li>Use your own AI provider (OpenAI, DeepSeek, Grok) — no page limits</li>
            <li>Email support with short response time</li>
            <li>100% ad-free experience</li>
          </ul>
          <p className={styles.proPlanFinalThought}>
            Most users get everything they need with the PRO plan.
          </p>
        </div>
      </div>

      <h3>{__("features_header")}</h3>
      <p>Many ways to get text translation from web-pages:</p>
      <ul className={styles.columns}>
        <li>Get <b>full-page text translation</b> <em>(via browser's context-menu, app's toolbar icon or popup action-window)</em></li>
        <li>Get translation at webpage in-place by double-clicking the word</li>
        <li>Select a text and click on the translation icon appeared near by (X-icon)</li>
        <li>By clicking at the selected text <em>(this option is turned off by default)</em></li>
        <li>Get translation immediately after text selection <em>(turned off by default)</em></li>
        <li>Mouse over block of texts and press predefined hotkey in the settings (<em>Alt+Shift+X by default)</em></li>
        <li><b>PDF-files for in-place text translations</b> also supported! <em>(requires to enable custom PDF.js-viewer in the app settings)</em></li>
        <li>
          Or simply type your own text in app's "Translate" tab <em>(extension's action-window)</em>: recommended to setup hotkey-access at <code>chrome://extensions/shortcuts</code>
        </li>
        <li>
          <b>Listen text-to-speech</b> by all supported translation providers (<em>Google</em>, <em>OpenAI</em>){" "}
          or with internal browser's <a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance" target="_blank">TTS engine</a>)
        </li>
        <li>Save your favourite translations as quick bookmarks in history</li>
        <li>Adjust your unique design of the translation popup, font-size, colors, etc.</li>
        <li>View and edit history of translations</li>
      </ul>

      <h3>Security considerations when bring your own API-keys</h3>
      <ul>
        <li>
          Your access API-key (e.g. from <code>OpenAI</code>, <code>DeepL</code>, etc.) stored in <a href="https://developer.chrome.com/docs/extensions/reference/api/storage" target="_blank">
          chrome.storage.local
        </a> and used only within <code>Authorization</code> header to sign API requests (which is not exposed or tracked, even
          if <a href="https://developer.chrome.com/docs/extensions/reference/api/webRequest" target="_blank">webRequest</a> enabled
          in some other malicious extension).
        </li>
        <li>
          AI-translation requests processed via official <a href="https://github.com/openai/openai-node" target="_blank">OpenAI NPM-package</a> and
          running only within background service-worker which helps with XSS-kind of attacks.
        </li>
        <li>
          Don't enter or share your OpenAI key anywhere else except extension's settings page <em>(options page)</em>
        </li>
      </ul>
      <hr/>
      <footer>
        {__("footer_info")}
      </footer>
    </div>
  );
}

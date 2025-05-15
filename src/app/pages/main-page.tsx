import styles from "./main-page.module.css";
import React from "react";
import { auth } from "@/auth";
import { FluentVariable } from "@fluent/bundle";
import { LightDarkModeSwitcher, PhotoPreviews, Rating } from "@/app/components";
import { getFluentBundle, getMessage, isRTL, Locale } from "@/app/i18n";
import AvailableLocales from "@/locales/_locales.json"
import { SelectLanguage } from "@/app/components/select-lang";
import { UserMenu } from "@/app/components/user-menu";
import { Icon } from "@/app/components/icon";

export interface LocalizedPageProps {
  locale: Locale;
}

export async function MainPage({ locale }: LocalizedPageProps) {
  const session = await auth();
  const localizationBundle = getFluentBundle(locale);

  const __ = (id: string, params?: Record<string, FluentVariable>) => {
    return getMessage({
      msgId: id,
      bundle: localizationBundle,
      locale,
      params,
    })
  };

  return (
    <div className={`${styles.mainPage} flex column gaps`} dir={isRTL(locale) ? "rtl" : "ltr"}>
      <div className={`${styles.topIcons} flex gaps`}>
        <LightDarkModeSwitcher/>
        <SelectLanguage locale={locale}/>
      </div>

      <UserMenu user={session?.user}/>

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
          <span dangerouslySetInnerHTML={{
            __html: __("total_ratings", { count: "1.6K" })
          }}/>
          </div>
        </div>
        <div className={styles.ratingTotalUsers}>
          <Icon small>
            <img src="/users.svg" alt="Total users"/>
          </Icon>
          <span dangerouslySetInnerHTML={{
            __html: __("total_rating_users_globe", { usersCount: "100K" })
          }}/>
        </div>
      </div>

      <section className={`${styles.installButtons} flex gaps justify-center`}>
        <a
          className="flex inline gaps align-center"
          href={`https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo?hl=${locale}`}
          title={__("install_from_chrome_store")}
          target="_blank"
        >
          <Icon>
            <img src="/chrome.svg" alt={__("chrome_store_short")}/>
          </Icon>
          <span>{__("install_from_chrome_store")}</span>
        </a>
        <a
          className="flex inline gaps align-center"
          href="https://microsoftedge.microsoft.com/addons/detail/xtranslate/cinfaflgbaachkaamaeglolofeahelkd"
          title={__("install_from_ms_edge_store")}
          target="_blank"
        >
          <Icon>
            <img src="/edge.svg" alt={__("ms_edge_store_short")}/>
          </Icon>
          <span>{__("install_from_ms_edge_store")}</span>
        </a>
      </section>

      <div className={styles.mainInfo}>
        <p>
          It will help you to learn and understand foreign languages and get <b>real-time text translation</b> of selected text
          from <b>HTML</b> or <b>PDF documents</b> and even get <b>full web-page text translation</b>.
        </p>
        <p>
          Translate from 100+ foreign languages to your native language directly at web-site you're reading or
          type some text at extension main window to get <b>instant text translation</b>.
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
      ]}
      />

      <div className={styles.columns}>
        <h3>{__("install_extension_header")}:</h3>
        <ul>
          <li><a href={`https://chrome.google.com/webstore/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo?hl=${locale}`} target="_blank">{__("install_chrome_store")}</a></li>
          <li><a href="https://microsoftedge.microsoft.com/addons/detail/cinfaflgbaachkaamaeglolofeahelkd" target="_blank">{__("install_ms_addons")}</a></li>
          <li><a href="https://addons.mozilla.org/en-GB/firefox/addon/xtranslate-chrome/" target="_blank">{__("install_firefox")}</a> <em>({__("install_old_version")})</em></li>
          <li><a href="https://github.com/ixrock/XTranslate" target="_blank">Github</a> <em>({__("install_from_sources")})</em></li>
        </ul>

        <h3 className={styles.break}>{__("vendors_available_header")}:</h3>
        <ul>
          <li><a href="https://translate.google.com/" target="_blank">Google</a> ({__("vendor_apis_is_free")})</li>
          <li><a href="https://translate.yandex.com/" target="_blank">Yandex</a> ({__("vendor_apis_is_free")})</li>
          <li><a href="https://www.bing.com/translator" target="_blank">Bing</a> ({__("vendor_apis_is_free")})</li>
          <li><a href="https://www.deepl.com/translator" target="_blank">DeepL</a> ({__("vendor_apis_is_free")}: {__("vendor_deepl_limitatiion")} + {__("vendor_ai_bring_your_key")})</li>
          <li><a href="https://platform.openai.com" target="_blank">OpenAI</a> ({__("vendor_apis_is_paid")}: {__("vendor_ai_bring_your_key")})</li>
          <li><a href="https://platform.deepseek.com" target="_blank">DeepSeek</a> ({__("vendor_apis_is_paid")}: {__("vendor_ai_bring_your_key")})</li>
          <li><a href="https://console.x.ai" target="_blank">Grok</a> ({__("vendor_apis_is_paid")}: {__("vendor_ai_bring_your_key")})</li>
        </ul>
      </div>

      <h3>{__("features_header")}:</h3>
      <p>
        Many ways to get <b>text translation</b> from web-pages and even <b>translate texts in PDF</b> files:
      </p>
      <ul className={styles.columns}>
        <li>Get <b>full-page text translation</b> <em>(via browser's context-menu or from extension's action popup window)</em></li>
        <li>Get translation by double-clicking the word</li>
        <li>Press hotkey defined in extension settings (<em>Alt+Shift+X</em> by default)</li>
        <li>Select a text at webpage and click on the translation icon appeared near the text</li>
        <li>Just click on the selected text <em>(turned off by default)</em></li>
        <li>Get translation immediately after text selection/release mouse button <em>(turned off by default)</em></li>
        <li>Write text in input fields, put mouse over the element and press defined hotkey in the settings</li>
        <li><b>Translate texts in PDF</b>-files (requires to enable custom PDF-viewer in the app settings)</li>
        <li><b>Listen text-to-speech</b> (TTS) by supported translation providers <em>(Google, OpenAI)</em></li>
        <li>Adjust your unique design of the popup with translated text</li>
        <li>Customize the ways of getting translations and other options in the settings</li>
        <li>Insert any text in the extension action window (<em>Alt+X</em> hotkey by default) and get <b>instant translation</b> of sentences or dictionary words</li>
        <li>Save your favourite translations as quick bookmarks in history</li>
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

      <h3>{__("supported_localization_header")}</h3>
      <p className={styles.supportedLocalizations}>
        {Object.entries(AvailableLocales).map(([availableLocale, { native, english }]) => {
          if (locale === availableLocale) return <b key={availableLocale}>{native}</b>;
          return <a key={availableLocale} href={`/${availableLocale}`}>{native}</a>
        })}
      </p>

      <hr/>
      <footer dangerouslySetInnerHTML={{ __html: __("footer_info") }}/>
    </div>
  );
}

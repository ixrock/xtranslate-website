// TODO: add videos page with various features/use-cases/how to add api-keys/etc.

import styles from "./localized-page.module.css";
import React from "react";
import { FluentVariable } from "@fluent/bundle";
import { LightDarkModeSwitcher, PhotoPreviews, Rating } from "@/app/components";
import { getFluentBundle, getMessage, isRTL, Locale } from "@/app/i18n";
import AvailableLocales from "@/locales/_locales.json"
import { SelectLanguage } from "@/app/components/select-lang";

interface LocalizedPageProps {
  locale: Locale;
}

export function LocalizedPage({ locale }: LocalizedPageProps) {
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
    <div className={styles.page} dir={isRTL(locale) ? "rtl" : "ltr"}>
      <div className={styles.topIcons} style={{ left: 0 }}>
        <LightDarkModeSwitcher/>
        <SelectLanguage locale={locale}/>
      </div>

      <section className={styles.topIcons} style={{ right: 0 }}>
        <a
          href={`https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo?hl=${locale}`}
          title={__("install_from_chrome_store")}
          target="_blank">
          <img src="/chrome.svg" alt={__("chrome_store_short")}/>
        </a>
        <a
          href="https://microsoftedge.microsoft.com/addons/detail/xtranslate/cinfaflgbaachkaamaeglolofeahelkd"
          title={__("install_from_ms_edge_store")}
          target="_blank">
          <img src="/edge.svg" alt={__("ms_edge_store_short")}/>
        </a>
        <a href="https://github.com/ixrock/XTranslate" title="Github" target="_blank">
          <img src="/github.svg" alt={__("install_from_github")}/>
        </a>
      </section>

      <header className={styles.header}>
        <a href="/"><img src="/xtranslate-logo.svg" className={styles.logo} alt="XTranslate"/></a>
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
          <img src="/users.svg" alt="Active users"/>
          <span dangerouslySetInnerHTML={{
            __html: __("total_rating_users_globe", { usersCount: "100K" })
          }}/>
        </div>
      </div>

      <div className={styles.mainInfo}>
        <p dangerouslySetInnerHTML={{ __html: __("info_top1") }}></p>
        <p dangerouslySetInnerHTML={{ __html: __("info_top2") }}></p>
      </div>

      <PhotoPreviews className={styles.photos} images={[
        { src: "/sshots/website_popup.jpg", alt: __("gallery_website_popup") },
        { src: "/sshots/website_select_text.png", alt: __("gallery_website_select_text") },
        { src: "/sshots/website_translation_results.png", alt: __("gallery_website_translation_results") },
        { src: "/sshots/app_settings.png", alt: __("gallery_app_settings") },
        { src: "/sshots/app_popup_customization.png", alt: __("gallery_app_popup_customization") },
        { src: "/sshots/app_translate_tab.png", alt: __("gallery_app_translate_tab") },
        { src: "/sshots/app_history_tab.png", alt: __("gallery_app_history_tab") },
        { src: "/sshots/pdf_translation.png", alt: __("gallery_pdf_translation") },
        { src: "/sshots/app_theme_dark.png", alt: __("gallery_app_theme_dark") },
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
          <li><a href="https://www.deepl.com/translator" target="_blank">DeepL</a> ({__("vendor_apis_is_free")}: {__("vendor_deepl_limitatiion")})</li>
          <li><a href="https://platform.openai.com" target="_blank">OpenAI ({__("vendor_open_ai_authors")})</a> ({__("vendor_apis_is_paid")}: {__("vendor_open_ai_limitation")})</li>
          <li><a href="https://platform.deepseek.com" target="_blank">DeepSeek</a> ({__("vendor_apis_is_paid")}: {__("vendor_open_ai_limitation")})</li>
          <li><a href="https://console.x.ai" target="_blank">Grok</a> ({__("vendor_apis_is_paid")}: {__("vendor_open_ai_limitation")})</li>
        </ul>
      </div>

      <hr/>

      <h3>{__("features_header")}:</h3>
      <div className={styles.columns}>
        <p dangerouslySetInnerHTML={{ __html: __("features_intro") }}/>
        <br/>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: __("feature_way1") }}/>
          <li dangerouslySetInnerHTML={{ __html: __("feature_way2") }}/>
          <li dangerouslySetInnerHTML={{ __html: __("feature_way3") }}/>
          <li dangerouslySetInnerHTML={{ __html: __("feature_way4") }}/>
          <li dangerouslySetInnerHTML={{ __html: __("feature_way5") }}/>
          <li dangerouslySetInnerHTML={{ __html: __("feature_way6") }}/>
          <li dangerouslySetInnerHTML={{ __html: __("feature_way7") }}/>
          <li dangerouslySetInnerHTML={{ __html: __("feature_way_full_page_translate") }}/>
        </ul>

        <p dangerouslySetInnerHTML={{ __html: __("feature_mouse_over_html_element_with_hotkey") }}/>

        <br/>
        <h3>{__("pdf_feature_header")}</h3>
        <ol>
          <li dangerouslySetInnerHTML={{ __html: __("pdf_local_step1") }}/>
          <li dangerouslySetInnerHTML={{ __html: __("pdf_local_step2") }}/>
        </ol>

        <h3
          className={styles.break}
          dangerouslySetInnerHTML={{ __html: __("features_free_header") }}
        />
        <ol>
          <li>{__("features_free_tts")}</li>
          <li>{__("features_free_adjust_popup")}</li>
          <li>{__("features_free_custom_actions")}</li>
          <li dangerouslySetInnerHTML={{ __html: __("features_free_insert_text") }}/>
          <li dangerouslySetInnerHTML={{ __html: __("features_free_save_words") }}/>
          <li>{__("features_free_history")}</li>
        </ol>

        <br/>
        <h3>{__("features_paid_header")}</h3>
        <ol>
          <li dangerouslySetInnerHTML={{ __html: __("features_paid_full_pro_page_ai") }}/>
          <li>{__("features_paid_voice_over")}</li>
          <li>{__("features_paid_multi_popup_results")}</li>
          <li>{__("features_paid_more_interactivity")}</li>
        </ol>
      </div>
      <hr/>

      <h3>{__("openai_access_header")}:</h3>
      <ol>
        <li dangerouslySetInnerHTML={{ __html: __("openai_access_sign_up") }}/>
        <li dangerouslySetInnerHTML={{ __html: __("openai_access_create_api_key") }}/>
        <li dangerouslySetInnerHTML={{ __html: __("openai_access_top_up_balance") }}/>
      </ol>

      <hr/>
      <h3>{__("security_info_header")}:</h3>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: __("security_info1") }}/>
        <li dangerouslySetInnerHTML={{ __html: __("security_info2") }}/>
        <li dangerouslySetInnerHTML={{ __html: __("security_info3") }}/>
      </ul>
      <hr/>

      <h3>{__("supported_localization_header")}</h3>
      <p className={styles.supportedLocalizations}>
        {Object.entries(AvailableLocales).map(([availableLocale, { native, english }]) => {
          if (locale === availableLocale) {
            return <b key={availableLocale}>{native}</b>;
          }
          return <a key={availableLocale} href={`/${availableLocale}`}>{native}</a>
        })}
      </p>

      <hr/>
      <footer dangerouslySetInnerHTML={{ __html: __("footer_info") }}/>
    </div>
  );
}

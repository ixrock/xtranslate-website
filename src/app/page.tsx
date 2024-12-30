import styles from "./page.module.css";
import { Rating, PhotoPreviews, LightDarkModeSwitcher } from "@/app/components";

// TODO: add translations of contents to all supported locales within app, e.g `www.xtranslate.dev/zh-CN` (default: "en")
// TODO: make demo-show cases (.MOV => upload to youtube => make available here)
export default function Home() {
  return (
    <div className={styles.page}>
      <LightDarkModeSwitcher/>

      <section className={styles.installIcons}>
        <a
          href="https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo"
          title="Install from Chrome Extensions store"
          target="_blank">
          <img src="/chrome.svg" alt="Chrome Extensions Store"/>
        </a>
        <a
          href="https://microsoftedge.microsoft.com/addons/detail/xtranslate/cinfaflgbaachkaamaeglolofeahelkd"
          title="Install from Microsoft Edge Extensions Store"
          target="_blank">
          <img src="/edge.svg" alt="MS Edge Store"/>
        </a>
        <a href="https://github.com/ixrock/XTranslate" title="Github" target="_blank">
          <img src="/github.svg" alt="Install from source code"/>
        </a>
      </section>

      <header className={styles.header}>
        <img src="/xtranslate-icon.png" className={styles.logo} alt="XTranslate Logo"/>
        <h1>XTranslate - your AI translator agent (browser extension)</h1>
      </header>

      <Rating
        rateValue={4.5}
        totalRatingsCount="1.6K"
        ratingsLink="https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo/reviews"
      />

      <p>It will help you understand and get <b>real-time text translation</b> of foreign languages or get <b>full-page text translation</b> in your browser (chromium-based)</p>
      <p>
        Translate from 100+ foreign languages to your native language directly at web-site you're reading or
        type some text in the extension's drop-down window.
      </p>

      <PhotoPreviews className={styles.photos} images={[
        { src: "/sshots/website_popup.jpg", alt: "Get translation in web page context, default popup theme" },
        { src: "/sshots/website_select_text.png", alt: "Different ways to get translation from selected page text, e.g. clicking by near-by [X]-icon" },
        { src: "/sshots/website_translation_results.png", alt: "Popup custom theme with action icons (LTR: Text-to-speech, Save to favorites, Copy translation, Next translation)" },
        { src: "/sshots/app_settings.png", alt: "Configure extension app settings" },
        { src: "/sshots/app_popup_customization.png", alt: "Configure theme, customize translation popup, choose your localization" },
        { src: "/sshots/app_translate_tab.png", alt: "Input text and get translation from main app window + choose your UI localization" },
        { src: "/sshots/app_history_tab.png", alt: "History of translations with import/export in JSON-format" },
        { src: "/sshots/pdf_translation.png", alt: "Translate foreign texts in PDF files" },
        { src: "/sshots/app_theme_dark.png", alt: "Dark theme for app window" },
      ]}
      />

      <div className={styles.columns}>
        <h3>Install extension:</h3>
        <ul>
          <li><a href="https://chrome.google.com/webstore/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo" target="_blank">Chrome Extensions Web Store</a></li>
          <li><a href="https://microsoftedge.microsoft.com/addons/detail/cinfaflgbaachkaamaeglolofeahelkd" target="_blank">Microsoft Edge Add-ons</a></li>
          <li><a href="https://addons.mozilla.org/en-GB/firefox/addon/xtranslate-chrome/" target="_blank">Firefox addons</a> <em>(old version with limited support)</em></li>
          <li><a href="https://github.com/ixrock/XTranslate" target="_blank">Github</a> <em>(from source code)</em></li>
        </ul>

        <h3>Available translation vendors:</h3>
        <ul>
          <li><a href="https://translate.google.com/" target="_blank">Google</a> (free)</li>
          <li><a href="https://translate.yandex.com/" target="_blank">Yandex</a> (free)</li>
          <li><a href="https://www.bing.com/translator" target="_blank">Bing</a> (free)</li>
          <li><a href="https://www.deepl.com/translator" target="_blank">DeepL</a> (free: API key limited to 500,000 chars/month)</li>
          <li><a href="https://platform.openai.com" target="_blank">OpenAI (ChatGPT authors)</a> (paid: register and top-up balance)</li>
        </ul>
      </div>

      <hr/>

      <h3>Features:</h3>
      <div className={styles.columns}>
        <p>Many ways to get <b>text translation</b> from all <b>webpages</b> and <b>PDF files</b>:</p>
        <ul>
          <li>Double-click on the word</li>
          <li>Press hotkey defined in extension settings (<em>Alt+Shift+X</em> by default)</li>
          <li>Click on the translate icon appeared near selected text</li>
          <li>Click on selected text <em>(turned off by default)</em></li>
          <li>Just release mouse button <em>(turned off by default)</em></li>
          <li>Write text in input fields, mouse over it and press hotkey</li>
          <li>Get translation of selected text from via <em>XTranslate</em> context menu item</li>
          <li>
            You can translate whole pages with <a href="https://translate.google.com/" target="_blank">Google</a>
            <span> or </span>
            <a href="https://translate.yandex.com" target="_blank">Yandex</a> services for free <em>(via context menu)</em>
          </li>
        </ul>

        <p>
          You can get even some information from images by putting mouse cursor over the image element and
          press hotkey (title or alt attributes will be used, if applicable).
          This trick actually works with any element under mouse cursor. Just put mouse over item and press hotkey!
        </p>

        <h3>In order to work with local files (HTML or PDF) allow access for the extension:</h3>
        <ol>
          <li>open extensions URL system page <code>chrome://extensions</code>, find <b>XTranslate</b>™ and click <em>[Details]</em> button</li>
          <li>enable checkbox <em>Allow access to file URLs</em></li>
        </ol>

        <h3><b>Free features</b> of <em>XTranslate</em> extension are includes:</h3>

        <ol>
          <li>Listen text-to-speech for all supported translation vendors</li>
          <li>Adjust your unique design of the popup with translated text</li>
          <li>Customize the ways of getting translations and other options in the settings</li>
          <li>Insert any text in app's window (<em>Alt+X</em> hotkey by default) and get translation of sentences or words with dictionary support</li>
          <li>Save your favourite translations as quick bookmarks in history</li>
          <li>View and edit history of translations</li>
        </ol>

        <h3>Pro features (paid subscription, awaited in 2025)</h3>
        <ol>
          <li>Get full-page translations using AI technologies, e.g. OpenAI <em>(pay as you go)</em></li>
          <li>Use voice input/speech recognition for getting text translation</li>
          <li>Provide multiple translation results from all translation vendors at the same time</li>
          <li>More interactions with translation popup-element at webpages (e.g. drag&drop, pin, resize, etc.)</li>
        </ol>
      </div>

      <h3>Steps for access OpenAI translations:</h3>
      <hr/>
      <ol>
        <li>Sign up at OpenAI platform <a href="https://platform.openai.com">platform.openai.com</a></li>
        <li>Create api access key to get access for OpenAI translation service results</li>
        <li>Top-up your balance <em>(5$+)</em> and disable credit card's auto-top-up balance at billing page <em>(recommended)</em></li>
        <li>Don't forget to adjust limits settings <em>(recommended)</em></li>
      </ol>

      <h3>Security considerations:</h3>
      <hr/>
      <ul>
        <li>
          OpenAI api key handled via extension-scoped <code>chrome.storage.local</code> apis and used only within <code>Authorization</code> header to sign OpenAI API requests
          (which is not exposed or tracked, even if <a href="https://developer.chrome.com/docs/extensions/reference/api/webRequest">webRequest</a> API enabled in some other malicious extension)
        </li>
        <li>
          OpenAI requests goes through official <a href="https://github.com/openai/openai-node" target="_blank">OpenAI NPM-package</a> and running only within background service-worker which helps
          with XSS-kind of attacks.
        </li>
        <li>
          Don't enter or share your OpenAI key anywhere else except extension's settings page <em>(options page)</em>
        </li>
      </ul>
      <hr/>
      <h3>Supported localizations</h3>
      <p>
        العربية, বাংলা, 简体中文, 繁體中文, English, Français, Deutsch, हिंदी, Italiano, 日本語, 한국어, Português, Русский, Српски, Srpski, Slovenčina, Español, Türkçe, Tiếng Việt
      </p>

      <hr/>
      <footer>
        Made with ♥ and open-source projects. Donate for free app version support via <a href="https://www.paypal.me/romanesca" target="_blank">PayPal</a>
      </footer>
    </div>
  );
}

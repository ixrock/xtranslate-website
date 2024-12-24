import styles from "./page.module.css";
import PhotoPreviews from "@/app/components/photo-previews";

// TODO: add testimonials block
export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.installIcons}>
        <a href="https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo" target="_blank">
          <img src="/chrome.svg" alt="Install from Chrome Extensions store"/>
        </a>
        <a href="https://microsoftedge.microsoft.com/addons/detail/xtranslate/cinfaflgbaachkaamaeglolofeahelkd" target="_blank">
          <img src="/edge.svg" alt="Install from Microsoft Edge Extensions store"/>
        </a>
        <a href="https://github.com/ixrock/XTranslate" target="_blank">
          <img src="/github.svg" alt="Install from source code"/>
        </a>
      </section>

      <header className={styles.header}>
        <img src="/xtranslate-icon.png" className={styles.logo} alt="XTranslate Logo"/>
        <h1>XTranslate - your AI translator agent (browser translation extension)</h1>
      </header>

      <p>It will help you understand and get <b>real-time text translation</b> of foreign languages or get <b>full-page text translation</b> in your browser (chromium-based)</p>
      <p>
        Translate from 100+ foreign languages to your native language directly at web-site you're reading or
        type some text in the extension's drop-down window.
      </p>

      <PhotoPreviews images={[
        { src: "/sshots/website_popup.jpg", alt: "Get translation in web page context, default popup theme" },
        { src: "/sshots/website_translation_results.png", alt: "Popup custom theme with action icons (LTR: Text-to-speech, Save to favorites, Copy translation, Next translation)" },
        { src: "/sshots/website_select_text.png", alt: "Different ways to get translation from selected page text, e.g. clicking by near-by [X]-icon" },
        { src: "/sshots/app_settings.png", alt: "Configure extension app settings" },
        { src: "/sshots/app_popup_customization.png", alt: "Configure theme and customize translation popup" },
        { src: "/sshots/app_translate_tab.png", alt: "Input text and get translation from main app window" },
        { src: "/sshots/app_history_tab.png", alt: "History of translations with import/export in JSON-format" },
        { src: "/sshots/pdf_translation.png", alt: "Translate foreign texts in PDF files" },
      ]}
      />

      <h3>Install extension:</h3>
      <hr/>
      <ul>
        <li><a href="https://chrome.google.com/webstore/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo" target="_blank">Chrome's Web Store</a></li>
        <li><a href="https://microsoftedge.microsoft.com/addons/detail/cinfaflgbaachkaamaeglolofeahelkd" target="_blank">Microsoft Edge Add-ons</a></li>
        <li><a href="https://addons.mozilla.org/en-GB/firefox/addon/xtranslate-chrome/" target="_blank">Firefox addons</a> <em>(old version with limited support)</em></li>
        <li><a href="https://github.com/ixrock/XTranslate" target="_blank">Github</a> <em>(from source code)</em></li>
      </ul>

      <h3>Features:</h3>
      <hr/>
      <p>Many ways to get translation of text from the page:</p>
      <ul>
        <li>double-click on the word</li>
      </ul>
      <p>select text and get immediate translation after one of:</p>
      <ol>
        <li>Press hotkey defined in extension settings (<em>Alt+Shift+X</em> by default)</li>
        <li>Click on the translate icon appeared near selected text</li>
        <li>Click on selected text (turned off by default)</li>
        <li>Just release mouse button (turned off by default)</li>
        <li>Write text in input fields, mouse over it and press hotkey</li>
        <li>Press context menu on the page and select item to get translation in place or translate whole page in new tab with specific translation vendor</li>
      </ol>

      <p>
        You can get even some information from images by putting mouse cursor over the image element and
        press hotkey (title or alt attributes will be used, if applicable).
        This trick actually works with any element under mouse cursor. Just put mouse over item and press hotkey!
      </p>

      <h3>Translate texts in PDF-files (<small>this will replace default PDF-viewer with pdf.js (mozilla's custom viewer)</small>)</h3>

      <p>
        <em>In order to work with local files (HTML or PDF) allow access for the extension:</em>
      </p>
      <ol>
        <li>open extensions URL system page <code>chrome://extensions</code>, find <b>XTranslate</b>™ and click <em>[Details]</em> button</li>
        <li>enable checkbox <b>Allow access to file URLs</b></li>
      </ol>

      <h3>Free features of <em>XTranslate</em> extension are includes:</h3>

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

      <h3>Available translation vendors:</h3>
      <hr/>
      <ul>
        <li><a href="http://translate.google.com/" target="_blank">Google</a> (free)</li>
        <li><a href="http://translate.yandex.com/" target="_blank">Yandex</a> (free)</li>
        <li><a href="https://www.bing.com/translator" target="_blank">Bing</a> (free)</li>
        <li><a href="https://www.deepl.com/translator" target="_blank">DeepL</a> (free: API key limited to 500,000 chars/month)</li>
        <li><a href="https://platform.openai.com" target="_blank">OpenAI (ChatGPT authors)</a> (paid: register and top-up balance)</li>
      </ul>

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
          OpenAI api key handled via extension-scoped chrome.storage.local apis and used only within "Authorization" header to sign OpenAI API requests
          (which is not exposed or tracked, even if <a href="https://developer.chrome.com/docs/extensions/reference/api/webRequest">webRequest</a> API enabled in some other malicious extension)
        </li>
        <li>
          OpenAI requests goes through official OpenAI NPM-package and running only within background service-worker which helps with XSS-kind of attacks.
        </li>
        <li>
          Don't enter or share your OpenAI key anywhere else except extension's settings page (options page)
        </li>
      </ul>
      <hr/>
      <br/>
      <footer>
        Made with ♥ and open-source projects. Donate for free-version app support via <a href="https://www.paypal.me/romanesca" target="_blank">PayPal</a>
      </footer>
    </div>
  );
}

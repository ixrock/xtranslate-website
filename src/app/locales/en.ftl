-app-brand-name = XTranslate
header = {-app-brand-name} - your AI translator agent (browser extension)

#
# Installation info (titles & image alt(s))
#
install_from_chrome_store = Install from Chrome Extensions store
chrome_store_short = Chrome Extensions Store
install_from_ms_edge_store = Install from Microsoft Edge Extensions Store
ms_edge_store_short = MS Edge Store
install_from_github = Install from source code (Github)

#
# Main info
#
info_top1 =
    It will help you to learn and understand foreign languages and get <b>real-time text translation</b> of selected text
    from HTML or PDF documents and even get <b>full web-page text translation</b>.

info_top2 =
    Translate from 100+ foreign languages to your native language directly at web-site you're reading or
    type some text at extension main window to get <b>instant text translation</b>.

gallery_website_popup = Get translation in web page context, default popup theme
gallery_website_select_text = Different ways to get translation from selected page text, e.g. clicking by near-by [X]-icon
gallery_website_translation_results = Popup custom theme with action icons (LTR: Text-to-speech, Save to favorites, Copy translation, Next translation)
gallery_app_settings = Configure extension app settings
gallery_app_popup_customization = Configure theme, customize translation popup, choose your localization
gallery_app_translate_tab = Input text and get translation from main app window
gallery_app_history_tab = History of translations with import/export in JSON-format
gallery_pdf_translation = Translate foreign texts in PDF files
gallery_app_theme_dark = Dark theme for app window

install_extension_header = Install extension
install_chrome_store = Chrome Extensions Web Store
install_ms_addons = Microsoft Edge Add-ons
install_firefox = Firefox Addons
install_old_version = Install old version with limited support
install_from_sources = Install from source code

vendors_available_header = Available translation vendors
vendor_apis_is_free = free
vendor_apis_is_paid = paid
vendor_deepl_limitatiion = API key limited to 500,000 chars/month
vendor_open_ai_authors = ChatGPT authors
vendor_open_ai_limitation = register and top-up balance

#
# Features
#
features_header = Features
features_intro = Many ways to get <b>text translation</b> from all <b>webpages</b> and <b>PDF files</b>
feature_way1 = Double-click on the word
feature_way2 = Press hotkey defined in extension settings (<em>Alt+Shift+X</em> by default)
feature_way3 = Click on the translate icon appeared near selected text
feature_way4 = Click on selected text <em>(turned off by default)</em>
feature_way5 = Just release mouse button <em>(turned off by default)</em>
feature_way6 = Write text in input fields, mouse over it and press hotkey
feature_way7 = Get translation of selected text from via <em>{-app-brand-name}</em> context menu item

feature_way_full_page_translate =
    You can translate whole pages with <a href="https://translate.google.com/" target="_blank">Google</a>
    <span> or </span>
    <a href="https://translate.yandex.com" target="_blank">Yandex</a> services for free <em>(via context menu)</em>

feature_mouse_over_html_element_with_hotkey =
    You can get even some information from images by putting mouse cursor over the image element and
    press hotkey (title or alt attributes will be used, if applicable).
    This trick actually works with any element under mouse cursor. Just put mouse over item and press hotkey!

#
# PDF
#
pdf_feature_header = In order to work with local files (HTML or PDF) allow access for the extension
pdf_local_step1 = open extensions URL system page <code>chrome://extensions</code>, find <b>XTranslate</b>™ and click <em>[Details]</em> button
pdf_local_step2 = enable checkbox <em>Allow access to file URLs</em>

#
# Free-features info:
#
features_free_header = <b>Free features</b> of <em>{-app-brand-name}</em> extension are includes
features_free_tts = Listen text-to-speech for all supported translation vendors
features_free_adjust_popup = Adjust your unique design of the popup with translated text
features_free_custom_actions = Customize the ways of getting translations and other options in the settings
features_free_insert_text = Insert any text in app's window (<em>Alt+X</em> hotkey by default) and get translation of sentences or words with dictionary support
features_free_save_words = Save your favourite translations as quick bookmarks in history
features_free_history = View and edit history of translations

#
# Paid-features info:
#
features_paid_header = Pro features (paid subscription, awaited in 2025)
features_paid_full_pro_page_ai = Get full-page translations using AI technologies, e.g. OpenAI <em>(pay as you go)</em>
features_paid_voice_over = Use voice input/speech recognition for getting text translation
features_paid_multi_popup_results = Provide multiple translation results from all translation vendors at the same time
features_paid_more_interactivity = More interactions with translation popup-element at webpages (e.g. drag&drop, pin, resize, etc.)

#
# OpenAI how-to connect api-key
#
openai_access_header = Steps for access OpenAI translations
openai_access_sign_up = Sign up at OpenAI platform <a href="https://platform.openai.com">platform.openai.com</a>
openai_access_create_api_key = Create api access key to get access for OpenAI translation service results
openai_access_top_up_balance = Top-up your balance <em>(5$+)</em> and disable credit card's auto-top-up balance at billing page <em>(recommended)</em>
openai_access_adjust_limits = Don't forget to adjust limits settings <em>(recommended)</em>

#
# Security considerations
#
security_info_header = Security considerations
security_info1 =
    OpenAI api key handled via extension-scoped <code>chrome.storage.local</code> apis and used only within <code>Authorization</code> header to sign OpenAI API requests
    (which is not exposed or tracked, even if <a href="https://developer.chrome.com/docs/extensions/reference/api/webRequest">webRequest</a> API enabled in some other malicious extension)

security_info2 =
    OpenAI requests goes through official <a href="https://github.com/openai/openai-node" target="_blank">OpenAI NPM-package</a> and running only within background service-worker which helps
    with XSS-kind of attacks.

security_info3 = Don't enter or share your OpenAI key anywhere else except extension's settings page <em>(options page)</em>

#
# Footer
#
footer_info = Made with ♥ and open-source projects. Donate for free app version support via <a href="https://www.paypal.me/romanesca" target="_blank">PayPal</a>


#
# Other
#
supported_localization_header = Supported localization

total_ratings =
    (from <b>{$count}</b>
    <a href="https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo/reviews?hl=en" target="_blank">
        ratings</a>)


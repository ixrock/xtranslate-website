header = XTranslate — AI网页与文档翻译器
subheader = 无需离开页面即可即时翻译网站、PDF 和选中文本

user_menu_login = 登录
user_menu_logout = 登出
user_menu_link_account = 关联账号

install_from_chrome_store = 安装到 Google Chrome
chrome_store_short = Chrome 应用商店
install_from_ms_edge_store = 安装到 Microsoft Edge
ms_edge_store_short = Microsoft Edge 插件商店

main_info1 = 它帮助你学习和理解外语：在 {$htmlDocuments} 或 {$pdfDocuments} 中获取 {$textTranslation}，并支持完整的 {$fullPageTranslation}。
main_info1_textTranslation = 页面内即时文本翻译
main_info1_pdfDocuments = PDF 文档
main_info1_fullPageTranslation = 整页翻译
main_info2 = 直接在正在阅读的网站上，从 100 多种语言进行翻译，或在扩展窗口输入文本以获得 {$textTranslation}。
main_info2_textTranslation = 即时文本翻译

gallery_website_popup = 在页面上下文中显示翻译（默认主题）
gallery_website_select_text = 获取选中文本翻译的多种方式，例如点击 图标
gallery_app_settings = 应用基础设置
gallery_app_popup_customization = 自定义主题、翻译弹窗及界面语言
gallery_app_history_tab = 翻译历史，可导入/导出 JSON
gallery_pdf_translation = 翻译 PDF 文件中的外文内容
gallery_app_theme_dark = 选择应用窗口深色主题
gallery_context_menu_page_translate = 全页翻译的全局右键菜单项
gallery_context_menu_page_translated = 页面自动翻译已启用

install_extension_header = 安装扩展
install_chrome_store = Chrome 应用商店
install_ms_addons = Microsoft Edge 插件商店
install_firefox = Firefox 附加组件
install_old_version = 安装功能受限的旧版
install_from_sources = 从源代码安装

vendors_available_header = 可用翻译服务
vendor_apis_is_free = 免费
vendor_apis_is_paid = 付费
vendor_deepl_limitatiion = API 密钥每月限 500 000 字符

total_ratings = （基于 {$count} 条 {$ratingsLink}）
total_ratings_ratingsLink = 评价
total_rating_users = {$usersCount} 位用户 {$fromStores}
total_rating_users_fromStores = （来自 Chrome 与 Edge 商店）

# Plans
plans_compare_title = 比较方案
plans_free_title = 免费（基础功能）
plans_pro_title = PRO（月度订阅 / ⭐ 最受欢迎）

free_plan_inplace = 无限量翻译页面上选中的文本
free_plan_fullpage = 通过 Google 翻译 API 和 Bing 翻译器无限量整页翻译
free_plan_tts = 使用 Google 翻译 API 与浏览器内置语音合成朗读文本
free_plan_ownkey_limit = 使用自有 AI API 密钥整页翻译每天限 { $pagesCount } 页
free_plan_pdf = 翻译 PDF 文件中的选中文本
free_plan_history = 翻译历史

pro_plan_freeplus = Free 的所有功能，再加：
pro_plan_tokens_value = 100 万 AI 令牌
pro_plan_tokens_note = （≈ 75 万词 ≈ 1 000–1 500 页书 ≈ 3 000 网页）
pro_plan_tokens = 用于高质量文本与整页翻译的 { $tokens_value } { $tokens_note }
pro_plan_voice = 1 小时逼真 AI 语音
pro_plan_ownkey = 使用自选 AI 提供商（OpenAI、DeepSeek、Grok）— 无日翻页限制
pro_plan_support = 快速响应的电子邮件支持
pro_plan_noads = 100% 无广告
pro_plan_summarize = 将任何文本转化为简洁摘要和更智能的措辞——由 AI 赋能。
pro_plan_footnote = PRO 方案已满足绝大多数用户需求。

# Features
features_header = 功能
features_intro = 多种方式翻译网页文本：
features_fullpage = 获取 { $fullpage_text_translation } ({ $fullpage_text_notes })
features_fullpage_text_translation = 整页翻译
features_fullpage_text_notes = 通过浏览器右键菜单、扩展栏图标或应用主窗口
features_dblclick = 双击单词即可在页面内翻译
features_icon = 选中文本后点击旁边出现的翻译图标
features_click_selected = 点击已选中文本 ({ $turned_off_by_default })
features_after_selection = 选中文本后立即显示翻译 ({ $turned_off_by_default })
features_turned_off_by_default = 默认关闭
features_hotkey = 将鼠标悬停在文本块上，按下设定的快捷键 ({ $hotkey_default })
features_hotkey_default = 默认 Alt+Shift+X
features_pdf = { $pdf_translation } ({ $pdf_requirements })
features_pdf_translation = 支持 PDF 文件内联翻译
features_pdf_requirements = 需在设置中启用内置 PDF.js 查看器
features_input_tab = 在扩展窗口「翻译」标签页输入文本；建议在系统页面 { $shortcuts_url } 设置快捷键
features_tts = 通过所有支持的提供商（如 { $tts_providers }）或浏览器内置语音引擎 { $tts_listen }
features_tts_listen = 收听文本朗读 (TTS)
features_bookmark = 将收藏的翻译保存为快速书签到历史记录
features_customize = 自定义翻译窗口外观 — 字体大小、颜色等
features_history = 查看并编辑翻译历史

# Footer
security_info_header = 使用自有 API 密钥时的安全性
security_info_api_key_store = 你的 API 密钥（如 { $providersList }）保存在 { $apiKeyStorage } 中，仅用于 HTTP 头 { $authHeader } 签名请求（即使在其他扩展中启用了 { $webRequestApi } 也不会泄露或被跟踪）。
security_info_anti_xss = AI 翻译的 HTTP 请求通过 { $aiConnectionProvider } 官方 NPM 包在扩展后台进程中执行，普通网页无法访问，可防止 XSS 类攻击。
security_info_stay_safe = 请勿在扩展设置页面之外输入或分享你的 API 密钥。
security_info_other_recommendations = 建议关闭 AI 提供商的平台自动充值功能

footer_info = 由 ♥ 与开源项目驱动

# Early-access page
early_access_button_label = 整页 AI 翻译
early_access_button_label_extra = 立享 8 折优惠 🚀
early_access_header = AI 页面翻译抢先体验
early_access_header_subheader = 获取上线提醒，并享受首月 8 折优惠。
early_access_button_add = 申请体验
early_access_button_adding = 正在提交…
early_access_success = 你已在名单中！上线时我们会邮件通知。🎉
early_access_error = 哎呀！出问题了。请稍后再试。
early_access_nospam_info = 我们不发垃圾邮件，仅上线时发送一封。
early_access_login_first = 请登录后再提交申请

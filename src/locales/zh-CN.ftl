-app-brand-name = XTranslate
header = {-app-brand-name} - 您的 AI 翻译助手（浏览器扩展）

#
# Installation info (titles & image alt(s))
#
install_from_chrome_store = 从 Chrome 扩展商店安装
chrome_store_short = Chrome 扩展商店
install_from_ms_edge_store = 从 Microsoft Edge 扩展商店安装
ms_edge_store_short = MS Edge 商店
install_from_github = 从源代码（Github）安装

#
# Main info
#
info_top1 =
    它将帮助您学习并理解外语，并能对选定的文本进行<b>实时翻译</b>
        （从 HTML 或 PDF 文档），甚至可以<b>翻译整个网页上的文本</b>。

info_top2 =
    可以直接在您正在阅读的网站上，从 100 多种外语翻译成您的母语，
        或者在扩展主窗口中输入一些文本，以获取<b>即时文本翻译</b>。

gallery_website_popup = 在网页上下文中获取翻译，默认弹窗主题
gallery_website_select_text = 从选定文本中获取翻译的多种方式，例如点击附近的 [X] 图标
gallery_website_translation_results = 带有操作图标的自定义弹窗主题（从左到右：文本朗读、收藏到收藏夹、复制翻译、下一条翻译）
gallery_app_settings = 配置扩展的应用设置
gallery_app_popup_customization = 配置主题，自定义翻译弹窗，选择本地化语言
gallery_app_translate_tab = 在主应用窗口中输入文本并获取翻译
gallery_app_history_tab = 查看翻译历史，并可使用 JSON 格式导入/导出
gallery_pdf_translation = 翻译 PDF 文件中的外文文本
gallery_app_theme_dark = 应用窗口的深色主题

install_extension_header = 安装扩展
install_chrome_store = Chrome 扩展商店
install_ms_addons = Microsoft Edge 附加组件
install_firefox = Firefox 附加组件
install_old_version = 安装旧版本（支持有限）
install_from_sources = 从源代码安装

vendors_available_header = 可用的翻译服务提供商
vendor_apis_is_free = 免费
vendor_apis_is_paid = 付费
vendor_deepl_limitatiion = API 密钥每月限制 500,000 个字符
vendor_open_ai_authors = ChatGPT 作者
vendor_open_ai_limitation = 注册并充值余额

#
# Features
#
features_header = 功能
features_intro = 获取来自所有<b>网页</b>和<b>PDF 文件</b>的<b>文本翻译</b>的多种方式
feature_way1 = 双击某个单词
feature_way2 = 按扩展设置中定义的快捷键（默认 <em>Alt+Shift+X</em>）
feature_way3 = 点击选中的文本附近出现的翻译图标
feature_way4 = 点击选中的文本 <em>（默认关闭）</em>
feature_way5 = 仅松开鼠标按钮 <em>（默认关闭）</em>
feature_way6 = 在输入框中输入文本，将鼠标悬停在上面，然后按快捷键
feature_way7 = 通过 <em>{-app-brand-name}</em> 的右键菜单项目获取选中文字的翻译

feature_way_full_page_translate =
    您可以使用 <a href="https://translate.google.com/" target="_blank">Google</a>
        <span> 或 </span>
        <a href="https://translate.yandex.com" target="_blank">Yandex</a> 免费翻译整页 <em>（通过右键菜单）</em>

feature_mouse_over_html_element_with_hotkey =
    甚至可以从图片中获取一些信息，只需将鼠标指针放在图片元素上，
        然后按下快捷键（如果存在，将使用图片的 title 或 alt 属性）。
        这个技巧实际上适用于鼠标指针下的任何元素。只需将鼠标移到元素上并按快捷键！

#
# PDF
#
pdf_feature_header = 如需使用本地文件（HTML 或 PDF），请为扩展授予访问权限
pdf_local_step1 = 打开扩展管理页面 <code>chrome://extensions</code>，找到 <b>XTranslate</b>™ 并点击 <em>[Details]</em> 按钮
pdf_local_step2 = 启用 <em>Allow access to file URLs</em> 复选框

#
# Free-features info:
#
features_free_header = 免费功能（<em>{-app-brand-name}</em> 扩展包含）
features_free_tts = 所有支持的翻译服务均可进行文本朗读
features_free_adjust_popup = 您可自定义带有翻译文本的弹窗设计
features_free_custom_actions = 在设置中自定义翻译方式及其他选项
features_free_insert_text = 在应用窗口（默认快捷键 <em>Alt+X</em>）中输入任意文本，获取句子或单词翻译，并支持词典功能
features_free_save_words = 将喜欢的翻译保存在收藏夹中
features_free_history = 查看并编辑翻译历史

#
# OpenAI how-to connect api-key
#
openai_access_header = 获取 OpenAI 翻译服务的步骤
openai_access_sign_up = 在 OpenAI 平台注册账号 <a href="https://platform.openai.com">platform.openai.com</a>
openai_access_create_api_key = 创建 API 密钥以使用 OpenAI 翻译服务
openai_access_top_up_balance = 充值余额 <em>（5 美元+）</em>，并在账单页面关闭信用卡自动充值功能 <em>（推荐）</em>

#
# Security considerations
#
security_info_header = 安全注意事项
security_info1 =
    OpenAI API 密钥通过扩展作用域的 <code>chrome.storage.local</code> API 进行管理，
        仅用于在 <code>Authorization</code> 头中对 OpenAI API 请求进行签名
        （即使在其他恶意扩展启用了 <a href="https://developer.chrome.com/docs/extensions/reference/api/webRequest">webRequest</a> API，该密钥也不会被暴露或跟踪）

security_info2 =
    OpenAI 请求通过官方的 <a href="https://github.com/openai/openai-node" target="_blank">OpenAI NPM 包</a> 发送，
        并只在后台的 service-worker 中运行，有助于防范 XSS 类型的攻击。

security_info3 = 请勿在扩展设置页面（<em>options page</em>）之外的任何地方输入或共享您的 OpenAI 密钥

#
# Footer
#
footer_info = 由热爱与开源项目打造。如需支持免费版本的继续开发，可通过 <a href="https://www.paypal.me/romanesca" target="_blank">PayPal</a> 捐赠。

#
# Other
#
supported_localization_header = 支持的本地化语言

total_ratings =
    （来自 <b>{$count}</b>
        条
        <a href="https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo/reviews?hl=zh-CN" target="_blank">
            评分</a>）

total_rating_users_globe = <b>{$usersCount}</b> 用户 <em>（来自 Chrome 和 Edge 商店）</em>

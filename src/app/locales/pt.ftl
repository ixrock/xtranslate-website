-app-brand-name = XTranslate
header = {-app-brand-name} - seu assistente de tradução com IA (extensão de navegador)

#
# Installation info (titles & image alt(s))
#
install_from_chrome_store = Instalar a partir da Chrome Web Store
chrome_store_short = Chrome Web Store
install_from_ms_edge_store = Instalar a partir da Microsoft Edge Add-ons
ms_edge_store_short = Loja do MS Edge
install_from_github = Instalar a partir do código-fonte (Github)

#
# Main info
#
info_top1 =
    Ele ajuda você a aprender e entender idiomas estrangeiros, fornecendo <b>tradução em tempo real</b>
        do texto selecionado (a partir de documentos HTML ou PDF) e até mesmo traduzindo <b>todo o texto da página da Web</b>.

info_top2 =
    Traduza de mais de 100 idiomas estrangeiros para o seu idioma nativo diretamente no site que está lendo,
        ou digite algum texto na janela principal da extensão para obter uma <b>tradução instantânea</b>.

gallery_website_popup = Obtenha traduções no contexto da página da Web, tema padrão de pop-up
gallery_website_select_text = Diferentes maneiras de obter traduções a partir do texto selecionado, por exemplo, clicando no ícone [X] próximo
gallery_website_translation_results = Tema de pop-up personalizado com ícones de ação (da esquerda para a direita: texto-para-fala, salvar nos favoritos, copiar tradução, próxima tradução)
gallery_app_settings = Configurar as preferências do aplicativo da extensão
gallery_app_popup_customization = Configurar tema, personalizar o pop-up de tradução, escolher a sua localização
gallery_app_translate_tab = Inserir texto e obter a tradução na janela principal do app
gallery_app_history_tab = Histórico de traduções com importação/exportação em formato JSON
gallery_pdf_translation = Traduzir textos estrangeiros em arquivos PDF
gallery_app_theme_dark = Tema escuro para a janela do app

install_extension_header = Instalar extensão
install_chrome_store = Chrome Web Store
install_ms_addons = Microsoft Edge Add-ons
install_firefox = Complementos do Firefox
install_old_version = Instalar versão antiga com suporte limitado
install_from_sources = Instalar a partir do código-fonte

vendors_available_header = Fornecedores de tradução disponíveis
vendor_apis_is_free = gratuito
vendor_apis_is_paid = pago
vendor_deepl_limitatiion = Chave de API limitada a 500.000 caracteres/mês
vendor_open_ai_authors = Autores do ChatGPT
vendor_open_ai_limitation = é necessário se cadastrar e recarregar saldo

#
# Features
#
features_header = Recursos
features_intro = Várias maneiras de obter <b>tradução de texto</b> de todas as <b>páginas da Web</b> e arquivos <b>PDF</b>
feature_way1 = Clique duplo em uma palavra
feature_way2 = Pressione a tecla de atalho definida nas configurações da extensão (<em>Alt+Shift+X</em> por padrão)
feature_way3 = Clique no ícone de tradução que aparece perto do texto selecionado
feature_way4 = Clique no texto selecionado <em>(desativado por padrão)</em>
feature_way5 = Apenas solte o botão do mouse <em>(desativado por padrão)</em>
feature_way6 = Digite texto em campos de entrada, passe o mouse sobre eles e pressione a tecla de atalho
feature_way7 = Obter tradução de texto selecionado via item de menu de contexto do <em>{-app-brand-name}</em>

feature_way_full_page_translate =
    É possível traduzir páginas inteiras gratuitamente usando
        <a href="https://translate.google.com/" target="_blank">Google</a>
        <span> ou </span>
        <a href="https://translate.yandex.com" target="_blank">Yandex</a> <em>(via menu de contexto)</em>

feature_mouse_over_html_element_with_hotkey =
    Você pode até obter algumas informações de imagens apenas colocando o cursor do mouse sobre o elemento da imagem
        e pressionando a tecla de atalho (o atributo title ou alt será usado, se disponível).
        Esse truque, na verdade, funciona com qualquer elemento sob o cursor do mouse. Basta colocar o mouse sobre o elemento e pressionar a tecla de atalho!

#
# PDF
#
pdf_feature_header = Para trabalhar com arquivos locais (HTML ou PDF), permita o acesso da extensão
pdf_local_step1 = Abra a página de extensões do navegador <code>chrome://extensions</code>, localize <b>XTranslate</b>™ e clique no botão <em>[Details]</em>
pdf_local_step2 = Ative a caixa de seleção <em>Allow access to file URLs</em>

#
# Free-features info:
#
features_free_header = <b>Recursos gratuitos</b> incluídos na extensão <em>{-app-brand-name}</em>
features_free_tts = Ouvir texto em voz (text-to-speech) para todos os provedores de tradução suportados
features_free_adjust_popup = Personalizar o design do pop-up com o texto traduzido
features_free_custom_actions = Personalizar os métodos de obtenção de traduções e outras opções nas configurações
features_free_insert_text = Inserir qualquer texto na janela do app (<em>tecla de atalho padrão Alt+X</em>) e obter a tradução de frases ou palavras com suporte a dicionário
features_free_save_words = Salvar suas traduções favoritas como favoritos
features_free_history = Visualizar e editar o histórico de traduções

#
# Paid-features info:
#
features_paid_header = Recursos Pro (assinatura paga, esperado em 2025)
features_paid_full_pro_page_ai = Obter tradução de página completa usando tecnologias de IA, por exemplo, OpenAI <em>(pagamento conforme o uso)</em>
features_paid_voice_over = Usar entrada de voz/reconhecimento de fala para obter a tradução de texto
features_paid_multi_popup_results = Exibir simultaneamente vários resultados de tradução de todos os provedores
features_paid_more_interactivity = Mais interações com o pop-up de tradução em páginas da Web (por exemplo, arrastar e soltar, fixar, redimensionar etc.)

#
# OpenAI how-to connect api-key
#
openai_access_header = Etapas para acessar traduções da OpenAI
openai_access_sign_up = Cadastre-se na plataforma OpenAI <a href="https://platform.openai.com">platform.openai.com</a>
openai_access_create_api_key = Crie uma chave de API para obter resultados do serviço de tradução da OpenAI
openai_access_top_up_balance = Recarregue seu saldo <em>(5+ dólares)</em> e desative a recarga automática do cartão de crédito na página de cobrança <em>(recomendado)</em>
openai_access_adjust_limits = Não se esqueça de ajustar as configurações de limites <em>(recomendado)</em>

#
# Security considerations
#
security_info_header = Considerações de segurança
security_info1 =
    A chave de API da OpenAI é gerenciada por meio da API <code>chrome.storage.local</code> no escopo da extensão
        e é usada apenas no cabeçalho <code>Authorization</code> para assinar solicitações de API da OpenAI
        (não é exposta ou rastreada, mesmo que outra extensão mal-intencionada habilite a <a href="https://developer.chrome.com/docs/extensions/reference/api/webRequest">webRequest</a> API)

security_info2 =
    As solicitações da OpenAI são enviadas por meio do pacote oficial <a href="https://github.com/openai/openai-node" target="_blank">OpenAI NPM</a>
        e são executadas somente no service worker de segundo plano, ajudando a prevenir ataques do tipo XSS.

security_info3 = Não insira ou compartilhe sua chave OpenAI fora da página de configurações da extensão (<em>página de opções</em>)

#
# Footer
#
footer_info = Feito com amor e com projetos de código aberto. Ajude a manter a versão gratuita apoiando por meio do <a href="https://www.paypal.me/romanesca" target="_blank">PayPal</a>.

#
# Other
#
supported_localization_header = Localizações suportadas

total_ratings =
    (de <b>{$count}</b>
        <a href="https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo/reviews?hl=pt" target="_blank">
            avaliações</a>)

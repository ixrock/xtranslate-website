header = XTranslate — Traductor web y de documentos con IA
subheader = Traduce sitios, PDF y texto seleccionado al instante sin salir de la página

install_from_chrome_store = Instalar para Google Chrome
chrome_store_short = Chrome Web Store
install_from_ms_edge_store = Instalar para Microsoft Edge
ms_edge_store_short = Microsoft Edge Add-ons

main_info1 = Esto te ayuda a aprender y comprender idiomas extranjeros obteniendo {$textTranslation} del texto seleccionado en {$htmlDocuments} o {$pdfDocuments}, además de una {$fullPageTranslation} completa.
main_info1_textTranslation = traducción instantánea de texto in-situ
main_info1_pdfDocuments = documentos PDF
main_info1_fullPageTranslation = traducción de toda la página web
main_info2 = Traduce desde más de 100 idiomas directamente en el sitio que estás leyendo o introduce texto en la ventana de la extensión para obtener {$textTranslation}.
main_info2_textTranslation = traducción instantánea de texto

gallery_website_popup = Obtén la traducción en el contexto de la página, tema por defecto
gallery_website_select_text = Distintas formas de traducir texto seleccionado, p. ej. clic en el icono [X]
gallery_website_translation_results = Personalización del pop-up con la traducción (voz, guardar en Favoritos, copiar traducción, siguiente traducción)
gallery_app_settings = Configuración básica de la aplicación
gallery_app_popup_customization = Personalización del tema, del pop-up de traducción y selección de idioma
gallery_app_translate_tab = Introduce texto y obtén una traducción instantánea en la ventana principal de la aplicación
gallery_app_history_tab = Historial de traducciones guardadas con opción de importar/exportar en formato JSON
gallery_pdf_translation = Traducción de texto extranjero en archivos PDF
gallery_app_theme_dark = Selección del tema oscuro para la ventana de la aplicación
gallery_context_menu_page_translate = Opción en el menú contextual global para traducir toda la página
gallery_context_menu_page_translated = Traducción automática de página activada

install_extension_header = Instalar la extensión
install_chrome_store = Chrome Web Store
install_ms_addons = Microsoft Edge Add-ons
install_firefox = Complementos de Firefox
install_old_version = Instalar versión antigua con funciones limitadas
install_from_sources = Instalar desde el código fuente

vendors_available_header = Servicios de traducción disponibles
vendor_apis_is_free = gratis
vendor_apis_is_paid = de pago
vendor_deepl_limitatiion = La clave de API está limitada a 500 000 caracteres/mes

total_ratings = (basado en {$count} {$ratingsLink})
total_ratings_ratingsLink = reseñas
total_rating_users = {$usersCount} usuarios {$fromStores}
total_rating_users_fromStores = (de las tiendas de Chrome y Edge)

# Plans
plans_compare_title = Comparar planes
plans_free_title = GRATUITO (funciones básicas)
plans_pro_title = PRO (suscripción mensual / ⭐ el más popular)

free_plan_inplace = Traducción ilimitada del texto seleccionado en la página
free_plan_fullpage = Traducción ilimitada de página completa mediante API de Google Translate y Bing Translator
free_plan_tts = Lectura de texto mediante la API de Google Translate y el motor TTS integrado del navegador
free_plan_ownkey_limit = Traducción de página completa con servicios de IA mediante tu propia clave de API limitada a { $pagesCount } páginas al día
free_plan_pdf = Traducción de texto seleccionado en archivos PDF
free_plan_history = Historial de traducciones

pro_plan_freeplus = Todo lo del plan Free, y además:
pro_plan_tokens_value = 1 millón de tokens de IA
pro_plan_tokens_note = (≈ 750 mil palabras ≈ 1 000–1 500 págs. de libro ≈ 3 000 páginas web)
pro_plan_tokens = { $tokens_value } para traducciones de alta calidad de texto y páginas completas { $tokens_note }
pro_plan_voice = 1 hora de locución IA realista
pro_plan_ownkey = Usa tu propio proveedor de IA (OpenAI, DeepSeek, Grok) — sin límite de páginas diarias
pro_plan_support = Soporte por correo electrónico con respuesta rápida
pro_plan_noads = 100 % sin publicidad
pro_plan_footnote = La mayoría de los usuarios encuentran suficientes las funciones del plan PRO.

# Features
features_header = Funciones
features_intro = Muchas formas de traducir texto en las páginas web:
features_fullpage = Obtén { $fullpage_text_translation } ({ $fullpage_text_notes })
features_fullpage_text_translation = la traducción de la página completa
features_fullpage_text_notes = a través del menú contextual del navegador, el icono en la barra de extensiones o la ventana principal de la aplicación
features_dblclick = Traducción directa en la página al hacer doble clic en una palabra
features_icon = Selecciona texto y pulsa el icono de traducción (X) que aparece
features_click_selected = Haz clic en el texto seleccionado ({ $turned_off_by_default })
features_after_selection = Obtén la traducción automáticamente tras seleccionar texto ({ $turned_off_by_default })
features_turned_off_by_default = desactivado por defecto
features_hotkey = Pasa el cursor sobre un bloque de texto y pulsa la tecla rápida asignada ({ $hotkey_default })
features_hotkey_default = Alt+Shift+X por defecto
features_pdf = { $pdf_translation } ({ $pdf_requirements })
features_pdf_translation = Se admite la traducción in-situ en archivos PDF
features_pdf_requirements = requiere habilitar el visor integrado PDF.js en los ajustes
features_input_tab = Introduce texto en la pestaña «Traducir» de la ventana de la extensión; recomendamos asignar una tecla rápida en la página del sistema { $shortcuts_url }
features_tts = { $tts_listen } con todos los proveedores compatibles (p. ej., { $tts_providers }) o mediante el motor de síntesis de voz interno del navegador
features_tts_listen = Escucha la locución del texto (TTS)
features_bookmark = Guarda traducciones favoritas como marcadores rápidos en el historial
features_customize = Personaliza la apariencia de la ventana de traducción: tamaño de fuente, colores, etc.
features_history = Consulta y edita tu historial de traducciones

# Footer
security_info_header = Seguridad al usar claves de API propias
security_info_api_key_store = Tu clave de API (por ejemplo, { $providersList }) se almacena en { $apiKeyStorage } y solo se usa en la cabecera HTTP { $authHeader } para firmar las solicitudes (no se expone ni se rastrea, incluso si { $webRequestApi } está activado en otra extensión).
security_info_anti_xss = Las solicitudes HTTP para las traducciones de IA se realizan mediante el paquete oficial de NPM de { $aiConnectionProvider } y funcionan solo en el proceso en segundo plano de la extensión, inaccesible desde la página web normal, lo que protege contra ataques tipo XSS.
security_info_stay_safe = Nunca introduzcas ni compartas tus claves de API fuera de la página de ajustes de la extensión.
security_info_other_recommendations = Se recomienda desactivar la recarga automática de saldo en la plataforma del proveedor de IA.

footer_info = Hecho con ♥ gracias a proyectos de código abierto.

# Early-access page
early_access_button_label = Traducción IA de página completa
early_access_button_label_extra = Aprovecha el 20 % de descuento 🚀
early_access_header = Acceso anticipado a traducciones IA de páginas
early_access_header_subheader = Sé el primero en enterarte del lanzamiento y obtén un 20 % de descuento el primer mes.
early_access_button_add = Solicitar acceso
early_access_button_adding = Enviando…
early_access_success = ¡Estás en la lista! Te avisaremos por email. 🎉
early_access_nospam_info = Cero spam, solo un email cuando lancemos.

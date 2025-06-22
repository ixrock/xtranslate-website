// Localization (I18n)
import React, { ReactNode } from "react";
import DefaultLocale from "../locales/en.json";
import { getUserLang } from "@/actions/get-set-lang";

export const defaultLocale: Locale = "en";

export const Locales = {
  "en": { "english": "English", "native": "English" },
  "es": { "english": "Spanish", "native": "Español" },
  "ru": { "english": "Russian", "native": "Русский" },
  "zh-cn": { "english": "Chinese", "native": "简体中文" },
  "ja": { "english": "Japanese", "native": "日本語" },
};

export async function getLocalization() {
  const locale = await getUserLang();
  await loadLocale(locale);
  return (key: LocalizationKey, params?: MessageParams) => getMessage(locale, key, params);
}

export type Locale = keyof typeof Locales;
export type LocalizationFile = typeof DefaultLocale;
export type LocalizationKey = LeafPaths<LocalizationFile>;

export type MessagesMap = Record<Locale, Record<LocalizationKey, {
  value: string,
  placeholders?: {
    [paramName: string]: string; // TODO: add type-safety to param names
  }
}>>;

export const messagesMap: DeepPartial<MessagesMap> = {};
export const placeholderRegex = /\{\s*(\$\w+)\s*}/g;
export const placeholderWithValueRegex = /\{\s*\$(\w+)\s*(?:=\s*([^}]+?)\s*)?}/g;

type MessageParams = Record<string, ReactNode | ((value: string) => ReactNode)>;
type HasNonStringParams<T extends MessageParams> = Exclude<T[keyof T], string> extends never ? false : true;

export function getMessage<K extends LocalizationKey, P extends MessageParams>(
  locale: Locale,
  key: K,
  params: P & (HasNonStringParams<P> extends true ? unknown : never)
): ReactNode;

export function getMessage<K extends LocalizationKey, P extends MessageParams>(
  locale: Locale,
  key: K,
  params?: MessageParams,
): string;

export function getMessage(
  locale: Locale,
  key: LocalizationKey,
  params?: MessageParams,
): string | ReactNode {
  const message = messagesMap[locale]?.[key] ?? messagesMap[defaultLocale]?.[key];
  const template = message?.value ?? "";
  const placeholders = message?.placeholders;
  const containsReactNode = params && Object.values(params).some((v) => typeof v !== 'string');
  const templateParts = template.split(placeholderRegex);

  if (placeholders) {
    Object.keys(placeholders).forEach(paramName => {
      if (!params?.[paramName]) {
        console.warn(`[I18N]: missing placeholder "${paramName}" in "${key}"`)
      }
    })
  }

  const result = templateParts.map((part, index) => {
    const paramName = part.startsWith("$") ? part.slice(1) : "";

    if (paramName) {
      const localizedParamValue = placeholders?.[paramName] as string;
      let paramValue = params?.[paramName];
      if (typeof paramValue === "function") {
        paramValue = paramValue(localizedParamValue);
      }
      if (React.isValidElement(paramValue)) {
        paramValue = React.cloneElement(paramValue, { key: index });
      }
      return paramValue ?? localizedParamValue;
    }

    return part;
  });

  return containsReactNode ? result : result.join('');
}

export async function loadLocale(locale: Locale) {
  if (locale !== defaultLocale) {
    await loadLocale(defaultLocale); // fallback-locale must be always available
  }
  const rawLocale: LocalizationFile = await import(`../locales/${locale}.json`).then(module => module.default);
  parseMessages(locale, rawLocale, []);
}

function parseMessages(locale: Locale, rawData: LocalizationFile | object, parentPrefixPath: string[] = []) {
  const messages = messagesMap[locale] ??= {};

  Object.entries(rawData).forEach(([key, value]) => {
    const keyChain = [...parentPrefixPath, key];

    if (typeof value === "string") {
      const key = keyChain.join(".") as LocalizationKey;
      const message = messages[key] ??= {};
      message.value = value.replace(placeholderWithValueRegex, (v, paramName) => `{$${paramName}}`);

      Array.from(value.matchAll(placeholderWithValueRegex)).forEach(([, paramName, paramValue]) => {
        message.placeholders ??= {};
        message.placeholders[paramName] = paramValue;
      });
    } else if (typeof value === "object") {
      parseMessages(locale, value, keyChain);
    }
  });

  return messages;
}

export function formatNumber({ value, locale }: { value: number, locale: Locale }) {
  return new Intl.NumberFormat(locale).format(value);
}

export function formatPrice({ value, locale, currency = "USD" }: { value: number, locale: Locale, currency?: string }) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

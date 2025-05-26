// Fluent.js localization
// Docs: https://projectfluent.org/fluent/guide/index.html
// TODO: maybe switch to https://next-intl.dev/
import { FluentBundle, FluentResource, FluentVariable } from '@fluent/bundle';
import fs from 'fs';
import path from 'path';
import AvailableLocales from "@/locales/_locales.json";

export type Locale = keyof typeof AvailableLocales;

export const fallbackLocale: Locale = "en";

export function isAvailableLocale(locale: Locale | string): boolean {
  return !!AvailableLocales[locale as Locale];
}

export function loadFluentResource(locale: Locale = fallbackLocale) {
  const filePath = path.join(process.cwd(), `src/locales/${locale}.ftl`);
  const ftlContents = fs.readFileSync(filePath, 'utf8');
  return new FluentResource(ftlContents);
}

export function getFluentBundle(locale: Locale) {
  const bundle = new FluentBundle(locale);
  const messages = loadFluentResource(locale);
  bundle.addResource(messages);
  return bundle;
}

export interface MessagePayload {
  msgId: string
  locale: Locale
  params?: Record<string, FluentVariable>
}

export function getMessage(payload: MessagePayload): string {
  const { params, msgId, locale } = payload;
  const bundle = getFluentBundle(locale);
  const msgKey = bundle.getMessage(msgId)?.value ?? "";
  const msgValue = bundle.formatPattern(msgKey, params);
  if (!msgValue) {
    if (locale !== fallbackLocale) {
      return getMessage({ ...payload, locale: fallbackLocale });
    }
    return `[${msgId}:${locale.toUpperCase()}:404]`; // happens when translation is not found even in fallback locale
  }
  return msgValue;
}

export function isRTL(locale: string): boolean {
  return [
    "ar", // arabic
    "he", // hebrew
    "fa", // persian
    "ur", // urdu
  ].includes(locale);
}

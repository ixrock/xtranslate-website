// Fluent.js localization
// Docs: https://projectfluent.org/fluent/guide/index.html
import { FluentBundle, FluentResource, FluentVariable } from '@fluent/bundle';
import fs from 'fs';
import path from 'path';
import AvailableLocales from "@/app/locales/_locales.json";

export type Locale = keyof typeof AvailableLocales;

export const fallbackLocale: Locale = "en";

export function isAvailableLocale(locale: Locale | string): boolean {
  return !!AvailableLocales[locale as Locale];
}

function loadFluentResource(locale: Locale = fallbackLocale) {
  const filePath = path.join(process.cwd(), `src/app/locales/${locale}.ftl`);
  const ftlContents = fs.readFileSync(filePath, 'utf8');
  return new FluentResource(ftlContents);
}

export function getFluentBundle(locale: Locale) {
  const bundle = new FluentBundle(locale);
  const messages = loadFluentResource(locale);
  bundle.addResource(messages);
  return bundle;
}

export interface MessageParams {
  msgId: string
  locale: Locale
  bundle: FluentBundle
  params?: Record<string, FluentVariable>
}

export function getMessage({ bundle, params, msgId, locale }: MessageParams): string {
  const msgKey = bundle.getMessage(msgId)?.value;

  if (msgKey) {
    return bundle.formatPattern(msgKey, params);
  }

  return `[[I18N-404 msgId="${msgId}", locale="${locale}"]]`;
}

export function isRTL(locale: string): boolean {
  return [
    "ar", // arabic
    "he", // hebrew
    "fa", // persian
    "ur", // urdu
  ].includes(locale);
}

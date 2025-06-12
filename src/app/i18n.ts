// Fluent.js localization
// Docs: https://projectfluent.org/fluent/guide/index.html
// TODO: maybe switch to https://next-intl.dev/
import type React from "react";
import type { PatternElement } from "@fluent/bundle/esm/ast"
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
  const bundle = new FluentBundle(locale, { useIsolating: false });
  const messages = loadFluentResource(locale);
  bundle.addResource(messages);
  return bundle;
}

export interface Message {
  locale: Locale
  msgId: string
  placeholders?: MessagePlaceholders;
}

export type MessagePlaceholders = Record<string, FluentVariable>;

export function getMessage(payload: Required<Message>): string;
export function getMessage(payload: Message): React.ReactNode {
  const { placeholders = {}, msgId, locale } = payload;
  const errors: Error[] = [];
  const bundle = getFluentBundle(locale);
  const msgKey = bundle.getMessage(msgId)?.value ?? "";
  const msgValue = bundle.formatPattern(msgKey, placeholders, errors);
  const hasReactPlaceholders = errors.some(isFluentVariableUnsupportedError);

  if (!msgValue && locale !== fallbackLocale) {
    return getMessage({ ...payload, locale: fallbackLocale } as Required<Message>);
  }

  if (hasReactPlaceholders) {
    return Array.from(msgKey).map((msgChunk: PatternElement) => {
      if (typeof msgChunk == "string") {
        return msgChunk;
      } else if (msgChunk.type === "var") {
        const paramName = msgChunk.name;
        return placeholders[paramName] as string; // ReactNode | React.Fragment
      }
    })
  }

  return msgValue;
}

export function isFluentVariableUnsupportedError(error: Error | string) {
  return String(error).includes("Variable type not supported");
}

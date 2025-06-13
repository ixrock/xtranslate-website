// Localization (I18n)
// Docs: https://projectfluent.org/fluent/guide/index.html
// TODO: maybe switch to https://next-intl.dev/
import fs from 'fs';
import path from 'path';
import type { ReactNode } from "react";
import type { PatternElement } from "@fluent/bundle/esm/ast"
import { FluentBundle, FluentResource, FluentVariable } from '@fluent/bundle';
import { defaultLocale, Locale } from "@/app/config";

export function loadFluentResource(locale: Locale = defaultLocale) {
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
  msgId: string
  placeholders?: MessagePlaceholders;
  locale?: Locale
}

export type MessagePlaceholders = Record<string, FluentVariable>;

export function getMessage(payload: Required<Message>): string;
export function getMessage(payload: Message): ReactNode {
  const {
    msgId,
    placeholders = {},
    locale = defaultLocale,
  } = payload;

  const errors: Error[] = [];
  const bundle = getFluentBundle(locale);
  const msgKey = bundle.getMessage(msgId)?.value ?? "";
  const msgValue = bundle.formatPattern(msgKey, placeholders, errors);
  const hasReactPlaceholders = errors.some(err => String(err).includes("Variable type not supported"));

  if (!msgValue && locale !== defaultLocale) {
    return getMessage({
      msgId,
      placeholders,
      locale: defaultLocale,
    } as Required<Message>);
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

export function formatNumber(params: { value: number, locale?: Locale }) {
  const {
    value,
    locale = defaultLocale
  } = params;

  return new Intl.NumberFormat(locale).format(value);
}

export function formatPrice(params: { value: number, locale?: Locale, currency?: string }): string {
  const {
    value,
    locale = defaultLocale,
    currency = "USD",
  } = params;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

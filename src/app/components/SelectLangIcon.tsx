"use client";

import styles from './SelectLangIcon.module.css';
import React from 'react';
import classNames from "classnames";
import { Icon } from "@/app/components/Icon";
import SelectLangSvg from "@/app/components/SelectLang.svg"
import { Locale, Locales } from "@/app/config";

export interface SelectLanguageProps {
  className?: string;
  locale: Locale;
}

export function SelectLanguage({ className, locale: userLocale }: SelectLanguageProps) {
  function onLangChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const locale = evt.target.value;
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("lang", locale);
    location.search = queryParams.toString();
  }

  return (
    <div className={classNames(styles.SelectLang, className)}>
      <Icon svgFill>
        <SelectLangSvg/>
      </Icon>
      <select value={userLocale} onChange={onLangChange}>
        {Object.entries(Locales).map(([locale, { native, english }]) => {
          return (
            <option key={locale} value={locale} disabled={userLocale === locale}>
              {english} ({native})
            </option>
          )
        })}
      </select>
    </div>
  )
}

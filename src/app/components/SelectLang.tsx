"use client";

import styles from './SelectLang.module.css';
import React from 'react';
import AvailableLocales from "@/locales/_locales.json";
import { Icon } from "@/app/components/Icon";
import SelectLangSvg from "@/app/components/SelectLang.svg"

export interface SelectLanguageProps {
  locale: string;
}

export function SelectLanguage({ locale: currentLocale }: SelectLanguageProps) {
  function onChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    document.location.href = `/${evt.target.value}`;
  }

  return (
    <div className={styles.SelectLang}>
      <Icon>
        <SelectLangSvg/>
      </Icon>
      <select value={currentLocale} onChange={onChange}>
        {Object.entries(AvailableLocales).map(([locale, { native, english }]) => {
          return (
            <option key={locale} value={locale} disabled={currentLocale === locale}>
              {english} ({native})
            </option>
          )
        })}
      </select>
    </div>
  )
}

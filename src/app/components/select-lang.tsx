"use client";

import styles from './select-lang.module.css';
import React from 'react';
import AvailableLocales from "@/app/locales/_locales.json";
import SelectLanguageIcon from "./select-lang.svg"

export interface SelectLanguageProps {
  locale: string;
}

export function SelectLanguage({ locale: currentLocale }: SelectLanguageProps) {
  function onChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    document.location.href = `/${evt.target.value}`;
  }

  return (
    <div className={styles.selectLang}>
      <SelectLanguageIcon/>
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

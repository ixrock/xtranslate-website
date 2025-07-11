"use client";

import styles from './SelectLangIcon.module.css';
import React from 'react';
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { Locales } from "@/app/i18n";
import { Icon } from "@/app/components/Icon";
import SelectLangSvg from "@/app/components/SelectLang.svg"
import { LocaleContext } from "@/app/context/LocaleContext";

export interface SelectLanguageProps {
  className?: string;
}

export function SelectLanguage({ className }: SelectLanguageProps) {
  const lang = React.use(LocaleContext);
  const router = useRouter();

  function onLangChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const locale = evt.target.value;
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("lang", locale);
    router.push(`?${queryParams}`, { scroll: false });
  }

  return (
    <div className={classNames(styles.SelectLang, className)}>
      <Icon svgFill>
        <SelectLangSvg/>
      </Icon>
      <select value={lang} onChange={onLangChange}>
        {Object.entries(Locales).map(([locale, { native, english }]) => {
          return (
            <option key={locale} value={locale} disabled={lang === locale}>
              {english} ({native})
            </option>
          )
        })}
      </select>
    </div>
  )
}

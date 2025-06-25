/**
 * Client-side component React-hook for getting localization from (@/app/i18n)
 */

import React, { ReactNode, useEffect } from "react";
import { getMessage, loadLocale, LocalizationKey, LocalizedMessages } from "@/app/i18n";
import { PageContext } from "@/app/context/PageContext";

export function useLocalization() {
  const { lang: locale } = React.use(PageContext);
  const [localization, setLocalization] = React.useState<LocalizedMessages>();

  useEffect(() => {
    loadLocale(locale).then((localization = {}) => {
      console.info(`LOADED LOCALE: ${locale}`, localization);
      setLocalization(localization);
    });
  }, [locale]);

  return {
    isReady: !!localization,
    locale,
    localization,
    t: (key: LocalizationKey, params?: Record<string, ReactNode>) => getMessage(locale, key, localization ?? {}, params)
  };
}

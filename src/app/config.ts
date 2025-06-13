// Common variables for any environment

import Locales from "@/locales/_locales.json";

export type Locale = keyof typeof Locales;
export const defaultLocale: Locale = "en";
export { Locales }

export const websiteUrl = "https://www.xtranslate.dev/";
export const githubRepoUrl = "https://github.com/ixrock/XTranslate";
export const chromeStoreUrl = "https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo";
export const edgeStoreUrl = "https://microsoftedge.microsoft.com/addons/detail/xtranslate/cinfaflgbaachkaamaeglolofeahelkd";

export const subscriptionPlan = {
  MONTHLY_PRICE_USD_CENTS: 500, // $5
  MONTHLY_PLAN_TEXT_TOKENS: 1_000_000, // 1M
  MONTHLY_PLAN_TTS_SECONDS: 3_600, // 1h
  FREE_PLAN_TEXT_TOKENS: 10_000, // 10k
  FREE_PLAN_TTS_SECONDS: 300, // 5m
} as const;

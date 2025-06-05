// Common config

export const extensionGithubRepoUrl = "https://github.com/ixrock/XTranslate";

export const appConfig = {
  MONTHLY_PRICE_USD_CENTS: 500, // $5
  MONTHLY_PLAN_TEXT_TOKENS: 1_000_000, // 1M
  MONTHLY_PLAN_TTS_SECONDS: 3_600, // 1h
  FREE_PLAN_TEXT_TOKENS: 10_000, // 10k
  FREE_PLAN_TTS_SECONDS: 300, // 5m
} as const/*readonly*/;

export function getMonthlyPriceUSD(locale = "en-US"): string {
  const priceUSD = appConfig.MONTHLY_PRICE_USD_CENTS / 100;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  }).format(priceUSD);
}

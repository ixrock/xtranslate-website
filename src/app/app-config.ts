// Common config

export class AppConfig {
  static readonly MONTHLY_PRICE_USD_CENTS = 500; // $5
  static readonly MONTHLY_PLAN_TEXT_TOKENS = 1_000_000; // 1M
  static readonly MONTHLY_PLAN_TTS_SECONDS = 3_600; // 1h
  static readonly FREE_PLAN_TEXT_TOKENS = 10_000; // 10k
  static readonly FREE_PLAN_TTS_SECONDS = 300; // 5m
}

export function getMonthlyPriceUSD(locale = "en-US"): string {
  const priceUSD = AppConfig.MONTHLY_PRICE_USD_CENTS / 100;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  }).format(priceUSD);
}

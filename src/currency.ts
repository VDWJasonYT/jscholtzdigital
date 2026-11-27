import { createContext, createElement, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

/*
 * USD amounts converted from Jason's ZAR list at 1 USD = 17.536372 ZAR.
 * Source: ExchangeRate-API (https://open.er-api.com/v6/latest/USD),
 * last updated 27 November 2026, 00:02:31 UTC (02:02 SAST).
 * Rounding: nearest $5 under $100, nearest $10 under $1,000, nearest $50 at $1,000 and above.
 * Exception: Facebook Ad Generation stays $2,000/mo in USD, as set by Jason.
 * Values are hard-coded. The site does not fetch live FX rates.
 */
export const FX = {
  usdZar: 17.536372,
  source: "ExchangeRate-API",
  date: "2026-11-27",
  updatedUtc: "2026-11-27T00:02:31Z",
} as const;

export type Currency = "ZAR" | "USD";

export const PRICE = {
  onePage: { zar: 4500, usd: 260, from: true },
  multiPage: { zar: 12000, usd: 680, from: true },
  customApp: { zar: 80000, usd: 4550, from: true },
  care: { zar: 700, usd: 40, period: "mo" as const },
  gbp: { zar: 1200, usd: 70 },
  ads: { zar: 4000, usd: 230, period: "mo" as const },
  security: { zar: 2500, usd: 140 },
  facebookAds: { zar: 7500, usd: 2000, period: "mo" as const },
  starterSetup: { zar: 9500, usd: 540 },
  starterMonthly: { zar: 8500, usd: 480, period: "mo" as const },
  growthSetup: { zar: 18000, usd: 1050 },
  growthMonthly: { zar: 9500, usd: 540, period: "mo" as const },
  premiumSetup: { zar: 38000, usd: 2150 },
  premiumMonthly: { zar: 15000, usd: 860, period: "mo" as const },
  adSpend: { zar: 3000, usd: 170, period: "mo" as const },
} as const;

export type PriceId = keyof typeof PRICE;

const STORAGE_KEY = "jsd-currency";

export function detectCurrency(): Currency {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ZAR" || saved === "USD") return saved;
  } catch {
    /* localStorage can be blocked */
  }

  let timeZone = "";
  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  } catch {
    timeZone = "";
  }

  if (timeZone === "Africa/Johannesburg") return "ZAR";
  if (timeZone) return "USD";

  try {
    const lang = navigator.language || navigator.languages?.[0] || "";
    if (/-ZA$/i.test(lang)) return "ZAR";
  } catch {
    /* navigator can be missing */
  }

  return "USD";
}

export function persistCurrency(currency: Currency) {
  try {
    localStorage.setItem(STORAGE_KEY, currency);
  } catch {
    /* localStorage can be blocked */
  }
}

/** Format a number as R4,500 or $250, matching current site copy. */
export function formatAmount(amount: number, currency: Currency): string {
  if (currency === "ZAR") {
    const formatted = new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
    // en-ZA renders "R 4 500" with spaces. Existing copy uses R4,500.
    return formatted.replace(/R\s*/, "R").replace(/[\u00A0\u202F\s]/g, ",");
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPrice(
  id: PriceId,
  currency: Currency,
  opts?: { prefix?: boolean; period?: boolean },
): string {
  const p = PRICE[id];
  const includePrefix = opts?.prefix ?? ("from" in p && p.from === true);
  const includePeriod = opts?.period ?? ("period" in p && p.period === "mo");
  const amount = currency === "USD" ? p.usd : p.zar;
  let out = formatAmount(amount, currency);
  if (includePrefix) out = `from ${out}`;
  if (includePeriod) out = `${out}/mo`;
  return out;
}

export function currencyLabel(currency: Currency): string {
  return currency === "ZAR" ? "Prices in South African rand (ZAR)." : "Prices in US dollars (USD).";
}

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => detectCurrency());
  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    persistCurrency(next);
  }, []);
  const value = useMemo(() => ({ currency, setCurrency }), [currency, setCurrency]);
  return createElement(CurrencyContext.Provider, { value }, children);
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}

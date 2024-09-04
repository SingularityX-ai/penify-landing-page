import { useCallback, useEffect, useState } from "react";

export type CurrencyOptions = "USD" | "INR";

export function useCurrencyConversion() {
  const [currency, setCurrency] = useState<CurrencyOptions>(() => {
    const saved = localStorage.getItem("selected-currency");
    return saved ? (JSON.parse(saved) as CurrencyOptions) : "USD";
  });

  const [exchangeRate, setExchangeRate] = useState<number>(82);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://production-gateway.snorkell.ai/api/v1/analytics/conversionRates"
        );
        const data = await response.json();
        setExchangeRate(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchExchangeRate();
  }, []);

  const getCurrency = useCallback(
    (priceInUSD: number) => {
      if (!currency) return priceInUSD;

      switch (currency) {
        case "USD":
          return priceInUSD;
        case "INR":
          return Math.round(priceInUSD * exchangeRate);
        default:
          return priceInUSD;
      }
    },
    [currency, exchangeRate]
  );

  const handleCurrencyChange = useCallback((code: CurrencyOptions) => {
    setCurrency(code);

    const url = new URL(window.location.href);
    url.searchParams.set("currency", code);
    window.history.pushState({}, "", url.toString());
  }, []);

  return {
    currency,
    handleCurrencyChange,
    getCurrency,
  };
}

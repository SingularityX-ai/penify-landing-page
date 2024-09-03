import { useCallback, useEffect, useState } from "react";

export type CurrencyOptions = "USD" | "INR";

export function useCurrencyConversion() {
  const [currency, setCurrency] = useState<CurrencyOptions>(() => {
    const saved = localStorage.getItem("selected-currency");
    return (saved as CurrencyOptions) || "USD";
  });

  const [exchangeRate, setExchangeRate] = useState<number>(82);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/analytics/conversionRates`
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
          return Math.round((priceInUSD * exchangeRate));
        default:
          return priceInUSD;
      }
    },
    [currency, exchangeRate]
  );

  const handleCurrencyChange = (code: CurrencyOptions) => setCurrency(code);

  return {
    currency,
    handleCurrencyChange,
    getCurrency,
  };
}

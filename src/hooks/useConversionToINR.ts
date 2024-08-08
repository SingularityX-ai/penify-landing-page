import { axiosInstance } from "@/config/axiosConfig";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export type CurrencyType = "USD" | "INR";

const exchangeRateUSDToINR = 83;


export const useConversionToINR = () => {
  const router = useRouter();
  const [currency, setCurrency] = useState<CurrencyType>(
    (router.query.currency as CurrencyType) || "INR"
  ); // Default currency
  const [exchangeRate, setExchangeRate] = useState(exchangeRateUSDToINR);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);

  useEffect(() => {
    
    const fetchExchangeRate = async () => {
      try {
        const { data } = await axiosInstance.get<number>(
          "/v1/analytics/conversionRates"
        );
        setExchangeRate(data);
      } catch (err) {
        console.error("Error fetching conversion rates: ", err);
        setExchangeRate(exchangeRateUSDToINR);
      }
    };

    fetchExchangeRate();
  }, []);

  useEffect(() => {
    const currencyFromQuery = router.query.currency as CurrencyType;

    if (currencyFromQuery && currencyFromQuery !== currency) {
      setCurrency(currencyFromQuery);
    }
  }, [router.query.currency]);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const updateCurrency = useCallback((newCurrency: CurrencyType) => {
    setCurrency(newCurrency);
    setIsDropdownOpen(false);
    
    // Update URL without causing navigation
    const url = new URL(window.location.href);
    url.searchParams.set('currency', newCurrency);
    window.history.pushState({}, '', url.toString());
  }, []);

  const getCurrencySymbol = useCallback(() => {
    return currency === "USD" ? "$" : "₹";
  }, [currency]);

  const convertPrice = useCallback(
    (priceInUSD: number) => {
      const convertedPrice =
        currency === "USD" ? priceInUSD : priceInUSD * exchangeRate;

        if (!isAnnualBilling) {
          return convertedPrice.toFixed(0);
        } else {
          return parseFloat(convertedPrice.toFixed(0)) * 12;
        }

    },
    [currency, exchangeRate, isAnnualBilling]
  );

  return {
    currency,
    isDropdownOpen,
    toggleDropdown,
    updateCurrency,
    getCurrencySymbol,
    convertPrice,
    isAnnualBilling,
    setIsAnnualBilling
  };
};

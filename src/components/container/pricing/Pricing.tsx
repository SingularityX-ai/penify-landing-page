import { useConversionToINR } from "@/hooks/useConversionToINR";
import { PricingDropdown } from "./pricingDropdown/pricingDropdown";
import { useEffect } from "react";

export const Pricing = () => {
  const { currency, updateCurrency, isDropdownOpen, toggleDropdown } =
    useConversionToINR();

  useEffect(() => console.log(currency), [currency]);

  return (
    <section className="section pricing-bsc bg-img">
      <div className="container">
        <div
          className="section__header"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <h2>Ready to Get Started</h2>

          <PricingDropdown
            currency={currency}
            updateCurrency={updateCurrency}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
          />
        </div>
      </div>
    </section>
  );
};

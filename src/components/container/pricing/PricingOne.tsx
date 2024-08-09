import React, { forwardRef } from "react";
import { useConversionToINR } from "@/hooks/useConversionToINR";
import { PricingDropdown } from "./pricingDropdown/pricingDropdown";
import { PricingTable } from "./pricingTable/PricingTable";
import { PricingCards } from "./pricingCards/PricingCard";

const PricingOne = forwardRef<HTMLDivElement>(function (_, ref) {
  const {
    currency,
    isDropdownOpen,
    toggleDropdown,
    updateCurrency,
    getCurrencySymbol,
    convertPrice,
  } = useConversionToINR();

  return (
    <section className="section pricing-bsc bg-img" ref={ref}>
      <div className="container">
        <div
          className="section__header"
          style={{ marginBottom: "48px" }}
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <h2>Choose a plan that suits you.</h2>

          <PricingDropdown
            currency={currency}
            updateCurrency={updateCurrency}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
          />
        </div>

        <PricingCards
          getCurrencySymbol={getCurrencySymbol}
          convertPrice={convertPrice}
        />

        <PricingTable
          getCurrencySymbol={getCurrencySymbol}
          convertPrice={convertPrice}
        />
      </div>
    </section>
  );
});

export default PricingOne;

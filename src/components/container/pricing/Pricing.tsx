import { useConversionToINR } from "@/hooks/useConversionToINR";
import { PricingDropdown } from "./pricingDropdown/pricingDropdown";
import { PricingCards } from "./pricingCard/pricingCards";
import { PricingTable } from "./pricingTable/pricingTable";
import { forwardRef } from "react";

const Pricing = forwardRef<HTMLDivElement>(function (_, ref) {
  const {
    currency,
    updateCurrency,
    isDropdownOpen,
    toggleDropdown,
    getCurrencySymbol,
    convertPrice,
  } = useConversionToINR();

  return (
    <section className="section pricing-bsc bg-img" ref={ref}>
      <div className="container">
        <div
          className="section__header"
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
          convertPrice={convertPrice}
          getCurrencySymbol={getCurrencySymbol}
        />

        <PricingTable />
      </div>
    </section>
  );
});

export default Pricing;

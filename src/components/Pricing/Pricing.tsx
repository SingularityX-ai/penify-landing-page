import { Element } from "react-scroll";
import { CurrencyDropdown } from "./CurrencyDropdown/CurrencyDropdown";
import { useCurrencyConversion } from "@/hooks/useCurrencyConversion";
import { PlansTable } from "./PlansTable/PlansTable";
import { Dropwdown } from "../Dropdown/Dropdown";
import { vendors, vendors2 } from "@/utils/teamItems";
import { useEffect } from "react";
import { getPlanPrice, PlanTypes } from "@/api/pricing";
import PRICING from "@/utils/pricing.json";

// import { LocationPopup } from "../LocationPopup/LocationPopup";
// import { useScrollLock } from "@/hooks/useScrollLock";

/**
 * Renders the Pricing component which displays pricing plans and allows users to select a currency.
 *
 * This component utilizes currency conversion and fetches pricing data for different plans.
 * It includes a header with a title and a dropdown for selecting the currency, as well as a table
 * displaying the available plans.
 *
 * @returns {JSX.Element} The rendered Pricing component.
 *
 * @throws {Error} Throws an error if fetching the plan price fails.
 */
export default function Pricing() {
  const {
    currency,
    handleCurrencyChange,
    getCurrency,
    // showLocationPopup,
    // handleAcceptLocation,
    // handleDeclineLocation,
  } = useCurrencyConversion();

  // useScrollLock(showLocationPopup);

  useEffect(() => {
    getPlanPrice().then((data: PlanTypes) => {
      if (!data) {
        return;
      }
      const fullRepoKey = PRICING.fullRepoPlan.planId;
      if(data[fullRepoKey]) {
        PRICING.fullRepoPlan.amount = data[fullRepoKey].amount;
      }
      PRICING.plans.forEach((item) => {
        const monthKey = item.planIdPerMonth;
        if (!monthKey) {
          return;
        } 
        console.log("monthKey", monthKey);
        if (!data[monthKey]) {
          return;
        }
        console.log("monthKey22", monthKey);
        item.price = data[monthKey].amount + "";
        // item.productPaymentPerYear.planAmountPerYear = data[yearKey].amount+"";
      });
    });
  });

  return (
    <section>
      {/* showLocationPopup ? (
        <LocationPopup
          handleAcceptLocation={handleAcceptLocation}
          handleDeclineLocation={handleDeclineLocation}
        />
      ) : null 
       */}

      <Element
        name="pricing"
        id="pricing"
        className="w-full py-8 overflow-hidden md:py-16 xl:py-24"
      >
        <div className="container mx-auto px-4">
          <header
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <CurrencyDropdown
              currency={currency}
              handleCurrencyChange={handleCurrencyChange}
            />
            <br></br><br></br>
            <h1 className="mb-10 text-center text-2xl font-bold text-slate-200 md:text-3xl xl:text-4xl">
              Do you want to Document your <Dropwdown title="Git" items={vendors2} type="hero" /> Repository in {currency === "INR" ? "₹" : "$"}{getCurrency(PRICING.fullRepoPlan.amount)} ?
            </h1>

            
            <h1 className="mb-10 text-center text-2xl font-bold text-slate-200 md:text-3xl xl:text-4xl">
              OR
            </h1>
            <h1 className="mb-10 text-center text-2xl font-bold text-slate-200 md:text-3xl xl:text-4xl">
              Choose a plan that suits you
            </h1>

            <PlansTable currency={currency} getCurrency={getCurrency} />
          </header>
        </div>
      </Element>
    </section>
  );
}

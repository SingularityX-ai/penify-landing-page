import { Element } from "react-scroll";
import { CurrencyDropdown } from "./CurrencyDropdown/CurrencyDropdown";
import { useCurrencyConversion } from "@/hooks/useCurrencyConversion";
import { PlansTable } from "./PlansTable/PlansTable";
// import { LocationPopup } from "../LocationPopup/LocationPopup";
// import { useScrollLock } from "@/hooks/useScrollLock";

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
            <h1 className="mb-10 text-center text-2xl font-bold text-slate-200 md:text-3xl xl:text-4xl">
              Choose a plan that suits you
            </h1>

            <CurrencyDropdown
              currency={currency}
              handleCurrencyChange={handleCurrencyChange}
            />

            <PlansTable currency={currency} getCurrency={getCurrency} />
          </header>
        </div>
      </Element>
    </section>
  );
}

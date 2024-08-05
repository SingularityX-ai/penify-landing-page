import { CurrencyType } from "@/hooks/useConversionToINR";

type PricingDropdownProps = {
  toggleDropdown: () => void;
  currency: CurrencyType;
  isDropdownOpen: boolean;
  updateCurrency: (currencyType: CurrencyType) => void;
};

export const PricingDropdown = ({
  toggleDropdown,
  currency,
  isDropdownOpen,
  updateCurrency,
}: PricingDropdownProps) => {
  return (
    <div
      className={`dropdown pt-5 d-inline-block ${isDropdownOpen ? "show" : ""}`}
    >
      <button
        className="btn btn-secondary dropdown-toggle"
        aria-expanded={isDropdownOpen}
        type="button"
        onClick={toggleDropdown}
      >
        Selected Currency: {currency}
      </button>

      <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
        {["INR", "USD"].map((currencyType, index) => (
          <li key={`currency-type-${index}`}>
            <button
              className="dropdown-item"
              onClick={() => updateCurrency(currencyType as CurrencyType)}
            >
              {currencyType}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

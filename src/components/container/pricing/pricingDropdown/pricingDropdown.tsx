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
      className={`dropdown d-inline-block ${isDropdownOpen ? "show" : ""}`}
      style={{ marginBlock: "36px 64px" }}
    >
      <button
        className="btn btn-secondary"
        aria-expanded={isDropdownOpen}
        type="button"
        onClick={toggleDropdown}
        style={{
          padding: "20px",
          borderRadius: "8px",
          background: "var(--bs-btn-bg)",
        }}
      >
        Selected Currency: {currency}
      </button>

      <ul
        className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "4px",
        }}
      >
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

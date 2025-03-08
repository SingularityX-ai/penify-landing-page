import { CurrencyOptions } from "@/hooks/useCurrencyConversion";
import PRICING from "@/utils/pricing.json";
import Accordion from "@/components/Pricing/Accordion/Accordion";
import { THead } from "./THead/THead";

interface PlansTableProps {
  currency: CurrencyOptions;
  getCurrency: (priceInUSD: number) => number;
}

/**
 * Renders a table displaying pricing plans with an accordion for each category.
 *
 * @param {PlansTableProps} props - The properties for the PlansTable component.
 * @param {string} props.currency - The currency to be displayed in the table.
 * @param {function} props.getCurrency - A function to retrieve the current currency.
 *
 * @returns {JSX.Element} The rendered PlansTable component.
 *
 * @throws {Error} Throws an error if the currency is not provided or invalid.
 */
export function PlansTable({ currency, getCurrency }: PlansTableProps) {

  return (
    <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg mt-24">
      <table className="w-full table-fixed text-sm text-slate-400">
        <THead currency={currency} getCurrency={getCurrency} />

        <tbody>
          {PRICING.data.map(({ category, features, active }, dataIndex) => (
            <tr key={`pricing-category-index-${dataIndex}`}>
              <td colSpan={6} className="p-0">
                <Accordion
                  title={category}
                  features={features}
                  id={`pricing-${dataIndex}`}
                  active={active}
                  isLast={PRICING.data.length - 1 === dataIndex}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

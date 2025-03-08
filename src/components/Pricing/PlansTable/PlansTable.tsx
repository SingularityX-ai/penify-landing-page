import { CurrencyOptions } from "@/hooks/useCurrencyConversion";
import PRICING from "@/utils/pricing.json";
import Accordion from "@/components/Pricing/Accordion/Accordion";
import { THead } from "./THead/THead";
import { getPlanPrice, PlanTypes } from "@/api/pricing";
import { use, useEffect } from "react";

interface PlansTableProps {
  currency: CurrencyOptions;
  getCurrency: (priceInUSD: number) => number;
}

export function PlansTable({ currency, getCurrency }: PlansTableProps) {
  useEffect(() => {
    getPlanPrice().then((data: PlanTypes) => {
      if (!data) {
        return;
      }
      console.log("data", data);
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

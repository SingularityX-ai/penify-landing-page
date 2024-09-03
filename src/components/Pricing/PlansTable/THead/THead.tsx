import { CurrencyOptions } from "@/hooks/useCurrencyConversion";
import PRICING from "@/utils/pricing.json";
import Link from "next/link";
import { Fragment } from "react";

interface THeadProps {
  currency: CurrencyOptions;
  getCurrency: (priceInUSD: number) => number;
}

interface TitleColorMap {
  [key: string]: string;
}

const titleColor: TitleColorMap = {
  Freemium: "text-cyan-400",
  Premium: "text-yellow-400",
  Pro: "text-pink-400",
  Enterprise: "text-blue-400",
};

export function THead({ currency, getCurrency }: THeadProps) {
  return (
    <thead className="bg-slate-700 text-slate-400">
      <tr>
        <th
          scope="col"
          className="w-40 border-r border-slate-500 px-6 py-3 md:w-48 lg:w-52"
        ></th>

        {PRICING.plans.map(({ title, price }, planIndex) => (
          <th
            key={`plan-index-${planIndex}}`}
            scope="col"
            className={`${
              title === "Enterprise" ? "border-r-0" : "border-r"
            } border-slate-500 px-6 py-3 align-top ${
              title === "Freemium"
                ? "w-[320px] md:w-[384px] lg:w-[416px]"
                : "w-40 md:w-48 lg:w-52"
            }`}
            colSpan={title === "Freemium" ? 2 : 1}
          >
            <h3
              className={`mb-2 text-base md:text-lg lg:text-xl ${titleColor[title]}`}
            >
              {title}
            </h3>

            {price ? (
              <>
                <p className="mb-4 text-xl text-slate-200 md:text-2xl lg:text-3xl">
                  <span>
                    {currency === "INR" ? "₹" : "$"}
                    {getCurrency(parseInt(price))}
                  </span>
                  <span className="ms-1 text-xs text-slate-300 md:text-sm lg:text-base">
                    /month
                  </span>
                </p>

                <Link
                  href={`https://dashboard.penify.dev/profile/payments${
                    new URL(window.location.href).search || "?currency=USD"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2 text-center text-xs font-medium text-white transition-all duration-200 ease-in hover:bg-blue-800 focus:outline-none focus:ring-blue-300 md:text-sm"
                >
                  {title === "Freemium" ? "Start for free" : "Choose Plan"}
                </Link>
              </>
            ) : (
              <p className="mt-6 text-base text-slate-200 md:text-lg lg:text-xl">
                Contact Us for Pricing
              </p>
            )}
          </th>
        ))}
      </tr>

      <tr>
        <th
          scope="col"
          className="border-t border-r border-slate-500 px-6 py-3"
        >
          <h4 className="text-slate-300 text-xs md:text-sm lg:text-base">
            Features
          </h4>
        </th>

        {PRICING.plans.map(({ title }, titleIndex) => (
          <Fragment key={`plan-title-index-${titleIndex}`}>
            {title === "Freemium" ? (
              <>
                <th
                  scope="col"
                  className="border-t border-r border-slate-500 px-6 py-3"
                >
                  <h4 className="text-cyan-400 text-xs md:text-sm lg:text-base">
                    Public GitHub Repo
                  </h4>
                </th>
                <th
                  scope="col"
                  className="border-t border-r border-slate-500 px-6 py-3"
                >
                  <h4 className="text-cyan-400 text-xs md:text-sm lg:text-base">
                    Private GitHub Repo
                  </h4>
                </th>
              </>
            ) : (
              <th
                scope="col"
                className={`border-t ${
                  title === "Enterprise" ? "border-r-0" : "border-r"
                } border-slate-500 px-6 py-3`}
              >
                <h4
                  className={`${titleColor[title]} text-xs md:text-sm lg:text-base`}
                >
                  {title} GitHub Repo
                </h4>
              </th>
            )}
          </Fragment>
        ))}
      </tr>
    </thead>
  );
}

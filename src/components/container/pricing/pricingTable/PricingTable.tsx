import { useState } from "react";
import PRICING_DATA from "../pricing.json";
import Tooltip from "../../tooltip/Tooltip";
import Link from "next/link";
import { useRouter } from "next/router";

type PricingTableProps = {
  getCurrencySymbol: () => "$" | "₹";
  convertPrice: (priceInUSD: number) => string | number;
};

export const PricingTable = ({
  getCurrencySymbol,
  convertPrice,
}: PricingTableProps) => {
  const router = useRouter();

  const [isAccordionOpen, setIsAccordionOpen] = useState<{
    [key: string]: boolean;
  }>({
    "Code Documentation": true,
  });

  const toggleAccordion = (heading: string) => {
    setIsAccordionOpen((prev) => ({
      ...prev,
      [heading]: !prev[heading],
    }));
  };

  return (
    <div className="pricing-table">
      <table className="table table-bordered outer-table">
        <thead>
          <tr>
            <th></th>
            {PRICING_DATA.cards.map(({ planName, planPrice }, cardIndex) => (
              <th colSpan={cardIndex === 0 ? 2 : 1} key={`card-${cardIndex}`}>
                <div className="pricing-card">
                  <h5 className={`.h5 text-${planName}`}>{planName}</h5>

                  <div className="price-text">
                    <h2 className="h2 title">
                      {getCurrencySymbol()}
                      {convertPrice(planPrice)}
                    </h2>
                    <p>paid per month</p>
                  </div>
                </div>
              </th>
            ))}
          </tr>
          <tr>
            <th className="text-highlight">Features</th>
            <th className="text-freemium">
              Public <br /> GitHub Repo
            </th>
            <th className="text-freemium">
              Private <br /> GitHub Repo
            </th>
            <th className="text-premium">
              Premium <br /> GitHub Repo
            </th>
            <th className="text-pro">
              Pro <br /> GitHub Repo
            </th>
            <th className="text-enterprise">
              Enterprise <br /> GitHub Repo
            </th>
          </tr>
        </thead>

        <tbody>
          {PRICING_DATA.table.map((tableData, tableIndex) => (
            <tr key={`table-row-${tableIndex}`}>
              <td colSpan={6} style={{ padding: "0px" }}>
                <div className="accordion" id={`accordion-${tableIndex}`}>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        type="button"
                        className={`accordion-button ${
                          isAccordionOpen[tableData.heading] ? "" : "collapsed"
                        }`}
                        onClick={() => toggleAccordion(tableData.heading)}
                      >
                        {tableData.heading}
                      </button>
                    </h2>

                    <div
                      className={`accordion-collapse collapse ${
                        isAccordionOpen[tableData.heading] ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body" style={{ padding: "0" }}>
                        <table className="table table-bordered my-0 inner-table">
                          <tbody>
                            {tableData.subheading.map(
                              (subheadingData, subheadingIndex) => (
                                <tr key={`sub-row-${subheadingIndex}`}>
                                  <th className="inner-row-head">
                                    {subheadingData.title}
                                  </th>

                                  {subheadingData.contents.map(
                                    (content, contentIndex) => (
                                      <td
                                        key={`content-${contentIndex}`}
                                        className="inner-row-data"
                                      >
                                        {content.title}{" "}
                                        {content.tooltip && (
                                          <Tooltip text={content.tooltip} />
                                        )}
                                      </td>
                                    )
                                  )}
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            {PRICING_DATA.cards.map(({ planName }, itemsIndex) => (
              <td
                key={`btn-${itemsIndex}`}
                colSpan={planName === "freemium" ? 2 : 1}
              >
                <Link
                  href={`https://dashboard.penify.dev/profile/payments?currency=${
                    router.query.currency || "INR"
                  }`}
                  target="_blank"
                  className="btn btn--ocotonary"
                >
                  {planName === "freemium" ? "Start for free" : "Choose plan"}
                </Link>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

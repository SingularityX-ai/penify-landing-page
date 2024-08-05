import { useState } from "react";
import Tooltip from "../../tooltip/tooltip";
import PRICING_DATA from "../pricing.json";

export const PricingTable = () => {
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
      <h4 className=".h4">Compare plans</h4>
      <table className="table table-bordered">
        <thead>
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
              <td colSpan={6}>
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
                        <table
                          className="table table-striped m-0"
                          style={{
                            tableLayout: "fixed",
                            width: "100%",
                          }}
                        >
                          <tbody>
                            {tableData.subheading.map(
                              (subheadingData, subheadingIndex) => (
                                <tr key={`sub-row-${subheadingIndex}`}>
                                  <th
                                    style={{
                                      fontWeight: "600",
                                      textAlign: "start",
                                    }}
                                  >
                                    {subheadingData.title}
                                  </th>

                                  {subheadingData.contents.map(
                                    (content, contentIndex) => (
                                      <td key={`content-${contentIndex}`}>
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
      </table>
    </div>
  );
};

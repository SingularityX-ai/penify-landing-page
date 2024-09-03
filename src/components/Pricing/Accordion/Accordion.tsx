import { Tooltip } from "@/components/Tooltip/Tooltip";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

interface AccordionProps {
  title: string;
  features: Array<{
    title: string;
    contents: {
      title: string;
      tooltip: string | null;
    }[];
  }>;
  id: string;
  active?: boolean;
  isLast: boolean;
}

export default function Accordion({
  title,
  features,
  id,
  active = false,
  isLast,
}: AccordionProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(() => active);

  return (
    <div
      className={`w-full border border-slate-700 bg-transparent ${
        isLast ? "sm:rounded-b-lg" : ""
      }`}
    >
      <div>
        <button
          type="button"
          className="flex w-full flex-wrap justify-between px-2 py-2 md:py-4"
          onClick={() => setIsAccordionOpen((prev) => !prev)}
          aria-expanded={isAccordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <div className="flex-1 py-2">
            <h2 className="text-start text-sm font-semibold text-slate-200 md:text-base xl:text-lg">
              {title}
            </h2>
          </div>

          <div className="w-auto py-2">
            <IconChevronDown
              className={`h-4 w-4 origin-center transform text-slate-200 transition duration-200 ease-out md:h-6 md:w-6 ${
                isAccordionOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden text-xs text-slate-400 transition-all duration-300 ease-in-out md:text-sm lg:text-base ${
          isAccordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <table className="w-full table-fixed text-center text-xs text-slate-400 md:text-sm lg:text-base">
            <tbody>
              {features.map(({ title, contents }, featureIndex) => (
                <tr
                  key={`pricing-feature-index-${featureIndex}`}
                  className="border-t border-slate-700"
                >
                  <th className="w-40 border-r border-slate-700 p-2 text-start md:w-48 lg:w-52">
                    {title}
                  </th>

                  {contents.map((content, contentIndex) => (
                    <td
                      key={`pricing-content-index-${contentIndex}`}
                      className="w-40 border-r border-slate-700 p-2 text-slate-300 last:border-r-0 md:w-48 lg:w-52"
                    >
                      <div className="flex items-center justify-center gap-x-2">
                        {content.title}
                        {content.tooltip && <Tooltip text={content.tooltip} />}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

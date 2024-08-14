import { IconChevronDown } from "@tabler/icons-react";
import { ReactNode, useEffect, useState } from "react";

interface AccordionProps {
  title: string;
  text: any;
  id: string;
  active?: boolean;
}

export default function Accordion({
  title,
  text,
  id,
  active = false,
}: AccordionProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsAccordionOpen(active);
  }, []);

  return (
    <div className="w-full px-8 py-6 bg-white border-2 border-gray-200  rounded-xl shadow-lg mb-4">
      <button
        type="button"
        className="flex flex-wrap justify-between -m-2 w-full"
        onClick={(event) => {
          event.preventDefault();
          setIsAccordionOpen((prev) => !prev);
        }}
        aria-expanded={isAccordionOpen}
        aria-controls={`accordion-text-${id}`}
      >
        <div className="flex-1 p-2">
          <h3 className="text-lg font-medium text-start">{title}</h3>

          <div
            id={`accordion-text-${id}`}
            role="region"
            aria-labelledby={`accordion-title-${id}`}
            className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
              isAccordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p
                className="py-4 pb-2 text-start"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          </div>
        </div>

        <div className="w-auto p-2">
          <IconChevronDown
            className={`transform origin-center transition duration-200 ease-out ${
              isAccordionOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
    </div>
  );
}

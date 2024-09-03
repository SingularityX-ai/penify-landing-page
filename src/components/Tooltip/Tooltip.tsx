import { IconInfoCircleFilled } from "@tabler/icons-react";
import { useState } from "react";
import { Popover } from "react-tiny-popover";

interface TooltipProp {
  text: string;
}

export function Tooltip({ text }: TooltipProp) {
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);

  return (
    <Popover
      isOpen={isTooltipOpen}
      positions={"top"}
      content={<p className="mb-2 rounded-md bg-slate-600 px-4 py-2 text-xs text-slate-200 md:text-sm">{text}</p>}
      onClickOutside={() => setIsTooltipOpen(false)}
    >
      <div
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        className="inline-block cursor-pointer"
      >
        <IconInfoCircleFilled />
      </div>
    </Popover>
  );
}

import { IconInfoCircleFilled } from "@tabler/icons-react";
import { useState, useRef, useEffect } from "react";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ text, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="tooltip-container" ref={targetRef}>
      <div
        className={`tooltip-trigger`}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        style={{ marginLeft: "4px" }}
      >
        <IconInfoCircleFilled stroke={1.25} />
      </div>
      {isVisible && (
        <div className={`tooltip-content ${position}`} ref={tooltipRef}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

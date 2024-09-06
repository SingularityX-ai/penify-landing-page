import { Handle, Position } from "@xyflow/react";
import StickIcon from "public/icons/flowchard-stick.svg";
import { memo } from "react";

function StakeholderNode() {
  return (
    <div className="">
      <Handle type="source" position={Position.Bottom} id="source-bot" />

      <p className="text-sm text-orange-400 bg-gray-800 p-2 rounded-sm inline-block mb-3">
        Non-Technical Stakeholders
      </p>
      <div className="w-[360px] h-[140px] rounded border border-blue-50 bg-transparent flex items-center justify-evenly">
        <div className="flex flex-col items-center">
          <StickIcon />
          <p className="text-orange-200 text-sm font-medium">Product Manager</p>
        </div>

        <div className="flex flex-col items-center">
          <StickIcon />
          <p className="text-orange-200 text-sm font-medium">Analyst</p>
        </div>

        <div className="flex flex-col items-center">
          <StickIcon />
          <p className="text-orange-200 text-sm font-medium">QA</p>
        </div>
      </div>
    </div>
  );
}

export default memo(StakeholderNode);

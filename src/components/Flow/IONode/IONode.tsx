import { Handle, Position } from "@xyflow/react";
import { memo } from "react";
import IOIcon01 from "public/icons/flowchart-io-01.svg";
import IOIcon02 from "public/icons/flowchart-io-02.svg";
import IOIcon03 from "public/icons/flowchart-io-03.svg";
import IOIcon04 from "public/icons/flowchart-io-04.svg";
import IOIcon05 from "public/icons/flowchart-io-05.svg";

function IONode({ data }: { data: { label: string } }) {
  return (
    <>
      {data.label === "Jira Tickets Pointer" && (
        <div className="scale-110">
          <Handle type="target" position={Position.Left} id="target-left" />
          <Handle type="target" position={Position.Bottom} id="target-bot" />

          <p className="text-base text-green-200 bg-gray-800 p-2 rounded-sm inline-block mb-3">
            Functional and Deployed
          </p>
          <div className="w-[380px] h-[140px] rounded border border-blue-50 bg-transparent flex items-center justify-evenly">
            <IOIcon01 />
            <IOIcon02 />
          </div>
        </div>
      )}

      {data.label === "KB Pointer" && (
        <div className="scale-110">
          <Handle type="target" position={Position.Top} id="target-top" />

          <div className="w-[550px] h-[140px] rounded border border-blue-50 bg-transparent flex items-center justify-evenly">
            <IOIcon03 />
            <IOIcon04 />
            <IOIcon05 />
          </div>
          <p className="text-base text-green-200 bg-gray-800 p-2 rounded-sm inline-block mt-3">
            Functional and Deployed
          </p>
        </div>
      )}
    </>
  );
}

export default memo(IONode);

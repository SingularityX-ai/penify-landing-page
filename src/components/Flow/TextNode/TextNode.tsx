import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

function TextNode({ data }: any) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="text-lg font-bold">{data.label}</div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-4 bg-teal-500"
      />

      <Handle
        type="target"
        position={Position.Bottom}
        className="w-4 bg-teal-500"
      />
    </div>
  );
}

export default memo(TextNode);

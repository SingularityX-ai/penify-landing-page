import { Handle, Position } from "@xyflow/react";

export function SourceNode({ data }: any) {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-500 shadow-lg">
      <div className="text-white font-bold">{data.label}</div>
      <Handle
        type="source"
        position={Position.Top}
        id="top-connector"
        className="w-2 h-2"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="btm-connector"
        className="w-2 h-2"
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left-connector"
        className="w-2 h-2"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-connector"
        className="w-2 h-2"
      />
    </div>
  );
}

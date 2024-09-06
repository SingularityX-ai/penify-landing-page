import { Handle, Position } from "@xyflow/react";
import BaseIcon from "public/icons/flowchard-database.svg";
import { memo } from "react";

function DatabaseNode() {
  return (
    <div>
      <Handle type="source" position={Position.Top} id="source-top" />
      <Handle type="target" position={Position.Left} id="target-left" />
      <Handle type="source" position={Position.Bottom} id="source-bot" />
      <Handle type="source" position={Position.Right} id="source-right" />

      <BaseIcon />
    </div>
  );
}

export default memo(DatabaseNode);

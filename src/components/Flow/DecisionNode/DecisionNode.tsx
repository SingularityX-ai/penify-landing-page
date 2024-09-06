import { Handle, Position } from "@xyflow/react";
import DecisionIcon from "public/icons/flowchart-decision.svg";
import { memo } from "react";

function DecisionNode() {
  return (
    <div>
      <Handle type="target" position={Position.Left} id="target-left" />
      <Handle type="source" position={Position.Right} id="source-right" />

      <DecisionIcon />
    </div>
  );
}

export default memo(DecisionNode);

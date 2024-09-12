import { Handle, Position } from "@xyflow/react";
import AgentIcon from "public/icons/flowchart-chatbot.svg";
import { memo } from "react";

function AgentNode() {
  return (
    <div>
      <Handle type="target" position={Position.Top} id="target-top" />
      <Handle type="target" position={Position.Left} id="target-left" />

      <div className="relative">
        <AgentIcon />

        <p className="mt-2 text-slate-300 font-medium text-base absolute w-32 -left-1/2">
          Agent (Chatbot)
        </p>
      </div>
    </div>
  );
}

export default memo(AgentNode);

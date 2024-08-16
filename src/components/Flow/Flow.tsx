import { initialEdges, initialNodes } from "@/utils/flowItems";
import {
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
  Edge,
  Node,
  OnEdgesChange,
  OnNodesChange,
  ReactFlow,
} from "@xyflow/react";
import { useCallback, useState } from "react";

export default function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));

      changes.forEach((change) => {
        if (change.type === "position" && change.position) {
          console.log(change.position);
        }
      });
    },
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );

  return (
    <div className="h-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
        defaultEdgeOptions={{ animated: true }}
        zoomOnScroll={false}
        panOnDrag={false}
        // nodeTypes={{custom: TextNode}}
      >
        <Controls showZoom={false} showFitView={true} showInteractive={false} />
      </ReactFlow>
    </div>
  );
}

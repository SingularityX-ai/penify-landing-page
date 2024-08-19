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
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
        defaultEdgeOptions={{ animated: true }}
        zoomOnScroll={false}
        panOnDrag={false}
        className="min-h-64"
        // nodeTypes={{custom: TextNode}}
      >
        <Controls showZoom={false} showFitView={true} showInteractive={false} />
      </ReactFlow>
  );
}

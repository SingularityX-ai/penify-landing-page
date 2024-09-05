import {
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  Node,
  OnEdgesChange,
  OnNodesChange,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SourceNode } from "./SourceNode/SourceNode";
import { TargetNode } from "./TargetNode/TargetNode";
import { initialEdges, initialNodes, nodeTypes } from "@/utils/flowItems";

function FlowContent() {
  const { fitView } = useReactFlow();

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  useEffect(() => {
    const handleResize = () => {
      fitView({ duration: 200 });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [fitView]);

  // add interactivity to node drag, select or move.
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
      /*
      changes.forEach((change) => {
        if (change.type === "position" && change.position) {
          console.log(change.position);
        }
      });
      */
    },
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );

  // custom node blocks for source and target
  const NodeTypes = useMemo(
    () => ({ source: SourceNode, target: TargetNode }),
    []
  );

  /* 
  const onNodeDragStop: OnNodeDrag = useCallback(() => {
    setTimeout(() => {
      fitView({ duration: 200 });
    }, 0);
  }, [fitView]);  
  */

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      // edgeTypes={}
      nodeOrigin={[0, 0]}
      // onNodeDragStop={onNodeDragStop}
      fitView={true}
      //translateExtent={}
      preventScrolling={false}
      className="min-h-72"
      nodesDraggable={false}
      panOnDrag={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
    >
      <Background variant={BackgroundVariant.Dots} />
      <Controls showZoom={false} showFitView={false} showInteractive={false} />
    </ReactFlow>
  );
}

export default function Flow() {
  return (
    <ReactFlowProvider>
      <FlowContent />
    </ReactFlowProvider>
  );
}

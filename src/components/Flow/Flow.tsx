import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";
import { useEffect } from "react";
import { initialEdges, initialNodes } from "@/utils/flowItems";
import DocumentNode from "./DocumentNode/DocumentNode";
import IONode from "./IONode/IONode";
import DatabaseNode from "./DatabaseNode/DatabaseNode";
import AgentNode from "./AgentNode/AgentNode";
import StakeholderNode from "./StakeholderNode/StakeholderNode";
import { BiEdge } from "./BiEdge/BiEdge";
import { UniEdge } from "./UniEdge/UniEdge";

function FlowContent() {
  const { fitView } = useReactFlow();

  useEffect(() => {
    const handleResize = () => {
      fitView({ duration: 200 });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [fitView]);

  // custom node blocks for source and target
  const NodeTypes = {
    document: DocumentNode,
    ioParent: IONode,
    database: DatabaseNode,
    agent: AgentNode,
    stakeholder: StakeholderNode,
  };

  const EdgeTypes = {
    uniEdge: UniEdge,
    biEdge: BiEdge,
  }

  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      nodeTypes={NodeTypes}
      edgeTypes={EdgeTypes}
      nodeOrigin={[0, 0]}
      fitView={true}
      preventScrolling={false}
      className="min-h-[392px] lg:min-h-[560px]"
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

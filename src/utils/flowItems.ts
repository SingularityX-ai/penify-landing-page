import { Edge, Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "document-1",
    type: "document",
    data: { label: "Jira Tickets" },
    position: { x: 0, y: 0 },
  },

  {
    id: "io-parent-01",
    type: "ioParent",
    data: { label: "Jira Tickets Pointer" },
    position: { x: 220, y: -56 },
  },

  {
    id: "document-2",
    type: "document",
    data: { label: "Git Repo" },
    position: { x: 0, y: 218 },
  },
  {
    id: "database",
    type: "database",
    data: { label: "Knowledge base" },
    position: { x: 358, y: 210 },
  },
  {
    id: "io-parent-02",
    type: "ioParent",
    data: { label: "KB Pointer" },
    position: { x: 136, y: 380 },
  },
  {
    id: "agent",
    type: "agent",
    data: { label: "Agent" },
    position: { x: 841, y: 219 },
  },
  {
    id: "stakeholder",
    type: "stakeholder",
    data: { label: "Stakeholders" },
    position: { x: 680, y: -58 },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-core",
    source: "document-1",
    target: "io-parent-01",
    sourceHandle: "source-right",
    targetHandle: "target-left",
    type: "uniEdge",
    data: { uniType: "uniEdgeRight" },
    animated: true,
  },
  {
    id: "e2-core",
    source: "document-2",
    target: "database",
    sourceHandle: "source-right",
    targetHandle: "target-left",
    type: "uniEdge",
    data: { uniType: "uniEdgeRight", label: "Install Penify App" },
    animated: true,
  },
  {
    id: "e3-core",
    source: "database",
    target: "io-parent-01",
    sourceHandle: "source-top",
    targetHandle: "target-bot",
    type: "biEdge",
    data: { label: "Whenever a PR is merged, it updated the Knowledge Base" },
  },
  {
    id: "e4-core",
    source: "database",
    target: "io-parent-02",
    sourceHandle: "source-bot",
    targetHandle: "target-top",
    type: "uniEdge",
    data: { uniType: "uniEdgeBot" },
    animated: true,
  },
  {
    id: "e5-core",
    source: "database",
    target: "agent",
    targetHandle: "target-left",
    sourceHandle: "source-right",
    type: "uniEdge",
    data: { uniType: "uniEdgeRight" },
    animated: true,
  },
  {
    id: "e6-core",
    source: "stakeholder",
    target: "agent",
    targetHandle: "target-top",
    sourceHandle: "source-bot",
    type: "uniEdge",
    data: {
      label: "Will ask question to Agent to get an Answer",
      uniType: "uniEdgeBot",
    },
    animated: true,
  },
];

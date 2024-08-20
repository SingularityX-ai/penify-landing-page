import { Edge, Node, Position } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "source",
    type: "source",
    position: { x: 80, y: 0 },
    data: { label: "Penify" },
  },
  {
    id: "1",
    type: "target",
    position: { x: -160, y: -55 },
    data: {
      label: "Pull Request Documentation",
      handlePos: Position.Top,
      color: "indigo",
    },
  },
  {
    id: "2",
    type: "target",
    position: { x: 162, y: 102 },
    data: {
      label: "Repository Code Documentation",
      handlePos: Position.Bottom,
      color: "violet",
    },
  },
  {
    id: "3",
    type: "target",
    position: { x: -108, y: 200 },
    data: {
      label: "Architectural Documentation",
      handlePos: Position.Left,
      color: "pink",
    },
  },
  {
    id: "4",
    type: "target",
    position: { x: 208, y: -124 },
    data: {
      label: "API Documentation",
      handlePos: Position.Right,
      color: "teal",
    },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-core",
    source: "source",
    target: "1",
    sourceHandle: "top-connector",
    animated: true,
  },
  {
    id: "e2-core",
    source: "source",
    target: "2",
    sourceHandle: "btm-connector",
    animated: true,
  },
  {
    id: "e3-core",
    source: "source",
    target: "3",
    sourceHandle: "left-connector",
    animated: true,
  },
  {
    id: "e4-core",
    source: "source",
    target: "4",
    sourceHandle: "right-connector",
    animated: true,
  },
];

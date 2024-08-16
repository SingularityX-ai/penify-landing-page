import { Edge, Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    position: { x: 80, y: 0 },
    data: { label: "Penify" },
  },
  {
    id: "2",
    position: { x: -118, y: -24 },
    data: { label: "Pull Request Documentation" },
  },
  {
    id: "3",
    position: { x: 154, y: 82 },
    data: { label: "Repository Code Documentation" },
  },
  {
    id: "4",
    position: { x: -60, y: 120 },
    data: { label: "Architectural Documentation" },
  },
  {
    id: "5",
    position: { x: 140, y: -100 },
    data: { label: "API Documentation" },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e2-e1",
    source: "1",
    target: "2",
    style: {
      strokeWidth: 2,
      stroke: "#1d4ed8",
    },
  },
  {
    id: "e3-e1",
    source: "1",
    target: "3",
    style: {
      strokeWidth: 2,
      stroke: "#1d4ed8",
    },
  },
  {
    id: "e4-e1",
    source: "1",
    target: "4",
    style: {
      strokeWidth: 2,
      stroke: "#1d4ed8",
    },
  },
  {
    id: "e5-e1",
    source: "1",
    target: "5",
    style: {
      strokeWidth: 2,
      stroke: "#1d4ed8",
    },
  },
];

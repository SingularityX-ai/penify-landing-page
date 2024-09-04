import { Edge, Node, Position } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "gitRepo",
    type: "codeRepository",
    position: { x: -200, y: 0 },
    data: { 
      label: "Git Repository",
      shape: "cylinder" // Representing a database or storage
    },
  },
  {
    id: "penify",
    type: "aiAgent",
    position: { x: 0, y: 0 },
    data: { 
      label: "Penify Agent",
      shape: "diamond" // Representing a decision or process point
    },
  },
  {
    id: "knowledgeBase",
    type: "dataStore",
    position: { x: 200, y: 0 },
    data: { 
      label: "Knowledge Nexus",
      shape: "hexagon" // Representing a central hub of information
    },
  },
  {
    id: "pullRequestDoc",
    type: "insightPortal",
    position: { x: 400, y: -100 },
    data: { 
      label: "Merge Maestro",
      color: "indigo",
      shape: "circle" // Representing an output or endpoint
    },
  },
  {
    id: "codeDoc",
    type: "codeCompendium",
    position: { x: 400, y: -33 },
    data: { 
      label: "Code Chronicles",
      color: "violet",
      shape: "circle"
    },
  },
  {
    id: "apiDoc",
    type: "interfaceIlluminator",
    position: { x: 400, y: 33 },
    data: { 
      label: "API Atlas",
      color: "teal",
      shape: "circle"
    },
  },
  {
    id: "archDoc",
    type: "blueprintBeacon",
    position: { x: 400, y: 100 },
    data: { 
      label: "Architecture Almanac",
      color: "pink",
      shape: "circle"
    },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e-repo-penify",
    source: "gitRepo",
    target: "penify",
    animated: true,
    type: "smoothstep",
    label: "Installs",
    // sourceHandle: "top-connector",
  },
  {
    id: "e-penify-kb",
    source: "penify",
    target: "knowledgeBase",
    animated: true,
    type: "smoothstep",
    label: "Builds",
  },
  {
    id: "e-kb-pullreq",
    source: "knowledgeBase",
    target: "pullRequestDoc",
    animated: true,
    type: "straight",
  },
  {
    id: "e-kb-code",
    source: "knowledgeBase",
    target: "codeDoc",
    animated: true,
    type: "straight",
  },
  {
    id: "e-kb-api",
    source: "knowledgeBase",
    target: "apiDoc",
    animated: true,
    type: "straight",
  },
  {
    id: "e-kb-arch",
    source: "knowledgeBase",
    target: "archDoc",
    animated: true,
    type: "straight",
  },
];
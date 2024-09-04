import { Edge, Node } from "@xyflow/react";
import { CylinderNode, DiamondNode, HexagonNode, CircleNode, GitRepoNode, KnowledgeBaseNode } from './customNodeTypes.tsx';


export const nodeTypes = {
  cylinder: CylinderNode,
  diamond: DiamondNode,
  hexagon: HexagonNode,
  circle: CircleNode,
  gitRepo: GitRepoNode,
  knowledgeBaseNode: KnowledgeBaseNode,
};

export const initialNodes: Node[] = [
  {
    id: "gitRepo",
    type: "gitRepo",
    position: { x: -200, y: 0 },
    data: { label: "Git Repository" },
  },
  {
    id: "knowledgeBase",
    type: "cylinder",
    position: { x: 100, y: -10 },
    data: { label: "Knowledge Base" },
  },
  {
    id: "pullRequestDoc",
    type: "circle",
    position: { x: 400, y: -100 },
    data: { label: "Merge Maestro", color: "indigo" },
  },
  {
    id: "codeDoc",
    type: "circle",
    position: { x: 400, y: -33 },
    data: { label: "Code Chronicles", color: "violet" },
  },
  {
    id: "apiDoc",
    type: "circle",
    position: { x: 400, y: 33 },
    data: { label: "API Atlas", color: "teal" },
  },
  {
    id: "archDoc",
    type: "circle",
    position: { x: 400, y: 100 },
    data: { label: "Architecture Almanac", color: "pink" },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e-repo-penify",
    source: "gitRepo",
    target: "knowledgeBase",
    animated: true,
    type: "smoothstep",
    label: "Install's Penify",
    style: { stroke: '#ffffff', strokeWidth: 2 },  // White color, no background
    labelStyle: { fill: '#ffffff', fontWeight: 700, baselineShift: "super", fontSize: "15"},  // White label
    labelBgStyle: { fill: 'transparent' },  // Transparent label background
    labelShowBg: true,
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    
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
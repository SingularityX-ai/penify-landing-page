import {
  IconCaretDownFilled,
  IconCaretRightFilled,
  IconCaretUpFilled,
} from "@tabler/icons-react";
import { EdgeLabelRenderer, EdgeProps, getBezierPath } from "@xyflow/react";

interface EdgeData {
  label?: string;
  uniType?: string;
}

export function UniEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: EdgeProps & { data?: EdgeData }) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  // Calculate a position near the target node
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const iconOffset = 5; // Adjust this value to move the icon closer to or further from the target
  const iconX = targetX - (dx / distance) * iconOffset;
  const iconY = targetY - (dy / distance) * iconOffset;

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />

      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${iconX}px,${iconY}px)`,
            fontSize: 12,
          }}
          className="nodrag nopan relative"
        >
          {data?.uniType === "uniEdgeBot" && (
            <>
              <IconCaretDownFilled color="#fff" />

              <div className="absolute -top-10 left-7 w-48">
                <p className="bg-transparent text-base font-normal text-orange-400">
                  {data && data.label}
                </p>
              </div>
            </>
          )}

          {data?.uniType === "uniEdgeRight" && (
            <>
              <IconCaretRightFilled color="#fff" />

              {data.label && (
                <div
                  className="absolute -top-5 right-8 w-36"
                >
                  <p className="bg-transparent text-base font-normal text-blue-400">
                    {data && data.label}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

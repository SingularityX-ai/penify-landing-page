import React from "react";
import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";
import { EdgeLabelRenderer, EdgeProps, getBezierPath } from "@xyflow/react";

interface EdgeData {
  label?: string;
}

export function BiEdge({
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

  // Calculate the midpoint of the edge
  const midX = (sourceX + targetX) / 2;
  const midY = (sourceY + targetY) / 2;

  // Calculate the angle of the edge
  const angle =
    (Math.atan2(targetY - sourceY, targetX - sourceX) * 180) / Math.PI;

  // Calculate the length of the edge
  const length = Math.sqrt(
    Math.pow(targetX - sourceX, 2) + Math.pow(targetY - sourceY, 2)
  );

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
              transform: `translate(-50%, -50%) translate(${midX}px,${midY}px) rotate(${angle}deg)`,
            }}
            className={`nodrag nopan absolute top-0 left-0 w-[${length}px] h-6 flex items-center justify-between`}
          >
            <IconCaretUpFilled
              color="#fff"
              style={{ transform: `rotate(${angle}deg)` }}
            />
            <IconCaretDownFilled
              color="#fff"
              style={{ transform: `rotate(${angle}deg)` }}
            />
          </div>
          {data && data.label && (
            <div
              style={{
                transform: `translate(0, -50%) translate(${midX}px,${midY}px)`,
              }}
              className="nodrag nopan absolute top-0 left-8 w-52"
            >
              <p className="bg-transparent text-sm font-normal text-green-400">
                {data.label}
              </p>
            </div>
          )}
      </EdgeLabelRenderer>
    </>
  );
}

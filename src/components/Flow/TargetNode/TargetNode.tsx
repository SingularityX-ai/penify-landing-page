import { Handle, Position } from "@xyflow/react";

const colors = {
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  pink: "bg-pink-500",
  teal: "bg-teal-500",
};

interface DataProps {
  label: string;
  color: keyof typeof colors;
  handlePos: any;
}

export function TargetNode({ data }: { data: DataProps }) {
  const { label, color, handlePos } = data;

  return (
    <div
      className={` ${colors[color]} rounded-md px-4 py-2 text-slate-200 shadow-xl`}
    >
      <div className="font-bold">{label}</div>
      <Handle
        type="target"
        position={handlePos || Position.Top}
        className="w-2 h-2"
      />
    </div>
  );
}

import { Handle, Position } from "@xyflow/react";
import { memo } from "react";
import DocumentIcon01 from "public/icons/flowchard-document-01.svg";
import DocumentIcon02 from "public/icons/flowchard-document-02.svg";

function DocumentNode({ data }: { data: { label: string } }) {
  return (
    <div>
      <Handle type="source" position={Position.Right} id="source-right" />

      {data.label === "Jira Tickets" && <DocumentIcon01 />}

      {data.label === "Git Repo" && <DocumentIcon02 />}
    </div>
  );
}

export default memo(DocumentNode);

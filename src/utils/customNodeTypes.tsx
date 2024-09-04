import React from 'react';
import { Handle, NodeProps, Position } from '@xyflow/react';

const nodeStyles = {
  padding: 10,
  borderRadius: 5,
  border: '1px solid #ddd',
  color: '#333',
  background: '#fff',
};

interface NodeData {
  label: string;
  color?: string;
}


export const KnowledgeBaseNode: React.FC<NodeProps<any>> = ({ data }) => (
  <div style={{
    width: 160,
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a90e2',
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
  }}>
    <div style={{ fontSize: '32px', marginBottom: '8px' }}>📚</div>
    <div>{data.label}</div>
    <Handle type="target" position={Position.Left} style={{ background: '#555' }} />
    <Handle type="source" position={Position.Right} style={{ background: '#555' }} />
  </div>
);


export const GitRepoNode: React.FC<NodeProps<any>> = ({ data }) => (
  <div style={{
    ...nodeStyles,
    width: 130,
    height: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f0f0f0',
  }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
    </svg>
    <div style={{ marginTop: 5 }}>{data.label}</div>
    <Handle type="source" position={Position.Right} />
  </div>
);

export const CylinderNode: React.FC<NodeProps<NodeData>> = ({ data }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <div style={{ 
      ...nodeStyles, 
      width: 100, 
      height: 120, 
      borderRadius: '50% / 20%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#4a90e2',
      border: '0px solid #3a7bc8',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ fontSize: '52px', marginBottom: '8px', zIndex: 2 }}>📚</div>
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} />
      <Handle type="source" position={Position.Right} style={{ background: '#555' }} />
    </div>
    <div style={{
      marginTop: '8px',
      fontSize: '22px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
    }}>
      {data.label}
    </div>
  </div>
);

export const DiamondNode = ({ data }: { data: any }) => (
  <div style={{ ...nodeStyles, width: 100, height: 100, transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ transform: 'rotate(-45deg)' }}>{data.label}</div>
    <Handle type="target" position={Position.Left} style={{ transform: 'rotate(-45deg)' }} />
    <Handle type="source" position={Position.Right} style={{ transform: 'rotate(-45deg)' }} />
  </div>
);

export const HexagonNode = ({ data }: { data: any }) => (
  <div style={{ ...nodeStyles, width: 120, height: 104, clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {data.label}
    <Handle type="target" position={Position.Left} />
    <Handle type="source" position={Position.Right} />
  </div>
);

export const CircleNode = ({ data }: { data: any }) => (
  <div style={{ ...nodeStyles, width: 100, height: 100, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: data.color || '#fff' }}>
    {data.label}
    <Handle type="target" position={Position.Left} />
  </div>
);
import React from 'react';


export interface ITaskProps {
  task: {
    id?: string,
    title?: string,
    state?: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'
  };
  onArchiveTask?: () => void;
  onPinTask?: () => void;
  size?: number;
}

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask, size = 12,  ...props } : ITaskProps) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} {...props} style={{fontSize: size}}/>
    </div>
  );
}
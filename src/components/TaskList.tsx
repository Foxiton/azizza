import React from 'react';

import Task, {ITaskProps} from './Task';

export interface ITaskListProps {
    loading: boolean;
    onPinTask: ITaskProps['onPinTask'];
    onArchiveTask: ITaskProps['onArchiveTask'];
    tasks: ITaskProps['task'][];
}

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }: ITaskListProps) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
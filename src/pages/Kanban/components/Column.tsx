import React from 'react';
import Card from './Card';

type ColumnTitle = 'To do' | 'In progress' | 'Done';

interface Task {
  title: string;
  status: string;
  priority: 'Low' | 'Mid' | 'High';
  progress: number;
  commentsCount: number;
  tasksCompleted: number;
  image?: string;
}

interface ColumnProps {
  title: ColumnTitle;
  onAddTask: () => void;
  tasks: Task[];
}

const Column: React.FC<ColumnProps> = ({ title, onAddTask, tasks }) => {
  const headerColors: Record<ColumnTitle, string> = {
    'To do': 'bg-blue-100 text-blue-500',
    'In progress': 'bg-yellow-100 text-yellow-500',
    'Done': 'bg-green-100 text-green-500',
  };

  const taskCountColors: Record<ColumnTitle, string> = {
    'To do': 'bg-blue-500',
    'In progress': 'bg-yellow-500',
    'Done': 'bg-green-500',
  };

  return (
    <div className="h-[553px] w-[310px] bg-[rgba(30,41,59,0.1)] mt-[24px] rounded-xl shadow-sm">
      <div className={`w-full h-[45px] flex justify-between items-center p-2 rounded-t-xl ${headerColors[title]}`}>
        <div className="flex items-center gap-2">
          <span className={`${taskCountColors[title]} text-white rounded-full w-6 h-6 flex items-center justify-center text-sm`}>
            {tasks.length}
          </span>
          <h2 className="font-medium">{title}</h2>
        </div>
        <button onClick={onAddTask} className="text-gray-400 hover:text-gray-600 text-xl">
          +
        </button>
      </div>
      <div className="p-4 space-y-3 overflow-y-auto overflow-x-hidden h-[calc(100%-45px)]">
        {tasks.map((task, index) => (
          <Card
            key={index}
            title={task.title}
            status={task.status}
            priority={task.priority}
            progress={task.progress}
            commentsCount={task.commentsCount}
            tasksCompleted={task.tasksCompleted}
            image={task.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;

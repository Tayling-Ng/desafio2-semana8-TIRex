import React, { useState } from 'react';
import Column from './Column';
import Sidebar from './Sidebar';
import Modal from './Modal';

const Board: React.FC = () => {
const [isModalOpen, setModalOpen] = useState(false);
const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

const handleAddTask = () => {
setModalOpen(true);
};

const tasksToDo = [
{ title: 'Task 1', priority: 'High' as const, progress: 50, comments: 10, tasksCompleted: 5 },
{ title: 'Task 2', priority: 'Low' as const, progress: 20, comments: 2, tasksCompleted: 1 },
];

const tasksInProgress = [
{ title: 'Task 3', priority: 'Mid' as const, progress: 70, comments: 5, tasksCompleted: 3 },
{ title: 'Task 3', priority: 'Mid' as const, progress: 70, comments: 5, tasksCompleted: 3 },
{ title: 'Task 3', priority: 'Mid' as const, progress: 70, comments: 5, tasksCompleted: 3 },
];

const tasksDone = [
{ title: 'Task 4', priority: 'High' as const, progress: 100, comments: 8, tasksCompleted: 8 },
];

return (
<div className="flex justify-center items-start min-h-screen ml-[35px]">
<div className="flex space-x-4 p-4">
<Column title="To do" onAddTask={handleAddTask} tasks={tasksToDo} />
<Column title="In progress" onAddTask={handleAddTask} tasks={tasksInProgress} />
<Column title="Done" onAddTask={handleAddTask} tasks={tasksDone} />
</div>
<div className="ml-[65px]">
<Sidebar isCollapsed={isSidebarCollapsed} onToggle={() => setSidebarCollapsed(!isSidebarCollapsed)} />
</div>
<Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
</div>
);
};

export default Board;
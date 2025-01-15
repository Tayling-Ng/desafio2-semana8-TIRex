import React, { useEffect, useState } from 'react';
import Column from './Column';
import Sidebar from './Sidebar';
import Modal from './Modal';
import useListTask from '../../../hooks/useListTask';

const Board: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const { loading, listTask, getListTasks  } = useListTask();

  const handleAddTask = () => {
    setModalOpen(true);
  };

  const tasksToDo = listTask.filter(task => task.status === "To do");
  const tasksInProgress = listTask.filter(task => task.status === "In progress");
  const tasksDone = listTask.filter(task => task.status === "Done");

  useEffect(() => {getListTasks()}, [getListTasks] )

 
  if (loading) {
    return <div>Loading...</div>;
  }

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

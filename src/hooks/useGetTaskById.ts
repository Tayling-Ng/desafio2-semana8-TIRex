import { useState, useEffect } from 'react';

interface ITask {
  id: string;
  priority: 'Low' | 'Mid' | 'High';
  title: string;
  status: string
  members: string[];
  commentsCount: number;
  tasksCompleted: number;
  progress: number;
  startDate: string;
  endDate: string;
  timeEstimate: string;
  createdBy: string;
}

const useGetTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3000/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, loading };
};

export default useGetTasks;

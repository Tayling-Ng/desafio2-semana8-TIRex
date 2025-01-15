import React from 'react';
import avatar1 from '../../../assets/img-kanban/avatar1.png';
import commentIcon from '../../../assets/img-kanban/comment.png';
import taskIcon from '../../../assets/img-kanban/task.png'; 

interface CardProps {
  id: string;
  priority: string;
  title: string;
  status: string;
  members: string[];
  commentsCount: number;
  progress: number;
  startDate: string;
  endDate: string;
  timeEstimate: string;
  createdBy: string;
  tasksCompleted: number;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, priority, progress, commentsCount, tasksCompleted, image }) => {
  const priorityColors = {
    Low: 'bg-[#eef2ff] text-[#4f46e5]',
    Mid: 'bg-[#fffbeb] text-[#f59e0b]',
    High: 'bg-[#bd2323] text-white',
  };

  return (
    <div className="bg-white p-4 rounded-l-[15px] rounded-r-[15px] shadow mb-4 w-[278px] h-[182px]">
      <div className="flex flex-col items-start">
        <div className={`flex justify-center items-center p-1 rounded-full ${priorityColors[priority as keyof typeof priorityColors]}`}>
          <span className="font-semibold text-xs">{priority}</span>
        </div>
        {image && <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg mt-2" />}
        <h3 className="font-bold text-lg text-gray-800 mt-2">{title}</h3>
        <div className="flex justify-between items-center w-full mt-2">
          <span className="text-gray-600 text-sm">Progress</span>
          <span className="font-bold text-sm text-gray-800">{progress}%</span>
        </div>
        <div className="relative w-full h-2 bg-gray-200 rounded-full mt-1">
          <div className="absolute h-2 bg-indigo-600 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <div className="flex -space-x-2">
            <img src={avatar1} alt="Avatar" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src={avatar1} alt="Avatar" className="w-6 h-6 rounded-full border-2 border-white" />
          </div>
          <div className="flex items-center gap-4 ml-8 text-gray-500 text-xs">
            <div className="flex items-center gap-">
              <img src={commentIcon} alt="Comments" className="w-4 h-4" />
              <span>{commentsCount} comments</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={taskIcon} alt="Tasks" className="w-4 h-4 " />
              <span>{tasksCompleted} tasks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
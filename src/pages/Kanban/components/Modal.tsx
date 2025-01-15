import React, { useState } from 'react';
import useCreateTask from '../../../hooks/useCreateTask';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [taskData, setTaskData] = useState({
    priority: '',
    title: '',
    status: '',
    description: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',    
    assignedTo: '',
    progress: 0,
    commentsCount: 0,
    tasksCompleted: 0
  });

  const getRandomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const calculateTimeEstimate = (startDate: string, startTime: string, endDate: string, endTime: string) => {
    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);

    const timeDiff = endDateTime.getTime() - startDateTime.getTime();

    const hours = Math.floor(timeDiff / (1000 * 3600));
    const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));

    return { hours, minutes };
  };

  const { createTask, isSubmit } = useCreateTask();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const timeEstimate = calculateTimeEstimate(taskData.startDate, taskData.startTime, taskData.endDate, taskData.endTime);

    const newTaskData = {
      ...taskData,
      progress: getRandomValue(0, 100),
      commentsCount: getRandomValue(1, 10), 
      tasksCompleted: getRandomValue(1, 10),
      timeEstimate: timeEstimate,
    };
    
    try {
      
      await createTask(newTaskData);
      alert('Formulário enviado com sucesso!');
      onClose(); 
    } catch (err) {
      console.error('Erro ao criar tarefa:', err);
      alert('Erro ao criar tarefa.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="w-[1001px] h-[584px] bg-neutral-50 rounded-[15px] relative p-8 flex flex-col justify-between">
        <button onClick={onClose} className="absolute top-[19px] right-[40px] w-[25px] h-[25px]">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 6.25L6.25 18.75" stroke="#33363F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.25 6.25L18.75 18.75" stroke="#33363F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="text-[#160a60] text-[26px] font-semibold font-['Roboto'] leading-9 mb-4">Create new task</h2>
        <form className="flex gap-8" onSubmit={handleSubmit}>
          <div className="flex-1">
            {/* Title Input */}
            <div className="mb-4">
              <label className="block text-[#331436] text-sm font-medium font-['Roboto'] leading-tight mb-1">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter the title of the task"
                className="w-full h-9 pl-3 pr-3 py-2 bg-white rounded-md border border-black/10 text-sm"
                value={taskData.title}
                onChange={handleChange}
              />
            </div>

            {/* Status Radio Buttons */}
            <div className="mb-4">
              <div className="Input w-[467px] h-[60px] pb-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="Title w-[520px] text-[#331436] text-sm font-medium font-['Roboto'] leading-tight">Status</div>
                <div className="RadioGroup self-stretch justify-start items-start gap-[25px] inline-flex">
                  <label className="CheckboxRadio pr-[13px] justify-start items-center gap-[7px] flex">
                    <input
                      type="radio"
                      name="status"
                      value="To do"
                      checked={taskData.status === 'To do'}
                      onChange={handleRadioChange}
                      className="hidden"
                    />
                    <div 
                      onClick={() => setTaskData(prev => ({ ...prev, status: 'To do' }))} 
                      className={`w-6 h-6 relative rounded-lg border ${taskData.status === 'To do' ? 'bg-[#5570F1]' : 'border-black/25'} flex justify-center items-center`}
                    >
                      
                    </div>
                    <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">To do</span>
                  </label>
                  <label className="CheckboxRadio justify-center items-center gap-[7px] flex">
                    <input
                      type="radio"
                      name="status"
                      value="In progress"
                      checked={taskData.status === 'In progress'}
                      onChange={handleRadioChange}
                      className="hidden"
                    />
                    <div 
                      onClick={() => setTaskData(prev => ({ ...prev, status: 'In progress' }))} 
                      className={`w-6 h-6 relative rounded-lg border ${taskData.status === 'In progress' ? 'bg-[#F59E0B]' : 'border-black/25'} flex justify-center items-center`}
                    >
                      
                    </div>
                    <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">In progress</span>
                  </label>
                  <label className="CheckboxRadio pr-4 justify-start items-center gap-[7px] flex">
                    <input
                      type="radio"
                      name="status"
                      value="Done"
                      checked={taskData.status === 'Done'}
                      onChange={handleRadioChange}
                      className="hidden"
                    />
                    <div 
                      onClick={() => setTaskData(prev => ({ ...prev, status: 'Done' }))} 
                      className={`w-6 h-6 relative rounded-lg border ${taskData.status === 'Done' ? 'bg-[#BD2323]' : 'border-black/25'} flex justify-center items-center`}
                    >
                      
                    </div>
                    <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">Done</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Description Textarea */}
            <div className="mb-4">
              <label className="block text-[#331436] text-sm font-medium font-['Roboto'] leading-tight mb-1">Description</label>
              <textarea
                name="description"
                placeholder="Enter a description"
                className="w-full h-24 pl-3 pr-3 pt-2 pb-2 bg-white rounded-md border border-black/10 text-sm"
                value={taskData.description}
                onChange={handleChange}
              />
            </div>

            {/* Date Inputs */}
            <div className="flex gap-4 mb-4">
              <div>
                <label className="block text-[#331436] text-sm font-medium font-['Roboto'] mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="w-full h-10 px-4 py-2 rounded-lg border border-black/10"
                  value={taskData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-[#331436] text-sm font-medium font-['Roboto'] mb-2">Time</label>
                <input
                  type="time"
                  name="startTime"
                  className="w-full h-10 px-4 py-2 rounded-lg border border-black/10"
                  value={taskData.startTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* End Date Inputs */}
            <div className="flex gap-4">
              <div>
                <label className="block text-[#331436] text-sm font-medium font-['Roboto'] mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="w-full h-10 px-4 py-2 rounded-lg border border-black/10"
                  value={taskData.endDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-[#331436] text-sm font-medium font-['Roboto'] mb-2">Time</label>
                <input
                  type="time"
                  name="endTime"
                  className="w-full h-10 px-4 py-2 rounded-lg border border-black/10"
                  value={taskData.endTime}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
          <div className="mb-4">
              <label className="block text-[#331436] text-sm font-medium font-['Roboto'] leading-tight mb-1">Task cover</label>
              <div className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center">
                <p>Drop here to attach or <span className="text-blue-500 cursor-pointer">upload</span></p>
                <p className="text-xs text-gray-500">Max size: 5GB</p>
              </div>
            </div>
            

            {/* Add People */}
            <div className="mb-4">
              <label className="block text-[#331436] text-sm font-medium font-['Roboto'] leading-tight mb-1">Add people</label>
              <input
                type="text"
                name="assignedTo"
                placeholder="e.g. John Doe"
                className="w-full h-9 pl-3 pr-3 py-2 bg-white rounded-md border border-black/10 text-sm"
                value={taskData.assignedTo}
                onChange={handleChange}
              />
            </div>

            {/* Priority Radio Buttons */}
            <div className="mb-4">
              <label className="block text-[#331436] text-sm font-medium font-['Roboto'] leading-tight mb-1">Priority</label>
              <div className="flex gap-4">
                <label className="CheckboxRadio flex items-center gap-2">
                  <input
                    type="radio"
                    name="priority"
                    value="Low"
                    checked={taskData.priority === 'Low'}
                    onChange={handleRadioChange}
                    className="hidden"
                  />
                  <div
                    onClick={() => setTaskData(prev => ({ ...prev, priority: 'Low' }))}
                    className={`w-6 h-6 relative rounded-lg border ${taskData.priority === 'Low' ? 'bg-[#5570F1]' : 'border-black/25'} flex justify-center items-center`}
                  >
                    
                  </div>
                  <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">Low</span>
                </label>
                <label className="CheckboxRadio flex items-center gap-2">
                  <input
                    type="radio"
                    name="priority"
                    value="Mid"
                    checked={taskData.priority === 'Mid'}
                    onChange={handleRadioChange}
                    className="hidden"
                  />
                  <div
                    onClick={() => setTaskData(prev => ({ ...prev, priority: 'Mid' }))}
                    className={`w-6 h-6 relative rounded-lg border ${taskData.priority === 'Mid' ? 'bg-[#F59E0B]' : 'border-black/25'} flex justify-center items-center`}
                  >
                    
                  </div>
                  <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">Mid</span>
                </label>
                <label className="CheckboxRadio flex items-center gap-2">
                  <input
                    type="radio"
                    name="priority"
                    value="High"
                    checked={taskData.priority === 'High'}
                    onChange={handleRadioChange}
                    className="hidden"
                  />
                  <div
                    onClick={() => setTaskData(prev => ({ ...prev, priority: 'High' }))}
                    className={`w-6 h-6 relative rounded-lg border ${taskData.priority === 'High' ? 'bg-[#BD2323]' : 'border-black/25'} flex justify-center items-center`}
                  >
                    
                  </div>
                  <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">High</span>
                </label>
              </div>
              <div className="flex justify-start">
            <button
              type="submit"
              className="mt-6 w-[410px] h-[48px] py-2 bg-[#22C55E] text-white rounded-md text-sm font-medium self-start"
              disabled={isSubmit}
            >
              {isSubmit ? 'Creating...' : 'Create Task'}
            </button>
            </div>
          </div>

          {/* Create Button */}
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

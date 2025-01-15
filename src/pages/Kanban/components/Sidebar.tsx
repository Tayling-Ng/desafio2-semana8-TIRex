import React from 'react';
import avatar1 from '../../../assets/img-kanban/avatar1.png';
import pin from '../../../assets/img-kanban/pin.png';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  todoCount: number;
  inProgressCount: number;
  doneCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle, todoCount, inProgressCount, doneCount }) => {
  return (
    <div className={`${isCollapsed ? 'w-[45px] h-[45px] mt-[15px]' : 'w-[298px] h-[538px] mt-[41px] mb-[46px] mr-[25px]'} bg-[#6b7d95] rounded-[30px] mr-[35px] transition-all duration-300`}>
      <div className="flex justify-between items-center p-4">
        {!isCollapsed && <span className="text-white text-base font-bold font-['Roboto'] leading-snug pl-[8px]">In this project</span>}
        <div className="w-3 h-[20px] mr-1 bg-[#6b7d95] cursor-pointer" onClick={onToggle}>
          <img src={pin} alt="" />
        </div>
      </div>
      
      {!isCollapsed && (
        <div className="flex flex-col items-start p-0 gap-[10px] w-[255px] mx-auto">
          <div className="w-full h-[55px] bg-white rounded-l-[15px] rounded-r-[15px] p-2 flex items-center gap-2">
            <img src={avatar1} alt="" className="w-8 h-8 rounded-full"/>
            <div>
              <p className="text-black text-base font-bold font-['Roboto'] leading-snug">John Doe</p>
              <p className="text-[8px] text-[#160a60] font-bold font-['Roboto'] leading-snug">Project Manager</p>
            </div>
          </div>
          
          <div className="w-full h-[55px] bg-white rounded-l-[15px] rounded-r-[15px] p-2 flex items-center gap-2">
            <img src={avatar1} alt="" className="w-8 h-8 rounded-full"/>
            <div>
              <p className="text-black text-base font-bold font-['Roboto'] leading-snug">Jane Doe</p>
              <p className="text-[8px] text-[#160a60] font-bold font-['Roboto'] leading-snug">Analyst</p>
            </div>
          </div>
          
          <div className="w-full h-[55px] bg-white rounded-l-[15px] rounded-r-[15px] p-2 flex items-center gap-2">
            <img src={avatar1} alt="" className="w-8 h-8 rounded-full"/>
            <div>
              <p className="text-black text-base font-bold font-['Roboto'] leading-snug">John Doe</p>
              <p className="text-[8px] text-[#160a60] font-bold font-['Roboto'] leading-snug">Project Manager</p>
            </div>
          </div>
          <div className="w-[214px] ml-[40px] h-[22px] text-right text-[#c6c3ff] text-[8px] font-bold font-['Roboto'] leading-snug">View all (10)</div>
          <span className="text-white text-base font-bold font-['Roboto'] leading-snug">Metrics</span>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <div className='w-[135px] h-[115px] rounded-l-[15px] rounded-r-[15px] bg-white'>
                <span className="w-[59px] h-[22px] pl-[9px] text-[#160a60] text-[15px] font-bold font-['Roboto'] leading-snug">Total tasks</span>
                <div className="flex items-center gap-2 -mb-2">
                  <span className="text-2xl text-[#4f46e5] font-bold font-['Roboto'] pl-[8px] text-center">{todoCount}</span>
                  <span className="text-[#160a60] text-sm font-bold font-['Roboto'] leading-snug">To do</span>
                </div>
                <div className="flex items-center gap-2 -mb-2">
                  <span className="text-2xl text-[#f59e0b] font-bold font-['Roboto'] pl-[8px]">{inProgressCount}</span>
                  <span className="text-[#160a60] text-sm font-bold font-['Roboto'] leading-snug">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-[#22c55e] font-bold font-['Roboto'] pl-[8px]">{doneCount}</span>
                  <span className="text-[#160a60] text-sm font-bold font-['Roboto'] leading-snug">Done</span>
                </div>
              </div>
              <div className='w-[135px] h-[76px] rounded-[15px] bg-white flex flex-col justify-center p-2'>
                <span className="flex-grow flex items-center justify-center text-[#160a60] text-[13px] font-bold font-['Roboto'] leading-snug whitespace-nowrap">Total time estimated</span>
                <span className="text-[#160a60] text-[32px] flex-grow flex items-center justify-center font-bold">00:00</span>
              </div>
            </div>
            <div className='w-[109px] h-[200px] rounded-[15px] bg-white flex flex-col p-3'>
              <span className="text-[#160a60] text-[15px] font-bold font-['Roboto'] leading-snug">Most active</span>
              <span className="text-xs text-indigo-600 font-bold font-['Roboto'] leading-snug">last 30 days</span>
              <div className="flex flex-col items-start p-0 gap-[10px] w-[255px] mx-auto">
                <div className="w-[106px] h-[41px] bg-white rounded-l-[15px] rounded-r-[15px] p-2 flex items-center gap-2 -ml-3">
                  <img src={avatar1} alt="" className="w-8 h-8 rounded-full"/>
                  <div>
                    <p className="text-black text-[10px] text-base font-bold font-['Roboto'] leading-snug">John Doe</p>
                    <p className="text-[5px] text-[#160a60] font-bold font-['Roboto'] leading-snug">Project manager</p>
                  </div>
                </div>
                <div className="w-[106px] h-[41px] bg-white rounded-l-[15px] rounded-r-[15px] p-2 flex items-center gap-2 -ml-3">
                  <img src={avatar1} alt="" className="w-8 h-8 rounded-full"/>
                  <div>
                    <p className="text-black text-[10px] text-base font-bold font-['Roboto'] leading-snug">John Doe</p>
                    <p className="text-[5px] text-[#160a60] font-bold font-['Roboto'] leading-snug">Project manager</p>
                  </div>
                </div>
                <div className="w-[106px] h-[41px] bg-white rounded-l-[15px] rounded-r-[15px] p-2 flex items-center gap-2 -ml-3">
                  <img src={avatar1} alt="" className="w-8 h-8 rounded-full"/>
                  <div>
                    <p className="text-black text-[10px] text-base font-bold font-['Roboto'] leading-snug">John Doe</p>
                    <p className="text-[5px] text-[#160a60] font-bold font-['Roboto'] leading-snug">Project manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
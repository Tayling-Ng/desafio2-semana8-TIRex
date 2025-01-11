import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
        <form className="flex gap-8">
          <div className="flex-1">
            <div className="mb-4">
              <label className="block text-[#331436] text-sm font-medium font-['Roboto'] leading-tight mb-1">Title</label>
              <input type="text" placeholder="Enter the title of the task" className="w-full h-9 pl-3 pr-3 py-2 bg-white rounded-md border border-black/10 text-sm" />
            </div>
            <div className="mb-4">
              <div className="Input w-[467px] h-[60px] pb-1.5 flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
                <div className="Title w-[520px] text-[#331436] text-sm font-medium font-['Roboto'] leading-tight">Status</div>
                <div className="RadioGroup self-stretch justify-start items-start gap-[25px] inline-flex">
                  <label className="CheckboxRadio pr-[13px] justify-start items-center gap-[7px] flex">
                    <input type="radio" name="status" className="hidden" />
                    <div className="w-6 h-6 relative rounded-lg border border-black/25 flex justify-center items-center">
                      <div className="w-5 h-5 bg-white rounded-md"></div>
                    </div>
                    <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">To do</span>
                  </label>
                  <label className="CheckboxRadio justify-center items-center gap-[7px] flex">
                    <input type="radio" name="status" className="hidden" />
                    <div className="w-6 h-6 relative rounded-lg border border-black/25 flex justify-center items-center">
                      <div className="w-5 h-5 bg-white rounded-md"></div>
                    </div>
                    <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">In progress</span>
                  </label>
                  <label className="CheckboxRadio pr-4 justify-start items-center gap-[7px] flex">
                    <input type="radio" name="status" className="hidden" />
                    <div className="w-6 h-6 relative rounded-lg border border-black/25 flex justify-center items-center">
                      <div className="w-5 h-5 bg-white rounded-md"></div>
                    </div>
                    <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">Done</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[#331436] text-sm font-medium font-['Roboto'] leading-tight mb-1">Description</label>
              <textarea placeholder="Enter a description" className="w-full h-24 pl-3 pr-3 pt-2 pb-2 bg-white rounded-md border border-black/10 text-sm"></textarea>
            </div>
            <div className="flex gap-4 mb-4">
              <div>
                <label className="block text-[#331436] text-sm font-medium font-['Roboto'] mb-2">Start Date</label>
                <input type="date" className="w-full h-10 px-4 py-2 rounded-lg border border-black/10" />
              </div>
              <div>
                <label className="block text-[#331436] text-sm font-medium font-['Roboto'] mb-2">Time</label>
                <input type="time" className="w-full h-10 px-4 py-2 rounded-lg border border-black/10" />
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <label className="block text-[#331436] text-sm font-medium font-['Roboto'] mb-2">End Date</label>
                <input type="date" className="w-full h-10 px-4 py-2 rounded-lg border border-black/10" />
              </div>
              <div>
                <label className="block text-[#331436] text-sm font-medium font-['Roboto'] mb-2">Time</label>
                <input type="time" className="w-full h-10 px-4 py-2 rounded-lg border border-black/10" />
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
            <div className="mb-4">
              <label className="block text-[#331436] text-sm font-medium font-['Roboto'] leading-tight mb-1">Add people</label>
              <input type="text" placeholder="e.g. John Doe" className="w-full h-9 pl-3 pr-3 py-2 bg-white rounded-md border border-black/10 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-[#331436] text-sm font-medium font-['Roboto'] leading-tight mb-1">Priority</label>
              <div className="flex gap-4">
                <label className="CheckboxRadio flex items-center gap-2">
                  <input type="radio" name="priority" className="hidden" />
                  <div className="w-6 h-6 relative rounded-lg border border-black/25 flex justify-center items-center">
                    <div className="w-5 h-5 bg-white rounded-md"></div>
                  </div>
                  <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">Low</span>
                </label>
                <label className="CheckboxRadio flex items-center gap-2">
                  <input type="radio" name="priority" className="hidden" />
                  <div className="w-6 h-6 relative rounded-lg border border-black/25 flex justify-center items-center">
                    <div className="w-5 h-5 bg-white rounded-md"></div>
                  </div>
                  <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">Mid</span>
                </label>
                <label className="CheckboxRadio flex items-center gap-2">
                  <input type="radio" name="priority" className="hidden" />
                  <div className="w-6 h-6 relative rounded-lg border border-black/25 flex justify-center items-center">
                    <div className="w-5 h-5 bg-white rounded-md"></div>
                  </div>
                  <span className="text-[#2a2f31] text-sm font-normal font-['Inter']">High</span>
                </label>
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-end">
          <button type="submit" className="w-[410px] h-12 p-3 bg-green-500 rounded-lg text-white text-base font-medium font-['Roboto'] leading-normal">Create!</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
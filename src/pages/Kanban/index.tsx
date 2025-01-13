// src/App.tsx
import React, { useState } from 'react';
import Board from './components/Board';
import Modal from './components/Modal';

export const KanbanPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Board />
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
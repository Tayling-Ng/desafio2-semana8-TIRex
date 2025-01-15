// src/App.tsx
import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import Modal from './components/Modal';
import { useLoginContext } from '../../context/loginContext';
import { useNavigate } from 'react-router';

export const KanbanPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
 
  const { isAuthenticated } = useLoginContext()
 
  useEffect(()=> {
    if(!isAuthenticated){
      navigate('/login')
      return
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Board />
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { KanbanPage } from './Kanban';

export const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} index />
            <Route path="/kanban" element={<KanbanPage />} />
        </Routes>
    );
};

import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home/home';
import PageNotFound from './PageNotFound/PageNotFound';
import Error403 from './Error-403/Error-403';
import Login from './login/Login';
import Signup from './signup/Signup';
import { KanbanPage } from './Kanban';
import Settings from './settings/Settings';
import Profile from './profile/profile';

export const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} index />
            <Route path="/forbidden" element={<Error403 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/kanban" element={<KanbanPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            {/* pageNotFound tem que ser o último */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

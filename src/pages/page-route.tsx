import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home/home';

export const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} index />
            {/* <Route path="/useState" element={<UseStatePage />} /> */}
        </Routes>
    );
};

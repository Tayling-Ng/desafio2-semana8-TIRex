import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home/home';
import PageNotFound from './PageNotFound/PageNotFound';

export const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} index />

            {/* pageNotFound tem que ser o último */}
            <Route path="*" element={<PageNotFound />} /> 
          
        </Routes>
    );
};

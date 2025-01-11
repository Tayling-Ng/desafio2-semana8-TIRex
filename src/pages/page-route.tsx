import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home/home';
import PageNotFound from './PageNotFound/PageNotFound';
import Error403 from './Error-403/Error-403';

export const PageRoute = () => {
    return (
        <Routes >
            <Route path="/" element={<HomePage />} index />
            <Route path="/forbidden" element={<Error403 />} />
            {/* pageNotFound tem que ser o último */}
            <Route path="*" element={<PageNotFound />} /> 
          
        </Routes>
    );
};

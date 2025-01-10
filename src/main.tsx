import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PageRoute } from './pages/page-route';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <PageRoute />
        </BrowserRouter>
    </StrictMode>
);

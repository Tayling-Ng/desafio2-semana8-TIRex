import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PageRoute } from './pages/page-route';
import Header from './components/Header/Header'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
        <Header />
            <PageRoute />
        </BrowserRouter>
    </StrictMode>
);

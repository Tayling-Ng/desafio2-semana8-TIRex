import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"; 
//import Login from "./pages/login/Login";
import { PageRoute } from "./pages/page-route";

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <Router>  
    <PageRoute />  
  </Router>
</StrictMode>,
);

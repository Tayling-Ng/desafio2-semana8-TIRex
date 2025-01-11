import { BrowserRouter as Router } from 'react-router-dom';
// import { ClerkProvider } from '@clerk/clerk-react';
import { PageRoute } from './pages/page-route';

function App() {
    return (
      <Router>
        <PageRoute />
      </Router>
    );
}

export default App;

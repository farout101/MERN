import { createRoot } from 'react-dom/client';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import './index.css';

import Routes from './routes/Index.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <Routes/>
  </AuthContextProvider>
);
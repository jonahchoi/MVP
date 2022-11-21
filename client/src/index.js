import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Hooks/useAuth.js';
import { StorageProvider } from './Hooks/useStorage.js';

const root = createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <StorageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StorageProvider>
  </AuthProvider>
);
import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

// Importamos al componente padre
import App from './App.jsx';

// Importación de bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Importación del diseño con css
import './index.css';

// Importacion para cambiar de pagina
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
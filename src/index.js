import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { AppProvider } from './context/productcontext';
import { FilterContextProvider } from './context/filtercontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FilterContextProvider>
  </AppProvider>
);

import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated to 'react-dom/client' for React 18
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// If you are using service workers, ensure the import path is correct
// import registerServiceWorker from './Components/Services'; 

// Create root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped in BrowserRouter for routing
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// Uncomment the next line if you want to use the service worker
// registerServiceWorker();

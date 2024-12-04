import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import App from "./App";
import "./styles/index.css"; // Import Tailwind CSS here
import "./styles/index.scss";

import { BrowserRouter } from 'react-router-dom'; // Only wrap the entire app with BrowserRouter
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);

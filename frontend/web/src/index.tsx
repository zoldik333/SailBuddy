import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './homepage';
import reportWebVitals from './reportWebVitals';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import History from "./history";
import Help from "./help";
import Profile from "./profile";
import Dashboard from "./dashboard";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex h-full">
        <Navbar />

        <div className="flex-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/history" element={<History />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

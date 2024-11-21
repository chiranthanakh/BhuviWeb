import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Components/Login';
import Sites from "./Components/Sites";
import DetailPage from "./Components/DetailPage";
import LauncherDetailPage from "./Components/LauncherDetailPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
    <Router>
      <Routes>
        <Route path="/login/:usertype" element={<LoginPage />} />
        <Route path="/" element={<App />} />
        <Route path="/Subitems/Sites" element={<Sites />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/launcher-detail/:id" element={<LauncherDetailPage />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

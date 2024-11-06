import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Components/Login';
import Sites from "./Components/Sites";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
    <Router>
      <Routes>
        <Route path="/login/:usertype" element={<LoginPage />} />
        <Route path="/" element={<App />} />
        <Route path="/Subitems/Sites" element={<Sites />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

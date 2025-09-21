import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import StudyPage from './pages/StudyPage';
import RedoPage from './pages/RedoPage'; // Corrected import path for RedoPage
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study-selection" element={<CategorySelectionPage />} />
        <Route path="/study/:category" element={<StudyPage />} />
        <Route path="/redo" element={<RedoPage />} />
        {/* Add routes for Quiz and Stats pages later */}
      </Routes>
    </Router>
  </React.StrictMode>,
);

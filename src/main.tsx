import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import StudyPage from './pages/StudyPage';
import QuizSelectionPage from './pages/QuizSelectionPage';
import QuizMultipleChoice from './pages/QuizMultipleChoice';
import QuizFillInTheBlank from './pages/QuizFillInTheBlank';
import StatsPage from './pages/StatsPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study" element={<CategorySelectionPage mode="study" />} />
        <Route path="/study/:category" element={<StudyPage />} />
        <Route path="/quiz" element={<CategorySelectionPage mode="quiz" />} />
        <Route path="/quiz/selection" element={<QuizSelectionPage />} />
        <Route path="/quiz/multiple-choice/:category" element={<QuizMultipleChoice />} />
        <Route path="/quiz/fill-in-the-blank/:category" element={<QuizFillInTheBlank />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

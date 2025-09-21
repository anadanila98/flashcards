import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <h1>Welcome to Spanish Flashcards!</h1>
      <div className="home-buttons">
        <Link to="/study-selection">
          <button className="home-button">Start Study</button>
        </Link>
        <Link to="/quiz-selection">
          <button className="home-button">Start Quiz</button>
        </Link>
        <Link to="/stats">
          <button className="home-button">View Statistics</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
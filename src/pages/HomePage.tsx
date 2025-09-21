import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Spanish Flashcards!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/study">Study Mode</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz Mode</Link>
          </li>
          <li>
            <Link to="/stats">Stats Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
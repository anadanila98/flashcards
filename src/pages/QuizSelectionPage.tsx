import React from 'react';
import { Link } from 'react-router-dom';
import { flashcards } from '../data/flashcards';

const QuizSelectionPage: React.FC = () => {
  const categories = Array.from(new Set(flashcards.map(card => card.category)));

  return (
    <div className="quiz-selection-page">
      <h1>Select a Category and Quiz Type</h1>
      <h2>Categories:</h2>
      <div className="category-list">
        {categories.map(category => (
          <div key={category}>
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <Link to={`/quiz/multiple-choice/${category}`}>
              <button>Multiple Choice</button>
            </Link>
            <Link to={`/quiz/fill-in-the-blank/${category}`}>
              <button>Fill in the Blank</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSelectionPage;
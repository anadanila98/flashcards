import React from 'react';
import { Link } from 'react-router-dom';
import { flashcards } from '../data/flashcards';

const CategorySelectionPage: React.FC<{ mode: 'study' | 'quiz' }> = ({ mode }) => {
  const categories = Array.from(new Set(flashcards.map(card => card.category)));

  return (
    <div className="category-selection-page">
      <h1>Select a Category to {mode === 'study' ? 'Study' : 'Quiz'}</h1>
      <div className="category-list">
        {categories.map(category => (
          <Link to={`/${mode}/${category}`} key={category}>
            <button>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySelectionPage;
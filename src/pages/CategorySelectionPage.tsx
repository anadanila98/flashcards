import React from 'react';
import { Link } from 'react-router-dom';
import { flashcards } from '../data/flashcards';

const CategorySelectionPage: React.FC = () => {
  const categories = Array.from(new Set(flashcards.map((card) => card.category)));

  return (
    <div className="category-selection-container">
      <h1>Select a Category to Study</h1>
      <div className="category-buttons">
        {categories.map((category) => (
          <Link to={`/study/${category}`} key={category}>
            <button className="category-button">{category.charAt(0).toUpperCase() + category.slice(1)}</button>
          </Link>
        ))}
      </div>
      <Link to="/">
        <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default CategorySelectionPage;
import React, { useEffect, useState } from 'react';
import { getStats, Stats } from '../data/stats';
import { Link } from 'react-router-dom';

const StatsPage: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    setStats(getStats());
  }, []);

  if (!stats) {
    return <div>Loading Stats...</div>;
  }

  const overallAccuracy = stats.totalStudied > 0
    ? ((stats.totalCorrect / stats.totalStudied) * 100).toFixed(2)
    : '0.00';

  return (
    <div className="stats-page">
      <h1>Your Learning Statistics</h1>
      <div className="overall-stats">
        <h2>Overall Progress</h2>
        <p>Total Cards Studied: {stats.totalStudied}</p>
        <p>Correct Answers: {stats.totalCorrect}</p>
        <p>Incorrect Answers: {stats.totalIncorrect}</p>
        <p>Accuracy: {overallAccuracy}%</p>
      </div>

      <h2>Breakdown by Category</h2>
      {Object.keys(stats.categories).length > 0 ? (
        <div className="category-stats">
          {Object.entries(stats.categories).map(([category, categoryStats]) => {
            const categoryAccuracy = categoryStats.studied > 0
              ? ((categoryStats.correct / categoryStats.studied) * 100).toFixed(2)
              : '0.00';
            return (
              <div key={category} className="category-item">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <p>Studied: {categoryStats.studied}</p>
                <p>Correct: {categoryStats.correct}</p>
                <p>Incorrect: {categoryStats.incorrect}</p>
                <p>Accuracy: {categoryAccuracy}%</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No category-specific data available yet. Start studying or quizzing!</p>
      )}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default StatsPage;
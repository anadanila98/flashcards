import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { flashcards, Flashcard as FlashcardType } from '../data/flashcards';
import Flashcard from '../components/Flashcard';
import { updateStats } from '../data/stats';

const StudyPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [filteredCards, setFilteredCards] = useState<FlashcardType[]>([]);
  const [incorrectCards, setIncorrectCards] = useState<FlashcardType[]>([]);
  const [isRedoSession, setIsRedoSession] = useState(false);

  useEffect(() => {
    const initialCards = category
      ? flashcards.filter(card => card.category === category)
      : flashcards;
    setFilteredCards(initialCards);
    setCurrentCardIndex(0);
    setIncorrectCards([]);
    setIsRedoSession(false);
  }, [category]);

  const startRedoSession = () => {
    setFilteredCards(incorrectCards);
    setCurrentCardIndex(0);
    setIncorrectCards([]);
    setIsRedoSession(true);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (category) {
      updateStats(category, isCorrect);
    } else {
      // Handle case where category is not defined, e.g., default category or error
    }
    if (!isCorrect) {
      setIncorrectCards(prev => [...prev, filteredCards[currentCardIndex]]);
    }
    handleNextCard();
  };

  const handleNextCard = () => {
    if (currentCardIndex < filteredCards.length - 1) {
      setCurrentCardIndex(prevIndex => prevIndex + 1);
    } else {
      // End of session logic
    }
  };

  if (filteredCards.length === 0 && !isRedoSession) {
    return <div>No flashcards found for this category.</div>;
  }

  return (
    <div className="study-page">
      <h1>
        {isRedoSession ? 'Redo Wrong Cards' : `Study Mode: ${category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Categories'}`}
      </h1>
      {currentCardIndex < filteredCards.length ? (
        <Flashcard card={filteredCards[currentCardIndex]} onAnswer={handleAnswer} />
      ) : (
        <div>
          <h2>Session Complete!</h2>
          <p>You got {incorrectCards.length} cards wrong.</p>
          {incorrectCards.length > 0 && !isRedoSession && (
            <button onClick={startRedoSession}>Redo Wrong Cards</button>
          )}
          {isRedoSession && incorrectCards.length === 0 && (
            <p>Great job! You got all the wrong cards correct!</p>
          )}
          <button onClick={() => {
            setIncorrectCards([]);
            navigate('/');
          }}>Clear Wrong Cards & Back to Home</button>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      )}
    </div>
  );
};

export default StudyPage;
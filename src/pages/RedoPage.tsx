import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { flashcards, Card as CardType } from '../data/flashcards';
import { Link } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'flashcard-incorrect-cards';

function RedoPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [incorrectCards, setIncorrectCards] = useState<CardType[]>(() => {
    const storedIncorrectCards = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedIncorrectCards ? JSON.parse(storedIncorrectCards) : [];
  });

  const cardsToDisplay = incorrectCards;
  const currentCard = cardsToDisplay[currentCardIndex];

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(incorrectCards));
  }, [incorrectCards]);

  const handleAnswer = (card: CardType, correct: boolean) => {
    if (!correct) {
      setIncorrectCards((prev) => {
        if (!prev.some(c => c.spanish === card.spanish)) {
          return [...prev, card];
        }
        return prev;
      });
    } else {
      // If correct in redo mode, remove from incorrectCards
      setIncorrectCards((prev) => prev.filter((c) => c.spanish !== card.spanish));
    }
    setCurrentCardIndex((prev) => (prev + 1) % cardsToDisplay.length);
  };

  const handleResetIncorrect = () => {
    setIncorrectCards([]);
    setCurrentCardIndex(0); 
  };

  if (cardsToDisplay.length === 0) {
    return (
      <div className="app-container">
        <h1>Redo Mode</h1>
        <p>No incorrect cards to redo!</p>
        <Link to="/">
          <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>Redo Mode</h1>
      {currentCard ? (
        <Card card={currentCard} onAnswer={handleAnswer} />
      ) : (
        <div>No cards to display.</div>
      )}

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={handleResetIncorrect} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Reset Incorrect Cards
        </button>
        <Link to="/">
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RedoPage;

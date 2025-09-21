import React, { useState } from 'react';
import { Card as CardType } from '../data/flashcards';

interface CardProps {
  card: CardType;
  onAnswer: (card: CardType, correct: boolean) => void;
}

const Card: React.FC<CardProps> = ({ card, onAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswer = (correct: boolean) => {
    onAnswer(card, correct);
    setIsFlipped(false); // Reset flip state for next card
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flashcard-front">
          <h3>{card.spanish}</h3>
        </div>
        <div className="flashcard-back">
          <h3>{card.english}</h3>
          <div className="buttons">
            <button onClick={() => handleAnswer(true)}>✅ I got it right</button>
            <button onClick={() => handleAnswer(false)}>❌ I got it wrong</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

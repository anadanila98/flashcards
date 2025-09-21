import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../data/flashcards';

interface FlashcardProps {
  card: FlashcardType;
  onAnswer: (isCorrect: boolean) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ card, onAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswer = (isCorrect: boolean) => {
    onAnswer(isCorrect);
    setIsFlipped(false); // Reset flip state for the next card
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{card.spanish}</p>
        </div>
        <div className="flashcard-back">
          <p>{card.english}</p>
          {isFlipped && (
            <div className="answer-buttons">
              <button onClick={(e) => { e.stopPropagation(); handleAnswer(true); }}>✅ Right</button>
              <button onClick={(e) => { e.stopPropagation(); handleAnswer(false); }}>❌ Wrong</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
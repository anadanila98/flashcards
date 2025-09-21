import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { flashcards, Flashcard as FlashcardType } from '../data/flashcards';
import { updateStats } from '../data/stats';

const QuizFillInTheBlank: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredCards, setFilteredCards] = useState<FlashcardType[]>([]);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (category) {
      setFilteredCards(flashcards.filter(card => card.category === category));
    } else {
      // Fallback or error handling if no category
    }
  }, [category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isAnswerCorrect = filteredCards[currentQuestionIndex].english.toLowerCase() === userAnswer.toLowerCase();
    setIsCorrect(isAnswerCorrect);
    if (category) {
      updateStats(category, isAnswerCorrect);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer('');
    setIsCorrect(null);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  if (filteredCards.length === 0) {
    return <div>No fill-in-the-blank quiz questions found for this category.</div>;
  }

  const currentCard = filteredCards[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <h1>Fill in the Blank Quiz: {category ? category.charAt(0).toUpperCase() + category.slice(1) : ''}</h1>
      <div className="question">
        <p className="spanish-word">{currentCard.spanish}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={isCorrect !== null}
            placeholder="Type the English translation"
          />
          <button type="submit" disabled={isCorrect !== null}>Submit</button>
        </form>
        {isCorrect !== null && (
          <div className="feedback">
            {isCorrect ? <p>✅ Correct!</p> : <p>❌ Wrong! The correct answer was: {currentCard.english}</p>}
            <button onClick={handleNextQuestion}>Next Question</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizFillInTheBlank;
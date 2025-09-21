import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { flashcards, Flashcard as FlashcardType } from '../data/flashcards';
import { updateStats } from '../data/stats';

const QuizMultipleChoice: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredCards, setFilteredCards] = useState<FlashcardType[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (category) {
      setFilteredCards(flashcards.filter(card => card.category === category && card.quiz?.type === 'multiple-choice'));
    } else {
      // Fallback or error handling if no category
    }
  }, [category]);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
    const isAnswerCorrect = filteredCards[currentQuestionIndex].english === answer;
    setIsCorrect(isAnswerCorrect);
    if (category) {
      updateStats(category, isAnswerCorrect);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  if (filteredCards.length === 0) {
    return <div>No multiple choice quiz questions found for this category.</div>;
  }

  const currentCard = filteredCards[currentQuestionIndex];

  if (!currentCard || !currentCard.quiz || currentCard.quiz.type !== 'multiple-choice') {
    return <div>Error: Invalid quiz card.</div>;
  }

  return (
    <div className="quiz-page">
      <h1>Multiple Choice Quiz: {category ? category.charAt(0).toUpperCase() + category.slice(1) : ''}</h1>
      <div className="question">
        <p className="spanish-word">{currentCard.spanish}</p>
        <div className="options">
          {currentCard.quiz.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(option)}
              disabled={selectedAnswer !== null}
              className={selectedAnswer === option ? (isCorrect ? 'correct' : 'incorrect') : ''}
            >
              {option}
            </button>
          ))}
        </div>
        {selectedAnswer !== null && (
          <div className="feedback">
            {isCorrect ? <p>✅ Correct!</p> : <p>❌ Wrong! The correct answer was: {currentCard.english}</p>}
            <button onClick={handleNextQuestion}>Next Question</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizMultipleChoice;
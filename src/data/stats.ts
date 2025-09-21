interface CategoryStats {
  studied: number;
  correct: number;
  incorrect: number;
}

interface Stats {
  totalStudied: number;
  totalCorrect: number;
  totalIncorrect: number;
  categories: { [key: string]: CategoryStats };
}

const STORAGE_KEY = 'flashcardStats';

export const getStats = (): Stats => {
  const storedStats = localStorage.getItem(STORAGE_KEY);
  if (storedStats) {
    return JSON.parse(storedStats);
  }
  return {
    totalStudied: 0,
    totalCorrect: 0,
    totalIncorrect: 0,
    categories: {},
  };
};

export const updateStats = (category: string, isCorrect: boolean) => {
  const stats = getStats();

  stats.totalStudied++;
  if (isCorrect) {
    stats.totalCorrect++;
  } else {
    stats.totalIncorrect++;
  }

  if (!stats.categories[category]) {
    stats.categories[category] = { studied: 0, correct: 0, incorrect: 0 };
  }
  stats.categories[category].studied++;
  if (isCorrect) {
    stats.categories[category].correct++;
  } else {
    stats.categories[category].incorrect++;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
};

export const resetStats = () => {
  localStorage.removeItem(STORAGE_KEY);
};
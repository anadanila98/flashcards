export interface Card {
  category: string;
  spanish: string;
  english: string;
  quiz?: {
    type: "multiple-choice";
    options: string[];
  };
}

export const flashcards: Card[] = [
  {
    category: "animals",
    spanish: "el gato",
    english: "the cat",
    quiz: {
      type: "multiple-choice",
      options: ["the dog", "the house", "the cat", "the bird"],
    },
  },
  {
    category: "animals",
    spanish: "el perro",
    english: "the dog",
    quiz: {
      type: "multiple-choice",
      options: ["the cat", "the mouse", "the dog", "the bird"],
    },
  },
  {
    category: "food",
    spanish: "la manzana",
    english: "the apple",
    quiz: {
      type: "multiple-choice",
      options: ["the banana", "the orange", "the apple", "the grape"],
    },
  },
  {
    category: "food",
    spanish: "el pan",
    english: "the bread",
    quiz: {
      type: "multiple-choice",
      options: ["the water", "the milk", "the bread", "the cheese"],
    },
  },
  {
    category: "verbs",
    spanish: "comer",
    english: "to eat",
  },
  {
    category: "verbs",
    spanish: "beber",
    english: "to drink",
  },
];
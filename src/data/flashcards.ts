export interface Flashcard {
  category: "animals" | "food" | "verbs";
  spanish: string;
  english: string;
  quiz?: {
    type: "multiple-choice";
    options: string[];
  };
}

export const flashcards: Flashcard[] = [
  // Animals
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
      options: ["the cat", "the tree", "the dog", "the car"],
    },
  },
  {
    category: "animals",
    spanish: "el pájaro",
    english: "the bird",
    quiz: {
      type: "multiple-choice",
      options: ["the fish", "the bird", "the snake", "the mouse"],
    },
  },
  // Food
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
    category: "food",
    spanish: "el agua",
    english: "the water",
    quiz: {
      type: "multiple-choice",
      options: ["the juice", "the wine", "the water", "the coffee"],
    },
  },
  // Verbs
  {
    category: "verbs",
    spanish: "comer",
    english: "to eat",
    quiz: {
      type: "multiple-choice",
      options: ["to sleep", "to drink", "to eat", "to run"],
    },
  },
  {
    category: "verbs",
    spanish: "beber",
    english: "to drink",
    quiz: {
      type: "multiple-choice",
      options: ["to sing", "to dance", "to drink", "to read"],
    },
  },
  {
    category: "verbs",
    spanish: "correr",
    english: "to run",
    quiz: {
      type: "multiple-choice",
      options: ["to walk", "to jump", "to swim", "to run"],
    },
  },
];
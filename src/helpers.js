import { words } from "./words";

// constant values

export const LETTERS_MAX = 5;
export const ANSWER_GUESS = 6;

// colors bg letters

export const BG_LETTERS = {
  empty: "#384e78",
  wrong: "#e06c78",
  regular: "#eeb462",
  correct: "#6aab9c",
};

// make a wordle syntax

const pickRandom = (arr) => {
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum].split("");
};

// uppercase

export const upperFunction = () => {
  const word = pickRandom(words);
  const upperWord = word.map((letter) => letter.toUpperCase());

  return upperWord;
};

export const transformWord = (word) => {
  const newWord = word.split("");
  return newWord.map((letter) => letter.toUpperCase());
};

export const replaceItem = (arr, sample) => {
  let i = 0;

  if (arr.length === 6) {
    arr[i] = sample;
    i++;
  }
};

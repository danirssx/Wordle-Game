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

export const valueCheck = (value, check, i) => {
  const checkCorrect = value[i].array.every(
    (letter, index) => letter === check[index]
  );

  const checkRegularTest = value[i].array.map((letter) => {
    return check.includes(letter);
  });

  const checkRegular = !checkRegularTest.every((letter) => letter == false);

  if (checkCorrect) {
    value[i].status = "correct";
  } else if (checkRegular) {
    value[i].status = "regular";
  } else {
    value[i].status = "wrong";
  }
};

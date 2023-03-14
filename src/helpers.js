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

// borrow spaces

export function removeSpaces(input) {
  return (input.value = input.value.trim());
}

// Empty Columns

export const EMPTY_COLUMNS = () => {
  return [
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
  ];
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

  let arrayValues = [];

  value[i].array.map((letter) => {
    if (check.includes(letter)) {
      const count = reduceFunction(check, letter);
      // arrayValues.push(letter);
      if (!arrayValues.includes(letter)) {
        arrayValues.push(...Array(count).fill(letter));
        value[i].values = { array: arrayValues, count: count };
      }
      return true;
    } else {
      return false;
    }
    // return check.includes(letter);
  });

  if (checkCorrect) {
    value[i].status = "correct";
  } else {
    value[i].status = "wrong";
  }
};

// Reduce method

export const reduceFunction = (array, letter) => {
  return array?.reduce((accumulator, currentValue) => {
    return currentValue === letter ? accumulator + 1 : accumulator;
  }, 0);
};

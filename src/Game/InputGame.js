import React, { useState } from "react";
import {
  LETTERS_MAX,
  ANSWER_GUESS,
  transformWord,
  valueCheck,
  EMPTY_COLUMNS,
} from "../helpers";

function InputGame({
  inputValue,
  setInputValue,
  wordArr,
  countInput,
  countInputHandler,
  setEmptyValues,
  columns,
  changeColumnHandler,
  setWinAdvice,
  winAdvice,
  setLooseAdvice,
  looseAdvice,
}) {
  const changeColumn = (e) => {
    e.preventDefault();
    const newColumn = columns;

    if (countInput < ANSWER_GUESS) {
      if (inputValue.length === LETTERS_MAX) {
        newColumn[countInput].array = transformWord(inputValue);
        setEmptyValues(true);

        valueCheck(newColumn, wordArr, countInput);

        changeColumnHandler(newColumn);
        countInputHandler(countInput + 1);

        console.log(columns);

        // reset Handler
        if (
          JSON.stringify(columns[countInput].array) == JSON.stringify(wordArr)
        ) {
          setWinAdvice(true);
        }
        if (countInput === 5) {
          setLooseAdvice(true);
        }
      } else {
        alert("You must introduce a correct value (5 letters)");
      }
    }
  };

  return (
    <form
      className="items-center text-center font-sans "
      onSubmit={changeColumn}
    >
      {!winAdvice && !looseAdvice && (
        <div>
          <p className=" text-2xl font-medium mb-2 text-slate-400 ">
            5 letters
          </p>
          <input
            type="text"
            placeholder="type a word"
            className=" rounded-md border-4 text-2xl p-2 font-normal text-center"
            value={inputValue}
            onChange={(e) => {
              const newValue = e.target.value;
              setInputValue(newValue);
              setEmptyValues(false);
            }}
          />
        </div>
      )}
    </form>
  );
}

export default InputGame;

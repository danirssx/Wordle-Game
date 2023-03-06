import React, { useState } from "react";
import { LETTERS_MAX, ANSWER_GUESS, transformWord } from "../helpers";

let i = 0;

function Input({
  inputValue,
  setInputValue,
  emptyValues,
  setEmptyValues,
  columns,
  changeColumnHandler,
}) {
  const changeColumn = (e) => {
    e.preventDefault();
    const newColumn = columns;

    if (i < ANSWER_GUESS) {
      if (inputValue.length === LETTERS_MAX) {
        newColumn[i] = transformWord(inputValue);
        setEmptyValues(true);

        changeColumnHandler(newColumn);

        i++;
        console.log(i);
      } else {
        alert("You must introduce a correct value");
      }
    } else {
      alert("You Win!");
    }
  };

  return (
    <form
      className="items-center text-center font-sans "
      onSubmit={changeColumn}
    >
      <p className=" text-2xl font-medium mb-2 text-slate-400 ">5 letters</p>
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
    </form>
  );
}

export default Input;

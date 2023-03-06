import React, { useState } from "react";

function Input({
  wordArr,
  inputValue,
  setInputValue,
  columns,
  changeColumnHandler,
}) {
  const changeColumn = (e) => {
    e.preventDefault();
    const newColumn = columns;
    newColumn[0] = wordArr;
    changeColumnHandler(newColumn);
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
        className=" rounded-md border-4 text-2xl p-2 font-normal text-center text-slate-800"
        value={inputValue}
        onChange={(e) => {
          const newValue = e.target.value;
          setInputValue(newValue);
        }}
      />
    </form>
  );
}

export default Input;

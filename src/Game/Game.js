import React, { useState } from "react";

function Game({ columns, changeColumnHandler }) {
  return (
    <>
      <div className="p-4">
        {columns.map((item, i) => {
          return (
            <ol key={i} className="flex justify-center p-1">
              {item.map((letter, i) => {
                return (
                  <li
                    key={i}
                    className="font-sans font-bold text-center text-5xl my-[2px] m-[2px] items-center w-[62px] h-[62px] border-2  text-black rounded-lg "
                  >
                    {letter}
                  </li>
                );
              })}
            </ol>
          );
        })}
        {/* {wordArr.map((letter, i) => {
          return (
            <li key={i} className="font-bold text-5xl bg-slate-600 text-white">
              {letter}
            </li>
          );
        })} */}
      </div>
    </>
  );
}

export default Game;

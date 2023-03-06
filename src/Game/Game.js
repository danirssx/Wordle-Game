import React, { useState } from "react";

function Game({ wordArr, columns }) {
  return (
    <div className="p-4">
      {columns.map((item, i) => {
        return (
          <ol
            key={i}
            className="flex justify-center p-1 items-center md:space-x-3"
          >
            {item.map((letter, i) => {
              console.log(letter);
              return (
                <li
                  key={i}
                  className="font-bold text-5xl p-8 bg-slate-600 text-white rounded-md "
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
  );
}

export default Game;

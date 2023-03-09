import React, { useState } from "react";
import { BG_LETTERS } from "../helpers";

let valueEmpty = true;
const valueTest = ["C", "L", "A", "R", "O"];

function Game({ emptyValues, change, columns }) {
  return (
    <>
      <div className="p-4">
        {columns.map((item, i) => {
          const bgStyles = {
            backgroundColor:
              item.status === "correct"
                ? BG_LETTERS.correct
                : BG_LETTERS.wrong && item.status === "regular"
                ? BG_LETTERS.regular
                : BG_LETTERS.wrong,
          };
          return (
            <ol key={i} className="flex justify-center p-1">
              {item.array.map((letter, i, array) => {
                return (
                  <li
                    key={i}
                    style={letter !== "" ? bgStyles : {}}
                    className="font-sans font-bold text-center text-5xl my-[2px] m-[2px] items-center w-[62px] h-[62px] border-2 text-white rounded-lg "
                  >
                    {letter}
                  </li>
                );
              })}
            </ol>
          );
        })}
      </div>
    </>
  );
}

export default Game;

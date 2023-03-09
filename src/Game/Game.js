import React, { useState } from "react";
import { BG_LETTERS } from "../helpers";

let valueEmpty = true;
const valueTest = ["C", "L", "A", "R", "O"];

function Game({ columns, wordArr }) {
  return (
    <>
      <div className="p-4">
        {columns.map((item, i) => {
          const bgEmpty = {
            backgroundColor: item.status === "wrong" ? BG_LETTERS.wrong : "",
          };
          const bgWrong = {
            backgroundColor: BG_LETTERS.regular,
          };
          const bgTrue = {
            backgroundColor: BG_LETTERS.correct,
          };
          const bgValues = item?.values;
          return (
            <ol key={i} className="flex justify-center p-1">
              {item.array.map((letter, i, array) => {
                console.log(
                  "letra en cuestion: ",
                  array[i],
                  array[i] === wordArr[i]
                );

                const bgChange = array[i] === wordArr[i] ? bgTrue : bgWrong;

                const normalBg = letter !== "" ? bgChange : {};
                const checkBg = bgValues?.includes(letter);

                // AQUI CASI LISTO

                return (
                  <li
                    key={i}
                    style={checkBg ? normalBg : bgEmpty}
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

import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Game from "../Game/Game";
import InputGame from "../Game/InputGame";
import AdviceHandler from "../Header/AdviceHandler";
import { upperFunction } from "../helpers";

function App() {
  const [boolAdvice, setBoolAdvice] = useState(false);
  const [emptyValues, setEmptyValues] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [columns, setColumns] = useState([
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
    { array: ["", "", "", "", ""], status: "empty" },
  ]);

  const [wordArr, setWordArr] = useState(() => {
    return upperFunction();
  });

  const changeColumnHandler = (value) => {
    console.log("tremendo marico");
    setInputValue("");
    return setColumns(value);
  };

  const changeEmptyHandler = (value) => {
    setEmptyValues(value);
  };

  return (
    <>
      <Header boolAdvice={boolAdvice} setBoolAdvice={setBoolAdvice}></Header>
      {boolAdvice && (
        <AdviceHandler setBoolAdvice={setBoolAdvice} boolAdvice={boolAdvice} />
      )}
      <Game
        columns={columns}
        emptyValues={emptyValues}
        changeEmptyHandler={changeEmptyHandler}
      />
      <InputGame
        wordArr={wordArr}
        inputValue={inputValue}
        setInputValue={setInputValue}
        emptyValues={emptyValues}
        setEmptyValues={setEmptyValues}
        columns={columns}
        setColumns={setColumns}
        changeColumnHandler={changeColumnHandler}
      />
      <footer>
        <p className="text-center place-self-center text-xl font-bold">
          {wordArr}
        </p>
        <Footer />
      </footer>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Game from "../Game/Game";
import InputGame from "../Game/InputGame";
import AdviceHandler from "../Header/AdviceHandler";
import { upperFunction, EMPTY_COLUMNS } from "../helpers";
import WinHandler from "../Game/WinHandler";
import LooseHandler from "../Game/LooseHandler";

function App() {
  const [boolAdvice, setBoolAdvice] = useState(false);
  const [winAdvice, setWinAdvice] = useState(false);
  const [looseAdvice, setLooseAdvice] = useState(false);
  const [emptyValues, setEmptyValues] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [countInput, setCountInput] = useState(0);
  const [columns, setColumns] = useState(EMPTY_COLUMNS());

  const [wordArr, setWordArr] = useState(upperFunction);

  const changeColumnHandler = (value) => {
    setInputValue("");
    return setColumns(value);
  };

  const countInputHandler = (value) => {
    return setCountInput(value);
  };

  const changeEmptyHandler = (value) => {
    setEmptyValues(value);
  };

  const resetHandler = () => {
    setColumns(EMPTY_COLUMNS);
    setInputValue("");
    setCountInput(0);
    setWordArr(upperFunction);
    // check
    console.log(columns);
  };

  return (
    <>
      <Header boolAdvice={boolAdvice} setBoolAdvice={setBoolAdvice}></Header>
      {boolAdvice && (
        <AdviceHandler setBoolAdvice={setBoolAdvice} boolAdvice={boolAdvice} />
      )}
      {winAdvice && (
        <WinHandler
          wordArr={wordArr}
          winAdvice={winAdvice}
          setWinAdvice={setWinAdvice}
          resetHandler={resetHandler}
        ></WinHandler>
      )}
      {looseAdvice && (
        <LooseHandler
          wordArr={wordArr}
          looseAdvice={looseAdvice}
          setLooseAdvice={setLooseAdvice}
          resetHandler={resetHandler}
        ></LooseHandler>
      )}
      <Game
        columns={columns}
        wordArr={wordArr}
        emptyValues={emptyValues}
        changeEmptyHandler={changeEmptyHandler}
      />
      <InputGame
        wordArr={wordArr}
        inputValue={inputValue}
        setInputValue={setInputValue}
        emptyValues={emptyValues}
        countInput={countInput}
        countInputHandler={countInputHandler}
        setEmptyValues={setEmptyValues}
        columns={columns}
        setColumns={setColumns}
        changeColumnHandler={changeColumnHandler}
        setWinAdvice={setWinAdvice}
        winAdvice={winAdvice}
        setLooseAdvice={setLooseAdvice}
        looseAdvice={looseAdvice}
      />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Game from "../Game/Game";
import InputGame from "../Game/InputGame";
import AdviceHandler from "../Header/AdviceHandler";
import { upperFunction } from "../helpers";

function App() {
  const [boolAdvice, setBoolAdvice] = useState(false);
  const [boolApp, setBoolApp] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [columns, setColumns] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const [wordArr, setWordArr] = useState(() => {
    return upperFunction();
  });
  const changeColumnHandler = (value) => {
    console.log("tremendo marico");
    setInputValue("");
    return setColumns(value);
  };

  return (
    <>
      <Header boolAdvice={boolAdvice} setBoolAdvice={setBoolAdvice}></Header>
      {boolAdvice && (
        <AdviceHandler setBoolAdvice={setBoolAdvice} boolAdvice={boolAdvice} />
      )}
      {boolApp && <p>HOLAAAAA</p>}
      <Game
        wordArr={wordArr}
        inputValue={inputValue}
        setInputValue={setInputValue}
        columns={columns}
        setColumns={setColumns}
      />
      <InputGame
        wordArr={wordArr}
        inputValue={inputValue}
        setInputValue={setInputValue}
        columns={columns}
        setColumns={setColumns}
        changeColumnHandler={changeColumnHandler}
      />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

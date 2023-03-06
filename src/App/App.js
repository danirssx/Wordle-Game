import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Game from "../Game/Game";
import AdviceHandler from "../Header/AdviceHandler";
import { upperFunction } from "../helpers";

function App() {
  const [boolAdvice, setBoolAdvice] = useState(false);
  const [boolApp, setBoolApp] = useState(false);
  const [columns, setColumns] = useState([
    ["D", "A", "N", "I", "X"],
    ["R", "A", "T", "A", "S"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const [wordArr, setWordArr] = useState(() => {
    return upperFunction();
  });

  console.log(wordArr);

  return (
    <>
      <Header boolAdvice={boolAdvice} setBoolAdvice={setBoolAdvice}></Header>
      {boolAdvice && (
        <AdviceHandler setBoolAdvice={setBoolAdvice} boolAdvice={boolAdvice} />
      )}
      <Game wordArr={wordArr} columns={columns} setColumns={setColumns} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

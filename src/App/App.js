import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AdviceHandler from "../Header/AdviceHandler";

function App() {
  const [boolAdvice, setBoolAdvice] = useState(false);

  return (
    <>
      <Header boolAdvice={boolAdvice} setBoolAdvice={setBoolAdvice}></Header>
      {boolAdvice && (
        <AdviceHandler setBoolAdvice={setBoolAdvice} boolAdvice={boolAdvice} />
      )}
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;

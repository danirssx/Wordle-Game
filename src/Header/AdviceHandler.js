import React, { Fragment, useState } from "react";
import Card from "../Card/Card";

const textAdvice = `El objetivo de Wordle es adivinar una palabra de cinco letras en seis
intentos o menos. El jugador recibe un conjunto de espacios en blanco
que representan las letras de la palabra. Luego tienen que adivinar
una palabra que coincida con la palabra oculta.`;

function AdviceHandler({ setBoolAdvice, boolAdvice }) {
  return (
    <Card>
      <div className="mt-3 items-center justify-center flex-none mx-auto p-6">
        <h1 className="leading-relaxed text-center p-3 pt-0 text-3xl font-bold text-slate-600">
          Wordle Description
        </h1>
        <p className="text-slate-800 justify-center text-center ">
          {textAdvice}
        </p>
      </div>
      <div className="text-right pr-11">
        <button
          className="button1 text-lg"
          onClick={() => {
            setBoolAdvice(!boolAdvice);
          }}
        >
          Ok
        </button>
      </div>
    </Card>
  );
}

export default AdviceHandler;

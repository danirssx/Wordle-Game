import React, { Fragment, useState } from "react";

const textAdvice = `El objetivo de Wordle es adivinar una palabra de cinco letras en seis
intentos o menos. El jugador recibe un conjunto de espacios en blanco
que representan las letras de la palabra. Luego tienen que adivinar
una palabra que coincida con la palabra oculta.`;

function AdviceHandler({ setBoolAdvice, boolAdvice }) {
  return (
    <>
      <div className=" fixed inset-0 z-10 overflow-y-auto font-sans backdrop-blur-md">
        <div className="fixed inset-0 w-full h-full bg-black opacity-80">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default AdviceHandler;

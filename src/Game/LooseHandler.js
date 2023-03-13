import React from "react";
import Card from "../Card/Card";

function LooseHandler({ wordArr, resetHandler, setLooseAdvice, looseAdvice }) {
  return (
    <Card>
      <div className="mt-3 items-center justify-center flex-none mx-auto p-6">
        <p className="leading-relaxed text-center p-3 pt-0 text-3xl font-bold text-slate-600">
          Perdiste!, Intentalo de nuevo...
        </p>
        <p className=" button1 justify-center font-bold text-xl text-center ">
          {wordArr}
        </p>
      </div>
      <div className="text-right pr-11">
        <button
          className="button1 text-lg"
          onClick={() => {
            setLooseAdvice(!looseAdvice);
            resetHandler();
          }}
        >
          Next
        </button>
      </div>
    </Card>
  );
}

export default LooseHandler;

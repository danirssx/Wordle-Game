import React from "react";
import Card from "../Card/Card";

function WinHandler({ wordArr, setWinAdvice, winAdvice, resetHandler }) {
  return (
    <Card>
      <div className="mt-3 items-center justify-center flex-none mx-auto p-6">
        <p className="leading-relaxed text-center p-3 pt-0 text-3xl font-bold text-slate-600">
          Ganaste!
        </p>
        <p className=" button1 justify-center font-bold text-xl text-center ">
          {wordArr}
        </p>
      </div>
      <div className="text-right pr-11">
        <button
          className="button1 text-lg"
          onClick={() => {
            setWinAdvice(!winAdvice);
            resetHandler();
          }}
        >
          Next
        </button>
      </div>
    </Card>
  );
}

export default WinHandler;

import React, { useState } from "react";
import AdviceHandler from "./AdviceHandler";

function Header({ boolAdvice, setBoolAdvice }) {
  return (
    <div>
      <div className="header">
        <div className="grid grid-rows-2 font-semibold text-md ">
          <div>
            <a
              href="https://www.instagram.com/danirssx/"
              className="hover:opacity-70"
            >
              Instagram
            </a>
          </div>
          <div>
            <a
              href="https://www.behance.net/danielross8"
              className="hover:opacity-70"
            >
              Behance
            </a>
          </div>
        </div>
        <h1 className=" h1 text-3xl md:text-5xl ">Wordle</h1>
        <div className="text-right">
          <button
            className="button1"
            onClick={() => {
              setBoolAdvice(!boolAdvice);
            }}
          >
            Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

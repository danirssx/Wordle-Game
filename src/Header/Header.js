import React, { useState } from "react";
import AdviceHandler from "./AdviceHandler";

function Header({ boolAdvice, setBoolAdvice }) {
  return (
    <div>
      <div className="header">
        <div className="grid font-semibold ">
          <div className="space-x-3">
            <a
              href="https://www.instagram.com/danirssx/"
              className="hover:opacity-70"
            >
              Instagram
            </a>
            <a
              href="https://www.behance.net/danielross8"
              className="hover:opacity-70"
            >
              Behance
            </a>
          </div>
        </div>
        <h1 className=" h1 ">Wordle</h1>
        <div className="text-right">
          <button
            className="button1"
            onClick={() => {
              setBoolAdvice(!boolAdvice);
            }}
          >
            Help
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

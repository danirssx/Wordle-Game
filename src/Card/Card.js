import React from "react";

function Card({ children }) {
  return (
    <div className=" fixed inset-0 font-sans backdrop-blur-[2px]">
      <div className="fixed inset-0 w-full h-full">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;

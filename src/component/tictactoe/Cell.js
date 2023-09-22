import React from "react";

const Cell = ({ value, onClick, className }) => {
  return (
    <div
      className={`game-cell ${value != null && value === "X" ? "x" : "o"}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Cell;

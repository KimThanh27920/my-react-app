import React from "react";

const CellReducer = ({ value, onClick, className }) => {
  return (
    <div
      className={`game-cell ${value != null && value === "X" ? "x" : "o"}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default CellReducer;

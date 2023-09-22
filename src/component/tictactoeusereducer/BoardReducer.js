import React from "react";
import CellReducer from "./CellReducer";

const BoardReducer = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <CellReducer
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
        ></CellReducer>
      ))}
    </div>
  );
};

export default BoardReducer;

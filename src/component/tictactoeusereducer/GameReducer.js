import React, { useReducer } from "react";
import "./GameStyles.css";
import { calculateWinner } from "./helpers";
import BoardReducer from "./BoardReducer";

const initializeState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board.index) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }

    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(initializeState));
      return nextState;
    }

    default:
      break;
  }
  return state;
};

const GameReduder = () => {
  const [state, dispatch] = useReducer(gameReducer, initializeState);

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div>
      <BoardReducer cells={state.board} onClick={handleClick}></BoardReducer>
      {winner ? (
        <div className="game-winner">
          {" "}
          Winner is {state.xIsNext ? "O" : "X"}
        </div>
      ) : (
        ""
      )}

      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default GameReduder;

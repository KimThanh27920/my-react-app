import React, { useState } from "react";
import "./GameStyles.css";
import Board from "./Board";
import { calculateWinner } from "./helpers";

const Game = () => {
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //   const [xIsNext, setXIsNext] = useState(true);
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // setXIsNext(!state.xIsNext);
    setState({ board: boardCopy, xIsNext: !state.xIsNext });
  };

  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    setState({ board: Array(9).fill(null), xIsNext: true });
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
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

export default Game;

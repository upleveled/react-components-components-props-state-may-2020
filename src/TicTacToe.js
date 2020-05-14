import React, { useState } from 'react';
import { Board } from './Board';

export default function TicTacToe(props) {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    // Lifting Up State
    // 3. Change `history` to `props.history`
    const historyDerived = props.history.slice(0, stepNumber + 1);
    const current = historyDerived[historyDerived.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    // Lifting Up State
    // 3. Change `setHistory` to `props.setHistory`
    props.setHistory(
      historyDerived.concat([
        {
          squares: squares,
        },
      ]),
    );
    setStepNumber(historyDerived.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  // Lifting Up State
  // 3. Change `history` to `props.history`
  const current = props.history[stepNumber];
  const winner = calculateWinner(current.squares);

  // Lifting Up State
  // 3. Change `history` to `props.history`
  const moves = props.history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <details>
        <summary>Game Info</summary>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </details>
    </div>
  );
}

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

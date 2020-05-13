import React, { useState } from 'react';
import logo from './logo.svg';
import Counter from './Counter.js';
import Form from './Form-class-component';
import TicTacToe from './TicTacToe';
import Statistics from './Statistics';

const colors = ['blue', 'green', 'turquoise', 'tomato'];

export default function Header(props) {
  console.log(props); // {darkMode: true}
  console.log(props.darkMode); // true

  // Lifting Up State
  // 1. Cut and paste state variable from child
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);

  const [color, setColor] = useState('tomato');

  return (
    <header
      style={{
        backgroundColor: color,
      }}
      className="App-header"
    >
      <img src={logo} className="App-logo" alt="logo" />

      <button
        onClick={() => {
          const randomIndex =
            // Round down so that we get 0-index
            Math.floor(
              // Get a random number
              Math.random() *
                // And multiply by the length of the array
                colors.length,
            );

          setColor(colors[randomIndex]);
        }}
        style={{ border: '2px solid turquoise' }}
      >
        Change color
      </button>

      <p>
        Dark mode is:{' '}
        {
          // Curly brace: we are in JavaScript expression
          // Test if darkMode is true
          props.darkMode === true
            ? // If darkMode is true, return `on`
              'on'
            : // If darkMode isn't true, `off`
              'off'
        }
      </p>
      <Counter />

      <Form
        onSubmit={function onSubmit(email) {
          alert('Thanks for submitting, ' + email);
        }}
      />

      <h1>Tic Tac Toe</h1>
      <TicTacToe
        // Lifting Up State
        // 2. Pass in `history` and `setHistory` as props to the original child
        history={history}
        setHistory={setHistory}
      />

      <h1>Game Statistics</h1>
      <Statistics
        // Lifting Up State
        // 4. Pass state to any further children that need it
        numberOfMoves={history.length - 1}
      />
    </header>
  );
}

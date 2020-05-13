import React, { useState } from 'react';
import logo from './logo.svg';
import Counter from './Counter.js';
import Form from './Form-class-component';
import TicTacToe from './TicTacToe';

const colors = ['blue', 'green', 'turquoise', 'tomato'];

export default function Header(props) {
  console.log(props); // {darkMode: true}
  console.log(props.darkMode); // true

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
    </header>
  );
}

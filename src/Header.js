import React from 'react';
import logo from './logo.svg';
import Counter from './Counter.js';
import Form from './Form';

export default function Header(props) {
  console.log(props); // {darkMode: true}
  console.log(props.darkMode); // true
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
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

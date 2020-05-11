import React, { useState } from 'react';

export default function Form({ onSubmit }) {
  // Controlled Component
  // Step 1: Declare a state variable
  const [email, setEmail] = useState('');

  // Run a function when a user changes
  // the value in the input
  const onChange = (event) => {
    console.log('onChange', event.target.value);
    // Step 2: Update the value with whatever the user types in the box
    setEmail(event.target.value);
  };

  return (
    <div>
      <label>
        Sign up for our newsletter
        <input
          type="email"
          onChange={onChange}
          // Step 3: Show the current value of email
          value={email}
        />
      </label>

      <button type="button" onClick={() => onSubmit(email)}>
        Sign up!
      </button>

      <p>{email}</p>
    </div>
  );
}

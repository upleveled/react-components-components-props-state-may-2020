import React, { useState } from 'react';

// Keep track of the count of the counter
export default function Counter() {
  // This is similar to the following code:
  // const count = 0;
  const [count, setCount] = useState(0);

  return (
    <>
      {count}

      <button
        onClick={() => {
          // This is like the following code
          // count = count + 1;
          // count++;
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // This is like the following code
          // count = count - 1;
          // count--;
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
}

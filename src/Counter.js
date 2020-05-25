// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const bgColor = 'lightgray';

const Button = (props) => {
  console.log(props.tooHigh);

  const { tooHigh, ...elementProps } = props;
  return (
    <button
      css={css`
        font-size: 3rem;
        padding: 1.5rem;
        border-radius: 8px;
        background-color: ${//
        // condition ? whatYouGetIfItsTrue : whatYouGetIfItsFalse
        props.tooHigh === true ? 'red' : bgColor};

        & + * {
          margin-left: 20px;
        }
      `}
      {...elementProps}
    />
  );
};

// Keep track of the count of the counter
export default function Counter() {
  // This is similar to the following code:
  // const count = 0;
  const [count, setCount] = useState(0);

  return (
    <>
      {count}

      <div
        css={css`
          display: flex;
          margin: 2rem;
        `}
      >
        <Button
          onClick={() => {
            // This is like the following code
            // count = count + 1;
            // count++;
            setCount(count + 1);
          }}
          tooHigh={count > 5}
        >
          +
        </Button>
        <Button
          onClick={() => {
            // This is like the following code
            // count = count - 1;
            // count--;
            setCount(count - 1);
          }}
          tooHigh={count > 5}
        >
          -
        </Button>
      </div>
    </>
  );
}

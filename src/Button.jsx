import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const buttonStyle = (appearance = 'default') => css`
  background-color: ${{
    primary: 'green',
    danger: 'red',
    default: 'gray',
  }[appearance]};
`;

export default function Button(props) {
  console.log('props', props);
  return <button css={buttonStyle(props.appearance)}>{props.children}</button>;
}

Button.propTypes = {
  appearance: PropTypes.oneOf(['primary', 'danger']),
};

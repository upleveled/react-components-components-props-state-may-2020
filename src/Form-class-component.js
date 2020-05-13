import React from 'react';

export default class Form extends React.Component {
  // Controlled Component
  // Step 1: Declare a state variable
  state = { email: '' };

  // Run a function when a user changes
  // the value in the input
  onChange = (event) => {
    // Step 2: Update the value with whatever the user types in the box
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <label>
          Sign up for our newsletter
          <input
            type="email"
            onChange={this.onChange}
            // Step 3: Show the current value of email
            value={this.state.email}
          />
        </label>

        <button
          type="button"
          onClick={() => this.props.onSubmit(this.state.email)}
        >
          Sign up!
        </button>

        <p>{this.state.email}</p>
      </div>
    );
  }
}

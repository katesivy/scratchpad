import React from 'react';


// const React = require('react');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    
    this.incrementButton = this.incrementButton.bind(this);
    this.decrementButton = this.decrementButton.bind(this);
  }
  
  incrementButton(props) {
    this.setState({ counter: this.counter + 1 });
  }
  decrementButton(props) {
    this.setState({ counter: this.counter - 1 });
  }

  render() {
    
    return (
      <div>
        <h1 id="counter">Count = {this.state.counter}</h1>
        <button type="button" id="decrement"
          onClick={() => this.decrementButton}>
          Decrement
            </button>
        <button type="button" id="increment"
          onClick={() => this.incrementButton}>
          Increment
            </button>
      </div>
    )
  }
}


export default Counter;


// export default Katas;
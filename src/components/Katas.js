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
  
  incrementButton(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrementButton(e) {
    this.setState({ counter: this.state.counter - 1 });
  }

  render(props) {
    
    return (
      <div>
        <h1 id="counter">Count = {this.state.counter || 0}</h1>
        <button type="button" id="decrement"
          onClick={() => this.state.decrementButton}>
          Decrement
            </button>
        <button type="button" id="increment"
          onClick={() => this.state.incrementButton}>
          Increment
            </button>
      </div>
    )
  }
}


export default Counter;


// export default Katas;
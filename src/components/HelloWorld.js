import React from 'react';

// function HelloWorld() {
//     const name = 'Josh'
//     return (
//         <h1>Hello, {name}!</h1>

//     )
// }

// function SayHi() {
//     const name = 'Mary'
//     return (
//         <h1>Hello, {name}!</h1>

//     )
// }
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }


// componentDidMount() {
//   this.timerID = setInterval(
//     () => this.tick(),
//     1000
//   );
// }

// componentWillUnmount() {
//   clearInterval(this.timerID);
// }

// tick() {
//   this.setState({
//     date: new Date()
//   });
// }
// render() {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// }

// setInterval(tick, 1000);
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

//   function App() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }


// const React = require('react');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // let counter = (
    //   <div id="counter">
       
    //   </div> 
    // );

this.setState((state, props) => ({
  counter: state.counter + props.incrementButton
}));
    
  }


  incrementButton(props) {
    this.setState({ counter: this.counter++});
  }
  decrementButton(props) {
    this.setState({ counter: this.counter--});
  }

  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
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

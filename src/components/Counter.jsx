import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log(`Call back value`, this.state.count)
    // );
    this.setState((prevState) => ({ //2nd argument of the arrow function is props
      count: prevState.count + 1,
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <h3>Count- {this.state.count}</h3>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;

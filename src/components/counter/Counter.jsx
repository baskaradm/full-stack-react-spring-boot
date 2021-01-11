import React, { Component } from "react";
import "./Counter.css";
import CounterButton from "../counter/CounterButton";
class Counter extends Component {
  constructor() {
    super(); //Error1
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }
  render() {
    return (
      <div className="counter">
        <CounterButton by={1} incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
  increment(by) {
    //console.log(`increment from child ${by}`);
    this.setState({
      counter: this.state.counter + by,
    });
  }
}

export default Counter;

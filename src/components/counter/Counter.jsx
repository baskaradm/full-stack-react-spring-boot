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
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  render() {
    return (
      <div className="counter">
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
  increment(by) {
    //console.log(`increment from child ${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  }

  decrement(by) {
    //console.log(`increment from child ${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  }
  reset() {
    this.setState({
      counter: 0,
    });
  }
}

export default Counter;

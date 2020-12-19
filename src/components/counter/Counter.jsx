import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  //Define the initial state in constructor
  //state => counter 0
  constructor() {
    super(); //Error1
    this.state = {
      counter: 0,
    };
    //If we want use this in method in react js we must bind this
    //to inncrement method in class
    this.increment = this.increment.bind(this);
  }
  //When you use arrow function you don't need to binding this variable
  //because this is binding automatically
  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
  increment() {
    //Update state - counter++
    //console.log("increment");

    //If we want use this in method in  react js we must bind this
    //to inncrement method in class

    //update state via setState not directly this.state.counter++;Bad practice
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default Counter;

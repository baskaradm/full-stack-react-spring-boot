import React, { Component } from "react";
import PropTypes from "prop-types";

class CounterButton extends Component {
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
    this.decrement = this.decrement.bind(this);
  }
  //When you use arrow function you don't need to binding this variable
  //because this is binding automatically
  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    );
  }
  increment() {
    this.setState((prevState) => {
      return { counter: prevState.counter + this.props.by };
    });
    this.props.incrementMethod(this.props.by);
  }
  decrement() {
    this.setState((prevState) => {
      return { counter: prevState.counter - this.props.by };
    });
    this.props.decrementMethod(this.props.by);
  }
}
CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default CounterButton;

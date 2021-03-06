import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "in28minutes",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  /* handleUserNameChange(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  } */
  loginClicked() {
    if (
      this.state.username === "in28minutes" &&
      this.state.password === "dummy"
    ) {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);

      //this.setState({ showSuccessMessage: true });
      //this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {/*   <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
          {/* if this.state.hasLoginFailed ===true return Invalid Credentials*/}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {/* <ShowLoginSucessMessage
          showSuccessMessage={this.state.showSuccessMessage}
        /> */}
          {this.state.showSuccessMessage && <div>Login Sucessfull</div>}
          User Name:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
/* function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credentials</div>;
  } else return null;
}
function ShowLoginSucessMessage(props) {
  if (props.showSuccessMessage) {
    return <div>Login Sucessful</div>;
  } else {
    return null;
  }
} */
export default LoginComponent;
